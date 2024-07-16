const CustomList = ({List})=> {
    return(
        <ul>
            {List.map((eachItem)=> (
            <li>{eachItem}</li>
            ))}
        </ul>
    );
};

export default CustomList;