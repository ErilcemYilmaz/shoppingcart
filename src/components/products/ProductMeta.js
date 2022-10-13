import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/products";




export default function ProductMeta({product, matches}){

    return(
        <ProductMetaWrapper>
            <Typography variant={matches ? "h6": "h5" } lineheight={0}>
                {product.name}
            </Typography>
            <Typography variant={matches ? "caption": "body1"}>
                CHF{product.price}
            </Typography>
        </ProductMetaWrapper>
    );
}