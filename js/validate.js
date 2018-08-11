function kiemtra()
{
    var name=document.getElementById('name');
    var pass=document.getElementById('pass');
    var email=document.getElementById('email');
    var phone=document.getElementById('phone');
    var filter=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(name.value=="")
    {
        document.getElementById('nameerr').innerHTML="Must enter Username";
        return false;
    }

    if(pass.value=="")
    {
        document.getElementById('passerr').innerHTML="Must enter password";
        return false;
    }
    if(pass.value.length<6)
    {
        document.getElementById('passerr').innerHTML="Password must be at least 6 letters";
        return false;
    }
    if(!filter.test(email.value))
    {
        document.getElementById('emailerr').innerHTML="Wrong email format";
        return false;
    }
    if(phone.value=="")
    {
        document.getElementById('phoneerr').innerHTML="Must enter Phone number";
        return false;
    }
    if (isNaN(phone.value))
    {
        document.getElementById('phoneerr').innerHTML="Must be number";
        return false;
    }
    if(count(phone.value)<=8 || count(phone.value)>=12)
    {
        document.getElementById('phoneerr').innerHTML="Must be between 9 - 11 numbers";
        return false;
    }
    


    return true;
}
function passwordvalidate(){
    var pass=document.getElementById('pass');
    if(pass.value.length<6)
    {
        document.getElementById('passerr').innerHTML="Password must be at least 6 letters";
    }
    else{
        document.getElementById('passerr').innerHTML="";
    }
}
function namevalidate(){
    var name=document.getElementById('name');
    if(name.value=="")
    {
        document.getElementById('nameerr').innerHTML="Must enter Username";
    }
    else{
        document.getElementById('nameerr').innerHTML="";
    }
}
function mailvalidate(){
    var filter=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!filter.test(email.value))
    {
        document.getElementById('emailerr').innerHTML="Wrong email format";
    }
    else{
        document.getElementById('emailerr').innerHTML="";
    }
}
function phonevalidate(){
    var phone=document.getElementById('phone');
    if(phone.value=="")
    {
        document.getElementById('phoneerr').innerHTML="Must enter Phone number";
    }
    else if (isNaN(phone.value))
    {
        document.getElementById('phoneerr').innerHTML="Must be number";
      
    }
    else if(phone.value.length<=8 || phone.value.length>=12)
    {
        document.getElementById('phoneerr').innerHTML="Must be between 9 - 11 numbers";
    }
    else{
        document.getElementById('phoneerr').innerHTML="";
    }
}