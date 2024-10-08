
import { Divider, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavbarList, NavbarContainer, NavbarHeader } from "../../styles/navbar";
import SearchIcon from '@mui/icons-material/Search'
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import { Colors } from "../../styles/theme";



export default function NavbarDesktop({matches}){

    const {setShowSearchBox} = useUIContext();
    return (
        <NavbarContainer>
            <NavbarHeader>
                Lalu Lounge
            </NavbarHeader>
            <NavbarList type="row">
                <ListItemText primary="Start"/>
                <ListItemText primary="Kategorien"/>
                <ListItemText primary="Produkte"/>
                <ListItemText primary="Kontaktiere uns"/>
                <ListItemButton>
                    <ListItemIcon className="SearchIcon">
                        <SearchIcon onClick={() => setShowSearchBox(true)}/>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem/>
            </NavbarList>
            <Actions matches={matches} />
        </NavbarContainer>
    )
}