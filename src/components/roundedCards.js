import { Button, Card, Divider, Link, Stack, Typography } from "@mui/material";
import {
    motion, useInView,
} from "framer-motion";
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useRef } from "react";
import { ArrowDownward, PriceCheck, Star } from "@mui/icons-material";




export default function RoundedCards() {

    const ref = useRef()
    const isInView = useInView(ref)

    return (
        <Stack component={'section'} justifyContent={'center'} alignItems={'center'} >
            <motion.h2
                ref={ref}
                style={{
                    color: isInView ? 'white' : 'black',
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
                    fontSize: isInView ? '10vw' : '3vw',
                    textAlign: 'center',
                    paddingBottom: 40
                }}
            >
                Why Me?
            </motion.h2>
            <Stack direction={{ sm: "row", xs: "column" }} justifyContent={{ md: 'space-evenly', xs: "center" }} alignItems={'center'} width={'100%'} rowGap={10} columnGap={10}>
                <Card
                    sx={{
                        padding: 4,
                        display: 'flex',
                        justifyContent: 'space-around',
                        borderRadius: '100%',
                        width: { md: 500, xs: 300 },
                        height: { md: 500, xs: 300 }
                    }}
                    elevation={20}
                >
                    <Stack>
                        <Stack direction={'column'} justifyContent={'flex-start'} alignItems={'center'}>
                            <GroupsIcon color="disabled" sx={{ fontSize: { xs: '2.3rem', md: "5rem" } }} />
                            <Typography variant="button" fontSize={{ xs: '1rem', md: "1.5rem" }} color={theme => theme.palette.grey[500]}>In your team</Typography>
                            <Divider orientation="horizontal" flexItem></Divider>
                        </Stack>
                        <Stack justifyContent={'space-around'} alignItems={'center'} height={'100%'} px={2}>
                            <Typography variant="subtitle1" color={theme => theme.palette.grey[500]} textAlign={'center'} fontSize={{ xs: '0.8rem', md: "1.4rem" }}>
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

                {/*           <Card
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
                </Card> */}
                <Card
                    sx={{
                        padding: 4,
                        display: 'flex',
                        justifyContent: 'space-around',
                        borderRadius: '100%',
                        width: { md: 500, xs: 300 },
                        height: { md: 500, xs: 300 }
                    }}
                    elevation={5}
                >
                    <Stack>
                        <Stack direction={'column'} justifyContent={'flex-start'} alignItems={'center'}>
                            <StoreIcon color="disabled" sx={{ fontSize: { xs: '2.3rem', md: "5rem" } }} />
                            <Typography variant="button" fontSize={{ xs: '1rem', md: "1.5rem" }} color={theme => theme.palette.grey[500]}>In your product</Typography>
                            <Divider orientation="horizontal" flexItem></Divider>
                        </Stack>
                        <Stack justifyContent={'space-around'} alignItems={'center'} height={'100%'} px={2}>
                            <Typography variant="subtitle1" color={theme => theme.palette.grey[500]} textAlign={'center'} fontSize={{ xs: '0.8rem', md: "1.4rem" }}>
                                Because i can listen and advise based on the latest market trends, devise infrastructure and design projects based on your requirements and scope.
                            </Typography>
                            <Link href="#contact-section">
                                <Button variant="contained"
                                    sx={{
                                        width: { md: "auto", xs: '120px' },
                                        backgroundColor: '#ffe6c1', color: "gray",
                                        "&:hover": {
                                            backgroundColor: 'gray', color: "#ffe6c1",
                                        }
                                    }}
                                    mt={2} endIcon={<PriceCheck />}>
                                    Contact
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                </Card>
            </Stack>
        </Stack >
    )
}