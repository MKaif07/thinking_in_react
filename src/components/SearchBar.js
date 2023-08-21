const SearchBar = () => {
  return (
    <form action="#" style={{display:'flex', flexFlow:'column'}}>
      <input type="text" placeholder="Search..." style={{width: '17em'}}/>
      <label htmlFor="">
        <input type="checkbox" name="" id="" />
        {" "} Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
