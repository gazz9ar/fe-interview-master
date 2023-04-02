import { ChangeDetectorRef } from '@angular/core';
import { distinct, map, mergeAll, switchMap } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import { Unsub } from 'src/app/core/Unsubscription/Unsub';
import { Game, GameMockClient } from 'src/app/shared';
import { GamesService } from '../../services/games.service';


export interface gameFilter {
  gamesNames: string;
  gamesProviders: string[]
}


@Component({
  selector: 'games-filters',
  templateUrl: './games-filters.component.html',
  styleUrls: ['./games-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesFiltersComponent extends Unsub implements OnInit  {

  @Output('onSearch') onSearchEmitter = new EventEmitter<gameFilter>();
  filtersForm!: FormGroup;
  providers:string[] = [];
  selectedProviders:string[] = [];
  allProviders:string[] = [];
  
  public get gamesNamesControl() : AbstractControl | null {    
    return this.filtersForm.get('gamesNames');
  }

  public get gamesProvidersControl() : AbstractControl | null {    
    return this.filtersForm.get('gamesProviders');
  }
  
  constructor(
    private _formBuilder:FormBuilder,
    public gameMockClient: GameMockClient,
    private gamesService:GamesService
    ) { 
      super();
    }

  ngOnInit(): void {
   this.getProviders();
   this.setForm();
   this.searchGamesByTitle();
   this.searchGamesByProvider();
   this.checkLocalStorageFilters();
  }

  getProviders(): void {  
    this.providers = [];
    this.allProviders = [];
    this.gameMockClient.getProviders$()
    .pipe(
      mergeAll(),
      distinct((provider:string) => (provider))   
    )
    .subscribe( (provider) => {     
      this.providers.push(provider);      
      this.allProviders.push(provider);
    })
  }

  setForm(): void {
    this.filtersForm = this._formBuilder.group({
      gamesNames: '',
      gamesProviders: [Array.from([])]
    });
  }
 
  searchGamesByTitle(): void {   
     //user types something 
    this.gamesNamesControl?.valueChanges
    .pipe(
     takeUntil(this.unsubscribe$),
     debounceTime(500),
     switchMap((filterValue:string) => {     
      //obtain filtered games array
        return this.gameMockClient.getFilteredGames$({gamesNames: filterValue, gamesProviders: this.selectedProviders})
        .pipe(
        tap((filteredGames:Game[]) => {
          this.gamesService.setCurrentFilterInLocalStorage({gamesNames: filterValue, gamesProviders: this.selectedProviders});
          if(filterValue !== ''){                    
            this.providers = this.allProviders.filter( (provider) => (filteredGames.find( (game:Game) => (game.providerName === provider))));            
          } else {
            this.getProviders();
          }          
        })       
       )     
     })
    ).subscribe(
      () => {         
        this.onSearchEmitter.emit({gamesNames: this.gamesNamesControl?.value, gamesProviders: this.selectedProviders});   
      }
    );    
  }
 
  searchGamesByProvider(): void {
    this.gamesProvidersControl?.valueChanges
    .pipe(
      takeUntil(this.unsubscribe$),
    )
    .subscribe(
      (selectedProvider:string) => {                 
        if(selectedProvider != 'Select a provider'){        
          if(this.selectedProviders.indexOf(selectedProvider) === -1){
            this.selectedProviders.push(selectedProvider);    
            this.onSearchEmitter.emit({gamesNames: this.gamesNamesControl?.value, gamesProviders: this.selectedProviders});
            this.gamesService.setCurrentFilterInLocalStorage({gamesNames: this.gamesNamesControl?.value, gamesProviders: this.selectedProviders});
          }  
          this.gamesProvidersControl?.setValue('Select a provider')  
        }        
      }
    )
  }

  removeProvider(provider:string): void {
      this.selectedProviders = this.selectedProviders.filter( selectedProvider => (selectedProvider !== provider));
      this.onSearchEmitter.emit({gamesNames: this.gamesNamesControl?.value, gamesProviders: this.selectedProviders});
      this.gamesService.setCurrentFilterInLocalStorage({gamesNames: this.gamesNamesControl?.value, gamesProviders: this.selectedProviders});
      this.gameMockClient.getFilteredGames$({gamesNames: this.gamesNamesControl?.value, gamesProviders: this.selectedProviders})
      .pipe(
        takeUntil(this.unsubscribe$),           
      )
      .subscribe(
        (filteredGames:Game[]) => {
          this.providers = this.allProviders.filter( (provider) => (filteredGames.find( (game:Game) => (game.providerName === provider))));          
        }
      )
  }

  clearProviders(): void {
    this.selectedProviders = [];
    // send new emission to searchGamesByTitle
    this.gamesNamesControl?.setValue(this.gamesNamesControl.value);
    this.gamesService.setCurrentFilterInLocalStorage({gamesNames: this.gamesNamesControl?.value, gamesProviders: this.selectedProviders});
  }

  checkLocalStorageFilters(): void {
    const filters = this.gamesService.getFiltersFromLocalStorage();
    if(filters){
      this.gamesNamesControl?.setValue(filters.gamesNames);
      this.selectedProviders = filters.gamesProviders;
    }   
  }

}
