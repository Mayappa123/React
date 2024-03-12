import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const params = useParams();

    return (
        <div>
          Inside product details of {params.id}
        </div>
    )
}

export default ProductDetails;