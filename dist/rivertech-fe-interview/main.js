(self["webpackChunkrivertech_fe_interview"] = self["webpackChunkrivertech_fe_interview"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_Unsubscription_Unsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/Unsubscription/Unsub */ 2205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2663);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5160);
/* harmony import */ var _state_selectors_Games_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/selectors/Games.selectors */ 2841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);









function AppComponent_mat_progress_bar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-bar", 1);
} }
class AppComponent extends src_app_core_Unsubscription_Unsub__WEBPACK_IMPORTED_MODULE_0__.Unsub {
    constructor(_cdRef, store) {
        super();
        this._cdRef = _cdRef;
        this.store = store;
        this.isLoading = false;
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
    }
    ngOnInit() {
        this.subscribeToLoadingService();
    }
    subscribeToLoadingService() {
        this.loading$ = this.store.select(_state_selectors_Games_selectors__WEBPACK_IMPORTED_MODULE_1__.selectLoading);
        this.loading$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.unsubscribe$))
            .subscribe((loading) => {
            this.isLoading = loading;
            this._cdRef.markForCheck();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 1, consts: [["mode", "indeterminate", "id", "progress-bar", 4, "ngIf"], ["mode", "indeterminate", "id", "progress-bar"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_mat_progress_bar_1_Template, 1, 0, "mat-progress-bar", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__.MatProgressBar], styles: ["#progress-bar[_ngcontent-%COMP%] {\n\t\t\tz-index:999;\n\t\t\tposition:fixed;\n\t\t\ttop: 33px;\n\t\t}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0dBQ0MsV0FBVztHQUNYLGNBQWM7R0FDZCxTQUFTO0VBQ1YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuXHRcdCNwcm9ncmVzcy1iYXIge1xuXHRcdFx0ei1pbmRleDo5OTk7XG5cdFx0XHRwb3NpdGlvbjpmaXhlZDtcblx0XHRcdHRvcDogMzNweDtcblx0XHR9XG5cdCJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _state_reducers_Games_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state/reducers/Games.reducer */ 2845);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/pages.module */ 8950);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material/material.module */ 5123);
/* harmony import */ var _core_interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/interceptors/http-error.interceptor */ 2628);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store-devtools */ 2373);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS,
            useClass: _core_interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_4__.HttpErrorInterceptor,
            multi: true
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__.AppPagesModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
            _material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_11__.StoreModule.forRoot({
                games: _state_reducers_Games_reducer__WEBPACK_IMPORTED_MODULE_0__.gamesReducer
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__.StoreDevtoolsModule.instrument({ name: 'REDUX DEVTOOL' })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__.AppPagesModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__.StoreRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__.StoreDevtoolsModule] }); })();


/***/ }),

/***/ 2205:
/*!**********************************************!*\
  !*** ./src/app/core/Unsubscription/Unsub.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Unsub": () => (/* binding */ Unsub)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class Unsub {
    constructor() {
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
Unsub.ɵfac = function Unsub_Factory(t) { return new (t || Unsub)(); };
Unsub.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Unsub, factory: Unsub.ɵfac });


/***/ }),

/***/ 2628:
/*!*************************************************************!*\
  !*** ./src/app/core/interceptors/http-error.interceptor.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpErrorInterceptor": () => (/* binding */ HttpErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);





class HttpErrorInterceptor {
    constructor(router, _snackBar) {
        this.router = router;
        this._snackBar = _snackBar;
    }
    intercept(req, next) {
        return next.handle(req)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(error => {
            if (error.status == 401) {
                this._snackBar.open(`Error ${error.status}: ${error.message}`, 'Close');
                this.router.navigate(['home']);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(error.message);
        }));
    }
}
HttpErrorInterceptor.ɵfac = function HttpErrorInterceptor_Factory(t) { return new (t || HttpErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar)); };
HttpErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HttpErrorInterceptor, factory: HttpErrorInterceptor.ɵfac });


/***/ }),

/***/ 5123:
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ 9243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);














let materialModules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule,
    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBarModule,
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBarModule,
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinnerModule,
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
    _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule,
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipsModule
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            ...materialModules
        ], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBarModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinnerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBarModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinnerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipsModule], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBarModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinnerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipsModule] }); })();


/***/ }),

/***/ 3598:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/components/games/components/game-description/game-description.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameDescriptionComponent": () => (/* binding */ GameDescriptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 7175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);




class GameDescriptionComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.isOpen = false;
        this.game = this.data;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
    toggle() {
        this.isOpen = !this.isOpen;
    }
    playGame(url) {
        window.open(url, "_blank");
    }
}
GameDescriptionComponent.ɵfac = function GameDescriptionComponent_Factory(t) { return new (t || GameDescriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
GameDescriptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameDescriptionComponent, selectors: [["app-game-description"]], decls: 13, vars: 3, consts: [[1, "d-flex", "justify-content-center", "align-items-center", "game-description-wrapper"], [3, "gameToDisplay"], [1, "d-flex", "flex-column", "justify-content-between", "align-items-center", "description"], [1, "fs-4", "ms-4", "casino-text"], ["mat-dialog-actions", ""], ["mat-fab", "", "cdkFocusInitial", "", 1, "play-for-fun-btn", 3, "mouseenter", "mouseleave", "click"], [1, "fs-1", "play-icon"], [1, "play-for-fun-btn__text"]], template: function GameDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "casino-game", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Provider: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function GameDescriptionComponent_Template_button_mouseenter_8_listener() { return ctx.toggle(); })("mouseleave", function GameDescriptionComponent_Template_button_mouseleave_8_listener() { return ctx.toggle(); })("click", function GameDescriptionComponent_Template_button_click_8_listener() { return ctx.playGame(ctx.game.startUrl); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "play_arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Play for fun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gameToDisplay", ctx.game);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.game.providerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@openClose", ctx.isOpen ? "open" : "closed");
    } }, styles: [".description[_ngcontent-%COMP%] {\n  height: 155px;\n}\n.description[_ngcontent-%COMP%]   .play-icon[_ngcontent-%COMP%] {\n  bottom: 24px;\n  position: absolute;\n  left: 9px;\n}\n.description[_ngcontent-%COMP%]   .play-for-fun-btn[_ngcontent-%COMP%] {\n  background: #ed810a;\n  background: linear-gradient(121deg, #ed810a 0%, #f4bb16 50%, #fffe4c 100%);\n  overflow: hidden;\n}\n.description[_ngcontent-%COMP%]   .play-for-fun-btn__text[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 57px;\n  bottom: 16px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7QUFBSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFFUjtBQUFJO0VBQ0ksbUJBQUE7RUFDQSwwRUFBQTtFQUNBLGdCQUFBO0FBRVI7QUFEUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUdaIiwiZmlsZSI6ImdhbWUtZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVzY3JpcHRpb24ge1xyXG4gICAgaGVpZ2h0OiAxNTVweDtcclxuICAgIC5wbGF5LWljb24ge1xyXG4gICAgICAgIGJvdHRvbTogMjRweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogOXB4O1xyXG4gICAgfVxyXG4gICAgLnBsYXktZm9yLWZ1bi1idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyMzcsMTI5LDEwKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIxZGVnLCByZ2JhKDIzNywxMjksMTAsMSkgMCUsIHJnYmEoMjQ0LDE4NywyMiwxKSA1MCUsIHJnYmEoMjU1LDI1NCw3NiwxKSAxMDAlKTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICZfX3RleHQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDU3cHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('openClose', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
                    width: '156px',
                    'border-radius': '7px'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('open => closed', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('0.3s')
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('closed => open', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('0.3s')
                ]),
            ]),
        ] } });


/***/ }),

/***/ 7143:
/*!**************************************************************************!*\
  !*** ./src/app/pages/components/games/components/game/game.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameComponent": () => (/* binding */ GameComponent)
/* harmony export */ });
/* harmony import */ var _game_description_game_description_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game-description/game-description.component */ 3598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/games.service */ 5592);




class GameComponent {
    constructor(dialog, gamesService) {
        this.dialog = dialog;
        this.gamesService = gamesService;
    }
    ngOnInit() {
    }
    openGameDescription(game) {
        this.dialog.open(_game_description_game_description_component__WEBPACK_IMPORTED_MODULE_0__.GameDescriptionComponent, {
            data: game
        });
        this.addToLastPlayedGameList(game);
    }
    addToLastPlayedGameList(game) {
        this.gamesService.addLastPlayedGame(game);
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_games_service__WEBPACK_IMPORTED_MODULE_1__.GamesService)); };
GameComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["casino-game"]], inputs: { game: ["gameToDisplay", "game"] }, decls: 3, vars: 3, consts: [[1, "position-relative", "game-wrapper", 3, "click"], [1, "hover-bg"], [1, "img-fluid", "game-img", 3, "src", "alt", "title"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GameComponent_Template_div_click_0_listener() { return ctx.openGameDescription(ctx.game); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", (tmp_0_0 = ctx.game.thumb.url) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "assets/images/casino.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", (tmp_1_0 = ctx.game.thumb.title) !== null && tmp_1_0 !== undefined ? tmp_1_0 : ctx.game.title)("title", (tmp_2_0 = ctx.game.thumb.title) !== null && tmp_2_0 !== undefined ? tmp_2_0 : ctx.game.title);
    } }, styles: [".game-wrapper[_ngcontent-%COMP%] {\n  width: 280px;\n  box-shadow: 0px 1px 19px 3px rgba(0, 0, 0, 0.75);\n  border-radius: 15px;\n}\n@media (max-width: 450px) {\n  .game-wrapper[_ngcontent-%COMP%] {\n    width: 240px;\n  }\n}\n.game-wrapper[_ngcontent-%COMP%]   .game-img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n  cursor: pointer;\n  position: relative;\n}\n.game-wrapper[_ngcontent-%COMP%]   .hover-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  display: none;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 280px;\n  height: 280px;\n  border-radius: 8px;\n  background: #f9d62b14;\n  z-index: 2;\n  cursor: pointer;\n}\n.game-wrapper[_ngcontent-%COMP%]:hover   .hover-bg[_ngcontent-%COMP%] {\n  display: block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcQGFwcFxcX2JyZWFrcG9pbnQubWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtBQURKO0FDS0U7RURQRjtJQUtRLFlBQUE7RUFDTjtBQUNGO0FBQUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQUNJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFDUjtBQUVJO0VBQ0kseUJBQUE7QUFBUiIsImZpbGUiOiJnYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIkBhcHAvbWl4aW5zXCI7XHJcblxyXG4uZ2FtZS13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTlweCAzcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICAgIFxyXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChcInhzbWFsbFwiKSB7XHJcbiAgICAgICAgd2lkdGg6IDI0MHB4OyAgIFxyXG4gICAgfSAgICBcclxuICAgIC5nYW1lLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHRcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgICBcclxuICAgIH0gIFxyXG4gICAgXHJcbiAgICAuaG92ZXItYmcgeyAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjlkNjJiMTQ7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciAuaG92ZXItYmd7ICAgICAgICBcclxuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyAgICAgICAgXHJcbiAgICB9XHJcbn0iLCIkYnJlYWtwb2ludHM6IChcInhzbWFsbFwiOiAobWF4LXdpZHRoOiA0NTBweCksXG5cdFwic21hbGxcIjogKG1heC13aWR0aDogNzY3cHgpLFxuXHRcIm1lZGl1bVwiOiAobWF4LXdpZHRoOiA5OTJweCksXG5cdFwibGFyZ2VcIjogKG1heC13aWR0aDogMTIwMHB4KSxcblx0XCJ4bGFyZ2VcIjogKG1heC13aWR0aDogMTUwMHB4KSkgIWRlZmF1bHQ7XG5cblxuQG1peGluIGJyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcblx0QGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcblx0XHRAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkpfSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH1cbn1cblxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 6381:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/components/games/components/games-filters/games-filters.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesFiltersComponent": () => (/* binding */ GamesFiltersComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6324);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var src_app_core_Unsubscription_Unsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/Unsubscription/Unsub */ 2205);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared */ 1679);
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/games.service */ 5592);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ 9243);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 781);
















function GamesFiltersComponent_mat_option_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const provider_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](provider_r3);
} }
function GamesFiltersComponent_mat_option_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "strong", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "check_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const provider_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](provider_r3);
} }
function GamesFiltersComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GamesFiltersComponent_mat_option_11_span_1_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, GamesFiltersComponent_mat_option_11_div_2_Template, 5, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const provider_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", provider_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedProviders.indexOf(provider_r3) === -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedProviders.indexOf(provider_r3) > -1);
} }
function GamesFiltersComponent_mat_chip_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-chip", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GamesFiltersComponent_mat_chip_13_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const provider_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.removeProvider(provider_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const provider_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", provider_r8, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "remove " + provider_r8);
} }
function GamesFiltersComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GamesFiltersComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.clearProviders(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Clear all");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class GamesFiltersComponent extends src_app_core_Unsubscription_Unsub__WEBPACK_IMPORTED_MODULE_0__.Unsub {
    constructor(_formBuilder, gameMockClient, gamesService) {
        super();
        this._formBuilder = _formBuilder;
        this.gameMockClient = gameMockClient;
        this.gamesService = gamesService;
        this.onSearchEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.providers = [];
        this.selectedProviders = [];
        this.allProviders = [];
    }
    get gamesNamesControl() {
        return this.filtersForm.get('gamesNames');
    }
    get gamesProvidersControl() {
        return this.filtersForm.get('gamesProviders');
    }
    ngOnInit() {
        this.getProviders();
        this.setForm();
        this.searchGamesByTitle();
        this.searchGamesByProvider();
        this.checkLocalStorageFilters();
    }
    getProviders() {
        this.providers = [];
        this.allProviders = [];
        this.gameMockClient.getProviders$()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeAll)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinct)((provider) => (provider)))
            .subscribe((provider) => {
            this.providers.push(provider);
            this.allProviders.push(provider);
        });
    }
    setForm() {
        this.filtersForm = this._formBuilder.group({
            gamesNames: '',
            gamesProviders: [Array.from([])]
        });
    }
    searchGamesByTitle() {
        var _a;
        //user types something 
        (_a = this.gamesNamesControl) === null || _a === void 0 ? void 0 : _a.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unsubscribe$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)((filterValue) => {
            //obtain filtered games array
            return this.gameMockClient.getFilteredGames$({ gamesNames: filterValue, gamesProviders: this.selectedProviders })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)((filteredGames) => {
                this.gamesService.setCurrentFilterInLocalStorage({ gamesNames: filterValue, gamesProviders: this.selectedProviders });
                if (filterValue !== '') {
                    this.providers = this.allProviders.filter((provider) => (filteredGames.find((game) => (game.providerName === provider))));
                }
                else {
                    this.getProviders();
                }
            }));
        })).subscribe(() => {
            var _a;
            this.onSearchEmitter.emit({ gamesNames: (_a = this.gamesNamesControl) === null || _a === void 0 ? void 0 : _a.value, gamesProviders: this.selectedProviders });
        });
    }
    searchGamesByProvider() {
        var _a;
        (_a = this.gamesProvidersControl) === null || _a === void 0 ? void 0 : _a.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unsubscribe$)).subscribe((selectedProvider) => {
            var _a, _b, _c;
            if (selectedProvider != 'Select a provider') {
                if (this.selectedProviders.indexOf(selectedProvider) === -1) {
                    this.selectedProviders.push(selectedProvider);
                    this.onSearchEmitter.emit({ gamesNames: (_a = this.gamesNamesControl) === null || _a === void 0 ? void 0 : _a.value, gamesProviders: this.selectedProviders });
                    this.gamesService.setCurrentFilterInLocalStorage({ gamesNames: (_b = this.gamesNamesControl) === null || _b === void 0 ? void 0 : _b.value, gamesProviders: this.selectedProviders });
                }
                (_c = this.gamesProvidersControl) === null || _c === void 0 ? void 0 : _c.setValue('Select a provider');
            }
        });
    }
    removeProvider(provider) {
        var _a, _b, _c;
        this.selectedProviders = this.selectedProviders.filter(selectedProvider => (selectedProvider !== provider));
        this.onSearchEmitter.emit({ gamesNames: (_a = this.gamesNamesControl) === null || _a === void 0 ? void 0 : _a.value, gamesProviders: this.selectedProviders });
        this.gamesService.setCurrentFilterInLocalStorage({ gamesNames: (_b = this.gamesNamesControl) === null || _b === void 0 ? void 0 : _b.value, gamesProviders: this.selectedProviders });
        this.gameMockClient.getFilteredGames$({ gamesNames: (_c = this.gamesNamesControl) === null || _c === void 0 ? void 0 : _c.value, gamesProviders: this.selectedProviders })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unsubscribe$))
            .subscribe((filteredGames) => {
            this.providers = this.allProviders.filter((provider) => (filteredGames.find((game) => (game.providerName === provider))));
        });
    }
    clearProviders() {
        var _a, _b;
        this.selectedProviders = [];
        // send new emission to searchGamesByTitle
        (_a = this.gamesNamesControl) === null || _a === void 0 ? void 0 : _a.setValue(this.gamesNamesControl.value);
        this.gamesService.setCurrentFilterInLocalStorage({ gamesNames: (_b = this.gamesNamesControl) === null || _b === void 0 ? void 0 : _b.value, gamesProviders: this.selectedProviders });
    }
    checkLocalStorageFilters() {
        var _a;
        const filters = this.gamesService.getFiltersFromLocalStorage();
        if (filters) {
            (_a = this.gamesNamesControl) === null || _a === void 0 ? void 0 : _a.setValue(filters.gamesNames);
            this.selectedProviders = filters.gamesProviders;
        }
    }
}
GamesFiltersComponent.ɵfac = function GamesFiltersComponent_Factory(t) { return new (t || GamesFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared__WEBPACK_IMPORTED_MODULE_1__.GameMockClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_games_service__WEBPACK_IMPORTED_MODULE_2__.GamesService)); };
GamesFiltersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GamesFiltersComponent, selectors: [["games-filters"]], outputs: { onSearchEmitter: "onSearch" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 4, consts: [[1, "d-flex", "justify-content-center", "p-3", "filters-form", 3, "formGroup"], ["color", "accent", "appearance", "outline", 1, "w-100", "me-5"], ["matInput", "", "placeholder", "Write a game name...", "formControlName", "gamesNames"], ["color", "accent", "appearance", "outline", 1, "w-100"], ["formControlName", "gamesProviders"], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", "Provider selection"], ["color", "accent", 4, "ngFor", "ngForOf"], ["mat-button", "", "class", "ms-4", 3, "click", 4, "ngIf"], [3, "value"], [4, "ngIf"], ["class", "d-flex justify-content-between align-items-center", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "selected-option"], ["color", "accent"], ["matChipRemove", "", 3, "click"], ["mat-button", "", 1, "ms-4", 3, "click"]], template: function GamesFiltersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Search Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Providers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, GamesFiltersComponent_mat_option_11_Template, 3, 3, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-chip-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, GamesFiltersComponent_mat_chip_13_Template, 5, 2, "mat-chip", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, GamesFiltersComponent_button_14_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.filtersForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.providers);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.selectedProviders);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedProviders.length > 1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipList, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChip, _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipRemove, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton], styles: [".selected-option[_ngcontent-%COMP%] {\n  color: #69F0AE;\n}\n\n@media (max-width: 992px) {\n  .filters-form[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWVzLWZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcQGFwcFxcX2JyZWFrcG9pbnQubWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0FBREo7O0FDT0U7RURIRjtJQUVRLHNCQUFBO0VBRE47QUFDRiIsImZpbGUiOiJnYW1lcy1maWx0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIkBhcHAvbWl4aW5zXCI7XHJcblxyXG4uc2VsZWN0ZWQtb3B0aW9uIHtcclxuICAgIGNvbG9yOiAjNjlGMEFFO1xyXG59XHJcblxyXG4uZmlsdGVycy1mb3JtIHtcclxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoXCJtZWRpdW1cIikge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgICBcclxuICAgIH1cclxufSIsIiRicmVha3BvaW50czogKFwieHNtYWxsXCI6IChtYXgtd2lkdGg6IDQ1MHB4KSxcblx0XCJzbWFsbFwiOiAobWF4LXdpZHRoOiA3NjdweCksXG5cdFwibWVkaXVtXCI6IChtYXgtd2lkdGg6IDk5MnB4KSxcblx0XCJsYXJnZVwiOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuXHRcInhsYXJnZVwiOiAobWF4LXdpZHRoOiAxNTAwcHgpKSAhZGVmYXVsdDtcblxuXG5AbWl4aW4gYnJlYWtwb2ludCgkYnJlYWtwb2ludCkge1xuXHRAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xuXHRcdEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSl9IHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fVxufVxuXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 341:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/components/games/components/games-list/games-list.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesListComponent": () => (/* binding */ GamesListComponent)
/* harmony export */ });
/* harmony import */ var _state_selectors_Games_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../state/selectors/Games.selectors */ 2841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 5160);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var src_app_core_Unsubscription_Unsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/Unsubscription/Unsub */ 2205);
/* harmony import */ var src_app_state_actions_Games_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/state/actions/Games.actions */ 2103);
/* harmony import */ var _shared_client_game_mock_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../shared/client/game-mock.client */ 2262);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _games_filters_games_filters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../games-filters/games-filters.component */ 6381);
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../game/game.component */ 7143);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
















function GamesListComponent_games_filters_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "games-filters", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onSearch", function GamesListComponent_games_filters_2_Template_games_filters_onSearch_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r4.filterGames($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function GamesListComponent_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "casino-game", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("gameToDisplay", game_r6);
} }
function GamesListComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GamesListComponent_ng_container_5_div_1_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const game_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", game_r6.thumb);
} }
function GamesListComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GamesListComponent_ng_container_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r9.navigateToGamesPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Browse all games ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "keyboard_double_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
function GamesListComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "mat-spinner", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
class GamesListComponent extends src_app_core_Unsubscription_Unsub__WEBPACK_IMPORTED_MODULE_1__.Unsub {
    constructor(gameMockClient, cdRef, router, store) {
        super();
        this.gameMockClient = gameMockClient;
        this.cdRef = cdRef;
        this.router = router;
        this.store = store;
        this.tag = '';
        this.lastPlayed = false;
        this.gamesQuantity = 0;
        this.showFilters = false;
        this.filterEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.lastPlayedGames$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable();
        this.games = [];
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable();
        this.isLoading = false;
        this.firstTimeLoading = true;
        this.finishedLoadingAllGames = false;
        this.gamesData$ = gameMockClient.getAll$();
    }
    ngOnChanges(changes) {
        if (changes['gamesQuantity']) {
            if (!changes['gamesQuantity'].isFirstChange()) {
                this.loadPartialGamesData(changes['gamesQuantity'].currentValue);
            }
        }
    }
    ngOnInit() {
        if (!this.showLastPlayedGames() && !this.checkIfTagExists()) {
            this.loadPartialGamesData(this.gamesQuantity);
        }
        this.subscribeToLoading();
    }
    checkIfTagExists() {
        if (this.tag !== '') {
            this.loadGamesByTag(this.tag);
            return true;
        }
        return false;
    }
    showLastPlayedGames() {
        if (this.lastPlayed) {
            this.loadGamesByLastPlayed();
            return true;
        }
        return false;
    }
    loadPartialGamesData(gamesQuantity) {
        this.store.dispatch((0,src_app_state_actions_Games_actions__WEBPACK_IMPORTED_MODULE_2__.LoadGames)());
        this.setFirstTimeLoading(gamesQuantity);
        this.gamesData$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.unsubscribe$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((games) => {
            return games.slice(gamesQuantity, gamesQuantity + 8);
        }))
            .subscribe((games) => {
            this.setNewGamesState(games);
        });
    }
    setNewGamesState(games) {
        if (games.length > 0) {
            this.games.push(...games);
            const newArray = Object.assign([], this.games);
            this.store.dispatch((0,src_app_state_actions_Games_actions__WEBPACK_IMPORTED_MODULE_2__.LoadedPartialGamesSuccessfully)({ loadedGames: newArray }));
        }
        else {
            this.store.dispatch((0,src_app_state_actions_Games_actions__WEBPACK_IMPORTED_MODULE_2__.LoadedAllGamesSuccessfully)({ loadedGames: this.games }));
            this.finishedLoadingAllGames = true;
        }
        this.runChangeDetection();
    }
    runChangeDetection() {
        this.cdRef.markForCheck();
    }
    loadGamesByTag(tag) {
        this.store.dispatch((0,src_app_state_actions_Games_actions__WEBPACK_IMPORTED_MODULE_2__.LoadGames)());
        this.gamesData$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.unsubscribe$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((games) => {
            return games.filter((game) => (game.tag === tag));
        }))
            .subscribe(games => {
            this.games = games;
            this.store.dispatch((0,src_app_state_actions_Games_actions__WEBPACK_IMPORTED_MODULE_2__.LoadedAllGamesSuccessfully)({ loadedGames: this.games }));
            this.runChangeDetection();
        });
    }
    loadGamesByLastPlayed() {
        this.store.dispatch((0,src_app_state_actions_Games_actions__WEBPACK_IMPORTED_MODULE_2__.LoadGames)());
        this.lastPlayedGames$ = this.store.select(_state_selectors_Games_selectors__WEBPACK_IMPORTED_MODULE_0__.selectLastPlayedGames);
        this.lastPlayedGames$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.unsubscribe$))
            .subscribe(games => {
            this.games = games;
        });
    }
    navigateToGamesPage() {
        this.router.navigate([`games`]);
    }
    subscribeToLoading() {
        this.loading$ = this.store.select(_state_selectors_Games_selectors__WEBPACK_IMPORTED_MODULE_0__.selectLoading);
        this.loading$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.unsubscribe$))
            .subscribe((loading) => {
            this.isLoading = loading;
            this.cdRef.markForCheck();
        });
    }
    setFirstTimeLoading(gamesQuantity) {
        if (gamesQuantity >= 8) {
            this.firstTimeLoading = false;
        }
    }
    filterGames(filters) {
        this.filterEmitter.emit(filters);
        this.gameMockClient.getFilteredGames$(filters)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.unsubscribe$))
            .subscribe(filteredGames => {
            this.games = filteredGames;
            this.cdRef.markForCheck();
        });
    }
}
GamesListComponent.ɵfac = function GamesListComponent_Factory(t) { return new (t || GamesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_client_game_mock_client__WEBPACK_IMPORTED_MODULE_3__.GameMockClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store)); };
GamesListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: GamesListComponent, selectors: [["games-list"]], inputs: { tag: ["searchByTag", "tag"], lastPlayed: "lastPlayed", gamesQuantity: "gamesQuantity", showFilters: "showFilters" }, outputs: { filterEmitter: "onFilter" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 4, consts: [[1, "container-fluid"], [1, "row"], [3, "onSearch", 4, "ngIf"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "onSearch"], ["class", "col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center game-col", 4, "ngIf"], [1, "col-12", "col-md-6", "col-xl-4", "col-xxl-3", "d-flex", "justify-content-center", "game-col"], [1, "d-flex", "flex-column", "w-100", "ps-3", "div-game-wrapper"], [3, "gameToDisplay"], [1, "w-100", "d-flex", "justify-content-center", "mb-5", "pb-3", "browse-games-wrapper"], ["mat-raised-button", "", "color", "primary", 1, "casino-text", 3, "click"], ["id", "browse-games", 1, "position-relative", "casino-text"], [1, "w-100", "d-flex", "justify-content-center", "position-relative", "spinner-wrapper"], ["color", "accent", "id", "games-spinner"]], template: function GamesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, GamesListComponent_games_filters_2_Template, 1, 0, "games-filters", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, GamesListComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, GamesListComponent_ng_container_6_Template, 6, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, GamesListComponent_ng_container_7_Template, 3, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.games);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.tag !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading && !ctx.finishedLoadingAllGames);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _games_filters_games_filters_component__WEBPACK_IMPORTED_MODULE_4__.GamesFiltersComponent, _game_game_component__WEBPACK_IMPORTED_MODULE_5__.GameComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatSpinner], styles: [".spinner-wrapper[_ngcontent-%COMP%] {\n  height: 200px;\n}\n.spinner-wrapper[_ngcontent-%COMP%]   #games-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 42%;\n}\n.game-col[_ngcontent-%COMP%] {\n  margin-bottom: 75px;\n  margin-top: 30px;\n}\n@media (max-width: 1500px) {\n  .game-col[_ngcontent-%COMP%] {\n    margin-bottom: 55px;\n  }\n}\n@media (max-width: 450px) {\n  .game-col[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n  }\n}\n@media (max-width: 992px) {\n  .game-col[_ngcontent-%COMP%]   .div-game-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n}\n.browse-games-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n.browse-games-wrapper[_ngcontent-%COMP%]   #browse-games[_ngcontent-%COMP%] {\n  bottom: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcQGFwcFxcX2JyZWFrcG9pbnQubWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0FBREo7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQURSO0FBTUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBSEo7QUNGRTtFREdGO0lBSVEsbUJBQUE7RUFETjtBQUNGO0FDUEU7RURHRjtJQU9PLG1CQUFBO0VBQ0w7QUFDRjtBQ1pFO0VEWUU7SUFHUSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQUNWO0FBQ0Y7QUFLUTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtBQUZaO0FBS0k7RUFDSSxXQUFBO0FBSFIiLCJmaWxlIjoiZ2FtZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJAYXBwL21peGluc1wiO1xyXG5cclxuLnNwaW5uZXItd3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG5cclxuICAgICNnYW1lcy1zcGlubmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNDIlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmdhbWUtY29sIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDc1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChcInhsYXJnZVwiKSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTVweDsgICAgICAgXHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBicmVha3BvaW50KFwieHNtYWxsXCIpIHtcclxuICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LWdhbWUtd3JhcHBlciB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChcIm1lZGl1bVwiKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgIFxyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH0gICAgIFxyXG59XHJcblxyXG4uYnJvd3NlLWdhbWVzLXdyYXBwZXIge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgfVxyXG4gICAgI2Jyb3dzZS1nYW1lcyB7XHJcbiAgICAgICAgYm90dG9tOiAxcHg7XHJcbiAgICB9XHJcbn0iLCIkYnJlYWtwb2ludHM6IChcInhzbWFsbFwiOiAobWF4LXdpZHRoOiA0NTBweCksXG5cdFwic21hbGxcIjogKG1heC13aWR0aDogNzY3cHgpLFxuXHRcIm1lZGl1bVwiOiAobWF4LXdpZHRoOiA5OTJweCksXG5cdFwibGFyZ2VcIjogKG1heC13aWR0aDogMTIwMHB4KSxcblx0XCJ4bGFyZ2VcIjogKG1heC13aWR0aDogMTUwMHB4KSkgIWRlZmF1bHQ7XG5cblxuQG1peGluIGJyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcblx0QGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcblx0XHRAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkpfSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH1cbn1cblxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 2573:
/*!****************************************************************!*\
  !*** ./src/app/pages/components/games/games-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesRoutingModule": () => (/* binding */ GamesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _games_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./games.component */ 4389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _games_component__WEBPACK_IMPORTED_MODULE_0__.GamesComponent
    },
    {
        path: "**",
        redirectTo: ''
    }
];
class GamesRoutingModule {
}
GamesRoutingModule.ɵfac = function GamesRoutingModule_Factory(t) { return new (t || GamesRoutingModule)(); };
GamesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GamesRoutingModule });
GamesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GamesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4389:
/*!***********************************************************!*\
  !*** ./src/app/pages/components/games/games.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesComponent": () => (/* binding */ GamesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-infinite-scroll */ 4229);
/* harmony import */ var _components_games_list_games_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/games-list/games-list.component */ 341);



class GamesComponent {
    constructor() {
        this.gamesToLoad = 0;
        this.disableScrolling = false;
    }
    onScroll() {
        this.gamesToLoad += 8;
    }
    handleScrolling(filters) {
        if (filters.gamesNames !== '' || filters.gamesProviders.length > 0) {
            this.disableScrolling = true;
        }
        else {
            this.disableScrolling = false;
        }
    }
}
GamesComponent.ɵfac = function GamesComponent_Factory(t) { return new (t || GamesComponent)(); };
GamesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GamesComponent, selectors: [["app-games"]], decls: 8, vars: 6, consts: [[1, "w-100", "mt-4", "d-flex", "justify-content-center", "banner-img-wrapper"], ["src", "assets/images/Games2.png", "alt", "GAMES", "title", "Play our games!", "id", "games-banner-img"], ["infiniteScroll", "", 1, "games-wrapper", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "infiniteScrollDisabled", "scrolled"], [3, "gamesQuantity", "showFilters", "onFilter"], [1, "last-played-content"], [1, "casino-text-bg", "casino-font", "text-uppercase", "mt-5", "fs-5"], [3, "lastPlayed"]], template: function GamesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scrolled", function GamesComponent_Template_div_scrolled_2_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "games-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onFilter", function GamesComponent_Template_games_list_onFilter_3_listener($event) { return ctx.handleScrolling($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Last Played Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "games-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("infiniteScrollDistance", 1)("infiniteScrollThrottle", 350)("infiniteScrollDisabled", ctx.disableScrolling);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("gamesQuantity", ctx.gamesToLoad)("showFilters", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lastPlayed", true);
    } }, directives: [ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_2__.InfiniteScrollDirective, _components_games_list_games_list_component__WEBPACK_IMPORTED_MODULE_0__.GamesListComponent], styles: ["@media (max-width: 992px) {\n  .banner-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 350px;\n    margin-left: 60px;\n  }\n}\n@media (max-width: 450px) {\n  .banner-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 280px;\n    margin-left: 60px;\n  }\n}\n.games-wrapper[_ngcontent-%COMP%] {\n  margin-left: 110px;\n  min-height: 100vh;\n}\n@media (max-width: 767px) {\n  .games-wrapper[_ngcontent-%COMP%] {\n    margin-left: 90px;\n  }\n}\n@media (max-width: 450px) {\n  .games-wrapper[_ngcontent-%COMP%] {\n    margin-left: 50px;\n  }\n}\n.last-played-content[_ngcontent-%COMP%] {\n  margin-left: 150px;\n  overflow: hidden;\n}\n@media (max-width: 767px) {\n  .last-played-content[_ngcontent-%COMP%] {\n    margin-left: 90px;\n  }\n}\n@media (max-width: 450px) {\n  .last-played-content[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcQGFwcFxcX2JyZWFrcG9pbnQubWl4aW5zLnNjc3MiLCJnYW1lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTRTtFQ05FO0lBRVEsWUFBQTtJQUNBLGlCQUFBO0VBRlY7QUFDRjtBRElFO0VDTkU7SUFNUSxZQUFBO0lBQ0EsaUJBQUE7RUFBVjtBQUNGO0FBSUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBREo7QURQRTtFQ01GO0lBSVEsaUJBQUE7RUFDTjtBQUNGO0FEWkU7RUNNRjtJQU9RLGlCQUFBO0VBR047QUFDRjtBQUFBO0VBQ1Esa0JBQUE7RUFDTixnQkFBQTtBQUdGO0FEdEJFO0VDaUJGO0lBSUcsaUJBQUE7RUFLRDtBQUNGO0FEM0JFO0VDaUJGO0lBT0csaUJBQUE7RUFPRDtBQUNGIiwiZmlsZSI6ImdhbWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJyZWFrcG9pbnRzOiAoXCJ4c21hbGxcIjogKG1heC13aWR0aDogNDUwcHgpLFxuXHRcInNtYWxsXCI6IChtYXgtd2lkdGg6IDc2N3B4KSxcblx0XCJtZWRpdW1cIjogKG1heC13aWR0aDogOTkycHgpLFxuXHRcImxhcmdlXCI6IChtYXgtd2lkdGg6IDEyMDBweCksXG5cdFwieGxhcmdlXCI6IChtYXgtd2lkdGg6IDE1MDBweCkpICFkZWZhdWx0O1xuXG5cbkBtaXhpbiBicmVha3BvaW50KCRicmVha3BvaW50KSB7XG5cdEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XG5cdFx0QG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpKX0ge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9XG59XG5cbiIsIkBpbXBvcnQgXCJAYXBwL21peGluc1wiO1xyXG5cclxuLmJhbm5lci1pbWctd3JhcHBlcntcclxuICAgIGltZyB7XHJcbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChcIm1lZGl1bVwiKSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoXCJ4c21hbGxcIikge1xyXG4gICAgICAgICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgICAgIH0gICBcclxuICAgIH0gICBcclxufVxyXG4gIFxyXG4uZ2FtZXMtd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTEwcHg7ICBcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChcInNtYWxsXCIpIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOTBweDtcclxuICAgIH0gICAgICBcclxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoXCJ4c21hbGxcIikge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgfSAgICBcclxufVxyXG5cclxuLmxhc3QtcGxheWVkLWNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcdFxyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCJzbWFsbFwiKSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA5MHB4O1xyXG5cdFx0fVx0XHJcblx0XHRAaW5jbHVkZSBicmVha3BvaW50KFwieHNtYWxsXCIpIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDYwcHg7XHJcblx0XHR9XHRcclxufSJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 3912:
/*!********************************************************!*\
  !*** ./src/app/pages/components/games/games.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesModule": () => (/* binding */ GamesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _games_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./games-routing.module */ 2573);
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/material/material.module */ 5123);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-infinite-scroll */ 4229);
/* harmony import */ var src_app_shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/layout/layout.module */ 8634);
/* harmony import */ var _components_games_list_games_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/games-list/games-list.component */ 341);
/* harmony import */ var _games_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./games.component */ 4389);
/* harmony import */ var _components_game_description_game_description_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/game-description/game-description.component */ 3598);
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/game/game.component */ 7143);
/* harmony import */ var _components_games_filters_games_filters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/games-filters/games-filters.component */ 6381);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 2529);















const COMPONENTS = [
    _components_games_list_games_list_component__WEBPACK_IMPORTED_MODULE_3__.GamesListComponent,
    _games_component__WEBPACK_IMPORTED_MODULE_4__.GamesComponent,
    _components_game_description_game_description_component__WEBPACK_IMPORTED_MODULE_5__.GameDescriptionComponent,
    _components_game_game_component__WEBPACK_IMPORTED_MODULE_6__.GameComponent
];
class GamesModule {
}
GamesModule.ɵfac = function GamesModule_Factory(t) { return new (t || GamesModule)(); };
GamesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: GamesModule });
GamesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _games_routing_module__WEBPACK_IMPORTED_MODULE_0__.GamesRoutingModule,
            src_app_material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
            src_app_shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule,
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__.InfiniteScrollModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](GamesModule, { declarations: [_components_games_list_games_list_component__WEBPACK_IMPORTED_MODULE_3__.GamesListComponent,
        _games_component__WEBPACK_IMPORTED_MODULE_4__.GamesComponent,
        _components_game_description_game_description_component__WEBPACK_IMPORTED_MODULE_5__.GameDescriptionComponent,
        _components_game_game_component__WEBPACK_IMPORTED_MODULE_6__.GameComponent, _components_games_filters_games_filters_component__WEBPACK_IMPORTED_MODULE_7__.GamesFiltersComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _games_routing_module__WEBPACK_IMPORTED_MODULE_0__.GamesRoutingModule,
        src_app_material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        src_app_shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__.InfiniteScrollModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule], exports: [_components_games_list_games_list_component__WEBPACK_IMPORTED_MODULE_3__.GamesListComponent,
        _games_component__WEBPACK_IMPORTED_MODULE_4__.GamesComponent,
        _components_game_description_game_description_component__WEBPACK_IMPORTED_MODULE_5__.GameDescriptionComponent,
        _components_game_game_component__WEBPACK_IMPORTED_MODULE_6__.GameComponent] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetComponentScope"](_components_game_description_game_description_component__WEBPACK_IMPORTED_MODULE_5__.GameDescriptionComponent, [_components_game_game_component__WEBPACK_IMPORTED_MODULE_6__.GameComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon], []);


/***/ }),

/***/ 5592:
/*!******************************************************************!*\
  !*** ./src/app/pages/components/games/services/games.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesService": () => (/* binding */ GamesService)
/* harmony export */ });
/* harmony import */ var _state_actions_Games_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../state/actions/Games.actions */ 2103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 7562);



class GamesService {
    constructor(store) {
        this.store = store;
        this.getLastPlayedGamesFromLocalStorage();
    }
    getLastPlayedGamesFromLocalStorage() {
        const lastPlayedGamesJSON = localStorage.getItem('lastPlayedGames');
        if (lastPlayedGamesJSON) {
            const lastPlayedGames = JSON.parse(lastPlayedGamesJSON);
            this.store.dispatch((0,_state_actions_Games_actions__WEBPACK_IMPORTED_MODULE_0__.LoadedLastPlayedGamesSuccessfully)({ lastPlayedGames }));
            return lastPlayedGames;
        }
        else {
            return [];
        }
    }
    addLastPlayedGame(game) {
        let lastPlayedGames = this.getLastPlayedGamesFromLocalStorage();
        if (this.isRepeatedGame(lastPlayedGames, game)) {
            return;
        }
        lastPlayedGames = Object.assign([], lastPlayedGames);
        lastPlayedGames.unshift(game);
        this.checkLastPlayedGamesQuantity(lastPlayedGames);
        localStorage.setItem('lastPlayedGames', JSON.stringify(lastPlayedGames));
        this.store.dispatch((0,_state_actions_Games_actions__WEBPACK_IMPORTED_MODULE_0__.SaveLastPlayedGame)({ lastPlayedGames }));
    }
    checkLastPlayedGamesQuantity(games) {
        if (games.length > 5) {
            games.pop();
        }
    }
    isRepeatedGame(lastPlayedGames, gameToFind) {
        const found = lastPlayedGames.find((game) => (game.id === gameToFind.id));
        return found ? true : false;
    }
    setCurrentFilterInLocalStorage(filters) {
        localStorage.setItem('filters', JSON.stringify(filters));
    }
    getFiltersFromLocalStorage() {
        var _a;
        const localStorageFilters = JSON.parse((_a = localStorage.getItem('filters')) !== null && _a !== void 0 ? _a : '');
        if (localStorageFilters) {
            return localStorageFilters;
        }
        else {
            return null;
        }
    }
}
GamesService.ɵfac = function GamesService_Factory(t) { return new (t || GamesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store)); };
GamesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GamesService, factory: GamesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 24:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/components/home/components/banner/banner.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["banner"]], decls: 1, vars: 0, consts: [["src", "assets/images/banner.jpg", "alt", "CASINO X", "id", "banner-img"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, styles: ["#banner-img[_ngcontent-%COMP%] {\n  width: 100%;\n  z-index: 2;\n  position: absolute;\n  opacity: 1;\n  margin-top: 30px;\n  box-shadow: 0px 24px 67px #3F247F;\n}\n@media (max-width: 767px) {\n  #banner-img[_ngcontent-%COMP%] {\n    padding-left: 41px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVzXFxAYXBwXFxfYnJlYWtwb2ludC5taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQURKO0FDRUU7RURQRjtJQVNRLGtCQUFBO0VBQU47QUFDRiIsImZpbGUiOiJiYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQGFwcC9taXhpbnNcIjtcclxuXHJcbiNiYW5uZXItaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDE7IFxyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAyNHB4IDY3cHggIzNGMjQ3RjtcclxuXHJcbiAgICBAaW5jbHVkZSBicmVha3BvaW50KFwic21hbGxcIikge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDFweDtcclxuICAgIH1cdFxyXG59IiwiJGJyZWFrcG9pbnRzOiAoXCJ4c21hbGxcIjogKG1heC13aWR0aDogNDUwcHgpLFxuXHRcInNtYWxsXCI6IChtYXgtd2lkdGg6IDc2N3B4KSxcblx0XCJtZWRpdW1cIjogKG1heC13aWR0aDogOTkycHgpLFxuXHRcImxhcmdlXCI6IChtYXgtd2lkdGg6IDEyMDBweCksXG5cdFwieGxhcmdlXCI6IChtYXgtd2lkdGg6IDE1MDBweCkpICFkZWZhdWx0O1xuXG5cbkBtaXhpbiBicmVha3BvaW50KCRicmVha3BvaW50KSB7XG5cdEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XG5cdFx0QG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpKX0ge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ 6527:
/*!*********************************************************!*\
  !*** ./src/app/pages/components/home/home.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/banner/banner.component */ 24);
/* harmony import */ var _games_components_games_list_games_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../games/components/games-list/games-list.component */ 341);



const NAME_KEBAB = "app-home";
class HomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], hostAttrs: [1, "app-home"], decls: 8, vars: 1, consts: [[1, "app-home__content"], ["id", "trending-games-header", 1, "casino-text-bg", "casino-font", "text-uppercase", "fs-5"], ["searchByTag", "trending"], [1, "casino-text-bg", "casino-font", "text-uppercase", "mt-4", "fs-5"], [3, "lastPlayed"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Trending Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "games-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Last Played Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "games-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("lastPlayed", true);
    } }, directives: [_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent, _games_components_games_list_games_list_component__WEBPACK_IMPORTED_MODULE_1__.GamesListComponent], styles: [".app-home__content[_ngcontent-%COMP%] {\n  margin-left: 150px;\n  padding-top: 60px;\n  overflow: hidden;\n}\n@media (max-width: 767px) {\n  .app-home__content[_ngcontent-%COMP%] {\n    margin-left: 90px;\n  }\n}\n@media (max-width: 450px) {\n  .app-home__content[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n}\n.app-home__content[_ngcontent-%COMP%]   #trending-games-header[_ngcontent-%COMP%] {\n  margin-top: 45%;\n}\n@media (max-width: 1200px) {\n  .app-home__content[_ngcontent-%COMP%]   #trending-games-header[_ngcontent-%COMP%] {\n    margin-top: 47%;\n  }\n}\n@media (max-width: 992px) {\n  .app-home__content[_ngcontent-%COMP%]   #trending-games-header[_ngcontent-%COMP%] {\n    margin-top: 53%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcQGFwcFxcX2JyZWFrcG9pbnQubWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0M7RUFDQyxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFKRjtBQ0tFO0VESkQ7SUFLRSxpQkFBQTtFQUZEO0FBQ0Y7QUNBRTtFREpEO0lBUUUsaUJBQUE7RUFBRDtBQUNGO0FBQ0U7RUFDQyxlQUFBO0FBQ0g7QUNSRTtFRE1BO0lBR0UsZUFBQTtFQUdGO0FBQ0Y7QUNiRTtFRE1BO0lBT0UsZUFBQTtFQUlGO0FBQ0YiLCJmaWxlIjoiaG9tZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIkBhcHAvY29sb3JzXCI7XG5AaW1wb3J0IFwiQGFwcC9taXhpbnNcIjtcblxuLmFwcC1ob21lIHtcblx0XG5cdCZfX2NvbnRlbnQge1xuXHRcdG1hcmdpbi1sZWZ0OiAxNTBweDtcblx0XHRwYWRkaW5nLXRvcDogNjBweDtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCJzbWFsbFwiKSB7XG5cdFx0XHRtYXJnaW4tbGVmdDogOTBweDtcblx0XHR9XHRcblx0XHRAaW5jbHVkZSBicmVha3BvaW50KFwieHNtYWxsXCIpIHtcblx0XHRcdG1hcmdpbi1sZWZ0OiA2MHB4O1xuXHRcdH1cdFx0XG5cdFx0I3RyZW5kaW5nLWdhbWVzLWhlYWRlciB7XG5cdFx0XHRtYXJnaW4tdG9wOiA0NSU7XHRcdFxuXHRcdFx0QGluY2x1ZGUgYnJlYWtwb2ludChcImxhcmdlXCIpIHtcblx0XHRcdFx0bWFyZ2luLXRvcDogNDclO1xuXHRcdFx0fVxuXHRcdFxuXHRcdFx0QGluY2x1ZGUgYnJlYWtwb2ludChcIm1lZGl1bVwiKSB7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDUzJTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblx0fVx0XG59XG4iLCIkYnJlYWtwb2ludHM6IChcInhzbWFsbFwiOiAobWF4LXdpZHRoOiA0NTBweCksXG5cdFwic21hbGxcIjogKG1heC13aWR0aDogNzY3cHgpLFxuXHRcIm1lZGl1bVwiOiAobWF4LXdpZHRoOiA5OTJweCksXG5cdFwibGFyZ2VcIjogKG1heC13aWR0aDogMTIwMHB4KSxcblx0XCJ4bGFyZ2VcIjogKG1heC13aWR0aDogMTUwMHB4KSkgIWRlZmF1bHQ7XG5cblxuQG1peGluIGJyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcblx0QGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcblx0XHRAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkpfSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH1cbn1cblxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 9730:
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppPagesRoutingModule": () => (/* binding */ AppPagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 6527);
/* harmony import */ var _shared_layout_component_general_general_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/layout/component/general/general.component */ 4681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const ROUTES = [
    {
        path: '',
        component: _shared_layout_component_general_general_component__WEBPACK_IMPORTED_MODULE_1__.GeneralLayoutComponent,
        children: [
            {
                path: 'home',
                component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
            },
            {
                path: 'games',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./components/games/games.module */ 3912)).then(m => m.GamesModule)
            }
        ]
    },
    {
        path: "**",
        redirectTo: 'home'
    }
];
class AppPagesRoutingModule {
}
AppPagesRoutingModule.ɵfac = function AppPagesRoutingModule_Factory(t) { return new (t || AppPagesRoutingModule)(); };
AppPagesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppPagesRoutingModule });
AppPagesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(ROUTES, {
                scrollPositionRestoration: 'enabled',
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules
            })], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppPagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 8950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppPagesModule": () => (/* binding */ AppPagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages-routing.module */ 9730);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../material/material.module */ 5123);
/* harmony import */ var _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/layout/layout.module */ 8634);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ 6527);
/* harmony import */ var _components_home_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/components/banner/banner.component */ 24);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-infinite-scroll */ 4229);
/* harmony import */ var _components_games_games_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/games/games.module */ 3912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);









const COMPONENTS = [
    _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
    _components_home_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__.BannerComponent,
];
class AppPagesModule {
}
AppPagesModule.ɵfac = function AppPagesModule_Factory(t) { return new (t || AppPagesModule)(); };
AppPagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppPagesModule });
AppPagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppPagesRoutingModule,
            _material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
            _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule,
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__.InfiniteScrollModule,
            _components_games_games_module__WEBPACK_IMPORTED_MODULE_5__.GamesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppPagesModule, { declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _components_home_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__.BannerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppPagesRoutingModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__.InfiniteScrollModule,
        _components_games_games_module__WEBPACK_IMPORTED_MODULE_5__.GamesModule], exports: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _components_home_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__.BannerComponent] }); })();


/***/ }),

/***/ 2262:
/*!***************************************************!*\
  !*** ./src/app/shared/client/game-mock.client.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameMockClient": () => (/* binding */ GameMockClient)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class GameMockClient {
    constructor(http) {
        this.http = http;
        this.dataURL = "assets/game.mock-data.json";
    }
    getAll$() {
        return this.http.get(this.dataURL);
    }
    getFilteredGames$(filters) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('title', filters.gamesNames)
            .set('provider', filters.gamesProviders.join('&'));
        return this.http.get(this.dataURL, { params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((games) => {
            return games.filter((game) => {
                if (filters.gamesProviders.length > 0) {
                    return game.title.toLowerCase().includes(filters.gamesNames.toLowerCase()) && filters.gamesProviders.indexOf(game.providerName) > -1;
                }
                return game.title.toLowerCase().includes(filters.gamesNames.toLowerCase());
            });
        }));
    }
    getProviders$() {
        return this.http.get(this.dataURL)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((games) => games.map(game => game.providerName)));
    }
}
GameMockClient.ɵfac = function GameMockClient_Factory(t) { return new (t || GameMockClient)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
GameMockClient.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GameMockClient, factory: GameMockClient.ɵfac, providedIn: "root" });


/***/ }),

/***/ 1679:
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameMockClient": () => (/* reexport safe */ _client_game_mock_client__WEBPACK_IMPORTED_MODULE_0__.GameMockClient)
/* harmony export */ });
/* harmony import */ var _client_game_mock_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client/game-mock.client */ 2262);



/***/ }),

/***/ 4681:
/*!**********************************************************************!*\
  !*** ./src/app/shared/layout/component/general/general.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralLayoutComponent": () => (/* binding */ GeneralLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sidenav/sidenav.component */ 9663);
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toolbar/toolbar.component */ 194);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);




class GeneralLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
GeneralLayoutComponent.ɵfac = function GeneralLayoutComponent_Factory(t) { return new (t || GeneralLayoutComponent)(); };
GeneralLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GeneralLayoutComponent, selectors: [["general-layout"]], decls: 3, vars: 0, template: function GeneralLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_0__.SidenavComponent, _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__.ToolbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9663:
/*!**********************************************************************!*\
  !*** ./src/app/shared/layout/component/sidenav/sidenav.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavComponent": () => (/* binding */ SidenavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 2529);




const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/games"]; };
class SidenavComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(); };
SidenavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["sidenav"]], decls: 10, vars: 4, consts: [["id", "sidenav"], [1, "modules-menu"], ["matTooltip", "Home", "matTooltipPosition", "right", "matTooltipClass", "font-tooltip", 1, "mb-4", "mt-4"], ["routerLinkActive", "router-link-active", 3, "routerLink"], ["matTooltip", "Games", "matTooltipPosition", "right", "matTooltipClass", "font-tooltip"], [3, "routerLink"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "casino");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__.MatTooltip, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon], styles: ["#sidenav[_ngcontent-%COMP%] {\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  z-index: 50;\n  width: 74px;\n  background: #050e1c;\n  border-bottom-right-radius: 5px;\n  margin-top: 34px;\n  background: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  border-right: 1px solid rgba(255, 255, 255, 0.18);\n}\n@media (max-width: 450px) {\n  #sidenav[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n}\n#sidenav[_ngcontent-%COMP%]   .modules-menu[_ngcontent-%COMP%] {\n  padding-left: 34%;\n}\n@media (max-width: 450px) {\n  #sidenav[_ngcontent-%COMP%]   .modules-menu[_ngcontent-%COMP%] {\n    padding-left: 25%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXYuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVzXFxAYXBwXFxfYnJlYWtwb2ludC5taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnREFBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpREFBQTtBQURKO0FDTEU7RURQRjtJQWdCUSxXQUFBO0VBQU47QUFDRjtBQUVJO0VBQ0ksaUJBQUE7QUFBUjtBQ2JFO0VEWUU7SUFHUSxpQkFBQTtFQUVWO0FBQ0YiLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJAYXBwL21peGluc1wiO1xyXG5cclxuI3NpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDUwOyAgIFxyXG4gICAgd2lkdGg6IDc0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDUwZTFjO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDM0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjEgKTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcclxuXHJcbiAgICBAaW5jbHVkZSBicmVha3BvaW50KFwieHNtYWxsXCIpIHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgIH1cdFxyXG5cclxuICAgIC5tb2R1bGVzLW1lbnUgeyAgICBcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDM0JTtcclxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KFwieHNtYWxsXCIpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNSU7XHJcbiAgICAgICAgfVx0XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIiRicmVha3BvaW50czogKFwieHNtYWxsXCI6IChtYXgtd2lkdGg6IDQ1MHB4KSxcblx0XCJzbWFsbFwiOiAobWF4LXdpZHRoOiA3NjdweCksXG5cdFwibWVkaXVtXCI6IChtYXgtd2lkdGg6IDk5MnB4KSxcblx0XCJsYXJnZVwiOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuXHRcInhsYXJnZVwiOiAobWF4LXdpZHRoOiAxNTAwcHgpKSAhZGVmYXVsdDtcblxuXG5AbWl4aW4gYnJlYWtwb2ludCgkYnJlYWtwb2ludCkge1xuXHRAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xuXHRcdEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSl9IHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fVxufVxuXG4iXX0= */"] });


/***/ }),

/***/ 194:
/*!**********************************************************************!*\
  !*** ./src/app/shared/layout/component/toolbar/toolbar.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarComponent": () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);


class ToolbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(); };
ToolbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["toolbar"]], decls: 3, vars: 0, consts: [["id", "toolbar", 1, "text-dark"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mini Casino Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar], styles: ["#toolbar[_ngcontent-%COMP%] {\n  background: none;\n  z-index: 100;\n  position: fixed;\n  top: 0;\n  height: 34px;\n  background: #fff800;\n  background: linear-gradient(90deg, #fff800 10%, #fcc519 50%, #fff800 90%);\n  box-shadow: 0px 7px 12px -2px rgba(0, 0, 0, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlFQUFBO0VBQ0EsaURBQUE7QUFDSiIsImZpbGUiOiJ0b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Rvb2xiYXIge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIHotaW5kZXg6IDEwMDsgIFxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwyNDgsMCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LDI0OCwwLDEpIDEwJSwgcmdiYSgyNTIsMTk3LDI1LDEpIDUwJSwgcmdiYSgyNTUsMjQ4LDAsMSkgOTAlKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA3cHggMTJweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8634:
/*!************************************************!*\
  !*** ./src/app/shared/layout/layout.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _component_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/toolbar/toolbar.component */ 194);
/* harmony import */ var _component_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/sidenav/sidenav.component */ 9663);
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material/material.module */ 5123);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _component_general_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/general/general.component */ 4681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







let COMPONENTS = [
    _component_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarComponent,
    _component_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__.SidenavComponent,
    _component_general_general_component__WEBPACK_IMPORTED_MODULE_3__.GeneralLayoutComponent
];
class LayoutModule {
}
LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
LayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            src_app_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_component_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarComponent,
        _component_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__.SidenavComponent,
        _component_general_general_component__WEBPACK_IMPORTED_MODULE_3__.GeneralLayoutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        src_app_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_component_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarComponent,
        _component_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__.SidenavComponent,
        _component_general_general_component__WEBPACK_IMPORTED_MODULE_3__.GeneralLayoutComponent] }); })();


/***/ }),

/***/ 2103:
/*!************************************************!*\
  !*** ./src/app/state/actions/Games.actions.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadGames": () => (/* binding */ LoadGames),
/* harmony export */   "LoadedPartialGamesSuccessfully": () => (/* binding */ LoadedPartialGamesSuccessfully),
/* harmony export */   "LoadedAllGamesSuccessfully": () => (/* binding */ LoadedAllGamesSuccessfully),
/* harmony export */   "LoadedLastPlayedGamesSuccessfully": () => (/* binding */ LoadedLastPlayedGamesSuccessfully),
/* harmony export */   "SaveLastPlayedGame": () => (/* binding */ SaveLastPlayedGame)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 7562);

const LoadGames = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GAMES] Request games data');
const LoadedPartialGamesSuccessfully = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GAMES] Loaded partial games data', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const LoadedAllGamesSuccessfully = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GAMES] Loaded ALL games data', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const LoadedLastPlayedGamesSuccessfully = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GAMES] Loaded LAST PLAYED games data', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const SaveLastPlayedGame = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GAMES] Save game as last played', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 2845:
/*!*************************************************!*\
  !*** ./src/app/state/reducers/Games.reducer.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "gamesReducer": () => (/* binding */ gamesReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _actions_Games_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/Games.actions */ 2103);


const initialState = {
    games: [],
    lastPlayedGames: [],
    loading: false
};
const gamesReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_Games_actions__WEBPACK_IMPORTED_MODULE_0__.LoadGames, (state) => (Object.assign(Object.assign({}, state), { loading: true }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_Games_actions__WEBPACK_IMPORTED_MODULE_0__.LoadedPartialGamesSuccessfully, (state, { loadedGames }) => (Object.assign(Object.assign({}, state), { loading: false, games: loadedGames }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_Games_actions__WEBPACK_IMPORTED_MODULE_0__.LoadedAllGamesSuccessfully, (state, { loadedGames }) => (Object.assign(Object.assign({}, state), { loading: false, games: loadedGames }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_Games_actions__WEBPACK_IMPORTED_MODULE_0__.LoadedLastPlayedGamesSuccessfully, (state, { lastPlayedGames }) => (Object.assign(Object.assign({}, state), { loading: false, lastPlayedGames: lastPlayedGames }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_Games_actions__WEBPACK_IMPORTED_MODULE_0__.SaveLastPlayedGame, (state, { lastPlayedGames }) => (Object.assign(Object.assign({}, state), { loading: false, lastPlayedGames: lastPlayedGames }))));
// export const lastPlayedGamesReducer = createReducer(
//     initialState,  
//     on(GamesActions.LoadGames, (state:GamesState) => ({ ...state, loading:true })), 
// ); 


/***/ }),

/***/ 2841:
/*!****************************************************!*\
  !*** ./src/app/state/selectors/Games.selectors.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lastPlayedGames": () => (/* binding */ lastPlayedGames),
/* harmony export */   "selectLastPlayedGames": () => (/* binding */ selectLastPlayedGames),
/* harmony export */   "selectLoading": () => (/* binding */ selectLoading)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 7562);

const lastPlayedGames = (state) => state.games;
const selectLastPlayedGames = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(lastPlayedGames, (state) => state.lastPlayedGames);
const selectLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(lastPlayedGames, (state) => state.loading);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map