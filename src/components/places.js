import ImageBlock from "./image-block"

function Places(props){
    const  items = [
        {
            id: "1",
            title: "Karpatian",
            subtitle: "Goverla",
            text: "This is the highest peak of Ukraine with an altitude of 2,061 m. The mountain rises on the highest mountain range of the Ukrainian Carpathians – the Chornohora range.",
            headerImage: "./karpatian3.jpg",
            subImage: "./karpatian4.jpg",
        },
        {
            id: "2", 
            subtitle: "Lake Synevyr", 
            title: "Zakarpattia", 
            text: "Is one of the places where you can escape when you feel overwhelmed with daily worries and urban life problems. When you are tired of civilization and want to feel free, breathe fresh air, meditate and wander in the woods. This mysterious lake is perfect to recover spiritually and physically.",
            headerImage: "./synevyr5.jpg",
            subImage: "./synevyr.jpg",
        },
        {
            id: "3", 
            subtitle: "Kamianets-Podilskyi", 
            title: "Jmelnitski", 
            text: "Cairo can be overwhelming, as there's so much to see and do everywhere you turn. From Islamic Cairo's bustling Khan El-Khalili bazaar to the ancient Pyramids of Giza to the picturesque Nile River, you'll be immersed in this Egyptian city's history and culture before long.",
            headerImage: "./Kamianets-Podilskyi-2.jpg",
            subImage: "./Kamianets-Podilskyi.jpg",
        },
        {
            id: "4", 
            subtitle: "Lake Lemuria", 
            title : "Kherson",    
            text: "The Lakes’ pink color is a natural phenomenon, made from a combination of water, salt, sun and one micro-algae of great vitality.",
            headerImage: "./kherson.jpg",
            subImage: "./kherson-3.jpg",
        },
        {
            id: "5", 
            title: "Rivne", 
            subtitle: "Tunnel of Love", 
            text: "It is a railway surrounded by green arches and is three to five kilometers in length. It is known for being a favorite place for couples to take walks since trains pass thrice a day",
            headerImage: "./tonel4.jpg",
            subImage: "./tonel1.jpg",
        },
        {
            id: "6", 
            title: "Shitomur", 
            subtitle: "Uman", 
            text: "Cairo can be overwhelming, as there's so much to see and do everywhere you turn. From Islamic Cairo's bustling Khan El-Khalili bazaar to the ancient Pyramids of Giza to the picturesque Nile River, you'll be immersed in this Egyptian city's history and culture before long.",
            headerImage: "./uman.jpg",
            subImage: "./uman3.jpg",
        },
        {
            id: "7", 
            title: "Kiev", 
            subtitle: "The hill of windmills", 
            text: "Old wooden windmills, towering on the hill, are the compositional center of the whole complex",
            headerImage: "./mlunu-1.jpg",
            subImage: "./mlunu.jpg",
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