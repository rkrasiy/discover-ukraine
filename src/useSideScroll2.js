import { useRef, useEffect } from "react";

export function useHorizontalScroll2() {
    const elRef = useRef();

    useEffect(() => {
        const el = elRef.current;

        if (el) {
            const onWheel = e => {
                e.preventDefault();
                let skew = (6 * e.deltaY)/-100

                        const elPosX = el.getBoundingClientRect()
            
                        let translateX = 0
        
                        // const w = 4100
                        const scrollTo = elPosX.x + e.wheelDeltaY
                    
                        // if(scrollTo < -Math.abs(w)) translateX = elPosX
                        // else translateX = elPosX + e.wheelDeltaY
                        // if(elPosX > 0) translateX = 0
                        
                    // el.style.transform = `translateX(${translateX}px) skew(${skew}deg)`;

                    el.style.left = scrollTo + "px"
                animate({
                    duration: 1000,
                    timing: bounceEaseOut,
                    draw: function(progress) {
                        el.style.transform = `skew(${progress * skew}deg)`
                    }
                });
                
               // el.style.left = `${scrollTo}px`;
             
            };

            document.querySelector("#root > div").addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);
    return elRef;
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
    let progress = timing(timeFraction);

    draw(progress); // draw it

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


function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    }
    }
}

function circ(timeFraction) {
console.log(timeFraction)
  return 1 - Math.sin(Math.acos(timeFraction));
}

let bounceEaseInOut = makeEaseInOut(bounce);
let bounceEaseOut = makeEaseOut(circ);