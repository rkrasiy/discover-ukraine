import { useRef } from "react";
import { useHorizontalScroll, movingElement } from "../useSideScroll";
import Section from "../components/section";
import HeaderBlock from "../components/header-block";
import ContentBlock from "../components/content-block";
import {SupTitle, TrackingTitle, SimpleTitle} from "../components/titles";
import SimpleText from "../components/simple-text";
import Image from "../components/image";
import ImageBlock from "../components/image-block";
import {placesJson, travelFactsJson} from "../storage";

function Home (){
    const scrollRef = useHorizontalScroll(); 
    const firstBlock = useRef(); 

    const clickHandler = ()=>{
        const moveTo = -Math.abs(firstBlock.current.offsetLeft);
        movingElement(scrollRef.current, moveTo , 120)
    }

    return (
        <div className="relative lg:h-[520px] overflow-x-hidden pb-8">
            <div ref={scrollRef} className="flex flex-row will-change-transform backface-hidden transition-left gap-32 h-full">
                <Section>
                    <HeaderBlock className="w-72">
                        <SimpleTitle huge>Discover Ukraine</SimpleTitle>
                        <SimpleText mini className="mt-4 mb-6">take a glimpse of ukrain’s bewitching attractions</SimpleText>    
                        <button className="px-8 py-2 text-lg bg-yellow-500 rounded-lg tracking-[2px] uppercase font-semibold" onClick={clickHandler}>Explore</button>
                    </HeaderBlock>
                    <ContentBlock className="flex-auto" gap="gap-8">
                        <Image src="./images/sunflower-ukraine.jpg" alt="principal" className="mt-4" huge />
                        <div className="flex-auto flex flex-col relative">
                            <Image src="./images/karpatian-ukraine.jpg" alt="people" className="mb-4" small />   
                            <Image src="./images/map-ukraine.png" alt="traditional symbol icon" className="mb-4" mini object="object-contain" />                
                            <Image src="./images/karpatian-village-ukraine.jpg" alt="culture" className="absolute left-[131px] top-[18%]"/>               
                            <Image src="./images/ukranian-wreath.jpg" alt="landing" large/>                   
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
                        {
                            placesJson.map( item => <ImageBlock key={item.id} item={item} />)
                        }
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
                    <ContentBlock className="p-8 rounded-lg bg-image-footer max-w-7xl" >
                        <div className="flex justify-evenly content-evenly gap-20 flex-wrap items-baseline ">   
                            {
                               travelFactsJson.map( (item) => (
                                    <SimpleText
                                        key={item.id} 
                                        className="w-72 text-slate-300 p-4 rounded-md bg-zinc-900"
                                        small>{item.text}</SimpleText>
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
                        <SupTitle className="max-w-[220px] font-semibold mt-24 text-yellow-600" mini>
                            MADE WITH LOVE IN Ivano-Frankivsk, Ukraine
                            </SupTitle>
                    </HeaderBlock>
               </Section>
            </div>
        </div>
    )
}

export default Home;