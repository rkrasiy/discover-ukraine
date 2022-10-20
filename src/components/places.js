import ImageBlock from "./image-block"

function Places(props){
    const  items = [
        {id: "1", title: "Egypto", subtitle: "Cairo", text: "Cairo can be overwhelming, as there's so much to see and do everywhere you turn. From Islamic Cairo's bustling Khan El-Khalili bazaar to the ancient Pyramids of Giza to the picturesque Nile River, you'll be immersed in this Egyptian city's history and culture before long."},
        {id: "2", title: "Egypto", subtitle: "Cairo", text: "Cairo can be overwhelming, as there's so much to see and do everywhere you turn. From Islamic Cairo's bustling Khan El-Khalili bazaar to the ancient Pyramids of Giza to the picturesque Nile River, you'll be immersed in this Egyptian city's history and culture before long."},
        {id: "3", title: "Egypto", subtitle: "Cairo", text: "Cairo can be overwhelming, as there's so much to see and do everywhere you turn. From Islamic Cairo's bustling Khan El-Khalili bazaar to the ancient Pyramids of Giza to the picturesque Nile River, you'll be immersed in this Egyptian city's history and culture before long."},
        {id: "4", title: "Egypto", subtitle: "Cairo", text: "Cairo can be overwhelming, as there's so much to see and do everywhere you turn. From Islamic Cairo's bustling Khan El-Khalili bazaar to the ancient Pyramids of Giza to the picturesque Nile River, you'll be immersed in this Egyptian city's history and culture before long."},
        {id: "5", title: "Egypto", subtitle: "Cairo", text: "Cairo can be overwhelming, as there's so much to see and do everywhere you turn. From Islamic Cairo's bustling Khan El-Khalili bazaar to the ancient Pyramids of Giza to the picturesque Nile River, you'll be immersed in this Egyptian city's history and culture before long."},
    ]

    return (
        <>
            {
                items.map( item => <ImageBlock key={item.id} item={item} />)
            }
        </>
    )
    return (
        <section className="flex-none px-24 snap-always snap-center">
            <div className="flex flex-row gap-32 h-full">
                <div className="flex flex-col justify-center gap-4">
                    
                    <span className="text-gray-400 text-sm uppercase tracking-[0.3em] font-mono">Popular</span>      
                    <h2 className="text-white text-6xl font-bold tracking-tighter">Places</h2>
                    <span className="text-gray-400 tracking-wider break-words max-w-[200px] text-[13px]">take a glimpse of africa’s popular places to visit</span>     
                    
                </div>
                <div className="flex flex-row gap-32 h-full">
                    {
                        items.map( item => <ImageBlock key={item.id} item={item} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Places