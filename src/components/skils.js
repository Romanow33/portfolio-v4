import { Box, Grid, Stack, Typography } from "@mui/material";
import { motion, useInView } from 'framer-motion'
import { useRef } from "react";

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref)

    return (
        <motion.div
            style={{ height: "100vh", display: 'flex', justifyContent: 'center' }}

        >
            <Stack direction={'row'} justifyContent={'flex-start'} alignItems={'center'}>
                <motion.h2
                    style={{
                        color: isInView ? 'white' : 'gray',
                        width: isInView ? '30%' : '100%',
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
                        fontSize: isInView ? '11rem' : '20rem',
                        transform: isInView ? 'rotate(-0.25turn)' : 'rotate(0turn)',
                        textAlign: isInView ? 'center' : 'left',
                        transitionDelay: '100ms'
                    }}>

                    Skills
                </motion.h2>
                <Grid container justifyContent={'flex'} alignItems={'center'} direction={'row'} width={isInView ? "100%" : "0"}
                    sx={{
                        translate: isInView ? "0px" : "2000px",
                        transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 4.0s",
                        transitionDelay: '200ms'
                    }}
                >
                    <Grid xs={4}>
                        <Stack direction={'column'}>
                            <Typography variant="overline" color={'black'} fontSize={'2.5rem'} >
                                Backend
                            </Typography>
                            <Stack direction={'row'} columnGap={10}>
                                <Box>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        NodeJs
                                    </Typography>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        Python
                                    </Typography>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        Amplify
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        Express
                                    </Typography>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        Django
                                    </Typography>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        AWS
                                    </Typography>
                                </Box>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid xs={4}>
                        <Stack direction={'column'}>
                            <Typography variant="overline" color={'black'} fontSize={'2.5rem'} >
                                Frontend
                            </Typography>
                            <Stack direction={'row'} columnGap={10}>
                                <Box>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        Typescript
                                    </Typography>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        ReduxJs
                                    </Typography>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        Sass
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        ReactJS
                                    </Typography>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        NextJs
                                    </Typography>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        CSS
                                    </Typography>
                                </Box>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid xs={4} >
                        <Stack direction={'column'}>
                            <Typography variant="overline" color={'black'} fontSize={'2.5rem'} >
                                Soft Skills
                            </Typography>
                            <Stack direction={'row'} columnGap={10}>
                                <Box>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        Leadership
                                    </Typography>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        Collaboration
                                    </Typography>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        Commitment
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        Effective communication
                                    </Typography>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        Quick learning
                                    </Typography>
                                </Box>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid xs={12} mt={4}>
                        <Stack direction={'column'} justifyContent={'center'}>
                            <Typography variant="overline" color={'black'} fontSize={'2.5rem'} textAlign={'left'} >
                                Other skills
                            </Typography>
                            <Stack direction={'row'} columnGap={10}>
                                <Box>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        Stripe
                                    </Typography>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        Material ui
                                    </Typography>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        Graphql
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        MercadoPago Integration
                                    </Typography>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        Socket.io
                                    </Typography>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        MongoJs
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        Framer Emotion
                                    </Typography>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        SQL
                                    </Typography>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        Git
                                    </Typography>

                                </Box>
                                <Box>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        Google cloud
                                    </Typography>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        Docker
                                    </Typography>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        Vercel
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        Render
                                    </Typography>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        Postgres
                                    </Typography>
                                    <Typography variant="h6" color={'gray'} gutterBottom>
                                        Shopify Integration
                                    </Typography>
                                </Box>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
            <footer ref={ref}></footer>
        </motion.div >
    )
}