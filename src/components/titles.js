function SimpleTitle(props){
    const { className, small, mini, large, big, huge } = props;
    let fontSize = "text-4xl";
    let classes = "font-semibold text-white";

    if(className) classes  += " " + className;

    if(mini) fontSize = "text-xl";
    if(small) fontSize = "text-2xl";
    if(large) fontSize = "text-3xl";
    if(big) fontSize = "text-5xl";
    if(huge) fontSize = "text-6xl";
    classes += " " + fontSize;
    
    return (
        <h2 className={classes}>{props.children}</h2>
    )
}

function TrackingTitle(props){
    const { className } = props;
    let classes = "text-6xl font-bold tracking-tighter text-white indent-[-4px]";
    if(className) classes  += " " + className
    return (
        <h2 className={classes}>{props.children}</h2>
    )
}

function SupTitle(props){
    const { className, small, mini, large, big, huge } = props;
    let fontSize = "text-base";
    let classes = "text-gray-400 uppercase tracking-[0.3em] font-mono";
    if(className) classes  += " " + className
    if(mini) fontSize = "text-xs";
    if(small) fontSize = "text-sm";
    if(large) fontSize = "text-md";
    if(big) fontSize = "text-lg";
    if(huge) fontSize = "text-xl";
    classes += " " + fontSize;
    return (
        <span className={classes}>{props.children}</span>      
    )
}

export {
    SimpleTitle,
    TrackingTitle,
    SupTitle
}