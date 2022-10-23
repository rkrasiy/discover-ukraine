import Places from "../components/places";
import Section from "../components/section";
import { useHorizontalScroll } from "../useSideScroll";
import HeaderBlock from "../components/header-block";
import ContentBlock from "../components/content-block";
import {SupTitle, TrackingTitle, SimpleTitle} from "../components/titles";
import SimpleText from "../components/simple-text";
import Image from "../components/image";

function Home (){
   const scrollRef = useHorizontalScroll(); 
    return (
        <div className="relative h-[60vh] overflow-hidden py-8">
            <div ref={scrollRef} className="flex  md:flex-row will-change-transform flex-col backface-hidden absolute top-0 left-0 transition-left gap-32 h-full pb-12">
                <Section>
                    <HeaderBlock>
                        <SimpleTitle big>Section title</SimpleTitle>
                        <SimpleText mini>sub title text</SimpleText>    
                        <button className="px-8 py-2 text-lg bg-red-500 rounded-lg">Button</button>
                    </HeaderBlock>
                    <ContentBlock className="flex-auto" gap="gap-8">
                        <Image src="./no-image.png" alt="principal" className="mt-4" huge />
                        <div className="flex-auto flex flex-col relative">
                            <Image src="./no-image.png" alt="people" className="mb-4" small />   
                            <Image src="./no-image.png" alt="traditional symbol icon" className="mb-4" mini />         
                            <Image src="./no-image.png" alt="culture" className="absolute left-[131px] top-[18%]"/>               
                            <Image src="./no-image.png" alt="landing" large/>                   
                        </div>
                    </ContentBlock>
               </Section>
                <Section>
                    <HeaderBlock>    
                        <SupTitle small>Popular</SupTitle>
                        <TrackingTitle>Places</TrackingTitle>
                        <SimpleText mini className="max-w-[200px]">take a glimpse of africa’s popular places to visit</SimpleText>
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
                    <ContentBlock >

                    </ContentBlock>
               </Section>
               <Section>
                    <HeaderBlock>   
                        <SimpleText  className="max-w-[120px]" small>you’ve reached the end of this</SimpleText> 
                        <TrackingTitle className="max-w-[200px]">
                            <span>experi-</span>
                            <span>ence</span>
                        </TrackingTitle>
                        <SupTitle className="max-w-[220px] text-gray-400 font-semibold mt-8" mini>
                            MADE WITH LOVE BY <SimpleText className="text-red-400">RUSLAN KRASIY</SimpleText>
                            </SupTitle>
                    </HeaderBlock>
               </Section>
            </div>
        </div>
    )
}

export default Home;