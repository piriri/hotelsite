window.addEventListener("load", function () { //OTAN FORTWXEI H SELIDA XEKINAEI

this.document.getElementById("d1").onchange = function(){   //TO CHECKOUT PAIRNEI MIA MERA META TO CHECKIN
    var date1 = new Date(document.getElementById("d1").value);
    date1.setDate(date1.getDate()+1);
    document.getElementById("d2").valueAsDate = date1;
};
    this.document.getElementById("bt").onmouseover = function () {    //ta koubia allazoun xroma
        this.style.backgroundColor = "blue";
        this.style.color = 'white';
    }
    document.getElementById("bt").onmouseout = function () {
        this.style.backgroundColor = "skyblue";
    }

    document.getElementById("bt2").onmouseover = function () {
       
        this.style.backgroundColor = "darkgrey";
        this.style.color = "white";
    }
    document.getElementById("bt2").onmouseout = function () {
        
        this.style.backgroundColor = "white";
        this.style.color = "black";
    }

    document.getElementById("p1").onchange = function () {               //gia to range deixnei thn timh ekeinh thn stigmh
        document.getElementById("currentpr").innerHTML = this.value + "$";
    }

    this.document.getElementById("bt2").onclick=function(){       //to koubi map se paei sto google/maps
        window.open("https://www.google.com/maps")
    }

    $("#rec1").on('mouseover', function () {               //oi times allazoun xrwma
        $("#rec1").css("background-color", "skyblue");
        $("#rec1").css("color", "blue");
    })
    $("#rec1").on('mouseout', function () {
        $("#rec1").css("background-color", "white");
        $("#rec1").css("color", "grey");
    })
    $("#rec2").on('mouseover', function () {
        $("#rec2").css("background-color", "skyblue");
        $("#rec2").css("color", "blue");
    })
    $("#rec2").on('mouseout', function () {
        $("#rec2").css("background-color", "white");
        $("#rec2").css("color", "grey");
    })
    $("#rec3").on('mouseover', function () {
        $("#rec3").css("background-color", "skyblue");
        $("#rec3").css("color", "blue");
    })
    $("#rec3").on('mouseout', function () {
        $("#rec3").css("background-color", "white");
        $("#rec3").css("color", "grey");
    })
    $("#rec4").on('mouseover', function () {
        $("#rec4").css("background-color", "skyblue");
        $("#rec4").css("color", "blue");
    })
    $("#rec4").on('mouseout', function () {
        $("#rec4").css("background-color", "white");
        $("#rec4").css("color", "black");
    })
    $("#rec5").on('mouseover', function () {
        $("#rec5").css("background-color", "skyblue");
        $("#rec5").css("color", "blue");
    })
    $("#rec5").on('mouseout', function () {
        $("#rec5").css("background-color", "white");
        $("#rec5").css("color", "grey");
    })
    $("#rec6").on('mouseover', function () {
        $("#rec6").css("background-color", "skyblue");
        $("#rec6").css("color", "blue");
    })
    $("#rec6").on('mouseout', function () {
        $("#rec6").css("background-color", "white");
        $("#rec6").css("color", "grey");
    })
    $("#rec7").on('mouseover', function () {
        $("#rec7").css("background-color", "skyblue");
        $("#rec7").css("color", "blue");
    })
    $("#rec7").on('mouseout', function () {
        $("#rec7").css("background-color", "white");
        $("#rec7").css("color", "grey");
    })
    $("#rec8").on('mouseover', function () {
        $("#rec8").css("background-color", "skyblue");
        $("#rec8").css("color", "blue");
    })
    $("#rec8").on('mouseout', function () {
        $("#rec8").css("background-color", "white");
        $("#rec8").css("color", "black");
    })
    $("#viewdeal1").on('mouseover', function () {
        $("#viewdeal1").css("background-color", "darkgreen");
    })
    $("#viewdeal1").on('mouseout', function () {
        $("#viewdeal1").css("background-color", "green");
    })
    $("#viewdeal2").on('mouseover', function () {
        $("#viewdeal2").css("background-color", "darkgreen");
    })
    $("#viewdeal2").on('mouseout', function () {
        $("#viewdeal2").css("background-color", "green");
    })
    var tog1 = document.querySelector("#love");             //ta koubia fia thn kardoula otan click allazoun xrwma
    var tog2 =  document.querySelector("#love1");
    tog1.addEventListener("click", function() {
        tog1.classList.toggle("love");
    });
    tog2.addEventListener("click", function() {
        tog2.classList.toggle("love");
    });
    
    document.querySelector("#rec1").addEventListener("mouseover",function(){               //oi times bainoun panw apo to koubi viewdeal otan kanw mouseover
        document.querySelector("#x").innerHTML=document.querySelector("#rec1").innerHTML;
    });
    document.querySelector("#rec2").addEventListener("mouseover",function(){
        document.querySelector("#x").innerHTML=document.querySelector("#rec2").innerHTML;
    });
    document.querySelector("#rec3").addEventListener("mouseover",function(){
        document.querySelector("#x").innerHTML=document.querySelector("#rec3").innerHTML;
    });
    document.querySelector("#rec5").addEventListener("mouseover",function(){
        document.querySelector("#y").innerHTML=document.querySelector("#rec5").innerHTML;
    });
    document.querySelector("#rec6").addEventListener("mouseover",function(){
        document.querySelector("#y").innerHTML=document.querySelector("#rec6").innerHTML;
    });
    document.querySelector("#rec7").addEventListener("mouseover",function(){
        document.querySelector("#y").innerHTML=document.querySelector("#rec7").innerHTML;
    });

});