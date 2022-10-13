import { Product, ProductActionsWrapper, ProductImage, ProductFavButton, ProductActionButton, ProductAddToCart } from "../../styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import { Stack } from "@mui/material";
import { useState } from "react";
import ProductDetail from "../productdetail";
import useDialogModal from "../../hooks/useDialogModal";
import useCart from "../../hooks/useCart";


export default function SingleProduct({ product, matches }) {


    const [showOptions, setShowOptions] = useState(false);
    const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
    useDialogModal(ProductDetail);
    const {addToCart, addToCartText} = useCart(product);
    const handleMouseEnter = () => {
        setShowOptions(true);
    }
    const handleMouseLeave = () => {
        setShowOptions(false);
    }

    return (
        <>
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ProductImage src={product.image} />
                <ProductFavButton isFav={0}>
                    <FavoriteIcon />
                </ProductFavButton>
                {
                    showOptions && <ProductAddToCart onClick={addToCart} show={showOptions} variant="contained">{addToCartText}</ProductAddToCart>
                }
                <ProductActionsWrapper show={showOptions || matches}>
                <Stack direction={matches ? "row" : "column"}>
                        <ProductActionButton>
                            <ShareIcon color="primary" />
                        </ProductActionButton>
                        <ProductActionButton onClick={() => showProductDetailDialog()}>
                            <FitScreenIcon color="primary" />
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
            <ProductMeta product={product}/>
            <ProductDetailDialog product={product} />
        </>
    );
}