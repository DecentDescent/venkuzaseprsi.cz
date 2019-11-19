import Head from "next/head";

export default ({ title, description, ogImage }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <title>Venku zase prší</title>
    <meta
      name="description"
      content="Mám rád, když prší. Mám rád, když prší ve městě. Když prší, někdy o tom napíšu. Někdy ale napíšu, i když neprší. Vítej na blogu o dešti, městě, blbejch lidech, tramvajích a letadlech."
    />
    <meta property="og:title" content="Venku zase prší" />
    <meta
      property="og:image"
      content="https://www.venkuzaseprsi.cz/static/og.jpg"
    />
    <meta
      property="og:description"
      content="Mám rád, když prší. Mám rád, když prší ve městě. Když prší, někdy o tom napíšu. Někdy ale napíšu, i když neprší. Vítej na blogu o dešti, městě, blbejch lidech, tramvajích a letadlech."
    />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.venkuzaseprsi.cz" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="https://www.venkuzaseprsi.cz/static/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="https://www.venkuzaseprsi.cz/static/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="https://www.venkuzaseprsi.cz/static/favicon/favicon-16x16.png"
    />
    <link
      rel="manifest"
      href="https://www.venkuzaseprsi.cz/static/favicon/site.webmanifest"
    />
    <link
      rel="mask-icon"
      href="https://www.venkuzaseprsi.cz/static/favicon/safari-pinned-tab.svg"
      color="#ffd25a"
    />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#ffffff" />
  </Head>
);
