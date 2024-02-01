import { AppBar, Container, Toolbar, Hidden, IconButton, Divider, ListItem, Drawer, List, Link } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import React from "react";


const navigationLinks = [
    { name: "Main", href: "#main" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "https://drive.google.com/file/d/1x4RWmDqvXhGCXqPzf9jaA0xl6UzoCEb-/view?usp=sharing" }
];


const Header = React.forwardRef((props, ref) => {
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
                                target={item.name === "Resume" ? "_blank" : "_self"}
                                sx={{
                                    marginRight: "20px",
                                    fontWeight: "600",
                                    color: "white",
                                    textDecoration: "none",
                                    transition: "color 0.3s",
                                    "&:hover": {
                                        color: "#3d3d3d",
                                    }
                                }}
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
                                target={item.name === "Resume" ? "_blank" : "_self"}
                                anchor="left"
                                color="#3d3d3d"
                                marginRight="1rem"
                                variant="button"
                                underline="none"
                                href={item.href}
                                sx={{ "&:hover": { color: "red" } }}
                            >
                                {item.name}
                            </Link>

                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </AppBar >
    );
})


export default Header;
