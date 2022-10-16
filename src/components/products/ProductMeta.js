import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/products";
import { Colors } from "../../styles/theme";




export default function ProductMeta({product, matches}){

    return(
        <ProductMetaWrapper>
            <Typography color={Colors.white} variant={matches ? "h6": "h5" } lineheight={0}>
                {product.name}
            </Typography>
            <Typography color={Colors.white}  variant={matches ? "caption": "body1"}>
                {product.price} CHF
            </Typography>
        </ProductMetaWrapper>
    );
}