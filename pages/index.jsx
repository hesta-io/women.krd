import Head from 'next/head';
import _ from 'lodash';
import { useContext } from 'react';
import {
  Row, Col, Card, Typography, Image,
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
  const labels = _.keys(groupedRecords).reverse();
  const chartValues = labels.map((l) => groupedRecords[l]?.length);
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Cities',
        data: chartValues.reverse(),
        // backgroundColor: 'rgba(20, 20, 20, 0.7)',
        backgroundColor: 'rgba(53, 162, 235, 0.6)',
      },

    ],
  };

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
        <Col span={16}>
          <Card style={{ width: '100%' }}>
            <Bar options={chartOptions} data={chartData} />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Supported By" style={{ width: '100%', textAlign: 'center', height: '100%' }}>
            <Image.PreviewGroup>
              <Image className="brand-image" preview={false} width={150} src="/images/seed.png" />
              <Image className="brand-image" preview={false} width={150} src="/images/asuda.png" />
              <Image className="brand-image" preview={false} width={150} src="/images/hesta.png" />
            </Image.PreviewGroup>
          </Card>
        </Col>
        <Col span={24}>
          <Typography.Paragraph>
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
