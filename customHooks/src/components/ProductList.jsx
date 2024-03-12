import { useProductList} from "../hooks/useProductList";
import ProductCard from "./ProductCard";

const ProductList = () => {
const {products} = useProductList();

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id}
          title={product.title}
          imageUrl={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
