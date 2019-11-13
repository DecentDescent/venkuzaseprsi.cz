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
      property="og:description"
      content="Mám rád, když prší. Mám rád, když prší ve městě. Když prší, někdy o tom napíšu. Někdy ale napíšu, i když neprší. Vítej na blogu o dešti, městě, blbejch lidech, tramvajích a letadlech."
    />
    <meta name="og:url" content="https://www.venkuzaseprsi.cz" />
  </Head>
);
