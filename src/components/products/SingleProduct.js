import { Product, ProductImage,  } from "../../styles/products";
import ProductMeta from "./productMeta";


export default function SingleProduct(products, matches) {


    return(
        <Product>
            <ProductImage src={products.images}/>
            <ProductMeta product={products} matches={matches} />
        </Product>
    );
}