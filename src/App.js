import "./App.css";
import Places from "./components/places";
import TitlePlace from "./components/title-place";
import { useHorizontalScroll } from "./useSideScroll";
import { useHorizontalScroll2 } from "./useSideScroll2";

export default function App() {
   // const scrollRef = useHorizontalScroll();            
    const scrollRef = useHorizontalScroll2();            
    return (
        <div className="flex flex-col justify-between h-screen">
            <header className="h-[50px]">
                Some text
            </header>
            <div className="relative h-[60vh] overflow-hidden">
                {/* <div  ref={scrollRef} className="flex  md:flex-row will-change-transform flex-col backface-hidden transition-all-1 ease-in-out absolute top-0 left-0">
                    <TitlePlace />
                    <Places />
                    <Places />
                    <Places />
                </div> */}

                <div  ref={scrollRef} className="flex  md:flex-row flex-col backface-hidden scroll-smooth absolute top-0 left-0">
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