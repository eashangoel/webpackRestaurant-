"use strict";
(self["webpackChunkwebpackrestaurant_"] = self["webpackChunkwebpackrestaurant_"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHomeContent)
/* harmony export */ });
/* harmony import */ var _tajmahal_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tajmahal.jpg */ "./src/tajmahal.jpg");
/* harmony import */ var _eiffel_tower_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eiffel_tower.jpg */ "./src/eiffel_tower.jpg");
/* harmony import */ var _js_javascript_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js-javascript.gif */ "./src/js-javascript.gif");




function createCard(imgsrc, content, head){
    let cardDiv1 = document.createElement('div');
    cardDiv1.classList.add("cardDiv");
    let cardHeader1= document.createElement('h2');
    cardHeader1.innerHTML= head
    let image1= new Image();
    image1.classList.add('cardImage')
    image1.src= imgsrc;
    let p1 = document.createElement('p');
    p1.innerHTML= content

cardDiv1.appendChild(cardHeader1)
cardDiv1.appendChild(p1);
cardDiv1.appendChild(image1);
return cardDiv1;
}

function makeBanner(imgsrc){
    let cardDiv1 = document.createElement('div');
    cardDiv1.classList.add("bannerDiv");
    let image1= new Image();
    image1.classList.add('bannerImage')
    image1.src= imgsrc;
    cardDiv1.appendChild(image1);
    return cardDiv1;
}

function getHomeContent(){
    
    let mainDiv = document.createElement('div');
    mainDiv.classList.add("mainDiv");
    
    let header= document.createElement('h1');
    header.innerHTML= "Eashan's JS Profile";
    
    let cardDiv1 = createCard(_tajmahal_jpg__WEBPACK_IMPORTED_MODULE_0__, "This is the best place I've ever been to", "Taj Mahal")
    let cardDiv2 = createCard(_eiffel_tower_jpg__WEBPACK_IMPORTED_MODULE_1__, "This is the best place I've ever been to", "Eiffel Tower")
    
    let bannerDiv = makeBanner(_js_javascript_gif__WEBPACK_IMPORTED_MODULE_2__);

    let header2= document.createElement('h1');
    header2.innerHTML= "My projects";

    mainDiv.appendChild(header);
    mainDiv.appendChild(bannerDiv);
    mainDiv.appendChild(header2);
    mainDiv.appendChild(cardDiv1);
    mainDiv.appendChild(cardDiv2);
 
    return mainDiv;
}



/***/ }),

/***/ "./src/eiffel_tower.jpg":
/*!******************************!*\
  !*** ./src/eiffel_tower.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "502ccd9f875988fa83f0.jpg";

/***/ }),

/***/ "./src/js-javascript.gif":
/*!*******************************!*\
  !*** ./src/js-javascript.gif ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c26b56bf4b2def7b5a39.gif";

/***/ }),

/***/ "./src/tajmahal.jpg":
/*!**************************!*\
  !*** ./src/tajmahal.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a44fd2e6899817f70bea.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNPO0FBQ0g7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMENBQU07QUFDcEMsOEJBQThCLDhDQUFTO0FBQ3ZDO0FBQ0EsK0JBQStCLCtDQUFLOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrcmVzdGF1cmFudC0vLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFqTG9jIGZyb20gJy4vdGFqbWFoYWwuanBnJ1xuaW1wb3J0IGVpZmZlbExvYyBmcm9tICcuL2VpZmZlbF90b3dlci5qcGcnXG5pbXBvcnQganNMb2MgZnJvbSAnLi9qcy1qYXZhc2NyaXB0LmdpZidcblxuZnVuY3Rpb24gY3JlYXRlQ2FyZChpbWdzcmMsIGNvbnRlbnQsIGhlYWQpe1xuICAgIGxldCBjYXJkRGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREaXYxLmNsYXNzTGlzdC5hZGQoXCJjYXJkRGl2XCIpO1xuICAgIGxldCBjYXJkSGVhZGVyMT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjYXJkSGVhZGVyMS5pbm5lckhUTUw9IGhlYWRcbiAgICBsZXQgaW1hZ2UxPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZTEuY2xhc3NMaXN0LmFkZCgnY2FyZEltYWdlJylcbiAgICBpbWFnZTEuc3JjPSBpbWdzcmM7XG4gICAgbGV0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAxLmlubmVySFRNTD0gY29udGVudFxuXG5jYXJkRGl2MS5hcHBlbmRDaGlsZChjYXJkSGVhZGVyMSlcbmNhcmREaXYxLmFwcGVuZENoaWxkKHAxKTtcbmNhcmREaXYxLmFwcGVuZENoaWxkKGltYWdlMSk7XG5yZXR1cm4gY2FyZERpdjE7XG59XG5cbmZ1bmN0aW9uIG1ha2VCYW5uZXIoaW1nc3JjKXtcbiAgICBsZXQgY2FyZERpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkRGl2MS5jbGFzc0xpc3QuYWRkKFwiYmFubmVyRGl2XCIpO1xuICAgIGxldCBpbWFnZTE9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlMS5jbGFzc0xpc3QuYWRkKCdiYW5uZXJJbWFnZScpXG4gICAgaW1hZ2UxLnNyYz0gaW1nc3JjO1xuICAgIGNhcmREaXYxLmFwcGVuZENoaWxkKGltYWdlMSk7XG4gICAgcmV0dXJuIGNhcmREaXYxO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRIb21lQ29udGVudCgpe1xuICAgIFxuICAgIGxldCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwibWFpbkRpdlwiKTtcbiAgICBcbiAgICBsZXQgaGVhZGVyPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci5pbm5lckhUTUw9IFwiRWFzaGFuJ3MgSlMgUHJvZmlsZVwiO1xuICAgIFxuICAgIGxldCBjYXJkRGl2MSA9IGNyZWF0ZUNhcmQoVGFqTG9jLCBcIlRoaXMgaXMgdGhlIGJlc3QgcGxhY2UgSSd2ZSBldmVyIGJlZW4gdG9cIiwgXCJUYWogTWFoYWxcIilcbiAgICBsZXQgY2FyZERpdjIgPSBjcmVhdGVDYXJkKGVpZmZlbExvYywgXCJUaGlzIGlzIHRoZSBiZXN0IHBsYWNlIEkndmUgZXZlciBiZWVuIHRvXCIsIFwiRWlmZmVsIFRvd2VyXCIpXG4gICAgXG4gICAgbGV0IGJhbm5lckRpdiA9IG1ha2VCYW5uZXIoanNMb2MpO1xuXG4gICAgbGV0IGhlYWRlcjI9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGVyMi5pbm5lckhUTUw9IFwiTXkgcHJvamVjdHNcIjtcblxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGJhbm5lckRpdik7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChoZWFkZXIyKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGNhcmREaXYxKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGNhcmREaXYyKTtcbiBcbiAgICByZXR1cm4gbWFpbkRpdjtcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9