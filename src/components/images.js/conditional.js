const Conditionalrendering=(prop)=>{
    const {sumanth}=prop;
    
    return(
        <>

{sumanth.length==0?(<h1>The given array length is 0</h1>):(<h1>The given array length is{`${sumanth.length}`} </h1>)}
        </>
    );
};
export default Conditionalrendering ;