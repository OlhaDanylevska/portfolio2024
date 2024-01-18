import { Grid, IconButton, Link } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



const socianItems = [
    { icon: GitHubIcon, url: "https://github.com/OlhaDanylevska" },
    { icon: LinkedInIcon, url: "https://www.linkedin.com/in/olha-danylevska-117810a5/" },
    { icon: "Behance", url: "https://www.behance.net/OlhaDanilevskaya" }
]
const Social = ({ direction }) => {
    return (
        <Grid container direction={direction} spacing={2}>
            {socianItems.map((item) => (
                item.icon === "Behance" ?
                    <Grid item>
                        <Link href={item.url} target="_blank" rel="noopener noreferrer">
                            <IconButton>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                                    <g fill="#9b8bad" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(10.66667,10.66667)"><path d="M5,3c-1.10156,0 -2,0.89844 -2,2v14c0,1.10156 0.89844,2 2,2h14c1.10156,0 2,-0.89844 2,-2v-14c0,-1.10156 -0.89844,-2 -2,-2zM6.40625,7.6875h2.59375c2.30078,0 2.6875,1.41406 2.6875,2.3125c0,1.30078 -0.89453,1.71094 -1.09375,1.8125c0.19922,0.10156 1.21875,0.375 1.21875,1.875c0.10156,1.80078 -1.02344,2.5 -2.625,2.5h-2.78125zM13.40625,7.6875h3.6875v1h-3.6875zM8.09375,9.09375v2.09375h0.90625c0.60156,0 1,-0.19922 1,-1c0,-0.69922 -0.30078,-1.09375 -1,-1.09375zM15.59375,9.8125c1.39844,0 2.40625,0.79297 2.40625,3.09375v0.6875h-3.40625c0,0.30078 0.01953,1.40625 1.21875,1.40625c0.80078,0 1.17578,-0.39453 1.375,-0.59375l0.71875,1c-0.10156,0.10156 -0.79297,0.90625 -2.09375,0.90625c-1.5,0 -2.71875,-0.80469 -2.71875,-2.90625v-0.5c0,-2.30078 1.19922,-3.09375 2.5,-3.09375zM15.40625,11.09375c-0.30078,0 -0.90625,0.11328 -0.90625,1.3125h1.6875c0,0 0.21875,-1.3125 -0.78125,-1.3125zM8.09375,12.5v2.3125h1.09375c0.60156,0 0.90625,-0.42578 0.90625,-1.125c0.10156,-0.80078 -0.17969,-1.1875 -0.78125,-1.1875z"></path></g></g>
                                </svg>
                            </IconButton>
                        </Link>
                    </Grid>
                    :
                    <Grid item>
                        <Link href={item.url} target="_blank" rel="noopener noreferrer">
                            <IconButton>
                                <item.icon style={{ color: "#9b8bad", width: 40, height: 40 }} />
                            </IconButton>
                        </Link>

                    </Grid>
            ))}

        </Grid>
    );
};

export default Social
