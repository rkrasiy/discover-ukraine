import { useRef, useEffect } from "react";

function useHorizontalScroll() {
    const elRef = useRef();

    useEffect(() => {
        const el = elRef.current;
        const stop = getStopPoint(el)   

        if( el ) {
            const scrollHandler = ( dx ) => {
                const elPosX = getNumberFromString(el.style.transform, 0)
         
                if(elPosX === 0 && dx < 0) return
                else if(elPosX === stop && dx > 0) return
               
                let movePX = elPosX - dx;
                let translateX;

                let moving = 1 - dx / 3;

                if (movePX > 0) translateX = 0
                else if (movePX < stop){ 
                    translateX = elPosX;
                    moving = 0;
                }else translateX = movePX

                animate({
                    duration: 220,
                    timing: makeEaseOut(quad),

                    draw: function (progress) {
                        const skew = (moving * 0.65) * progress;
                        const move = moving * progress;

                        el.style.transform = `translateX(${translateX + move}px) skew(${skew}deg)`;
                    }
                });          
            };

            const controller = (e) =>{
                let direction = 1;
                let startPoint;

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
                    
                    scrollHandler(8 * direction);

                } else if (e.type === 'wheel') {
                    e.preventDefault();
                    scrollHandler(e.deltaY)
                }
            }

            document.querySelector("#root > div").addEventListener("wheel", controller);
            
            if("ontouchstart" in window){
              
               window.addEventListener('touchstart', controller);
               window.addEventListener('touchmove', controller);
               
            }

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

function getStopPoint(el){
    return  Math.floor(((el.scrollWidth -( window.innerWidth / 1.3))) / 100) * -100   
}

function horizontalScroll(el, dir, showButtons){
    let dx =( window.innerWidth * dir) * .9 ;
    const stop = getStopPoint(el)     

    const elPosX = getNumberFromString(el.style.transform, 0)

    if(dir < 0 && elPosX + dx < 0 ) showButtons(true)
    else if(dir > 0 && elPosX + dx >= 0 ) showButtons(false)

    if(elPosX === 0 && dx > 0) return
    if(elPosX < stop) return
    else if(elPosX + dx < stop) dx = stop - elPosX
    
    let translateX;
    const movePX = elPosX + dx;
    const transPx = 1 - dx + (400 * dir);
    const skeyDeg = dx / 50;

    if (movePX > 0)  translateX = 0
    else if (movePX < stop) translateX = elPosX - transPx;
    else translateX = movePX

    animate({
        duration: 1500,
        timing: makeEaseOut(linear),
        draw: function (progress) {
            const skew = (skeyDeg * 0.65) * progress;
            const move = transPx * progress;

            el.style.transform = `translateX(${translateX + move}px) skew(${skew}deg)`;
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
    return timeFraction
}

function linear(timeFraction) {
    return 1 - Math.pow(1 -timeFraction, 1.675)
}

export { 
    useHorizontalScroll,
    horizontalScroll    
}