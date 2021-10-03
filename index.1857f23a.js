function e(e,n,t,a){Object.defineProperty(e,n,{get:t,set:a,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=n.parcelRequire3877;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){a[e]=n},n.parcelRequire3877=o),o.register("7PhYn",(function(n,t){var a,o;e(n.exports,"resolve",(()=>o),(e=>o=e)),e(n.exports,"register",(()=>a),(e=>a=e));var i={};a=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},o=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),o("7PhYn").register(JSON.parse('{"di8mO":"index.1857f23a.js","407lu":"piedra.60203d08.png","cQkp1":"papel.9f7b03c8.png","gtmBI":"tijera.cad77ea3.png","9Z7hL":"piedraBig.5573ec81.png","lqsut":"papelBig.30e8ddc1.png","9zicO":"tijeraBig.b3aaae29.png","aFWno":"piedraXL.b88e8086.png","320hT":"papelXL.7761b17d.png","9r63s":"tijeraXL.7fa25bad.png","lGcVV":"winner.cc6da413.png","dwHDh":"loser.54529481.png","5pYpA":"empate.368a7e85.png"}'));const i={data:{currentGame:{computerPlay:"",myPlay:""},history:JSON.parse(localStorage.getItem("saved-state"))||[]},listeners:[],getState(){return this.data},setMove(e){const n=this.getState();return n.currentGame.myPlay=e,n.currentGame.computerPlay=this.computerMove(),n.currentGame},computerMove:()=>["piedra","papel","tijera"][Math.floor(3*Math.random())],pushToHistory(e){this.data.history.push(e),localStorage.setItem("saved-state",JSON.stringify(this.data.history))},whoWin(e,n){let t="";return e==n?t="empate":"piedra"==e?t="tijera"==n?"ganaste":"perdiste":"papel"==e?t="piedra"==n?"ganaste":"perdiste":"tijera"==e&&(t="papel"==n?"ganaste":"perdiste"),t},score(){const e=this.getState().history,n={score:{computerPlay:0,myPlay:0}};for(const t of e){const e=this.whoWin(t.myPlay,t.computerPlay);"ganaste"==e?n.score.myPlay++:"perdiste"==e&&n.score.computerPlay++}return n}};function s(e,n,t){e.addEventListener("finish",(e=>{const a=i.getState().currentGame,o=a.myPlay,s=a.computerPlay;if(e.detail.finish&&""==o)n.goTo("/instructions");else{!function(e,n){const t=document.createElement("style");e.innerHTML=`\n        <div class="container">\n          <custom-hand class="rotar" type="${n.computerPlay}" size="XL"></custom-hand>\n          <custom-hand type="${n.myPlay}" size="XL"> </custom-hand>\n        </div>\n      `,t.innerHTML="\n        .container{\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          height: 100vh;\n          gap: 130px;\n        }\n        .rotar{\n          transform: rotate(-180deg);\n        }\n        @media (min-width: 951px) {\n          .container{\n            gap: 350px;\n          }\n      ",e.appendChild(t)}(t,{myPlay:o,computerPlay:s}),setTimeout((()=>{n.goTo("/result")}),2e3)}}))}const r=[{path:/\/game/,component:function(e){const n=document.createElement("div"),t=document.createElement("style");return n.className="page-a",n.innerHTML='\n    <custom-text variant="titulo">Piedra Papel o Tijera</custom-text>\n    <custom-button class="start-button">Empezar</custom-button>\n    <div class="container">\n      <custom-hand type="tijera"></custom-hand>\n      <custom-hand type="piedra"></custom-hand>\n      <custom-hand type="papel"></custom-hand>\n    </div>\n  ',t.innerHTML="\n    .page-a {\n      padding: 115px 26px 0px 27px;\n      margin: 0 auto;\n      max-width: 375px;\n      display: flex;\n      flex-direction: column;\n      gap: 70px;\n    }\n    .container{\n      display:flex;\n      justify-content: space-around;\n      align-items: flex-end;\n    }\n    @media (min-width: 951px) {\n      .page-a {\n        gap: 150px;\n        height: 100vh;\n        justify-content: flex-end;\n      }\n  ",n.appendChild(t),n.querySelector(".start-button").addEventListener("click",(()=>{e.goTo("/instructions")})),n}},{path:/\/instructions/,component:function(e){const n=document.createElement("div"),t=document.createElement("style");return n.className="page-b",n.innerHTML='\n  <custom-text variant="body">\n    Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.\n  </custom-text>\n  <custom-button class="play-button">¡Jugar!</custom-button>\n  <div class="container">\n    <custom-hand type="tijera"></custom-hand>\n    <custom-hand type="piedra"></custom-hand>\n    <custom-hand type="papel"></custom-hand>\n  </div>\n  ',t.innerHTML="\n  .page-b {\n    padding: 80px 26px 0px 27px;\n    margin: 0 auto;\n    max-width: 375px;\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n  }\n  .container{\n    display:flex;\n    justify-content: space-around;\n    align-items: flex-end;\n  }\n  @media (min-width: 951px) {\n    .page-b {\n      gap: 150px;\n      height: 100vh;\n      justify-content: flex-end;\n    }\n  }\n  ",n.appendChild(t),n.querySelector(".play-button").addEventListener("click",(()=>{e.goTo("/play")})),n}},{path:/\/play/,component:function(e){const n=document.createElement("div"),t=document.createElement("style");n.className="page-c",n.innerHTML='\n  <custom-counter></custom-counter>\n  <div class="container">\n  <custom-hand type="tijera" size="big"></custom-hand>\n  <custom-hand type="piedra" size="big"></custom-hand>\n  <custom-hand type="papel" size="big"></custom-hand>\n  </div>\n  ',t.innerHTML="\n  .page-c {\n    padding: 125px 5px 0 5px;\n    margin: 0 auto;\n    max-width: 375px;\n    display: flex;\n    flex-direction: column;\n  }\n  .container{\n      display:flex;\n      justify-content: space-between;\n      height: 310px;\n      align-items: flex-end;\n  }\n  @media (min-width: 951px) {\n    .page-c {\n      gap: 150px;\n      height: 100vh;\n      justify-content: flex-center;\n    }\n  ";const a=n.querySelectorAll("custom-hand"),o=n.getElementsByTagName("custom-counter")[0];for(const e of a)e.addEventListener("change",(n=>{const t=n.detail.jugada;e.style.alignSelf="center";const a=i.setMove(t);i.pushToHistory({...a})}));return s(o,e,n),n.appendChild(t),n}},{path:/\/result/,component:function(e){const n=document.createElement("div"),t=document.createElement("style"),a=function(){const e=i.getState().currentGame,n=i.score();return{maquina:n.score.computerPlay,you:n.score.myPlay,win:i.whoWin(e.myPlay,e.computerPlay)}}();return n.className="page-d",n.innerHTML=`\n  <div class="container">\n  <custom-star class="star" type="${a.win}"></custom-star>\n  <div class="score-container">\n    <custom-text variant="body">Score</custom-text>\n    <custom-text variant="right" style="text-align: right">Vos: ${a.you}</custom-text>\n    <custom-text variant="right" style="text-align: right">Maquina ${a.maquina}</custom-text>\n  </div>\n  <custom-button class="button-return">Volver a Jugar</custom-button>\n  <div>\n  `,t.innerHTML=`\n  .page-d{\n    background-color: ${"ganaste"==a.win?"rgba(136, 137, 73, 0.9)":"rgba(137, 73, 73, 0.9)"};\n    margin:0 auto;\n    max-width: 400px;\n    height: 100vh;\n  }\n  .container{\n    display:flex;\n    flex-direction: column;\n    margin: 0 auto;\n    max-width: 360px;\n    padding-top: 25px;\n    gap:20px;\n  }\n  @media (min-width: 951px) {\n    .container{\n      gap:50px;\n      padding-top: 80px;\n    }\n  }\n  .score-container{\n    width: 259px;\n    border: 10px solid #000000;\n    border-radius: 10px;\n    background-color: #FFFFFF;\n    padding: 15px 30px;\n    margin: 0 auto ;\n  }\n  .star{\n    margin: 0 auto;\n  }\n`,n.appendChild(t),n.querySelector(".button-return").addEventListener("click",(()=>{e.goTo("/instructions")})),n}}];customElements.define("custom-text",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=this.getAttribute("variant")||"body;",n=document.createElement("div"),t=document.createElement("style");t.innerHTML="\n        .titulo{\n          font-family: \"Gluten\";\n          font-size: 78px;\n          color: #009048;\n          margin: 0;\n        }\n        .right{\n          font-family: 'Odibee Sans', cursive;;\n          font-size: 55px;\n          text-align: right;\n        }\n        .body{\n          font-family: 'Odibee Sans', cursive;;\n          font-size: 55px;\n          text-align: center;\n        }\n        ",n.className=e,n.innerHTML=this.textContent,this.shadow.appendChild(n),this.shadow.appendChild(t)}}),customElements.define("custom-button",class extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){const e=this.attachShadow({mode:"open"}),n=document.createElement("button");n.textContent=this.textContent;const t=document.createElement("style");t.innerHTML="\n          button{\n            width: 100%;\n            height: 87px;\n            color: white;\n            background-color: #006CFC;\n            border: 10px solid #001997;\n            border-radius: 10px;\n            font-family: 'Odibee Sans', cursive;\n            font-size: 45px;\n          }\n        ",e.appendChild(n),e.appendChild(t)}}),customElements.define("custom-counter",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}counter(e){let n=3;const t=setInterval((()=>{if(n--,e.textContent=n.toString(),n<0){const e=new CustomEvent("finish",{detail:{finish:n}});clearInterval(t),this.dispatchEvent(e)}}),1e3)}render(){const e=document.createElement("style");this.shadow.innerHTML='\n      <div class="container">\n        <div class="circulo"">\n          <div class="number">3</div>\n        </div>\n      </div>\n      ',e.innerHTML="\n      .container{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      .circulo {\n        width: 200px;\n        height: 200px;\n        border: 23px solid #000000;\n        border-radius: 50%;\n        display:flex;\n        justify-content: center;\n        align-items: center;\n      }\n      .number{\n        font-family: 'Odibee Sans', cursive;\n        font-size: 150px;\n        font-weight: bold;\n      }\n      ";const n=this.shadow.querySelector(".number");this.counter(n),this.shadow.appendChild(e)}});var c;o.register("kVZsc",(function(n,t){var a;e(n.exports,"getBundleURL",(()=>a),(e=>a=e));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(e){var n=o[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=n),n}})),c=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("407lu");var d;d=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("cQkp1");var l;l=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("gtmBI");var u;u=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("9Z7hL");var p;p=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("lqsut");var m;m=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("9zicO");var h;h=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("aFWno");var g;g=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("320hT");var f;f=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("9r63s"),customElements.define("custom-hand",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=document.createElement("img"),n=document.createElement("style"),t=this.getAttribute("type"),a=this.getAttribute("size");"tijera"==t?e.src="big"==a?m:"XL"==a?f:l:"piedra"==t?e.src="big"==a?u:"XL"==a?h:c:"papel"==t&&(e.src="big"==a?p:"XL"==a?g:d),n.innerHTML="\n      .flotar{\n        display:flex;\n      }\n      ",e.className=t,this.shadow.appendChild(e),this.shadow.appendChild(n),this.addListeners()}addListeners(){this.shadow.addEventListener("click",(e=>{const n=e.target.className,t=new CustomEvent("change",{detail:{jugada:n}});this.dispatchEvent(t)}))}});var y;y=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("lGcVV");var x;x=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("dwHDh");var v;v=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("5pYpA"),customElements.define("custom-star",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const e=document.createElement("style"),n=document.createElement("img"),t=this.getAttribute("type");n.src="ganaste"==t?y:"perdiste"==t?x:v,e.innerHTML="\n        ",n.className=t,this.shadow.appendChild(n),this.shadow.appendChild(e)}}),function(e){function n(e){history.pushState({},"",e),t(e)}function t(t){for(const a of r)if(a.path.test(t)){const t=a.component({goTo:n});e.firstChild&&e.firstChild.remove(),e.appendChild(t)}}"/"==location.pathname?n("/game-ptt"):t(location.pathname),window.onpopstate=function(){t(location.pathname)}}(document.querySelector(".root"));
//# sourceMappingURL=index.1857f23a.js.map
