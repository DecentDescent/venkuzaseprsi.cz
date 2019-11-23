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
  </Head>
);
