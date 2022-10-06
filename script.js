function addListener(){
    const rocket = document.getElementById("UserRocket");
    rocket.style.top = "45vh";
    rocket.style.left = "47vw";
    window.addEventListener('keydown', (event) =>
    {
        console.log("key: " + event.key);
        if ((event.key == 'ArrowUp') || (event.key == 'w')){
            newVal = parseInt(rocket.style.top) - 1;
            rocket.style.top =  newVal + "vh";
            rocket.style.transform = "rotate(0deg)";
        }
        else if ((event.key == 'ArrowDown') || (event.key == 's')){
            newVal = parseInt(rocket.style.top) + 1;
            rocket.style.top = newVal + "vh";
            rocket.style.transform = "rotate(180deg)";
        }
        else if ((event.key == 'ArrowLeft') || (event.key == 'a')){
            newVal = parseInt(rocket.style.left) - 1;
            rocket.style.left = newVal + "vw";
            rocket.style.transform = "rotate(270deg)";
        }
        else if ((event.key == 'ArrowRight') || (event.key == 'd')){
            newVal = parseInt(rocket.style.left) + 1;
            rocket.style.left = newVal + "vw";
            rocket.style.transform = "rotate(90deg)";
        }
    });
}
