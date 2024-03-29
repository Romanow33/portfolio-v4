import Head from "next/head";
import { Montserrat } from "next/font/google";
import { Box } from "@mui/material";
import { AnimatePresence, } from "framer-motion";
import BodyController from "@/components/bodyScroller";

const inter = Montserrat({ subsets: ["latin"], weight: "100" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ignacio Romanow</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={` ${inter.className}`}>
        <AnimatePresence>
          <Box minHeight={'101vh'}>
            <BodyController />
          </Box>
        </AnimatePresence>
      </main>
    </>
  );
}
