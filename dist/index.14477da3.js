const e={containerEl:document.querySelector("body"),openModal:document.querySelector(".js-button"),closeModalBtn:document.querySelector(".js-close-modal"),backdrop2:document.querySelector(".js-backdrop-2")};function o(){e.backdrop2.classList.add("is-hidden-2"),window.removeEventListener("keydown",t),document.body.classList.remove("show-modal")}function t(e){"Escape"===e.code&&o()}e.containerEl.addEventListener("click",function(o){console.log(o),o.target.classList.contains("js-button")&&(e.backdrop2.classList.remove("is-hidden-2"),window.addEventListener("keydown",t),document.body.classList.add("show-modal"))}),e.closeModalBtn.addEventListener("click",o),e.backdrop2.addEventListener("click",function(e){e.currentTarget===e.target&&o()});
//# sourceMappingURL=index.14477da3.js.map