window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
    if (document.documentElement.scrollTop > 800) 
    {
        document.getElementById("topbtn").style.display = "block";
        document.getElementById("navbartop").style.transform= "translateY(-100px)";
    } 
    else 
    {
        document.getElementById("topbtn").style.display = "none";
        document.getElementById("navbartop").style.transform = "translateY(0px)";
    }

    if (document.documentElement.scrollTop > 1600)
    {
        document.getElementById("timelinetop").style.transform = "translateX(0)"; 
    } 
    if (document.documentElement.scrollTop > 2000)
    {
        document.getElementById("timelinemiddle").style.transform = "translateX(0)"; 
    } 
    if (document.documentElement.scrollTop > 2400)
    {
        document.getElementById("timelinebottom").style.opacity= "1"; 
    } 
}
// window.onscroll = function() {timeline()};
// function timeline() {
    
// }


function showmenu(){
    document.getElementById('sidemenu').style.transform="translateX(0)";
}
function closemenu(){
    document.getElementById('sidemenu').style.transform="translateX(-100vw)";

}



// $(document).ready(function(){
//     $('.perk-image').click(function(){
//         $(this).parent().find('.inner-pack').slideToggle();
//     })
// });

function slidein($a)
{
    if(document.getElementById($a).style.height =='0px')
    {
        document.getElementById($a).style.height='300px';
        document.getElementById($a).style.padding='0 5px';
        document.getElementById($a).style.border='1px solid grey';
    }
    else
    { 
        document.getElementById($a).style.height='0px';
        document.getElementById($a).style.padding='0 5px';
    }
}


var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}
