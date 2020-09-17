function navigation(){
    document.querySelector('#openslide').addEventListener("click", function(e){
        document.querySelector(".mobile").style.display="block";
    });
    document.querySelector('#btnbnd').addEventListener("click", function(e){
        document.querySelector(".mobile").style.display="none";
    });
}
navigation();