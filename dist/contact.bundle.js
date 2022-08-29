"use strict";
(self["webpackChunkwebpackrestaurant_"] = self["webpackChunkwebpackrestaurant_"] || []).push([["contact"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getContactContent)
/* harmony export */ });
/* harmony import */ var _email_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.png */ "./src/email.png");
/* harmony import */ var _instagram_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instagram.png */ "./src/instagram.png");
/* harmony import */ var _phone_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phone.png */ "./src/phone.png");
/* harmony import */ var _github_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./github.png */ "./src/github.png");
/* harmony import */ var _silverware_variant_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./silverware-variant.png */ "./src/silverware-variant.png");






function createCard(imgsrc, content, head){
    let cardDiv1 = document.createElement('div');
    cardDiv1.classList.add("cardDiv");
    cardDiv1.classList.add("contact");
    let cardHeader1= document.createElement('h2');
    cardHeader1.innerHTML= head
    cardHeader1.classList.add("contactHeader")
    let image1= new Image();
    image1.classList.add('contactImage')
    image1.src= imgsrc;
    if (head=="Instagram"){
        let p1 = document.createElement('a');
        p1.classList.add("contactP");
        p1.innerHTML= content;
        p1.href= "https://www.instagram.com/eashangoel/";
        cardDiv1.appendChild(p1);
    } else 
    if (head=="GitHub"){
        let p1 = document.createElement('a');
        p1.classList.add("contactP");
        p1.innerHTML= content;
        p1.href= "https://github.com/eashangoel";
        cardDiv1.appendChild(p1);
    } else 
    if (head =="T.R.O.T"){
        let p1 = document.createElement('a');
        p1.classList.add("contactP");
        p1.innerHTML= content;
        p1.href= "https://www.instagram.com/the_republic_of_taste/?hl=en";
        cardDiv1.appendChild(p1);
    }
    else{
    let p1 = document.createElement('p');
    p1.classList.add("contactP");
    p1.innerHTML= content;
    cardDiv1.appendChild(p1);
}

cardDiv1.appendChild(cardHeader1)
cardDiv1.appendChild(image1);
return cardDiv1;
}

function getContactContent(){
    
    let mainDiv = document.createElement('div');
    mainDiv.classList.add("mainDiv");
    mainDiv.classList.add("contact");
    
    let header= document.createElement('h1');
    header.innerHTML= "Eashan's Contact Info";
    
    let cardDiv1 = createCard(_email_png__WEBPACK_IMPORTED_MODULE_0__, "eashan2@gmail.com", "E-mail")
    let cardDiv2 = createCard(_instagram_png__WEBPACK_IMPORTED_MODULE_1__, "@eashangoel", "Instagram")
    let cardDiv3 = createCard(_phone_png__WEBPACK_IMPORTED_MODULE_2__, "(+91) 9632 969989", "Phone")
    let cardDiv4 = createCard(_github_png__WEBPACK_IMPORTED_MODULE_3__, "Link to GitHub!", "GitHub")
    let cardDiv5 = createCard(_silverware_variant_png__WEBPACK_IMPORTED_MODULE_4__, "Link to my food page!", "T.R.O.T")

    mainDiv.appendChild(header);
    mainDiv.appendChild(cardDiv1);
    mainDiv.appendChild(cardDiv2);
    mainDiv.appendChild(cardDiv3);
    mainDiv.appendChild(cardDiv4);
    mainDiv.appendChild(cardDiv5);
    return mainDiv;
}



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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ0k7QUFDSjtBQUNFO0FBQ1k7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsdUNBQVE7QUFDdEMsOEJBQThCLDJDQUFRO0FBQ3RDLDhCQUE4Qix1Q0FBUTtBQUN0Qyw4QkFBOEIsd0NBQVM7QUFDdkMsOEJBQThCLG9EQUFTOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja3Jlc3RhdXJhbnQtLy4vc3JjL2NvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVtYWlsTG9jIGZyb20gJy4vZW1haWwucG5nJ1xuaW1wb3J0IGluc3RhTG9jIGZyb20gJy4vaW5zdGFncmFtLnBuZydcbmltcG9ydCBwaG9uZUxvYyBmcm9tICcuL3Bob25lLnBuZydcbmltcG9ydCBnaXRodWJMb2MgZnJvbSAnLi9naXRodWIucG5nJ1xuaW1wb3J0IHNpbHZlckxvYyBmcm9tICcuL3NpbHZlcndhcmUtdmFyaWFudC5wbmcnXG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoaW1nc3JjLCBjb250ZW50LCBoZWFkKXtcbiAgICBsZXQgY2FyZERpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkRGl2MS5jbGFzc0xpc3QuYWRkKFwiY2FyZERpdlwiKTtcbiAgICBjYXJkRGl2MS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcbiAgICBsZXQgY2FyZEhlYWRlcjE9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY2FyZEhlYWRlcjEuaW5uZXJIVE1MPSBoZWFkXG4gICAgY2FyZEhlYWRlcjEuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RIZWFkZXJcIilcbiAgICBsZXQgaW1hZ2UxPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZTEuY2xhc3NMaXN0LmFkZCgnY29udGFjdEltYWdlJylcbiAgICBpbWFnZTEuc3JjPSBpbWdzcmM7XG4gICAgaWYgKGhlYWQ9PVwiSW5zdGFncmFtXCIpe1xuICAgICAgICBsZXQgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIHAxLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0UFwiKTtcbiAgICAgICAgcDEuaW5uZXJIVE1MPSBjb250ZW50O1xuICAgICAgICBwMS5ocmVmPSBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZWFzaGFuZ29lbC9cIjtcbiAgICAgICAgY2FyZERpdjEuYXBwZW5kQ2hpbGQocDEpO1xuICAgIH0gZWxzZSBcbiAgICBpZiAoaGVhZD09XCJHaXRIdWJcIil7XG4gICAgICAgIGxldCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgcDEuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RQXCIpO1xuICAgICAgICBwMS5pbm5lckhUTUw9IGNvbnRlbnQ7XG4gICAgICAgIHAxLmhyZWY9IFwiaHR0cHM6Ly9naXRodWIuY29tL2Vhc2hhbmdvZWxcIjtcbiAgICAgICAgY2FyZERpdjEuYXBwZW5kQ2hpbGQocDEpO1xuICAgIH0gZWxzZSBcbiAgICBpZiAoaGVhZCA9PVwiVC5SLk8uVFwiKXtcbiAgICAgICAgbGV0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBwMS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFBcIik7XG4gICAgICAgIHAxLmlubmVySFRNTD0gY29udGVudDtcbiAgICAgICAgcDEuaHJlZj0gXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3RoZV9yZXB1YmxpY19vZl90YXN0ZS8/aGw9ZW5cIjtcbiAgICAgICAgY2FyZERpdjEuYXBwZW5kQ2hpbGQocDEpO1xuICAgIH1cbiAgICBlbHNle1xuICAgIGxldCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFBcIik7XG4gICAgcDEuaW5uZXJIVE1MPSBjb250ZW50O1xuICAgIGNhcmREaXYxLmFwcGVuZENoaWxkKHAxKTtcbn1cblxuY2FyZERpdjEuYXBwZW5kQ2hpbGQoY2FyZEhlYWRlcjEpXG5jYXJkRGl2MS5hcHBlbmRDaGlsZChpbWFnZTEpO1xucmV0dXJuIGNhcmREaXYxO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb250YWN0Q29udGVudCgpe1xuICAgIFxuICAgIGxldCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwibWFpbkRpdlwiKTtcbiAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICAgIFxuICAgIGxldCBoZWFkZXI9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGVyLmlubmVySFRNTD0gXCJFYXNoYW4ncyBDb250YWN0IEluZm9cIjtcbiAgICBcbiAgICBsZXQgY2FyZERpdjEgPSBjcmVhdGVDYXJkKGVtYWlsTG9jLCBcImVhc2hhbjJAZ21haWwuY29tXCIsIFwiRS1tYWlsXCIpXG4gICAgbGV0IGNhcmREaXYyID0gY3JlYXRlQ2FyZChpbnN0YUxvYywgXCJAZWFzaGFuZ29lbFwiLCBcIkluc3RhZ3JhbVwiKVxuICAgIGxldCBjYXJkRGl2MyA9IGNyZWF0ZUNhcmQocGhvbmVMb2MsIFwiKCs5MSkgOTYzMiA5Njk5ODlcIiwgXCJQaG9uZVwiKVxuICAgIGxldCBjYXJkRGl2NCA9IGNyZWF0ZUNhcmQoZ2l0aHViTG9jLCBcIkxpbmsgdG8gR2l0SHViIVwiLCBcIkdpdEh1YlwiKVxuICAgIGxldCBjYXJkRGl2NSA9IGNyZWF0ZUNhcmQoc2lsdmVyTG9jLCBcIkxpbmsgdG8gbXkgZm9vZCBwYWdlIVwiLCBcIlQuUi5PLlRcIilcblxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGNhcmREaXYxKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGNhcmREaXYyKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGNhcmREaXYzKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGNhcmREaXY0KTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGNhcmREaXY1KTtcbiAgICByZXR1cm4gbWFpbkRpdjtcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9