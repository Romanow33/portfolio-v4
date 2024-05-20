import { Button, Grid, Stack, CircularProgress, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react';
import { Element } from 'react-scroll';

export default function Contact() {
    const ref = useRef(null);
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
        <Stack
            component={'section'}
            rowGap={8}
            minHeight={'100vh'}
            justifyContent={'center'}
            alignItems={'center'}
            py={8}
            width={'100vw'}
            ref={ref}
            id="contact-section"
        >
            <Grid container sx={{ height: '100%' }}>
                <Grid item xs={12} md={6}>
                    <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} padding={{ md: 10, xs: 4 }} height={'100%'}>
                        <motion.h1 variant='body2' style={{ fontSize: '2rem' }}>
                            If you need someone responsible, contact me.
                        </motion.h1>
                        <motion.h2 variant='body1' style={{ marginTop: matches ? '5rem' : '3rem' }}>
                            Also consult for technologies that are not detailed above.
                        </motion.h2>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <AnimatePresence>
                        {!submitted ? <form style={{ height: '100%' }} onSubmit={handleSubmit} >
                            <Stack direction={'column'} justifyContent={'center'} alignItems={'flex-start'} padding={{ md: 10, xs: 4 }} height={'100%'}>
                                <label for="nombre" style={{ fontSize: '1.5rem', textAlign: 'left' }}>Full Name:</label>
                                <input type="text" id="nombre" name="nombre" required style={{ width: '100%', height: '50px', marginBottom: 20, fontSize: 20, padding: 10, fontWeight: 'lighter' }} />
                                <label for="email" style={{ fontSize: '1.5rem', textAlign: 'left' }}>Email:</label>
                                <input type="text" id="email" name="email" required style={{ width: '100%', height: '50px', marginBottom: 20, fontSize: 20, padding: 10, fontWeight: 'lighter' }} />
                                <label for="email" style={{ fontSize: '1.5rem', textAlign: 'left' }}>Message:</label>
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
        </Stack >
    )
}