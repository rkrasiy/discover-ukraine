function FixedButtons({clicked, isVisible}) {

    let classes = isVisible ? "animate-goup" : "animate-godown"

    return (
        <div className={`transition fixed top-[100%] z-20 left-0 right-0 flex justify-around h-8 ${classes}`}>
            <Button onClick={()=>clicked(1)}>
                <img src="./icons/chevron-left.svg" alt="previous"/>
            </Button>
            <Button onClick={()=>clicked(-1)}>
                <img src="./icons/chevron-right.svg" alt="next"/>
            </Button>
        </div>
    )
}

function Button({children, onClick}){
    return (
        <button 
            className="px-3 py-2 border-gray-600 border rounded-full w-8 h-8" 
            onClick={ onClick }>{children}</button>
    )
}

export default FixedButtons;