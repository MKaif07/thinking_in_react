const SearchBar = ({
  filterText,
  onFilterTextChange,
  inStockOnly,
  onStockOnlyChange,
}) => {
  return (
    <form action="#" style={{ display: "flex", flexFlow: "column" }}>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        style={{ width: "17em" }}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />

      <label htmlFor="">
        <input
          type="checkbox"
          onChange={() => onStockOnlyChange(!inStockOnly)}
          checked={inStockOnly}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
