import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Amaranth:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
      <body>
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
          <input type="text" id="nombre" name="nombre" required />
          <input type="text" id="email" name="email" required />
          <textarea id="mensaje" name="mensaje" required></textarea>
        </form>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
