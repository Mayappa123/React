import { Link, Outlet } from "react-router-dom";

const Products = () => {
    return (
      <div className="product">
        <div>
          <h2 className="heading">Products Page</h2>
        </div>
        
        <Link
          className="products"
          to="1"
        >
          Product 1
        </Link>

        <Link
          className="products"
          to="2"
        >
          Product 2
        </Link>

        <Link
          className="products"
          to="3"
        >
          Product 3
        </Link>

        <Outlet />
      </div>
    );
}

export default Products;