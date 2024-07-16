const Image =  ()=>{
    const Name="Mahendra Singh.Dhoni"
    const Image={
        name:"Mahendra Singh.Dhoni",
        occupation:"Cricketer",
        Batsman:"Right-handed",

    };
    const {name , occupation , Batsman }={Image}
    return(
        <div>
            
             <h2>name is {name}</h2>
             <h2> occupation is {occupation}</h2>
             <h2>Batsman is {Batsman} </h2>
             
        </div>
    )
}
export default Image;