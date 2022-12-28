import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { clamp } from "./clamp";
import { Colors } from "../../../styles/theme";


export default function IncDec({product}) {
    const clampV = clamp(1, 10);
    const [value, setValue] = useState(1);
    const priceAfter = value * product.price;
    return (
      <Box display="flex">
        <IconButton
          sx={{
            borderRadius: 0,
            color: `${Colors.secondary}`,
          }}
          onClick={() => setValue(clampV(value - 1))}
        >
          <RemoveIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{

            m: 0,
          }}
        >
          <p>{value}</p>
        </Typography>
        <IconButton
          sx={{
            borderRadius: 0,
              color: `${Colors.secondary}`,
          }}
          onClick={() => setValue(clampV(value + 1))}
        >
          <AddIcon />
        </IconButton>
            <Typography id="total" sx={{ p: 3,
            }}  key={product.id}>Total: {( priceAfter ).toFixed(2)}</Typography>
            <br/>
      </Box>


    );
}