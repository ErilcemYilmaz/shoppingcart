import { Product, ProductActionsWrapper, ProductImage, ProductFavButton, ProductActionButton, ProductAddToCart } from "../../styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import { Stack } from "@mui/material";
import ProductDetail from "../productdetail";
import useDialogModal from "../../hooks/useDialogModal";
import useCart from "../../hooks/useCart";


export default function SingleProduct({ product, matches }) {
    const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
    useDialogModal(ProductDetail);

    const {addToCart, addToCartText} = useCart(product);

    return (
        <>
            <Product>
                <ProductImage src={product.image} />
                <ProductMeta product={product} matches={matches} />
                <ProductActionsWrapper>
                    <Stack direction="row">
                        <ProductFavButton isFav={0}>
                            <FavoriteIcon />
                        </ProductFavButton>
                        <ProductActionButton>
                            <ShareIcon color="primary" />
                        </ProductActionButton>
                        <ProductActionButton onClick={() => showProductDetailDialog()}>
                            <FitScreenIcon color="primary" />
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
            <ProductAddToCart onClick={addToCart} variant="contained">{addToCartText}</ProductAddToCart>
            <ProductDetailDialog product={product} />
        </>
    );
}