import { ChangeDetectorRef } from '@angular/core';
import { distinct, map, mergeAll } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import { Unsub } from 'src/app/core/Unsubscription/Unsub';
import { Game, GameMockClient } from 'src/app/shared';


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
  selectedProviders:string[] = []
  
  public get gamesNamesControl() : AbstractControl | null {    
    return this.filtersForm.get('gamesNames');
  }

  public get gamesProvidersControl() : AbstractControl | null {    
    return this.filtersForm.get('gamesProviders');
  }
  
  constructor(
    private _formBuilder:FormBuilder,
    public gameMockClient: GameMockClient,
    private _cdRef:ChangeDetectorRef
    ) { 
      super();
    }

  ngOnInit(): void {
   this.getProviders();
   this.setForm();
   this.searchGames();
  }

  getProviders(): void {  
    this.gameMockClient.getProviders$()
    .pipe(
      mergeAll(),
      distinct((provider:string) => (provider))   
    )
    .subscribe( (provider) => {
      this.providers.push(provider);     
    })
  }

  setForm(): void {
    this.filtersForm = this._formBuilder.group({
      gamesNames: '',
      gamesProviders: [Array.from([])]
    });
  }

  searchGames(): void {    
    this.gamesNamesControl?.valueChanges
    .pipe(
     takeUntil(this.unsubscribe$),
     debounceTime(500)
    ).subscribe(
      () => {         
        this.onSearchEmitter.emit({gamesNames: this.gamesNamesControl?.value, gamesProviders: this.selectedProviders});   
      }
    );

    this.gamesProvidersControl?.valueChanges
    .pipe(
      takeUntil(this.unsubscribe$),
    )
    .subscribe(
      (providerSelected:string) => {        
        if(providerSelected != 'Select a provider'){
          if(this.selectedProviders.indexOf(providerSelected) === -1){
            this.selectedProviders.push(providerSelected);    
            this.onSearchEmitter.emit({gamesNames: this.gamesNamesControl?.value, gamesProviders: this.selectedProviders});
          }  
          this.gamesProvidersControl?.setValue('Select a provider')  
        }        
      }
    )
  }

  removeProvider(provider:string): void {
      this.selectedProviders = this.selectedProviders.filter( selectedProvider => (selectedProvider !== provider));
      this.onSearchEmitter.emit({gamesNames: this.gamesNamesControl?.value, gamesProviders: this.selectedProviders});
  }

}
