jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  // Java/JEE Chart
  var doughnutData = [{
      value: 75,
      color: "#1abc9c"
    },
    {
      value: 25,
      color: "#ecf0f1"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("javajee").getContext("2d")).Doughnut(doughnutData);

  // SpringBoot/Cloud Chart
  var doughnutData = [{
    value: 70,
    color: "#1abc9c"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("spring").getContext("2d")).Doughnut(doughnutData);

  // Microservices Chart
  var doughnutData = [{
    value: 80,
    color: "#1abc9c"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("services").getContext("2d")).Doughnut(doughnutData);

  // build automation Chart
  var doughnutData = [{
    value: 70,
    color: "#1abc9c"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("buildautomation").getContext("2d")).Doughnut(doughnutData);

  // Docker Chart
  var doughnutData = [{
    value: 70,
    color: "#1abc9c"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("docker").getContext("2d")).Doughnut(doughnutData);

  // Golang/devops Chart
  var doughnutData = [{
    value: 40,
    color: "#1abc9c"
  },
  {
    value: 60,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("golang").getContext("2d")).Doughnut(doughnutData);
});
