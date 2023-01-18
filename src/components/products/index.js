import { useTheme } from "@mui/material/styles";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { products } from "../../fake_data"
import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";
import { useState } from "react";
import Select from '@mui/material/Select';
import { Colors } from "../../styles/theme";


export default function Products() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [category, setCategory] = useState("all");
    const [selectValue, setSelectValue] = useState("all");

    let filteredProduct = products.filter(product => product.categories === category || category === 'all');

    let categories = new Set(products.map(product => product.categories))

    return (
        <Container>
            <Select
                // IconComponent={() => <ArrowDropDownIcon style={{marginRight:10,pointerEvents:'none'}}/>}
                labelStyle={{ color: '#ff0000' }}
                sx={{
                    color: "white",
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: Colors.secondary,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: Colors.secondary,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: Colors.primary,
                    },
                    '.MuiSvgIcon-root ': {
                        fill: Colors.secondary,
                    }
                }}
                native
                value={selectValue}
                onChange={(e) => {
                    setSelectValue(e.target.value);
                    setCategory(e.target.value);
                }}
            >
                <option value="all">All</option>
                {Array.from(categories).map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </Select>
            <Grid container
                spacing={{ xs: 3, md: 4 }}
                justifyContent={"center"}
                sx={{ margin: "20px 4px 10px 4px" }}
                columns={{ xs: 2, sm: 8, md: 12 }}
            >
                {filteredProduct.map((product) => (
                    <Grid item key={product.id}
                        xs={2}
                        sm={4}
                        md={4}
                        display="flex" flexDirection={"column"} alignItems="center"
                    >
                        {matches ? (
                            <SingleProduct product={product} matches={matches} category={category} setCategory={setCategory} />
                        ) : (
                            <SingleProductDesktop product={product} matches={matches} category={category} setCategory={setCategory} />
                        )}
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
