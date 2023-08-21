import stock from "../data/stock";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = () => {
  const rows = [];
  let lastCategory = null;

  stock.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
      // console.log(product, product.category);
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
    console.log(product);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
