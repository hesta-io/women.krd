import Head from 'next/head';
import { Button, Input } from 'antd';

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Women.krd</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button type="primary" size="large">This is a button</Button>
      <br />
      <Input style={{ width: '30%' }} />
    </div>
  );
}
