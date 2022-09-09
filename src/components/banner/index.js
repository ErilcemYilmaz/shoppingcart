import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material"
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from '../../styles/banner'

export default function Banner () {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <BannerContainer>
            <BannerImage src="images/banner/banner.png"/>
            <BannerContent>
                <Typography variant="h6">Grosse Kollektion</Typography>
                <BannerTitle variant="h2">Neue Sorte</BannerTitle>
                <BannerDescription variant="subtitle">skrr paaaaa</BannerDescription>
            </BannerContent>
        </BannerContainer>
        
    );
}