var atServices = false;
var atPlanet = 0;

function addListener(){
    const rocket = document.getElementById("UserRocket");
    const arrow = document.getElementById("toServices");
    rocket.style.top = "45vh";
    rocket.style.left = "47vw";
    window.addEventListener('keydown', (event) => 
    {
        calcDistance();
        if(rocket.style.top == "100vh"){
            if(atServices){
                location.href = "#title";
                atServices = false;
                arrow.style.transform = "rotate(0deg)";
            }else{
                location.href = "#services";
                atServices = true;
                arrow.style.transform = "rotate(180deg)";
            }
            rocket.focus();
        }
        if((event.key == 'ArrowUp') || (event.key == 'w')){
            newVal = parseInt(rocket.style.top) - 1;
            rocket.style.top =  newVal + "vh";
            rocket.style.transform = "rotate(0deg)";
            rocket.src = "images/rocketMove.png";
        }else{
            if((event.key == 'ArrowDown') || (event.key == 's')){
                newVal = parseInt(rocket.style.top) + 1;
                rocket.style.top = newVal + "vh";
                rocket.style.transform = "rotate(180deg)";
                rocket.src = "images/rocketMove.png";
            }else{
                if((event.key == 'ArrowLeft') || (event.key == 'a')){
                    newVal = parseInt(rocket.style.left) - 1;
                    rocket.style.left = newVal + "vw";
                    rocket.style.transform = "rotate(270deg)";
                    rocket.src = "images/rocketMove.png";
                }else{
                    if((event.key == 'ArrowRight') || (event.key == 'd')){
                        newVal = parseInt(rocket.style.left) + 1;
                        rocket.style.left = newVal + "vw";
                        rocket.style.transform = "rotate(90deg)";
                        rocket.src = "images/rocketMove.png";
                    }
                }
            }
        }

    })

    window.addEventListener('keyup', (event) => 
    {
        if((event.key == 'ArrowUp') || (event.key == 'w')){
            rocket.src = "images/rocketStill.png";
        }else{
            if((event.key == 'ArrowDown') || (event.key == 's')){
                rocket.src = "images/rocketStill.png";
            }else{
                if((event.key == 'ArrowLeft') || (event.key == 'a')){
                    rocket.src = "images/rocketStill.png";
                }else{
                    if((event.key == 'ArrowRight') || (event.key == 'd')){
                        rocket.src = "images/rocketStill.png";
                    }
                }
            }
        }

    })
}

function calcDistance(){
    rocketPos = document.getElementById("UserRocket").getBoundingClientRect();
    planet1 = document.getElementById("brownImg");
    planet2 = document.getElementById("earthImg");
    planet3 = document.getElementById("greenImg");
    planet4 = document.getElementById("moonImg");
    planet5 = document.getElementById("orangeImg");
    planet6 = document.getElementById("purpleImg");
    planet7 = document.getElementById("redImg");
    planet8 = document.getElementById("brownstripesImg");
    planet9 = document.getElementById("waterImg");
    planet10 = document.getElementById("whiteImg");

    planet1Pos = document.getElementById("brownPlanet").getBoundingClientRect();
    planet2Pos = document.getElementById("earthPlanet").getBoundingClientRect();
    planet3Pos = document.getElementById("greenPlanet").getBoundingClientRect();
    planet4Pos = document.getElementById("moonPlanet").getBoundingClientRect();
    planet5Pos = document.getElementById("orangePlanet").getBoundingClientRect();
    planet6Pos = document.getElementById("purpleImg").getBoundingClientRect();
    planet7Pos = document.getElementById("redPlanet").getBoundingClientRect();
    planet8Pos = document.getElementById("brownstripesPlanet").getBoundingClientRect();
    planet9Pos = document.getElementById("waterPlanet").getBoundingClientRect();
    planet10Pos = document.getElementById("whitePlanet").getBoundingClientRect();

    if(((rocketPos.left - planet1Pos.left < 80) && (rocketPos.left - planet1Pos.left > -80)) && ((rocketPos.top - planet1Pos.top < 80) && (rocketPos.top - planet1Pos.top > -80))){
        overPlanet(planet1);
        atPlanet = 1;
    }else{
        if(atPlanet == 1){
            leavePlanet(planet1);
            atPlanet = 0;
        }  
    }

    if(((rocketPos.left - planet2Pos.left < 80) && (rocketPos.left - planet2Pos.left > -80)) && ((rocketPos.top - planet2Pos.top < 80) && (rocketPos.top - planet2Pos.top > -80))){
        overPlanet(planet2);
        atPlanet = 2;
    }else{
        if(atPlanet == 2){
            leavePlanet(planet2);
            atPlanet = 0;
        }  
    }

    if(((rocketPos.left - planet3Pos.left < 80) && (rocketPos.left - planet3Pos.left > -80)) && ((rocketPos.top - planet3Pos.top < 80) && (rocketPos.top - planet3Pos.top > -80))){
        overPlanet(planet3);
        atPlanet = 3;
    }else{
        if(atPlanet == 3){
            leavePlanet(planet3);
            atPlanet = 0;
        }  
    }

    if(((rocketPos.left - planet4Pos.left < 80) && (rocketPos.left - planet4Pos.left > -80)) && ((rocketPos.top - planet4Pos.top < 80) && (rocketPos.top - planet4Pos.top > -80))){
        overPlanet(planet4);
        atPlanet = 4;
    }else{
        if(atPlanet == 4){
            leavePlanet(planet4);
            atPlanet = 0;
        }  
    }

    if(((rocketPos.left - planet5Pos.left < 80) && (rocketPos.left - planet5Pos.left > -80)) && ((rocketPos.top - planet5Pos.top < 80) && (rocketPos.top - planet5Pos.top > -80))){
        overPlanet(planet5);
        atPlanet = 5;
    }else{
        if(atPlanet == 5){
            leavePlanet(planet5);
            atPlanet = 0;
        }  
    }

    if(((rocketPos.left - planet6Pos.left < 80) && (rocketPos.left - planet6Pos.left > -80)) && ((rocketPos.top - planet6Pos.top < 80) && (rocketPos.top - planet6Pos.top > -80))){
        overPlanet6(planet6);
        atPlanet = 6;
    }else{
        if(atPlanet == 6){
            leavePlanet6(planet6);
            atPlanet = 0;
        }  
    }

    if(((rocketPos.left - planet7Pos.left < 80) && (rocketPos.left - planet7Pos.left > -80)) && ((rocketPos.top - planet7Pos.top < 80) && (rocketPos.top - planet7Pos.top > -80))){
        overPlanet(planet7);
        atPlanet = 7;
    }else{
        if(atPlanet == 7){
            leavePlanet(planet7);
            atPlanet = 0;
        }  
    }

    if(((rocketPos.left - planet8Pos.left < 80) && (rocketPos.left - planet8Pos.left > -80)) && ((rocketPos.top - planet8Pos.top < 80) && (rocketPos.top - planet8Pos.top > -80))){
        overPlanet(planet8);
        atPlanet = 8;
    }else{
        if(atPlanet == 8){
            leavePlanet(planet8);
            atPlanet = 0;
        }  
    }

    if(((rocketPos.left - planet9Pos.left < 80) && (rocketPos.left - planet9Pos.left > -80)) && ((rocketPos.top - planet9Pos.top < 80) && (rocketPos.top - planet9Pos.top > -80))){
        overPlanet(planet9);
        atPlanet = 9;
    }else{
        if(atPlanet == 9){
            leavePlanet(planet9);
            atPlanet = 0;
        }  
    }

    if(((rocketPos.left - planet10Pos.left < 80) && (rocketPos.left - planet10Pos.left > -80)) && ((rocketPos.top - planet10Pos.top < 80) && (rocketPos.top - planet10Pos.top > -80))){
        overPlanet(planet10);
        atPlanet = 10;
    }else{
        if(atPlanet == 10){
            leavePlanet(planet10);
            atPlanet = 0;
        }  
    }
}

function overPlanet(planet){
    planet.style.width = "8vw"; 
}

function leavePlanet(planet){
    planet.style.width = "7vw";
}

function overPlanet6(planet){
    planet.style.width = "9.5vw"; 
}

function leavePlanet6(planet){
    planet.style.width = "8.5vw";
}
