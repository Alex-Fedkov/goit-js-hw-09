const t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]"),o=null;e.addEventListener("click",(()=>{e.setAttribute("disabled",!0),o=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.style.backgroundColor=e}),1e3)})),r.addEventListener("click",(()=>{clearInterval(o),e.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.b33dd4cc.js.map
