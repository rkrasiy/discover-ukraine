function Section(props){
    return (
        <section ref={props.innerRef} className="flex-none md:px-24 px-8 last:pr-12">
            <div className="flex flex-row gap-32 h-full">
                {props.children}
            </div>
        </section>
    )
}

export default Section