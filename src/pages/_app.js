import "@/styles/globals.css";
import { DefaultSeo } from 'next-seo';


export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://ignacio-romanow.netlify.app/',
          siteName: 'Ignacio Romanow Developer',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
