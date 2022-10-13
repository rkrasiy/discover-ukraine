import { useRef } from "react";
import "./App.css";
import Places from "./components/places";
import TitlePlace from "./components/title-place";
import { useHorizontalScroll, getNumberFromString } from "./useSideScroll";

export default function App() {
    const scrollRef = useRef();            
   // const scrollRef = useHorizontalScroll(); 
    const wheelHandler = (e) => {
        //e.preventDefault();

        let skew = (6 * e.deltaY)/-100
        

        const elPosX = getNumberFromString(scrollRef.current.style.transform)
        let movePX = elPosX - e.deltaY;
        let translateX = 0;

        const w = -4100;
                        
        if(movePX > 0) translateX = 0
        else if( movePX < w) translateX = elPosX
        else translateX = movePX
        
        scrollRef.current.style.transform = `translateX(${translateX}px) skew(${skew}deg)`;
    }

    return (
        <div className="flex flex-col justify-between h-screen"  onWheel={wheelHandler}>
            <header className="h-[50px]">
                Some text
            </header>
            <div className="relative h-[60vh] overflow-hidden">
                <div ref={scrollRef} className="flex  md:flex-row will-change-transform flex-col backface-hidden absolute top-0 left-0 transition-left">
                    <TitlePlace />
                    <Places />
                    <Places />
                    <Places />
                </div>
            </div>
            <footer className="h-[50px] bg-contain" style={{backgroundImage: "url(./img2a.svg)"}}>
            </footer>
        </div>
    )
}