import { Button, Stack, Typography } from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import { Email } from "@mui/icons-material";
import { useGlobalState } from "react-nice-scroll";

export default function RoundedCards() {

    const [smoothScrollBar] = useGlobalState('smoothScrollBar');

    const handleScrollTo = () => {
        if (smoothScrollBar) {
            const el = document.querySelector('#contact-section');
            smoothScrollBar.scrollIntoView(el);
        }
    };

    return (
        <Stack
            component={'section'}
            rowGap={8}
            minHeight={'100vh'}
            justifyContent={'center'}
            alignItems={'center'}
            width={'100vw'}
            sx={{
                backgroundColor: 'gray',
                transition: 'all ease .5s',
            }}
        >

            <Typography
                variant="h4"
                fontWeight={200}
                textAlign={{ md: "left", xs: "center" }}
                color={'white'}
            >
                What do I contribute to
            </Typography>

            <Stack direction={{ sm: "row", xs: "column" }} justifyContent={{ md: 'space-evenly', xs: "center" }} alignItems={'center'} width={'100%'} rowGap={10} columnGap={10}>
                <Stack color={'white'}>
                    <Stack direction={'column'} justifyContent={'flex-start'} alignItems={'center'} pb={4}>
                        <GroupsIcon color="disabled" sx={{ fontSize: { xs: '2.3rem', md: "5rem" }, color: 'white' }} />
                        <Typography variant="button" fontSize={{ xs: '1rem', md: "1.5rem" }} color={'white'}>Your product</Typography>
                    </Stack>
                    <Stack justifyContent={'space-around'} alignItems={'center'} height={'100%'} px={4}>
                        <Typography variant="h6" color={theme => theme.palette.getContrastText} textAlign={'center'} mb={2}>
                            providing technical knowledge, I provide developed soft skills that improve communication, therefore the product and ideas for it.
                        </Typography>
                    </Stack>
                </Stack>
                <Stack color={'white'}>
                    <Stack direction={'column'} justifyContent={'flex-start'} alignItems={'center'} pb={4}>
                        <StoreIcon color="disabled" sx={{ fontSize: { xs: '2.3rem', md: "5rem" }, color: 'white' }} />
                        <Typography variant="button" fontSize={{ xs: '1rem', md: "1.5rem" }} color={'white'}>Your product</Typography>
                    </Stack>
                    <Stack justifyContent={'space-around'} alignItems={'center'} height={'100%'} px={4}>
                        <Typography variant="h6" color={theme => theme.palette.getContrastText} textAlign={'center'} mb={2}>
                            listening and advising based on the latest market trends, devising infrastructure and designing projects based on your requirements and scope.
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack justifyContent={'center'} alignItems={'center'}>

                <Button
                    size="large"
                    variant="contained"
                    sx={{
                        fontSize: 20,
                        backgroundColor: '#ffe6c1', color: "black",
                        "&:hover": {
                            backgroundColor: 'gray', color: "#ffe6c1",
                        }
                    }}
                    endIcon={<Email />}
                    onClick={() => {
                        handleScrollTo()
                    }}
                >
                    Contact
                </Button>

            </Stack>
        </Stack>
    )
}