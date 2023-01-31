import { Typography } from 'antd';
import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>Women.krd</title>
        <meta
          name="description"
          content="is a virtual platform that documents women and
            girls killed in the name of honour within the Iraqi Kurdistan Region"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography.Title level={1}>About Women.krd</Typography.Title>
      <Typography.Paragraph className="about-text">
        The Iraqi Kurdistan Region has an approximate
        population of six million people. In recent years,
        we have seen a spike in cases of violence against women. On women.krd, we document the names
        of women and girls killed in the name of honour.
      </Typography.Paragraph>
      <Typography.Paragraph className="about-text">
        Our primary objective will be to ensure we have a verifiable
        database documenting violence in the
        name of honour. On our reports page, you will
        be able to find out key information such as age
        range, whether the killer of the victim has been
        apprehended or not, and other crucial details.
      </Typography.Paragraph>
      <Typography.Paragraph className="about-text">
        We are crowdsourcing our data from local non-governmental organisations, news platforms, and
        liaising with the Kurdistan Regional Government’s committee for combating violence against
        women. Our methodological approach is justified on the grounds that the region still lacks a
        transparent and robust data gathering system.
      </Typography.Paragraph>
      <Typography.Paragraph className="about-text">
        Our grassroots approach will enable us to understand underlying factors that may contribute
        towards the increased violence committed against
        women and girls. Our data demonstrates where
        the acts of violence are committed, and will
        potentially enable further study to see whether other
        factors contribute to violence against women in the name of honour.
      </Typography.Paragraph>
      <Typography.Paragraph italic className="about-text">
        Women.Krd was developed by the prestigious
        &nbsp;
        <a href="https://hesta.io" target="_blank" rel="noreferrer">hesta.io</a>
        &nbsp;
        team,
        &nbsp;
        <a href="https://twitter.com/AramRafeq" target="_blank" rel="noreferrer">Aram Rafeq</a>
        &nbsp;
        and
        &nbsp;
        <a href="https://twitter.com/mhmd_azeez" target="_blank" rel="noreferrer">Muhammad  Yaseen</a>
        .
      </Typography.Paragraph>
      <Typography.Paragraph italic className="about-text">
        This project was founded by
        &nbsp;
        <a href="https://twitter.com/RuwaydaMustafah" target="_blank" rel="noreferrer">Ruwayda Mustafah</a>
        &nbsp;
        with the intention of raising awareness about the
        scale of violence women face within the region.
      </Typography.Paragraph>
      <Typography.Paragraph italic className="about-text">
        This project is opensource and hosted on github you can
        &nbsp;
        <a href="https://github.com/hesta-io/women.krd" target="_blank" rel="noreferrer">click here</a>
        &nbsp;
        and contribute.
      </Typography.Paragraph>
    </div>
  );
}
