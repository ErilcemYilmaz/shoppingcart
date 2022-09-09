
import { Divider, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavbarList, NavbarContainer, NavbarHeader } from "../../styles/navbar";
import SearchIcon from '@mui/icons-material/Search'
import Actions from "./actions";



export default function NavbarDesktop({matches}){
    return (
        <NavbarContainer>
            <NavbarHeader>
                Skrr pa
            </NavbarHeader>
            <NavbarList type="row">
                <ListItemText primary="Home"/>
                <ListItemText primary="Categories"/>
                <ListItemText primary="Products"/>
                <ListItemText primary="Contact Us"/>
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem/>
            </NavbarList>
            <Actions matches={matches} />
        </NavbarContainer>
    )
}