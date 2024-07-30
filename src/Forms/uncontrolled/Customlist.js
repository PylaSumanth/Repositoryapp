const CustomList = ({ list }) => {
  console.log(list)
    return (
      <ul>
        {list.map((eachItem) => (
          <li>{eachItem}</li>
        ))}
      </ul>
    );
  };
  
  export default CustomList;