function ContentBlock(props){
    const {children, className, gap = "gap-32"} = props;
    let classes = "flex flex-row h-full";
    if(className) classes += " " + className
    if(gap) classes += " " + gap
    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default ContentBlock;