const ProductRow = ({ product }) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>
      <tr>
        <td>{product.name}</td>
      </tr>
    </span>
  );
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    </>
  );
};

export default ProductRow;
