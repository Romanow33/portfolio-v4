import { AutoAwesome, ConnectWithoutContactOutlined, DnsOutlined, PreviewOutlined } from "@mui/icons-material";
import {
    Grid,
    Stack,
    Card,
    CardHeader,
    CardContent,
    Chip,
    Typography
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

    return (
        <Stack
            component={'section'}
            rowGap={8}
            minHeight={'100vh'}
            justifyContent={'center'}
            alignItems={'center'}
            py={8}
            width={'100vw'}
            backgroundColor={'gray'}
        >
            <Typography
                variant="h4"
                fontWeight={200}
                textAlign={'center'}
                color={'whitesmoke'}
            >
                Skills and technologies I know
            </Typography>
            <motion.div >
                <Grid container>
                    {SKILLS.map(skill => (
                        <Grid item xs={12} md={6} p={2} key={skill.tittle}>
                            <Card
                                sx={{
                                    borderRadius: '10px',
                                    backgroundColor: "transparent",
                                    border: "1px solid white",
                                    minHeight: skill.tittle === 'Other skills' ? 'auto' : 200
                                }}
                            >
                                <CardHeader title={skill.tittle} avatar={<skill.icon />} sx={{ color: "white" }} />
                                <CardContent>
                                    {skill.skills.map((item, index) => (
                                        <Chip label={item} sx={{ p: 1, m: 1, fontSize: "1.5rem" }} key={index} color="secondary" />
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