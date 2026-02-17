import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        {/* load font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/logo/favicon_32x32.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="logo/favicon_32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="logo//favicon_16x16.png" />

        {/* Brevo styles (global) */}
        <link
          rel="stylesheet"
          href="https://sibforms.com/forms/end-form/build/sib-styles.css"
        />
        
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
