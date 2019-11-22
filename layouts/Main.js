import Head from "next/head";
export default ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <header></header>
    <main>{children}</main>
  </div>
);
