import Places from "../components/places";
import Section from "../components/section";
import { useHorizontalScroll, movingElement } from "../useSideScroll";
import HeaderBlock from "../components/header-block";
import ContentBlock from "../components/content-block";
import {SupTitle, TrackingTitle, SimpleTitle} from "../components/titles";
import SimpleText from "../components/simple-text";
import Image from "../components/image";
import { useRef } from "react";

function Home (){
    const scrollRef = useHorizontalScroll(); 
    const firstBlock = useRef(); 

    const clickHandler = ()=>{
    console.log(firstBlock)
        const moveTo = -Math.abs(firstBlock.current.offsetLeft);
        console.dir(firstBlock.current.offsetLeft)
        movingElement(scrollRef.current, moveTo , 120)
    }

    return (
        <div className="relative h-[520px] overflow-hidden mt-28">
            <div ref={scrollRef} className="flex flex-row will-change-transform backface-hidden transition-left gap-32 h-full">
                <Section>
                    <HeaderBlock className="w-72">
                        <SimpleTitle huge>Discover Ukraine</SimpleTitle>
                        <SimpleText mini className="mt-4 mb-6">take a glimpse of ukrain’s bewitching attractions</SimpleText>    
                        <button className="px-8 py-2 text-lg bg-red-500 rounded-lg tracking-[2px]" onClick={clickHandler}>Explore</button>
                    </HeaderBlock>
                    <ContentBlock className="flex-auto" gap="gap-8">
                        <Image src="./kiev8.jpg" alt="principal" className="mt-4" huge />
                        <div className="flex-auto flex flex-col relative">
                            <Image src="./karpatian6.jpg" alt="people" className="mb-4" small />   
                            <Image src="./map2.png" alt="traditional symbol icon" className="mb-4" mini object="object-contain" />         
                            <Image src="./karpatian9.jpg" alt="culture" className="absolute left-[131px] top-[18%]"/>               
                            <Image src="./ukranians6.jpg" alt="landing" large/>                   
                        </div>
                    </ContentBlock>
               </Section>
                <Section innerRef={firstBlock}>
                    <HeaderBlock  className="pr-0">    
                        <SupTitle small>Popular</SupTitle>
                        <TrackingTitle>Places</TrackingTitle>
                        <SimpleText mini className="max-w-[200px]">take a glimpse of ukrain’s popular places to visit</SimpleText>
                    </HeaderBlock>
                    <ContentBlock >
                        <Places />
                    </ContentBlock>
               </Section>
               <Section>
                    <HeaderBlock>    
                        <TrackingTitle className="max-w-[400px]">
                            <span className="text-gray-500">
                                Travel facts about <span className="text-white">Ukraine</span>
                            </span>
                        </TrackingTitle>
                    </HeaderBlock>
                    <ContentBlock className="flex-col p-8 rounded-lg justify-center bg-image-footer" >
                        <div className="flex justify-between gap-32">   
                            {
                                [
                                    {id:"1", text:"Ukraine is large. It is actually the largest state in Europe. It has an area of 603,628 km2, making it 20 times bigger than Belgium."},
                                    {id:"2", text:"The largest desert in Europe is in Ukraine’s south. Oleshky Sands, located in 30 km east of Kherson is the largest expanse of sand in Europe."},
                                    {id:"3", text:"Ukraine is the world’s largest producer of sunflower seeds, so many that they’d cover the entire of Slovenia if you uprooted them!"}
                                ].map( (item) => (
                                    <SimpleText key={item.id} className="w-72 text-sm p-4 rounded-md bg-slate-900">{item.text}</SimpleText>
                                ))
                            }
                        </div>
                         <div className="flex justify-evenly">   
                            {
                                [
                                    {id:"4", text:"Optymistychna Cave is the longest cave in Eurasia and the fifth-longest cave in the world."},
                                    {id:"5", text:"Ukraine has about 50 ski resorts."},
                                ].map( (item) => (
                                    <SimpleText key={item.id} className="w-72 text-sm p-4 rounded-md bg-slate-900 ">{item.text}</SimpleText>
                                ))
                            }
                        </div>
                        
                    </ContentBlock>
               </Section>
               <Section>
                    <HeaderBlock>   
                        <SimpleText  className="max-w-[120px]" small>you’ve reached the end of this</SimpleText> 
                        <TrackingTitle className="max-w-[200px]">
                            <span>experi-</span>
                            <span>ence</span>
                        </TrackingTitle>
                        <SupTitle className="max-w-[220px] text-gray-400 font-semibold mt-24" mini>
                            MADE WITH LOVE BY <SimpleText className="text-red-400">RUSLAN KRASIY</SimpleText>
                            </SupTitle>
                    </HeaderBlock>
               </Section>
            </div>
        </div>
    )
}

export default Home;