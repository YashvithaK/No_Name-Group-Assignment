var atServices = false;

function addListener(){
    const rocket = document.getElementById("UserRocket");
    const arrow = document.getElementById("toServices");
    rocket.style.top = "45vh";
    rocket.style.left = "47vw";
    window.addEventListener('keydown', (event) => 
    {
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
        console.log(rocket.getBoundingClientRect().y);
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
        console.log(event.key);
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
