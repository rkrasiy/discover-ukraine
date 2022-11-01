function SimpleText(props){
    const {mini, small, large, className, children} = props;
    let fontSize = "text-[15px]";

    if(mini) fontSize = "text-[13px]";
    if(small) fontSize = "text-[14px]";
    if(large) fontSize = "text-[17px]";

    let classes = "text-gray-400 tracking-wider break-words " + fontSize;
    if(className) classes += " " + className

    return(
        <span className={classes}>{children}</span>
    )
}

export default SimpleText;