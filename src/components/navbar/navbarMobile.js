import { IconButton } from "@mui/material";
import { NavbarContainer, NavbarHeader } from "../../styles/navbar";
import Actions from "./actions";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search"


export default function NavbarMobile({matches}){
    return (
        <NavbarContainer>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <NavbarHeader textAlign={"center"} variant="h4">
                Shisha
            </NavbarHeader>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <Actions matches={matches} />
        </NavbarContainer>

    );
}