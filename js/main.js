function StartAD(){
    setTimeout(function(){
        document.getElementById("img-1").style.transform='translate(0)';
        document.getElementById("img-1").style.transition='all 3s ease';
        document.getElementById("img-1").style.opacity='1';
    },250)
    setTimeout(function(){
        document.getElementById("text-1").style.transform='translate(0)';
        document.getElementById("text-1").style.transition='all 3s ease';
        document.getElementById("text-1").style.opacity='1';

    },500)
    setTimeout(function(){
        document.getElementById("img-1").style.opacity='0';
    
        document.getElementById("text-1").style.opacity='0';
        document.getElementById("img-2").style.transform='translate(40px) scaleX(-1)';
        document.getElementById("img-2").style.transition='all 3s ease';
        document.getElementById("img-2").style.opacity='1';

    },2000)
    setTimeout(function(){
        document.getElementById("text-2").style.transform='translate(0) ';
        document.getElementById("text-2").style.transition='all 3s ease';
        document.getElementById("text-2").style.opacity='1';

    },2500)
    setTimeout(function(){
        document.getElementById("img-2").style.opacity='0';
    
        document.getElementById("text-2").style.opacity='0';
        document.getElementById("img-3").style.transform='rotateY(0) scaleX(-1) translate(0)';
        document.getElementById("img-3").style.transition='all 3s ease';
        document.getElementById("img-3").style.opacity='1';

    },3500)
    setTimeout(function(){
        document.getElementById("text-3").style.transform='translate(0) ';
        document.getElementById("text-3").style.transition='all 3s ease';
        document.getElementById("text-3").style.opacity='1';
    },4000)
    setTimeout(function(){
        document.getElementById("icon").style.opacity='0';
        document.getElementById("img-3").style.opacity='0';
        document.getElementById("text-3").style.opacity='0';

        document.getElementById("text-4").style.transform='translate(0) ';
        document.getElementById("text-4").style.transition='all 2s ease';
        document.getElementById("text-4").style.opacity='1';
    },5000)
    setTimeout(function(){
        document.getElementById("text-5").style.transform='translate(0) ';
        document.getElementById("text-5").style.transition='all 2s ease';
        document.getElementById("text-5").style.opacity='0.8';
    },5500)
    setTimeout(function(){
        document.getElementById("img-4").style.transform='translate(0) ';
        document.getElementById("img-4").style.transition='all 2s ease';
        document.getElementById("img-4").style.opacity='1';
    },6000)
    setTimeout(function(){
        document.getElementById("img-5").style.transform='translate(0) ';
        document.getElementById("img-5").style.transition='all 2s ease';
        document.getElementById("img-5").style.opacity='1';
    },6300)
    setTimeout(function(){
        document.getElementById("button").style.transform='translate(0) ';
        document.getElementById("button").style.transition='all 2s ease';
        document.getElementById("button").style.opacity='1';
    },6600)


}window.load=StartAD();