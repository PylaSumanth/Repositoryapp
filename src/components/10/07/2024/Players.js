export const Image=(prop)=>{
    const {html,css,js,react }=prop

    return(
        <img
        class="image"
        src={html}
        alt={css}
        width={js}
        height={react}
        />
    );
}
export const Heading1=(prop)=>{
    const {title="default"} = prop;

    return(
        <h1>Name :{prop.title}</h1>
    );
}
export const Heading2=(prop)=>{
    const {Trophies="default"} =  prop;

    return(
        <h1>Trophies :{prop.trophies}</h1>
    );
}
export const Heading3=(prop)=>{
    const {Players="default"} = prop;

    return(
        <h1>Players :{prop.players}</h1>
    );
}
