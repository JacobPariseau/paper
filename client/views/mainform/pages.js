(function () {
  'use strict';

  function pages() {
    return [
      {
        "index": 0,
        "questions": [
          {
            "id": "company",
            "text": "What company do you work for?",
            "short": "Company Name",
            "samples": [
              {
                "name": "Purnell Energy Services",
                "initial": "P",
                "color": "green"
              },
              {
                "name": "Reed Energy Services",
                "initial": "R",
                "color": "red"
              }
            ]
          }
        ]
      },
      {
        "index": 1,
        "questions": [
          {
            "id": "location",
            "text": "What location are you on?",
            "short": "Land Location"
          }
        ]
      },
      {
        "index": 2,
        "questions": [
          {
            "id": "supervisor",
            "text": "Who is the supervisor on site?",
            "short": "Name of Supervisor"
          }
        ]
      }
    ];
  }

  module.exports = pages;
})();
