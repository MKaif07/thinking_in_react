import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";

const FilterableProductTable = () => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
        inStockOnly={inStockOnly}
        onStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        filterText={filterText}
        onFilterTextChange={setFilterText}
        inStockOnly={inStockOnly}
        onStockOnlyChange={setInStockOnly}
      />
    </div>
  );
};

export default FilterableProductTable;
