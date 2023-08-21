import ProductCategoryRow from "./ProductCategoryRow";

const ProductTable = () => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      <ProductCategoryRow></ProductCategoryRow>
    </table>
  );
};

export default ProductTable;
