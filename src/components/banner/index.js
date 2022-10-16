import { useTheme } from "@mui/material/styles";
import { Paper, Typography, useMediaQuery } from "@mui/material"
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from '../../styles/banner'
import { Colors } from "../../styles/theme";

export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Paper elevation={24} >
            <BannerContainer>
                <BannerImage src="images/products/ostobacco.png" />
                <BannerContent sx={{color: Colors.white}}>
                    <Typography variant="h6">Grosse Kollektion</Typography>
                    <BannerTitle variant="h2">Neue Sorte</BannerTitle>
                    <BannerDescription variant="subtitle">Os Tabacco</BannerDescription>
                    <BannerShopButton color="primary">Jezt Bestellen</BannerShopButton>
                </BannerContent>
            </BannerContainer>
        </Paper>

    );
}