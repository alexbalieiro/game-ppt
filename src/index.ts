import { initRouter } from "./router";
import "./components/text";
import "./components/button";
import "./components/counter";
import "./components/hand";
import "./components/star";
(function () {
  const root = document.querySelector(".root");
  initRouter(root);
})();
