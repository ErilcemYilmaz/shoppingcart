import { useTheme } from "@emotion/react";
import { Avatar, Box, Button, Divider, Drawer, Paper, Typography, useMediaQuery } from "@mui/material";
import { useUIContext } from "../../context/ui";
import { Colors } from "../../styles/theme";
import IncDec from "../ui/indec";




export default function Cart() {

    const { cart, setShowCart, showCart } = useUIContext();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const cartContent = cart.map(item => (
        <Box key={item.id}>
            <Box
                display="flex"
                sx={{ pt: 2, pb: 2 }}
                alignItems="start"
                justifyContent={"space-between"}>
                <Avatar src={item.image} sx={{ width: 96, height: 96, mr: 2 }} />
                <Box display="flex" flexdirection={"column"}>
                    <Typography variant="h6" alignItems>{item.name}</Typography>
                    {!matches && <Typography variant="subtitle2">{item.description}</Typography>}
                </Box>
                <Typography variant="body1" justifyContent={"end"}>
                    {item.price}CHF
                </Typography>
            </Box>
            {matches && <Typography variant="subtitle2">{item.description}</Typography>}
            <Divider variant="inset" />
            <IncDec product={item} />

        </Box>
    ));

    return (
        <Drawer
            backgroundColor={Colors.body_bg}
            open={showCart}
            onClose={() => setShowCart(false)}
            anchor="right"
            PaperProps={{
                sx: {
                    width: matches ? '100%' : 500,
                    background: Colors.container_bg,
                    borderRadius: 0
                }
            }}>
            {cart.length > 0 ? <Box
                sx={{ p: 4 }}
                display="flex"
                justifyContent={"center"}
                flexDirection="column"
                alignItems="center">
                <Typography variant="h3" color={Colors.secondary}>Dein Warenkorb</Typography>
                <Typography variant="body1" color={Colors.muted}>
                    {" "}
                    Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
                    incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud.

                </Typography>
                <Paper
                    elevation={0} sx={{
                        mt: 2,
                        width: '90%',
                        padding: 4,
                        backgroundColor: Colors.body_bg,
                        color: Colors.white
                        
                    }}>
                    
                    {cartContent}
                </Paper>
                <Button sx={{ mt: 4 }} variant="contained">Zur Kasse</Button>
            </Box> : (<Box sx={{ p: 4 }}
                display="flex" justifyContent={"center"}
                flexdirection="column"
                alignItems="center">
                <Typography variant={matches ? "h5" : "h3"} color={Colors.secondary}>Warenkorb leer!</Typography>
            </Box>
            )}
            <Button onClick={() => setShowCart(false)}>Schliessen</Button>


        </Drawer>
    )

}