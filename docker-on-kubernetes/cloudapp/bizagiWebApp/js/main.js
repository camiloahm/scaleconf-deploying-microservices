/**
 * Particles Plugin
 */
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 8
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.005,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 20,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 10,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

/**
 * File inputs controller
 */
(function () {
    var fileInput = document.getElementById("file");
    fileInput.addEventListener("change", function (e) {
        var inputValue = e.target.value;
        var fileName = (inputValue)? e.target.value.split( '\\' ).pop() : "Upload your CV";
        var fileTitleElement = document.getElementById("cv-label");

        fileTitleElement.innerHTML=fileName;
    });
})();

function getQueryString(url) {
    var params = {};
    url = url || window.location.href;
    var query = url.indexOf("?") > 0 ? url.substring(url.indexOf("?") + 1) : "";
    var pairs = query.split("&");
    for (var i = pairs.length - 1; i >= 0; i--) {
        var pos = pairs[i].indexOf('=');
        if (pos == -1)
            continue;
        var argname = pairs[i].substring(0, pos);
        var value = pairs[i].substring(pos + 1);
        params[argname] = unescape(value);
    }
    return params;
}

function checkStatus(){
    return;

    // TODO: Finish this function
    /*var qs = getQueryString();
    var actions= {
        "200":{
            message:""
        }
    };
    var message= "";
    var buttonDisplay = "";
    if(qs.status == 200){
        var mainSection = document.getElementsByClassName("main-section");
        var responseSection = document.getElementsByClassName("response-section");

        mainSection[0].style.visibility = "hidden";
        responseSection[0].style.visibility = "visible";

        message = "Thank you, all your data has been saved!";
        buttonDisplay = "Come Back!";
    }else{
        message = "Something went wrong, please check your information and try again";
        buttonDisplay = "Verify my information";
        window.history.back();
    }*/
}