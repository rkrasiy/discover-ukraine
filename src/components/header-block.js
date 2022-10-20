function HeaderBlock({children}){
    return (
        <div className="flex-auto flex flex-col items-baseline justify-center gap-4 p-8">                
            {children}
        </div>
    )
}

export default HeaderBlock;