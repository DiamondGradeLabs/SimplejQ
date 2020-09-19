/*
* Name: app.js
* Author: Dynamic Creation
* Date: 19 SEP 2020
*/

/*
Globals
*/


/*
init is responsible for starting the jQuery script
*/
function init()
{
    start();//Load Vendor Libraries
    window.onload = function() {//onload if window has jQuery start the app.
        if (window.jQuery) {  
            loadPage("/UI/Views/home.html");
        } else {//log the site has an invalide jQuery configuration.
            console.log("jQuery Configuration Invalid")
        }
    }
}

/*
start is responsible for mounting the jQuery scripts and any other scripts added.
*/
function start()
{
    //Create Script Object and append it to the head of the root document
    let script = document.createElement('script');
    script.src = "/Vendor/jQuery/jquery-3.5.1.js";
    document.head.appendChild(script);
    //TODO add error handling for jQuery not being loaded.
    let link = document.createElement('link');
    link.rel="stylesheet";
    link.href="/Vendor/jQueryUI/jquery-ui-1.12.1/jquery-ui.css";
    document.head.appendChild(link);
    script = document.createElement('script');
    script.src = "/Vendor/jQueryUI/jquery-ui-1.12.1/jquery-ui.js";
    document.head.appendChild(script);

    
{/* <script src="jquery-ui.min.js"></script> */}
}

/*
loadComponent adds component to an element with the load function of jQuery
*/
function loadComponent(element, componentPath)
{
  $.get(componentPath, function(data){ 
    $(data).appendTo(element);
  });
}

/*
loadPage loads the comopnent page onto the app div
*/
function loadPage(pagePath)
{
    $("#app").load(pagePath);
}

/*
on document load call init()
*/
document.onload = init();