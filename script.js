var typingEffect = new Typed(".multitext",{
    strings : ["Seraphine", "a singer", "a mage"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500,
})

var moonIcon = document.getElementById("moonIcon");

moonIcon.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        moonIcon.src="img/sun.png";
    }else{
        moonIcon.src="img/moon.png";
    }
}
