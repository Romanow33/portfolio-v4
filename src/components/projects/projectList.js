import { Card, Stack, Typography, Grid } from "@mui/material";
import ProjectCard from "./projectCard";
import projects from "@/projects";
import { motion, useInView } from 'framer-motion'
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

    const ref = useRef(null);
    const isInView = useInView(ref)


    return (
        <Stack component={'section'} justifyContent={'center'} alignItems={'center'} ref={ref}>
            <motion.h2 style={{
                fontSize: '10vw',
                backgroundImage: isInView ? 'linear-gradient(270deg, rgba(255,255,255,1) 81%, rgba(40,40,40,1) 100%)' : 'linear-gradient(270deg, rgba(255,255,255,1) 81%, rgba(40,40,40,1) 100%)',
                backgroundSize: isInView ? '2000%' : '100%',
                WebkitTextFillColor: 'transparent',
                MozBackgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                transition: 'all ease 3s',
                textAlign: "center",
                paddingBottom: 40

            }}>
                Look at My Latest Works
            </motion.h2>
            <Grid container justifyContent={'center'} alignItems={'center'} direction={'row'} pb={10}>
                {projects.map((project, i) => {
                    return (
                        <Grid item xs={12} sm={6} md={6} lg={3} p={{ xs: 2, md: 1 }}>
                            <motion.div
                                key={i}
                                initial="offscreen"
                                exit="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: false, amount: 0.8 }}
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
                viewport={{ once: false, amount: 0.8 }}
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
                            padding: 8,
                            cursor: 'pointer'
                        }}
                        elevation={4}
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
        </Stack>
    )
}