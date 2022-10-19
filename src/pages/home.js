import Places from "../components/places";
import TitlePlace from "../components/title-place";
import { useHorizontalScroll } from "../useSideScroll";

function Home (){
   const scrollRef = useHorizontalScroll(); 
    return (
        <div className="relative h-[60vh] overflow-hidden py-8">
            <div ref={scrollRef} className="flex  md:flex-row will-change-transform flex-col backface-hidden absolute top-0 left-0 transition-left gap-32 h-full pb-12">
                <TitlePlace />
                <Places />
            </div>
        </div>
    )
}

export default Home;