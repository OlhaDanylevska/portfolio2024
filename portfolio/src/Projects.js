import data from "./project-data.json"
import { Grid, Typography, Card, CardMedia, CardContent, CardActions, IconButton, Chip, Hidden, Link } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const TagsComponent = ({ tags }) => {
    return (
        tags.map((tag) => (
            <Chip sx={{
                marginRight: { lg: "0.5rem", xs: "0.5rem" }, mb: { xs: "0.5rem" }
            }}
                label={tag} key={tag}></Chip>
        ))
    )
}

const Project = ({ title, links, description, imageUrl, tags }) => {
    return (
        <Grid item lg={8} sm={11} xs={11} sx={{ mb: "2rem" }}>
            <Card sx={{
                display: "flex",
                textAlign: "left",
                backgroundColor: "rgba(155, 139, 173, 0.6)"
            }}>
                <div>
                    <CardContent sx={{ margin: { lg: "1rem", sm: '0.5rem', xs: '0.5rem' } }}>

                        <Typography variant="h4" paragraph>{title}</Typography>
                        <Typography variant="subtitle1" paragraph>{description}</Typography>
                        <Hidden smUp>
                            <TagsComponent tags={tags} />
                        </Hidden>

                    </CardContent>
                    <CardActions >
                        <Grid container justifyContent="space-between" direction="row-reverse" alignItems="flex-start" >
                            <Grid item sx={{ ml: "1rem" }}>
                                <Hidden smDown>
                                    <TagsComponent tags={tags} />
                                </Hidden>
                            </Grid>
                            <Grid item sx={{ ml: "1rem" }}>
                                {links.map((link) => (
                                    link.icon === "GitHubIcon" ?
                                        <Link href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">
                                            < IconButton>
                                                <GitHubIcon fontSize="large" />
                                            </IconButton>
                                        </Link>
                                        :
                                        <Link href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">
                                            < IconButton  >
                                                <OpenInNewIcon fontSize="large" />
                                            </IconButton>
                                        </Link>
                                ))}
                            </Grid>
                        </Grid>
                    </CardActions>
                </div>
                <Hidden smDown>
                    <CardMedia sx={{
                        minWidth: 200,
                    }} image={imageUrl}></CardMedia>
                </Hidden>
            </Card>
        </Grid >

    )
}

const Projects = () => {
    const allProjects = data
    return (
        <Grid container id="projects" lg={12} sm={12} xs={12} justifyContent="center" alignItems='center' mb="6rem">
            <Grid item lg={8} sm={11} xs={11} pt={8} sx={{ mb: { xs: "1rem" } }} >
                <Typography variant="h3" sx={{ color: "#9b8bad", fontWeight: "400", textAlign: "left" }}>
                    Projects
                </Typography>
            </Grid>
            {allProjects.map((project) => (
                <Project {...project} />
            ))}
        </Grid >

    )
}
export default Projects