import { Card, Divider, Link, Stack, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import img from '../../public/yo.png'
import { GitHub, LinkedIn } from "@mui/icons-material";
import { useRef } from "react";

export default function HeaderCard() {
    const ref = useRef()

    return (
        <Stack component={'section'} justifyContent={'center'} alignItems={'center'} >
            <Card sx={{ height: 'auto', width: '100%', padding: { lg: 4, md: 2, xs: 0.20 }, display: 'flex', justifyContent: 'space-around', flexDirection: 'column', position: 'relative' }} ref={ref}>
                <Stack direction={{ md: 'row', xs: 'column' }} justifyContent={'flex-start'} alignItems={'center'} columnGap={{ md: 12, sm: 5 }} rowGap={4}>
                    <Image src={img} height={150} width={150} style={{ borderRadius: "100%", backgroundColor: '#E0E0E0' }} alt='Personal Image' />
                    <Stack rowGap={2}>
                        <Typography variant="h2" fontWeight={200} fontSize={{ md: 30, lg: 35, xs: 20 }} textAlign={{ md: "left", xs: "center" }}>Ignacio Romanow</Typography>
                        <Typography variant="button" fontWeight={300} width={'100%'} textAlign={'center'} fontSize={{ md: 20, lg: 20, xs: 14 }}>
                            Software developer | Custom development for you
                        </Typography>
                    </Stack>
                </Stack>

                <Stack justifyContent={'flex-end'} alignItems={"flex-end"} direction={'row'} columnGap={2} px={2}>
                    <Tooltip title='Ignacio Romanow | Linkedin'>
                        <Link href="https://linkedin.com/in/ignacio-romanow/" target="_blank">
                            <LinkedIn fontSize="large" sx={{ fontSize: { md: 50, lg: 70, xs: 35 }, color: '#E0E0E0' }} />
                        </Link>
                    </Tooltip>
                    <Divider orientation="vertical" flexItem />
                    <Tooltip title='@Romanow33 | Github'>
                        <Link href="https://github.com/Romanow33" target="_blank">
                            <GitHub sx={{ fontSize: { md: 50, lg: 70, xs: 35 }, color: '#E0E0E0' }} />
                        </Link>
                    </Tooltip>
                </Stack>
            </Card>
        </Stack >
    )
}