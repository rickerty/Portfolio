// "Nav" shrink
function showNav(){
    const navStyle = document.getElementById('navbar').style;
    const screenTop = window.scrollY;
    if (screenTop > 20) {
        document.getElementById('navbar').classList.add("mystyle");
        navStyle.height = "80px";
        navStyle.backgroundColor = "white";
        document.getElementById('logo').style.visibility = "visible";
    }
    else
    {
        document.getElementById('navbar').classList.remove("mystyle");
        navStyle.height = "60px";
        navStyle.backgroundColor = "";
        document.getElementById('logo').style.visibility = "hidden";
    }
}
window.addEventListener('scroll', showNav);
// Koniec nav shrink
// Pojawianie się elementów w trakcie ładowania
window.addEventListener('DOMContentLoaded', function(){
    setTimeout(() => { 
        document.getElementsByClassName('napis')[0].style.visibility = 'visible';
        document.getElementsByClassName('napis')[0].style.animation = 'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
        }, 1000);
        setTimeout(() => { 
            document.getElementsByClassName('arrow')[0].style.visibility = 'visible';
        document.getElementsByClassName('arrow')[0].style.animation = 'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
        }, 1200);
})

//////////

///Pojawienie się "about"

window.addEventListener('scroll', function(){
    const topOfFirst = document.getElementById('first').offsetTop - 50;
    const screenTop = window.scrollY;
    if (screenTop > topOfFirst)
    {
        document.getElementsByClassName('container-text')[0].style.visibility = 'visible';
        document.getElementsByClassName('container-text')[0].style.animation = 'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
    }
    else
    {
        document.getElementsByClassName('container-text')[0].style.animation = ''; 
        document.getElementsByClassName('container-text')[0].style.visibility = 'hidden';
    }

    if (screenTop > topOfFirst + 200)
    {
        document.getElementsByClassName('container-text')[2].style.visibility = 'visible';
        document.getElementsByClassName('container-text')[2].style.animation = 'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
    }
    else
    {
        document.getElementsByClassName('container-text')[2].style.animation = ''; 
        document.getElementsByClassName('container-text')[2].style.visibility = 'hidden';
    }
})

