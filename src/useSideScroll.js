import { useRef, useEffect } from "react";

export function useHorizontalScroll() {
    const elRef = useRef();

    useEffect(() => {
        const el = elRef.current;

        if (el) {
            const onWheel = e => {
                e.preventDefault();

                let skew = (6 * e.deltaY)/-100

                const elPosX = getNumberFromString(el.style.transform)
      
                let translateX = 0
   
                const w = 4100
                const scrollTo = elPosX + e.wheelDeltaY
               
                if(scrollTo < -Math.abs(w)) translateX = elPosX
                else translateX = elPosX + e.wheelDeltaY
                if(elPosX > 0) translateX = 0
                
                el.style.transform = `translateX(${translateX}px) skew(${skew}deg)`;
               // el.style.transform = `translateX(${translateX}px)`;

                //setTimeout(()=> el.style.transform = `translateX(${translateX}px) skew(0deg)`, 500)
             
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