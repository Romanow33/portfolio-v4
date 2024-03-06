import { Button, Card, Divider, Link, Stack, Typography } from "@mui/material";
import {
    motion, useInView,
} from "framer-motion";
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useRef } from "react";
import { ArrowDownward, PriceCheck, Star } from "@mui/icons-material";

const left = {
    offscreen: {
        opacity: 0,
        width: '100px'
    },
    onscreen: {
        width: '400px',
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 0.8
        }
    }
};

const rigth = {
    offscreen: {
        opacity: 0,
        width: '100px'
    },
    onscreen: {
        width: '400px',
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 0.8
        }
    }
};


export default function RoundedCards() {

    const ref = useRef()
    const isInView = useInView(ref)

    return (
        <motion.section
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.1 }}
            style={{ width: '100%', height: '102vh' }}
            ref={ref}
        >
            <motion.h2
                style={{
                    color: isInView ? 'white' : 'black',
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
                    fontSize: isInView ? '7rem' : '12rem',
                    textAlign: 'center',
                    marginBottom: "5rem"
                }}
            >
                Why Me?
            </motion.h2>
            <Stack direction={"row"} justifyContent={'space-evenly'} width={'100%'} rowGap={'200px'} >
                <motion.div
                    variants={rigth}
                >
                    <Card sx={{ height: '500px', width: '500px', padding: 4, display: 'flex', justifyContent: 'space-around', borderRadius: '100%' }} elevation={20}>
                        <Stack>
                            <Stack direction={'column'} justifyContent={'flex-start'} alignItems={'center'}>
                                <GroupsIcon color="disabled" fontSize="large" sx={{ fontSize: '5rem' }} />
                                <Typography variant="button" fontSize={'1.5rem'} color={theme => theme.palette.grey[500]}>In your team</Typography>
                                <Divider orientation="horizontal" flexItem></Divider>
                            </Stack>
                            <Stack justifyContent={'space-around'} alignItems={'center'} height={'100%'} px={2}>
                                <Typography variant="subtitle1" color={theme => theme.palette.grey[500]} textAlign={'center'} fontSize={20}>
                                    Because in addition to providing technical knowledge, I provide developed soft skills that improve communication, therefore the product and ideas for it.
                                </Typography>
                                <Link href="#contact-section">
                                    <Button
                                        variant="contained"
                                        mt={2}
                                        endIcon={<AlternateEmailIcon />}
                                        sx={{
                                            backgroundColor: '#ffe6c1', color: "gray",
                                            "&:hover": {
                                                backgroundColor: 'gray', color: "#ffe6c1",
                                            }
                                        }}
                                    >
                                        Contact
                                    </Button>
                                </Link>
                            </Stack>
                        </Stack>

                    </Card>
                </motion.div>
                <motion.div
                    style={{
                        position: 'relative'

                    }}
                    variants={left}
                >
                    <Card
                        sx={{
                            height: '225px',
                            zIndex: 0,
                            width: '225px',
                            padding: 2,
                            position: 'absolute',
                            bottom: -80,
                            right: -200,
                            display: 'flex',
                            justifyContent: 'space-around',
                            borderRadius: '100%',
                            display: isInView ? 'flex' : "none"
                        }}
                        elevation={10}
                    >
                        <Stack>
                            <Stack justifyContent={'space-around'} alignItems={'center'} height={'80%'}>
                                <Star sx={{ fontSize: '2rem', color: 'gray' }} />
                                <Typography variant="caption" color={theme => theme.palette.grey[500]} textAlign={'center'} fontSize={12}>
                                    Develop any type of project, business software, entertainment, ecommerce or whatever!
                                </Typography>
                            </Stack>
                        </Stack>
                    </Card>
                    <Card
                        sx={{
                            height: '500px',
                            width: '500px',
                            padding: 4,
                            display: 'flex',
                            justifyContent: 'space-around',
                            borderRadius: '100%',
                            zIndex: 9999
                        }}
                        elevation={5}
                    >
                        <Stack>
                            <Stack direction={'column'} justifyContent={'flex-start'} alignItems={'center'}>
                                <StoreIcon color="disabled" fontSize="large" sx={{ fontSize: '5rem' }} />
                                <Typography variant="button" fontSize={'1.5rem'} color={theme => theme.palette.grey[500]}>In your product</Typography>
                                <Divider orientation="horizontal" flexItem></Divider>
                            </Stack>
                            <Stack justifyContent={'space-around'} alignItems={'center'} height={'100%'} px={2}>
                                <Typography variant="subtitle1" color={theme => theme.palette.grey[500]} textAlign={'center'} fontSize={20}>
                                    Because i can listen and advise based on the latest market trends, devise infrastructure and design projects based on your requirements and scope.
                                </Typography>
                                <Link href="#contact-section">
                                    <Button variant="contained"
                                        sx={{
                                            backgroundColor: '#ffe6c1', color: "gray",
                                            "&:hover": {
                                                backgroundColor: 'gray', color: "#ffe6c1",
                                            }
                                        }}
                                        mt={2} endIcon={<PriceCheck />}>
                                        ask for budget
                                    </Button>
                                </Link>
                            </Stack>
                        </Stack>
                    </Card>

                </motion.div>
            </Stack>
        </motion.section >
    )
}