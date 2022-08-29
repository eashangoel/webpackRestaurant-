"use strict";
(self["webpackChunkwebpackrestaurant_"] = self["webpackChunkwebpackrestaurant_"] || []).push([["about"],{

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAboutContent)
/* harmony export */ });
/* harmony import */ var _eashuimage_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eashuimage.jpg */ "./src/eashuimage.jpg");
/* harmony import */ var _email_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email.png */ "./src/email.png");
/* harmony import */ var _instagram_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instagram.png */ "./src/instagram.png");
/* harmony import */ var _phone_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phone.png */ "./src/phone.png");
/* harmony import */ var _github_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./github.png */ "./src/github.png");
/* harmony import */ var _silverware_variant_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./silverware-variant.png */ "./src/silverware-variant.png");







function makeSkillsImage(imgsrc, div){
    let image1= new Image();
    image1.classList.add('aboutSkillsImage')
    image1.src= imgsrc;
    div.appendChild(image1);
}

function getAboutContent(){
    
    let mainDiv = document.createElement('div');
    mainDiv.classList.add("mainAboutDiv");
    
    let header= document.createElement('h1');
    header.innerHTML= "About Eashan Goel";
    
    let image1= new Image();
    image1.classList.add('cardAboutImage')
    image1.src= _eashuimage_jpg__WEBPACK_IMPORTED_MODULE_0__;
    let cardImage1 = document.createElement('div');
    cardImage1.classList.add("aboutImageDiv");
    cardImage1.appendChild(image1);

    let aboutDiv = document.createElement('div');
    aboutDiv.classList.add("aboutDiv");
    let cardHeader1= document.createElement('h2');
    cardHeader1.innerHTML= "My journey"
    let p1 = document.createElement('p');
    p1.innerHTML= `lorem fviuwbrovw okrnvow knvow bnwofibnwr onvworinvo rwinv ownwokn
    lorem fviuwbrovw okrnvow knvow bnwofibnwr onvworinvo rwinv ownwokn
    lorem fviuwbrovw okrnvow knvow bnwofibnwr onvworinvo rwinv ownwokn
    lorem fviuwbrovw okrnvow knvow bnwofibnwr onvworinvo rwinv ownwokn
    lorem fviuwbrovw okrnvow knvow bnwofibnwr onvworinvo rwinv ownwokn
    lorem fviuwbrovw okrnvow knvow bnwofibnwr onvworinvo rwinv ownwokn`

    let skills1Div = document.createElement('div');
    skills1Div.classList.add("skills1Div");
    let cardHeader2= document.createElement('h2');
    cardHeader2.innerHTML= "Skills"


    aboutDiv.appendChild(cardHeader1);
    aboutDiv.appendChild(p1);

    skills1Div.appendChild(cardHeader2);

    let skillsDiv = document.createElement('div');
    skillsDiv.classList.add("skillsDiv");
    makeSkillsImage(_email_png__WEBPACK_IMPORTED_MODULE_1__, skillsDiv);
    makeSkillsImage(_instagram_png__WEBPACK_IMPORTED_MODULE_2__, skillsDiv);
    makeSkillsImage(_phone_png__WEBPACK_IMPORTED_MODULE_3__, skillsDiv);
    makeSkillsImage(_silverware_variant_png__WEBPACK_IMPORTED_MODULE_5__, skillsDiv);
    makeSkillsImage(_github_png__WEBPACK_IMPORTED_MODULE_4__, skillsDiv);
    skills1Div.appendChild(skillsDiv);

    mainDiv.appendChild(header);
    mainDiv.appendChild(cardImage1);
    mainDiv.appendChild(aboutDiv);
    mainDiv.appendChild(skills1Div);
 
    return mainDiv;
}



/***/ }),

/***/ "./src/eashuimage.jpg":
/*!****************************!*\
  !*** ./src/eashuimage.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d48385253cc3084478b.jpg";

/***/ }),

/***/ "./src/email.png":
/*!***********************!*\
  !*** ./src/email.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47edf52659a7ce1547b2.png";

/***/ }),

/***/ "./src/github.png":
/*!************************!*\
  !*** ./src/github.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2130e21655bd14737b1.png";

/***/ }),

/***/ "./src/instagram.png":
/*!***************************!*\
  !*** ./src/instagram.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "15890bd4fac681efe304.png";

/***/ }),

/***/ "./src/phone.png":
/*!***********************!*\
  !*** ./src/phone.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0fb5300ebe2d7e68fdec.png";

/***/ }),

/***/ "./src/silverware-variant.png":
/*!************************************!*\
  !*** ./src/silverware-variant.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fb0e6a80de2ccbe17d4.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/about.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDTjtBQUNJO0FBQ0o7QUFDRTtBQUNZOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNENBQVM7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQix1Q0FBUTtBQUM1QixvQkFBb0IsMkNBQVE7QUFDNUIsb0JBQW9CLHVDQUFRO0FBQzVCLG9CQUFvQixvREFBUztBQUM3QixvQkFBb0Isd0NBQVM7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrcmVzdGF1cmFudC0vLi9zcmMvYWJvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhc2hhbkxvYyBmcm9tICcuL2Vhc2h1aW1hZ2UuanBnJ1xuaW1wb3J0IGVtYWlsTG9jIGZyb20gJy4vZW1haWwucG5nJ1xuaW1wb3J0IGluc3RhTG9jIGZyb20gJy4vaW5zdGFncmFtLnBuZydcbmltcG9ydCBwaG9uZUxvYyBmcm9tICcuL3Bob25lLnBuZydcbmltcG9ydCBnaXRodWJMb2MgZnJvbSAnLi9naXRodWIucG5nJ1xuaW1wb3J0IHNpbHZlckxvYyBmcm9tICcuL3NpbHZlcndhcmUtdmFyaWFudC5wbmcnXG5cbmZ1bmN0aW9uIG1ha2VTa2lsbHNJbWFnZShpbWdzcmMsIGRpdil7XG4gICAgbGV0IGltYWdlMT0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2UxLmNsYXNzTGlzdC5hZGQoJ2Fib3V0U2tpbGxzSW1hZ2UnKVxuICAgIGltYWdlMS5zcmM9IGltZ3NyYztcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW1hZ2UxKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QWJvdXRDb250ZW50KCl7XG4gICAgXG4gICAgbGV0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluQWJvdXREaXZcIik7XG4gICAgXG4gICAgbGV0IGhlYWRlcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXIuaW5uZXJIVE1MPSBcIkFib3V0IEVhc2hhbiBHb2VsXCI7XG4gICAgXG4gICAgbGV0IGltYWdlMT0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2UxLmNsYXNzTGlzdC5hZGQoJ2NhcmRBYm91dEltYWdlJylcbiAgICBpbWFnZTEuc3JjPSBlYXNoYW5Mb2M7XG4gICAgbGV0IGNhcmRJbWFnZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkSW1hZ2UxLmNsYXNzTGlzdC5hZGQoXCJhYm91dEltYWdlRGl2XCIpO1xuICAgIGNhcmRJbWFnZTEuYXBwZW5kQ2hpbGQoaW1hZ2UxKTtcblxuICAgIGxldCBhYm91dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0RGl2LmNsYXNzTGlzdC5hZGQoXCJhYm91dERpdlwiKTtcbiAgICBsZXQgY2FyZEhlYWRlcjE9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY2FyZEhlYWRlcjEuaW5uZXJIVE1MPSBcIk15IGpvdXJuZXlcIlxuICAgIGxldCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMS5pbm5lckhUTUw9IGBsb3JlbSBmdml1d2Jyb3Z3IG9rcm52b3cga252b3cgYm53b2ZpYm53ciBvbnZ3b3JpbnZvIHJ3aW52IG93bndva25cbiAgICBsb3JlbSBmdml1d2Jyb3Z3IG9rcm52b3cga252b3cgYm53b2ZpYm53ciBvbnZ3b3JpbnZvIHJ3aW52IG93bndva25cbiAgICBsb3JlbSBmdml1d2Jyb3Z3IG9rcm52b3cga252b3cgYm53b2ZpYm53ciBvbnZ3b3JpbnZvIHJ3aW52IG93bndva25cbiAgICBsb3JlbSBmdml1d2Jyb3Z3IG9rcm52b3cga252b3cgYm53b2ZpYm53ciBvbnZ3b3JpbnZvIHJ3aW52IG93bndva25cbiAgICBsb3JlbSBmdml1d2Jyb3Z3IG9rcm52b3cga252b3cgYm53b2ZpYm53ciBvbnZ3b3JpbnZvIHJ3aW52IG93bndva25cbiAgICBsb3JlbSBmdml1d2Jyb3Z3IG9rcm52b3cga252b3cgYm53b2ZpYm53ciBvbnZ3b3JpbnZvIHJ3aW52IG93bndva25gXG5cbiAgICBsZXQgc2tpbGxzMURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNraWxsczFEaXYuY2xhc3NMaXN0LmFkZChcInNraWxsczFEaXZcIik7XG4gICAgbGV0IGNhcmRIZWFkZXIyPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNhcmRIZWFkZXIyLmlubmVySFRNTD0gXCJTa2lsbHNcIlxuXG5cbiAgICBhYm91dERpdi5hcHBlbmRDaGlsZChjYXJkSGVhZGVyMSk7XG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQocDEpO1xuXG4gICAgc2tpbGxzMURpdi5hcHBlbmRDaGlsZChjYXJkSGVhZGVyMik7XG5cbiAgICBsZXQgc2tpbGxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2tpbGxzRGl2LmNsYXNzTGlzdC5hZGQoXCJza2lsbHNEaXZcIik7XG4gICAgbWFrZVNraWxsc0ltYWdlKGVtYWlsTG9jLCBza2lsbHNEaXYpO1xuICAgIG1ha2VTa2lsbHNJbWFnZShpbnN0YUxvYywgc2tpbGxzRGl2KTtcbiAgICBtYWtlU2tpbGxzSW1hZ2UocGhvbmVMb2MsIHNraWxsc0Rpdik7XG4gICAgbWFrZVNraWxsc0ltYWdlKHNpbHZlckxvYywgc2tpbGxzRGl2KTtcbiAgICBtYWtlU2tpbGxzSW1hZ2UoZ2l0aHViTG9jLCBza2lsbHNEaXYpO1xuICAgIHNraWxsczFEaXYuYXBwZW5kQ2hpbGQoc2tpbGxzRGl2KTtcblxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGNhcmRJbWFnZTEpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoYWJvdXREaXYpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoc2tpbGxzMURpdik7XG4gXG4gICAgcmV0dXJuIG1haW5EaXY7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==