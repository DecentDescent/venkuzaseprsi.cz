import Head from "next/head";

export default props => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <title>
      {props.title ? props.title + " – Venku zase prší" : "Venku zase prší"}
    </title>
    <meta
      name="description"
      content={props.excerpt ? props.excerpt : "Venku zase prší"}
    />
    <meta
      property="og:title"
      content={
        props.title ? props.title + " – Venku zase prší" : "Venku zase prší"
      }
    />
    <meta
      property="og:description"
      content={props.excerpt ? props.excerpt : "Venku zase prší"}
    />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta property="og:type" content="website" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/public/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/public/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/public/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/public/favicon/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/public/favicon/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <meta name="msapplication-TileColor" content="#06aed5" />
    <meta name="theme-color" content="#ffffff" />
    <script></script>
  </Head>
);
