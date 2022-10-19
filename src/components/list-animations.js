function ListAnimations (){
    
    const tfn = {
        'linear': function(k) {
            return k;
        }, 
        'ease-in': function(k) {
            return Math.pow(k, 1.675);
        }, 
        'ease-out': function(k) {
            return 1 - Math.pow(1 - k, 1.675);
        }, 
        'ease-in-out': function(k) {
            return .5*(Math.sin((k - .5)*Math.PI) + 1);
        }
    };

    const arts = [
        {tag: "li", }
    ]

    return(
        <ul>
            {
                Object.keys(tfn).map( key => (
                    <p key={key} onClick={tfn[key]}>key</p>
                ))
            }
        </ul>
    )
}

export default ListAnimations;