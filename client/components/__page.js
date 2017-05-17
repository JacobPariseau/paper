(function () {
  'use strict';
  const thisPage = location.hash;
  function pageLoad() {
    const newPage = location.hash;
    if(thisPage !== newPage) {
      window.removeEventListener("hashchange", pageLoad, false);
      return;
    }
  }

  document.addEventListener("DOMContentLoaded", pageLoad);
  window.addEventListener("hashchange", pageLoad, false);
})();
