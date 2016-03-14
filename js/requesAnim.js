/*------------------------------------------------------------------------------------------------------------------------------

ooooooooo.                                                           .         .o.                    o8o                    
`888   `Y88.                                                       .o8        .888.                   `"'                    
 888   .d88'  .ooooo.   .ooooo oo oooo  oooo   .ooooo.   .oooo.o .o888oo     .8"888.     ooo. .oo.   oooo  ooo. .oo.  .oo.   
 888ooo88P'  d88' `88b d88' `888  `888  `888  d88' `88b d88(  "8   888      .8' `888.    `888P"Y88b  `888  `888P"Y88bP"Y88b  
 888`88b.    888ooo888 888   888   888   888  888ooo888 `"Y88b.    888     .88ooo8888.    888   888   888   888   888   888  
 888  `88b.  888    .o 888   888   888   888  888    .o o.  )88b   888 .  .8'     `888.   888   888   888   888   888   888  
o888o  o888o `Y8bod8P' `V8bod888   `V88V"V8P' `Y8bod8P' 8""888P'   "888" o88o     o8888o o888o o888o o888o o888o o888o o888o 
                             888.                                                                                            
                             8P'                                                                                             
                             "    
	 - Paul Irish. Link to better understand Request Frame Anim -
	http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	
	- Github Example -
	https://gist.github.com/paulirish/1579671

	- Other Examples - 
	https://github.com/Prinzhorn/skrollr/blob/master/src/skrollr.js
							 
------------------------------------------------------------------------------------------------------------------------------*/

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 
// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel
 
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimFrame; ++x) {
        window.requestAnimFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimFrame)

        window.requestAnimFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

/*-------------------------------------------------------------------------------------------------

ooooo                                             .o.                    o8o                    
`888'                                            .888.                   `"'                    
 888          .ooooo.   .ooooo.  oo.ooooo.      .8"888.     ooo. .oo.   oooo  ooo. .oo.  .oo.   
 888         d88' `88b d88' `88b  888' `88b    .8' `888.    `888P"Y88b  `888  `888P"Y88bP"Y88b  
 888         888   888 888   888  888   888   .88ooo8888.    888   888   888   888   888   888  
 888       o 888   888 888   888  888   888  .8'     `888.   888   888   888   888   888   888  
o888ooooood8 `Y8bod8P' `Y8bod8P'  888bod8P' o88o     o8888o o888o o888o o888o o888o o888o o888o 
                                  888                                                           
                                 o888o   

	 - Example Function to settle animation loop -

function animationLoop() {
	
	// Function still runs no matter what
	requestAnimFrame(animationLoop);
	
	render_loop();
		
}

function render_loop(){
		
}

-------------------------------------------------------------------------------------------------*/