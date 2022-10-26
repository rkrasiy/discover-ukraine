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
                    <HeaderBlock className="w-72">
                        <SimpleTitle huge>Discover Ukraine</SimpleTitle>
                        <SimpleText mini className="mt-4 mb-6">take a glimpse of ukrain’s bewitching attractions</SimpleText>    
                        <button className="px-8 py-2 text-lg bg-red-500 rounded-lg tracking-[2px]">Explore</button>
                    </HeaderBlock>
                    <ContentBlock className="flex-auto" gap="gap-8">
                        <Image src="./kiev8.jpg" alt="principal" className="mt-4" huge />
                        <div className="flex-auto flex flex-col relative">
                            <Image src="./ukranians.jpg" alt="people" className="mb-4" small />   
                            <Image src="./icon-b.jpg" alt="traditional symbol icon" className="mb-4" mini />         
                            <Image src="./karpatian.jpg" alt="culture" className="absolute left-[131px] top-[18%]"/>               
                            <Image src="./ukranians6.jpg" alt="landing" large/>                   
                        </div>
                    </ContentBlock>
               </Section>
                <Section>
                    <HeaderBlock>    
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