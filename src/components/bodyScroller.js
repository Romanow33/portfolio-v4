import { Stack, Link } from "@mui/material";
import HeaderCard from "./header";
import RoundedCards from "./roundedCards";
import ProjectList from "./projects/projectList";
import Skills from "./skils";
import Contact from "./contact";

export default function BodyController() {
    return (
        <>
            <Stack
                direction={'column'}
                width={'100%'}
                justifyContent={'center'}
                alignContent={'center'}
                mb={20}
            >
                <HeaderCard />
                <RoundedCards />
                <ProjectList />
                <Skills />
            </Stack>
            <Contact />
            <footer>
                <Stack p={2}>
                    <Link href="https://linkedin.com/in/ignacio-romanow/" target="_blank" sx={{ color: "black", textAlign: 'center' }} variant="caption">
                        @IRomanow {new Date().getFullYear()}
                    </Link>
                </Stack>
            </footer>
        </>
    );
}
