import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
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
