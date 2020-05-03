import './scss/style.scss';
require('bootstrap')
var ProgressBar = require('progressbar.js')
var $ = require( "jquery" );


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
var number = 0;
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
        
        if (number < 1)
        {
            number += 1;
        ///--------- Progress  PHP Bar ---------
        var bar = new ProgressBar.Line(php_container, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 600,
            color: '#49D49D',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {width: '100%', height: '100%'},
            text: {
              style: {
                color: '#999',
                position: 'absolute',
                right: '50%',
                top: '20px',
                padding: 0,
                margin: 0,
                transform: null
              },
              autoStyleContainer: false
            },
            step: (state, bar) => {
              bar.setText('Junior');
            }
          });
          
          bar.animate(0.3);
        
       
        ///--------- Progress  JS Bar ---------
        var barjs = new ProgressBar.Line(js_container, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1000,
            color: '#49D49D',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {width: '100%', height: '100%'},
            text: {
                style: {
                    color: '#999',
                    position: 'absolute',
                    right: '50%',
                    top: '20px',
                    padding: 0,
                    margin: 0,
                    transform: null
              },
              autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText('Junior');
            }
          });
          
          barjs.animate(0.3);
        ///--------- Progress CSS Bar ---------
        var barcss = new ProgressBar.Line(css_container, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#49D49D',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {width: '100%', height: '100%'},
            text: {
                style: {
                    color: '#999',
                    position: 'absolute',
                    right: '50%',
                    top: '20px',
                    padding: 0,
                    margin: 0,
                    transform: null
              },
              autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText('Junior');
            }
          });
          
          barcss.animate(0.3);

           ///--------- Progress Laravel Bar ---------
        var barlaravel = new ProgressBar.Line(laravel_container, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1800,
            color: '#49D49D',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {width: '100%', height: '100%'},
            text: {
                style: {
                    color: '#999',
                    position: 'absolute',
                    right: '50%',
                    top: '20px',
                    padding: 0,
                    margin: 0,
                    transform: null,
              },
              autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText('Junior');
            }
          });
          
          barlaravel.animate(0.3);
          
           ///--------- Progress NPM Bar ---------
           var barnpm = new ProgressBar.Line(npm_container, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 2200,
            color: '#49D49D',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {width: '100%', height: '100%'},
            text: {
                style: {
                    color: '#999',
                    position: 'absolute',
                    right: '50%',
                    top: '20px',
                    padding: 0,
                    margin: 0,
                    transform: null,
              },
              autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText('Junior');
            }
          });
          
          barnpm.animate(0.3);
          
        }
    }
    else
    {
        document.getElementsByClassName('container-text')[2].style.animation = ''; 
        document.getElementsByClassName('container-text')[2].style.visibility = 'hidden';
    }

})


