import { AutoAwesome, ConnectWithoutContactOutlined, DnsOutlined, PreviewOutlined } from "@mui/icons-material";
import {
    Grid,
    Stack,
    Card,
    CardHeader,
    CardContent,
    Chip
} from "@mui/material";
import { motion, useInView } from 'framer-motion'
import { useRef } from "react";


const SKILLS = [
    {
        tittle: "Backend",
        skills: [
            'NodeJs',
            'Python',
            'Amplify',
            'Express',
            'Django',
            'AWS'
        ],
        icon: DnsOutlined
    },
    {
        tittle: "Frontend",
        skills: [
            'Typescript',
            'ReduxJs',
            'Sass',
            'ReactJS',
            'NextJs',
            'CSS',
        ],
        icon: PreviewOutlined
    },
    {
        tittle: "Soft Skills",
        skills: [
            'Soft Skills',
            'Leadership',
            'Collaboration',
            'Commitment',
            'Effective communication',
            'Quick learning',
        ],
        icon: ConnectWithoutContactOutlined
    },
    {
        tittle: "Other skills",
        skills: [
            'Stripe',
            'Material ui',
            'Graphql',
            'MercadoPago Integration',
            'Socket.io',
            'MongoJs',
            'Framer Emotion',
            'SQL',
            'Git',
            'Google cloud',
            'Docker',
            'Vercel',
            'Render',
            'Postgres',
            'Shopify Integration'
        ],
        icon: AutoAwesome
    },
]



export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref)

    return (
        <Stack direction={'row'} justifyContent={{ sm: 'flex-start', xs: 'center' }} alignItems={'center'} position={'relative'} minHeight={'100vh'} ref={ref}>
            <motion.h2
                style={{
                    color: isInView ? 'transparent' : 'gray',
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
                    fontSize: '30vw',
                    position: "absolute",
                    top: '0%',
                    left: '0%',
                    textAlign: "center",
                    width: "100%",
                    height: "100%"
                }}>

                Skills
            </motion.h2>
            <motion.div
                style={{
                    visibility: isInView ? 'visible' : 'hidden',
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
                    transitionDelay: '1000ms'
                }}
            >
                <Grid container>
                    {SKILLS.map(skill => (
                        <Grid item md={skill.tittle === 'Other skills' || skill.tittle === 'Soft Skills' ? 12 : 6} xs={12} p={2} key={skill.tittle}>
                            <Card>
                                <CardHeader title={skill.tittle} avatar={<skill.icon />} />
                                <CardContent>
                                    {skill.skills.map((item, index) => (
                                        <Chip label={item} sx={{ p: 1, m: 1 }} key={index} />
                                    ))}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </motion.div>
        </Stack>
    )
}