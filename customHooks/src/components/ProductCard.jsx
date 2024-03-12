const ProductCard = (title, imageUrl, price) => {
  return (
    <>
      <p>{title}</p>
      <img src={imageUrl} />
      <p>{price}</p>
      
    </>
  );
};
export default ProductCard;
