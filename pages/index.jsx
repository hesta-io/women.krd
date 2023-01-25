import Head from 'next/head';
import dynamic from 'next/dynamic';
import _ from 'lodash';
import { useContext } from 'react';
import moment from 'moment';
import {
  Row, Col, Card, Typography, Image, Statistic,
  Collapse,
} from 'antd';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import DataContext from '../helpers/DataContext';

const OnDesktop = dynamic(() => import('../helpers/MediaQuery').then((Comp) => Comp.OnDesktop), {
  ssr: false,
});
const OnMobile = dynamic(() => import('../helpers/MediaQuery').then((Comp) => Comp.OnMobile), {
  ssr: false,
});

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      display: false,
    },
    title: {
      display: true,
    },
  },
};

export default function Home() {
  const { records } = useContext(DataContext);
  const groupedRecords = _.groupBy(records, 'incident_province');
  const labels = _.filter(_.keys(groupedRecords), (l) => `${l}`.trim() !== '');
  const chartValues = labels.map((l) => groupedRecords[l]?.length);
  const thisYearCases = records.filter((v) => {
    const incidentDate = moment(v.incident_date);
    return incidentDate.isSame(new Date(), 'year');
  });
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Victims',
        data: chartValues,
        // backgroundColor: 'rgba(20, 20, 20, 0.7)',
        backgroundColor: '#e3e3e3',
        // backgroundColor: 'rgba(53, 162, 235, 0.6)',
      },

    ],
  };
  const PartnersGallery = (
    <Image.PreviewGroup>
      <a href="https://hesta.io" target="_blank" rel="noreferrer">
        <Image className="brand-image" preview={false} width={130} src="/images/hesta.svg" />
      </a>
      <Image className="brand-image" preview={false} width={130} src="/images/seed.png" />
      <Image className="brand-image" preview={false} width={130} src="/images/asuda.png" />
      <Image className="brand-image" preview={false} width={130} src="/images/wola.png" />
    </Image.PreviewGroup>
  );
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

      <Row gutter={[20, 20]}>
        <Col span={24}>
          <Typography.Title style={{ textAlign: 'center', marginBottom: 15, marginTop: -15 }} level={1}>
            Documenting violence against
            <br />
            women in Kurdistan Region
          </Typography.Title>
        </Col>
        <OnDesktop>
          <Col xs={24} sm={24} md={16} lg={16}>
            <Card className="bar-chart-container">
              <Bar options={chartOptions} data={chartData} />
            </Card>
          </Col>
        </OnDesktop>

        <Col xs={24} sm={24} md={8} lg={8}>
          <Row style={{ height: '100%' }} gutter={[10, 10]}>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Card style={{ width: '100%', textAlign: 'center' }}>
                <Statistic
                  title="Total Cases"
                  value={records.length}
                />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Card style={{ width: '100%', textAlign: 'center' }}>
                <Statistic
                  title={`This Year (${new Date().getFullYear()})`}
                  value={thisYearCases.length}
                  valueStyle={{
                    color: '#cf1322',
                  }}
                />
              </Card>
            </Col>
            <Col span={24}>
              <OnDesktop>
                <Card title="Supported By" style={{ width: '100%', textAlign: 'center' }}>
                  {PartnersGallery}
                </Card>
              </OnDesktop>
              <OnMobile>
                <Collapse style={{ width: '100%', textAlign: 'center' }}>
                  <Collapse.Panel header="Supported By">
                    {PartnersGallery}
                  </Collapse.Panel>
                </Collapse>
              </OnMobile>
            </Col>
          </Row>
        </Col>
        <OnMobile>
          <Col xs={24} sm={24} md={16} lg={16}>
            <Collapse style={{ width: '100%', textAlign: 'center' }}>
              <Collapse.Panel header="Data">
                <Card style={{ width: '100%' }}>
                  <Bar options={chartOptions} data={chartData} />
                </Card>
              </Collapse.Panel>
            </Collapse>
          </Col>
        </OnMobile>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Typography.Paragraph className="about-text">
            <b>Women.Krd</b>
            {' '}
            is a virtual platform that documents women and
            girls killed in the name of honour within the Iraqi Kurdistan Region.
            This platform is run by women’s rights advocates and for the
            purposes of documenting the scale
            of violence women and girls face within the region.
            We are crowdsourcing our data from local non-governmental
            organisations, news platforms, and liaising with the Kurdistan Regional
            Government’s committee for combating violence against women. Our methodological
            approach is justified on the grounds that the region still lacks a transparent
            and robust data gathering system.
          </Typography.Paragraph>
          <Typography.Paragraph className="about-text">
            Our grassroots approach will enable us
            to understand underlying factors that may contribute
            towards the increased violence committed against women and girls.
            The live-map demonstrates where the acts of violence are committed,
            and we have additional data that highlights neighbourhoods where violence is occurring.
          </Typography.Paragraph>
        </Col>
      </Row>
    </div>
  );
}
