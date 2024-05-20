import { Stack, Link } from "@mui/material";
import HeaderCard from "./header";
import RoundedCards from "./roundedCards";
import ProjectList from "./projects/projectList";
import Skills from "./skils";
import Contact from "./contact";
import {
    ScrollContainer,
} from 'react-nice-scroll';
import 'react-nice-scroll/dist/styles.css';

export default function BodyController() {

    return (
        <ScrollContainer>
            <Stack
                direction={'column'}
                justifyContent={'center'}
                alignContent={'center'}
            >
                <HeaderCard />
                <RoundedCards />
                <ProjectList />
                <Skills />
                <Contact />
            </Stack>
        </ScrollContainer>
    );
}
