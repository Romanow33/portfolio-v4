import { Button, Grid, Stack, CircularProgress, useMediaQuery } from '@mui/material';
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react';

export default function Contact(params) {
    const ref = useRef(null);
    const isInView = useInView(ref)
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [msg, setMsg] = useState('')
    const [error, setError] = useState(false)
    const matches = useMediaQuery('(min-width:600px)');
    const handleSubmit = async (event) => {
        setLoading(true)
        event.preventDefault(); // Previene el comportamiento predeterminado del formulario (recargar la página)

        const formData = new FormData(event.target); // Obtén los datos del formulario
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Hubo un problema al enviar el formulario.');
            }
            setSubmitted(true)
            setMsg('Contact form has been submitted success. Thank you for contacting me, I will contact you as soon as possible.')

        } catch (error) {
            setSubmitted(true)
            setMsg('Error sending contact please, try later')
            setError(true)
        }
        setLoading(false)
    };

    return (
        <motion.section style={{ height: 'auto', width: '50vh' }} ref={ref} id='contact-section'>
            <motion.div style={{
                minHeight: '100vh',
                width: '100vw',
                backgroundColor: isInView ? "white" : '#ffe6c1',
                transition: 'all ease 3s',
                paddingTop: 20
            }}>
                <Grid container sx={{ height: '100%' }}>
                    <Grid item xs={12} md={6}>
                        <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} padding={{ md: 10, xs: 4 }} height={'100%'}>
                            <motion.h1 variant='body2' style={{ fontSize: '2rem' }}>
                                If you need someone responsible who can work without supervision, who you can delegate work or trust with your ideas, contact me!
                            </motion.h1>
                            <motion.h2 variant='body1' style={{ marginTop: matches ? '5rem' : '3rem' }}>
                                If you need any special technology that is not detailed, contact me.<br />
                                I may know it.
                            </motion.h2>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <AnimatePresence>
                            {!submitted ? <form style={{ height: '100%' }} onSubmit={handleSubmit} >
                                <Stack direction={'column'} justifyContent={'center'} alignItems={'flex-start'} padding={{ md: 10, xs: 4 }} height={'100%'}>
                                    <label for="nombre" style={{ fontSize: '3rem', textAlign: 'left' }}>Your Name:</label>
                                    <input type="text" id="nombre" name="nombre" required style={{ width: '100%', height: '50px', marginBottom: 20, fontSize: 20, padding: 10, fontWeight: 'lighter' }} />
                                    <label for="email" style={{ fontSize: '3rem', textAlign: 'left' }}>Email:</label>
                                    <input type="text" id="email" name="email" required style={{ width: '100%', height: '50px', marginBottom: 20, fontSize: 20, padding: 10, fontWeight: 'lighter' }} />
                                    <label for="email" style={{ fontSize: '3rem', textAlign: 'left' }}>Message:</label>
                                    <textarea id="mensaje" name="mensaje" required style={{ width: '100%', height: '150px', marginBottom: 20, fontSize: 20, padding: 10, fontWeight: 'lighter' }}></textarea>
                                    <Stack width={'100%'}>
                                        <Button
                                            type='submit'
                                            variant='contained'
                                            disabled={loading}
                                            sx={{
                                                backgroundColor: '#ffe6c1', color: "gray",
                                                "&:hover": {
                                                    backgroundColor: 'gray', color: "white",
                                                }
                                            }}>
                                            {!loading ? 'Contact now' : <CircularProgress sx={{ color: "gray" }} />}
                                        </Button>
                                    </Stack>
                                </Stack>
                            </form> :
                                <Stack direction={'column'} justifyContent={'center'} alignItems={'flex-start'} padding={{ md: 10, xs: 4 }} height={'100%'} >
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <motion.h1
                                            variant='body2'
                                            style={{ fontSize: '2rem', color: error ? 'red' : 'green' }}
                                        >
                                            {msg}
                                        </motion.h1>
                                    </motion.div>
                                </Stack>
                            }
                        </AnimatePresence>
                    </Grid>
                </Grid>
            </motion.div>
        </motion.section >
    )
}