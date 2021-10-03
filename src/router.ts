import { initPageA } from "./pages/welcome";
import { initPageB } from "./pages/instructions";
import { initPageC } from "./pages/play";
import { initPageD } from "./pages/result";
const routes = [
  {
    path: /\/game/,
    component: initPageA,
  },
  {
    path: /\/instructions/,
    component: initPageB,
  },
  {
    path: /\/play/,
    component: initPageC,
  },
  {
    path: /\/result/,
    component: initPageD,
  },
];
export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }
  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }
  if (location.pathname == "/") {
    goTo("/game-ptt");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
