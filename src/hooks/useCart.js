import { useUIContext } from "../context/ui";


function useCart(product){
    const {cart, setCart} = useUIContext();

    const addToCart = () => {
        cart.findIndex (c => c.id === product.id) >=0
        ? setCart(cart.filter(c => c.id !== product.id))
        : setCart(c => [...c, product]);
    }

    const addToCartText = cart.findIndex (c => c.id === product.id) >=0
    ? "Aus dem Warenkorb entfernen" : "Dem Warenkorb hinzufügen";

    return {addToCart, addToCartText}

}
export default useCart;