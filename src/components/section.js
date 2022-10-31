function Section(props){
    return (
        <section ref={props.innerRef} className="flex-none px-24">
            <div className="flex flex-row gap-32 h-full">
                {props.children}
            </div>
        </section>
    )
}

export default Section