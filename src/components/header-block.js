function HeaderBlock(props){
    const {children, className} = props;
    let classes = "flex-auto flex flex-col items-baseline justify-center p-8"
    if(className) classes += " " + className
    return (
        <div className={classes}>                
            {children}
        </div>
    )
}

export default HeaderBlock;