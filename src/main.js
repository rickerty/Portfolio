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
////////////////////
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
        setTimeout(() => {
            document.getElementsByClassName('container-text')[1].style.visibility = 'visible';
            document.getElementsByClassName('container-text')[1].style.animation = 'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
        }, 500);
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
        
        
        ///--------- Progress Bar ---------
        var ProgressBar = require('progressbar.js')
        var bar = new ProgressBar.SemiCircle(php_container, {
            strokeWidth: 6,
            color: '#008000',
            trailColor: '#eee',
            trailWidth: 1,
            easing: 'easeInOut',
            duration: 1400,
            svgStyle: null,
            text: {
            value: '',
            alignToBottom: false
            },
            from: {color: '#008000'},
            to: {color: '#ED6A5A'},
            // Set default step function for all animate calls
            step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
            var value = Math.round(bar.value() * 100);
            if (value >= 0 && value < 25) {
                bar.setText('Junior');
            } else {
                bar.setText(value);
            }
        
            bar.text.style.color = state.color;
            }
        });
        bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
        bar.text.style.fontSize = '2rem';
        
        bar.animate(0.2);
    
    }
    else
    {
        document.getElementsByClassName('container-text')[2].style.animation = ''; 
        document.getElementsByClassName('container-text')[2].style.visibility = 'hidden';
    }
})
/////////////////////////

///--------- Progress Bar ---------


