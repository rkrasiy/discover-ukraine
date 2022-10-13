import { useRef, useEffect } from "react";

export function useHorizontalScroll2() {
    const elRef = useRef();

    useEffect(() => {
        const el = elRef.current;

        if (el) {
            const onWheel = e => {
                e.preventDefault();
                //console.log(e)
                let skew = (6 * e.deltaY)/-100

                       // const elPosX = el.getBoundingClientRect()
            
                        let translateX = 0
        
                        // const w = 4100
                const scrollTo = el.scrollLeft + e.deltaY
               // console.log(scrollTo)

                el.scrollTo({
                    left: scrollTo,
                    behavior: "smooth"
                });

             
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
