var x=1;
document.getElementById('back').disabled="true";   
function back(){
    document.getElementById('slider1-hinh'+x).style="transform:translate(105%)";
    document.getElementById('slider2-hinh'+x).style="transform:translate(105%)";
    document.getElementById('slider3-hinh'+x).style="transform:translate(-105%)";
    document.getElementById('slider4-hinh'+x).style="transform:translate(-105%)";
    x--;
    document.getElementById('slider1-hinh'+x).style="transform:translate(0%)";
    document.getElementById('slider2-hinh'+x).style="transform:translate(0%)";
    document.getElementById('slider3-hinh'+x).style="transform:translate(0%)";
    document.getElementById('slider4-hinh'+x).style="transform:translate(0%)";
    document.getElementById('next').removeAttribute("disabled");
    if(x<=1)
    {
        x=1;

        document.getElementById('back').disabled="true";   
    }
    
    document.getElementById('slider-counter').innerHTML=x;
    
}
function next(){
    document.getElementById('slider1-hinh'+x).style="transform:translate(-105%)";
    document.getElementById('slider2-hinh'+x).style="transform:translate(-105%)";
    document.getElementById('slider3-hinh'+x).style="transform:translate(105%)";
    document.getElementById('slider4-hinh'+x).style="transform:translate(105%)";
    x++;
    document.getElementById('slider1-hinh'+x).style="transform:translate(0%)";
    document.getElementById('slider2-hinh'+x).style="transform:translate(0%)";
    document.getElementById('slider3-hinh'+x).style="transform:translate(0%)";
    document.getElementById('slider4-hinh'+x).style="transform:translate(0%)";
    document.getElementById('back').removeAttribute("disabled");
    if(x>=3)
    {
        
        document.getElementById('next').disabled="true";
        x=3;  
    }
    

    document.getElementById('slider-counter').innerHTML=x;
}

function sidemenuoverhome(){
    document.getElementById('img-home').style="transform:translateX(-800px);";
    document.getElementById('sidemenu-home').style="padding:30 70px;font-size:1.8rem;background-color:white;color:#101828;"
}
function sidemenuoverabout(){
    document.getElementById('img-about').style="transform:translateX(-500px);";
    document.getElementById('sidemenu-about').style="padding:30 70px;font-size:1.8rem;background-color:white;color:#101828;"
}
function sidemenuoverservices(){
    document.getElementById('img-services').style="transform:translateX(-900px);";
    document.getElementById('sidemenu-services').style="padding:30 70px;font-size:1.8rem;background-color:white;color:#101828;"
}
function sidemenuovergallery(){
    document.getElementById('img-gallery').style="transform:translateX(-450px);";
    document.getElementById('sidemenu-gallery').style="padding:30 70px;font-size:1.8rem;background-color:white;color:#101828;"
}

function sidemenuouthome(){
    document.getElementById('img-home').style="transform:translateX(600px);";
    document.getElementById('sidemenu-home').style="padding:0 20px;font-size:1rem;"
}
function sidemenuoutabout(){
    document.getElementById('img-about').style="transform:translateX(600px);";
    document.getElementById('sidemenu-about').style="padding:0 20px;font-size:1rem;"
}
function sidemenuoutservices(){
    document.getElementById('img-services').style="transform:translateX(600px);";
    document.getElementById('sidemenu-services').style="padding:0 20px;font-size:1rem;"
}
function sidemenuoutgallery(){
    document.getElementById('img-gallery').style="transform:translateX(600px);";
    document.getElementById('sidemenu-gallery').style="padding:0 20px;font-size:1rem;"
}
