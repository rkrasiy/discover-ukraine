function useHorizontalScroll(el, e) {
     e.preventDefault();

    //let skew = (6 * e.deltaY)/-100
    let skew = 0

    const elPosX = getNumberFromString(el.style.transform)

    let translateX = 0

    const w = -4100;
                    
    if(elPosX > 0) translateX = 0
    else if( elPosX + e.deltaY < w) translateX = elPosX
    else translateX = elPosX - e.deltaY
    
    console.log(translateX)
    el.style.transform = `translateX(${translateX}px) skew(${skew}deg)`;

    //document.querySelector("#root > div").addEventListener("wheel", onWheel);
    //return () => el.removeEventListener("wheel", onWheel);
}

function getNumberFromString(txt){
    if(!txt) return 0
    return  parseInt(txt.substring(txt.indexOf("(") + 1, txt.indexOf("px")))
}

function animate({timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction goes from 0 to 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // calculate the current animation state
    if(typeof timing == "function"){
        let progress = timing(timeFraction);
        draw(progress); // draw it
    
    }


    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}

function makeEaseInOut(timing) {
    return function(timeFraction) {
        if (timeFraction < .5)
            return timing(2 * timeFraction) / 2;
        else
            return (2 - timing(2 * (1 - timeFraction))) / 2;
    }
}

function makeEaseOut(timing) {
    return function(timeFraction) {
        return 1 - timing(1 - timeFraction);
    }
}

//1-0.75-0.5-0.25
function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
    }
}

function circ(timeFraction) {
    //console.log(timeFraction)
    return 1 - Math.sin(Math.acos(timeFraction));
}

let bounceEaseInOut = makeEaseInOut(bounce);
let bounceEaseOut = makeEaseInOut(circ);
export {useHorizontalScroll, getNumberFromString}