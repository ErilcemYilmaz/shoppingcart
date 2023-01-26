import { useTheme } from "@mui/material/styles";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { products } from "../../fake_data"
import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";
import { useState } from "react";
import Select from 'react-select';
import {customStyles_Selected} from '../../styles/products'




export default function Products() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [category, setCategory] = useState("Alle");
    const [selectValue, setSelectValue] = useState("Alle");

    let filteredProduct = products.filter(product => product.categories === category || category === 'Alle');

    let categories = new Set(products.map(product => product.categories))
    
    return (
        <Container>
            <Select
                styles={customStyles_Selected}
                options={[
                    { value: 'Alle', label: 'Alle' },
                    ...Array.from(categories).map((category) => ({ value: category, label: category }))
                ]}
                onChange={(selectedOption) => {
                    setSelectValue(selectedOption);
                    setCategory(selectedOption.value);
                }}
                value={selectValue}
                placeholder="Alle"
            />
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
