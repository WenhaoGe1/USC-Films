(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aaronwenhaoge/cs571 hw8/hw8Angular/src/main.ts */"zUnb");


/***/ }),

/***/ "6DPj":
/*!*******************************************************!*\
  !*** ./src/app/components/mylist/mylist.component.ts ***!
  \*******************************************************/
/*! exports provided: MylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistComponent", function() { return MylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_myliststorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/myliststorage.service */ "xkqA");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function MylistComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " No items found in Watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MylistComponent_div_5_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", item_r6["cate"], "/", item_r6["id"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r6["url"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6["title"]);
} }
function MylistComponent_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My WatchList");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MylistComponent_div_5_div_3_div_4_Template, 7, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.watchlistArray);
} }
function MylistComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MylistComponent_div_5_div_3_Template, 5, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.watchlistArray !== null && ctx_r1.watchlistArray !== undefined && ctx_r1.watchlistArray.length > 0);
} }
function MylistComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My WatchList");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MylistComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", item_r9["cate"], "/", item_r9["id"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r9["url"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9["title"]);
} }
function MylistComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MylistComponent_div_7_div_1_Template, 9, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.watchlistArray);
} }
class MylistComponent {
    constructor(storageService, breakpointObserver) {
        this.storageService = storageService;
        this.breakpointObserver = breakpointObserver;
        this.storageKeyArray = [];
        this.watchlistArray = [];
    }
    ngOnInit() {
        // console.log(localStorage);
        this.showWatchList();
        if (this.breakpointObserver.isMatched('(max-width: 500px)')) {
            console.log('The 900px viewport matched!');
            this.isMobile = true;
        }
        else {
            this.isMobile = false;
        }
    }
    showWatchList() {
        if (localStorage.length == 0) {
            return;
        }
        this.storageKeyArray = Object.keys(localStorage);
        for (let i = 0; i < this.storageKeyArray.length; i++) {
            if (this.storageKeyArray[i].substr(1, 4) == "list") {
                var keyString = this.storageKeyArray[i].substr(6).split("^");
                var valueString = localStorage.getItem(this.storageKeyArray[i]).split("^");
                var id = keyString[0];
                var cate = keyString[1].replace('"', '');
                var title = valueString[0].replace('"', '');
                var url = valueString[1];
                var timestamp = valueString[2].replace('"', '');
                this.watchlistArray.push({
                    "id": id,
                    "cate": cate,
                    "title": title,
                    "url": "https://image.tmdb.org/t/p/w500" + url,
                    "timestamp": timestamp
                });
            }
        }
        if (this.watchlistArray.length == 0) {
            // document.getElementById("no_result_msg").style.display = "block";
            return;
        }
        this.watchlistArray.sort(function (a, b) { return b.timestamp - a.timestamp; });
        console.log(this.watchlistArray);
        // check storage start with "list"
        // document.getElementById("container").style.display = "block";
    }
}
MylistComponent.ɵfac = function MylistComponent_Factory(t) { return new (t || MylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_myliststorage_service__WEBPACK_IMPORTED_MODULE_1__["MyliststorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"])); };
MylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MylistComponent, selectors: [["app-mylist"]], decls: 8, vars: 4, consts: [["name", "viewport", "content", "width=device-width, initial-scale=1"], [1, "container", 2, "min-height", "900px"], ["class", "row", 4, "ngIf"], ["class", "row", "style", "", 4, "ngIf"], [4, "ngIf"], [1, "row"], [1, "col-1"], [1, "col-10"], ["id", "no_result_msg"], ["id", "watchlist_header"], ["id", "watchlist_card_container"], ["id", "watchlist_card", "class", "col-sm-6 col-md-4 col-lg-2", 4, "ngFor", "ngForOf"], ["id", "watchlist_card", 1, "col-sm-6", "col-md-4", "col-lg-2"], [3, "routerLink"], [1, "picsum-img-wrapper_web"], ["alt", "", 3, "src"], [1, "watchlist_card_title"], ["id", "watchlist_header_mobile"], ["class", "row", "style", "padding-bottom: 100px;", 4, "ngFor", "ngForOf"], [1, "row", 2, "padding-bottom", "100px"], ["id", "watchlist_card_container_mobile"], ["id", "watchlist_card_mobile"], [1, "picsum-img-wrapper_mobile"], [1, "watchlist_card_title_mobile"]], template: function MylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MylistComponent_div_4_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MylistComponent_div_5_Template, 5, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MylistComponent_div_6_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MylistComponent_div_7_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.watchlistArray === null || ctx.watchlistArray === undefined || ctx.watchlistArray.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile && ctx.watchlistArray !== null && ctx.watchlistArray !== undefined && ctx.watchlistArray.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile && ctx.watchlistArray !== null && ctx.watchlistArray !== undefined && ctx.watchlistArray.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%] {\n  background: #02064a;\n  color: white;\n  padding-top: 100px;\n  height: auto;\n}\n\n#watchlist_card_container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 275px;\n}\n\n#watchlist_card[_ngcontent-%COMP%] {\n  width: 125px;\n  height: 230px;\n  display:inline;\n  float: left;\n  margin-left: 20px;\n  margin-top: 20px;\n}\n\n.picsum-img-wrapper_web[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 125px;\n  height: 230px;\n}\n\n\n\n\n\n\n\n\n\n.picsum-img-wrapper_web[_ngcontent-%COMP%]    > .watchlist_card_title[_ngcontent-%COMP%] {\n  opacity:0;\n  transition-timing-function: ease-in-out;\n\n  color: white;\n  margin-top: -50px;\n  text-align: left;\n  left: 0;\n  width: 125px;\n  height: 60px;\n  font-size: small;\n}\n\n.picsum-img-wrapper_web[_ngcontent-%COMP%]    > .watchlist_card_title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  border-style: none;\n}\n\n\n\n\n\n\n\n.picsum-img-wrapper_web[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover, .picsum-img-wrapper_web[_ngcontent-%COMP%]:hover    > .watchlist_card_title[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  cursor: pointer;\n  opacity:1;\n  background-image: linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1),rgba(0,0,0,1));\n}\n\n\n\n#watchlist_header_mobile[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n\n#watchlist_card_container_mobile[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n}\n\n#watchlist_card_container_mobile[_ngcontent-%COMP%]   .picsum-img-wrapper_mobile[_ngcontent-%COMP%] {\n  left: 20%;\n\n  width: 60%;\n  height: 400px;\n\n  position: absolute;\n}\n\n#watchlist_card_container_mobile[_ngcontent-%COMP%]   .picsum-img-wrapper_mobile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.watchlist_card_title_mobile[_ngcontent-%COMP%] {\n\n  margin-top: -200px;\n  color: white;\n  opacity: 1;\n  float: left;\n  position: absolute;\n  width: 100%;\n  height: 200px;\n  background-image: linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1),rgba(0,0,0,1));\n  padding-left: 20px;\n  padding-top: 150px;\n}\n\n.picsum-img-wrapper_mobile[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15bGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUNBLGtDQUFrQzs7QUFDbEMsMkJBQTJCOztBQUMzQixxQkFBcUI7O0FBQ3JCLElBQUk7O0FBQ0o7RUFDRSxTQUFTO0VBQ1QsdUNBQXVDOztFQUV2QyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0EsZ0RBQWdEOztBQUNoRCxlQUFlOztBQUNmLElBQUk7O0FBQ0o7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFNBQVM7RUFDVCx1RkFBdUY7QUFDekY7O0FBTUEsbUJBQW1COztBQUNuQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUNBO0VBQ0UsU0FBUzs7RUFFVCxVQUFVO0VBQ1YsYUFBYTs7RUFFYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYix1RkFBdUY7RUFDdkYsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCIiwiZmlsZSI6Im15bGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogIzAyMDY0YTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuI3dhdGNobGlzdF9jYXJkX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjc1cHg7XG59XG5cbiN3YXRjaGxpc3RfY2FyZCB7XG4gIHdpZHRoOiAxMjVweDtcbiAgaGVpZ2h0OiAyMzBweDtcbiAgZGlzcGxheTppbmxpbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuXG4ucGljc3VtLWltZy13cmFwcGVyX3dlYiBpbWcge1xuICB3aWR0aDogMTI1cHg7XG4gIGhlaWdodDogMjMwcHg7XG59XG4vKi5waWNzdW0taW1nLXdyYXBwZXIgaW1nOmhvdmVyIHsqL1xuLyogIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsqL1xuLyogIGN1cnNvcjogcG9pbnRlcjsqL1xuLyp9Ki9cbi5waWNzdW0taW1nLXdyYXBwZXJfd2ViID4gLndhdGNobGlzdF9jYXJkX3RpdGxlIHtcbiAgb3BhY2l0eTowO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG5cbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEyNXB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG4ucGljc3VtLWltZy13cmFwcGVyX3dlYiA+IC53YXRjaGxpc3RfY2FyZF90aXRsZSBwIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuLyojd2F0Y2hsaXN0X2NhcmQ6aG92ZXIgLndhdGNobGlzdF9jYXJkX3RpdGxlIHsqL1xuLyogIG9wYWNpdHk6MTsqL1xuLyp9Ki9cbi5waWNzdW0taW1nLXdyYXBwZXJfd2ViIGltZzpob3ZlciwgLnBpY3N1bS1pbWctd3JhcHBlcl93ZWI6aG92ZXIgPiAud2F0Y2hsaXN0X2NhcmRfdGl0bGUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eToxO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMSkscmdiYSgwLDAsMCwxKSk7XG59XG5cblxuXG5cblxuLyogbW9iaWxlIHZlcnNpb24gKi9cbiN3YXRjaGxpc3RfaGVhZGVyX21vYmlsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiN3YXRjaGxpc3RfY2FyZF9jb250YWluZXJfbW9iaWxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDAwcHg7XG59XG4jd2F0Y2hsaXN0X2NhcmRfY29udGFpbmVyX21vYmlsZSAucGljc3VtLWltZy13cmFwcGVyX21vYmlsZSB7XG4gIGxlZnQ6IDIwJTtcblxuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDQwMHB4O1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuI3dhdGNobGlzdF9jYXJkX2NvbnRhaW5lcl9tb2JpbGUgLnBpY3N1bS1pbWctd3JhcHBlcl9tb2JpbGUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53YXRjaGxpc3RfY2FyZF90aXRsZV9tb2JpbGUge1xuXG4gIG1hcmdpbi10b3A6IC0yMDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAxO1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxyZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDEpLHJnYmEoMCwwLDAsMSkpO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxNTBweDtcbn1cblxuLnBpY3N1bS1pbWctd3JhcHBlcl9tb2JpbGU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "7Yvg":
/*!*************************************************************!*\
  !*** ./src/app/components/tv-detail/tv-detail.component.ts ***!
  \*************************************************************/
/*! exports provided: TvDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvDetailComponent", function() { return TvDetailComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_detailpage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/detailpage.service */ "nx5c");
/* harmony import */ var src_app_services_myliststorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/myliststorage.service */ "xkqA");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");










const _c0 = ["selfClosingAlert"];
const _c1 = ["carousel"];
function TvDetailComponent_youtube_player_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "youtube-player", 23);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("videoId", ctx_r0.videoLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("height", 400)("width", 650);
} }
function TvDetailComponent_youtube_player_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "youtube-player", 23);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("videoId", ctx_r1.videoLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("height", 200)("width", 325);
} }
function TvDetailComponent_ngb_alert_28_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function TvDetailComponent_ngb_alert_28_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r16.closed = true; return ctx_r16.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Added to watchlist.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TvDetailComponent_ngb_alert_29_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 26, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function TvDetailComponent_ngb_alert_29_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r19.closed = true; return ctx_r19.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Removed from watchlist.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TvDetailComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.detail["overview"]);
} }
function TvDetailComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\uF099");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\uF082");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("href", "https://twitter.com/intent/tweet?text=Watch+", ctx_r5.detail["title"], "%0A", ctx_r5.videoLink, "%0A&hashtags=USC,CSCI571,FightOn", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=", ctx_r5.videoLink, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function TvDetailComponent_div_33_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TvDetailComponent_div_33_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const cast_r22 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](36); return ctx_r24.getCastDetail(_r7, cast_r22["id"], cast_r22["profile_path"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cast_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", cast_r22["profile_path"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cast_r22["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cast_r22["character"]);
} }
function TvDetailComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Full Cast and Crew");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TvDetailComponent_div_33_div_6_Template, 9, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.castArray);
} }
function TvDetailComponent_ng_template_35_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 54);
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r27.castDetailsArray["profile_path"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function TvDetailComponent_ng_template_35_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 55);
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r28.castDetailsArray["profile_path"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function TvDetailComponent_ng_template_35_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Birth: ", ctx_r29.castDetailsArray["birthday"], "");
} }
function TvDetailComponent_ng_template_35_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r30.castDetailsArray["place_of_birth"], "");
} }
function TvDetailComponent_ng_template_35_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Gender: ", ctx_r31.castDetailsArray["gender"], "");
} }
function TvDetailComponent_ng_template_35_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Website: ", ctx_r32.castDetailsArray["homepage"], "");
} }
function TvDetailComponent_ng_template_35_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Known for: ", ctx_r33.castDetailsArray["known_for_department"], "");
} }
function TvDetailComponent_ng_template_35_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Also known as: ", ctx_r34.castDetailsArray["also_known_as"], "");
} }
function TvDetailComponent_ng_template_35_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\uF2D8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r35.castExternalArray["imdb_id"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function TvDetailComponent_ng_template_35_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\uF16D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r36.castExternalArray["Instagram_id"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function TvDetailComponent_ng_template_35_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\uF082 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r37.castExternalArray["facebook_id"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function TvDetailComponent_ng_template_35_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\uF099 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r38.castExternalArray["Twitter_id"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function TvDetailComponent_ng_template_35_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r39.castDetailsArray["biography"]);
} }
function TvDetailComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TvDetailComponent_ng_template_35_Template_button_click_3_listener() { const modal_r26 = ctx.$implicit; return modal_r26.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TvDetailComponent_ng_template_35_img_10_Template, 1, 1, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, TvDetailComponent_ng_template_35_img_11_Template, 1, 1, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, TvDetailComponent_ng_template_35_p_14_Template, 2, 1, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, TvDetailComponent_ng_template_35_p_15_Template, 2, 1, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, TvDetailComponent_ng_template_35_p_16_Template, 2, 1, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, TvDetailComponent_ng_template_35_p_17_Template, 2, 1, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, TvDetailComponent_ng_template_35_p_18_Template, 2, 1, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, TvDetailComponent_ng_template_35_div_19_Template, 3, 1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, TvDetailComponent_ng_template_35_span_20_Template, 4, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, TvDetailComponent_ng_template_35_span_21_Template, 4, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, TvDetailComponent_ng_template_35_span_22_Template, 4, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, TvDetailComponent_ng_template_35_span_23_Template, 4, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, TvDetailComponent_ng_template_35_div_24_Template, 6, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.castDetailsArray["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r8.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.castDetailsArray["birthday"] !== null && ctx_r8.castDetailsArray["birthday"] !== undefined && ctx_r8.castDetailsArray["birthday"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.castDetailsArray["place_of_birth"] !== null && ctx_r8.castDetailsArray["place_of_birth"] !== undefined && ctx_r8.castDetailsArray["place_of_birth"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.castDetailsArray["gender"] !== null && ctx_r8.castDetailsArray["gender"] !== undefined && ctx_r8.castDetailsArray["gender"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.castDetailsArray["homepage"] !== null && ctx_r8.castDetailsArray["homepage"] !== undefined && ctx_r8.castDetailsArray["homepage"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.castDetailsArray["known_for_department"] !== null && ctx_r8.castDetailsArray["known_for_department"] !== undefined && ctx_r8.castDetailsArray["known_for_department"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.castDetailsArray["also_known_as"] !== null && ctx_r8.castDetailsArray["also_known_as"] !== undefined && ctx_r8.castDetailsArray["also_known_as"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.castExternalArray["imdb_id"] !== null && ctx_r8.castExternalArray["imdb_id"] !== undefined && ctx_r8.castExternalArray["imdb_id"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.castExternalArray["Instagram_id"] !== null && ctx_r8.castExternalArray["Instagram_id"] !== undefined && ctx_r8.castExternalArray["Instagram_id"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.castExternalArray["facebook_id"] !== null && ctx_r8.castExternalArray["facebook_id"] !== undefined && ctx_r8.castExternalArray["facebook_id"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.castExternalArray["Twitter_id"] !== null && ctx_r8.castExternalArray["Twitter_id"] !== undefined && ctx_r8.castExternalArray["Twitter_id"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.castDetailsArray["biography"] !== null && ctx_r8.castDetailsArray["biography"] !== undefined && ctx_r8.castDetailsArray["biography"].length > 0);
} }
function TvDetailComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.reviewsArray.length);
} }
function TvDetailComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "small", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", review_r41["avatar_path"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("A review created by ", review_r41["author"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u2605", review_r41["rating"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Written by ", review_r41["author"], " on ", review_r41["created_at"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](review_r41["content"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", review_r41["url"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function TvDetailComponent_div_39_8_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r48 = ctx.$implicit;
    const j_r49 = ctx.index;
    const i_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "/watch/tv/", ctx_r47.recommendedTvIdMatrix[i_r45][j_r49], "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r48, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r47.recommendedTvNameMatrix[i_r45][j_r49]);
} }
function TvDetailComponent_div_39_8_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TvDetailComponent_div_39_8_ng_template_0_div_0_Template, 7, 3, "div", 82);
} if (rf & 2) {
    const array_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", array_r44);
} }
function TvDetailComponent_div_39_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TvDetailComponent_div_39_8_ng_template_0_Template, 1, 1, "ng-template", 81);
} }
function TvDetailComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Recommended Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ngb-carousel", 78, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TvDetailComponent_div_39_8_Template, 1, 0, undefined, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pauseOnHover", ctx_r11.pauseOnHover)("pauseOnFocus", ctx_r11.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r11.recommendedTvImagesMatrix);
} }
function TvDetailComponent_div_40_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r54 = ctx_r56.index;
    const img_r53 = ctx_r56.$implicit;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", ctx_r55.recommendedTvIdArray[i_r54], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r53, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r55.recommendedTvNameArray[i_r54]);
} }
function TvDetailComponent_div_40_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TvDetailComponent_div_40_5_ng_template_0_Template, 6, 3, "ng-template", 81);
} }
function TvDetailComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Recommended Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ngb-carousel", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TvDetailComponent_div_40_5_Template, 1, 0, undefined, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showNavigationIndicators", ctx_r12.showNavigationIndicators);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r12.recommendedTvImagesArray);
} }
function TvDetailComponent_div_41_8_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r63 = ctx.$implicit;
    const j_r64 = ctx.index;
    const i_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "/watch/tv/", ctx_r62.similarTvIdMatrix[i_r60][j_r64], "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r63, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r62.similarTvNameMatrix[i_r60][j_r64]);
} }
function TvDetailComponent_div_41_8_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TvDetailComponent_div_41_8_ng_template_0_div_0_Template, 7, 3, "div", 94);
} if (rf & 2) {
    const array_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", array_r59);
} }
function TvDetailComponent_div_41_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TvDetailComponent_div_41_8_ng_template_0_Template, 1, 1, "ng-template", 81);
} }
function TvDetailComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Similar Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ngb-carousel", 78, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TvDetailComponent_div_41_8_Template, 1, 0, undefined, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pauseOnHover", ctx_r13.pauseOnHover)("pauseOnFocus", ctx_r13.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r13.similarTvImagesMatrix);
} }
function TvDetailComponent_div_42_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r69 = ctx_r71.index;
    const img_r68 = ctx_r71.$implicit;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", ctx_r70.similarTvIdArray[i_r69], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r68, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r70.similarTvNameArray[i_r69]);
} }
function TvDetailComponent_div_42_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TvDetailComponent_div_42_5_ng_template_0_Template, 6, 3, "ng-template", 81);
} }
function TvDetailComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Similar Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ngb-carousel", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TvDetailComponent_div_42_5_Template, 1, 0, undefined, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showNavigationIndicators", ctx_r14.showNavigationIndicators);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r14.similarTvImagesArray);
} }
class TvDetailComponent {
    constructor(route, detailPageService, storageService, modalService, breakpointObserver) {
        this.route = route;
        this.detailPageService = detailPageService;
        this.storageService = storageService;
        this.modalService = modalService;
        this.breakpointObserver = breakpointObserver;
        this.isMobile = false;
        this._Added = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._Removed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.successMessage = '';
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.showNavigationIndicators = false;
        this.detail = [];
        this.twitterContent = "";
        this.castArray = [];
        this.castDetailsArray = [];
        this.castExternalArray = [];
        this.reviewsArray = [];
        this.recommendedTvArray = [];
        this.recommendedTvImagesArray = [];
        this.recommendedTvNameArray = [];
        this.recommendedTvIdArray = [];
        this.recommendedTvImagesMatrix = [];
        this.recommendedTvNameMatrix = [];
        this.recommendedTvIdMatrix = [];
        this.similarTvArray = [];
        this.similarTvImagesArray = [];
        this.similarTvNameArray = [];
        this.similarTvIdArray = [];
        this.similarTvImagesMatrix = [];
        this.similarTvNameMatrix = [];
        this.similarTvIdMatrix = [];
        this.isAdded = false;
        this.isRemoved = false;
    }
    ngOnInit() {
        this.category = "tv";
        this.id = this.route.snapshot.paramMap.get('id');
        this.getTvVideo();
        this.getTvDetail();
        this.getTvCast();
        this.getTvReviews();
        this._Added.subscribe(message => this.successMessage = message);
        this._Added.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(5000)).subscribe(() => {
            // console.log("123123");
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });
        this._Removed.subscribe(message => this.successMessage = message);
        this._Removed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(5000)).subscribe(() => {
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });
        this.getRecommendedTv();
        this.getSimilarTv();
        if (this.breakpointObserver.isMatched('(max-width: 500px)')) {
            console.log('The 900px viewport matched!');
            this.isMobile = true;
        }
        else {
            this.isMobile = false;
        }
    }
    getTvVideo() {
        this.detailPageService.getTvVideoService(this.id).subscribe((response) => {
            console.log(response["results"]);
            var resultArray = response["results"];
            var trailer;
            var teaser;
            // var target;
            for (var i = 0; i < resultArray.length; i++) {
                if (resultArray[i]["type"] == "Trailer") {
                    trailer = resultArray[i];
                    break;
                }
                else if (resultArray[i]["type"] == "Teaser") {
                    teaser = resultArray[i];
                }
            }
            if (trailer !== undefined) {
                this.videoLink = trailer["key"];
            }
            else if (trailer === undefined && trailer !== undefined) {
                this.videoLink = teaser["key"];
            }
            else {
                this.videoLink = "tzkWB85ULJY";
            }
            console.log(this.videoLink);
        });
    }
    getTvDetail() {
        this.detailPageService.getTvDetailService(this.id).subscribe((response) => {
            if (response["id"] != this.id) {
                // alert("tv detail id not match");
                return;
            }
            this.detail["title"] = response["name"];
            this.detail["poster_path"] = response["poster_path"];
            this.twitterContent += "Watch" + this.detail["title"] + this.videoLink + "#USC#CSCI571#FightOn";
            var genersArray = response["genres"];
            var str = "";
            for (var i = 0; i < genersArray.length; i++) {
                str += genersArray[i]["name"];
                if (i != genersArray.length - 1) {
                    str += ", ";
                }
            }
            this.detail["genres"] = str;
            str = null;
            var langArray = response["spoken_languages"];
            var langStr = "";
            for (var i = 0; i < langArray.length; i++) {
                langStr += langArray[i]["english_name"];
                if (i != langArray.length - 1) {
                    langStr += ", ";
                }
            }
            this.detail["spoken_languages"] = langStr;
            langStr = null;
            this.detail["release_date"] = response["first_air_date"].substr(0, 4);
            var runtime = response["episode_run_time"];
            var mins = runtime % 60;
            this.detail["minutes"] = mins + "mins";
            this.detail["hours"] = (runtime - mins) / 60 + "hrs";
            this.detail["overview"] = response["overview"];
            this.detail["vote_average"] = response["vote_average"];
            this.detail["tagline"] = response["tagline"];
            console.log(this.detail);
            this.checkStorageContains();
        });
    }
    getTvCast() {
        this.detailPageService.getTvCastService(this.id).subscribe((response) => {
            // console.log(this.castArray);
            for (let i = 0; i < response["cast"].length; i++) {
                if (response["cast"][i]["profile_path"] !== null) {
                    this.castArray.push({
                        "id": response["cast"][i]["id"],
                        "name": response["cast"][i]["name"],
                        "character": response["cast"][i]["character"],
                        "profile_path": "https://image.tmdb.org/t/p/w500/" + response["cast"][i]["profile_path"]
                    });
                }
            }
        });
    }
    getCastDetail(content, castId, profilePath) {
        this.modalService.open(content, { size: 'lg' });
        this.castDetailsArray = [];
        this.castExternalArray = [];
        this.castDetailsArray["profile_path"] = profilePath;
        this.detailPageService.getCastDetailService(castId).subscribe((response) => {
            // console.log(response);
            if (response["id"] != castId) {
                // alert("cast detail id not match");
                return;
            }
            if (response["birthday"] !== null) {
                this.castDetailsArray["birthday"] = response["birthday"];
            }
            if (response["gender"] === 1) {
                this.castDetailsArray["gender"] = "female";
            }
            else if (response["gender"] === 2) {
                this.castDetailsArray["gender"] = "male";
            }
            else if (response["gender"] === 0) {
                this.castDetailsArray["gender"] = "undefined";
            }
            if (response["place_of_birth"] !== null) {
                this.castDetailsArray["place_of_birth"] = response["place_of_birth"];
            }
            if (response["name"] !== null) {
                this.castDetailsArray["name"] = response["name"];
            }
            if (response["homepage"] !== null) {
                this.castDetailsArray["homepage"] = response["homepage"];
            }
            if (response["also_known_as"] !== null) {
                this.castDetailsArray["also_known_as"] = response["also_known_as"];
            }
            if (response["known_for_department"] !== null) {
                this.castDetailsArray["known_for_department"] = response["known_for_department"];
            }
            if (response["biography"] !== null) {
                this.castDetailsArray["biography"] = response["biography"];
            }
        });
        console.log(this.castDetailsArray);
        this.detailPageService.getCastExternalIdService(castId).subscribe((response) => {
            if (response["id"] != castId) {
                // alert("cast detail id not match");
                return;
            }
            if (response["imdb_id"] !== null && response["imdb_id"] !== undefined && response["imdb_id"].length > 0) {
                this.castExternalArray["imdb_id"] = "https://imdb.com/name/" + response["imdb_id"];
            }
            // console.log(this.castExternalArray["imdb_id"]);
            if (response["facebook_id"] !== null && response["facebook_id"] !== undefined && response["facebook_id"].length > 0) {
                this.castExternalArray["facebook_id"] = "https://facebook.com/" + response["facebook_id"];
            }
            if (response["Instagram_id"] !== null && response["Instagram_id"] !== undefined && response["Instagram_id"].length > 0) {
                this.castExternalArray["Instagram_id"] = "https://instagram.com/" + response["Instagram_id"];
            }
            if (response["Twitter_id"] !== null && response["Twitter_id"] !== undefined && response["Twitter_id"].length > 0) {
                this.castExternalArray["Twitter_id"] = "https://twitter.com/" + response["Twitter_id"];
            }
        });
        console.log(this.castExternalArray);
    }
    getTvReviews() {
        this.detailPageService.getTvReviewsService(this.id).subscribe((response) => {
            if (response["id"] != this.id) {
                // alert("tv review results id not match");
                return;
            }
            if (response["results"] === null || response["results"].length == 0) {
                console.log("review Array length: " + this.reviewsArray.length);
                return;
            }
            var results = response["results"];
            // console.log(results[0]["author"]);
            for (var count = 0; count < Math.min(10, results.length); count++) {
                this.reviewsArray[count] = {
                    "author": results[count]["author"]
                };
                this.reviewsArray[count]["content"] = results[count]["content"];
                var time = results[count]["created_at"];
                var month = time.substr(5, 2);
                var monthString;
                let monthIndicator;
                (function (monthIndicator) {
                    monthIndicator["Jan"] = "January";
                    monthIndicator["Feb"] = "February";
                    monthIndicator["Mar"] = "March";
                    monthIndicator["Apr"] = "April";
                    monthIndicator["May"] = "May";
                    monthIndicator["Jun"] = "June";
                    monthIndicator["Jul"] = "July";
                    monthIndicator["Aug"] = "August";
                    monthIndicator["Sep"] = "September";
                    monthIndicator["Oct"] = "October";
                    monthIndicator["Nov"] = "November";
                    monthIndicator["Dec"] = "December";
                })(monthIndicator || (monthIndicator = {}));
                if (month == "01") {
                    monthString = monthIndicator.Jan;
                }
                else if (month == "02") {
                    monthString = monthIndicator.Feb;
                }
                else if (month == "03") {
                    monthString = monthIndicator.Mar;
                }
                else if (month == "04") {
                    monthString = monthIndicator.Apr;
                }
                else if (month == "05") {
                    monthString = monthIndicator.May;
                }
                else if (month == "06") {
                    monthString = monthIndicator.Jun;
                }
                else if (month == "07") {
                    monthString = monthIndicator.Jul;
                }
                else if (month == "08") {
                    monthString = monthIndicator.Aug;
                }
                else if (month == "09") {
                    monthString = monthIndicator.Sep;
                }
                else if (month == "10") {
                    monthString = monthIndicator.Oct;
                }
                else if (month == "11") {
                    monthString = monthIndicator.Nov;
                }
                else if (month == "12") {
                    monthString = monthIndicator.Dec;
                }
                month = null;
                var day = time.substr(8, 2);
                var year = time.substr(0, 4);
                var hour;
                var halfday;
                if (time.substr(12, 2) > 12) {
                    hour = time.substr(11, 2) - 12;
                    halfday = "PM";
                }
                else {
                    hour = time.substr(11, 2);
                    halfday = "AM";
                }
                var minuteAndSecond = time.substr(13, 6);
                var timeString = monthString + " " + day + ", " + year + ", " + hour + minuteAndSecond + " " + halfday;
                monthString = null;
                day = null;
                year = null;
                hour = null;
                minuteAndSecond = null;
                halfday = null;
                this.reviewsArray[count]["created_at"] = timeString;
                timeString = null;
                this.reviewsArray[count]["url"] = results[count]["url"];
                if (results[count]["author_details"]["rating"] !== null) {
                    this.reviewsArray[count]["rating"] = results[count]["author_details"]["rating"];
                }
                else {
                    this.reviewsArray[count]["rating"] = 0;
                }
                if (results[count]["author_details"]["avatar_path"] !== null) {
                    if (results[count]["author_details"]["avatar_path"].substring(0, 6) == "/https") {
                        this.reviewsArray[count]["avatar_path"] = results[count]["author_details"]["avatar_path"].substr(1);
                    }
                    else {
                        this.reviewsArray[count]["avatar_path"] = "https://image.tmdb.org/t/p/original" + results[count]["author_details"]["avatar_path"];
                    }
                }
                else {
                    this.reviewsArray[count]["avatar_path"] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU";
                }
            }
        });
        console.log(this.reviewsArray);
    }
    getRecommendedTv() {
        this.detailPageService.getRecommendedTvService(this.id).subscribe((response) => {
            if (response["results"] === null || response["results"].length == 0) {
                // alert("not recommended tv");
                return;
            }
            this.recommendedTvArray = response["results"];
            // console.log(this.trendingMovieArray);
            for (var i = 0; i < this.recommendedTvArray.length; i++) {
                this.recommendedTvImagesArray[i] = 'https://image.tmdb.org/t/p/w500' + this.recommendedTvArray[i]["poster_path"];
                this.recommendedTvNameArray[i] = this.recommendedTvArray[i]["name"];
                this.recommendedTvIdArray[i] = this.recommendedTvArray[i]["id"];
            }
            // console.log(this.popularMovieImagesArray);
            // console.log(this.popularMovieNameArray);
            // console.log(this.popularMovieIdArray);
            for (var i = 0; i < 3; i++) {
                if (this.recommendedTvImagesArray.length > 0) {
                    this.recommendedTvImagesMatrix.push(this.recommendedTvImagesArray.splice(0, 6));
                }
            }
            if (this.recommendedTvImagesArray.length > 0) {
                this.recommendedTvImagesMatrix.push(this.recommendedTvImagesArray.splice(0, 2));
            }
            for (var i = 0; i < 3; i++) {
                if (this.recommendedTvNameArray.length > 0) {
                    this.recommendedTvNameMatrix.push(this.recommendedTvNameArray.splice(0, 6));
                }
            }
            if (this.recommendedTvNameArray.length > 0) {
                this.recommendedTvNameMatrix.push(this.recommendedTvNameArray.splice(0, 2));
            }
            for (var i = 0; i < 3; i++) {
                if (this.recommendedTvIdArray.length > 0) {
                    this.recommendedTvIdMatrix.push(this.recommendedTvIdArray.splice(0, 6));
                }
            }
            if (this.recommendedTvIdArray.length > 0) {
                this.recommendedTvIdMatrix.push(this.recommendedTvIdArray.splice(0, 2));
            }
            // console.log(this.recommendedMovieImagesMatrix);
            // console.log(this.recommendedMovieNameMatrix);
            // console.log(this.recommendedMovieIdMatrix);
            for (var i = 0; i < this.recommendedTvArray.length; i++) {
                this.recommendedTvImagesArray[i] = 'https://image.tmdb.org/t/p/w500' + this.recommendedTvArray[i]["poster_path"];
                this.recommendedTvNameArray[i] = this.recommendedTvArray[i]["name"];
                this.recommendedTvIdArray[i] = this.recommendedTvArray[i]["id"];
            }
        }, (error) => {
            console.log('get error when get playing movie form service');
        });
    }
    getSimilarTv() {
        this.detailPageService.getSimilarTvService(this.id).subscribe((response) => {
            if (response["results"] === null || response["results"].length == 0) {
                // alert("not recommended movie");
                return;
            }
            this.similarTvArray = response["results"];
            // console.log(this.trendingMovieArray);
            for (var i = 0; i < this.similarTvArray.length; i++) {
                this.similarTvImagesArray[i] = 'https://image.tmdb.org/t/p/w500' + this.similarTvArray[i]["poster_path"];
                this.similarTvNameArray[i] = this.similarTvArray[i]["name"];
                this.similarTvIdArray[i] = this.similarTvArray[i]["id"];
            }
            // console.log(this.popularMovieImagesArray);
            // console.log(this.popularMovieNameArray);
            // console.log(this.popularMovieIdArray);
            for (var i = 0; i < 3; i++) {
                if (this.similarTvImagesArray.length > 0) {
                    this.similarTvImagesMatrix.push(this.similarTvImagesArray.splice(0, 6));
                }
            }
            if (this.similarTvImagesArray.length > 0) {
                this.similarTvImagesMatrix.push(this.similarTvImagesArray.splice(0, 2));
            }
            for (var i = 0; i < 3; i++) {
                if (this.similarTvNameArray.length > 0) {
                    this.similarTvNameMatrix.push(this.similarTvNameArray.splice(0, 6));
                }
            }
            if (this.similarTvNameArray.length > 0) {
                this.similarTvNameMatrix.push(this.similarTvNameArray.splice(0, 2));
            }
            for (var i = 0; i < 3; i++) {
                if (this.similarTvIdArray.length > 0) {
                    this.similarTvIdMatrix.push(this.similarTvIdArray.splice(0, 6));
                }
            }
            if (this.similarTvIdArray.length > 0) {
                this.similarTvIdMatrix.push(this.similarTvIdArray.splice(0, 2));
            }
            //
            // console.log(this.similarMovieImagesMatrix);
            // console.log(this.similarMovieNameMatrix);
            // console.log(this.similarMovieIdMatrix);
            for (var i = 0; i < this.similarTvArray.length; i++) {
                this.similarTvImagesArray[i] = 'https://image.tmdb.org/t/p/w500' + this.similarTvArray[i]["poster_path"];
                this.similarTvNameArray[i] = this.similarTvArray[i]["name"];
                this.similarTvIdArray[i] = this.similarTvArray[i]["id"];
            }
        }, (error) => {
            console.log('get error when get playing movie form service');
        });
    }
    checkStorageContains() {
        document.getElementById("add_to_watchlist_btn").innerHTML = "";
        const keyString = "list^" + this.id + "^" + this.category;
        console.log("key string: " + keyString);
        this.storageService.print();
        if (this.storageService.containsKey(keyString)) {
            var movieTitle = this.detail["title"];
            var postURL = this.detail["poster_path"];
            const current = new Date();
            const timestamp = current.getTime();
            var valueString = movieTitle + "^" + postURL + "^" + timestamp;
            // console.log("value string: " + valueString);
            this.storageService.set(keyString, valueString);
            document.getElementById("add_to_watchlist_btn").innerHTML = "Remove from Watchlist";
        }
        else {
            document.getElementById("add_to_watchlist_btn").innerHTML = "Add to Watchlist";
        }
    }
    modifyWatchlist() {
        const keyString = "list^" + this.id + "^" + this.category;
        this.closed = false;
        if (this.storageService.containsKey(keyString)) {
            // 存在
            this.storageService.remove(keyString);
            this.storageService.print();
            this.isRemoved = true;
            this.isAdded = false;
            this._Removed.next(' - 12312313');
            document.getElementById("add_to_watchlist_btn").innerHTML = "Add to Watchlist";
            // 弹窗
        }
        else {
            // 不存在
            var movieTitle = this.detail["title"];
            var postURL = this.detail["poster_path"];
            const current = new Date();
            const timestamp = current.getTime();
            var valueString = movieTitle + "^" + postURL + "^" + timestamp;
            this.storageService.set(keyString, valueString);
            this.isAdded = true;
            this.isRemoved = false;
            this._Added.next(' - 12312313');
            document.getElementById("add_to_watchlist_btn").innerHTML = "Remove from Watchlist";
            // 弹窗
        }
    }
}
TvDetailComponent.ɵfac = function TvDetailComponent_Factory(t) { return new (t || TvDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_detailpage_service__WEBPACK_IMPORTED_MODULE_4__["DetailpageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_myliststorage_service__WEBPACK_IMPORTED_MODULE_5__["MyliststorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["BreakpointObserver"])); };
TvDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TvDetailComponent, selectors: [["app-tv-detail"]], viewQuery: function TvDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.selfClosingAlert = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 43, vars: 21, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "container"], [1, "row"], [1, "col-1"], [1, "col-10"], ["id", "movie_detail"], [1, "card", "mb-3"], ["id", "movie_detail_inner", 1, "row", "g-0"], [1, "col-md-8"], [1, "embed-responsive", "embed-responsive-16by9"], [3, "videoId", "height", "width", 4, "ngIf"], [1, "col-md-4"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["id", "add_to_watchlist_btn", 1, "btn", "btn-primary", 3, "click"], ["type", "success", 3, "closed", 4, "ngIf"], ["type", "danger", 3, "closed", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["id", "cast_modal"], ["style", "background: white;"], ["content", ""], ["class", "row", "id", "reviews", "style", "margin-bottom: 20px;", 4, "ngFor", "ngForOf"], [3, "videoId", "height", "width"], ["type", "success", 3, "closed"], ["selfClosingAlert", ""], ["type", "danger", 3, "closed"], [1, "card"], ["id", "move_decription", 1, "card-body"], ["data-size", "large", "target", "_blank", 1, "twitter-share-button", 3, "href"], [1, "fa", 2, "font-size", "30px", "color", "skyblue"], ["data-href", "https://developers.facebook.com/docs/plugins/", "data-layout", "button", "data-size", "small", 1, "fb-share-button", 2, "display", "inline-block"], ["target", "_blank", 1, "fb-xfbml-parse-ignore", 3, "href"], [1, "fa", 2, "font-size", "30px", "color", "blue"], ["id", "watchlist_card_container", 1, "d-flex", "flex-row", "flex-nowrap"], ["id", "cast_card", "class", "card", "style", "", 3, "click", 4, "ngFor", "ngForOf"], ["id", "cast_card", 1, "card", 3, "click"], ["id", "cast_img", "alt", "Card image cap", 1, "card-img-top", 3, "src"], ["id", "cast_content", 1, "card-body"], ["id", "cast_name", 2, "margin-top", "10px", "font-weight", "bold"], [2, "font-weight", "bold"], ["id", "cast_character", 2, "margin-bottom", "5px"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "card", "mb-3", 2, "max-width", "740px", "border-style", "none", "background", "white"], [1, "row", "g-0"], ["id", "modal_img", 1, "col-md-4", 2, "text-align", "center"], ["alt", "", "style", "width: 200px; height: 300px;", 3, "src", 4, "ngIf"], ["alt", "", "style", "width: 300px; height: 500px;", 3, "src", 4, "ngIf"], ["class", "card-text", 4, "ngIf"], ["class", "card", "style", "border-style: none; background: white;", 4, "ngIf"], ["alt", "", 2, "width", "200px", "height", "300px", 3, "src"], ["alt", "", 2, "width", "300px", "height", "500px", 3, "src"], ["target", "_blank", 3, "href"], ["placement", "top", "ngbTooltip", "Visit TMDB", 1, "fa", 2, "font-size", "36px", "color", "burlywood"], ["placement", "top", "ngbTooltip", "Visit Instagram", 1, "fa", 2, "font-size", "36px", "color", "violet"], ["placement", "top", "ngbTooltip", "Visit Facebook", 1, "fa", 2, "font-size", "36px", "color", "blue"], ["placement", "top", "ngbTooltip", "Visit Twitter", 1, "fa", 2, "font-size", "36px", "color", "skyblue"], [1, "card", 2, "border-style", "none", "background", "white"], [1, "card-text", 2, "font-size", "30px"], [1, "card-text", 2, "width", "100%"], [2, "opacity", "0.8", "display", "inline"], ["id", "reviews", 1, "row", 2, "margin-bottom", "20px"], [1, "card", "mb-3", 2, "background", "white", "border-radius", "15px"], ["id", "review_img", 1, "col-md-4"], [1, "text-center"], ["alt", "...", 3, "src"], [2, "color", "white", "background-color", "black", "border-radius", "50px", "padding", "5px"], [1, "text-muted"], ["id", "review_content", 1, "card-text"], ["type", "button", 1, "btn", "btn-link"], [3, "href"], [1, "col-sm-1", "col-xs-1"], [1, "col-sm-10", "col-xs-10"], ["id", "popular_movie", 1, "rows"], ["interval", "0", 3, "pauseOnHover", "pauseOnFocus"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], ["id", "recommended_movies_poster", 4, "ngFor", "ngForOf"], ["id", "recommended_movies_poster"], [1, "picsum-img-wrapper"], ["alt", "", 3, "src"], ["id", "recommended_movies_title", 1, "titles"], [1, "mobile_row"], ["interval", "0", 3, "showNavigationIndicators"], [3, "routerLink"], [1, "picsum-img-wrapper_mobile"], ["alt", "Random first slide", 3, "src"], [1, "carousel-caption"], [1, "rows"], ["id", "similar_movies_poster", 4, "ngFor", "ngForOf"], ["id", "similar_movies_poster"], ["id", "similar_movies_title", 1, "titles"]], template: function TvDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, TvDetailComponent_youtube_player_12_Template, 1, 3, "youtube-player", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, TvDetailComponent_youtube_player_13_Template, 1, 3, "youtube-player", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TvDetailComponent_Template_button_click_26_listener() { return ctx.modifyWatchlist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Add to Watchlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, TvDetailComponent_ngb_alert_28_Template, 3, 0, "ngb-alert", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, TvDetailComponent_ngb_alert_29_Template, 3, 0, "ngb-alert", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, TvDetailComponent_div_31_Template, 10, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, TvDetailComponent_div_32_Template, 15, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, TvDetailComponent_div_33_Template, 8, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, TvDetailComponent_ng_template_35_Template, 25, 14, "ng-template", 20, 21, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, TvDetailComponent_div_37_Template, 8, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, TvDetailComponent_div_38_Template, 23, 7, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, TvDetailComponent_div_39_Template, 10, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, TvDetailComponent_div_40_Template, 6, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, TvDetailComponent_div_41_Template, 10, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, TvDetailComponent_div_42_Template, 6, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.detail["title"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.detail["tagline"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate4"]("", ctx.detail["release_date"], " |\u2605 ", ctx.detail["vote_average"], " | ", ctx.detail["hours"], " ", ctx.detail["minutes"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Genres: ", ctx.detail["genres"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Spoken Languages: ", ctx.detail["spoken_languages"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAdded && !ctx.closed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isRemoved && !ctx.closed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.detail["overview"] !== null && ctx.detail["overview"] !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.videoLink !== null && ctx.videoLink !== undefined && ctx.videoLink.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.castArray !== null && ctx.castArray !== undefined && ctx.castArray.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.reviewsArray !== null && ctx.reviewsArray !== undefined && ctx.reviewsArray.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.reviewsArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isMobile && ctx.recommendedTvArray !== null && ctx.recommendedTvArray !== undefined && ctx.recommendedTvArray.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMobile && ctx.recommendedTvArray !== null && ctx.recommendedTvArray !== undefined && ctx.recommendedTvArray.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isMobile && ctx.similarTvArray !== null && ctx.similarTvArray !== undefined && ctx.similarTvArray.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMobile && ctx.similarTvArray !== null && ctx.similarTvArray !== undefined && ctx.similarTvArray.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_9__["YouTubePlayer"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAlert"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltip"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%] {\n  background: #090c43;\n  color: white;\n  padding-top: 100px;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: #090c43;\n  border-style: none;\n}\n\n\n\n\n\n\n\n#movie_detail[_ngcontent-%COMP%] {\n  \n}\n\n#move_decription[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n  width: 100%;\n}\n\n#watchlist_card_container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 390px;\n  max-height: 390px;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\n#cast_card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 175px;\n  min-width: 175px;\n  \n  \n  height: auto;\n  margin-left: 10px;\n\n  border-radius: 10px;\n  box-sizing: content-box;\n\n}\n\n#cast_card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n#cast_card[_ngcontent-%COMP%]   #cast_img[_ngcontent-%COMP%] {\n  width: 175px;\n  height: 265px;\n}\n\n#cast_content[_ngcontent-%COMP%] {\n  height: 100px;\n  text-align: center;\n  background: white;\n  padding-top: 0px;\n}\n\n#cast_content[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  line-height: 10px;\n  font-size: 13px;\n  \n  color: black;\n  width: 100%;\n\n  \n}\n\n#cast_modal[_ngcontent-%COMP%] {\n  background: white;\n}\n\n.card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 15px;\n  width: 100%;\n}\n\n#reviews[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#review_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}\n\n#reviews[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#review_content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.picsum-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 170px;\n}\n\n\n\n\n\n\n\n\n\n.titles[_ngcontent-%COMP%] {\n  opacity:0;\n  transition: ease-in-out;\n  color: white;\n  font-size: small;\n  margin-top: -40px;\n  left: 0;\n  bottom: 0;\n  float: left;\n  text-align: left;\n  \n  width: 100px;\n  height: 40px;\n  opacity: 0.7%;\n}\n\n\n\n\n\n\n\n.picsum-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover, .picsum-img-wrapper[_ngcontent-%COMP%]:hover    > .titles[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  cursor: pointer;\n  opacity:1;\n  background-image: linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1),rgba(0,0,0,1));\n}\n\n.rows[_ngcontent-%COMP%]   ngb-carousel[_ngcontent-%COMP%]  {\n  width: 100%;\n  height: 250px;\n  padding-left: 100px;\n  padding-right: 50px;\n  padding-top: 20px;\n}\n\n#recommended_movies_poster[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 170px;\n  display:inline;\n  float: left;\n  margin-left: 20px;\n}\n\n#similar_movies_poster[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 170px;\n  display:inline;\n  float: left;\n  margin-left: 20px;\n\n}\n\n\n\n.mobile_row[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 100%;\n  height: 400px;\n}\n\n.mobile_row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.picsum-img-wrapper_mobile[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mobile_row[_ngcontent-%COMP%]   .picsum-img-wrapper_mobile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 300px;\n  margin-left: 100px;\n}\n\n.picsum-img-wrapper_mobile[_ngcontent-%COMP%]:hover{\n  transform: scale(1.1);\n  cursor: pointer;\n  \n}\n\n.mobile_row[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n  width: 202px;\n  height: 150px;\n  margin-left: 38px;\n  text-align: center;\n  background-image: linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1),rgba(0,0,0,1));\n  margin-bottom: -20px;\n  padding-top: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR2LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFLQSx3QkFBd0I7O0FBQ3hCLHlCQUF5Qjs7QUFDekIsSUFBSTs7QUFFSjtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixpQkFBaUI7O0VBRWpCLG1CQUFtQjtFQUNuQix1QkFBdUI7O0FBRXpCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVzs7RUFFWCx5QkFBeUI7QUFDM0I7O0FBR0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNEJBQTRCO0FBQzlCOztBQUlBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFDQSxrQ0FBa0M7O0FBQ2xDLDJCQUEyQjs7QUFDM0IscUJBQXFCOztBQUNyQixJQUFJOztBQUNKO0VBQ0UsU0FBUztFQUNULHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUNBLHdDQUF3Qzs7QUFDeEMsZUFBZTs7QUFDZixJQUFJOztBQUVKO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixTQUFTO0VBQ1QsdUZBQXVGO0FBQ3pGOztBQUdBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxXQUFXO0VBQ1gsaUJBQWlCOztBQUVuQjs7QUFJQSxrQkFBa0I7O0FBQ2xCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBR0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUZBQXVGO0VBQ3ZGLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoidHYtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjMDkwYzQzO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiAjMDkwYzQzO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cblxuXG5cbi8qI21vdmllX2RldGFpbF9pbm5lciB7Ki9cbi8qICBiYWNrZ3JvdW5kOiAjMDkwYzQzOyovXG4vKn0qL1xuXG4jbW92aWVfZGV0YWlsIHtcbiAgLyptaW4taGVpZ2h0OiA0MDBweDsqL1xufVxuXG4jbW92ZV9kZWNyaXB0aW9uIHB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jd2F0Y2hsaXN0X2NhcmRfY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDM5MHB4O1xuICBtYXgtaGVpZ2h0OiAzOTBweDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbiNjYXN0X2NhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxNzVweDtcbiAgbWluLXdpZHRoOiAxNzVweDtcbiAgLypoZWlnaHQ6IDMzNXB4OyovXG4gIC8qbWF4LWhlaWdodDogMzM1cHg7Ki9cbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMTBweDtcblxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcblxufVxuI2Nhc3RfY2FyZDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2Nhc3RfY2FyZCAjY2FzdF9pbWcge1xuICB3aWR0aDogMTc1cHg7XG4gIGhlaWdodDogMjY1cHg7XG59XG4jY2FzdF9jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cbiNjYXN0X2NvbnRlbnQgPiBwIHtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLypiYWNrZ3JvdW5kOiB3aGl0ZTsqL1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC8qYm9yZGVyOiAxcHggc29saWQgcmVkOyovXG59XG5cblxuI2Nhc3RfbW9kYWwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmNhcmQtYm9keSBwIHtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jcmV2aWV3cyB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuI3Jldmlld19pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbiNyZXZpZXdzIHAge1xuICB3aWR0aDogMTAwJTtcbn1cbiNyZXZpZXdfY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG5cblxuLnBpY3N1bS1pbWctd3JhcHBlciBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTcwcHg7XG59XG4vKi5waWNzdW0taW1nLXdyYXBwZXIgaW1nOmhvdmVyIHsqL1xuLyogIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsqL1xuLyogIGN1cnNvcjogcG9pbnRlcjsqL1xuLyp9Ki9cbi50aXRsZXMge1xuICBvcGFjaXR5OjA7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIG1hcmdpbi10b3A6IC00MHB4O1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAvKmJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyovXG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBvcGFjaXR5OiAwLjclO1xufVxuLyoucGljc3VtLWltZy13cmFwcGVyOmhvdmVyID4gLnRpdGxlcyB7Ki9cbi8qICBvcGFjaXR5OjE7Ki9cbi8qfSovXG5cbi5waWNzdW0taW1nLXdyYXBwZXIgaW1nOmhvdmVyLCAucGljc3VtLWltZy13cmFwcGVyOmhvdmVyID4gLnRpdGxlcyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OjE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwwKSwgcmdiYSgwLDAsMCwxKSxyZ2JhKDAsMCwwLDEpKTtcbn1cblxuXG4ucm93cyBuZ2ItY2Fyb3VzZWwgIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuI3JlY29tbWVuZGVkX21vdmllc19wb3N0ZXIge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTcwcHg7XG4gIGRpc3BsYXk6aW5saW5lO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4jc2ltaWxhcl9tb3ZpZXNfcG9zdGVyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDE3MHB4O1xuICBkaXNwbGF5OmlubGluZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuXG59XG5cblxuXG4vKiBtb2JpbGUgc2xpZGVzICovXG4ubW9iaWxlX3JvdyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuLm1vYmlsZV9yb3cgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5waWNzdW0taW1nLXdyYXBwZXJfbW9iaWxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tb2JpbGVfcm93IC5waWNzdW0taW1nLXdyYXBwZXJfbW9iaWxlIGltZyB7XG4gIGhlaWdodDogMzAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbn1cblxuLnBpY3N1bS1pbWctd3JhcHBlcl9tb2JpbGU6aG92ZXJ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvKmJvcmRlcjogMXB4IHNvbGlkIHJlZDsqL1xufVxuXG5cbi5tb2JpbGVfcm93IC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgd2lkdGg6IDIwMnB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW4tbGVmdDogMzhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMSkscmdiYSgwLDAsMCwxKSk7XG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xuICBwYWRkaW5nLXRvcDogODBweDtcbn1cbiJdfQ== */", ".dark-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n        background-color: #292b2c;\n        color: white;\n      }\n      .dark-modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n        color: white;\n      }", "[_ngcontent-%COMP%]::-webkit-scrollbar {\n      width: 10px;\n    }\n\n    \n    [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n      background: #f1f1f1;\n    }\n\n    \n    [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n      background: #888;\n    }\n\n    \n    [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n      background: #555;\n    }"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[2, "background", "rgb(0, 0, 43)", "color", "white", "text-align", "center", "height", "30px", "width", "100%"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Powered by TMDB. Developed by Wenhao Ge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");




class AppComponent {
    constructor() {
        this.title = 'hw8Angular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[2, "overflow-y", "auto"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/mylist/mylist.component */ "6DPj");
/* harmony import */ var _components_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/movie-detail/movie-detail.component */ "bV9e");
/* harmony import */ var _components_tv_detail_tv_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tv-detail/tv-detail.component */ "7Yvg");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_myliststorage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/myliststorage.service */ "xkqA");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [_services_myliststorage_service__WEBPACK_IMPORTED_MODULE_12__["MyliststorageService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_13__["YouTubePlayerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"],
        _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_8__["MylistComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _components_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_9__["MovieDetailComponent"],
        _components_tv_detail_tv_detail_component__WEBPACK_IMPORTED_MODULE_10__["TvDetailComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_13__["YouTubePlayerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"]] }); })();


/***/ }),

/***/ "bV9e":
/*!*******************************************************************!*\
  !*** ./src/app/components/movie-detail/movie-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_detailpage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/detailpage.service */ "nx5c");
/* harmony import */ var src_app_services_myliststorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/myliststorage.service */ "xkqA");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");










const _c0 = ["selfClosingAlert"];
const _c1 = ["carousel"];
function MovieDetailComponent_youtube_player_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "youtube-player", 23);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("videoId", ctx_r0.videoLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("height", 400)("width", 650);
} }
function MovieDetailComponent_youtube_player_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "youtube-player", 23);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("videoId", ctx_r1.videoLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("height", 200)("width", 325);
} }
function MovieDetailComponent_ngb_alert_28_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function MovieDetailComponent_ngb_alert_28_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r16.closed = true; return ctx_r16.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Added to watchlist.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MovieDetailComponent_ngb_alert_29_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 26, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function MovieDetailComponent_ngb_alert_29_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r19.closed = true; return ctx_r19.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Removed from watchlist.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MovieDetailComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.detail["overview"]);
} }
function MovieDetailComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\uF099");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\uF082");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("href", "https://twitter.com/intent/tweet?text=Watch+", ctx_r5.detail["title"], "%0A", ctx_r5.videoLink, "%0A&hashtags=USC,CSCI571,FightOn", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=", ctx_r5.videoLink, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function MovieDetailComponent_div_33_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MovieDetailComponent_div_33_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const cast_r22 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](36); return ctx_r24.getCastDetail(_r7, cast_r22["id"], cast_r22["profile_path"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cast_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", cast_r22["profile_path"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cast_r22["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cast_r22["character"]);
} }
function MovieDetailComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Full Cast and Crew");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MovieDetailComponent_div_33_div_6_Template, 9, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.castArray);
} }
function MovieDetailComponent_ng_template_35_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 54);
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r27.castDetailsArray["profile_path"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function MovieDetailComponent_ng_template_35_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 55);
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r28.castDetailsArray["profile_path"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function MovieDetailComponent_ng_template_35_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Birth: ", ctx_r29.castDetailsArray["birthday"], "");
} }
function MovieDetailComponent_ng_template_35_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r30.castDetailsArray["place_of_birth"], "");
} }
function MovieDetailComponent_ng_template_35_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Gender: ", ctx_r31.castDetailsArray["gender"], "");
} }
function MovieDetailComponent_ng_template_35_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Website: ", ctx_r32.castDetailsArray["homepage"], "");
} }
function MovieDetailComponent_ng_template_35_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Known for: ", ctx_r33.castDetailsArray["known_for_department"], "");
} }
function MovieDetailComponent_ng_template_35_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Also known as: ", ctx_r34.castDetailsArray["also_known_as"], "");
} }
function MovieDetailComponent_ng_template_35_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\uF2D8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r35.castExternalArray["imdb_id"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function MovieDetailComponent_ng_template_35_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\uF16D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r36.castExternalArray["Instagram_id"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function MovieDetailComponent_ng_template_35_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\uF082 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r37.castExternalArray["facebook_id"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function MovieDetailComponent_ng_template_35_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\uF099 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r38.castExternalArray["Twitter_id"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function MovieDetailComponent_ng_template_35_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r39.castDetailsArray["biography"]);
} }
function MovieDetailComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MovieDetailComponent_ng_template_35_Template_button_click_3_listener() { const modal_r26 = ctx.$implicit; return modal_r26.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MovieDetailComponent_ng_template_35_img_10_Template, 1, 1, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MovieDetailComponent_ng_template_35_img_11_Template, 1, 1, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, MovieDetailComponent_ng_template_35_p_14_Template, 2, 1, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, MovieDetailComponent_ng_template_35_p_15_Template, 2, 1, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, MovieDetailComponent_ng_template_35_p_16_Template, 2, 1, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, MovieDetailComponent_ng_template_35_p_17_Template, 2, 1, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, MovieDetailComponent_ng_template_35_p_18_Template, 2, 1, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, MovieDetailComponent_ng_template_35_div_19_Template, 3, 1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, MovieDetailComponent_ng_template_35_span_20_Template, 4, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, MovieDetailComponent_ng_template_35_span_21_Template, 4, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, MovieDetailComponent_ng_template_35_span_22_Template, 4, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, MovieDetailComponent_ng_template_35_span_23_Template, 4, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, MovieDetailComponent_ng_template_35_div_24_Template, 6, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.castDetailsArray["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r8.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.castDetailsArray["birthday"] !== null && ctx_r8.castDetailsArray["birthday"] !== undefined && ctx_r8.castDetailsArray["birthday"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.castDetailsArray["place_of_birth"] !== null && ctx_r8.castDetailsArray["place_of_birth"] !== undefined && ctx_r8.castDetailsArray["place_of_birth"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.castDetailsArray["gender"] !== null && ctx_r8.castDetailsArray["gender"] !== undefined && ctx_r8.castDetailsArray["gender"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.castDetailsArray["homepage"] !== null && ctx_r8.castDetailsArray["homepage"] !== undefined && ctx_r8.castDetailsArray["homepage"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.castDetailsArray["known_for_department"] !== null && ctx_r8.castDetailsArray["known_for_department"] !== undefined && ctx_r8.castDetailsArray["known_for_department"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.castDetailsArray["also_known_as"] !== null && ctx_r8.castDetailsArray["also_known_as"] !== undefined && ctx_r8.castDetailsArray["also_known_as"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.castExternalArray["imdb_id"] !== null && ctx_r8.castExternalArray["imdb_id"] !== undefined && ctx_r8.castExternalArray["imdb_id"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.castExternalArray["Instagram_id"] !== null && ctx_r8.castExternalArray["Instagram_id"] !== undefined && ctx_r8.castExternalArray["Instagram_id"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.castExternalArray["facebook_id"] !== null && ctx_r8.castExternalArray["facebook_id"] !== undefined && ctx_r8.castExternalArray["facebook_id"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.castExternalArray["Twitter_id"] !== null && ctx_r8.castExternalArray["Twitter_id"] !== undefined && ctx_r8.castExternalArray["Twitter_id"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.castDetailsArray["biography"] !== null && ctx_r8.castDetailsArray["biography"] !== undefined && ctx_r8.castDetailsArray["biography"].length > 0);
} }
function MovieDetailComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.reviewsArray.length);
} }
function MovieDetailComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "small", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", review_r41["avatar_path"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("A review created by ", review_r41["author"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u2605", review_r41["rating"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Written by ", review_r41["author"], " on ", review_r41["created_at"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](review_r41["content"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", review_r41["url"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function MovieDetailComponent_div_39_8_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r48 = ctx.$implicit;
    const j_r49 = ctx.index;
    const i_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "/watch/movie/", ctx_r47.recommendedMovieIdMatrix[i_r45][j_r49], "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r48, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r47.recommendedMovieNameMatrix[i_r45][j_r49]);
} }
function MovieDetailComponent_div_39_8_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MovieDetailComponent_div_39_8_ng_template_0_div_0_Template, 7, 3, "div", 82);
} if (rf & 2) {
    const array_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", array_r44);
} }
function MovieDetailComponent_div_39_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MovieDetailComponent_div_39_8_ng_template_0_Template, 1, 1, "ng-template", 81);
} }
function MovieDetailComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Recommended Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ngb-carousel", 78, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MovieDetailComponent_div_39_8_Template, 1, 0, undefined, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pauseOnHover", ctx_r11.pauseOnHover)("pauseOnFocus", ctx_r11.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r11.recommendedMovieImagesMatrix);
} }
function MovieDetailComponent_div_40_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r54 = ctx_r56.index;
    const img_r53 = ctx_r56.$implicit;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r55.recommendedMovieIdArray[i_r54], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r53, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r55.recommendedMovieNameArray[i_r54]);
} }
function MovieDetailComponent_div_40_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MovieDetailComponent_div_40_5_ng_template_0_Template, 6, 3, "ng-template", 81);
} }
function MovieDetailComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Recommended Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ngb-carousel", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MovieDetailComponent_div_40_5_Template, 1, 0, undefined, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showNavigationIndicators", ctx_r12.showNavigationIndicators);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r12.recommendedMovieImagesArray);
} }
function MovieDetailComponent_div_41_8_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r63 = ctx.$implicit;
    const j_r64 = ctx.index;
    const i_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "/watch/movie/", ctx_r62.similarMovieIdMatrix[i_r60][j_r64], "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r63, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r62.similarMovieNameMatrix[i_r60][j_r64]);
} }
function MovieDetailComponent_div_41_8_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MovieDetailComponent_div_41_8_ng_template_0_div_0_Template, 7, 3, "div", 94);
} if (rf & 2) {
    const array_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", array_r59);
} }
function MovieDetailComponent_div_41_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MovieDetailComponent_div_41_8_ng_template_0_Template, 1, 1, "ng-template", 81);
} }
function MovieDetailComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Similar Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ngb-carousel", 78, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MovieDetailComponent_div_41_8_Template, 1, 0, undefined, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pauseOnHover", ctx_r13.pauseOnHover)("pauseOnFocus", ctx_r13.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r13.similarMovieImagesMatrix);
} }
function MovieDetailComponent_div_42_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r69 = ctx_r71.index;
    const img_r68 = ctx_r71.$implicit;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r70.similarMovieIdArray[i_r69], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r68, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r70.similarMovieNameArray[i_r69]);
} }
function MovieDetailComponent_div_42_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MovieDetailComponent_div_42_5_ng_template_0_Template, 6, 3, "ng-template", 81);
} }
function MovieDetailComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Similar Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ngb-carousel", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MovieDetailComponent_div_42_5_Template, 1, 0, undefined, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showNavigationIndicators", ctx_r14.showNavigationIndicators);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r14.similarMovieImagesArray);
} }
class MovieDetailComponent {
    constructor(route, detailPageService, storageService, modalService, breakpointObserver) {
        this.route = route;
        this.detailPageService = detailPageService;
        this.storageService = storageService;
        this.modalService = modalService;
        this.breakpointObserver = breakpointObserver;
        this.isMobile = false;
        this._Added = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._Removed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.successMessage = '';
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.showNavigationIndicators = false;
        this.detail = [];
        this.twitterContent = "";
        this.castArray = [];
        this.castDetailsArray = [];
        this.castExternalArray = [];
        this.reviewsArray = [];
        this.recommendedMovieArray = [];
        this.recommendedMovieImagesArray = [];
        this.recommendedMovieNameArray = [];
        this.recommendedMovieIdArray = [];
        this.recommendedMovieImagesMatrix = [];
        this.recommendedMovieNameMatrix = [];
        this.recommendedMovieIdMatrix = [];
        this.similarMovieArray = [];
        this.similarMovieImagesArray = [];
        this.similarMovieNameArray = [];
        this.similarMovieIdArray = [];
        this.similarMovieImagesMatrix = [];
        this.similarMovieNameMatrix = [];
        this.similarMovieIdMatrix = [];
        this.isAdded = false;
        this.isRemoved = false;
    }
    ngOnInit() {
        this.category = "movie";
        this.id = this.route.snapshot.paramMap.get('id');
        this.getMovieVideo();
        this.getMovieDetail();
        this.getMovieCast();
        this.getMovieReviews();
        this._Added.subscribe(message => this.successMessage = message);
        this._Added.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(5000)).subscribe(() => {
            // console.log("123123");
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });
        this._Removed.subscribe(message => this.successMessage = message);
        this._Removed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(5000)).subscribe(() => {
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });
        this.getRecommendedMovie();
        this.getSimilarMovie();
        if (this.breakpointObserver.isMatched('(max-width: 500px)')) {
            console.log('The 900px viewport matched!');
            this.isMobile = true;
        }
        else {
            this.isMobile = false;
        }
    }
    getMovieVideo() {
        this.detailPageService.getMovieVideoService(this.id).subscribe((response) => {
            // console.log(response["results"]);
            var resultArray = response["results"];
            var trailer;
            var teaser;
            // var target;
            for (var i = 0; i < resultArray.length; i++) {
                if (resultArray[i]["type"] == "Trailer") {
                    trailer = resultArray[i];
                    break;
                }
                else if (resultArray[i]["type"] == "Teaser") {
                    teaser = resultArray[i];
                }
            }
            if (trailer !== undefined) {
                this.videoLink = trailer["key"];
            }
            else if (trailer === undefined && trailer !== undefined) {
                this.videoLink = teaser["key"];
            }
            else {
                this.videoLink = "tzkWB85ULJY";
            }
            console.log(this.videoLink);
        });
    }
    getMovieDetail() {
        this.detailPageService.getMovieDetailService(this.id).subscribe((response) => {
            if (response["id"] != this.id) {
                // alert("movie detail id not match");
                return;
            }
            this.detail["title"] = response["title"];
            this.detail["poster_path"] = response["poster_path"];
            this.twitterContent += "Watch" + this.detail["title"] + this.videoLink + "#USC#CSCI571#FightOn";
            var genersArray = response["genres"];
            var str = "";
            for (var i = 0; i < genersArray.length; i++) {
                str += genersArray[i]["name"];
                if (i != genersArray.length - 1) {
                    str += ", ";
                }
            }
            this.detail["genres"] = str;
            str = null;
            var langArray = response["spoken_languages"];
            var langStr = "";
            for (var i = 0; i < langArray.length; i++) {
                langStr += langArray[i]["english_name"];
                if (i != langArray.length - 1) {
                    langStr += ", ";
                }
            }
            this.detail["spoken_languages"] = langStr;
            langStr = null;
            this.detail["release_date"] = response["release_date"].substr(0, 4);
            var runtime = response["runtime"];
            var mins = runtime % 60;
            this.detail["minutes"] = mins + "mins";
            this.detail["hours"] = (runtime - mins) / 60 + "hrs";
            this.detail["overview"] = response["overview"];
            this.detail["vote_average"] = response["vote_average"];
            this.detail["tagline"] = response["tagline"];
            console.log(this.detail);
            this.checkStorageContains();
        });
    }
    getMovieCast() {
        this.detailPageService.getMovieCastService(this.id).subscribe((response) => {
            if (response["id"] != this.id) {
                // alert("movie detail id not match");
                return;
            }
            // console.log(this.castArray);
            for (let i = 0; i < response["cast"].length; i++) {
                if (response["cast"][i]["profile_path"] !== null) {
                    this.castArray.push({
                        "id": response["cast"][i]["id"],
                        "name": response["cast"][i]["name"],
                        "character": response["cast"][i]["character"],
                        "profile_path": "https://image.tmdb.org/t/p/w500/" + response["cast"][i]["profile_path"]
                    });
                }
            }
        });
    }
    getCastDetail(content, castId, profilePath) {
        this.modalService.open(content, { size: 'lg' });
        this.castDetailsArray = [];
        this.castExternalArray = [];
        this.castDetailsArray["profile_path"] = profilePath;
        this.detailPageService.getCastDetailService(castId).subscribe((response) => {
            // console.log(response);
            if (response["id"] != castId) {
                // alert("cast detail id not match");
                return;
            }
            if (response["birthday"] !== null) {
                this.castDetailsArray["birthday"] = response["birthday"];
            }
            if (response["gender"] === 1) {
                this.castDetailsArray["gender"] = "female";
            }
            else if (response["gender"] === 2) {
                this.castDetailsArray["gender"] = "male";
            }
            else if (response["gender"] === 0) {
                this.castDetailsArray["gender"] = "undefined";
            }
            if (response["place_of_birth"] !== null) {
                this.castDetailsArray["place_of_birth"] = response["place_of_birth"];
            }
            if (response["name"] !== null) {
                this.castDetailsArray["name"] = response["name"];
            }
            if (response["homepage"] !== null) {
                this.castDetailsArray["homepage"] = response["homepage"];
            }
            // console.log(this.castDetailsArray["homepage"]);
            if (response["also_known_as"] !== null) {
                this.castDetailsArray["also_known_as"] = response["also_known_as"];
            }
            if (response["known_for_department"] !== null) {
                this.castDetailsArray["known_for_department"] = response["known_for_department"];
            }
            if (response["biography"] !== null) {
                this.castDetailsArray["biography"] = response["biography"];
            }
        });
        console.log(this.castDetailsArray);
        this.detailPageService.getCastExternalIdService(castId).subscribe((response) => {
            if (response["id"] != castId) {
                // alert("cast detail id not match");
                return;
            }
            if (response["imdb_id"] !== null && response["imdb_id"] !== undefined && response["imdb_id"].length > 0) {
                this.castExternalArray["imdb_id"] = "https://imdb.com/name/" + response["imdb_id"];
            }
            // console.log(this.castExternalArray["imdb_id"]);
            if (response["facebook_id"] !== null && response["facebook_id"] !== undefined && response["facebook_id"].length > 0) {
                this.castExternalArray["facebook_id"] = "https://facebook.com/" + response["facebook_id"];
            }
            if (response["Instagram_id"] !== null && response["Instagram_id"] !== undefined && response["Instagram_id"].length > 0) {
                this.castExternalArray["Instagram_id"] = "https://instagram.com/" + response["Instagram_id"];
            }
            if (response["Twitter_id"] !== null && response["Twitter_id"] !== undefined && response["Twitter_id"].length > 0) {
                this.castExternalArray["Twitter_id"] = "https://twitter.com/" + response["Twitter_id"];
            }
        });
        console.log(this.castExternalArray);
    }
    getMovieReviews() {
        this.detailPageService.getMovieReviewsService(this.id).subscribe((response) => {
            if (response["id"] != this.id) {
                // alert("review results id not match");
                return;
            }
            if (response["results"] === null || response["results"].length == 0) {
                console.log("review Array length: " + this.reviewsArray.length);
                return;
            }
            var results = response["results"];
            // console.log(results[0]["author"]);
            for (var count = 0; count < Math.min(10, results.length); count++) {
                this.reviewsArray[count] = {
                    "author": results[count]["author"]
                };
                this.reviewsArray[count]["content"] = results[count]["content"];
                var time = results[count]["created_at"];
                var month = time.substr(5, 2);
                var monthString;
                let monthIndicator;
                (function (monthIndicator) {
                    monthIndicator["Jan"] = "January";
                    monthIndicator["Feb"] = "February";
                    monthIndicator["Mar"] = "March";
                    monthIndicator["Apr"] = "April";
                    monthIndicator["May"] = "May";
                    monthIndicator["Jun"] = "June";
                    monthIndicator["Jul"] = "July";
                    monthIndicator["Aug"] = "August";
                    monthIndicator["Sep"] = "September";
                    monthIndicator["Oct"] = "October";
                    monthIndicator["Nov"] = "November";
                    monthIndicator["Dec"] = "December";
                })(monthIndicator || (monthIndicator = {}));
                if (month == "01") {
                    monthString = monthIndicator.Jan;
                }
                else if (month == "02") {
                    monthString = monthIndicator.Feb;
                }
                else if (month == "03") {
                    monthString = monthIndicator.Mar;
                }
                else if (month == "04") {
                    monthString = monthIndicator.Apr;
                }
                else if (month == "05") {
                    monthString = monthIndicator.May;
                }
                else if (month == "06") {
                    monthString = monthIndicator.Jun;
                }
                else if (month == "07") {
                    monthString = monthIndicator.Jul;
                }
                else if (month == "08") {
                    monthString = monthIndicator.Aug;
                }
                else if (month == "09") {
                    monthString = monthIndicator.Sep;
                }
                else if (month == "10") {
                    monthString = monthIndicator.Oct;
                }
                else if (month == "11") {
                    monthString = monthIndicator.Nov;
                }
                else if (month == "12") {
                    monthString = monthIndicator.Dec;
                }
                month = null;
                var day = time.substr(8, 2);
                var year = time.substr(0, 4);
                var hour;
                var halfday;
                if (time.substr(12, 2) > 12) {
                    hour = time.substr(11, 2) - 12;
                    halfday = "PM";
                }
                else {
                    hour = time.substr(11, 2);
                    halfday = "AM";
                }
                var minuteAndSecond = time.substr(13, 6);
                var timeString = monthString + " " + day + ", " + year + ", " + hour + minuteAndSecond + " " + halfday;
                monthString = null;
                day = null;
                year = null;
                hour = null;
                minuteAndSecond = null;
                halfday = null;
                this.reviewsArray[count]["created_at"] = timeString;
                timeString = null;
                this.reviewsArray[count]["url"] = results[count]["url"];
                if (results[count]["author_details"]["rating"] !== null) {
                    this.reviewsArray[count]["rating"] = results[count]["author_details"]["rating"];
                }
                else {
                    this.reviewsArray[count]["rating"] = 0;
                }
                if (results[count]["author_details"]["avatar_path"] !== null) {
                    if (results[count]["author_details"]["avatar_path"].substring(0, 6) == "/https") {
                        this.reviewsArray[count]["avatar_path"] = results[count]["author_details"]["avatar_path"].substr(1);
                    }
                    else {
                        this.reviewsArray[count]["avatar_path"] = "https://image.tmdb.org/t/p/original" + results[count]["author_details"]["avatar_path"];
                    }
                }
                else {
                    this.reviewsArray[count]["avatar_path"] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU";
                }
            }
        });
        console.log(this.reviewsArray);
    }
    getRecommendedMovie() {
        this.detailPageService.getRecommendedMovieService(this.id).subscribe((response) => {
            if (response["results"] === null || response["results"].length == 0) {
                // alert("not recommended movie");
                return;
            }
            this.recommendedMovieArray = response["results"];
            // console.log(this.trendingMovieArray);
            for (var i = 0; i < this.recommendedMovieArray.length; i++) {
                this.recommendedMovieImagesArray[i] = 'https://image.tmdb.org/t/p/w500' + this.recommendedMovieArray[i]["poster_path"];
                this.recommendedMovieNameArray[i] = this.recommendedMovieArray[i]["title"];
                this.recommendedMovieIdArray[i] = this.recommendedMovieArray[i]["id"];
            }
            // console.log(this.popularMovieImagesArray);
            // console.log(this.popularMovieNameArray);
            // console.log(this.popularMovieIdArray);
            for (var i = 0; i < 3; i++) {
                if (this.recommendedMovieImagesArray.length > 0) {
                    this.recommendedMovieImagesMatrix.push(this.recommendedMovieImagesArray.splice(0, 6));
                }
            }
            if (this.recommendedMovieImagesArray.length > 0) {
                this.recommendedMovieImagesMatrix.push(this.recommendedMovieImagesArray.splice(0, 2));
            }
            for (var i = 0; i < 3; i++) {
                if (this.recommendedMovieNameArray.length > 0) {
                    this.recommendedMovieNameMatrix.push(this.recommendedMovieNameArray.splice(0, 6));
                }
            }
            if (this.recommendedMovieNameArray.length > 0) {
                this.recommendedMovieNameMatrix.push(this.recommendedMovieNameArray.splice(0, 2));
            }
            for (var i = 0; i < 3; i++) {
                if (this.recommendedMovieIdArray.length > 0) {
                    this.recommendedMovieIdMatrix.push(this.recommendedMovieIdArray.splice(0, 6));
                }
            }
            if (this.recommendedMovieIdArray.length > 0) {
                this.recommendedMovieIdMatrix.push(this.recommendedMovieIdArray.splice(0, 2));
            }
            for (var i = 0; i < this.recommendedMovieArray.length; i++) {
                this.recommendedMovieImagesArray[i] = 'https://image.tmdb.org/t/p/w500' + this.recommendedMovieArray[i]["poster_path"];
                this.recommendedMovieNameArray[i] = this.recommendedMovieArray[i]["title"];
                this.recommendedMovieIdArray[i] = this.recommendedMovieArray[i]["id"];
            }
            // console.log(this.recommendedMovieImagesMatrix);
            // console.log(this.recommendedMovieNameMatrix);
            // console.log(this.recommendedMovieIdMatrix);
        }, (error) => {
            console.log('get error when get playing movie form service');
        });
    }
    getSimilarMovie() {
        this.detailPageService.getSimilarMovieService(this.id).subscribe((response) => {
            if (response["results"] === null || response["results"].length == 0) {
                // alert("not recommended movie");
                return;
            }
            this.similarMovieArray = response["results"];
            // console.log(this.trendingMovieArray);
            for (var i = 0; i < this.similarMovieArray.length; i++) {
                this.similarMovieImagesArray[i] = 'https://image.tmdb.org/t/p/w500' + this.similarMovieArray[i]["poster_path"];
                this.similarMovieNameArray[i] = this.similarMovieArray[i]["title"];
                this.similarMovieIdArray[i] = this.similarMovieArray[i]["id"];
            }
            // console.log(this.popularMovieImagesArray);
            // console.log(this.popularMovieNameArray);
            // console.log(this.popularMovieIdArray);
            for (var i = 0; i < 3; i++) {
                if (this.similarMovieImagesArray.length > 0) {
                    this.similarMovieImagesMatrix.push(this.similarMovieImagesArray.splice(0, 6));
                }
            }
            if (this.similarMovieImagesArray.length > 0) {
                this.similarMovieImagesMatrix.push(this.similarMovieImagesArray.splice(0, 2));
            }
            for (var i = 0; i < 3; i++) {
                if (this.similarMovieNameArray.length > 0) {
                    this.similarMovieNameMatrix.push(this.similarMovieNameArray.splice(0, 6));
                }
            }
            if (this.similarMovieNameArray.length > 0) {
                this.similarMovieNameMatrix.push(this.similarMovieNameArray.splice(0, 2));
            }
            for (var i = 0; i < 3; i++) {
                if (this.similarMovieIdArray.length > 0) {
                    this.similarMovieIdMatrix.push(this.similarMovieIdArray.splice(0, 6));
                }
            }
            if (this.similarMovieIdArray.length > 0) {
                this.similarMovieIdMatrix.push(this.similarMovieIdArray.splice(0, 2));
            }
            //
            // console.log(this.similarMovieImagesMatrix);
            // console.log(this.similarMovieNameMatrix);
            // console.log(this.similarMovieIdMatrix);
            for (var i = 0; i < this.similarMovieArray.length; i++) {
                this.similarMovieImagesArray[i] = 'https://image.tmdb.org/t/p/w500' + this.similarMovieArray[i]["poster_path"];
                this.similarMovieNameArray[i] = this.similarMovieArray[i]["title"];
                this.similarMovieIdArray[i] = this.similarMovieArray[i]["id"];
            }
        }, (error) => {
            console.log('get error when get playing movie form service');
        });
    }
    checkStorageContains() {
        document.getElementById("add_to_watchlist_btn").innerHTML = "";
        const watchlistString = "list^" + this.id + "^" + this.category;
        // console.log("key string: " + keyString);
        this.storageService.print();
        var movieTitle = this.detail["title"];
        var postURL = this.detail["poster_path"];
        const current = new Date();
        const timestamp = current.getTime();
        var valueString = movieTitle + "^" + postURL + "^" + timestamp;
        if (this.storageService.containsKey(watchlistString)) {
            // console.log("value string: " + valueString);
            this.storageService.set(watchlistString, valueString);
            document.getElementById("add_to_watchlist_btn").innerHTML = "Remove from Watchlist";
        }
        else {
            document.getElementById("add_to_watchlist_btn").innerHTML = "Add to Watchlist";
        }
        const continueWatchingString = "cont^" + this.id + "^" + this.category;
        this.storageService.set(continueWatchingString, valueString);
    }
    modifyWatchlist() {
        const keyString = "list^" + this.id + "^" + this.category;
        this.closed = false;
        if (this.storageService.containsKey(keyString)) {
            // 存在
            this.storageService.remove(keyString);
            this.storageService.print();
            this.isRemoved = true;
            this.isAdded = false;
            this._Removed.next(' - 12312313');
            document.getElementById("add_to_watchlist_btn").innerHTML = "Add to Watchlist";
        }
        else {
            // 不存在
            var movieTitle = this.detail["title"];
            var postURL = this.detail["poster_path"];
            const current = new Date();
            const timestamp = current.getTime();
            var valueString = movieTitle + "^" + postURL + "^" + timestamp;
            this.storageService.set(keyString, valueString);
            this.isAdded = true;
            this.isRemoved = false;
            this._Added.next(' - 12312313');
            document.getElementById("add_to_watchlist_btn").innerHTML = "Remove from Watchlist";
        }
    }
}
MovieDetailComponent.ɵfac = function MovieDetailComponent_Factory(t) { return new (t || MovieDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_detailpage_service__WEBPACK_IMPORTED_MODULE_4__["DetailpageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_myliststorage_service__WEBPACK_IMPORTED_MODULE_5__["MyliststorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["BreakpointObserver"])); };
MovieDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MovieDetailComponent, selectors: [["app-movie-detail"]], viewQuery: function MovieDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.selfClosingAlert = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 43, vars: 21, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "container"], [1, "row"], [1, "col-1"], [1, "col-10"], ["id", "movie_detail"], [1, "card", "mb-3"], ["id", "movie_detail_inner", 1, "row", "g-0"], [1, "col-md-8"], [1, "embed-responsive", "embed-responsive-16by9"], [3, "videoId", "height", "width", 4, "ngIf"], [1, "col-md-4"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["id", "add_to_watchlist_btn", 1, "btn", "btn-primary", 3, "click"], ["type", "success", 3, "closed", 4, "ngIf"], ["type", "danger", 3, "closed", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["id", "cast_modal"], ["style", "background: white;"], ["content", ""], ["class", "row", "id", "reviews", "style", "margin-bottom: 20px;", 4, "ngFor", "ngForOf"], [3, "videoId", "height", "width"], ["type", "success", 3, "closed"], ["selfClosingAlert", ""], ["type", "danger", 3, "closed"], [1, "card"], ["id", "move_decription", 1, "card-body"], ["data-size", "large", "target", "_blank", 1, "twitter-share-button", 3, "href"], [1, "fa", 2, "font-size", "30px", "color", "skyblue"], ["data-href", "https://developers.facebook.com/docs/plugins/", "data-layout", "button", "data-size", "small", 1, "fb-share-button", 2, "display", "inline-block"], ["target", "_blank", 1, "fb-xfbml-parse-ignore", 3, "href"], [1, "fa", 2, "font-size", "30px", "color", "blue"], ["id", "watchlist_card_container", 1, "d-flex", "flex-row", "flex-nowrap"], ["id", "cast_card", "class", "card", "style", "", 3, "click", 4, "ngFor", "ngForOf"], ["id", "cast_card", 1, "card", 3, "click"], ["id", "cast_img", "alt", "Card image cap", 1, "card-img-top", 3, "src"], ["id", "cast_content", 1, "card-body"], ["id", "cast_name", 2, "margin-top", "10px", "font-weight", "bold"], [2, "font-weight", "bold"], ["id", "cast_character", 2, "margin-bottom", "5px"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "card", "mb-3", 2, "max-width", "740px", "border-style", "none", "background", "white"], [1, "row", "g-0"], ["id", "modal_img", 1, "col-md-4", 2, "text-align", "center"], ["alt", "", "style", "width: 200px; height: 300px;", 3, "src", 4, "ngIf"], ["alt", "", "style", "width: 300px; height: 500px;", 3, "src", 4, "ngIf"], ["class", "card-text", 4, "ngIf"], ["class", "card", "style", "border-style: none; background: white;", 4, "ngIf"], ["alt", "", 2, "width", "200px", "height", "300px", 3, "src"], ["alt", "", 2, "width", "300px", "height", "500px", 3, "src"], ["target", "_blank", 3, "href"], ["placement", "top", "ngbTooltip", "Visit TMDB", 1, "fa", 2, "font-size", "36px", "color", "burlywood"], ["placement", "top", "ngbTooltip", "Visit Instagram", 1, "fa", 2, "font-size", "36px", "color", "violet"], ["placement", "top", "ngbTooltip", "Visit Facebook", 1, "fa", 2, "font-size", "36px", "color", "blue"], ["placement", "top", "ngbTooltip", "Visit Twitter", 1, "fa", 2, "font-size", "36px", "color", "skyblue"], [1, "card", 2, "border-style", "none", "background", "white"], [1, "card-text", 2, "font-size", "30px"], [1, "card-text", 2, "width", "100%"], [2, "opacity", "0.8", "display", "inline"], ["id", "reviews", 1, "row", 2, "margin-bottom", "20px"], [1, "card", "mb-3", 2, "background", "white", "border-radius", "15px"], ["id", "review_img", 1, "col-md-4"], [1, "text-center"], ["alt", "...", 3, "src"], [2, "color", "white", "background-color", "black", "border-radius", "50px", "padding", "5px"], [1, "text-muted"], ["id", "review_content", 1, "card-text"], ["type", "button", 1, "btn", "btn-link"], [3, "href"], [1, "col-sm-1", "col-xs-1"], [1, "col-sm-10", "col-xs-10"], ["id", "popular_movie", 1, "rows"], ["interval", "0", 3, "pauseOnHover", "pauseOnFocus"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], ["id", "recommended_movies_poster", 4, "ngFor", "ngForOf"], ["id", "recommended_movies_poster"], [1, "picsum-img-wrapper"], ["alt", "", 3, "src"], ["id", "recommended_movies_title", 1, "titles"], [1, "mobile_row"], ["interval", "0", 3, "showNavigationIndicators"], [3, "routerLink"], [1, "picsum-img-wrapper_mobile"], ["alt", "Random first slide", 3, "src"], [1, "carousel-caption"], [1, "rows"], ["id", "similar_movies_poster", 4, "ngFor", "ngForOf"], ["id", "similar_movies_poster"], ["id", "similar_movies_title", 1, "titles"]], template: function MovieDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, MovieDetailComponent_youtube_player_12_Template, 1, 3, "youtube-player", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MovieDetailComponent_youtube_player_13_Template, 1, 3, "youtube-player", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MovieDetailComponent_Template_button_click_26_listener() { return ctx.modifyWatchlist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Add to Watchlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, MovieDetailComponent_ngb_alert_28_Template, 3, 0, "ngb-alert", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, MovieDetailComponent_ngb_alert_29_Template, 3, 0, "ngb-alert", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, MovieDetailComponent_div_31_Template, 10, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, MovieDetailComponent_div_32_Template, 15, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, MovieDetailComponent_div_33_Template, 8, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, MovieDetailComponent_ng_template_35_Template, 25, 14, "ng-template", 20, 21, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, MovieDetailComponent_div_37_Template, 8, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, MovieDetailComponent_div_38_Template, 23, 7, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, MovieDetailComponent_div_39_Template, 10, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, MovieDetailComponent_div_40_Template, 6, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, MovieDetailComponent_div_41_Template, 10, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, MovieDetailComponent_div_42_Template, 6, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.detail["title"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.detail["tagline"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate4"]("", ctx.detail["release_date"], " |\u2605 ", ctx.detail["vote_average"], " | ", ctx.detail["hours"], " ", ctx.detail["minutes"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Genres: ", ctx.detail["genres"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Spoken Languages: ", ctx.detail["spoken_languages"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAdded && !ctx.closed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isRemoved && !ctx.closed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.detail["overview"] !== null && ctx.detail["overview"] !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.videoLink !== null && ctx.videoLink !== undefined && ctx.videoLink.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.castArray !== null && ctx.castArray !== undefined && ctx.castArray.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.reviewsArray !== null && ctx.reviewsArray !== undefined && ctx.reviewsArray.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.reviewsArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isMobile && ctx.recommendedMovieArray !== null && ctx.recommendedMovieArray !== undefined && ctx.recommendedMovieArray.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMobile && ctx.recommendedMovieArray !== null && ctx.recommendedMovieArray !== undefined && ctx.recommendedMovieArray.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isMobile && ctx.similarMovieArray !== null && ctx.similarMovieArray !== undefined && ctx.similarMovieArray.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMobile && ctx.similarMovieArray !== null && ctx.similarMovieArray !== undefined && ctx.similarMovieArray.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_9__["YouTubePlayer"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAlert"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltip"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%] {\n  background: #090c43;\n  color: white;\n  padding-top: 100px;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: #090c43;\n  border-style: none;\n}\n\n\n\n\n\n\n\n#movie_detail[_ngcontent-%COMP%] {\n  \n}\n\n#move_decription[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n  width: 100%;\n}\n\n#watchlist_card_container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 390px;\n  max-height: 390px;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\n#cast_card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 175px;\n  min-width: 175px;\n  \n  \n  height: auto;\n  margin-left: 10px;\n\n  border-radius: 10px;\n  box-sizing: content-box;\n\n}\n\n#cast_card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n#cast_card[_ngcontent-%COMP%]   #cast_img[_ngcontent-%COMP%] {\n  width: 175px;\n  height: 265px;\n}\n\n#cast_content[_ngcontent-%COMP%] {\n  height: 100px;\n  text-align: center;\n  background: white;\n  padding-top: 0px;\n}\n\n#cast_content[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  line-height: 10px;\n  font-size: 13px;\n  \n  color: black;\n  width: 100%;\n\n  \n}\n\n#cast_modal[_ngcontent-%COMP%] {\n  background: white;\n}\n\n.card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 15px;\n  width: 100%;\n}\n\n#reviews[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#review_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}\n\n#reviews[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#review_content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.picsum-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 170px;\n}\n\n\n\n\n\n\n\n\n\n.titles[_ngcontent-%COMP%] {\n  opacity:0;\n  transition: ease-in-out;\n  color: white;\n  font-size: small;\n  margin-top: -40px;\n  left: 0;\n  bottom: 0;\n  float: left;\n  text-align: left;\n  \n  width: 100px;\n  height: 40px;\n  opacity: 0.7%;\n}\n\n\n\n\n\n\n\n.picsum-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover, .picsum-img-wrapper[_ngcontent-%COMP%]:hover    > .titles[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  cursor: pointer;\n  opacity:1;\n  background-image: linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1),rgba(0,0,0,1));\n}\n\n.rows[_ngcontent-%COMP%]   ngb-carousel[_ngcontent-%COMP%]  {\n  width: 100%;\n  height: 250px;\n  padding-left: 100px;\n  padding-right: 50px;\n  padding-top: 20px;\n}\n\n#recommended_movies_poster[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 170px;\n  display:inline;\n  float: left;\n  margin-left: 20px;\n}\n\n#similar_movies_poster[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 170px;\n  display:inline;\n  float: left;\n  margin-left: 20px;\n\n}\n\n\n\n.mobile_row[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 100%;\n  height: 400px;\n}\n\n.mobile_row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.picsum-img-wrapper_mobile[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mobile_row[_ngcontent-%COMP%]   .picsum-img-wrapper_mobile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 300px;\n  margin-left: 100px;\n}\n\n.picsum-img-wrapper_mobile[_ngcontent-%COMP%]:hover{\n  transform: scale(1.1);\n  cursor: pointer;\n  \n}\n\n.mobile_row[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n  width: 202px;\n  height: 150px;\n  margin-left: 38px;\n  text-align: center;\n  background-image: linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1),rgba(0,0,0,1));\n  margin-bottom: -20px;\n  padding-top: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFLQSx3QkFBd0I7O0FBQ3hCLHlCQUF5Qjs7QUFDekIsSUFBSTs7QUFFSjtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixpQkFBaUI7O0VBRWpCLG1CQUFtQjtFQUNuQix1QkFBdUI7O0FBRXpCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVzs7RUFFWCx5QkFBeUI7QUFDM0I7O0FBR0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNEJBQTRCO0FBQzlCOztBQUlBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFDQSxrQ0FBa0M7O0FBQ2xDLDJCQUEyQjs7QUFDM0IscUJBQXFCOztBQUNyQixJQUFJOztBQUNKO0VBQ0UsU0FBUztFQUNULHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUNBLHdDQUF3Qzs7QUFDeEMsZUFBZTs7QUFDZixJQUFJOztBQUVKO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixTQUFTO0VBQ1QsdUZBQXVGO0FBQ3pGOztBQUdBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxXQUFXO0VBQ1gsaUJBQWlCOztBQUVuQjs7QUFJQSxrQkFBa0I7O0FBQ2xCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBR0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUZBQXVGO0VBQ3ZGLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoibW92aWUtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjMDkwYzQzO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiAjMDkwYzQzO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cblxuXG5cbi8qI21vdmllX2RldGFpbF9pbm5lciB7Ki9cbi8qICBiYWNrZ3JvdW5kOiAjMDkwYzQzOyovXG4vKn0qL1xuXG4jbW92aWVfZGV0YWlsIHtcbiAgLyptaW4taGVpZ2h0OiA0MDBweDsqL1xufVxuXG4jbW92ZV9kZWNyaXB0aW9uIHB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jd2F0Y2hsaXN0X2NhcmRfY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDM5MHB4O1xuICBtYXgtaGVpZ2h0OiAzOTBweDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbiNjYXN0X2NhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxNzVweDtcbiAgbWluLXdpZHRoOiAxNzVweDtcbiAgLypoZWlnaHQ6IDMzNXB4OyovXG4gIC8qbWF4LWhlaWdodDogMzM1cHg7Ki9cbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMTBweDtcblxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcblxufVxuI2Nhc3RfY2FyZDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2Nhc3RfY2FyZCAjY2FzdF9pbWcge1xuICB3aWR0aDogMTc1cHg7XG4gIGhlaWdodDogMjY1cHg7XG59XG4jY2FzdF9jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cbiNjYXN0X2NvbnRlbnQgPiBwIHtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLypiYWNrZ3JvdW5kOiB3aGl0ZTsqL1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC8qYm9yZGVyOiAxcHggc29saWQgcmVkOyovXG59XG5cblxuI2Nhc3RfbW9kYWwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmNhcmQtYm9keSBwIHtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jcmV2aWV3cyB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuI3Jldmlld19pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbiNyZXZpZXdzIHAge1xuICB3aWR0aDogMTAwJTtcbn1cbiNyZXZpZXdfY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG5cblxuLnBpY3N1bS1pbWctd3JhcHBlciBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTcwcHg7XG59XG4vKi5waWNzdW0taW1nLXdyYXBwZXIgaW1nOmhvdmVyIHsqL1xuLyogIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsqL1xuLyogIGN1cnNvcjogcG9pbnRlcjsqL1xuLyp9Ki9cbi50aXRsZXMge1xuICBvcGFjaXR5OjA7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIG1hcmdpbi10b3A6IC00MHB4O1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAvKmJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyovXG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBvcGFjaXR5OiAwLjclO1xufVxuLyoucGljc3VtLWltZy13cmFwcGVyOmhvdmVyID4gLnRpdGxlcyB7Ki9cbi8qICBvcGFjaXR5OjE7Ki9cbi8qfSovXG5cbi5waWNzdW0taW1nLXdyYXBwZXIgaW1nOmhvdmVyLCAucGljc3VtLWltZy13cmFwcGVyOmhvdmVyID4gLnRpdGxlcyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OjE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwwKSwgcmdiYSgwLDAsMCwxKSxyZ2JhKDAsMCwwLDEpKTtcbn1cblxuXG4ucm93cyBuZ2ItY2Fyb3VzZWwgIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuI3JlY29tbWVuZGVkX21vdmllc19wb3N0ZXIge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTcwcHg7XG4gIGRpc3BsYXk6aW5saW5lO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4jc2ltaWxhcl9tb3ZpZXNfcG9zdGVyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDE3MHB4O1xuICBkaXNwbGF5OmlubGluZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuXG59XG5cblxuXG4vKiBtb2JpbGUgc2xpZGVzICovXG4ubW9iaWxlX3JvdyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuLm1vYmlsZV9yb3cgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5waWNzdW0taW1nLXdyYXBwZXJfbW9iaWxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tb2JpbGVfcm93IC5waWNzdW0taW1nLXdyYXBwZXJfbW9iaWxlIGltZyB7XG4gIGhlaWdodDogMzAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbn1cblxuLnBpY3N1bS1pbWctd3JhcHBlcl9tb2JpbGU6aG92ZXJ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvKmJvcmRlcjogMXB4IHNvbGlkIHJlZDsqL1xufVxuXG5cbi5tb2JpbGVfcm93IC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgd2lkdGg6IDIwMnB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW4tbGVmdDogMzhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMSkscmdiYSgwLDAsMCwxKSk7XG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xuICBwYWRkaW5nLXRvcDogODBweDtcbn1cbiJdfQ== */", ".dark-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n      background-color: #292b2c;\n      color: white;\n    }\n    .dark-modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n      color: white;\n    }"] });


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/search.service */ "l3hs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function NavbarComponent_nav_0_div_14_ng_template_3_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    const r_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().result;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w780" + r_r6["backdrop_path"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function NavbarComponent_nav_0_div_14_ng_template_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return ["r.name"]; };
function NavbarComponent_nav_0_div_14_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavbarComponent_nav_0_div_14_ng_template_3_img_1_Template, 1, 1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavbarComponent_nav_0_div_14_ng_template_3_ng_template_2_Template, 1, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ngb-highlight", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r6 = ctx.result;
    const t_r7 = ctx.term;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", r_r6["media_type"], "/", r_r6["id"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", r_r6["backdrop_path"] !== null && r_r6["backdrop_path"] !== undefined && r_r6["backdrop_path"].length > 0)("ngIfElse", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("result", r_r6["title"] || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0))("term", t_r7);
} }
function NavbarComponent_nav_0_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "fieldset", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NavbarComponent_nav_0_div_14_ng_template_3_Template, 5, 7, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NavbarComponent_nav_0_div_14_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.model = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx_r3.searchFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.model)("resultTemplate", _r4)("resultFormatter", ctx_r3.resultFormatBandListValue)("inputFormatter", ctx_r3.formatter)("ngbTypeahead", ctx_r3.search);
} }
const _c1 = function () { return ["active"]; };
const _c2 = function () { return { exact: true }; };
const _c3 = function () { return ["/"]; };
const _c4 = function () { return ["/mylist"]; };
function NavbarComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "USC Films");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_nav_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.isMenuCollapsed = !ctx_r14.isMenuCollapsed; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u2630 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_nav_0_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.isMenuCollapsed = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_nav_0_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.isMenuCollapsed = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "My List");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, NavbarComponent_nav_0_div_14_Template, 6, 7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx_r0.isMenuCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isMobile);
} }
function NavbarComponent_nav_1_div_13_ng_template_3_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    const r_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().result;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w780" + r_r21["backdrop_path"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function NavbarComponent_nav_1_div_13_ng_template_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function NavbarComponent_nav_1_div_13_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavbarComponent_nav_1_div_13_ng_template_3_img_1_Template, 1, 1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavbarComponent_nav_1_div_13_ng_template_3_ng_template_2_Template, 1, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ngb-highlight", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r21 = ctx.result;
    const t_r22 = ctx.term;
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", r_r21["media_type"], "/", r_r21["id"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", r_r21["backdrop_path"] !== null && r_r21["backdrop_path"] !== undefined && r_r21["backdrop_path"].length > 0)("ngIfElse", _r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("result", r_r21["title"] || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0))("term", t_r22);
} }
function NavbarComponent_nav_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "fieldset", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NavbarComponent_nav_1_div_13_ng_template_3_Template, 5, 7, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NavbarComponent_nav_1_div_13_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r27.model = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx_r18.searchFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r18.model)("resultTemplate", _r19)("resultFormatter", ctx_r18.resultFormatBandListValue)("inputFormatter", ctx_r18.formatter)("ngbTypeahead", ctx_r18.search);
} }
function NavbarComponent_nav_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "USC Films");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_nav_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r29.isMenuCollapsed = !ctx_r29.isMenuCollapsed; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u2630 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_nav_1_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r31.isMenuCollapsed = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_nav_1_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r32.isMenuCollapsed = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "My List");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, NavbarComponent_nav_1_div_13_Template, 6, 7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx_r1.isMenuCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isMobile);
} }
class NavbarComponent {
    constructor(searchService, breakpointObserver) {
        this.searchService = searchService;
        this.breakpointObserver = breakpointObserver;
        // public title: string = "12341";
        this.isMobile = false;
        this.isMenuCollapsed = true;
        this.searching = false;
        this.searchFailed = false;
        this.search = (text$) => {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(), 
            // switchMap(term =>
            //   this._service.searchResult(term).pipe(tap(() => this.searchFailed = false),
            //     catchError(() => {
            //       this.searchFailed = true;
            //       return of([]);
            //     }))
            // ),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((term) => this.searchService.searchResultService(term)));
        };
        this.formatter = (x) => " ";
    }
    ngOnInit() {
        if (this.breakpointObserver.isMatched('(max-width: 500px)')) {
            console.log('The 900px viewport matched!');
            this.isMobile = true;
        }
        else {
            this.isMobile = false;
        }
    }
    print() {
        console.log("sdfasdf");
    }
    /**
     * Used to format the result data from the lookup into the
     * display and list values. Maps `{name: "band", id:"id" }` into a string
     */
    resultFormatBandListValue(value) {
        if (value.name) {
            return value.name;
        }
        else if (value.title) {
            return value.title;
        }
    }
    /**
     * Initially binds the string value and then after selecting
     * an item by checking either for string or key/value object.
     */
    inputFormatBandListValue(value) {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]])], decls: 2, vars: 2, consts: [["class", "navbar navbar-expand-lg navbar-dark fixed-top", "style", "background: rgb(0, 0, 43); width: 100%;", 4, "ngIf"], ["class", "navbar navbar-expand-lg navbar-dark fixed-top", "style", "background: rgb(0, 0, 43); width: 414px;", 4, "ngIf"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top", 2, "background", "rgb(0, 0, 43)", "width", "100%"], ["routerLink", "/", "type", "button", 1, "btn", "btn-outline-dark", 2, "margin-left", "20px", "border-style", "none", "font-size", "20px", "color", "white", "min-width", "120px"], ["type", "button", 1, "navbar-toggler", 2, "color", "white", 3, "click"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], ["collapse", "ngbCollapse"], [1, "navbar-nav"], [1, "nav-item", 3, "routerLinkActive", "routerLinkActiveOptions"], [1, "nav-link", 2, "margin-left", "20px", "width", "60px", 3, "routerLink", "click"], [1, "nav-item", 3, "routerLinkActive"], [1, "nav-link", 2, "margin-left", "20px", "width", "70px", 3, "routerLink", "click"], ["class", "search_outer", "style", "margin-left: 700px; float: left;", 4, "ngIf"], [1, "search_outer", 2, "margin-left", "700px", "float", "left"], [1, "form-inline"], [1, "form-group"], ["rt", ""], ["id", "typeahead-http", "type", "text", "placeholder", "search", 1, "form-control", "mx-sm-3", "typeahead-http", 3, "ngModel", "resultTemplate", "resultFormatter", "inputFormatter", "ngbTypeahead", "ngModelChange"], [3, "routerLink"], ["style", "width: 60px; height: 40px", 3, "src", 4, "ngIf", "ngIfElse"], ["noImg", ""], [3, "result", "term"], [2, "width", "60px", "height", "40px", 3, "src"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top", 2, "background", "rgb(0, 0, 43)", "width", "414px"], ["routerLink", "/", "type", "button", 1, "btn", "btn-outline-dark", 2, "margin-left", "20px", "border-style", "none", "font-size", "20px", "color", "white"], [1, "collapse", "navbar-collapse", 2, "position", "relative", 3, "ngbCollapse"], [1, "nav-link", 2, "margin-left", "20px", "float", "right", 3, "routerLink", "click"], ["class", "search_outer", "style", "float: left", 4, "ngIf"], [1, "search_outer", 2, "float", "left"], ["type", "text", "placeholder", "search", 1, "form-control", "mx-sm-3", "typeahead-http", 3, "ngModel", "resultTemplate", "resultFormatter", "inputFormatter", "ngbTypeahead", "ngModelChange"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NavbarComponent_nav_0_Template, 15, 12, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavbarComponent_nav_1_Template, 14, 12, "nav", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCollapse"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbHighlight"]], styles: ["nav[_ngcontent-%COMP%] {\n  \n  \n}\n.search_outer[_ngcontent-%COMP%] {\n  \n  \n  border-bottom: white;\n\n}\n.search_outer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n\n  background: rgb(0, 0, 43);\n  color: white;\n}\n.search_outer[_ngcontent-%COMP%]   ngb-highlight[_ngcontent-%COMP%] {\n  \n  color: white;\n}\n  .dropdown-menu {\n  width: 100%;\n  white-space: nowrap!important;\n  overflow: hidden!important;\n  text-overflow: ellipsis!important;\n  background: rgb(0, 0, 43)!important;\n  border: thin;\n}\n.typeahead-http[_ngcontent-%COMP%] {\n  border-style: none;\n  height: 40px;\n  border-bottom: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsb0JBQW9COztBQUV0QjtBQUNBOztFQUVFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLGlDQUFpQztFQUNqQyxtQ0FBbUM7RUFDbkMsWUFBWTtBQUNkO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQztBQUVBLGNBQWM7QUFDZCxpQkFBaUI7QUFDakIsSUFBSSIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XG4gIC8qcG9zaXRpb246IHN0aWNreTsqL1xuICAvKnotaW5kZXg6IDI7Ki9cbn1cbi5zZWFyY2hfb3V0ZXIge1xuICAvKmRpc3BsYXk6IGlubGluZTsqL1xuICAvKmZsb2F0OiByaWdodDsqL1xuICBib3JkZXItYm90dG9tOiB3aGl0ZTtcblxufVxuLnNlYXJjaF9vdXRlciBpbnB1dCB7XG5cbiAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDQzKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2VhcmNoX291dGVyIG5nYi1oaWdobGlnaHQge1xuICAvKmJhY2tncm91bmQ6ICMwOTBjNDM7Ki9cbiAgY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgLmRyb3Bkb3duLW1lbnUge1xuICB3aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4haW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHJnYigwLCAwLCA0MykhaW1wb3J0YW50O1xuICBib3JkZXI6IHRoaW47XG59XG5cbi50eXBlYWhlYWQtaHR0cCB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi8qI2hvbWVfYnRuIHsqL1xuLyogIG9wYWNpdHk6IDAuOyovXG4vKn0qL1xuIl19 */", ".form-control[_ngcontent-%COMP%] { width: 300px; }"] });


/***/ }),

/***/ "kHmC":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_homepage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/homepage.service */ "y/kg");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = ["carousel"];
function HomepageComponent_div_3_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r18 = ctx_r20.index;
    const img_r17 = ctx_r20.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r19.playingMovieIdArray[i_r18], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r19.playingMovieNameArray[i_r18]);
} }
function HomepageComponent_div_3_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_3_5_ng_template_0_Template, 7, 3, "ng-template", 23);
} }
function HomepageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-carousel", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomepageComponent_div_3_5_Template, 1, 0, undefined, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.playingMovieImgArray);
} }
function HomepageComponent_div_4_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r24 = ctx_r26.index;
    const img_r23 = ctx_r26.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r25.playingMovieIdArray[i_r24], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r25.playingMovieNameArray[i_r24]);
} }
function HomepageComponent_div_4_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_4_5_ng_template_0_Template, 7, 3, "ng-template", 23);
} }
function HomepageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ngb-carousel", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomepageComponent_div_4_5_Template, 1, 0, undefined, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", ctx_r1.pauseOnHover)("pauseOnFocus", ctx_r1.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.playingMovieImgArray);
} }
function HomepageComponent_div_5_8_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r33 = ctx.$implicit;
    const j_r34 = ctx.index;
    const i_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", ctx_r32.continueWatchingHTMLCateMatrix[i_r30][j_r34], "/", ctx_r32.continueWatchingHTMLIdMatrix[i_r30][j_r34], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r33, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r32.continueWatchingHTMLNameMatrix[i_r30][j_r34]);
} }
function HomepageComponent_div_5_8_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_5_8_ng_template_0_div_0_Template, 7, 4, "div", 42);
} if (rf & 2) {
    const array_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", array_r29);
} }
function HomepageComponent_div_5_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_5_8_ng_template_0_Template, 1, 1, "ng-template", 23);
} }
function HomepageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Continue Watching");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ngb-carousel", 41, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomepageComponent_div_5_8_Template, 1, 0, undefined, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", ctx_r2.pauseOnHover)("pauseOnFocus", ctx_r2.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.continueWatchingHTMLImgMatrix);
} }
function HomepageComponent_div_6_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r39 = ctx_r41.index;
    const img_r38 = ctx_r41.$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", ctx_r40.continueWatchingHTMLCateArray[i_r39], "/", ctx_r40.continueWatchingHTMLIdArray[i_r39], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r38, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r40.continueWatchingHTMLNameArray[i_r39]);
} }
function HomepageComponent_div_6_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_6_5_ng_template_0_Template, 6, 4, "ng-template", 23);
} }
function HomepageComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Continue Watching");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-carousel", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomepageComponent_div_6_5_Template, 1, 0, undefined, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationIndicators", ctx_r3.showNavigationIndicators);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.continueWatchingHTMLImgArray);
} }
function HomepageComponent_div_7_7_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r48 = ctx.$implicit;
    const j_r49 = ctx.index;
    const i_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r47.popularMovieIdMatrix[i_r45][j_r49], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r48, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r47.popularMovieNameMatrix[i_r45][j_r49]);
} }
function HomepageComponent_div_7_7_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_7_7_ng_template_0_div_0_Template, 7, 3, "div", 53);
} if (rf & 2) {
    const popularMovieImgArray_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", popularMovieImgArray_r44);
} }
function HomepageComponent_div_7_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_7_7_ng_template_0_Template, 1, 1, "ng-template", 23);
} }
function HomepageComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Popular Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ngb-carousel", 41, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomepageComponent_div_7_7_Template, 1, 0, undefined, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", ctx_r4.pauseOnHover)("pauseOnFocus", ctx_r4.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.popularMovieImagesMatrix);
} }
function HomepageComponent_div_8_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r54 = ctx_r56.index;
    const img_r53 = ctx_r56.$implicit;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r55.popularMovieIdArray[i_r54], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r53, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r55.popularMovieNameArray[i_r54]);
} }
function HomepageComponent_div_8_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_8_6_ng_template_0_Template, 6, 3, "ng-template", 23);
} }
function HomepageComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Popular Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-carousel", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomepageComponent_div_8_6_Template, 1, 0, undefined, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationIndicators", ctx_r5.showNavigationIndicators);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.popularMovieImagesArray);
} }
function HomepageComponent_div_9_7_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r63 = ctx.$implicit;
    const j_r64 = ctx.index;
    const i_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r62.topRatedMovieIdMatrix[i_r60][j_r64], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r63, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r62.topRatedMovieNameMatrix[i_r60][j_r64]);
} }
function HomepageComponent_div_9_7_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_9_7_ng_template_0_div_0_Template, 7, 3, "div", 59);
} if (rf & 2) {
    const topRatedMovieImgArray_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", topRatedMovieImgArray_r59);
} }
function HomepageComponent_div_9_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_9_7_ng_template_0_Template, 1, 1, "ng-template", 23);
} }
function HomepageComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Top Rated Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ngb-carousel", 41, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomepageComponent_div_9_7_Template, 1, 0, undefined, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", ctx_r6.pauseOnHover)("pauseOnFocus", ctx_r6.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.topRatedMovieImagesMatrix);
} }
function HomepageComponent_div_10_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r69 = ctx_r71.index;
    const img_r68 = ctx_r71.$implicit;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r70.topRatedMovieIdArray[i_r69], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r68, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r70.topRatedMovieNameArray[i_r69]);
} }
function HomepageComponent_div_10_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_10_6_ng_template_0_Template, 6, 3, "ng-template", 23);
} }
function HomepageComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Top Rated Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-carousel", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomepageComponent_div_10_6_Template, 1, 0, undefined, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationIndicators", ctx_r7.showNavigationIndicators);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.topRatedMovieImagesArray);
} }
function HomepageComponent_div_11_7_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r78 = ctx.$implicit;
    const j_r79 = ctx.index;
    const i_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r77.trendingMovieIdMatrix[i_r75][j_r79], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r78, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r77.trendingMovieNameMatrix[i_r75][j_r79]);
} }
function HomepageComponent_div_11_7_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_11_7_ng_template_0_div_0_Template, 7, 3, "div", 65);
} if (rf & 2) {
    const trendingMovieImgArray_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", trendingMovieImgArray_r74);
} }
function HomepageComponent_div_11_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_11_7_ng_template_0_Template, 1, 1, "ng-template", 23);
} }
function HomepageComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Trending Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ngb-carousel", 41, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomepageComponent_div_11_7_Template, 1, 0, undefined, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", ctx_r8.pauseOnHover)("pauseOnFocus", ctx_r8.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.trendingMovieImagesMatrix);
} }
function HomepageComponent_div_12_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r84 = ctx_r86.index;
    const img_r83 = ctx_r86.$implicit;
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r85.trendingMovieIdArray[i_r84], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r83, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r85.trendingMovieNameArray[i_r84]);
} }
function HomepageComponent_div_12_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_12_6_ng_template_0_Template, 6, 3, "ng-template", 23);
} }
function HomepageComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Trending Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-carousel", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomepageComponent_div_12_6_Template, 1, 0, undefined, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationIndicators", ctx_r9.showNavigationIndicators);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.trendingMovieImagesArray);
} }
function HomepageComponent_div_13_7_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r93 = ctx.$implicit;
    const j_r94 = ctx.index;
    const i_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", ctx_r92.popularTvIdMatrix[i_r90][j_r94], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r93, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r92.popularTvNameMatrix[i_r90][j_r94]);
} }
function HomepageComponent_div_13_7_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_13_7_ng_template_0_div_0_Template, 7, 3, "div", 71);
} if (rf & 2) {
    const array_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", array_r89);
} }
function HomepageComponent_div_13_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_13_7_ng_template_0_Template, 1, 1, "ng-template", 23);
} }
function HomepageComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Popular TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ngb-carousel", 41, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomepageComponent_div_13_7_Template, 1, 0, undefined, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", ctx_r10.pauseOnHover)("pauseOnFocus", ctx_r10.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.popularTvImagesMatrix);
} }
function HomepageComponent_div_14_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r99 = ctx_r101.index;
    const img_r98 = ctx_r101.$implicit;
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", ctx_r100.popularTvIdArray[i_r99], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r98, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r100.popularTvNameArray[i_r99]);
} }
function HomepageComponent_div_14_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_14_6_ng_template_0_Template, 6, 3, "ng-template", 23);
} }
function HomepageComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Popular TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-carousel", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomepageComponent_div_14_6_Template, 1, 0, undefined, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationIndicators", ctx_r11.showNavigationIndicators);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.popularTvImagesArray);
} }
function HomepageComponent_div_15_7_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r108 = ctx.$implicit;
    const j_r109 = ctx.index;
    const i_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", ctx_r107.topRatedTvIdMatrix[i_r105][j_r109], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r108, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r107.topRatedTvNameMatrix[i_r105][j_r109]);
} }
function HomepageComponent_div_15_7_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_15_7_ng_template_0_div_0_Template, 7, 3, "div", 77);
} if (rf & 2) {
    const array_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", array_r104);
} }
function HomepageComponent_div_15_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_15_7_ng_template_0_Template, 1, 1, "ng-template", 23);
} }
function HomepageComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Top Rated TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ngb-carousel", 41, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomepageComponent_div_15_7_Template, 1, 0, undefined, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", ctx_r12.pauseOnHover)("pauseOnFocus", ctx_r12.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.topRatedTvImagesMatrix);
} }
function HomepageComponent_div_16_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r114 = ctx_r116.index;
    const img_r113 = ctx_r116.$implicit;
    const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", ctx_r115.topRatedTvIdArray[i_r114], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r113, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r115.topRatedTvNameArray[i_r114]);
} }
function HomepageComponent_div_16_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_16_6_ng_template_0_Template, 6, 3, "ng-template", 23);
} }
function HomepageComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Top Rated Tv Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-carousel", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomepageComponent_div_16_6_Template, 1, 0, undefined, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationIndicators", ctx_r13.showNavigationIndicators);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r13.topRatedTvImagesArray);
} }
function HomepageComponent_div_17_7_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r123 = ctx.$implicit;
    const j_r124 = ctx.index;
    const i_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", ctx_r122.trendingTvIdMatrix[i_r120][j_r124], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r123, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r122.trendingTvNameMatrix[i_r120][j_r124]);
} }
function HomepageComponent_div_17_7_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_17_7_ng_template_0_div_0_Template, 7, 3, "div", 83);
} if (rf & 2) {
    const array_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", array_r119);
} }
function HomepageComponent_div_17_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_17_7_ng_template_0_Template, 1, 1, "ng-template", 23);
} }
function HomepageComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Trending TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ngb-carousel", 41, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomepageComponent_div_17_7_Template, 1, 0, undefined, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", ctx_r14.pauseOnHover)("pauseOnFocus", ctx_r14.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r14.trendingTvImagesMatrix);
} }
function HomepageComponent_div_18_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r129 = ctx_r131.index;
    const img_r128 = ctx_r131.$implicit;
    const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", ctx_r130.trendingTvIdArray[i_r129], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r128, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r130.trendingTvNameArray[i_r129]);
} }
function HomepageComponent_div_18_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_18_6_ng_template_0_Template, 6, 3, "ng-template", 23);
} }
function HomepageComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Trending Tv Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-carousel", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomepageComponent_div_18_6_Template, 1, 0, undefined, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationIndicators", ctx_r15.showNavigationIndicators);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r15.trendingTvImagesArray);
} }
class HomepageComponent {
    constructor(homepageService, breakpointObserver) {
        this.homepageService = homepageService;
        this.breakpointObserver = breakpointObserver;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.showNavigationIndicators = false;
        this.isMobile = false;
        // 3.2.1 Currently Playing Movies Carousel
        this.playingMovieArray = [];
        this.playingMovieImgArray = [];
        this.playingMovieNameArray = [];
        this.playingMovieIdArray = [];
        // 3.2.2 Continue Watching Section
        // 3.2.3 Popular Movies Section
        this.popularMovieArray = [];
        this.popularMovieImagesArray = [];
        this.popularMovieNameArray = [];
        this.popularMovieIdArray = [];
        this.popularMovieImagesMatrix = [];
        this.popularMovieNameMatrix = [];
        this.popularMovieIdMatrix = [];
        // 3.2.4 Top Rated Movies Section
        this.topRatedMovieArray = [];
        this.topRatedMovieImagesArray = [];
        this.topRatedMovieNameArray = [];
        this.topRatedMovieIdArray = [];
        this.topRatedMovieImagesMatrix = [];
        this.topRatedMovieNameMatrix = [];
        this.topRatedMovieIdMatrix = [];
        // 3.2.5 Trending Movies Section
        this.trendingMovieArray = [];
        this.trendingMovieImagesArray = [];
        this.trendingMovieNameArray = [];
        this.trendingMovieIdArray = [];
        this.trendingMovieImagesMatrix = [];
        this.trendingMovieNameMatrix = [];
        this.trendingMovieIdMatrix = [];
        // 3.2.6 Popular TV Shows Section
        this.popularTvArray = [];
        this.popularTvImagesArray = [];
        this.popularTvNameArray = [];
        this.popularTvIdArray = [];
        this.popularTvImagesMatrix = [];
        this.popularTvNameMatrix = [];
        this.popularTvIdMatrix = [];
        // 3.2.7 Top Rated TV Shows Section
        this.topRatedTvArray = [];
        this.topRatedTvImagesArray = [];
        this.topRatedTvNameArray = [];
        this.topRatedTvIdArray = [];
        this.topRatedTvImagesMatrix = [];
        this.topRatedTvNameMatrix = [];
        this.topRatedTvIdMatrix = [];
        // 3.2.8 Trending TV shows Section
        this.trendingTvArray = [];
        this.trendingTvImagesArray = [];
        this.trendingTvNameArray = [];
        this.trendingTvIdArray = [];
        this.trendingTvImagesMatrix = [];
        this.trendingTvNameMatrix = [];
        this.trendingTvIdMatrix = [];
        this.storageKeyArray = [];
        this.continueWatchingArray = [];
        this.continueWatchingHTMLArray = [];
        this.continueWatchingHTMLImgArray = [];
        this.continueWatchingHTMLNameArray = [];
        this.continueWatchingHTMLIdArray = [];
        this.continueWatchingHTMLCateArray = [];
        this.continueWatchingHTMLImgMatrix = [];
        this.continueWatchingHTMLNameMatrix = [];
        this.continueWatchingHTMLIdMatrix = [];
        this.continueWatchingHTMLCateMatrix = [];
    }
    ngOnInit() {
        this.getPlayingMovie();
        this.getPopularMovie();
        this.getTopRatedMovie();
        this.getTrendingMovie();
        this.getPopluarTv();
        this.getTopRatedTv();
        this.getTrendingTv();
        this.getContinueWatching();
        this.getContinueWatchingMatrix();
        if (this.breakpointObserver.isMatched('(max-width: 500px)')) {
            console.log('The 900px viewport matched!');
            this.isMobile = true;
        }
        else {
            this.isMobile = false;
        }
    }
    getPlayingMovie() {
        this.homepageService.getPlayingMovieService().subscribe((response) => {
            // console.log(response);
            this.playingMovieArray = response["results"];
            // console.log(this.playingMovieArray);
            this.playingMovieImgArray = [0, 1, 2, 3, 4].map((n) => 'https://image.tmdb.org/t/p/w780' + this.playingMovieArray[n]["backdrop_path"]);
            this.playingMovieNameArray = [0, 1, 2, 3, 4].map((n) => this.playingMovieArray[n]["title"]);
            this.playingMovieIdArray = [0, 1, 2, 3, 4].map((n) => this.playingMovieArray[n]["id"]);
        }, (error) => {
            console.log('get error when get playing movie form service');
        });
    }
    getPopularMovie() {
        this.homepageService.getPopularMovieService().subscribe((response) => {
            this.popularMovieArray = response["results"];
            for (var i = 0; i < this.popularMovieArray.length; i++) {
                this.popularMovieImagesArray[i] = 'https://image.tmdb.org/t/p/w500' + this.popularMovieArray[i]["poster_path"];
                this.popularMovieNameArray[i] = this.popularMovieArray[i]["title"];
                this.popularMovieIdArray[i] = this.popularMovieArray[i]["id"];
            }
            // console.log(this.popularMovieImagesArray);
            // console.log(this.popularMovieNameArray);
            // console.log(this.popularMovieIdArray);
            this.popularMovieImagesMatrix.push(this.popularMovieImagesArray.splice(0, 6));
            this.popularMovieImagesMatrix.push(this.popularMovieImagesArray.splice(0, 6));
            this.popularMovieImagesMatrix.push(this.popularMovieImagesArray.splice(0, 6));
            this.popularMovieImagesMatrix.push(this.popularMovieImagesArray.splice(0, 2));
            this.popularMovieNameMatrix.push(this.popularMovieNameArray.splice(0, 6));
            this.popularMovieNameMatrix.push(this.popularMovieNameArray.splice(0, 6));
            this.popularMovieNameMatrix.push(this.popularMovieNameArray.splice(0, 6));
            this.popularMovieNameMatrix.push(this.popularMovieNameArray.splice(0, 2));
            this.popularMovieIdMatrix.push(this.popularMovieIdArray.splice(0, 6));
            this.popularMovieIdMatrix.push(this.popularMovieIdArray.splice(0, 6));
            this.popularMovieIdMatrix.push(this.popularMovieIdArray.splice(0, 6));
            this.popularMovieIdMatrix.push(this.popularMovieIdArray.splice(0, 2));
            for (var i = 0; i < this.popularMovieArray.length; i++) {
                this.popularMovieImagesArray[i] = 'https://image.tmdb.org/t/p/w500' + this.popularMovieArray[i]["poster_path"];
                this.popularMovieNameArray[i] = this.popularMovieArray[i]["title"];
                this.popularMovieIdArray[i] = this.popularMovieArray[i]["id"];
            }
        }, (error) => {
            console.log('get error when get playing movie form service');
        });
    }
    getTopRatedMovie() {
        this.homepageService.getTopRatedMovieService().subscribe((response) => {
            this.topRatedMovieArray = response["results"];
            for (var i = 0; i < this.topRatedMovieArray.length; i++) {
                this.topRatedMovieImagesArray[i] = 'https://image.tmdb.org/t/p/w500' + this.topRatedMovieArray[i]["poster_path"];
                this.topRatedMovieNameArray[i] = this.topRatedMovieArray[i]["title"];
                this.topRatedMovieIdArray[i] = this.topRatedMovieArray[i]["id"];
            }
            // console.log(this.popularMovieImagesArray);
            // console.log(this.popularMovieNameArray);
            // console.log(this.popularMovieIdArray);
            this.topRatedMovieImagesMatrix.push(this.topRatedMovieImagesArray.splice(0, 6));
            this.topRatedMovieImagesMatrix.push(this.topRatedMovieImagesArray.splice(0, 6));
            this.topRatedMovieImagesMatrix.push(this.topRatedMovieImagesArray.splice(0, 6));
            this.topRatedMovieImagesMatrix.push(this.topRatedMovieImagesArray.splice(0, 2));
            this.topRatedMovieNameMatrix.push(this.topRatedMovieNameArray.splice(0, 6));
            this.topRatedMovieNameMatrix.push(this.topRatedMovieNameArray.splice(0, 6));
            this.topRatedMovieNameMatrix.push(this.topRatedMovieNameArray.splice(0, 6));
            this.topRatedMovieNameMatrix.push(this.topRatedMovieNameArray.splice(0, 2));
            this.topRatedMovieIdMatrix.push(this.topRatedMovieIdArray.splice(0, 6));
            this.topRatedMovieIdMatrix.push(this.topRatedMovieIdArray.splice(0, 6));
            this.topRatedMovieIdMatrix.push(this.topRatedMovieIdArray.splice(0, 6));
            this.topRatedMovieIdMatrix.push(this.topRatedMovieIdArray.splice(0, 2));
            for (var i = 0; i < this.topRatedMovieArray.length; i++) {
                this.topRatedMovieImagesArray[i] = 'https://image.tmdb.org/t/p/w500' + this.topRatedMovieArray[i]["poster_path"];
                this.topRatedMovieNameArray[i] = this.topRatedMovieArray[i]["title"];
                this.topRatedMovieIdArray[i] = this.topRatedMovieArray[i]["id"];
            }
        }, (error) => {
            console.log('get error when get playing movie form service');
        });
    }
    getTrendingMovie() {
        this.homepageService.getTrendingMovieService().subscribe((response) => {
            this.trendingMovieArray = response["results"];
            // console.log(this.trendingMovieArray);
            for (var i = 0; i < this.trendingMovieArray.length; i++) {
                this.trendingMovieImagesArray[i] = 'https://image.tmdb.org/t/p/w500' + this.trendingMovieArray[i]["poster_path"];
                this.trendingMovieNameArray[i] = this.trendingMovieArray[i]["title"];
                this.trendingMovieIdArray[i] = this.trendingMovieArray[i]["id"];
            }
            // console.log(this.popularMovieImagesArray);
            // console.log(this.popularMovieNameArray);
            // console.log(this.popularMovieIdArray);
            this.trendingMovieImagesMatrix.push(this.trendingMovieImagesArray.splice(0, 6));
            this.trendingMovieImagesMatrix.push(this.trendingMovieImagesArray.splice(0, 6));
            this.trendingMovieImagesMatrix.push(this.trendingMovieImagesArray.splice(0, 6));
            this.trendingMovieImagesMatrix.push(this.trendingMovieImagesArray.splice(0, 2));
            this.trendingMovieNameMatrix.push(this.trendingMovieNameArray.splice(0, 6));
            this.trendingMovieNameMatrix.push(this.trendingMovieNameArray.splice(0, 6));
            this.trendingMovieNameMatrix.push(this.trendingMovieNameArray.splice(0, 6));
            this.trendingMovieNameMatrix.push(this.trendingMovieNameArray.splice(0, 2));
            this.trendingMovieIdMatrix.push(this.trendingMovieIdArray.splice(0, 6));
            this.trendingMovieIdMatrix.push(this.trendingMovieIdArray.splice(0, 6));
            this.trendingMovieIdMatrix.push(this.trendingMovieIdArray.splice(0, 6));
            this.trendingMovieIdMatrix.push(this.trendingMovieIdArray.splice(0, 2));
            for (var i = 0; i < this.trendingMovieArray.length; i++) {
                this.trendingMovieImagesArray[i] = 'https://image.tmdb.org/t/p/w500' + this.trendingMovieArray[i]["poster_path"];
                this.trendingMovieNameArray[i] = this.trendingMovieArray[i]["title"];
                this.trendingMovieIdArray[i] = this.trendingMovieArray[i]["id"];
            }
        }, (error) => {
            console.log('get error when get playing movie form service');
        });
    }
    getPopluarTv() {
        this.homepageService.getPopularTvService().subscribe((response) => {
            this.popularTvArray = response["results"];
            // console.log(this.trendingMovieArray);
            for (var i = 0; i < this.popularTvArray.length; i++) {
                this.popularTvImagesArray[i] = 'https://image.tmdb.org/t/p/w500' + this.popularTvArray[i]["poster_path"];
                this.popularTvNameArray[i] = this.popularTvArray[i]["name"];
                this.popularTvIdArray[i] = this.popularTvArray[i]["id"];
            }
            // console.log(this.popularMovieImagesArray);
            // console.log(this.popularMovieNameArray);
            // console.log(this.popularMovieIdArray);
            this.popularTvImagesMatrix.push(this.popularTvImagesArray.splice(0, 6));
            this.popularTvImagesMatrix.push(this.popularTvImagesArray.splice(0, 6));
            this.popularTvImagesMatrix.push(this.popularTvImagesArray.splice(0, 6));
            this.popularTvImagesMatrix.push(this.popularTvImagesArray.splice(0, 2));
            this.popularTvNameMatrix.push(this.popularTvNameArray.splice(0, 6));
            this.popularTvNameMatrix.push(this.popularTvNameArray.splice(0, 6));
            this.popularTvNameMatrix.push(this.popularTvNameArray.splice(0, 6));
            this.popularTvNameMatrix.push(this.popularTvNameArray.splice(0, 2));
            this.popularTvIdMatrix.push(this.popularTvIdArray.splice(0, 6));
            this.popularTvIdMatrix.push(this.popularTvIdArray.splice(0, 6));
            this.popularTvIdMatrix.push(this.popularTvIdArray.splice(0, 6));
            this.popularTvIdMatrix.push(this.popularTvIdArray.splice(0, 2));
            for (var i = 0; i < this.popularTvArray.length; i++) {
                this.popularTvImagesArray[i] = 'https://image.tmdb.org/t/p/w500' + this.popularTvArray[i]["poster_path"];
                this.popularTvNameArray[i] = this.popularTvArray[i]["name"];
                this.popularTvIdArray[i] = this.popularTvArray[i]["id"];
            }
        }, (error) => {
            console.log('get error when get playing movie form service');
        });
    }
    getTopRatedTv() {
        this.homepageService.getTopRatedTvService().subscribe((response) => {
            this.topRatedTvArray = response["results"];
            // console.log(this.trendingMovieArray);
            for (var i = 0; i < this.topRatedTvArray.length; i++) {
                this.topRatedTvImagesArray[i] = 'https://image.tmdb.org/t/p/w500' + this.topRatedTvArray[i]["poster_path"];
                this.topRatedTvNameArray[i] = this.topRatedTvArray[i]["name"];
                this.topRatedTvIdArray[i] = this.topRatedTvArray[i]["id"];
            }
            // console.log(this.popularMovieImagesArray);
            // console.log(this.popularMovieNameArray);
            // console.log(this.popularMovieIdArray);
            this.topRatedTvImagesMatrix.push(this.topRatedTvImagesArray.splice(0, 6));
            this.topRatedTvImagesMatrix.push(this.topRatedTvImagesArray.splice(0, 6));
            this.topRatedTvImagesMatrix.push(this.topRatedTvImagesArray.splice(0, 6));
            this.topRatedTvImagesMatrix.push(this.topRatedTvImagesArray.splice(0, 2));
            this.topRatedTvNameMatrix.push(this.topRatedTvNameArray.splice(0, 6));
            this.topRatedTvNameMatrix.push(this.topRatedTvNameArray.splice(0, 6));
            this.topRatedTvNameMatrix.push(this.topRatedTvNameArray.splice(0, 6));
            this.topRatedTvNameMatrix.push(this.topRatedTvNameArray.splice(0, 2));
            this.topRatedTvIdMatrix.push(this.topRatedTvIdArray.splice(0, 6));
            this.topRatedTvIdMatrix.push(this.topRatedTvIdArray.splice(0, 6));
            this.topRatedTvIdMatrix.push(this.topRatedTvIdArray.splice(0, 6));
            this.topRatedTvIdMatrix.push(this.topRatedTvIdArray.splice(0, 2));
            for (var i = 0; i < this.topRatedTvArray.length; i++) {
                this.topRatedTvImagesArray[i] = 'https://image.tmdb.org/t/p/w500' + this.topRatedTvArray[i]["poster_path"];
                this.topRatedTvNameArray[i] = this.topRatedTvArray[i]["name"];
                this.topRatedTvIdArray[i] = this.topRatedTvArray[i]["id"];
            }
        }, (error) => {
            console.log('get error when get playing movie form service');
        });
    }
    getTrendingTv() {
        this.homepageService.getTrendingTvService().subscribe((response) => {
            this.trendingTvArray = response["results"];
            // console.log(this.trendingMovieArray);
            for (var i = 0; i < this.trendingTvArray.length; i++) {
                this.trendingTvImagesArray[i] = 'https://image.tmdb.org/t/p/w500' + this.trendingTvArray[i]["poster_path"];
                this.trendingTvNameArray[i] = this.trendingTvArray[i]["name"];
                this.trendingTvIdArray[i] = this.trendingTvArray[i]["id"];
            }
            // console.log(this.popularMovieImagesArray);
            // console.log(this.popularMovieNameArray);
            // console.log(this.popularMovieIdArray);
            this.trendingTvImagesMatrix.push(this.trendingTvImagesArray.splice(0, 6));
            this.trendingTvImagesMatrix.push(this.trendingTvImagesArray.splice(0, 6));
            this.trendingTvImagesMatrix.push(this.trendingTvImagesArray.splice(0, 6));
            this.trendingTvImagesMatrix.push(this.trendingTvImagesArray.splice(0, 2));
            this.trendingTvNameMatrix.push(this.trendingTvNameArray.splice(0, 6));
            this.trendingTvNameMatrix.push(this.trendingTvNameArray.splice(0, 6));
            this.trendingTvNameMatrix.push(this.trendingTvNameArray.splice(0, 6));
            this.trendingTvNameMatrix.push(this.trendingTvNameArray.splice(0, 2));
            this.trendingTvIdMatrix.push(this.trendingTvIdArray.splice(0, 6));
            this.trendingTvIdMatrix.push(this.trendingTvIdArray.splice(0, 6));
            this.trendingTvIdMatrix.push(this.trendingTvIdArray.splice(0, 6));
            this.trendingTvIdMatrix.push(this.trendingTvIdArray.splice(0, 2));
            for (var i = 0; i < this.trendingTvArray.length; i++) {
                this.trendingTvImagesArray[i] = 'https://image.tmdb.org/t/p/w500' + this.trendingTvArray[i]["poster_path"];
                this.trendingTvNameArray[i] = this.trendingTvArray[i]["name"];
                this.trendingTvIdArray[i] = this.trendingTvArray[i]["id"];
            }
        }, (error) => {
            console.log('get error when get playing movie form service');
        });
    }
    getContinueWatching() {
        this.storageKeyArray = Object.keys(localStorage);
        // console.log("storageKeyArray: " + this.storageKeyArray);
        for (let i = 0; i < this.storageKeyArray.length; i++) {
            if (this.storageKeyArray[i].substr(1, 4) == "cont") {
                var keyString = this.storageKeyArray[i].substr(6).split("^");
                var valueString = localStorage.getItem(this.storageKeyArray[i]).split("^");
                var id = keyString[0];
                var cate = keyString[1].replace('"', '');
                var title = valueString[0].replace('"', '');
                var url = valueString[1];
                var timestamp = valueString[2].replace('"', '');
                this.continueWatchingArray.push({
                    "id": id,
                    "cate": cate,
                    "title": title,
                    "url": url,
                    "timestamp": timestamp
                });
                // console.log(this.continueWatchingArray["url"]);
            }
        }
        if (this.continueWatchingArray.length == 0) {
            return;
        }
        this.continueWatchingArray.sort(function (a, b) { return b.timestamp - a.timestamp; });
        console.log(this.continueWatchingArray);
        this.continueWatchingHTMLArray = this.continueWatchingArray.slice(0, 24);
        console.log("continue watching array: " + this.continueWatchingArray);
    }
    getContinueWatchingMatrix() {
        for (var i = 0; i < this.continueWatchingHTMLArray.length; i++) {
            this.continueWatchingHTMLImgArray[i] = 'https://image.tmdb.org/t/p/w500' + this.continueWatchingHTMLArray[i]["url"];
            this.continueWatchingHTMLNameArray[i] = this.continueWatchingHTMLArray[i]["title"];
            this.continueWatchingHTMLIdArray[i] = this.continueWatchingHTMLArray[i]["id"];
            this.continueWatchingHTMLCateArray[i] = this.continueWatchingHTMLArray[i]["cate"];
        }
        for (var i = 0; i < 3; i++) {
            if (this.continueWatchingHTMLImgArray.length > 0) {
                this.continueWatchingHTMLImgMatrix.push(this.continueWatchingHTMLImgArray.splice(0, 6));
            }
        }
        if (this.continueWatchingHTMLImgArray.length > 0) {
            this.continueWatchingHTMLImgMatrix.push(this.continueWatchingHTMLImgArray.splice(0, 2));
        }
        for (var i = 0; i < 3; i++) {
            if (this.continueWatchingHTMLNameArray.length > 0) {
                this.continueWatchingHTMLNameMatrix.push(this.continueWatchingHTMLNameArray.splice(0, 6));
            }
        }
        if (this.continueWatchingHTMLNameArray.length > 0) {
            this.continueWatchingHTMLNameMatrix.push(this.continueWatchingHTMLNameArray.splice(0, 2));
        }
        for (var i = 0; i < 3; i++) {
            if (this.continueWatchingHTMLIdArray.length > 0) {
                this.continueWatchingHTMLIdMatrix.push(this.continueWatchingHTMLIdArray.splice(0, 6));
            }
        }
        if (this.continueWatchingHTMLIdArray.length > 0) {
            this.continueWatchingHTMLIdMatrix.push(this.continueWatchingHTMLIdArray.splice(0, 2));
        }
        for (var i = 0; i < 3; i++) {
            if (this.continueWatchingHTMLCateArray.length > 0) {
                this.continueWatchingHTMLCateMatrix.push(this.continueWatchingHTMLCateArray.splice(0, 6));
            }
        }
        if (this.continueWatchingHTMLCateArray.length > 0) {
            this.continueWatchingHTMLCateMatrix.push(this.continueWatchingHTMLCateArray.splice(0, 2));
        }
        // console.log(this.continueWatchingHTMLImgMatrix);
        // console.log(this.continueWatchingHTMLNameMatrix);
        // console.log(this.continueWatchingHTMLIdMatrix);
        for (var i = 0; i < this.continueWatchingHTMLArray.length; i++) {
            this.continueWatchingHTMLImgArray[i] = 'https://image.tmdb.org/t/p/w500' + this.continueWatchingHTMLArray[i]["url"];
            this.continueWatchingHTMLNameArray[i] = this.continueWatchingHTMLArray[i]["title"];
            this.continueWatchingHTMLIdArray[i] = this.continueWatchingHTMLArray[i]["id"];
            this.continueWatchingHTMLCateArray[i] = this.continueWatchingHTMLArray[i]["cate"];
        }
        // console.log("continueWatchingHTMLArray" + this.continueWatchingArray);
        // console.log("continueWatchingHTMLArray" + this.continueWatchingHTMLImgArray);
        // console.log("continueWatchingHTMLArray" + this.continueWatchingHTMLNameArray);
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_homepage_service__WEBPACK_IMPORTED_MODULE_2__["HomepageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], viewQuery: function HomepageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarouselConfig"]])], decls: 19, vars: 16, consts: [["name", "viewport", "content", "width=device-width, initial-scale=1"], ["class", "row", "id", "current_watching_web", "style", "min-width: 1440px;", 4, "ngIf"], ["class", "row", "id", "current_watching_mobile", "style", "", 4, "ngIf"], ["class", "row", "id", "continue_watching_web", "style", "min-width: 1440px;", 4, "ngIf"], ["class", "row", "id", "continue_watching_mobile", 4, "ngIf"], ["class", "row", "id", "popular_movie_web", "style", "min-width: 1440px;", 4, "ngIf"], ["class", "row", "id", "popular_movie_mobile", 4, "ngIf"], ["class", "row", "id", "topRated_movie_web", "style", "min-width: 1440px;", 4, "ngIf"], ["class", "row", "id", "topRated_movie_mobile", 4, "ngIf"], ["class", "row", "id", "trending_movie_web", "style", "min-width: 1440px;", 4, "ngIf"], ["class", "row", "id", "trending_movie_mobile", 4, "ngIf"], ["class", "row", "id", "popular_tv_web", "style", "min-width: 1440px;", 4, "ngIf"], ["class", "row", "id", "popular_tv_mobile", 4, "ngIf"], ["class", "row", "id", "topRated_tv_web", "style", "min-width: 1440px;", 4, "ngIf"], ["class", "row", "id", "topRated_tv_mobile", 4, "ngIf"], ["class", "row", "id", "trending_tv_web", "style", "min-width: 1440px;", 4, "ngIf"], ["class", "row", "id", "trending_tv_mobile", 4, "ngIf"], ["id", "current_watching_web", 1, "row", 2, "min-width", "1440px"], [1, "col-sm-1", "col-xs-1"], [1, "col-sm-10", "col-xs-10"], ["id", "current_mov"], ["interval", "5000", 3, "activeId", "pauseOnHover", "pauseOnFocus"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], ["id", "current_mov_poster"], ["id", "current_mov_img", 1, "wrapper"], [3, "routerLink"], ["alt", "", 3, "src"], [1, "current_mov_title", 2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "15px"], ["id", "current_watching_mobile", 1, "row"], ["id", "current_watching_outer"], [3, "pauseOnHover", "pauseOnFocus"], ["carousel", ""], ["id", "current_watching_poster"], [1, "picsum-img-wrapper"], ["alt", "", 1, "poster_img", 3, "src"], ["id", "current_watching_title", 1, "titles"], ["id", "continue_watching_web", 1, "row", 2, "min-width", "1440px"], [1, "col-sm-12", "col-xs-12"], ["id", "continue_watching_outer"], ["id", "continue_watching", 1, "rows"], ["interval", "0", 3, "pauseOnHover", "pauseOnFocus"], ["id", "continue_watching_poster", "class", "row_poster", 4, "ngFor", "ngForOf"], ["id", "continue_watching_poster", 1, "row_poster"], ["id", "continue_watching_title", 1, "titles"], ["id", "continue_watching_mobile", 1, "row"], [1, "mobile_row"], ["interval", "0", 3, "showNavigationIndicators"], [1, "picsum-img-wrapper_mobile"], ["alt", "Random first slide", 3, "src"], [1, "carousel-caption"], ["id", "popular_movie_web", 1, "row", 2, "min-width", "1440px"], ["id", "popular_movie", 1, "rows"], ["id", "popular_movie_poster", "class", "row_poster", 4, "ngFor", "ngForOf"], ["id", "popular_movie_poster", 1, "row_poster"], ["id", "poplar_movie_title", 1, "titles"], ["id", "popular_movie_mobile", 1, "row"], ["id", "topRated_movie_web", 1, "row", 2, "min-width", "1440px"], ["id", "topRated_movie", 1, "rows"], ["id", "topRated_movie_poster", "class", "row_poster", 4, "ngFor", "ngForOf"], ["id", "topRated_movie_poster", 1, "row_poster"], ["id", "topRated_movie_title", 1, "titles"], ["id", "topRated_movie_mobile", 1, "row"], ["id", "trending_movie_web", 1, "row", 2, "min-width", "1440px"], ["id", "trending_movie", 1, "rows"], ["id", "trending_movie_poster", "class", "row_poster", 4, "ngFor", "ngForOf"], ["id", "trending_movie_poster", 1, "row_poster"], ["id", "trending_movie_title", 1, "titles"], ["id", "trending_movie_mobile", 1, "row"], ["id", "popular_tv_web", 1, "row", 2, "min-width", "1440px"], ["id", "popular_tv", 1, "rows"], ["id", "popular_tv_poster", "class", "row_poster", 4, "ngFor", "ngForOf"], ["id", "popular_tv_poster", 1, "row_poster"], ["id", "popular_tv_title", 1, "titles"], ["id", "popular_tv_mobile", 1, "row"], ["id", "topRated_tv_web", 1, "row", 2, "min-width", "1440px"], ["id", "topRated_tv", 1, "rows"], ["id", "topRated_tv_poster", "class", "row_poster", 4, "ngFor", "ngForOf"], ["id", "topRated_tv_poster", 1, "row_poster"], ["id", "topRated_tv_title", 1, "titles"], ["id", "topRated_tv_mobile", 1, "row"], ["id", "trending_tv_web", 1, "row", 2, "min-width", "1440px"], ["id", "tending_tv", 1, "rows"], ["id", "tending_poster", "class", "row_poster", 4, "ngFor", "ngForOf"], ["id", "tending_poster", 1, "row_poster"], ["id", "tending_tv_title", 1, "titles"], ["id", "trending_tv_mobile", 1, "row"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HomepageComponent_div_3_Template, 7, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomepageComponent_div_4_Template, 6, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomepageComponent_div_5_Template, 9, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomepageComponent_div_6_Template, 6, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomepageComponent_div_7_Template, 8, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomepageComponent_div_8_Template, 7, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HomepageComponent_div_9_Template, 8, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HomepageComponent_div_10_Template, 7, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomepageComponent_div_11_Template, 8, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HomepageComponent_div_12_Template, 7, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HomepageComponent_div_13_Template, 8, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HomepageComponent_div_14_Template, 7, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HomepageComponent_div_15_Template, 8, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HomepageComponent_div_16_Template, 7, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HomepageComponent_div_17_Template, 8, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, HomepageComponent_div_18_Template, 7, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobile && ctx.continueWatchingHTMLArray !== null && ctx.continueWatchingHTMLArray.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile && ctx.continueWatchingHTMLArray !== null && ctx.continueWatchingHTMLArray !== undefined && ctx.continueWatchingHTMLArray.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%] {\n  background: #090c43;\n  color: white;\n  padding-top: 100px;\n  width: 100%;\n  \n  \n  overflow-x: scroll;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width : 2px!important;\n  position: absolute!important;\n  border: 1px solid red!important;\n}\n\n\n\n\n\n#current_mov[_ngcontent-%COMP%]{\n  position: relative;\n  \n  padding-bottom: 30px;\n  width: 100%;\n  height: 100%;\n}\n\n\n#current_mov[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%]{\n\n}\n\n\n#current_mov_poster[_ngcontent-%COMP%] {\n  \n  height: 100%;\n  \n}\n\n\n#current_mov[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  \n  width: 100%;\n  height: 450px;\n}\n\n\n#current_mov_poster[_ngcontent-%COMP%]   .current_mov_title[_ngcontent-%COMP%]{\n  opacity:0;\n  color: rgba(255,255,255,0.3);\n  margin-top: -250px;\n  padding-left: 80px;\n  padding-top: 80px;\n  text-align: left;\n  \n  \n  height: 150px;\n  background-image: linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1),rgba(0,0,0,1));\n\n}\n\n\n#current_mov[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], #current_mov[_ngcontent-%COMP%]:hover   .current_mov_title[_ngcontent-%COMP%]{\n  transform: scale(1.05);\n  cursor: pointer;\n  opacity: 1;\n\n}\n\n\n\n\n\n#current_watching_outer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n\n  margin-bottom: 50px;\n}\n\n\n#current_watching_poster[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n\n#current_watching_poster[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n\n#current_watching_title[_ngcontent-%COMP%] {\n  opacity: 1;\n  color: rgba(255,255,255,0.3);\n\n  color: white;\n  \n  background-image: linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1),rgba(0,0,0,1));\n  text-align: left;\n  position: absolute;\n  width: 100%;\n  \n  padding-left: 30px;\n  height: 30px;\n}\n\n\n#current_watching_poster[_ngcontent-%COMP%]   .picsum-img-wrapper_mobile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  cursor: pointer;\n  \n}\n\n\n\n\n\n\n\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n\n.rows[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 300px;\n  \n  \n}\n\n\n.rows[_ngcontent-%COMP%]   ngb-carousel[_ngcontent-%COMP%] {\n  \n  padding-left: 140px;\n}\n\n\n.row_poster[_ngcontent-%COMP%] {\n  width: 175px;\n  height: 300px;\n  display:inline;\n  float: left;\n  margin-left: 15px;\n  \n}\n\n\n.rows[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 175px;\n  height: 250px;\n\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.picsum-img-wrapper[_ngcontent-%COMP%]    > .titles[_ngcontent-%COMP%] {\n  opacity:0;\n  transition: ease-in-out;\n  color: white;\n  font-size: small;\n  margin-top: -40px;\n  left: 0;\n  bottom: 0;\n  float: left;\n  text-align: left;\n  \n  width: 175px;\n  height: 50px;\n  opacity: 0.7%;\n  \n}\n\n\n\n\n\n\n\n\n\n\n\n.picsum-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover, .picsum-img-wrapper[_ngcontent-%COMP%]:hover    > .titles[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  cursor: pointer;\n  opacity:1;\n  background-image: linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1),rgba(0,0,0,1));\n}\n\n\n.mobile_row[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 100%;\n  height: 400px;\n}\n\n\n.mobile_row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n\n.mobile_row[_ngcontent-%COMP%]   .picsum-img-wrapper_mobile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  \n  width: 50%;\n  height: 300px;\n  margin-left: 100px;\n  \n}\n\n\n.picsum-img-wrapper_mobile[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  cursor: pointer;\n  \n}\n\n\n.mobile_row[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n  width: 223px;\n  height: 150px;\n  margin-left: 33px;\n  text-align: center;\n  background-image: linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1),rgba(0,0,0,1));\n  margin-bottom: -20px;\n  padding-top: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7OztBQUdBLDBCQUEwQjs7O0FBQzFCLG1CQUFtQjs7O0FBQ25CLElBQUk7OztBQUNKLDhCQUE4Qjs7O0FBQzlCLDZCQUE2Qjs7O0FBQzdCLElBQUk7OztBQUNKO0VBQ0UscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QiwrQkFBK0I7QUFDakM7OztBQUNFLDZDQUE2Qzs7O0FBRy9DO0VBQ0Usa0JBQWtCO0VBQ2xCO2tCQUNnQjtFQUNoQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7O0FBQ0E7O0FBRUE7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7OztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7OztBQUVBO0VBQ0UsU0FBUztFQUNULDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUZBQXVGOztBQUV6Rjs7O0FBQ0E7O0VBRUUsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixVQUFVOztBQUVaOzs7QUFJQSwwQkFBMEI7OztBQUMxQjtFQUNFLFdBQVc7RUFDWCxhQUFhOztFQUViLG1CQUFtQjtBQUNyQjs7O0FBR0E7RUFDRSxZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsNEJBQTRCOztFQUU1QixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHVGQUF1RjtFQUN2RixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7O0FBRUEsMEJBQTBCOzs7QUFTMUIsc0NBQXNDOzs7QUFHdEM7RUFDRSxrQkFBa0I7QUFDcEI7OztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6Qjs7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0FBQ3JCOzs7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhOztBQUVmOzs7QUFDQSxrQ0FBa0M7OztBQUNsQywyQkFBMkI7OztBQUMzQixxQkFBcUI7OztBQUNyQixJQUFJOzs7QUFDSjtFQUNFLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7OztBQUNBLHdDQUF3Qzs7O0FBQ3hDLGVBQWU7OztBQUNmLElBQUk7OztBQUVKO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixTQUFTO0VBQ1QsdUZBQXVGO0FBQ3pGOzs7QUFNQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtBQUNmOzs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix1RkFBdUY7RUFDdkYsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7O0FBRUEsa0JBQWtCOzs7QUFDbEIsaUJBQWlCOzs7QUFDakIsbUJBQW1COzs7QUFDbkIseUJBQXlCOzs7QUFDekIsMEJBQTBCOzs7QUFDMUIsSUFBSTs7O0FBRUYscUNBQXFDOzs7QUFHckMsa0NBQWtDOzs7QUFNbEMsb0NBQW9DOzs7QUFHcEMsbUNBQW1DOzs7QUFNckMsb0NBQW9DOzs7QUFHcEMsc0NBQXNDOzs7QUFHdEMscUNBQXFDIiwiZmlsZSI6ImhvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgYmFja2dyb3VuZDogIzA5MGM0MztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICAvKnBvc2l0aW9uOiByZWxhdGl2ZTsqL1xuICAvKm1hcmdpbi10b3A6IDQwcHg7Ki9cbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuXG5cbi8qbmdiLWNhcm91c2VsIGFjdGl2ZUlkIHsqL1xuLyogIGRpc3BsYXk6IG5vbmU7Ki9cbi8qfSovXG4vKi5jYXJvdXNlbC1pdGVtID4gLnNyLW9ubHkgeyovXG4vKiAgZGlzcGxheTogbm9uZSFpbXBvcnRhbnQ7Ki9cbi8qfSovXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIHdpZHRoIDogMnB4IWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkIWltcG9ydGFudDtcbn1cbiAgLyovLyAzLjIuMSBDdXJyZW50bHkgUGxheWluZyBNb3ZpZXMgQ2Fyb3VzZWwqL1xuXG5cbiNjdXJyZW50X21vdntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MDBweDsgKi9cbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4jY3VycmVudF9tb3YgPiBuZ2ItY2Fyb3VzZWx7XG5cbn1cblxuI2N1cnJlbnRfbW92X3Bvc3RlciB7XG4gIC8qIHdpZHRoOiAxMjAwcHg7Ki9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xufVxuI2N1cnJlbnRfbW92IGltZyB7XG4gIC8qIHdpZHRoOiA5MDBweDsgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDUwcHg7XG59XG5cbiNjdXJyZW50X21vdl9wb3N0ZXIgLmN1cnJlbnRfbW92X3RpdGxle1xuICBvcGFjaXR5OjA7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XG4gIG1hcmdpbi10b3A6IC0yNTBweDtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4O1xuICBwYWRkaW5nLXRvcDogODBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xuICAvKiB3aWR0aDogODcwcHg7ICovXG4gIGhlaWdodDogMTUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwwKSwgcmdiYSgwLDAsMCwxKSxyZ2JhKDAsMCwwLDEpKTtcblxufVxuI2N1cnJlbnRfbW92OmhvdmVyIGltZyxcbiNjdXJyZW50X21vdjpob3ZlciAuY3VycmVudF9tb3ZfdGl0bGV7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMTtcblxufVxuXG5cblxuLyptb2JpbGUgY3VycmVudCB3YXRjaGluZyovXG4jY3VycmVudF93YXRjaGluZ19vdXRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cblxuI2N1cnJlbnRfd2F0Y2hpbmdfcG9zdGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jY3VycmVudF93YXRjaGluZ19wb3N0ZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI2N1cnJlbnRfd2F0Y2hpbmdfdGl0bGUge1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xuXG4gIGNvbG9yOiB3aGl0ZTtcbiAgLypib3JkZXI6IDFweCBzb2xpZCByZWQ7Ki9cbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxyZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDEpLHJnYmEoMCwwLDAsMSkpO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICAvKnBhZGRpbmctdG9wOiAyMHB4OyovXG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuI2N1cnJlbnRfd2F0Y2hpbmdfcG9zdGVyIC5waWNzdW0taW1nLXdyYXBwZXJfbW9iaWxlIGltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvKmJvcmRlcjogMXB4IHNvbGlkIHJlZDsqL1xufVxuXG4vKm1vYmlsZSBjdXJyZW50IHdhdGNoaW5nKi9cblxuXG5cblxuXG5cblxuXG4vKi0tLS0tLWNoYW5nZSBob3ZlciAtLS0tLS0tLS0tLS0tLS0tKi9cblxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yb3dzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgLypib3JkZXI6IDJweCBzb2xpZCByZWQ7Ki9cbiAgLypwYWRkaW5nLWxlZnQ6IDEwMHB4OyovXG59XG5cbi5yb3dzIG5nYi1jYXJvdXNlbCB7XG4gIC8qYm9yZGVyOiAycHggc29saWQgYmx1ZTsqL1xuICBwYWRkaW5nLWxlZnQ6IDE0MHB4O1xufVxuLnJvd19wb3N0ZXIge1xuICB3aWR0aDogMTc1cHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGRpc3BsYXk6aW5saW5lO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIC8qYm9yZGVyOiAycHggc29saWQgcmVkOyovXG59XG5cbi5yb3dzIC5waWNzdW0taW1nLXdyYXBwZXIgaW1nIHtcbiAgd2lkdGg6IDE3NXB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuXG59XG4vKi5waWNzdW0taW1nLXdyYXBwZXIgaW1nOmhvdmVyIHsqL1xuLyogIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsqL1xuLyogIGN1cnNvcjogcG9pbnRlcjsqL1xuLyp9Ki9cbi5waWNzdW0taW1nLXdyYXBwZXIgPiAudGl0bGVzIHtcbiAgb3BhY2l0eTowO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLypib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsqL1xuICB3aWR0aDogMTc1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgb3BhY2l0eTogMC43JTtcbiAgLypib3JkZXI6IDFweCBzb2xpZCByZWQ7Ki9cbn1cbi8qLnBpY3N1bS1pbWctd3JhcHBlcjpob3ZlciA+IC50aXRsZXMgeyovXG4vKiAgb3BhY2l0eToxOyovXG4vKn0qL1xuXG4ucGljc3VtLWltZy13cmFwcGVyIGltZzpob3ZlciwgLnBpY3N1bS1pbWctd3JhcHBlcjpob3ZlciA+IC50aXRsZXMge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eToxO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMSkscmdiYSgwLDAsMCwxKSk7XG59XG5cblxuXG5cblxuLm1vYmlsZV9yb3cge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cbi5tb2JpbGVfcm93IGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubW9iaWxlX3JvdyAucGljc3VtLWltZy13cmFwcGVyX21vYmlsZSBpbWcge1xuICAvKndpZHRoOiAyNTBweDsqL1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIC8qYm9yZGVyOiAxcHggc29saWQgcmVkOyovXG59XG5cbi5waWNzdW0taW1nLXdyYXBwZXJfbW9iaWxlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qYm9yZGVyOiAxcHggc29saWQgcmVkOyovXG59XG5cbi5tb2JpbGVfcm93IC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgd2lkdGg6IDIyM3B4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW4tbGVmdDogMzNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMSkscmdiYSgwLDAsMCwxKSk7XG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xuICBwYWRkaW5nLXRvcDogODBweDtcbn1cblxuLypuZ2ItY2Fyb3VzZWwgIHsqL1xuLyogIHdpZHRoOiAxMDAlOyovXG4vKiAgaGVpZ2h0OiAzMTBweDsqL1xuLyogIHBhZGRpbmctbGVmdDogMTMwcHg7Ki9cbi8qICBwYWRkaW5nLXJpZ2h0OiAxMzBweDsqL1xuLyp9Ki9cblxuICAvKi8vIDMuMi4yIENvbnRpbnVlIFdhdGNoaW5nIFNlY3Rpb24qL1xuXG5cbiAgLyovLyAzLjIuMyBQb3B1bGFyIE1vdmllcyBTZWN0aW9uKi9cblxuXG5cblxuXG4gIC8qLy8gMy4yLjQgVG9wIFJhdGVkIE1vdmllcyBTZWN0aW9uKi9cblxuXG4gIC8qLy8gMy4yLjUgVHJlbmRpbmcgTW92aWVzIFNlY3Rpb24qL1xuXG5cblxuXG5cbi8qLy8gMy4yLjYgUG9wdWxhciBUViBTaG93cyBTZWN0aW9uKi9cblxuXG4vKi8vIDMuMi43IFRvcCBSYXRlZCBUViBTaG93cyBTZWN0aW9uKi9cblxuXG4vKi8vIDMuMi44IFRyZW5kaW5nIFRWIHNob3dzIFNlY3Rpb24qL1xuIl19 */"] });


/***/ }),

/***/ "l3hs":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class SearchService {
    constructor(http) {
        this.http = http;
    }
    // getSearchResultService(inputString: string) {
    //   const httpParams = new HttpParams({
    //     fromObject: {
    //       queryString: inputString
    //     }
    //   })
    //   return this.http.get('http://localhost:3000/getSearchResult', {params: httpParams});
    // }
    searchResultService(term) {
        // const WIKI_URL = 'https://api.themoviedb.org/3/search/multi?api_key=090db10f0beb02147e9be8f250d5653e&language=en-US&query=tom';
        const expressUrl = 'https://cs571hw8wenhaoge.wl.r.appspot.com/getSearchResult';
        const PARAMS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                inputString: term
            }
        });
        return this.http.get(expressUrl, { params: PARAMS });
        // return this.http.get(expressUrl, {params: PARAMS}).pipe(map(response => {
        //   if(response["results"][0]["media_type"] == 'movie' || response["results"][0]["media_type"] == 'tv' ) {
        //     return response["results"];
        //   }
        // }));
        // return resultArray;
        // var resultArray = [];
        //
        // this.http.get(expressUrl, {params: PARAMS}).subscribe((response) => {
        //   var count = 0;
        //   var index = 0;
        //   var responseArray = response["results"];
        //   while (count < 7 || index < responseArray) {
        //     if (responseArray[index]["media_type"] == "movie" || responseArray[index]["media_type"] == "tv") {
        //       count++;
        //       resultArray.push({"response" : responseArray[index]});
        //     }
        //     index++;
        //   }
        //
        // });
        // console.log(resultArray);
        // return resultArray;
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "nx5c":
/*!************************************************!*\
  !*** ./src/app/services/detailpage.service.ts ***!
  \************************************************/
/*! exports provided: DetailpageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailpageService", function() { return DetailpageService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class DetailpageService {
    constructor(http) {
        this.http = http;
    }
    getMovieVideoService(id) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                movieId: id
            }
        });
        return this.http.get('https://cs571hw8wenhaoge.wl.r.appspot.com/getMovieVideo', { params: httpParams });
    }
    getMovieDetailService(id) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                movieId: id
            }
        });
        return this.http.get('https://cs571hw8wenhaoge.wl.r.appspot.com/getMovieDetail', { params: httpParams });
    }
    getMovieCastService(id) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                castId: id
            }
        });
        return this.http.get('https://cs571hw8wenhaoge.wl.r.appspot.com/getMovieCast', { params: httpParams });
    }
    getMovieReviewsService(id) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                movieId: id
            }
        });
        return this.http.get('https://cs571hw8wenhaoge.wl.r.appspot.com/getMovieReviews', { params: httpParams });
    }
    getRecommendedMovieService(id) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                movieId: id
            }
        });
        return this.http.get('https://cs571hw8wenhaoge.wl.r.appspot.com/getRecommendedMovie', { params: httpParams });
    }
    getSimilarMovieService(id) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                movieId: id
            }
        });
        return this.http.get('https://cs571hw8wenhaoge.wl.r.appspot.com/getSimilarMovie', { params: httpParams });
    }
    // ========================common============  //
    getCastDetailService(id) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                castId: id
            }
        });
        return this.http.get('https://cs571hw8wenhaoge.wl.r.appspot.com/getCastDetail', { params: httpParams });
    }
    getCastExternalIdService(id) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                castId: id
            }
        });
        return this.http.get('https://cs571hw8wenhaoge.wl.r.appspot.com/getCastExternalId', { params: httpParams });
    }
    // ========================common============  //
    getTvVideoService(id) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                tvId: id
            }
        });
        return this.http.get('https://cs571hw8wenhaoge.wl.r.appspot.com/getTvVideo', { params: httpParams });
    }
    getTvDetailService(id) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                tvId: id
            }
        });
        return this.http.get('https://cs571hw8wenhaoge.wl.r.appspot.com/getTvDetail', { params: httpParams });
    }
    getTvCastService(id) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                castId: id
            }
        });
        return this.http.get('https://cs571hw8wenhaoge.wl.r.appspot.com/getTvCast', { params: httpParams });
    }
    getTvReviewsService(id) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                tvId: id
            }
        });
        return this.http.get('https://cs571hw8wenhaoge.wl.r.appspot.com/getTvReviews', { params: httpParams });
    }
    getRecommendedTvService(id) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                tvId: id
            }
        });
        return this.http.get('https://cs571hw8wenhaoge.wl.r.appspot.com/getRecommendedTv', { params: httpParams });
    }
    getSimilarTvService(id) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                tvId: id
            }
        });
        return this.http.get('https://cs571hw8wenhaoge.wl.r.appspot.com/getSimilarTv', { params: httpParams });
    }
}
DetailpageService.ɵfac = function DetailpageService_Factory(t) { return new (t || DetailpageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
DetailpageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DetailpageService, factory: DetailpageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mylist/mylist.component */ "6DPj");
/* harmony import */ var _components_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/movie-detail/movie-detail.component */ "bV9e");
/* harmony import */ var _components_tv_detail_tv_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tv-detail/tv-detail.component */ "7Yvg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__["HomepageComponent"] },
    { path: 'watch/movie/:id', component: _components_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailComponent"] },
    { path: 'watch/tv/:id', component: _components_tv_detail_tv_detail_component__WEBPACK_IMPORTED_MODULE_4__["TvDetailComponent"] },
    { path: 'mylist', component: _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_2__["MylistComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xkqA":
/*!***************************************************!*\
  !*** ./src/app/services/myliststorage.service.ts ***!
  \***************************************************/
/*! exports provided: MyliststorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyliststorageService", function() { return MyliststorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MyliststorageService {
    constructor() { }
    set(key, value) {
        const keyString = JSON.stringify(key);
        const valueString = JSON.stringify(value);
        // modify storage
        localStorage.setItem(keyString, valueString);
    }
    remove(key) {
        const keyString = JSON.stringify(key);
        localStorage.removeItem(keyString);
        // remove from mylist
        // delete this.myList[keyString];
    }
    containsKey(key) {
        const keyString = JSON.stringify(key);
        if (localStorage.getItem(keyString) === null) {
            console.log("不存在");
            return false;
        }
        else {
            console.log("存在");
            return true;
        }
    }
    print() {
        // console.log(localStorage);
        // console.log(localStorage.length);
    }
}
MyliststorageService.ɵfac = function MyliststorageService_Factory(t) { return new (t || MyliststorageService)(); };
MyliststorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MyliststorageService, factory: MyliststorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "y/kg":
/*!**********************************************!*\
  !*** ./src/app/services/homepage.service.ts ***!
  \**********************************************/
/*! exports provided: HomepageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageService", function() { return HomepageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class HomepageService {
    constructor(http) {
        this.http = http;
    }
    getPlayingMovieService() {
        // http calls here
        return this.http.get('https://cs571hw8wenhaoge.wl.r.appspot.com/getPlayingMovie');
    }
    getPopularMovieService() {
        return this.http.get('https://cs571hw8wenhaoge.wl.r.appspot.com/getPopularMovie');
    }
    getTopRatedMovieService() {
        return this.http.get('https://cs571hw8wenhaoge.wl.r.appspot.com/topRatedMovie');
    }
    getTrendingMovieService() {
        return this.http.get('https://cs571hw8wenhaoge.wl.r.appspot.com/trendingMovie');
    }
    getPopularTvService() {
        return this.http.get('https://cs571hw8wenhaoge.wl.r.appspot.com/getPopularTv');
    }
    getTopRatedTvService() {
        return this.http.get('https://cs571hw8wenhaoge.wl.r.appspot.com/topRatedTv');
    }
    getTrendingTvService() {
        return this.http.get('https://cs571hw8wenhaoge.wl.r.appspot.com/trendingTv');
    }
}
HomepageService.ɵfac = function HomepageService_Factory(t) { return new (t || HomepageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HomepageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomepageService, factory: HomepageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map