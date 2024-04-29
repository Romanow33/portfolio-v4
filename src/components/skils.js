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
        <Stack direction={'column'} justifyContent={{ sm: 'space-evenly', xs: 'space-evenly' }} alignItems={'center'} minHeight={'100vh'} ref={ref}>
            <motion.h2
                style={{
                    fontSize: '3rem',
                    backgroundImage: isInView ? 'linear-gradient(270deg, rgba(255,255,255,1) 81%, rgba(40,40,40,1) 100%)' : 'linear-gradient(270deg, rgba(255,255,255,1) 81%, rgba(40,40,40,1) 100%)',
                    backgroundSize: isInView ? '2000%' : '100%',
                    WebkitTextFillColor: 'transparent',
                    MozBackgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    transition: 'all ease 3s',
                    textAlign: "center",
                    pb: 80
                }}>

                My Skills
            </motion.h2>
            <motion.div
                style={{
                    visibility: isInView ? 'visible' : 'hidden',
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
                }}
            >
                <Grid container>
                    {SKILLS.map(skill => (
                        <Grid item md={skill.tittle === 'Other skills' ? 12 : 4} xs={12} p={2} key={skill.tittle}>
                            <Card
                                sx={{
                                    borderRadius: '10px',
                                    backgroundColor: "transparent",
                                    border: "1px solid gray",
                                    minHeight: skill.tittle === 'Other skills' ? 'auto' : 200
                                }}
                            >
                                <CardHeader title={skill.tittle} avatar={<skill.icon />} />
                                <CardContent>
                                    {skill.skills.map((item, index) => (
                                        <Chip label={item} sx={{ p: 1, m: 1 }} key={index} color="secondary" />
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