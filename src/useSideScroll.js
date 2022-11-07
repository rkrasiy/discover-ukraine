import { useRef, useEffect } from "react";

function useHorizontalScroll() {
    const elRef = useRef();

    useEffect(() => {
        const el = elRef.current;
        const stop = Math.floor(((el.scrollWidth - window.innerWidth)) / 100) * -100      
        if (el) {
            const scrollHandler = (dx, skewMove) => {
                const elPosX = getNumberFromString(el.style.transform, 0)
         
                if(elPosX === 0 && dx < 0) return
                else if(elPosX === stop && dx > 0) return
                let movePX = elPosX - dx;
                let translateX = 0;

                let cof = 1 - dx / 3;
                let skewC = skewMove;
                if (movePX > 0) translateX = 0
                else if (movePX < stop){ 
                    translateX = elPosX;
                    cof = 0;
                    skewC = 0
                }else translateX = movePX

                animate({
                    duration: 220,
                    timing: makeEaseOut(quad),

                    draw: function (progress) {
                        const skew = (skewC * 0.65) * progress;
                        const move = cof * progress;

                        el.style.transform = `translateX(${translateX + move}px) skew(${skew}deg)`;
                    }
                });          
            };
            let direction = 1;
            let step  = 14;

            let startPoint;
            const controller = (e) =>{
                if(e.type === 'touchstart')
                    startPoint = e.touches[0].clientY;
                
                if(e.type === 'touchmove'){
                    const touch = e.touches[0] || e.changedTouches[0];

                    if(touch.clientY > startPoint + 5){
                        startPoint =  touch.clientY;
                        direction = -1
                    }else if(touch.clientY < startPoint - 5){
                        startPoint =  touch.clientY;
                        direction = 1
                    }
                    let skewTouch = 1 - (step * direction * 2);
                    scrollHandler(step * direction, skewTouch)
                } else if (e.type === 'wheel') {
                    let skewWheel = 1 - e.deltaY / 3;
                    e.preventDefault();
                    scrollHandler(e.deltaY, skewWheel)
                }
            }

            document.querySelector("#root > div").addEventListener("wheel", controller);
            
            if("ontouchstart" in window){
              
               window.addEventListener('touchstart', controller);
               window.addEventListener('touchmove', controller);
               
            }

            // document.querySelector("#root > div").addEventListener('touchmove', function() { 
            //     //touchmove works for iOS, I don't know if Android supports it
            //      document.querySelector("#root > div").trigger('mousewheel');
            // });
            return () => el.removeEventListener("wheel", scrollHandler);
        }
    });
    return elRef;
}

function getNumberFromString(str, option) {
    if (!str) return 0
    let m = str.match(/-*\d+/gm)
    return parseInt(m[option])
}



export function movingElement(elem, toPos, direction){
    animate({
        duration: 1000,
        timing: makeEaseOut(linear),

        draw: function (progress) {
            const move = toPos *( 1 - progress)
            let skew = ((16 * direction) / -100) * progress;
            elem.style.transform = `translateX(${move}px) skew(${skew}deg)`;
        }
    });
}

function animate({ timing, draw, duration }) {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction goes from 0 to 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // calculate the current animation state
        if (typeof timing == "function") {
            let progress = timing(1 - timeFraction);
            draw(progress); // draw it
        }

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
}

function makeEaseOut(timing) {

    return function (timeFraction) {
        return 1 - timing(1 - timeFraction);
    }
}

function quad(timeFraction) {
    //return Math.pow(timeFraction, 2)
    return timeFraction
}

function linear(timeFraction) {
    //return  1 - timeFraction * (1 - timeFraction);
    return 1 - Math.pow(1 -timeFraction, 1.675)
}
export { useHorizontalScroll }