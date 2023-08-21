const ProductCategoryRow = ({ category }) => {
  return (
    <>
      <tr style={{ textAlign: "center" }}>
        <th colSpan="2">{category}</th>
      </tr>
    </>
  );
};

export default ProductCategoryRow;
