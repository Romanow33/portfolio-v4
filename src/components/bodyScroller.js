
import { Stack } from "@mui/material";
import HeaderCard from "./header";
import RoundedCards from "./roundedCards";
import ProjectList from "./projects/projectList";
import Skills from "./skils";
import Contact from "./contact";


export default function BodyController() {
    return (
        <Stack
            direction={'column'}
            width={'100%'}
            justifyContent={'center'}
            alignContent={'center'}
            sx={{ position: "relative" }}
        >
            <HeaderCard />
            <RoundedCards />
            <ProjectList />
            <Skills />
            <Contact />
        </Stack>
    );
}
