function TitlePlace(){
    return (
        <section className="flex-none px-24">
            <div className="flex flex-row gap-48 h-full">
                <div className="flex-auto flex flex-col items-baseline justify-center gap-4 p-8">
                    
                        <h2 className="text-white text-5xl font-semibold">Section title</h2>
                        <span className="text-gray-400">sub title text</span>    
                    
                        <button className="px-8 py-2 text-lg bg-red-500 rounded-lg">Button</button>
                    
                </div>
                <div className="flex flex-row gap-8 flex-auto">
                    <img src="./no-image.png" className="rounded-3xl w-[305px] h-[438px] object-cover mt-4" />
                    <div className="flex-auto flex flex-col relative">
                        <img src="./no-image.png" className={`rounded-3xl w-[110px] h-[125px] object-cover mb-4`} />        
                        <img src="./no-image.png" className={`rounded-3xl w-[107px] h-[118px] object-cover  mb-4`} />        
                        <img src="./no-image.png" className={`rounded-3xl w-[197px] h-[157px] object-cover absolute left-[131px] top-[18%]`} />        
                        <img src="./no-image.png" className={`rounded-3xl w-[256px] h-[195px] object-cover`} />        
                    </div>
                </div>
            </div>
        </section>
    )
} 

export default TitlePlace