(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posts-posts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-detail/posts-detail.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-detail/posts-detail.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-content-separator>\n\n    <div class=\"card main-content\">\n        <div class=\"card-header bg-white\">\n            <button class=\"btn btn-sm btn-secondary mr-1 float-right\"\n                    (click)=\"showHomePage()\">\n                Back\n            </button>\n            <strong>Post</strong>\n        </div>\n        <div class=\"card-body\">\n            <dt>{{post?.title}}</dt>\n            <dd>\n                <div [innerHtml]=\"post?.body\"></div>\n            </dd>\n        </div>\n    </div>\n\n    <div class=\"card context\">\n        <div class=\"card-header bg-white\">\n            <strong>Context</strong>\n        </div>\n        <div class=\"card-body\">\n\n        </div>\n    </div>\n</app-content-separator>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-content-separator>\n    <div class=\"card mt-3 main-content\">\n        <div class=\"card-header bg-white\">\n            Home\n        </div>\n        <div class=\"card-body\">\n            <div class=\"posts-article-wrapper\"\n                 *ngFor=\"let post of posts$ | async\"\n                 (click)=\"showDetails(post)\">\n                <article>\n                    {{post.title}}\n                </article>\n            </div>\n        </div>\n    </div>\n</app-content-separator>");

/***/ }),

/***/ "./src/app/posts/posts-detail/posts-detail.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/posts/posts-detail/posts-detail.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLWRldGFpbC9wb3N0cy1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/posts/posts-detail/posts-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/posts/posts-detail/posts-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: PostsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsDetailComponent", function() { return PostsDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/posts.service */ "./src/app/posts/service/posts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let PostsDetailComponent = class PostsDetailComponent {
    constructor(postsService, router, route) {
        this.postsService = postsService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.routeSubscription$ = this.route.params.subscribe((params) => {
            const postId = +params['postId'];
            this.loadPost(postId);
        });
    }
    ngOnDestroy() {
        if (this.routeSubscription$) {
            this.routeSubscription$.unsubscribe();
        }
    }
    loadPost(postId) {
        this.postsService.getPostById(postId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            this.post = null;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        }))
            .subscribe((post) => {
            this.post = post;
        });
    }
    showHomePage() {
        this.router.navigate(['../../'], { relativeTo: this.route });
    }
};
PostsDetailComponent.ctorParameters = () => [
    { type: _service_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PostsDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posts-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-detail/posts-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./posts-detail.component.scss */ "./src/app/posts/posts-detail/posts-detail.component.scss")).default]
    })
], PostsDetailComponent);



/***/ }),

/***/ "./src/app/posts/posts.component.scss":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("article {\n  padding: 10px;\n  font-weight: bold;\n}\n\n.posts-article-wrapper {\n  border-bottom: 1px solid #e6e6e6;\n}\n\n.posts-article-wrapper:hover {\n  background-color: #f3f3f3;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQ0FBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9wb3N0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFydGljbGV7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnBvc3RzLWFydGljbGUtd3JhcHBlcntcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZTZlNjtcbn1cblxuLnBvc3RzLWFydGljbGUtd3JhcHBlcjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iLCJhcnRpY2xlIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wb3N0cy1hcnRpY2xlLXdyYXBwZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZTZlNjtcbn1cblxuLnBvc3RzLWFydGljbGUtd3JhcHBlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/posts.service */ "./src/app/posts/service/posts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PostsComponent = class PostsComponent {
    constructor(postsService, router, route) {
        this.postsService = postsService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.posts$ = this.postsService.getPosts();
    }
    showDetails(post) {
        this.router.navigate(['posts', post.id], { relativeTo: this.route });
    }
};
PostsComponent.ctorParameters = () => [
    { type: _service_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./posts.component.scss */ "./src/app/posts/posts.component.scss")).default]
    })
], PostsComponent);



/***/ }),

/***/ "./src/app/posts/posts.module.ts":
/*!***************************************!*\
  !*** ./src/app/posts/posts.module.ts ***!
  \***************************************/
/*! exports provided: PostsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _posts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _posts_detail_posts_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts-detail/posts-detail.component */ "./src/app/posts/posts-detail/posts-detail.component.ts");
/* harmony import */ var _service_posts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/posts.service */ "./src/app/posts/service/posts.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");







const routes = [
    { path: '', component: _posts_component__WEBPACK_IMPORTED_MODULE_2__["PostsComponent"] },
    { path: 'posts/:postId', component: _posts_detail_posts_detail_component__WEBPACK_IMPORTED_MODULE_4__["PostsDetailComponent"] }
];
let PostsModule = class PostsModule {
};
PostsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_posts_component__WEBPACK_IMPORTED_MODULE_2__["PostsComponent"], _posts_detail_posts_detail_component__WEBPACK_IMPORTED_MODULE_4__["PostsDetailComponent"]],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        providers: [_service_posts_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"]]
    })
], PostsModule);



/***/ }),

/***/ "./src/app/posts/service/posts.service.ts":
/*!************************************************!*\
  !*** ./src/app/posts/service/posts.service.ts ***!
  \************************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rest_model_rest_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../rest/model/rest-options */ "./src/app/rest/model/rest-options.ts");
/* harmony import */ var _rest_service_rest_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rest/service/rest-data.service */ "./src/app/rest/service/rest-data.service.ts");




let PostsService = class PostsService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    getPosts() {
        const options = {
            link: { href: '/posts', method: _rest_model_rest_options__WEBPACK_IMPORTED_MODULE_2__["RestOptions"].GET }
        };
        return this.dataService.request(options);
    }
    getPostById(postId) {
        const options = {
            link: { href: '/posts/{postId}', method: _rest_model_rest_options__WEBPACK_IMPORTED_MODULE_2__["RestOptions"].GET },
            properties: { postId }
        };
        return this.dataService.request(options);
    }
};
PostsService.ctorParameters = () => [
    { type: _rest_service_rest_data_service__WEBPACK_IMPORTED_MODULE_3__["RestDataService"] }
];
PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PostsService);



/***/ }),

/***/ "./src/app/rest/model/rest-options.ts":
/*!********************************************!*\
  !*** ./src/app/rest/model/rest-options.ts ***!
  \********************************************/
/*! exports provided: RestOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestOptions", function() { return RestOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class RestOptions {
    constructor() {
        //Set to true if loader should not be shown when REST call is executed
        this.noLoader = false;
    }
}
RestOptions.GET = 'GET';
RestOptions.POST = 'POST';
RestOptions.PUT = 'PUT';
RestOptions.DELETE = 'DELETE';


/***/ }),

/***/ "./src/app/rest/service/rest-data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/rest/service/rest-data.service.ts ***!
  \***************************************************/
/*! exports provided: RestDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestDataService", function() { return RestDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let RestDataService = class RestDataService {
    constructor(http) {
        this.http = http;
        this._restCounter = 0;
    }
    get restCounter() { return this._restCounter; }
    ;
    request(options) {
        this.validateLink(options);
        options.link.href = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + this.replaceProperties(options.link.href, options.properties);
        return this.fireRequest(options);
    }
    validateLink(options) {
        if (!options || !options.link)
            throw new Error("Link is NULL");
    }
    replaceProperties(url, properties) {
        if (!url)
            return url;
        var url = url.split('?')[0];
        url = this.replace(url, properties);
        var queryParams = url.split('?')[1] || '';
        queryParams = this.replace(queryParams, properties).replace(/[^=&]+=(&|$)/g, "").replace(/&$/, "");
        if (!!queryParams)
            return `${url}?${queryParams}`;
        return url;
    }
    replace(template, properties) {
        return template.replace(/{[^{}]+}/g, function (key) {
            return properties[key.replace(/[{}]+/g, "")] == null ? "" : properties[key.replace(/[{}]+/g, "")];
        });
    }
    fireRequest(options) {
        if (!options.noLoader) {
            this._restCounter++;
        }
        return this.http.request(options.link.method, options.link.href, {
            body: options.requestBody
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            if (!options.noLoader) {
                this._restCounter--;
            }
        }));
    }
};
RestDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
RestDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RestDataService);



/***/ })

}]);
//# sourceMappingURL=posts-posts-module-es2015.js.map