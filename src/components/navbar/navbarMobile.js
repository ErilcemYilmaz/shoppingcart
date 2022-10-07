import { IconButton } from "@mui/material";
import { NavbarContainer, NavbarHeader } from "../../styles/navbar";
import Actions from "./actions";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search"
import { useUIContext } from "../../context/ui";


export default function NavbarMobile({ matches }) {

    const { setDrawerOpen, setShowSearchBox} = useUIContext()

    return (
        <NavbarContainer>
            <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <NavbarHeader textAlign={"center"} variant="h4">
                Shisha
            </NavbarHeader>
            <IconButton onClick={() => setShowSearchBox(true)}>
                <SearchIcon />
            </IconButton>
            <Actions matches={matches} />
        </NavbarContainer>

    );
}