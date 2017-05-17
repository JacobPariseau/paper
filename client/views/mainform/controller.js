  (function () {
    'use strict';
    require('./style.scss');

    let pageNumber = 0;
    let buttonPrevious;
    let buttonNext;
    let fieldCompany;

    /** Select element by Class Name */
    function find(name, root) {
      root = root || document;
      return root.getElementsByClassName(name);
    }

    /** Activates on page navigation */
    function start() {
      buttonPrevious =  document.getElementById('page-previous');
      buttonNext = document.getElementById('page-next');

      buttonPrevious.addEventListener('click', () => { navigatePage(-1); });
      buttonNext.addEventListener('click', () => { navigatePage(1); });
      document.addEventListener('keydown', resolveKeypress);

      fieldCompany = document.getElementById('field-company');
      const samples = find('sample');
      if(samples.length > 0) {
        for(let i = 0; i < samples.length; i++) {
          const text = samples[i].innerText;
          samples[i].addEventListener('click', () => { fillField(fieldCompany, text);});
        }
      }
    }

    /** Fills a field with the given text */
    function fillField(field, text) {
      field.value = text;
    }
    
    /** Replaces display content with that of the next page */
    function navigatePage(delta) {
      const pageContainer = find('paper')[0];

      const currentPage = find('page-' + pageNumber, pageContainer)[0];
      if(currentPage) {
        if(delta > 0) {
          currentPage.classList.add("previous");
          currentPage.classList.remove("current");
        } else {
          currentPage.classList.add("next");
          currentPage.classList.remove("current");
        }
      }

      pageNumber = pageNumber + delta;
      const nextPage = find('page-' + pageNumber, pageContainer)[0];
      if(nextPage) {
        if(delta > 0) {
          nextPage.classList.add("current");
          nextPage.classList.remove("next");
        } else {
          nextPage.classList.add("current");
          nextPage.classList.remove("previous");
        }
      }

      if(pageNumber === 0) {
        document.getElementById('page-previous').classList.add('disabled');
      } else {
        document.getElementById('page-previous').classList.remove('disabled');
      }
    }

    /** Detects which key is pressed and responds to it */
    function resolveKeypress(e) {
      if (!e || !e.keyCode) {
        return;
      }

      if (e.keyCode === 13) {
        navigatePage(1);
        return;
      }
    }

    module.exports = {
      start: start
    };

  })();
