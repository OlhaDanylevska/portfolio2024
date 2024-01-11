import { AppBar, Container, Toolbar, Hidden, IconButton, Divider, ListItem, Drawer, List, Link } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import React from "react";


const navigationLinks = [
    { name: "Main", href: "#main" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "https://drive.google.com/file/d/1Hcq77pYp87EPTw8ULQw-oDdrVuksxYxZ/view?usp=sharing" }
];


const Header = React.forwardRef((props, ref) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: 'rgba(217, 175, 217, 0.5)',
                boxShadow: 'none',
            }}
        >
            <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "right" }}>
                <Toolbar>
                    <Hidden smDown>
                        {navigationLinks.map((item, index) => (
                            <Link
                                key={index}
                                anchor="right"
                                sx={theme.link}
                                underline="none"
                                variant="button"
                                href={item.href}
                            >
                                {item.name}
                            </Link>

                        ))}
                    </Hidden>
                    <Hidden smUp>
                        <IconButton onClick={() => setOpen(true)}>
                            <MenuIcon style={{ color: "white" }} />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </Container>
            <Drawer open={open} anchor="right" onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
                <div>
                    <IconButton>
                        <ChevronRightIcon anchor="right" onClick={() => setOpen(false)} />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {navigationLinks.map((item, index) => (
                        <ListItem key={index}>
                            <Link
                                anchor="left"
                                color="black"
                                marginRight="1rem"
                                variant="button"
                                underline="none"
                                href={item.href}
                            >
                                {item.name}
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </AppBar>
    );
})


export default Header;
