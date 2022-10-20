import SimpleText from "./simple-text";
import { SimpleTitle, SupTitle } from "./titles";
import Image from "./image";

function ImageBlock ({item}) {
    const { title, subtitle, headerImage = "./no-image.png", subImage = "./no-image.png", text } = item;
    return (
        <div className="flex-auto flex flex-col">
            <div className="mb-4">
                <SupTitle mini>{title}</SupTitle>
                <SimpleTitle className="text-white uppercase" large>{subtitle}</SimpleTitle>
            </div>
            <div className="flex h-full gap-8">
                <Image src={headerImage} alt="main" huge className="h-full" />
                <div>
                    <Image src={subImage} alt="sub" className="my-4"/>     
                    <div className="flex max-w-xs items-center">
                        <img src="./icon1a.png" alt="icon" className="h-[70px] object-cover" /> 
                        <SimpleText className="ml-4" mini>{text}</SimpleText>
                    </div>        
                </div>
            </div>
        </div>
    )
}

export default ImageBlock