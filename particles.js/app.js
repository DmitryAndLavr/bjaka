particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 100,
		"random": true,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#FF0000", //random // #FFFFFF
      },
      "shape": {
        "type": "circle", // circle edge triangle polygon star 
        "stroke": {
          "width": 10,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 50
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 5,
          "opacity_min": 0,
          "sync": true
        }
      },
      "size": {
        "value": 70,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 40,
          "size_min": 0.1,
          "sync": true
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 200,
        "color": "#000000",
        "opacity": 0.8,
        "width": 3
      },
      "move": {
        "enable": true,
        "speed": 500,
        "direction": "none", // none top top-right right bottom-right bottom bottom-left left top-left
        "random": true,
        "straight": true,
        "out_mode": "bounce", // out bounce
        "attract": {
          "enable": true,
          "rotateX": 3000,
          "rotateY": 2000
        }
      }
    },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" //grab bubble repulse
      },
      "onclick": {
        "enable": true,
        "mode": "push" // push remove bubble repulse
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 1000,
        "line_linked": {
          "opacity": 0.1
        }
      },
      "bubble": {
        "distance": 10,
        "size": 10,
        "duration": 0.3,
        "opacity": 1,
        "speed": 30
      },
      "repulse": {
        "distance": 10,
        "duration": 0.4
      },
      "push": {
		 "particles_nb": 10
      },
      "remove": {
        "particles_nb": 2
      }
    }
  }
  }

);