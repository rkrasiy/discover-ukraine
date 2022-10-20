function Section({children}){
    return (
        <section className="flex-none px-24">
            <div className="flex flex-row gap-32 h-full">
                {children}
            </div>
        </section>
    )
}

export default Section