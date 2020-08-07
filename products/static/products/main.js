(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-address/add-address.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-address/add-address.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add__address\">\n  <h1>Add address</h1>\n  <mat-grid-list cols=\"18\" rowHeight=\"48px\">\n    <mat-grid-tile [colspan]=\"13\" [rowspan]=\"12\">\n      <div class=\"outer__envelope\">\n        <mat-grid-list class=\"envelope\" cols=\"7\" rowHeight=\"40px\">\n          \n          <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n            <input class=\"address__line\" placeholder=\"Name\">\n          </mat-grid-tile>\n          <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\"></mat-grid-tile>\n          \n          <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n            <input class=\"address__line\" placeholder=\"Return Address\">\n          </mat-grid-tile>\n          <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\"></mat-grid-tile>\n          \n          <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n            <input class=\"address__line\" placeholder=\"Return Address\">\n          </mat-grid-tile>\n          <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\"></mat-grid-tile>\n          \n          <mat-grid-tile [colspan]=\"7\" [rowspan]=\"4\"></mat-grid-tile>\n          \n          <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\"></mat-grid-tile>\n          <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n            <input class=\"address__line\" placeholder=\"Send To\">\n          </mat-grid-tile>\n          <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\"></mat-grid-tile>\n          <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\"></mat-grid-tile>\n          <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n            <input class=\"address__line\" placeholder=\"Address\">\n          </mat-grid-tile>\n          <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\"></mat-grid-tile>\n          <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\"></mat-grid-tile>\n          <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n            <input class=\"address__line\" placeholder=\"Address\">\n          </mat-grid-tile>\n        </mat-grid-list>\n      </div>\n    </mat-grid-tile>\n  </mat-grid-list>\n  <button mat-stroked-button color=\"primary\">\n    <a [routerLink]=\"['/add-giftcard']\">Continue</a>\n  </button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-giftcard/add-giftcard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-giftcard/add-giftcard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-gift\">\n  <app-product-list\n    [filterOptions]=categories\n    [products]=gifts\n    [productName]=\"'Gift'\"\n  ></app-product-list>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-message/add-message.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-message/add-message.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-message\">\n    <app-card-slider\n        [cartProductId]=cartProductId\n    ></app-card-slider>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--nav bar-->\n<nav class=\"navbar fixed-top navbar-expand-lg navbar-light custom-nav\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/home']\">\n    <img id=\"thin_gift_logo\" src=\"https://thin-gifts-cards.s3.amazonaws.com/transparent-logo.png\">\n    ThinGifts\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/card-list']\">Shop</a>\n      </li>\n      <li class=\"nav-item dropdown active\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Explore\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/card-list']\">Find cards</a>\n          <a class=\"dropdown-item\" href=\"#\">About ThinGifts</a>\n        </div>\n      </li>\n    </ul>\n    <!-- <span class=\"right-nav-item\">\n      Login\n    </span> -->\n    <span class=\"right-nav-item\" (click)=\"openCartModal()\">\n      <mat-icon class=\"cart_icon\">shopping_cart</mat-icon>\n      <span id=\"lblCartCount\" *ngIf=\"cartItemCount > 0\">{{cartItemCount}}</span>\n    </span>\n  </div>\n</nav>\n\n<app-spinner></app-spinner>\n<router-outlet (activate)=\"onRouteChange()\"></router-outlet>\n\n<footer>\n  <div class=\"row-1\">\n    <div class=\"resources\">\n      <p class=\"footer__headline\">RESOURCES</p>\n      <div class=\"footer__text\">\n        <p>How it works</p>\n        <p>Our Story</p>\n      </div>\n    </div>\n    <div class=\"help\">\n      <p class=\"footer__headline\">HELP</p>\n      <div class=\"footer__text\">\n        <p>Contact Form</p>\n      </div>\n    </div>\n    <div class=\"dummy\"></div>\n    <div class=\"newsletter\">\n      <p class=\"footer__headline\">SIGN UP FOR OUR NEWSLETTER</p>\n      <div class=\"footer__text\">\n        <p>Get updates on our latest promos more!</p>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Email</mat-label>\n          <input matInput placeholder=\"Email\" value=\"\" [(ngModel)]=\"email\">\n        </mat-form-field>\n        <button mat-stroked-button color=\"primary\" (click)=\"submitEmail()\">Submit</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"row-2\">\n    <div class=\"resources\">\n      <p>&copy;\t2020 ThinGifts.com. All rights reserved.</p>\n    </div>\n    <div class=\"resources\">\n      <p>Icons made by <a href=\"https://www.flaticon.com/authors/freepik\" title=\"Freepik\">Freepik</a> from <a href=\"https://www.flaticon.com/\" title=\"Flaticon\"> www.flaticon.com</a></p>\n    </div>\n  </div>\n  \n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/card-list/card-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card-list/card-list.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-list\">\n  <app-product-list\n    [filterOptions]=categories\n    [products]=cards\n    [productName]=\"'Card'\"\n    (selectProduct)=\"addCardToCart($event)\"\n  ></app-product-list>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/card-slider/card-slider2.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card-slider/card-slider2.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spinner\">\n    <mat-spinner *ngIf=\"loading\" style=\"margin:0 auto;\"></mat-spinner>\n</div>\n<div *ngIf=\"!loading\">\n    <div class=\"message_container\" fxHide.lt-sm=\"true\">\n        <div class=\"title\">\n            <h3>{{card ? card.product_detail.name : null}}</h3>\n            <div *ngIf=\"readOnly\">\n                <p>by {{card.product_detail.creator_name}}</p>\n                <p>{{card.product_detail.description}}</p>\n                <p>${{card.product_detail.price}}</p>\n                <a href=\"#\" (click)=\"deleteCartId(cartProductId)\">Delete</a>\n            </div>\n            <div *ngIf=\"!readOnly\">\n                <mat-form-field class=\"tool__control text__font__control\">\n                    <mat-label>Font</mat-label>\n                    <select \n                        matNativeControl \n                        [disabled]=\"readOnly\" \n                        (change)=\"onFontChange($event.target.value)\" \n                        placeholder=\"REGULAR\"\n                    >\n                        <option\n                            *ngFor=\"let opt of fontOptions\"\n                            [value]=\"opt.value\"\n                            [selected]=\"font === opt.value\"\n                        >\n                            {{opt.text}}\n                        </option>\n                    </select>\n                </mat-form-field>\n                <mat-form-field class=\"tool__control text__color__control\">\n                    <mat-label>Color</mat-label>\n                    <select matNativeControl [disabled]=\"readOnly\" (change)=\"onColorChange($event.target.value)\">\n                        <option \n                            *ngFor=\"let opt of colorOptions\" \n                            [value]=\"opt.value\"\n                            [selected]=\"color === opt.value\"\n                            >\n                            {{opt.text}}\n                        </option>\n                    </select>\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"card-s\">\n            <div class=\"heading\">\n                <p [ngClass]=\"{'selected': isCover()}\" class=\"slider__option\" (click)=\"changeSlide('cover')\">\n                    Cover\n                </p>\n                <p [ngClass]=\"{'selected': isCard()}\" class=\"slider__option\" (click)=\"changeSlide('card')\">\n                    Card\n                </p>\n                <p [ngClass]=\"{'selected': isAddressing()}\" class=\"slider__option\" (click)=\"changeSlide('addressing')\">\n                    Addressing\n                </p>\n            </div>\n            <div class=\"inside-container\" *ngIf=\"isCard()\">\n                <div class=\"inside\">\n                    <div class=\"left-side\"></div>\n                    <div class=\"message-wrapper\">\n                        <form [formGroup]=\"messageForm\" class=\"message\">\n                            <textarea \n                                #message\n                                class=\"card__text\"\n                                [readonly]=\"readOnly\"\n                                placeholder=\"\"\n                                formControlName=\"text\"\n                            ></textarea>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"front-container\" *ngIf=\"isCover()\">\n                <div class=\"front\">\n                    <img src=\"{{card.product_detail.image_url}}\">\n                </div>\n            </div>\n            <div class=\"address-container\" *ngIf=\"isAddressing()\">\n                <form [formGroup]=\"addressForm\">\n                    <div class=\"address\">\n                        <h3>Return Address</h3>\n                        <div>\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>Name</mat-label>\n                                <input required matInput formControlName=\"returnName\">\n                            </mat-form-field>\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>Address 1</mat-label>\n                                <input required matInput formControlName=\"returnAddress1\">\n                            </mat-form-field>\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>Address 2</mat-label>\n                                <input matInput formControlName=\"returnAddress2\">\n                            </mat-form-field>\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>City</mat-label>\n                                <input required matInput formControlName=\"returnCity\">\n                            </mat-form-field>\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>State</mat-label>\n                                <mat-select required formControlName=\"returnState\">\n                                    <mat-option *ngFor=\"let s of states\" value=\"{{s}}\">\n                                        {{s}}\n                                    </mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>Zip Code</mat-label>\n                                <input required matInput formControlName=\"returnZip\">\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"address\">\n                        <h3>Recipient Address</h3>\n                        <div>\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>Name</mat-label>\n                                <input required matInput formControlName=\"recipientName\">\n                            </mat-form-field>\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>Address 1</mat-label>\n                                <input required matInput formControlName=\"recipientAddress1\">\n                            </mat-form-field>\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>Address 2</mat-label>\n                                <input matInput formControlName=\"recipientAddress2\">\n                            </mat-form-field>\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>City</mat-label>\n                                <input required matInput formControlName=\"recipientCity\">\n                            </mat-form-field>\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>State</mat-label>\n                                <mat-select required formControlName=\"recipientState\">\n                                <mat-option *ngFor=\"let s of states\" value=\"{{s}}\">{{s}}</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                            <mat-form-field appearance=\"standard\">\n                                <mat-label>Zip Code</mat-label>\n                                <input required matInput formControlName=\"recipientZip\">\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"footing\">\n                <mat-icon class=\"foot\" color=\"primary\" (click)=\"moveLeft()\">arrow_back</mat-icon>\n                <button \n                    *ngIf=\"!readOnly\"\n                    mat-flat-button \n                    color=\"primary\"\n                    (click)=\"saveMessage()\"\n                    class=\"foot\"\n                >\n                    Save and Continue\n                </button>\n                <button \n                    *ngIf=\"readOnly\"\n                    mat-flat-button \n                    color=\"primary\"\n                    [routerLink]=\"['/add-message', this.cartProductId]\"\n                    class=\"foot\"\n                >\n                    Edit Card\n                </button>\n                <mat-icon class=\"foot\" color=\"primary\" (click)=\"moveRight()\">arrow_forward</mat-icon>\n            </div>\n        </div>\n\n    </div>\n   \n\n    <div fxShow.lt-sm=\"true\" fxShow=\"false\" class=\"add_message_simple\">\n        <div\n        fxLayout=\"row wrap\" \n        fxLayout.lt-sm=\"column\" \n        fxLayoutGap=\"80px\" \n        fxLayoutAlign=\"flex-start\"\n        >\n            <div class=\"card-cover\">\n                <img src=\"{{card.product_detail.image_url}}\" />\n            </div>\n            <div class=\"add_message_simple__message\">\n                <h3>Message</h3>\n                <mat-form-field appearance=\"fill\" style=\"width: 300px;\">\n                    <mat-label>Add your message</mat-label>\n                    <textarea #simpleMessage matInput></textarea>\n                </mat-form-field>\n            </div>\n            <div class=\"add_message_simple__addr\">\n                <form [formGroup]=\"addressForm\">\n                    <h3>Return Address</h3>\n                    <div>\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Name</mat-label>\n                            <input required matInput formControlName=\"returnName\">\n                        </mat-form-field>\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Address 1</mat-label>\n                            <input required matInput formControlName=\"returnAddress1\">\n                        </mat-form-field>\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Address 2</mat-label>\n                            <input matInput formControlName=\"returnAddress2\">\n                        </mat-form-field>\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>City</mat-label>\n                            <input required matInput formControlName=\"returnCity\">\n                        </mat-form-field>\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>State</mat-label>\n                            <mat-select required formControlName=\"returnState\">\n                                <mat-option *ngFor=\"let s of states\" value=\"{{s}}\">\n                                    {{s}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Zip Code</mat-label>\n                            <input required matInput formControlName=\"returnZip\">\n                        </mat-form-field>\n                    </div>\n                    <h3>Recipient Address</h3>\n                    <div>\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Name</mat-label>\n                            <input required matInput formControlName=\"recipientName\">\n                        </mat-form-field>\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Address 1</mat-label>\n                            <input required matInput formControlName=\"recipientAddress1\">\n                        </mat-form-field>\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Address 2</mat-label>\n                            <input matInput formControlName=\"recipientAddress2\">\n                        </mat-form-field>\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>City</mat-label>\n                            <input required matInput formControlName=\"recipientCity\">\n                        </mat-form-field>\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>State</mat-label>\n                            <mat-select required formControlName=\"recipientState\">\n                            <mat-option *ngFor=\"let s of states\" value=\"{{s}}\">{{s}}</mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                        <mat-form-field appearance=\"standard\">\n                            <mat-label>Zip Code</mat-label>\n                            <input required matInput formControlName=\"recipientZip\">\n                        </mat-form-field>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <button mat-flat-button *ngIf=\"!readOnly\" (click)=\"saveSimpleMessage()\">Add to cart</button>\n        <button \n            *ngIf=\"readOnly\"\n            mat-flat-button \n            color=\"primary\"\n            [routerLink]=\"['/add-message', this.cartProductId]\"\n            class=\"foot\"\n        >\n            Edit Card\n        </button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"checkout\">\n  <mat-grid-list cols=\"21\" rowHeight=\"100px\">\n    <mat-grid-tile [colspan]=\"7\"></mat-grid-tile>\n    <mat-grid-tile [colspan]=\"7\"><h1>Checkout</h1></mat-grid-tile>\n    <mat-grid-tile [colspan]=\"7\"></mat-grid-tile>\n  \n    <mat-grid-tile [colspan]=\"21\" [rowspan]=\"9\" *ngFor=\"let scp of shoppingCartProducts\">\n      <app-card-slider\n        class=\"card__slider\"\n        [readOnly]=\"true\"\n        [cartProductId]=scp.id\n      ></app-card-slider>\n    </mat-grid-tile>\n  </mat-grid-list>\n  <app-payment \n    class=\"payment\"\n    [itemTotal]=\"total\"\n    [numProducts]=\"shoppingCartProductsCount\"\n  ></app-payment>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/confirmation/confirmation.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confirmation/confirmation.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"order\" class=\"confirmation\">\n    <h1 class=\"title\">Order Confirmation</h1>\n    <div class=\"top\">\n        <h1 class=\"top__title\">Thank you for your Order!</h1> \n        <p class=\"\">Order Date: {{today}} | Order Number: {{order.id}}</p> \n        <p>Estimated Delivery: </p>\n        <p>A confirmation email will be sent to <b>{{order.email}}</b> once your order has processed.</p>\n    </div>\n    <hr>\n    <div class=\"payment\">\n        <div class=\"payment__detail\">\n            <h1>Payment</h1>\n            <p>Paid with Paypal</p>\n        </div>\n        <div class=\"payment__summary\">\n            <h1>Order summary</h1>\n            <p>Subtotal ${{order.total_price.price__sum}}</p>\n            <p>Shipping ${{stampCost}}</p>\n            <hr>\n            <h3>Order Total ${{total}}</h3>\n        </div>\n    </div>\n    <div class=\"orders\">\n        <h3>Your order</h3>\n        <hr>\n        <div *ngFor=\"let i of order.order_products_set\" class=\"orders__detail\">\n            <img src=\"{{i.product_detail.image_url}}\">\n            <p>{{i.product_detail.name}} by {{i.product_detail.creator_name}}</p>\n            <div>\n                <h4>Return Address</h4>\n                <p>{{i.recipient_address_detail.name}}</p>\n                <p>{{i.recipient_address_detail.street}}</p>\n                <p>\n                    {{i.recipient_address_detail.city}}, {{i.recipient_address_detail.state}} {{i.recipient_address_detail.code}}\n                </p>\n            </div>\n            <div>\n                <h4>Recipient Address</h4>\n                <p>{{i.return_address_detail.name}}</p>\n                <p>{{i.return_address_detail.street}}</p>\n                <p>\n                    {{i.return_address_detail.city}}, {{i.return_address_detail.state}} {{i.return_address_detail.code}}\n                </p>\n            </div>\n            <p>Price: ${{i.product_detail.price}}</p>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"intro\">\n  <h1 class=\"name\">Send gifts from home.</h1>\n  <h3 class=\"description\"> Tons of options. Couldn't be easier. </h3>\n  <a class=\"shop\" [routerLink]=\"['/card-list']\">\tShop Now</a>\n</div>\n\n<div>\n  <div class=\"instructional\">\n    <div class=\"instruction__modern_gift_1\">\n      <h3>\n        Built for \n        <span class=\"bold__text\">MODERN</span> \n        <span class=\"bold__text\">GIFT GIVING</span>\n      </h3>\n      <button mat-flat-button [routerLink]=\"['/card-list']\">SHOP NOW</button>\n    </div>\n    <div class=\"instruction__step\">\n      <span class=\"circle\">1</span>\n      <!-- <mat-icon class=\"svg__icon\" svgIcon=\"card\" [inline]=\"true\"></mat-icon> -->\n      <img class=\"gift-card\" src=\"https://thin-gifts-cards.s3.amazonaws.com/christmas-card.jpg\" alt=\"\">\n      <div class=\"instruction__text\">\n        Pick a card\n      </div>\n    </div>\n    <div class=\"instruction__step\">\n      <span class=\"circle\">2</span>\n      <!-- <mat-icon class=\"svg__icon\" svgIcon=\"keyboard\" [inline]=\"true\"></mat-icon> -->\n      <img class=\"gift-card\" src=\"https://thin-gifts-cards.s3.amazonaws.com/keyboard.jpg\" alt=\"\">\n      <div class=\"instruction__text\">\n        Add a message\n      </div>\n    </div>\n    <div class=\"instruction__step\">\n      <span class=\"circle\">3</span>\n      <img class=\"gift-card\" src=\"https://thin-gifts-cards.s3.amazonaws.com/transparent-logo.png\">\n      <div class=\"instruction__text\">\n        Add a ThinGift\n      </div>\n    </div>\n  </div>\n  <div class=\"addt_text\">\n    <h2></h2>\n    <h2>We'll take care of the rest!</h2>\n  </div>\n</div>\n\n<div class=\"favorites\">\n  <div *ngFor=\"let c of cards\" class=\"card-cover\">\n    <img src=\"{{c.image_url}}\" />\n  </div>\n  <div class=\"instruction__modern_gift_2\">\n    <h3>\n      Discover \n      <span class=\"bold__text\">OUR</span> \n      <span class=\"bold__text\">FAVORITES</span>\n    </h3>\n    <span>\n      <a [routerLink]=\"['/card-list']\">See more >></a>\n    </span>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"payment_form\">\n  <mat-card class=\"summary\">\n    <h4>Checkout Summary</h4>\n    <div>\n      {{numProducts}} items: \n      <span class=\"\">\n        ${{itemTotal}}\n      </span>\n    </div>\n    <div>\n      {{numProducts}} stamps: \n      <span class=\"\">\n        ${{stampCost | number: '1.2-2' }}\n      </span>\n    </div>\n    <hr>\n    <div>\n      Total: \n      <span class=\"price\">\n        ${{total}}\n      </span>\n    </div>\n  </mat-card>\n  <mat-form-field class=\"email\">\n    <mat-label>Email</mat-label>\n    <input \n      [formControl]=\"emailFormControl\"\n      [errorStateMatcher]=\"matcher\"\n      matInput\n      #email\n      required\n    >\n    <mat-hint>Email is required to send receipt</mat-hint>\n    <mat-error *ngIf=\"emailFormControl.hasError('email')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      Email is <strong>required</strong> to send receipt\n    </mat-error>\n  </mat-form-field>\n</form>\n\n<h2>Payment Options</h2>\n<div #paypal></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card__list\">\n  <h1 class=\"card__list__title\">Select a {{productName}}</h1>\n  <mat-spinner *ngIf=\"loading\" style=\"margin:0 auto;\"></mat-spinner>\n  <div *ngIf=\"!loading\">\n    <mat-form-field>\n      <mat-label>Filter by category</mat-label>\n      <mat-select [formControl]=\"options\" (selectionChange)=\"onFilterChange($event)\" multiple>\n        <mat-option \n          *ngFor=\"let option of filterOptions\"\n          [value]=\"option.id\"\n        >\n          {{option.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    \n    <div fxLayout=\"row wrap\" class=\"card__list__products\">\n      <div fxFlex=\"33%;\" fxFlex.lt-sm=\"80%\" *ngFor=\"let p of products\">\n        <mat-card \n          class=\"card_select\" \n          (mouseenter)=\"p.hovered=true\" \n          (mouseleave)=\"p.hovered=false\" \n        >\n          <mat-card-content>\n            <img class=\"card_select__image\" src=\"{{p.image_url}}\" />\n            <h4>{{p.name}}</h4>\n            <p>{{p.description}}</p>\n            <h5>${{p.price}}</h5>\n            <button \n              *ngIf=\"p.hovered\" \n              fxHide.lt-sm=\"true\" \n              mat-flat-button \n              (click)=\"onSelectProduct(p.id)\"\n              class=\"card_select__full_btn\"\n            >\n              Add to cart\n            </button>\n            <button \n              fxShow.lt-sm=\"true\" \n              fxShow=\"false\" \n              mat-flat-button \n              (click)=\"onSelectProduct(p.id)\"\n            >\n              Add to cart\n            </button>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-cart/shopping-cart.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-cart/shopping-cart.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"shopping_cart\">\n  <h1 class=\"shopping_cart_header\">Your Cart</h1>\n  <mat-spinner *ngIf=\"loading\" style=\"margin:0 auto;\"></mat-spinner>\n  <div *ngIf=\"isEmpty\">\n    <h3>Your cart is empty. Check out some awesome cards <a class=\"shop\" [routerLink]=\"['/card-list']\">here!</a></h3>\n  </div>\n  <div *ngIf=\"!loading && !isEmpty\">\n    <div fxLayout=\"column wrap\">\n      <div fxFlex=\"80%;\" fxFlex.lt-sm=\"80%\">\n        <mat-card class=\"shopping_cart__summary\">\n          <h3>Summary</h3>\n          <div>\n            {{cart.cart_products.length}} items: \n            <span class=\"shopping_cart__summary__price\">\n              ${{cart.total_price.price__sum}}\n            </span>\n          </div>\n          <div>\n            {{cart.cart_products.length}} stamps: \n            <span class=\"shopping_cart__summary__price\">\n              ${{stampCost | number: '1.2-2' }}\n            </span>\n          </div>\n          <div>\n            Total: \n            <span class=\"shopping_cart__summary__price__final\">\n              ${{total}}\n            </span>\n          </div>\n          <button \n            class=\"shopping_cart__summary__checkout_btn\"\n            mat-flat-button\n            (click)=\"goToCheckout()\"\n          >\n            Proceed to Checkout\n          </button>\n        </mat-card>\n      </div>\n    </div>\n  \n    <div fxLayout=\"column\" class=\"shopping_cart__item_list\" fxLayoutGap=\"45px\">\n      <div fxFlex=\"100%;\" fxFlex.lt-sm=\"80%\" *ngFor=\"let i of cart.shopping_cart_products_detail\">\n        <mat-card\n          fxShow.lt-sm=\"true\"\n          fxShow=\"false\"\n          class=\"shopping_cart__item\" \n        >\n          <mat-card-content>\n            <mat-card-header>\n              <mat-card-title><a href=\"\" class=\"shopping_cart__item__title\">{{i.product_detail.name}}</a></mat-card-title>\n              <mat-card-subtitle>by {{i.product_detail.creator_name}}</mat-card-subtitle>\n            </mat-card-header>\n            <img mat-card-image src=\"{{i.product_detail.image_url}}\">\n            <mat-card-content>\n              <p>\n                {{i.product_detail.description}}\n              </p>\n            </mat-card-content>\n            <mat-card-actions>\n              <button mat-button (click)=\"editCartItem(i)\">Edit message</button>\n              <button mat-button (click)=\"deleteCartItem(i)\">Delete</button>\n            </mat-card-actions>\n          </mat-card-content>\n        </mat-card>\n        <hr>\n        <div fxHide.lt-sm=\"true\" class=\"container-full\">\n          <div class=\"p-image\">\n            <img src=\"{{i.product_detail.image_url}}\" class=\"shopping_cart__item__img\"/>\n          </div>\n          <div class=\"p-title\">\n            <p><a href=\"\">{{i.product_detail.name}}</a> by {{i.product_detail.creator_name}}</p>\n            <p>{{i.product_detail.description}}</p>\n            <a href=\"\" [routerLink]=\"['/add-message', i.id]\">Edit message</a> |\n            <a href=\"\" (click)=\"deleteCartItem(i)\">Delete</a>\n          </div>\n          <!-- <div class=\"p-btns\">\n          </div> -->\n          <div class=\"p-price\">\n            <span>${{i.product_detail.price}}</span>\n          </div>\n        </div>\n      </div>\n  </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading | async\" class=\"overlay\">\n    <mat-progress-spinner class=\"spinner\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\">\n    </mat-progress-spinner>\n</div>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-address/add-address.component.scss":
/*!********************************************************!*\
  !*** ./src/app/add-address/add-address.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outer__envelope {\n  width: 97%;\n  height: 500px;\n  border: 2px solid black;\n  text-align: center;\n}\n\n.address__line {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  border-bottom: 2px solid darkblue;\n  outline: none;\n}\n\ninput {\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: groove;\n}\n\ninput::-webkit-input-placeholder {\n  text-align: center;\n}\n\ninput::-moz-placeholder {\n  text-align: center;\n}\n\ninput::-ms-input-placeholder {\n  text-align: center;\n}\n\ninput::placeholder {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGFycmlzL3Byb2plY3RzL3RoaW4tZ2lmdHMvc3JjL2FwcC9hZGQtYWRkcmVzcy9hZGQtYWRkcmVzcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRkLWFkZHJlc3MvYWRkLWFkZHJlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURPQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7QUNKSjs7QURPQTtFQUNJLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FDSko7O0FEUUE7RUFDSSxrQkFBQTtBQ0xKOztBRElBO0VBQ0ksa0JBQUE7QUNMSjs7QURJQTtFQUNJLGtCQUFBO0FDTEo7O0FESUE7RUFDSSxrQkFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvYWRkLWFkZHJlc3MvYWRkLWFkZHJlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXJfX2VudmVsb3BlIHtcbiAgICB3aWR0aDogOTclO1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi8vIC5tYXQtZ3JpZC10aWxlIHtcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4vLyB9XG5cbi5hZGRyZXNzX19saW5lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgZGFya2JsdWU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXQge1xuICAgIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcbiAgICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IGdyb292ZTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFkZF9fYWRkcmVzcyB7XG5cbn1cbiIsIi5vdXRlcl9fZW52ZWxvcGUge1xuICB3aWR0aDogOTclO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWRkcmVzc19fbGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBkYXJrYmx1ZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXQge1xuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBncm9vdmU7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/add-address/add-address.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-address/add-address.component.ts ***!
  \******************************************************/
/*! exports provided: AddAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressComponent", function() { return AddAddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AddAddressComponent = /** @class */ (function () {
    function AddAddressComponent() {
    }
    AddAddressComponent.prototype.ngOnInit = function () {
    };
    AddAddressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-address',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-address.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-address/add-address.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-address.component.scss */ "./src/app/add-address/add-address.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AddAddressComponent);
    return AddAddressComponent;
}());



/***/ }),

/***/ "./src/app/add-giftcard/add-giftcard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/add-giftcard/add-giftcard.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card__list .mat-grid-tile .mat-figure {\n  justify-content: flex-start !important;\n  align-items: flex-start !important;\n}\n\n.add-gift {\n  padding-top: 3.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGFycmlzL3Byb2plY3RzL3RoaW4tZ2lmdHMvc3JjL2FwcC9hZGQtZ2lmdGNhcmQvYWRkLWdpZnRjYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZGQtZ2lmdGNhcmQvYWRkLWdpZnRjYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQUE7RUFDQSxrQ0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FkZC1naWZ0Y2FyZC9hZGQtZ2lmdGNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZF9fbGlzdCAubWF0LWdyaWQtdGlsZSAubWF0LWZpZ3VyZSB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQgO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gfVxuXG4uYWRkLWdpZnQge1xuICAgIHBhZGRpbmctdG9wOiAzLjVlbTtcbn1cbiIsIi5jYXJkX19saXN0IC5tYXQtZ3JpZC10aWxlIC5tYXQtZmlndXJlIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5hZGQtZ2lmdCB7XG4gIHBhZGRpbmctdG9wOiAzLjVlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/add-giftcard/add-giftcard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-giftcard/add-giftcard.component.ts ***!
  \********************************************************/
/*! exports provided: AddGiftcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGiftcardComponent", function() { return AddGiftcardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ "./src/app/services/api/api.service.ts");



var AddGiftcardComponent = /** @class */ (function () {
    function AddGiftcardComponent(ApiService) {
        this.ApiService = ApiService;
    }
    AddGiftcardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ApiService.getProducts('GI')
            .subscribe(function (data) {
            console.log(data);
            _this.gifts = data.cards;
            _this.categories = data.tags.map(function (t) { return t.name; });
        });
    };
    AddGiftcardComponent.ctorParameters = function () { return [
        { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    AddGiftcardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-giftcard',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-giftcard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-giftcard/add-giftcard.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-giftcard.component.scss */ "./src/app/add-giftcard/add-giftcard.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], AddGiftcardComponent);
    return AddGiftcardComponent;
}());



/***/ }),

/***/ "./src/app/add-message/add-message.component.scss":
/*!********************************************************!*\
  !*** ./src/app/add-message/add-message.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add-message {\n  padding-top: 3.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGFycmlzL3Byb2plY3RzL3RoaW4tZ2lmdHMvc3JjL2FwcC9hZGQtbWVzc2FnZS9hZGQtbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRkLW1lc3NhZ2UvYWRkLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYWRkLW1lc3NhZ2UvYWRkLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLW1lc3NhZ2Uge1xuICAgIHBhZGRpbmctdG9wOiAzLjVlbTtcbn1cbiIsIi5hZGQtbWVzc2FnZSB7XG4gIHBhZGRpbmctdG9wOiAzLjVlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/add-message/add-message.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-message/add-message.component.ts ***!
  \******************************************************/
/*! exports provided: AddMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMessageComponent", function() { return AddMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var AddMessageComponent = /** @class */ (function () {
    function AddMessageComponent(route) {
        this.route = route;
        this.cartProductId = this.route.snapshot.params.id;
    }
    AddMessageComponent.prototype.ngOnInit = function () {
    };
    AddMessageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    AddMessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-message',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-message/add-message.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-message.component.scss */ "./src/app/add-message/add-message.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AddMessageComponent);
    return AddMessageComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _add_address_add_address_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-address/add-address.component */ "./src/app/add-address/add-address.component.ts");
/* harmony import */ var _add_giftcard_add_giftcard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-giftcard/add-giftcard.component */ "./src/app/add-giftcard/add-giftcard.component.ts");
/* harmony import */ var _add_message_add_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-message/add-message.component */ "./src/app/add-message/add-message.component.ts");
/* harmony import */ var _card_list_card_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card-list/card-list.component */ "./src/app/card-list/card-list.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./confirmation/confirmation.component */ "./src/app/confirmation/confirmation.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");











var routes = [
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] },
    { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] },
    { path: 'shopping-cart/:id', component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_10__["ShoppingCartComponent"] },
    { path: 'add-address', component: _add_address_add_address_component__WEBPACK_IMPORTED_MODULE_4__["AddAddressComponent"] },
    { path: 'add-giftcard', component: _add_giftcard_add_giftcard_component__WEBPACK_IMPORTED_MODULE_5__["AddGiftcardComponent"] },
    { path: 'add-message/:id', component: _add_message_add_message_component__WEBPACK_IMPORTED_MODULE_6__["AddMessageComponent"] },
    { path: 'card-list', component: _card_list_card_list_component__WEBPACK_IMPORTED_MODULE_7__["CardListComponent"] },
    { path: 'checkout/:id', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"] },
    { path: 'confirmation/:id', component: _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmationComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-nav {\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.mat-icon {\n  transform: scale(1);\n}\n\n.right-nav-item {\n  cursor: pointer;\n  display: block;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n#lblCartCount {\n  font-size: 12px;\n  background: #ebbd5a;\n  color: #fff;\n  padding: 0 5px;\n  vertical-align: top;\n  border-radius: 9px;\n}\n\n#thin_gift_logo {\n  width: 35px;\n}\n\n.row-1, .row-2 {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  background-color: #a3b4b4;\n}\n\n.row-1 .resources, .row-2 .resources {\n  flex: 1;\n}\n\n.row-1 .help, .row-2 .help {\n  flex: 1;\n}\n\n.row-1 .newsletter, .row-2 .newsletter {\n  flex: 1;\n}\n\n.row-1 p, .row-2 p {\n  color: white;\n}\n\n.row-1 input, .row-2 input {\n  background-color: white;\n}\n\n.row-1 button, .row-2 button {\n  background-color: black;\n  color: white;\n}\n\n.row-1 .footer__headline, .row-2 .footer__headline {\n  font-weight: bold;\n}\n\n.row-1 .footer__text, .row-2 .footer__text {\n  line-height: 5px;\n}\n\n.row-1 .social_icon, .row-2 .social_icon {\n  transform: scale(2.2);\n}\n\n@media (min-width: 900px) {\n  .cart_icon {\n    transform: scale(1.5);\n  }\n\n  .right-nav-item {\n    margin-right: 10px;\n    margin-left: 10px;\n    cursor: pointer;\n  }\n\n  .row-1, .row-2 {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    padding-top: 50px;\n  }\n  .row-1 .resources, .row-2 .resources {\n    flex: 1;\n  }\n  .row-1 .help, .row-2 .help {\n    flex: 1;\n  }\n  .row-1 .dummy, .row-2 .dummy {\n    flex: 3;\n  }\n  .row-1 .newsletter, .row-2 .newsletter {\n    flex: 2;\n  }\n\n  .row-2 {\n    padding-top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGFycmlzL3Byb2plY3RzL3RoaW4tZ2lmdHMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBR0Esa0JBQUE7QUNDSjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURFSTtFQUNJLE9BQUE7QUNBUjs7QURHSTtFQUNJLE9BQUE7QUNEUjs7QURJSTtFQUNJLE9BQUE7QUNGUjs7QURLSTtFQUNJLFlBQUE7QUNIUjs7QURNSTtFQUNJLHVCQUFBO0FDSlI7O0FET0k7RUFDSSx1QkFBQTtFQUNBLFlBQUE7QUNMUjs7QURRSTtFQUNJLGlCQUFBO0FDTlI7O0FEU0k7RUFDSSxnQkFBQTtBQ1BSOztBRFVJO0VBQ0kscUJBQUE7QUNSUjs7QURhQTtFQUNJO0lBQ0kscUJBQUE7RUNWTjs7RURhRTtJQUNJLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VDVk47O0VEYUU7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLGlCQUFBO0VDVk47RURZTTtJQUNJLE9BQUE7RUNWVjtFRGNNO0lBQ0ksT0FBQTtFQ1pWO0VEZU07SUFDSSxPQUFBO0VDYlY7RURnQk07SUFDSSxPQUFBO0VDZFY7O0VEbUJFO0lBQ0ksY0FBQTtFQ2hCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1uYXYge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xufVxuXG4ubWF0LWljb24ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbn1cblxuLnJpZ2h0LW5hdi1pdGVtIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4jbGJsQ2FydENvdW50IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDIzNSwgMTg5LCA5MCk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMCA1cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDlweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG59XG5cblxuI3RoaW5fZ2lmdF9sb2dvIHtcbiAgICB3aWR0aDogMzVweDtcbn1cblxuLnJvdy0xLCAucm93LTIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MywgMTgwLCAxODApO1xuXG4gICAgLnJlc291cmNlcyB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgfVxuXG4gICAgLmhlbHAge1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC5uZXdzbGV0dGVyIHtcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG4gICAgXG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgXG4gICAgaW5wdXQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgXG4gICAgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuZm9vdGVyX19oZWFkbGluZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5mb290ZXJfX3RleHQge1xuICAgICAgICBsaW5lLWhlaWdodDogNXB4O1xuICAgIH1cblxuICAgIC5zb2NpYWxfaWNvbiB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMi4yKTtcbiAgICB9XG59XG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gICAgLmNhcnRfaWNvbiB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICB9XG5cbiAgICAucmlnaHQtbmF2LWl0ZW0ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLnJvdy0xLCAucm93LTIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcblxuICAgICAgICAucmVzb3VyY2VzIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAvLyB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlbHAge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kdW1teSB7XG4gICAgICAgICAgICBmbGV4OiAzO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5ld3NsZXR0ZXIge1xuICAgICAgICAgICAgZmxleDogMjtcbiAgICAgICAgICAgIC8vIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnJvdy0yIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuXG59XG5cbiIsIi5jdXN0b20tbmF2IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4ubWF0LWljb24ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucmlnaHQtbmF2LWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4jbGJsQ2FydENvdW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZWJiZDVhO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMCA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDlweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xufVxuXG4jdGhpbl9naWZ0X2xvZ28ge1xuICB3aWR0aDogMzVweDtcbn1cblxuLnJvdy0xLCAucm93LTIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhM2I0YjQ7XG59XG4ucm93LTEgLnJlc291cmNlcywgLnJvdy0yIC5yZXNvdXJjZXMge1xuICBmbGV4OiAxO1xufVxuLnJvdy0xIC5oZWxwLCAucm93LTIgLmhlbHAge1xuICBmbGV4OiAxO1xufVxuLnJvdy0xIC5uZXdzbGV0dGVyLCAucm93LTIgLm5ld3NsZXR0ZXIge1xuICBmbGV4OiAxO1xufVxuLnJvdy0xIHAsIC5yb3ctMiBwIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnJvdy0xIGlucHV0LCAucm93LTIgaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5yb3ctMSBidXR0b24sIC5yb3ctMiBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuLnJvdy0xIC5mb290ZXJfX2hlYWRsaW5lLCAucm93LTIgLmZvb3Rlcl9faGVhZGxpbmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5yb3ctMSAuZm9vdGVyX190ZXh0LCAucm93LTIgLmZvb3Rlcl9fdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiA1cHg7XG59XG4ucm93LTEgLnNvY2lhbF9pY29uLCAucm93LTIgLnNvY2lhbF9pY29uIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyLjIpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgLmNhcnRfaWNvbiB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICB9XG5cbiAgLnJpZ2h0LW5hdi1pdGVtIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLnJvdy0xLCAucm93LTIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICB9XG4gIC5yb3ctMSAucmVzb3VyY2VzLCAucm93LTIgLnJlc291cmNlcyB7XG4gICAgZmxleDogMTtcbiAgfVxuICAucm93LTEgLmhlbHAsIC5yb3ctMiAuaGVscCB7XG4gICAgZmxleDogMTtcbiAgfVxuICAucm93LTEgLmR1bW15LCAucm93LTIgLmR1bW15IHtcbiAgICBmbGV4OiAzO1xuICB9XG4gIC5yb3ctMSAubmV3c2xldHRlciwgLnJvdy0yIC5uZXdzbGV0dGVyIHtcbiAgICBmbGV4OiAyO1xuICB9XG5cbiAgLnJvdy0yIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");







var AppComponent = /** @class */ (function () {
    function AppComponent(iconRegistry, sanitizer, ApiService, dialog, router) {
        this.ApiService = ApiService;
        this.dialog = dialog;
        this.router = router;
        iconRegistry.addSvgIcon('card', sanitizer.bypassSecurityTrustResourceUrl('assets/img/christmas-card.svg'));
        iconRegistry.addSvgIcon('gift', sanitizer.bypassSecurityTrustResourceUrl('assets/img/gift-card.svg'));
        iconRegistry.addSvgIcon('keyboard', sanitizer.bypassSecurityTrustResourceUrl('http://thin-gifts-cards.s3.amazonaws.com/keyboard.svg'));
        iconRegistry.addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons8-facebook.svg'));
        iconRegistry.addSvgIcon('instagram', sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons8-instagram.svg'));
    }
    AppComponent.prototype.onRouteChange = function () {
        var _this = this;
        this.ApiService.getCartQuantity()
            .subscribe(function (data) {
            _this.cartItemCount = data.quantity;
            _this.cartId = data.id;
        });
    };
    AppComponent.prototype.openCartModal = function () {
        if (this.cartId) {
            this.router.navigate(['/shopping-cart', this.cartId]);
        }
    };
    AppComponent.prototype.submitEmail = function () {
        this.ApiService.submitEmail(this.email)
            .subscribe(function (data) {
            alert("Thanks for signing up! We'll keep you up to date on the latest news from Thin Gifts.");
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex-layout.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _card_list_card_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card-list/card-list.component */ "./src/app/card-list/card-list.component.ts");
/* harmony import */ var _add_message_add_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-message/add-message.component */ "./src/app/add-message/add-message.component.ts");
/* harmony import */ var _add_address_add_address_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-address/add-address.component */ "./src/app/add-address/add-address.component.ts");
/* harmony import */ var _add_giftcard_add_giftcard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-giftcard/add-giftcard.component */ "./src/app/add-giftcard/add-giftcard.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./confirmation/confirmation.component */ "./src/app/confirmation/confirmation.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/list.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/checkbox.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/menu.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/progress-spinner.js");
/* harmony import */ var _card_slider_card_slider_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./card-slider/card-slider.component */ "./src/app/card-slider/card-slider.component.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/radio.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _services_api_api_interceptor__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/api/api.interceptor */ "./src/app/services/api/api.interceptor.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/spinner/spinner.service */ "./src/app/services/spinner/spinner.service.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/api/api.service */ "./src/app/services/api/api.service.ts");





































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"],
                _card_list_card_list_component__WEBPACK_IMPORTED_MODULE_8__["CardListComponent"],
                _add_message_add_message_component__WEBPACK_IMPORTED_MODULE_9__["AddMessageComponent"],
                _add_address_add_address_component__WEBPACK_IMPORTED_MODULE_10__["AddAddressComponent"],
                _add_giftcard_add_giftcard_component__WEBPACK_IMPORTED_MODULE_11__["AddGiftcardComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__["CheckoutComponent"],
                _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationComponent"],
                _card_slider_card_slider_component__WEBPACK_IMPORTED_MODULE_26__["CardSliderComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_28__["ProductListComponent"],
                _payment_payment_component__WEBPACK_IMPORTED_MODULE_29__["PaymentComponent"],
                _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_31__["ShoppingCartComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_34__["SpinnerComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__["MatRadioModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HTTP_INTERCEPTORS"],
                    useClass: _services_api_api_interceptor__WEBPACK_IMPORTED_MODULE_33__["ApiInterceptor"],
                    multi: true
                },
                _services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_35__["SpinnerService"],
                _services_api_api_service__WEBPACK_IMPORTED_MODULE_36__["ApiService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            entryComponents: [_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_31__["ShoppingCartComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card-list/card-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/card-list/card-list.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card__list .mat-grid-tile .mat-figure {\n  justify-content: flex-start !important;\n  align-items: flex-start !important;\n}\n\n.card__list {\n  padding-top: 3.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGFycmlzL3Byb2plY3RzL3RoaW4tZ2lmdHMvc3JjL2FwcC9jYXJkLWxpc3QvY2FyZC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJkLWxpc3QvY2FyZC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQUE7RUFDQSxrQ0FBQTtBQ0NKOztBREVDO0VBQ0ksa0JBQUE7QUNDTCIsImZpbGUiOiJzcmMvYXBwL2NhcmQtbGlzdC9jYXJkLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZF9fbGlzdCAubWF0LWdyaWQtdGlsZSAubWF0LWZpZ3VyZSB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQgO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gfVxuXG4gLmNhcmRfX2xpc3Qge1xuICAgICBwYWRkaW5nLXRvcDogMy41ZW07XG4gfVxuIiwiLmNhcmRfX2xpc3QgLm1hdC1ncmlkLXRpbGUgLm1hdC1maWd1cmUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmNhcmRfX2xpc3Qge1xuICBwYWRkaW5nLXRvcDogMy41ZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/card-list/card-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/card-list/card-list.component.ts ***!
  \**************************************************/
/*! exports provided: CardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardListComponent", function() { return CardListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var CardListComponent = /** @class */ (function () {
    function CardListComponent(ApiService, router) {
        this.ApiService = ApiService;
        this.router = router;
    }
    CardListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.ApiService.getProducts('CA')
            .subscribe(function (data) {
            console.log(data);
            _this.cards = data.cards;
            _this.categories = data.tags.map(function (t) { return t; });
            // this.loading = false;
        });
    };
    CardListComponent.prototype.addCardToCart = function (cardId) {
        var _this = this;
        var cartData = {
            product: cardId
        };
        console.log(cardId);
        this.ApiService.addToCart(cartData).
            subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/add-message', data.id]);
        });
    };
    CardListComponent.ctorParameters = function () { return [
        { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CardListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./card-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/card-list/card-list.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./card-list.component.scss */ "./src/app/card-list/card-list.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CardListComponent);
    return CardListComponent;
}());



/***/ }),

/***/ "./src/app/card-slider/card-slider.component.scss":
/*!********************************************************!*\
  !*** ./src/app/card-slider/card-slider.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card__text {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  outline: none;\n  font-size: 24px;\n  font-family: cursive;\n}\n\ntextarea {\n  border: none;\n  overflow: auto;\n  outline: none;\n  box-shadow: none;\n  resize: none;\n  /*remove the resize handle on the bottom right*/\n}\n\n.selected {\n  color: #ebbd5a;\n  font-weight: bold;\n}\n\n.card-cover img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.mat-icon {\n  font-size: 2.5vw;\n}\n\ninput {\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.slider__option {\n  cursor: pointer;\n}\n\n.sidebar__tools {\n  width: 100%;\n  height: 100%;\n}\n\n.add_message_simple {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n}\n\n.add_message_simple__message textarea {\n  height: 300px;\n  font-family: cursive;\n  font-size: 25px;\n}\n\n.add_message_simple__addr .mat-form-field {\n  width: 80%;\n}\n\n.add_message_simple .mat-flat-button {\n  background-color: #ebbd5a;\n  color: white;\n  width: 80%;\n}\n\n.spinner {\n  margin-top: 20px;\n}\n\n.message_container {\n  display: flex;\n}\n\n.message_container .title {\n  flex: 1;\n  padding: 10px;\n  margin: 10px;\n}\n\n.message_container .card-s {\n  flex: 5;\n  padding: 10px;\n  margin: 10px;\n}\n\n.message_container .card-s .heading {\n  display: flex;\n  justify-content: center;\n}\n\n.message_container .card-s .heading p {\n  flex: 2;\n  text-align: center;\n  font-size: 24px;\n}\n\n.message_container .card-s .footing {\n  display: flex;\n}\n\n.message_container .card-s .footing .foot {\n  flex: 2;\n  text-align: center;\n  cursor: pointer;\n}\n\n.message_container .card-s .footing .mat-flat-button {\n  background-color: #ebbd5a;\n  color: white;\n  width: 80%;\n}\n\n.message_container .card-s .inside-container {\n  display: flex;\n  justify-content: center;\n}\n\n.message_container .card-s .inside-container .inside {\n  border: 1px solid #292626;\n  width: 900px;\n  height: 600px;\n  margin-bottom: 50px;\n  box-shadow: 20px 20px 10px grey;\n  display: flex;\n}\n\n.message_container .card-s .inside-container .inside .left-side {\n  width: 50%;\n  border-right: 0.5px solid black;\n}\n\n.message_container .card-s .inside-container .inside .message-wrapper {\n  width: 50%;\n}\n\n.message_container .card-s .inside-container .inside .message-wrapper .message {\n  width: 90%;\n  height: 100%;\n  box-sizing: border-box;\n}\n\n.message_container .card-s .front-container {\n  display: flex;\n  justify-content: center;\n}\n\n.message_container .card-s .front-container .front {\n  border: 1px solid #292626;\n  width: 425px;\n  height: 600px;\n  margin-bottom: 50px;\n  box-shadow: 20px 20px 10px grey;\n}\n\n.message_container .card-s .front-container .front img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.message_container .card-s .address-container {\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n}\n\n.message_container .card-s .address-container form {\n  display: flex;\n  justify-content: center;\n}\n\n.message_container .card-s .address-container .address {\n  flex: 1;\n  height: 580px;\n  margin-bottom: 50px;\n}\n\n.message_container .card-s .address-container .address mat-form-field {\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGFycmlzL3Byb2plY3RzL3RoaW4tZ2lmdHMvc3JjL2FwcC9jYXJkLXNsaWRlci9jYXJkLXNsaWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FyZC1zbGlkZXIvY2FyZC1zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBSUEsZ0JBQUE7RUFFQSxZQUFBO0VBQWMsK0NBQUE7QUNBbEI7O0FER0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURJSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0RSOztBREtBO0VBQ0ksZ0JBQUE7QUNGSjs7QURNQTtFQUNJLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQ0hKOztBRFVBO0VBQ0ksZUFBQTtBQ1BKOztBRFVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNQSjs7QURVQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ1BKOztBRFNRO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ1BaOztBRFdRO0VBQ0ksVUFBQTtBQ1RaOztBRFlJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ1ZSOztBRGNBO0VBQ0ksZ0JBQUE7QUNYSjs7QURjQTtFQUNJLGFBQUE7QUNYSjs7QURhSTtFQUNJLE9BQUE7RUFFQSxhQUFBO0VBQ0EsWUFBQTtBQ1pSOztBRGVJO0VBQ0ksT0FBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0FDZFI7O0FEZVE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUNiWjs7QURjWTtFQUNJLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNaaEI7O0FEZ0JRO0VBQ0ksYUFBQTtBQ2RaOztBRGVZO0VBQ0ksT0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ2JoQjs7QURlWTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNiaEI7O0FEaUJRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDZlo7O0FEZ0JZO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0FDZGhCOztBRGVnQjtFQUNJLFVBQUE7RUFDQSwrQkFBQTtBQ2JwQjs7QURlZ0I7RUFDSSxVQUFBO0FDYnBCOztBRGNvQjtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNaeEI7O0FEa0JRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDaEJaOztBRGlCWTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FDZmhCOztBRGdCZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNkcEI7O0FEbUJRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQ2pCWjs7QURrQlk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUNoQmhCOztBRGtCWTtFQUNJLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNoQmhCOztBRGlCZ0I7RUFDSSxVQUFBO0FDZnBCIiwiZmlsZSI6InNyYy9hcHAvY2FyZC1zbGlkZXIvY2FyZC1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZF9fdGV4dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG59XG5cbnRleHRhcmVhIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgb3V0bGluZTogbm9uZTtcblxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcblxuICAgIHJlc2l6ZTogbm9uZTsgLypyZW1vdmUgdGhlIHJlc2l6ZSBoYW5kbGUgb24gdGhlIGJvdHRvbSByaWdodCovXG59XG5cbi5zZWxlY3RlZCB7XG4gICAgY29sb3I6IHJnYigyMzUsIDE4OSwgOTApO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FyZC1jb3ZlciB7XG4gICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOjEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6MTAwJTtcbiAgICB9XG59XG5cbi5tYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAyLjV2dztcbn1cblxuXG5pbnB1dCB7XG4gICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xuICAgIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XG4gICAgLy8gYm9yZGVyLWJvdHRvbS1zdHlsZTogZ3Jvb3ZlO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5cblxuXG4uc2xpZGVyX19vcHRpb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNpZGViYXJfX3Rvb2xzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hZGRfbWVzc2FnZV9zaW1wbGUge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAmX19tZXNzYWdlIHtcbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgICZfX2FkZHIge1xuICAgICAgICAubWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubWF0LWZsYXQtYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMTg5LCA5MCk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG59XG5cbi5zcGlubmVyIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubWVzc2FnZV9jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG4gICAgLnRpdGxlIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG5cbiAgICAuY2FyZC1zIHtcbiAgICAgICAgZmxleDogNTtcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgLmhlYWRpbmcge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZmxleDogMjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5mb290aW5nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAuZm9vdCB7XG4gICAgICAgICAgICAgICAgZmxleDogMjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1hdC1mbGF0LWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMTg5LCA5MCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaW5zaWRlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAuaW5zaWRlIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNDEsIDM4LCAzOCk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OjIwcHggMjBweCAxMHB4IGdyZXk7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAubGVmdC1zaWRlIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwLjVweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1lc3NhZ2Utd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmZyb250LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAuZnJvbnQge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig0MSwgMzgsIDM4KTtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDI1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MjBweCAyMHB4IDEwcHggZ3JleTtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDoxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hZGRyZXNzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hZGRyZXNzIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTgwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbiIsIi5jYXJkX190ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbn1cblxudGV4dGFyZWEge1xuICBib3JkZXI6IG5vbmU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBvdXRsaW5lOiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcmVzaXplOiBub25lO1xuICAvKnJlbW92ZSB0aGUgcmVzaXplIGhhbmRsZSBvbiB0aGUgYm90dG9tIHJpZ2h0Ki9cbn1cblxuLnNlbGVjdGVkIHtcbiAgY29sb3I6ICNlYmJkNWE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FyZC1jb3ZlciBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMi41dnc7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xuICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcbn1cblxuLnNsaWRlcl9fb3B0aW9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2lkZWJhcl9fdG9vbHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYWRkX21lc3NhZ2Vfc2ltcGxlIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWRkX21lc3NhZ2Vfc2ltcGxlX19tZXNzYWdlIHRleHRhcmVhIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5hZGRfbWVzc2FnZV9zaW1wbGVfX2FkZHIgLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDgwJTtcbn1cbi5hZGRfbWVzc2FnZV9zaW1wbGUgLm1hdC1mbGF0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmJkNWE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLnNwaW5uZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubWVzc2FnZV9jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1lc3NhZ2VfY29udGFpbmVyIC50aXRsZSB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5tZXNzYWdlX2NvbnRhaW5lciAuY2FyZC1zIHtcbiAgZmxleDogNTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLm1lc3NhZ2VfY29udGFpbmVyIC5jYXJkLXMgLmhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5tZXNzYWdlX2NvbnRhaW5lciAuY2FyZC1zIC5oZWFkaW5nIHAge1xuICBmbGV4OiAyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5tZXNzYWdlX2NvbnRhaW5lciAuY2FyZC1zIC5mb290aW5nIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tZXNzYWdlX2NvbnRhaW5lciAuY2FyZC1zIC5mb290aW5nIC5mb290IHtcbiAgZmxleDogMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWVzc2FnZV9jb250YWluZXIgLmNhcmQtcyAuZm9vdGluZyAubWF0LWZsYXQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViYmQ1YTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogODAlO1xufVxuLm1lc3NhZ2VfY29udGFpbmVyIC5jYXJkLXMgLmluc2lkZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5tZXNzYWdlX2NvbnRhaW5lciAuY2FyZC1zIC5pbnNpZGUtY29udGFpbmVyIC5pbnNpZGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjkyNjI2O1xuICB3aWR0aDogOTAwcHg7XG4gIGhlaWdodDogNjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGJveC1zaGFkb3c6IDIwcHggMjBweCAxMHB4IGdyZXk7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWVzc2FnZV9jb250YWluZXIgLmNhcmQtcyAuaW5zaWRlLWNvbnRhaW5lciAuaW5zaWRlIC5sZWZ0LXNpZGUge1xuICB3aWR0aDogNTAlO1xuICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkIGJsYWNrO1xufVxuLm1lc3NhZ2VfY29udGFpbmVyIC5jYXJkLXMgLmluc2lkZS1jb250YWluZXIgLmluc2lkZSAubWVzc2FnZS13cmFwcGVyIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5tZXNzYWdlX2NvbnRhaW5lciAuY2FyZC1zIC5pbnNpZGUtY29udGFpbmVyIC5pbnNpZGUgLm1lc3NhZ2Utd3JhcHBlciAubWVzc2FnZSB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5tZXNzYWdlX2NvbnRhaW5lciAuY2FyZC1zIC5mcm9udC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5tZXNzYWdlX2NvbnRhaW5lciAuY2FyZC1zIC5mcm9udC1jb250YWluZXIgLmZyb250IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI5MjYyNjtcbiAgd2lkdGg6IDQyNXB4O1xuICBoZWlnaHQ6IDYwMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBib3gtc2hhZG93OiAyMHB4IDIwcHggMTBweCBncmV5O1xufVxuLm1lc3NhZ2VfY29udGFpbmVyIC5jYXJkLXMgLmZyb250LWNvbnRhaW5lciAuZnJvbnQgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuLm1lc3NhZ2VfY29udGFpbmVyIC5jYXJkLXMgLmFkZHJlc3MtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubWVzc2FnZV9jb250YWluZXIgLmNhcmQtcyAuYWRkcmVzcy1jb250YWluZXIgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1lc3NhZ2VfY29udGFpbmVyIC5jYXJkLXMgLmFkZHJlc3MtY29udGFpbmVyIC5hZGRyZXNzIHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiA1ODBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5tZXNzYWdlX2NvbnRhaW5lciAuY2FyZC1zIC5hZGRyZXNzLWNvbnRhaW5lciAuYWRkcmVzcyBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA4MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/card-slider/card-slider.component.ts":
/*!******************************************************!*\
  !*** ./src/app/card-slider/card-slider.component.ts ***!
  \******************************************************/
/*! exports provided: states, CardSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "states", function() { return states; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSliderComponent", function() { return CardSliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");





var states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];
var CardSliderComponent = /** @class */ (function () {
    function CardSliderComponent(ApiService, router, fb) {
        this.ApiService = ApiService;
        this.router = router;
        this.fb = fb;
        this.slides = [
            'cover',
            'card',
            'addressing'
        ];
        this.fontOptions = [
            { value: 'CURSIVE', text: 'Cursive' },
            { value: 'REGULAR', text: 'Regular' },
        ];
        this.sizeOptions = [
            { value: '', text: '' },
            { value: 16, text: '16' },
            { value: 32, text: '32' },
            { value: 64, text: '64' },
        ];
        this.colorOptions = [
            { value: 'BLACK', text: 'Black' },
            { value: 'LIGHT_BLUE', text: 'Light Blue' },
        ];
        this.current = 1;
        this.states = states;
        this.font = 'CURSIVE';
        this.color = 'BLACK';
        this.readOnly = false;
    }
    Object.defineProperty(CardSliderComponent.prototype, "message1", {
        set: function (message) {
            if (this.messageData && this.message) {
                this.message.nativeElement.value = this.messageData;
                if (this.color) {
                    this.onColorChange(this.color);
                }
                if (this.font) {
                    this.onFontChange(this.font);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    CardSliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.cardSliderColumns = (window.innerWidth <= 400) ? 9 : 18;
        this.ApiService.getCartProduct(this.cartProductId)
            .subscribe(function (data) {
            console.log(data);
            _this.card = data;
            _this.loading = false;
            _this.buildForm();
            if (data.message) {
                _this.messageData = data.message;
                _this.color = data.color;
                _this.font = data.font;
            }
        });
    };
    CardSliderComponent.prototype.getAddressInfoFromRes = function (data) {
        if (data) {
            return {
                name: data.name,
                street: data.street,
                street2: data.street2,
                city: data.city,
                state: data.state,
                code: data.code
            };
        }
        return {
            name: '',
            street: '',
            street2: '',
            city: '',
            state: '',
            code: ''
        };
    };
    CardSliderComponent.prototype.buildForm = function () {
        var recipient = this.getAddressInfoFromRes(this.card.recipient_address);
        var ret = this.getAddressInfoFromRes(this.card.return_address);
        this.addressForm = this.fb.group({
            returnName: ret.name,
            returnAddress1: ret.street,
            returnAddress2: ret.street2,
            returnCity: ret.city,
            returnState: ret.state,
            returnZip: ret.code,
            recipientName: recipient.name,
            recipientAddress1: recipient.street,
            recipientAddress2: recipient.street2,
            recipientCity: recipient.city,
            recipientState: recipient.state,
            recipientZip: recipient.code
        });
        this.messageForm = this.fb.group({
            text: this.messageData || ['Dear , \n\n\n\n    Best,']
        });
        if (this.readOnly) {
            this.addressForm.disable();
            this.messageForm.disable();
        }
    };
    // @HostListener('window:keyup', ['$event'])
    // keyEvent(event: KeyboardEvent) {
    //   if (event.keyCode === 39) {
    //     this.moveRight();
    //   }
    //   if (event.keyCode === 37) {
    //     this.moveLeft();
    //   }
    // }
    CardSliderComponent.prototype.moveLeft = function () {
        if (this.current > 0) {
            this.current -= 1;
        }
    };
    CardSliderComponent.prototype.moveRight = function () {
        if (this.current < 2) {
            this.current += 1;
        }
    };
    CardSliderComponent.prototype.changeSlide = function (slide) {
        switch (slide) {
            case 'cover':
                this.current = 0;
                break;
            case 'card':
                this.current = 1;
                break;
            case 'addressing':
                this.current = 2;
                break;
        }
    };
    CardSliderComponent.prototype.isCover = function () {
        return this.slides[this.current] === 'cover';
    };
    CardSliderComponent.prototype.isCard = function () {
        return this.slides[this.current] === 'card';
    };
    CardSliderComponent.prototype.isAddressing = function () {
        return this.slides[this.current] === 'addressing';
    };
    CardSliderComponent.prototype.getReturnAddress = function () {
        return {
            name: this.addressForm.value.returnName,
            street: this.addressForm.value.returnAddress1,
            street2: this.addressForm.value.returnAddress2,
            city: this.addressForm.value.returnCity,
            state: this.addressForm.value.returnState,
            code: this.addressForm.value.returnZip
        };
    };
    CardSliderComponent.prototype.getRecipientAddress = function () {
        return {
            name: this.addressForm.value.recipientName,
            street: this.addressForm.value.recipientAddress1,
            street2: this.addressForm.value.recipientAddress2,
            city: this.addressForm.value.recipientCity,
            state: this.addressForm.value.recipientState,
            code: this.addressForm.value.recipientZip
        };
    };
    CardSliderComponent.prototype.saveMessage = function (e) {
        var _this = this;
        var message = this.messageForm.value.text;
        var returnAddress = this.getReturnAddress();
        var recipientAddress = this.getRecipientAddress();
        var reqData = {
            message: message,
            color: this.color,
            font: this.font,
            return_address: returnAddress,
            recipient_address: recipientAddress
        };
        this.ApiService.updateCartProduct(reqData, this.cartProductId)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/checkout', data.shopping_cart]);
        });
    };
    CardSliderComponent.prototype.saveSimpleMessage = function () {
        var _this = this;
        var message = this.simpleMessage.nativeElement.value;
        var returnAddress = this.getReturnAddress();
        var recipientAddress = this.getRecipientAddress();
        var reqData = {
            message: message,
            color: "BLACK",
            font: "CURSIVE",
            return_address: returnAddress,
            recipient_address: recipientAddress
        };
        this.ApiService.updateCartProduct(reqData, this.cartProductId)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/checkout', data.shopping_cart]);
        });
    };
    CardSliderComponent.prototype.onFontChange = function (value) {
        this.font = value;
        if (value === "REGULAR") {
            this.message.nativeElement.style.fontFamily = "Times New Roman";
        }
        else if (value === "CURSIVE") {
            this.message.nativeElement.style.fontFamily = "Cursive";
        }
    };
    CardSliderComponent.prototype.onColorChange = function (value) {
        this.color = value;
        if (value === "BLACK") {
            this.message.nativeElement.style.color = "black";
        }
        else if (value === "LIGHT_BLUE") {
            this.message.nativeElement.style.color = "rgb(90,128,152)";
        }
    };
    CardSliderComponent.prototype.deleteCartId = function (id) {
        var _this = this;
        this.ApiService.deleteCartProduct(id)
            .subscribe(function (data) {
            _this.router.navigate(['/checkout', data.shopping_cart]);
            console.log(data);
        });
    };
    CardSliderComponent.ctorParameters = function () { return [
        { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("message", { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CardSliderComponent.prototype, "message", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("message"),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], CardSliderComponent.prototype, "message1", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("simpleMessage"),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CardSliderComponent.prototype, "simpleMessage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CardSliderComponent.prototype, "cartProductId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CardSliderComponent.prototype, "readOnly", void 0);
    CardSliderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-slider',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./card-slider2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/card-slider/card-slider2.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./card-slider.component.scss */ "./src/app/card-slider/card-slider.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], CardSliderComponent);
    return CardSliderComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.scss":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card__slider {\n  width: 100%;\n  height: 100%;\n}\n\n.payment__box {\n  width: 100%;\n  height: 100%;\n}\n\n.payment__long__fields {\n  width: 90%;\n}\n\n.payment__exp__date {\n  width: 30%;\n  margin: 20px;\n}\n\n.payment {\n  width: 75vw;\n  text-align: center;\n}\n\n.checkout {\n  padding-top: 3.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGFycmlzL3Byb2plY3RzL3RoaW4tZ2lmdHMvc3JjL2FwcC9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLFVBQUE7QUNESjs7QURJQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uY2FyZF9fc2xpZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wYXltZW50X19ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnBheW1lbnRfX2xvbmdfX2ZpZWxkcyB7XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLnBheW1lbnRfX2V4cF9fZGF0ZSB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi5wYXltZW50IHtcbiAgICB3aWR0aDogNzV2dztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jaGVja291dCB7XG4gICAgcGFkZGluZy10b3A6IDMuNWVtO1xufSIsIi5jYXJkX19zbGlkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGF5bWVudF9fYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBheW1lbnRfX2xvbmdfX2ZpZWxkcyB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5wYXltZW50X19leHBfX2RhdGUge1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5wYXltZW50IHtcbiAgd2lkdGg6IDc1dnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNoZWNrb3V0IHtcbiAgcGFkZGluZy10b3A6IDMuNWVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(ApiService, route) {
        this.ApiService = ApiService;
        this.route = route;
        this.cartId = this.route.snapshot.params.id;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ApiService.getCart(this.cartId)
            .subscribe(function (data) {
            console.log(data);
            _this.cart = data;
            _this.shoppingCartProducts = data.shopping_cart_products_detail;
            _this.shoppingCartProductsCount = _this.shoppingCartProducts.length;
            _this.total = data.total_price.price__sum;
        });
    };
    CheckoutComponent.ctorParameters = function () { return [
        { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    CheckoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./checkout.component.scss */ "./src/app/checkout/checkout.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/confirmation/confirmation.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/confirmation/confirmation.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".confirmation {\n  display: flex;\n  padding: 10px;\n  margin-top: 3.5em;\n  flex-direction: column;\n}\n.confirmation .title {\n  text-align: center;\n}\n.top {\n  flex: 3;\n  background-color: #dce0e0;\n  padding: 10px;\n  text-align: center;\n}\n.top__title {\n  color: #f58326;\n}\n.top__order_date {\n  display: inline;\n}\n.payment {\n  flex: 3;\n  display: flex;\n  flex-direction: column;\n  background-color: #dce0e0;\n  padding: 10px;\n  text-align: center;\n}\n.payment__detail {\n  flex: 1;\n}\n.payment__summary {\n  flex: 1;\n}\n.orders {\n  flex: 3;\n  text-align: center;\n  padding: 10px;\n}\n.orders img {\n  width: 50%;\n}\n@media (min-width: 900px) {\n  .top {\n    text-align: left;\n  }\n\n  .payment {\n    flex-direction: row;\n  }\n\n  .orders {\n    text-align: left;\n  }\n  .orders__detail {\n    display: flex;\n    justify-content: space-between;\n  }\n  .orders img {\n    width: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGFycmlzL3Byb2plY3RzL3RoaW4tZ2lmdHMvc3JjL2FwcC9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDQ0o7QURBSTtFQUNJLGtCQUFBO0FDRVI7QURFQTtFQUNJLE9BQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDSSxjQUFBO0FDRVI7QURBSTtFQUNJLGVBQUE7QUNFUjtBREVBO0VBQ0ksT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURBSTtFQUNJLE9BQUE7QUNFUjtBREFJO0VBQ0ksT0FBQTtBQ0VSO0FERUE7RUFDSSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQ0o7QURBSTtFQUNJLFVBQUE7QUNFUjtBREdBO0VBQ0k7SUFDSSxnQkFBQTtFQ0FOOztFREdFO0lBQ0ksbUJBQUE7RUNBTjs7RURHRTtJQUNJLGdCQUFBO0VDQU47RURDTTtJQUNJLGFBQUE7SUFDQSw4QkFBQTtFQ0NWO0VEQ007SUFDSSxVQUFBO0VDQ1Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlybWF0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMy41ZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAudGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4udG9wIHtcbiAgICBmbGV4OiAzO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsIDIyNCwgMjI0KTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAmX190aXRsZSB7XG4gICAgICAgIGNvbG9yOiByZ2IoMjQ1LCAxMzEsIDM4KTtcbiAgICB9XG4gICAgJl9fb3JkZXJfZGF0ZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB9XG59XG5cbi5wYXltZW50IHtcbiAgICBmbGV4OiAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyMjQsIDIyNCk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgJl9fZGV0YWlsIHtcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG4gICAgJl9fc3VtbWFyeSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgfVxufVxuXG4ub3JkZXJzIHtcbiAgICBmbGV4OiAzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxufVxuXG5cbkBtZWRpYShtaW4td2lkdGg6IDkwMHB4KSB7XG4gICAgLnRvcCB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgLnBheW1lbnQge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cblxuICAgIC5vcmRlcnMge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAmX19kZXRhaWwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5jb25maXJtYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAzLjVlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb25maXJtYXRpb24gLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udG9wIHtcbiAgZmxleDogMztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjZTBlMDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRvcF9fdGl0bGUge1xuICBjb2xvcjogI2Y1ODMyNjtcbn1cbi50b3BfX29yZGVyX2RhdGUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5wYXltZW50IHtcbiAgZmxleDogMztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjZTBlMDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBheW1lbnRfX2RldGFpbCB7XG4gIGZsZXg6IDE7XG59XG4ucGF5bWVudF9fc3VtbWFyeSB7XG4gIGZsZXg6IDE7XG59XG5cbi5vcmRlcnMge1xuICBmbGV4OiAzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ub3JkZXJzIGltZyB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICAudG9wIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgLnBheW1lbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cblxuICAub3JkZXJzIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIC5vcmRlcnNfX2RldGFpbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLm9yZGVycyBpbWcge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/confirmation/confirmation.component.ts":
/*!********************************************************!*\
  !*** ./src/app/confirmation/confirmation.component.ts ***!
  \********************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");





var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent(ApiService, route) {
        this.ApiService = ApiService;
        this.route = route;
        this.today = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en');
        this.orderId = this.route.snapshot.params.id;
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ApiService.getOrder(this.orderId)
            .subscribe(function (data) {
            console.log(data);
            _this.order = data;
            _this.calcTotal();
        });
    };
    ConfirmationComponent.prototype.calcTotal = function () {
        this.stampCost = this.order.order_products.length * 0.55;
        this.total = this.stampCost + this.order.total_price.price__sum;
    };
    ConfirmationComponent.ctorParameters = function () { return [
        { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    ConfirmationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmation',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./confirmation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/confirmation/confirmation.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./confirmation.component.scss */ "./src/app/confirmation/confirmation.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.scss":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".favorites {\n  background-color: #f7f0ea;\n  text-align: center;\n}\n\n.intro {\n  font-family: \"Lato\", sans-serif;\n  line-height: 2;\n  padding: 3rem;\n  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n  background-size: 1000% 1000%;\n  -webkit-animation: gradient 10s linear infinite;\n          animation: gradient 10s linear infinite;\n  color: #fff;\n  text-align: center;\n}\n\n.name {\n  display: block;\n  font-size: 4rem;\n  font-weight: 400;\n  padding-top: 6rem;\n  -webkit-animation-name: moveToRight;\n          animation-name: moveToRight;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n}\n\n.description {\n  display: block;\n  font-size: 1.4 rem;\n  font-weight: 300;\n  padding-top: 1rem;\n  -webkit-animation: moveToLeft 2s ease-in-out;\n          animation: moveToLeft 2s ease-in-out;\n}\n\n.h3, h3 {\n  font-size: 1.4 rem;\n}\n\n@-webkit-keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n.shop {\n  text-decoration: none;\n  text-transform: uppercase;\n  background-color: #fff;\n  padding: 1rem 4rem;\n  border-radius: 10rem;\n  display: inline-block;\n  margin-top: 5rem;\n  color: #777;\n  font-size: 1.1rem;\n  letter-spacing: 0.75rem;\n  transition: all 0.5s;\n  -webkit-animation: moveUp 2s ease 2s;\n          animation: moveUp 2s ease 2s;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n}\n\n.shop:hover {\n  transform: translateY(-1rem);\n  box-shadow: 0px 2rem 4rem rgba(0, 0, 0, 0.2);\n}\n\n.shop:active {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 1rem 2rem rgba(0, 0, 0, 0.2);\n}\n\n@-webkit-keyframes moveToRight {\n  0% {\n    opacity: 0;\n    transform: translateX(-50rem);\n  }\n  80% {\n    transform: translateX(5rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0rem);\n  }\n}\n\n@keyframes moveToRight {\n  0% {\n    opacity: 0;\n    transform: translateX(-50rem);\n  }\n  80% {\n    transform: translateX(5rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0rem);\n  }\n}\n\n@-webkit-keyframes moveToLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(50rem);\n  }\n  80% {\n    transform: translateX(5rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0rem);\n  }\n}\n\n@keyframes moveToLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(50rem);\n  }\n  80% {\n    transform: translateX(5rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0rem);\n  }\n}\n\n@-webkit-keyframes moveUp {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0rem);\n  }\n}\n\n@keyframes moveUp {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0rem);\n  }\n}\n\n.instruction__modern_gift_1, .instruction__modern_gift_2 {\n  padding: 20px;\n  text-align: center;\n}\n\n.bold__text {\n  font-size: 1.5em;\n  display: block;\n}\n\n.circle {\n  border-radius: 100px;\n  background: #2adada;\n  color: white;\n  padding: 10px 15px;\n}\n\n.instruction__step {\n  padding: 10px;\n}\n\n.instruction__step .svg__icon {\n  transform: scale(0.6);\n}\n\n.instruction__step img {\n  max-width: 100%;\n  padding: 8px;\n}\n\n.instruction__text {\n  text-align: center;\n  font-style: italic;\n}\n\n.emphasis__text {\n  font-style: italic;\n}\n\n.mat-flat-button {\n  background-color: #ebbd5a;\n  color: white;\n  width: 200px;\n  margin-top: 30px;\n  font-size: 20px;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\n.card-cover {\n  padding-top: 40px;\n}\n\n.card-cover img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n@media (min-width: 900px) {\n  .intro {\n    font-family: \"Lato\", sans-serif;\n    line-height: 2;\n    padding: 3rem;\n    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n    background-size: 1000% 1000%;\n    -webkit-animation: gradient 10s linear infinite;\n            animation: gradient 10s linear infinite;\n    color: #fff;\n    text-align: center;\n  }\n\n  .name {\n    display: block;\n    font-size: 4rem;\n    font-weight: 400;\n    letter-spacing: 1.3rem;\n    padding-top: 6rem;\n    -webkit-animation-name: moveToRight;\n            animation-name: moveToRight;\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s;\n    -webkit-animation-delay: 0s;\n            animation-delay: 0s;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n  }\n\n  .description {\n    display: block;\n    font-size: 1.4 rem;\n    font-weight: 300;\n    letter-spacing: 1.1rem;\n    padding-top: 1rem;\n    -webkit-animation: moveToLeft 2s ease-in-out;\n            animation: moveToLeft 2s ease-in-out;\n  }\n\n  .instruction__modern_gift_1 {\n    flex: 1;\n    padding: 0;\n    text-align: center;\n  }\n\n  .instruction__modern_gift_2 {\n    flex: 1;\n    padding: 0;\n    text-align: center;\n  }\n\n  .instruction__step {\n    flex: 1;\n  }\n  .instruction__step img {\n    max-width: 100%;\n    padding: 8px;\n  }\n\n  .instructional {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: 30px;\n  }\n\n  .favorites {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: 30px;\n  }\n\n  .card-cover {\n    padding: 10px;\n    height: 375px;\n    flex: 1;\n  }\n\n  .addt_text {\n    display: flex;\n    justify-content: space-between;\n  }\n  .addt_text h2 {\n    flex: 1;\n    margin-left: auto;\n    padding-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGFycmlzL3Byb2plY3RzL3RoaW4tZ2lmdHMvc3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyx5QkFBQTtFQUNBLGtCQUFBO0FDQUQ7O0FER0E7RUFDQywrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUVBQUE7RUFDQSw0QkFBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNBRDs7QURHQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0FDQUQ7O0FER0E7RUFDQyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7VUFBQSxvQ0FBQTtBQ0FEOztBREdBO0VBQ0Msa0JBQUE7QUNBRDs7QURHQTtFQUNDO0lBQ0MsMkJBQUE7RUNBQTtFREVEO0lBQ0MsNkJBQUE7RUNBQTtFREVEO0lBQ0MsMkJBQUE7RUNBQTtBQUNGOztBRFRBO0VBQ0M7SUFDQywyQkFBQTtFQ0FBO0VERUQ7SUFDQyw2QkFBQTtFQ0FBO0VERUQ7SUFDQywyQkFBQTtFQ0FBO0FBQ0Y7O0FER0E7RUFDQyxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtBQ0REOztBRElBO0VBQ0MsNEJBQUE7RUFDQSw0Q0FBQTtBQ0REOztBRElBO0VBQ0MsK0JBQUE7RUFDQSw0Q0FBQTtBQ0REOztBRElBO0VBQ0M7SUFDQyxVQUFBO0lBQ0EsNkJBQUE7RUNEQTtFREdEO0lBQ0MsMkJBQUE7RUNEQTtFRElEO0lBQ0MsVUFBQTtJQUNBLDJCQUFBO0VDRkE7QUFDRjs7QURWQTtFQUNDO0lBQ0MsVUFBQTtJQUNBLDZCQUFBO0VDREE7RURHRDtJQUNDLDJCQUFBO0VDREE7RURJRDtJQUNDLFVBQUE7SUFDQSwyQkFBQTtFQ0ZBO0FBQ0Y7O0FES0E7RUFDQztJQUNDLFVBQUE7SUFDQSw0QkFBQTtFQ0hBO0VES0Q7SUFDQywyQkFBQTtFQ0hBO0VES0Q7SUFDQyxVQUFBO0lBQ0EsMkJBQUE7RUNIQTtBQUNGOztBRFJBO0VBQ0M7SUFDQyxVQUFBO0lBQ0EsNEJBQUE7RUNIQTtFREtEO0lBQ0MsMkJBQUE7RUNIQTtFREtEO0lBQ0MsVUFBQTtJQUNBLDJCQUFBO0VDSEE7QUFDRjs7QURNQTtFQUNDO0lBQ0MsVUFBQTtJQUNBLDJCQUFBO0VDSkE7RURPRDtJQUNDLFVBQUE7SUFDQSwyQkFBQTtFQ0xBO0FBQ0Y7O0FESkE7RUFDQztJQUNDLFVBQUE7SUFDQSwyQkFBQTtFQ0pBO0VET0Q7SUFDQyxVQUFBO0lBQ0EsMkJBQUE7RUNMQTtBQUNGOztBRFFBO0VBQ0MsYUFBQTtFQUNBLGtCQUFBO0FDTkQ7O0FEU0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNOSjs7QURTQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURVQTtFQUNDLGFBQUE7QUNQRDs7QURRQztFQUVDLHFCQUFBO0FDUEY7O0FEVUM7RUFDQyxlQUFBO0VBQ0EsWUFBQTtBQ1JGOztBRFlBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ1RKOztBRFlBO0VBQ0ksa0JBQUE7QUNUSjs7QURZQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNUSjs7QURZQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQ1RKOztBRFlBO0VBQ0MsaUJBQUE7QUNURDs7QURVQztFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQ1JGOztBRGFBO0VBQ0M7SUFDQywrQkFBQTtJQUNBLGNBQUE7SUFDQSxhQUFBO0lBQ0EsdUVBQUE7SUFDQSw0QkFBQTtJQUNBLCtDQUFBO1lBQUEsdUNBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUNWQTs7RURhRDtJQUNDLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUNBQUE7WUFBQSwyQkFBQTtJQUNBLDhCQUFBO1lBQUEsc0JBQUE7SUFDQSwyQkFBQTtZQUFBLG1CQUFBO0lBQ0EsOENBQUE7WUFBQSxzQ0FBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7RUNWQTs7RURhRDtJQUNDLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0Esc0JBQUE7SUFDQSxpQkFBQTtJQUNBLDRDQUFBO1lBQUEsb0NBQUE7RUNWQTs7RURhRDtJQUNDLE9BQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7RUNWQTs7RURhRDtJQUNDLE9BQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7RUNWQTs7RURhRDtJQUNDLE9BQUE7RUNWQTtFRFdBO0lBQ0MsZUFBQTtJQUNBLFlBQUE7RUNURDs7RURhRDtJQUNDLGFBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtFQ1ZBOztFRGFEO0lBQ0MsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0VDVkE7O0VEYUQ7SUFDQyxhQUFBO0lBQ0EsYUFBQTtJQUNBLE9BQUE7RUNWQTs7RURhRDtJQUNDLGFBQUE7SUFDQSw4QkFBQTtFQ1ZBO0VEV0E7SUFDQyxPQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFQ1REO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmZhdm9yaXRlcyB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0MCwgMjM0KTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW50cm97XG5cdGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcblx0bGluZS1oZWlnaHQ6IDI7XG5cdHBhZGRpbmc6IDNyZW07XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsI2VlNzc1MiwgI2U3M2M3ZSwgIzIzYTZkNSwjMjNkNWFiKTtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAwJSAxMDAwJTtcblx0YW5pbWF0aW9uOiBncmFkaWVudCAxMHMgbGluZWFyIGluZmluaXRlO1xuXHRjb2xvcjojZmZmO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYW1le1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiA0cmVtO1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRwYWRkaW5nLXRvcDogNnJlbTtcblx0YW5pbWF0aW9uLW5hbWU6bW92ZVRvUmlnaHQ7XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG5cdGFuaW1hdGlvbi1kZWxheTogMHM7XG5cdGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuXHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxOyBcblxufVxuLmRlc2NyaXB0aW9ue1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAxLjQgcmVtO1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRwYWRkaW5nLXRvcDogMXJlbTtcblx0YW5pbWF0aW9uOm1vdmVUb0xlZnQgMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5oMywgaDN7XG5cdGZvbnQtc2l6ZTogMS40IHJlbTtcbn1cblxuQGtleWZyYW1lcyBncmFkaWVudHtcblx0MCV7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuXHR9XG5cdDUwJXtcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcblx0fVxuXHQxMDAle1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcblx0fVxufVxuXG4uc2hvcHtcblx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdHBhZGRpbmc6MXJlbSA0cmVtO1xuXHRib3JkZXItcmFkaXVzOiAxMHJlbTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRtYXJnaW4tdG9wOjVyZW07XG5cdGNvbG9yOiM3Nzc7XG5cdGZvbnQtc2l6ZTogMS4xcmVtO1xuXHRsZXR0ZXItc3BhY2luZzogLjc1cmVtO1xuXHR0cmFuc2l0aW9uOiBhbGwgLjVzO1xuXHRhbmltYXRpb246IG1vdmVVcCAycyBlYXNlIDJzO1xuXHRhbmltYXRpb24tZmlsbC1tb2RlOmJhY2t3YXJkcztcbn1cblxuLnNob3A6aG92ZXJ7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXJlbSk7XG5cdGJveC1zaGFkb3c6IDBweCAycmVtIDRyZW0gcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4uc2hvcDphY3RpdmV7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtLjI1cmVtKTtcblx0Ym94LXNoYWRvdzogMHB4IDFyZW0gMnJlbSByZ2JhKDAsMCwwLDAuMik7XG59XG5cbkBrZXlmcmFtZXMgbW92ZVRvUmlnaHR7XG5cdDAle1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHJlbSk7XG5cdH1cblx0ODAle1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cmVtKVxuXHR9XG5cblx0MTAwJXtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcblx0fVxufVxuXG5Aa2V5ZnJhbWVzIG1vdmVUb0xlZnR7XG5cdDAle1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwcmVtKTtcblx0fVxuXHQ4MCV7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVyZW0pXG5cdH1cblx0MTAwJXtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcblx0fVxufVxuXG5Aa2V5ZnJhbWVzIG1vdmVVcHtcblx0MCV7XG5cdFx0b3BhY2l0eTogMDtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3JlbSk7XG5cdH1cblx0XG5cdDEwMCV7XG5cdFx0b3BhY2l0eTogMTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XG5cdH1cbn1cblxuLmluc3RydWN0aW9uX19tb2Rlcm5fZ2lmdF8xLCAuaW5zdHJ1Y3Rpb25fX21vZGVybl9naWZ0XzIge1xuXHRwYWRkaW5nOiAyMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib2xkX190ZXh0IHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2lyY2xlIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNDIsIDIxOCwgMjE4KTtcbiAgICBjb2xvciA6IHdoaXRlO1xuICAgIHBhZGRpbmcgOiAxMHB4IDE1cHg7XG59XG5cblxuLmluc3RydWN0aW9uX19zdGVwIHtcblx0cGFkZGluZzogMTBweDtcblx0LnN2Z19faWNvbiB7XG5cdFx0Ly8gZGlzcGxheTogaW5saW5lO1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMC42KTtcblx0fVxuXG5cdGltZyB7XG5cdFx0bWF4LXdpZHRoOjEwMCU7XG5cdFx0cGFkZGluZzogOHB4O1xuXHR9XG59XG5cbi5pbnN0cnVjdGlvbl9fdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmVtcGhhc2lzX190ZXh0IHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5tYXQtZmxhdC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDE4OSwgOTApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5jYXJkLWNvdmVyIHtcblx0cGFkZGluZy10b3A6IDQwcHg7XG5cdGltZyB7XG5cdFx0bWF4LXdpZHRoOjEwMCU7XG5cdFx0bWF4LWhlaWdodDoxMDAlO1xuXHR9XG59XG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XG5cdC5pbnRyb3tcblx0XHRmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG5cdFx0bGluZS1oZWlnaHQ6IDI7XG5cdFx0cGFkZGluZzogM3JlbTtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCNlZTc3NTIsICNlNzNjN2UsICMyM2E2ZDUsIzIzZDVhYik7XG5cdFx0YmFja2dyb3VuZC1zaXplOiAxMDAwJSAxMDAwJTtcblx0XHRhbmltYXRpb246IGdyYWRpZW50IDEwcyBsaW5lYXIgaW5maW5pdGU7XG5cdFx0Y29sb3I6I2ZmZjtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblxuXHQubmFtZXtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRmb250LXNpemU6IDRyZW07XG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRsZXR0ZXItc3BhY2luZzogMS4zcmVtO1xuXHRcdHBhZGRpbmctdG9wOiA2cmVtO1xuXHRcdGFuaW1hdGlvbi1uYW1lOm1vdmVUb1JpZ2h0O1xuXHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG5cdFx0YW5pbWF0aW9uLWRlbGF5OiAwcztcblx0XHRhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcblx0XHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxOyBcblx0fVxuXG5cdC5kZXNjcmlwdGlvbntcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRmb250LXNpemU6IDEuNCByZW07XG5cdFx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0XHRsZXR0ZXItc3BhY2luZzogMS4xcmVtO1xuXHRcdHBhZGRpbmctdG9wOiAxcmVtO1xuXHRcdGFuaW1hdGlvbjptb3ZlVG9MZWZ0IDJzIGVhc2UtaW4tb3V0O1xuXHR9XG5cblx0Lmluc3RydWN0aW9uX19tb2Rlcm5fZ2lmdF8xIHtcblx0XHRmbGV4OiAxO1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cblx0Lmluc3RydWN0aW9uX19tb2Rlcm5fZ2lmdF8yIHtcblx0XHRmbGV4OiAxO1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cblx0Lmluc3RydWN0aW9uX19zdGVwIHtcblx0XHRmbGV4OiAxO1xuXHRcdGltZyB7XG5cdFx0XHRtYXgtd2lkdGg6MTAwJTtcblx0XHRcdHBhZGRpbmc6IDhweDtcblx0XHR9XG5cdH1cblxuXHQuaW5zdHJ1Y3Rpb25hbCB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0cGFkZGluZzogMzBweDtcblx0fVxuXG5cdC5mYXZvcml0ZXMge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdHBhZGRpbmc6IDMwcHg7XG5cdH1cblxuXHQuY2FyZC1jb3ZlciB7XG5cdFx0cGFkZGluZzogMTBweDtcblx0XHRoZWlnaHQ6IDM3NXB4O1xuXHRcdGZsZXg6IDE7XG5cdH1cblxuXHQuYWRkdF90ZXh0IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRoMiB7XG5cdFx0XHRmbGV4OiAxO1xuXHRcdFx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogMjBweDtcblx0XHR9XG5cdH1cblxufSIsIi5mYXZvcml0ZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmMGVhO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnRybyB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIHBhZGRpbmc6IDNyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNlZTc3NTIsICNlNzNjN2UsICMyM2E2ZDUsICMyM2Q1YWIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMDAlIDEwMDAlO1xuICBhbmltYXRpb246IGdyYWRpZW50IDEwcyBsaW5lYXIgaW5maW5pdGU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZy10b3A6IDZyZW07XG4gIGFuaW1hdGlvbi1uYW1lOiBtb3ZlVG9SaWdodDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEuNCByZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBhbmltYXRpb246IG1vdmVUb0xlZnQgMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5oMywgaDMge1xuICBmb250LXNpemU6IDEuNCByZW07XG59XG5cbkBrZXlmcmFtZXMgZ3JhZGllbnQge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICB9XG59XG4uc2hvcCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMXJlbSA0cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA1cmVtO1xuICBjb2xvcjogIzc3NztcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjc1cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgYW5pbWF0aW9uOiBtb3ZlVXAgMnMgZWFzZSAycztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYmFja3dhcmRzO1xufVxuXG4uc2hvcDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXJlbSk7XG4gIGJveC1zaGFkb3c6IDBweCAycmVtIDRyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uc2hvcDphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVyZW0pO1xuICBib3gtc2hhZG93OiAwcHggMXJlbSAycmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuQGtleWZyYW1lcyBtb3ZlVG9SaWdodCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTByZW0pO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVyZW0pO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1vdmVUb0xlZnQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTByZW0pO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVyZW0pO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1vdmVVcCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcmVtKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcbiAgfVxufVxuLmluc3RydWN0aW9uX19tb2Rlcm5fZ2lmdF8xLCAuaW5zdHJ1Y3Rpb25fX21vZGVybl9naWZ0XzIge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib2xkX190ZXh0IHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZDogIzJhZGFkYTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG5cbi5pbnN0cnVjdGlvbl9fc3RlcCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uaW5zdHJ1Y3Rpb25fX3N0ZXAgLnN2Z19faWNvbiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbn1cbi5pbnN0cnVjdGlvbl9fc3RlcCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmluc3RydWN0aW9uX190ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5lbXBoYXNpc19fdGV4dCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmJkNWE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNhcmQtY292ZXIge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5jYXJkLWNvdmVyIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gIC5pbnRybyB7XG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgIHBhZGRpbmc6IDNyZW07XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2VlNzc1MiwgI2U3M2M3ZSwgIzIzYTZkNSwgIzIzZDVhYik7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAwJSAxMDAwJTtcbiAgICBhbmltYXRpb246IGdyYWRpZW50IDEwcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLm5hbWUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjNyZW07XG4gICAgcGFkZGluZy10b3A6IDZyZW07XG4gICAgYW5pbWF0aW9uLW5hbWU6IG1vdmVUb1JpZ2h0O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICB9XG5cbiAgLmRlc2NyaXB0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEuNCByZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMS4xcmVtO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIGFuaW1hdGlvbjogbW92ZVRvTGVmdCAycyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIC5pbnN0cnVjdGlvbl9fbW9kZXJuX2dpZnRfMSB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5pbnN0cnVjdGlvbl9fbW9kZXJuX2dpZnRfMiB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5pbnN0cnVjdGlvbl9fc3RlcCB7XG4gICAgZmxleDogMTtcbiAgfVxuICAuaW5zdHJ1Y3Rpb25fX3N0ZXAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG5cbiAgLmluc3RydWN0aW9uYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gIH1cblxuICAuZmF2b3JpdGVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICB9XG5cbiAgLmNhcmQtY292ZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaGVpZ2h0OiAzNzVweDtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgLmFkZHRfdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLmFkZHRfdGV4dCBoMiB7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ "./src/app/services/api/api.service.ts");



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(ApiService) {
        this.ApiService = ApiService;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ApiService.getProducts('CA', { limit: 3 })
            .subscribe(function (data) {
            console.log(data);
            _this.cards = data.cards;
        });
    };
    HomepageComponent.ctorParameters = function () { return [
        { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    HomepageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./homepage.component.scss */ "./src/app/homepage/homepage.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment.component.scss":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".summary {\n  text-align: left;\n  background-color: #ecebe5;\n  width: 20%;\n  min-width: 200px;\n}\n.summary .price {\n  color: #be3d3d;\n  font-size: 23px;\n}\n.payment_form {\n  min-width: 300px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.email {\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGFycmlzL3Byb2plY3RzL3RoaW4tZ2lmdHMvc3JjL2FwcC9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREFJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNFUjtBREVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0NKO0FER0E7RUFDSSxVQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VtbWFyeSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzUsIDIyOSk7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIC5wcmljZSB7XG4gICAgICAgIGNvbG9yOiByZ2IoMTkwLCA2MSwgNjEpO1xuICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgfVxufVxuXG4ucGF5bWVudF9mb3JtIHtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5cbi5lbWFpbCB7XG4gICAgd2lkdGg6IDYwJTtcbn1cbiIsIi5zdW1tYXJ5IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWJlNTtcbiAgd2lkdGg6IDIwJTtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cbi5zdW1tYXJ5IC5wcmljZSB7XG4gIGNvbG9yOiAjYmUzZDNkO1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbi5wYXltZW50X2Zvcm0ge1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5lbWFpbCB7XG4gIHdpZHRoOiA2MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: MyErrorStateMatcher, PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api/api.service */ "./src/app/services/api/api.service.ts");





var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(ApiService, route, router) {
        this.ApiService = ApiService;
        this.route = route;
        this.router = router;
        this.paidFor = false;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.cartId = this.route.snapshot.params.id;
    }
    PaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        paypal
            .Buttons({
            createOrder: function (data, actions) {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: "cartID " + _this.cartId + ", email " + _this.emailElement.nativeElement.value,
                            amount: {
                                currency_code: 'USD',
                                value: _this.total
                            }
                        }
                    ]
                });
            },
            onApprove: function (data, actions) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                var email;
                var _this = this;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    email = this.emailElement.nativeElement.value;
                    if (this.emailFormControl.invalid) {
                        alert('Please fill in a valid email');
                        return [2 /*return*/];
                    }
                    this.ApiService.captureOrder(data.orderID, this.cartId, email)
                        .subscribe(function (data) {
                        _this.paidFor = true;
                        console.log(data);
                        // redirect to receipt page
                        _this.router.navigate(['/confirmation', data.id]);
                    });
                    return [2 /*return*/];
                });
            }); },
            onError: function (err) {
                // display to user
                debugger;
                console.log(err);
            }
        })
            .render(this.paypalElement.nativeElement);
    };
    PaymentComponent.prototype.ngOnChanges = function (change) {
        this.stampCost = this.numProducts * 0.55;
        this.total = this.stampCost + this.itemTotal;
    };
    PaymentComponent.ctorParameters = function () { return [
        { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paypal', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PaymentComponent.prototype, "paypalElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('email', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PaymentComponent.prototype, "emailElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], PaymentComponent.prototype, "itemTotal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], PaymentComponent.prototype, "numProducts", void 0);
    PaymentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment.component.scss */ "./src/app/payment/payment.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/product-list/product-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/product-list/product-list.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card__list {\n  text-align: center;\n  padding-left: 20px;\n}\n.card__list__title {\n  text-align: center;\n  padding-bottom: 10px;\n}\n.card_select:hover {\n  border: 0.5px solid grey;\n  box-shadow: 20px 20px 10px grey;\n  cursor: pointer;\n}\n.card_select:hover h4, .card_select:hover p {\n  text-decoration: underline;\n  color: blue;\n}\n.card_select {\n  width: 90%;\n  margin-bottom: 10px;\n}\n.card_select__image {\n  width: 75%;\n}\n.card_select__full_btn {\n  position: absolute;\n  bottom: 30%;\n  left: 20%;\n  width: 60%;\n  height: 10%;\n}\n.mat-flat-button {\n  background-color: #f58326;\n  color: white;\n  font-size: 15px;\n}\n.mat-spinner {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGFycmlzL3Byb2plY3RzL3RoaW4tZ2lmdHMvc3JjL2FwcC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0FDRVI7QURHQTtFQUNJLHdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FDQUo7QURDSTtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtBQ0NSO0FESUE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUNESjtBREVJO0VBQ0ksVUFBQTtBQ0FSO0FERUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNBUjtBRElBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0RKO0FESUE7RUFDSSxrQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkX19saXN0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICZfX3RpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgfVxufVxuXG5cbi5jYXJkX3NlbGVjdDpob3ZlciB7XG4gICAgYm9yZGVyOiAuNXB4IHNvbGlkIGdyZXk7XG4gICAgYm94LXNoYWRvdzoyMHB4IDIwcHggMTBweCBncmV5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoNCwgcCB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICB9XG59XG5cblxuLmNhcmRfc2VsZWN0IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgJl9faW1hZ2Uge1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgIH1cbiAgICAmX19mdWxsX2J0biB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAzMCU7XG4gICAgICAgIGxlZnQ6IDIwJTtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgaGVpZ2h0OiAxMCU7XG4gICAgfVxufVxuXG4ubWF0LWZsYXQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAxMzEsIDM4KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ubWF0LXNwaW5uZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIuY2FyZF9fbGlzdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmNhcmRfX2xpc3RfX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmNhcmRfc2VsZWN0OmhvdmVyIHtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBncmV5O1xuICBib3gtc2hhZG93OiAyMHB4IDIwcHggMTBweCBncmV5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FyZF9zZWxlY3Q6aG92ZXIgaDQsIC5jYXJkX3NlbGVjdDpob3ZlciBwIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4uY2FyZF9zZWxlY3Qge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNhcmRfc2VsZWN0X19pbWFnZSB7XG4gIHdpZHRoOiA3NSU7XG59XG4uY2FyZF9zZWxlY3RfX2Z1bGxfYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDMwJTtcbiAgbGVmdDogMjAlO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDEwJTtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTgzMjY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ubWF0LXNwaW5uZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");





var productTypeMap = {
    'Card': 'CA',
    'Gift': 'GI'
};
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(ApiService, route, router) {
        this.ApiService = ApiService;
        this.route = route;
        this.router = router;
        this.selectProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.options = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.selectedFilters = [];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.loading = true;
        // if tag filter in url, call func
    };
    ProductListComponent.prototype.ngOnChanges = function (changes) {
        if (changes.products.currentValue) {
            this.loading = false;
        }
    };
    ProductListComponent.prototype.onSelectProduct = function (productId) {
        console.log('fadsjkfdjak');
        this.selectProduct.emit(productId);
    };
    ProductListComponent.prototype.onFilterChange = function (e) {
        var _this = this;
        console.log(e);
        this.selectedFilters = e.value;
        this.ApiService.getProductsByTag(productTypeMap[this.productName], this.selectedFilters)
            .subscribe(function (data) {
            // console.log(data);
            _this.products = data.results;
        });
    };
    ProductListComponent.ctorParameters = function () { return [
        { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], ProductListComponent.prototype, "filterOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ProductListComponent.prototype, "products", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], ProductListComponent.prototype, "productName", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ProductListComponent.prototype, "selectProduct", void 0);
    ProductListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-list.component.scss */ "./src/app/product-list/product-list.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/services/api/api.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/services/api/api.interceptor.ts ***!
  \*************************************************/
/*! exports provided: ApiInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function() { return ApiInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spinner/spinner.service */ "./src/app/services/spinner/spinner.service.ts");




var ApiInterceptor = /** @class */ (function () {
    function ApiInterceptor(spinner) {
        this.spinner = spinner;
        this.count = 0;
    }
    ApiInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        this.update_nonce();
        this.spinner.show();
        this.count++;
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) { return console.log(event); }, function (error) { return console.log(error); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            _this.count--;
            if (_this.count === 0)
                _this.spinner.hide();
        }));
    };
    ApiInterceptor.prototype.update_nonce = function () {
        var scriptTag = document.getElementById('payment');
        scriptTag.setAttribute('data-csp-nonce', Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    };
    ApiInterceptor.ctorParameters = function () { return [
        { type: _spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"] }
    ]; };
    ApiInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"]])
    ], ApiInterceptor);
    return ApiInterceptor;
}());



/***/ }),

/***/ "./src/app/services/api/api.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
        });
        this.baseURL = '/api';
        this.requestOptions = {
            headers: this.headers,
            withCredentials: true,
        };
    }
    ApiService.prototype.formatQP = function (queryParams) {
        var queryString = '';
        for (var _i = 0, _a = Object.entries(queryParams); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            queryString += key + "=" + value;
        }
        return queryString;
    };
    ApiService.prototype.getProducts = function (type, qpObj) {
        if (qpObj === void 0) { qpObj = null; }
        var qp;
        if (qpObj) {
            qp = this.formatQP(qpObj);
        }
        return this.http.get(this.baseURL + "/products/get_products/?type=" + type + "&" + qp, this.requestOptions);
    };
    ApiService.prototype.addToCart = function (values) {
        return this.http.post(this.baseURL + "/shopping_cart_products/create_or_update_cart/", values, this.requestOptions);
    };
    ApiService.prototype.getCart = function (cartId) {
        return this.http.get(this.baseURL + "/shopping_cart/" + cartId + "/", this.requestOptions);
    };
    ApiService.prototype.getCartQuantity = function () {
        return this.http.get(this.baseURL + "/shopping_cart/get_cart_quantity/", this.requestOptions);
    };
    ApiService.prototype.updateCartProduct = function (values, cartProductId) {
        return this.http.patch(this.baseURL + "/shopping_cart_products/" + cartProductId + "/", values, this.requestOptions);
    };
    ApiService.prototype.getCartProduct = function (cartProductId) {
        return this.http.get(this.baseURL + "/shopping_cart_products/" + cartProductId + "/", this.requestOptions);
    };
    ApiService.prototype.getProductsByTag = function (productType, tagIds) {
        var queryParams = '';
        if (tagIds) {
            queryParams = this.formatTagQueryParams('tags', tagIds);
        }
        return this.http.get(this.baseURL + "/products/?type=" + productType + "&" + queryParams, this.requestOptions);
    };
    ApiService.prototype.captureOrder = function (orderId, shoppingCartId, email) {
        return this.http.post(this.baseURL + "/execute_payment/", {
            order_id: orderId,
            shopping_cart_id: shoppingCartId,
            email: email,
        }, this.requestOptions);
    };
    ApiService.prototype.getOrder = function (orderId) {
        return this.http.get(this.baseURL + "/orders/" + orderId + "/", this.requestOptions);
    };
    ApiService.prototype.deleteCartProduct = function (cartProductId) {
        return this.http.delete(this.baseURL + "/shopping_cart_products/" + cartProductId + "/", this.requestOptions);
    };
    ApiService.prototype.submitEmail = function (email) {
        return this.http.post(this.baseURL + "/subscribe_email/", {
            email: email
        }, this.requestOptions);
    };
    ApiService.prototype.formatTagQueryParams = function (key, values) {
        var queryParams = '';
        values.forEach(function (val) {
            queryParams += key + "=" + val + "&";
        });
        return queryParams;
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/spinner/spinner.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/spinner/spinner.service.ts ***!
  \*****************************************************/
/*! exports provided: SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SpinnerService = /** @class */ (function () {
    function SpinnerService() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    SpinnerService.prototype.show = function () {
        this.isLoading.next(true);
    };
    SpinnerService.prototype.hide = function () {
        this.isLoading.next(false);
    };
    SpinnerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SpinnerService);
    return SpinnerService;
}());



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".shopping_cart {\n  padding-top: 60px;\n}\n.shopping_cart__summary {\n  background-color: #ecebe5;\n}\n.shopping_cart__summary__price {\n  color: #be3d3d;\n  font-size: 23px;\n}\n.shopping_cart__summary__checkout_btn {\n  background-color: #f58326;\n  color: white;\n  font-size: 15px;\n  width: 70%;\n  margin-top: 10px;\n}\n.shopping_cart__item_list {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.shopping_cart__item {\n  margin-top: 20px;\n}\n.shopping_cart__item .mat-card-image {\n  width: 60%;\n}\n@media (min-width: 900px) {\n  .shopping_cart {\n    padding-top: 60px;\n  }\n  .shopping_cart_header {\n    text-align: center;\n  }\n  .shopping_cart__summary {\n    text-align: center;\n    background-color: #ecebe5;\n    width: 25%;\n    margin-left: 30px;\n  }\n  .shopping_cart__summary__price {\n    color: #be3d3d;\n    font-size: 18px;\n  }\n  .shopping_cart__summary__price__final {\n    color: #be3d3d;\n    font-size: 23px;\n  }\n  .shopping_cart__summary__checkout_btn {\n    background-color: #f58326;\n    color: white;\n    font-size: 15px;\n    width: 70%;\n    margin-top: 10px;\n  }\n  .shopping_cart__item_list {\n    text-align: left;\n    margin-bottom: 20px;\n  }\n  .shopping_cart__item__img {\n    width: 40%;\n  }\n\n  .container-full {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .p-image {\n    flex: 1;\n    padding-left: 30px;\n  }\n\n  .p-title {\n    flex: 1;\n  }\n\n  .p-price {\n    flex: 1;\n    text-align: center;\n    color: #be3d3d;\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGFycmlzL3Byb2plY3RzL3RoaW4tZ2lmdHMvc3JjL2FwcC9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7QURDSTtFQUNJLHlCQUFBO0FDQ1I7QURBUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDRVo7QURBUTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNFWjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0FSO0FER0k7RUFDSSxnQkFBQTtBQ0RSO0FERVE7RUFDSSxVQUFBO0FDQVo7QURRQTtFQUNJO0lBQ0ksaUJBQUE7RUNMTjtFRE1NO0lBQ0ksa0JBQUE7RUNKVjtFRE1NO0lBQ0ksa0JBQUE7SUFDQSx5QkFBQTtJQUNBLFVBQUE7SUFDQSxpQkFBQTtFQ0pWO0VES1U7SUFDSSxjQUFBO0lBQ0EsZUFBQTtFQ0hkO0VESWM7SUFDSSxjQUFBO0lBQ0EsZUFBQTtFQ0ZsQjtFREtVO0lBQ0kseUJBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtFQ0hkO0VET007SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0VDTFY7RURTVTtJQUNJLFVBQUE7RUNQZDs7RURZRTtJQUNJLGFBQUE7SUFDQSw4QkFBQTtFQ1ROOztFRFlFO0lBQ0ksT0FBQTtJQUNBLGtCQUFBO0VDVE47O0VEWUU7SUFDSSxPQUFBO0VDVE47O0VEWUU7SUFDSSxPQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQ1ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvcHBpbmdfY2FydCB7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICZfX3N1bW1hcnkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzUsIDIyOSk7XG4gICAgICAgICZfX3ByaWNlIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTkwLCA2MSwgNjEpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICB9XG4gICAgICAgICZfX2NoZWNrb3V0X2J0biB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAxMzEsIDM4KTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9faXRlbV9saXN0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgICZfX2l0ZW0ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAubWF0LWNhcmQtaW1hZ2Uge1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG5cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgICAuc2hvcHBpbmdfY2FydCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgICAgICAmX2hlYWRlciB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgJl9fc3VtbWFyeSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzUsIDIyOSk7XG4gICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICAmX19wcmljZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigxOTAsIDYxLCA2MSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICZfX2ZpbmFsIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigxOTAsIDYxLCA2MSk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmX19jaGVja291dF9idG4ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDEzMSwgMzgpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJl9faXRlbV9saXN0IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgICZfX2l0ZW0ge1xuICAgICAgICAgICAgJl9faW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lci1mdWxsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgIC5wLWltYWdlIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIH1cblxuICAgIC5wLXRpdGxlIHtcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAucC1wcmljZSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHJnYigxOTAsIDYxLCA2MSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG59IiwiLnNob3BwaW5nX2NhcnQge1xuICBwYWRkaW5nLXRvcDogNjBweDtcbn1cbi5zaG9wcGluZ19jYXJ0X19zdW1tYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWJlNTtcbn1cbi5zaG9wcGluZ19jYXJ0X19zdW1tYXJ5X19wcmljZSB7XG4gIGNvbG9yOiAjYmUzZDNkO1xuICBmb250LXNpemU6IDIzcHg7XG59XG4uc2hvcHBpbmdfY2FydF9fc3VtbWFyeV9fY2hlY2tvdXRfYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ODMyNjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uc2hvcHBpbmdfY2FydF9faXRlbV9saXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnNob3BwaW5nX2NhcnRfX2l0ZW0ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnNob3BwaW5nX2NhcnRfX2l0ZW0gLm1hdC1jYXJkLWltYWdlIHtcbiAgd2lkdGg6IDYwJTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gIC5zaG9wcGluZ19jYXJ0IHtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgfVxuICAuc2hvcHBpbmdfY2FydF9oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuc2hvcHBpbmdfY2FydF9fc3VtbWFyeSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2ViZTU7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgfVxuICAuc2hvcHBpbmdfY2FydF9fc3VtbWFyeV9fcHJpY2Uge1xuICAgIGNvbG9yOiAjYmUzZDNkO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuc2hvcHBpbmdfY2FydF9fc3VtbWFyeV9fcHJpY2VfX2ZpbmFsIHtcbiAgICBjb2xvcjogI2JlM2QzZDtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gIH1cbiAgLnNob3BwaW5nX2NhcnRfX3N1bW1hcnlfX2NoZWNrb3V0X2J0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ODMyNjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAuc2hvcHBpbmdfY2FydF9faXRlbV9saXN0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLnNob3BwaW5nX2NhcnRfX2l0ZW1fX2ltZyB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuXG4gIC5jb250YWluZXItZnVsbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAucC1pbWFnZSB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIH1cblxuICAucC10aXRsZSB7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIC5wLXByaWNlIHtcbiAgICBmbGV4OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2JlM2QzZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(ApiService, router, route) {
        this.ApiService = ApiService;
        this.router = router;
        this.route = route;
        this.cartId = this.route.snapshot.params.id;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.ApiService.getCart(this.cartId)
            .subscribe(function (data) {
            _this.cart = data;
            console.log(_this.cart);
            _this.loading = false;
            if (_this.cart.cart_products.length == 0) {
                _this.isEmpty = true;
            }
            _this.calcTotal();
        });
    };
    ShoppingCartComponent.prototype.calcTotal = function () {
        if (!this.isEmpty) {
            this.stampCost = this.cart.cart_products.length * 0.55;
            this.total = (this.stampCost + this.cart.total_price.price__sum).toFixed(2);
        }
    };
    ShoppingCartComponent.prototype.deleteCartItem = function (item) {
        var _this = this;
        this.ApiService.deleteCartProduct(item.id)
            .subscribe(function (data) {
            _this.router.navigate(['/home']);
            console.log(data);
        });
    };
    // editCartItem(item) {
    //   this.router.navigate(['/add-message', item.id]);
    // }
    ShoppingCartComponent.prototype.goToCheckout = function () {
        this.router.navigate(['/checkout', this.cart.id]);
    };
    ShoppingCartComponent.ctorParameters = function () { return [
        { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    ShoppingCartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-cart',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-cart/shopping-cart.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./shopping-cart.component.scss */ "./src/app/shopping-cart/shopping-cart.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/spinner/spinner.component.scss":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".overlay {\n  position: fixed;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(74, 74, 74, 0.8);\n  z-index: 99999;\n}\n\n.spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGFycmlzL3Byb2plY3RzL3RoaW4tZ2lmdHMvc3JjL2FwcC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHVDQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheSB7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIHRvcDowO1xuICAgIGxlZnQ6MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNzQsNzQsNzQsLjgpO1xuICAgIHotaW5kZXg6OTk5OTk7XG59XG5cbi5zcGlubmVyIHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6NTAlO1xuICAgIGxlZnQ6NTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG59XG4iLCIub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NCwgNzQsIDc0LCAwLjgpO1xuICB6LWluZGV4OiA5OTk5OTtcbn1cblxuLnNwaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/spinner/spinner.service */ "./src/app/services/spinner/spinner.service.ts");



var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(spinnerService) {
        this.spinnerService = spinnerService;
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 50;
        this.isLoading = this.spinnerService.isLoading;
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent.ctorParameters = function () { return [
        { type: _services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"] }
    ]; };
    SpinnerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./spinner.component.scss */ "./src/app/spinner/spinner.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"]])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mattharris/projects/thin-gifts/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map