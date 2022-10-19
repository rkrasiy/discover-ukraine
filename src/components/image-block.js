function ImageBlock ({item}) {
    const { title, subtitle, headerImage = "./no-image.png", subImage = "./no-image.png", text } = item;
    return (
        <div className="flex-auto flex flex-col">
            <div className="mb-4">
                <span className="text-gray-400 text-xs uppercase tracking-[0.3em] font-mono">{title}</span>
                <h2 className="text-white text-3xl font-semibold uppercase">{subtitle}</h2>
            </div>
            <div className="flex h-full gap-8">
                <img src={headerImage} alt="header" className="rounded-3xl w-[305px] h-full object-cover" />
                <div>
                    <img src={subImage} alt="sub" className="rounded-3xl w-[197px] h-[157px] object-cover my-4"/>         
                    <div className="flex max-w-xs">
                        <img src="./no-image.png" alt="icon" className="w-[30px] h-[118px] object-cover" /> 
                        <p className="ml-4 text-gray-400 text-[13px]">{text}</p>
                    </div>        
                </div>
            </div>
        </div>
    )
}

export default ImageBlock