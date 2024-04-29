import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Link } from '@mui/material';

export default function ProjectCard({ project }) {

    return (
        <Card
            sx={{
                maxWidth: 400,
                minHeight: 450,
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                borderRadius: '10px',
                backgroundColor: "transparent",
                border: "1px solid gray"
            }}
            elevation={2}
        >
            <Image
                src={project.img}
                title={`Project image - ${project.tittle}`}
                alt={`Project image - ${project.tittle}`}
                style={{
                    width: "100%",
                    height: 'auto',
                    objectFit: 'cover',
                    minHeight: 200,
                    maxHeight: 200
                }}
            />
            <CardContent sx={{ color: "black" }}>
                <Typography gutterBottom variant="h5" component="div">
                    {project.tittle}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    {project.subtitle}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {project.description}
                </Typography>
            </CardContent>
            <CardActions>
                {project.appLink && <Button size="small">
                    <Link sx={{ textDecoration: 'none' }} href={project.appLink} target="_blank">
                        View app
                    </Link>
                </Button>}
                {project.repo && <Button size="small">
                    <Link sx={{ textDecoration: 'none' }} href={project.appLink} target="_blank">
                        View code
                    </Link>
                </Button>}
            </CardActions>
        </Card>
    );
}