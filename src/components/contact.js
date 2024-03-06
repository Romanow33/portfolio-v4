import { Button, Grid, Stack, TextField } from '@mui/material';
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react';

export default function Contact(params) {
    const ref = useRef(null);
    const isInView = useInView(ref)

    return (
        <motion.section style={{ height: 'auto', width: '100vw' }} ref={ref} id='contact-section'>
            <motion.div style={{
                minHeight: '110vh',

                width: '100vw',
                backgroundColor: isInView ? "white" : '#ffe6c1',
                transition: 'all ease 3s',
                paddingTop: 20
            }}>
                <Grid container sx={{ height: '100%' }}>
                    <Grid xs={12} md={6}>
                        <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} padding={10} height={'100%'}>
                            <motion.h1 variant='body2' style={{ fontSize: '3rem' }}>
                                If you need someone responsible who can work without supervision, who you can delegate work or trust with your ideas, contact me!
                            </motion.h1>
                            <motion.h2 variant='body1' style={{ marginTop: '10rem' }}>
                                If you need any special technology that is not detailed, contact me.<br />
                                I may know it.
                            </motion.h2>
                        </Stack>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <form action="mailto:romanowignacio1@gmail.com" method="POST" enctype="text/plain" name="contact" netlify style={{ height: '100%' }}>
                            <Stack direction={'column'} justifyContent={'center'} alignItems={'flex-start'} padding={10} height={'100%'}>
                                <label for="nombre" style={{ fontSize: '3rem', textAlign: 'left' }}>Nombre:</label>
                                <input type="text" id="nombre" name="nombre" required style={{ width: '100%', height: '50px', marginBottom: 20, fontSize: 20, padding: 10, fontWeight: 'lighter' }} />
                                <label for="email" style={{ fontSize: '3rem', textAlign: 'left' }}>Email:</label>
                                <input type="text" id="email" name="email" required style={{ width: '100%', height: '50px', marginBottom: 20, fontSize: 20, padding: 10, fontWeight: 'lighter' }} />
                                <label for="email" style={{ fontSize: '3rem', textAlign: 'left' }}>Message:</label>
                                <textarea id="mensaje" name="mensaje" required style={{ width: '100%', height: '150px', marginBottom: 20, fontSize: 20, padding: 10, fontWeight: 'lighter' }}></textarea>
                                <Stack width={'100%'}>
                                    <Button type='submit' variant='contained'
                                        sx={{
                                            backgroundColor: '#ffe6c1', color: "gray",
                                            "&:hover": {
                                                backgroundColor: 'gray', color: "white",
                                            }
                                        }}>
                                        Submit
                                    </Button>
                                </Stack>
                            </Stack>
                        </form>
                    </Grid>
                </Grid>
            </motion.div>
        </motion.section>
    )
}