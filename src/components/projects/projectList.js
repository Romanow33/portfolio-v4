import { Card, Stack, Typography } from "@mui/material";
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
        <Stack sx={{ width: '100%', height: '110vh' }} justifyContent={'center'} alignItems={'center'} rowGap={10} ref={ref}>
            <motion.h2 style={{
                fontSize: '6rem',
                backgroundImage: isInView ? 'linear-gradient(270deg, rgba(255,255,255,1) 81%, rgba(40,40,40,1) 100%)' : 'linear-gradient(270deg, rgba(255,255,255,1) 81%, rgba(40,40,40,1) 100%)',
                backgroundSize: isInView ? '2000%' : '100%',
                WebkitTextFillColor: 'transparent',
                MozBackgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                transition: 'all ease 3s'

            }}>
                Look at My Latest Works
            </motion.h2>
            <Stack direction={'row'} columnGap={3} >
                {projects.map((project, i) => {
                    return (
                        <motion.div
                            initial="offscreen"
                            exit="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: false, amount: 0.8 }}
                            custom={i}
                            variants={variants}
                            transition={{ duration: 0.1 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    )
                })}
            </Stack>
            <motion.div
                initial="offscreen"
                exit="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.8 }}
                custom={1}
                variants={variants}
                transition={{ duration: 0.1 }}
                style={{ width: "100%", display: 'flex', justifyContent: 'center' }}
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