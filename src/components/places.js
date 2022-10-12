function Places(props){
    return (
        <section className="flex-none px-24 snap-always snap-center">
                <div className="flex flex-row gap-8 h-full">
                    <div className="flex-auto flex flex-col items-baseline justify-center gap-4 p-8">
                        
                            <span className="text-gray-400">POPULAR</span>      
                            <h2 className="text-white text-5xl font-semibold">Places</h2>
                            <span className="text-gray-400">take a glimpse of africa’s popular places to visit</span>     
            
                            <button className="px-8 py-2 text-lg bg-red-500 rounded-lg">Button</button>
                        
                    </div>
                    <div className="flex-auto flex flex-col">
                        <div className="">
                            <p>Egypto</p>
                            <p>CAIRO</p>
                        </div>
                    <div className="flex h-full gap-8">
                        <div className="">
                            <img src="./no-image.png" className="rounded-3xl w-[305px] h-full object-cover" />
                        </div>
                        <div className="flex-auto flex flex-col gap-4 relative">
                            <img src="./no-image.png" className={`rounded-3xl w-[197px] h-[157px] object-cover`} />         
                                    
                            <div className="flex max-w-xs">
                                <img src="./no-image.png" className={`w-[30px] h-[118px] object-cover`} /> 
                                <p className="ml-4">Cairo can be overwhelming, as there's so much to see and do everywhere you turn. From Islamic Cairo's bustling Khan El-Khalili bazaar to the ancient Pyramids of Giza to the picturesque Nile River, you'll be immersed in this Egyptian city's history and culture before long.
                                </p>
                            </div>        
                        </div>
                    </div>
                    </div>
                </div>
        </section>
    )
}

export default Places