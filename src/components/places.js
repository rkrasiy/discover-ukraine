import ImageBlock from "./image-block"

function Places(props){
    const  items = [
        {
            id: "1",
            title: "Karpatian",
            subtitle: "Goverla",
            text: "This is the highest peak of Ukraine with an altitude of 2,061 m. The mountain rises on the highest mountain range of the Ukrainian Carpathians – the Chornohora range.",
            headerImage: "./karpatian-goverla.jpg",
            subImage: "./karpatian-winter.jpg",
        },
        {
            id: "2", 
            subtitle: "Lake Synevyr", 
            title: "Zakarpattia", 
            text: "Is one of the places where you can escape when you feel overwhelmed with daily worries and urban life problems. When you are tired of civilization and want to feel free, breathe fresh air, meditate and wander in the woods. This mysterious lake is perfect to recover spiritually and physically.",
            headerImage: "./lake-synevyr.jpg",
            subImage: "./lake-synevyr-karpatian.jpg",
        },
        {
            id: "3", 
            subtitle: "Kamianets-Podilskyi", 
            title: "Jmelnitski", 
            text: "Cairo can be overwhelming, as there's so much to see and do everywhere you turn. From Islamic Cairo's bustling Khan El-Khalili bazaar to the ancient Pyramids of Giza to the picturesque Nile River, you'll be immersed in this Egyptian city's history and culture before long.",
            headerImage: "./kamianets-podilskyi-wall.jpg",
            subImage: "./kamianets-podilskyi-castle.jpg",
        },
        {
            id: "4", 
            subtitle: "Lake Lemuria", 
            title : "Kherson",    
            text: "The Lakes’ pink color is a natural phenomenon, made from a combination of water, salt, sun and one micro-algae of great vitality.",
            headerImage: "./lake-lemuria-kherson.jpg",
            subImage: "./lake-lemuria-kherson-pink.jpg",
        },
        {
            id: "5", 
            title: "Rivne", 
            subtitle: "Tunnel of Love", 
            text: "It is a railway surrounded by green arches and is three to five kilometers in length. It is known for being a favorite place for couples to take walks since trains pass thrice a day",
            headerImage: "./tunnel-of-love-ukraine-rivne.jpg",
            subImage: "./tunnel-of-love-winter-ukraine-rivne.jpg",
        },
        {
            id: "6", 
            title: "Shitomur", 
            subtitle: "Uman", 
            text: "Cairo can be overwhelming, as there's so much to see and do everywhere you turn. From Islamic Cairo's bustling Khan El-Khalili bazaar to the ancient Pyramids of Giza to the picturesque Nile River, you'll be immersed in this Egyptian city's history and culture before long.",
            headerImage: "./city-lake-uman.jpg",
            subImage: "./wooden-bridge-uman.jpg",
        },
        {
            id: "7", 
            title: "Kiev", 
            subtitle: "The hill of windmills", 
            text: "Old wooden windmills, towering on the hill, are the compositional center of the whole complex",
            headerImage: "./windmills-wooden-old-mils-ukraine.jpg",
            subImage: "./windmills-wooden-old-mils-ukraine-kiev.jpg",
        },
    ]

    return (
        <>
            {
                items.map( item => <ImageBlock key={item.id} item={item} />)
            }
        </>
    )
}

export default Places