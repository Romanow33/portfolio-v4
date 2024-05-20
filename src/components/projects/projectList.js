import { Card, Stack, Typography, Grid } from "@mui/material";
import ProjectCard from "./projectCard";
import projects from "@/projects";
import { color, motion, useInView } from 'framer-motion'
import { useRef } from "react";
import Link from "next/link";
import { GitHub } from "@mui/icons-material";

export default function ProjectList() {

    const variants = {
        onscreen: i => ({
            opacity: 1,
            rotateY: 0,
            transition: {
                delay: i * 0.1,
            },
        }),
        offscreen: i => ({
            opacity: 0,
            transition: {
                delay: i * 0.1,
            },
        }),
    }


    return (
        <Stack
            component={'section'}
            rowGap={8}
            minHeight={'100vh'}
            justifyContent={'center'}
            alignItems={'center'}
            py={8}
            width={'100vw'}
        >
            <Typography
                variant="h4"
                fontWeight={200}
                textAlign={'center'}
                color={'gray'}
            >
                Look at my latest works
            </Typography>
            <Grid container justifyContent={'center'} alignItems={'center'} direction={'row'} >
                {projects.map((project, i) => {
                    return (
                        <Grid item xs={12} sm={6} md={6} lg={3} p={{ xs: 2, md: 1 }} key={i}>
                            <motion.div
                                key={i}
                                initial="offscreen"
                                exit="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: false, amount: 0.3 }}
                                custom={i}
                                style={{ width: "100%", display: "flex", justifyContent: "center" }}
                                variants={variants}
                                transition={{ duration: 0.1 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        </Grid>
                    )
                })}
            </Grid>

            <motion.div
                key={5}
                initial="offscreen"
                exit="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.3 }}
                custom={5}
                style={{ width: "100%", display: "flex", justifyContent: "center" }}
                variants={variants}
                transition={{ duration: 0.1 }}
            >
                <Link href="https://github.com/Romanow33" target="_blank" style={{ width: 'auto', }}>
                    <Card
                        severity="info"
                        sx={{
                            width: '100%',
                            height: '100px',
                            borderRadius: '10px',
                            padding: 4,
                            cursor: 'pointer',
                            backgroundColor: "transparent",
                            border: "1px solid gray"
                        }}
                        elevation={1}
                    >
                        <Stack justifyContent={'center'} alignItems={'center'} height={'100%'}>
                            <Typography variant="h6">
                                To check more projects, see my Github
                            </Typography>
                            <GitHub sx={{ fontSize: '50px', color: 'gray' }} />
                        </Stack>
                    </Card>
                </Link>
            </motion.div>
        </Stack >
    )
}