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
      content={
        props.excerpt
          ? props.excerpt
          : "Mám rád, když prší. Mám rád, když prší ve městě. Když prší, někdy o tom napíšu. Někdy ale napíšu, i když neprší. Vítej na blogu o dešti, městě, blbejch lidech, tramvajích a letadlech."
      }
    />
    <meta
      property="og:title"
      content={
        props.title ? props.title + " – Venku zase prší" : "Venku zase prší"
      }
    />

    <meta
      property="og:image"
      content={props.image ? props.image : "/static/og.jpg"}
    />
    <meta
      property="og:description"
      content={
        props.excerpt
          ? props.excerpt
          : "Mám rád, když prší. Mám rád, když prší ve městě. Když prší, někdy o tom napíšu. Někdy ale napíšu, i když neprší. Vítej na blogu o dešti, městě, blbejch lidech, tramvajích a letadlech."
      }
    />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta property="og:type" content="website" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/static/favicon/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/static/favicon/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <meta name="msapplication-TileColor" content="#06aed5" />
    <meta name="theme-color" content="#ffffff" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-89692734-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-89692734-1');
    </script>
  </Head>
);
