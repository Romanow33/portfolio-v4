import { Divider, Fab, Link, Stack, Typography } from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import { Email } from "@mui/icons-material";

export default function RoundedCards() {
    return (
        <Stack
            justifyContent={'space-evenly'}
            alignItems={'center'}
            sx={{
                backgroundColor: 'gray',
                transition: 'all ease .5s',
                minHeight: '110vh',
                height: '100vh'
            }}
            component={'div'}
        >
            <motion.h2 style={{
                fontSize: '3rem',
                transition: 'all ease .5s',
                color: 'white',
                textAlign: "center",
            }}>
                What do I contribute to
            </motion.h2>

            <Stack direction={{ sm: "row", xs: "column" }} justifyContent={{ md: 'space-evenly', xs: "center" }} alignItems={'center'} width={'100%'} rowGap={10} columnGap={10}>
                <Stack color={'white'}>
                    <Stack direction={'column'} justifyContent={'flex-start'} alignItems={'center'} pb={4}>
                        <GroupsIcon color="disabled" sx={{ fontSize: { xs: '2.3rem', md: "5rem" }, color: 'white' }} />
                        <Typography variant="button" fontSize={{ xs: '1rem', md: "1.5rem" }} color={theme => theme.palette.getContrastText}>In your team</Typography>
                        <Divider orientation="horizontal" flexItem></Divider>
                    </Stack>
                    <Stack justifyContent={'space-around'} alignItems={'center'} height={'100%'} px={10}>
                        <Typography variant="subtitle1" color={theme => theme.palette.getContrastText} textAlign={'center'} fontSize={{ xs: '0.8rem', md: "1.4rem" }} mb={2}>
                            Because in addition to providing technical knowledge, I provide developed soft skills that improve communication, therefore the product and ideas for it.
                        </Typography>
                    </Stack>
                </Stack>
                <Divider variant="fullWidth" orientation="vertical" sx={{ borderColor: 'white', color: "white" }} flexItem />
                <Stack color={'white'}>
                    <Stack direction={'column'} justifyContent={'flex-start'} alignItems={'center'} pb={4}>
                        <StoreIcon color="disabled" sx={{ fontSize: { xs: '2.3rem', md: "5rem" }, color: 'white' }} />
                        <Typography variant="button" fontSize={{ xs: '1rem', md: "1.5rem" }} color={'white'}>In your product</Typography>
                        <Divider orientation="horizontal" flexItem></Divider>
                    </Stack>
                    <Stack justifyContent={'space-around'} alignItems={'center'} height={'100%'} px={10}>
                        <Typography variant="subtitle1" color={theme => theme.palette.getContrastText} textAlign={'center'} fontSize={{ xs: '0.8rem', md: "1.4rem" }} mb={2}>
                            Because i can listen and advise based on the latest market trends, devise infrastructure and design projects based on your requirements and scope.
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack justifyContent={'center'} alignItems={'center'}>
                <Link href="#contact-section">
                    <Fab
                        size="large"
                        variant="extended"
                        mt={2}
                        sx={{
                            fontSize: '1vw',
                            width: "15vw",
                            height: "5vw",
                            backgroundColor: '#ffe6c1', color: "black",
                            "&:hover": {
                                backgroundColor: 'gray', color: "#ffe6c1",
                            }
                        }}
                    >
                        Contact <Email sx={{ ml: 2 }} />
                    </Fab>
                </Link>
            </Stack>
        </Stack>
    )
}