import { useRef, useEffect } from "react";

function useHorizontalScroll() {
    const elRef = useRef();

    useEffect(() => {
        const el = elRef.current;
        const stop = Math.floor(((el.scrollWidth - window.innerWidth)) / 100) * -100
        
       
        if (el) {
            const onWheel = e => {
                e.preventDefault();
                const elPosX = getNumberFromString(el.style.transform, 0)
         
                if(elPosX === 0 && e.deltaY < 0) return
                else if(elPosX === stop && e.deltaY > 0) return
           
                let movePX = elPosX - e.deltaY;
                let translateX = 0;


                if (movePX > 0) translateX = 0
                else if (movePX < stop) translateX = elPosX
                else translateX = movePX
                
                animate({
                    duration: 220,
                    timing: makeEaseOut(quad),

                    draw: function (progress) {
                        let skew = ((16 * e.deltaY) / -100) * progress;
                        el.style.transform = `translateX(${translateX}px) skew(${skew}deg)`;
                    }
                });
          
            };

            document.querySelector("#root > div").addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
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

function makeEaseOut2(timing) {

    return function (timeFraction) {
        return  1 - Math.pow(1 -timeFraction, 1.675)
    }
}

function linear(timeFraction) {
    //return  1 - timeFraction * (1 - timeFraction);
    return 1 - Math.pow(1 -timeFraction, 1.675)
}
export { useHorizontalScroll }