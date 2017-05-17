(function () {
  'use strict';
  const files = require('./files.js');

  const routes = {};

  function route(path, params) {
    routes[path] = {
      view: params.view,
      controller: params.controller,
      context: params.context
    };
  }

  route('/', {
    view: files.mainform.view,
    controller: files.mainform.controller,
    context: {
    }
  });

  function router() {
    const path = location.hash.slice(1) || '/';
    const route = routes[path];
    console.log(path);
    console.log(route);
    const controller = route.controller;
    console.log(route.context);
    document.body.innerHTML = route.view.call({}, route.context);
    controller.start();
  }

  document.addEventListener("DOMContentLoaded", router);
  window.addEventListener("hashchange", router, false);
})();
