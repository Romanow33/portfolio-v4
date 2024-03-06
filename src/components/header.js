import { Avatar, Card, CardHeader, Divider, Link, Stack, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import img from '../../public/yo.png'
import { motion, useInView } from "framer-motion";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { useRef } from "react";

export default function HeaderCard() {
    const ref = useRef()
    const isInView = useInView(ref)

    return (
        <Stack component={'section'} height={"102vh"} justifyContent={'center'} alignItems={'center'} px={10} >
            <Card sx={{ height: '50vh', width: '100%', padding: 4, display: 'flex', justifyContent: 'space-around', flexDirection: 'column', position: 'relative' }} elevation={20} ref={ref}>
                <motion.h2
                    style={{
                        color: isInView ? 'black' : 'white',
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
                        textAlign: 'center',
                        position: "absolute",
                        fontSize: '4rem',
                        right: 40,
                        top: isInView ? 20 : -100,
                        color: "gray"
                    }}
                >
                    Who i Am?
                </motion.h2>
                <CardHeader
                    sx={{ width: '100%', padding: 4, display: 'flex', justifyContent: 'space-around', width: '100%', mt: 5 }}
                    title={<Typography variant="h2" fontWeight={200} ml={4}>Ignacio Romanow</Typography>}
                    subheader={
                        <Typography variant="button" fontWeight={300} textAlign={'center'} ml={4}>
                            Software developer | Custom development for you
                        </Typography>
                    }
                    avatar={
                        <Avatar variant="circular" sx={{ height: 250, width: 250, backgroundColor: '#e7cb91bd' }} >
                            <Image src={img} height={250} width={250} />
                        </Avatar>
                    }
                />
                <Stack justifyContent={'flex-end'} alignItems={"flex-end"} direction={'row'} columnGap={2}>
                    <Tooltip title='Ignacio Romanow | Linkedin'>
                        <Link href="https://www.linkedin.com/in/ignacio-romanow/" target="_blank">
                            <LinkedIn fontSize="large" sx={{ fontSize: '70px', color: 'gray' }} />
                        </Link>
                    </Tooltip>
                    <Divider orientation="vertical" flexItem />
                    <Tooltip title='@Romanow33 | Github'>
                        <Link href="https://github.com/Romanow33" target="_blank">
                            <GitHub sx={{ fontSize: '70px', color: 'gray' }} />
                        </Link>
                    </Tooltip>
                </Stack>
            </Card>
        </Stack >
    )
}