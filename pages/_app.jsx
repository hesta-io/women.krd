/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { Button, Layout, ConfigProvider } from 'antd';
import {
  HomeOutlined,
  AreaChartOutlined,
  QuestionCircleOutlined,
  BookOutlined,
} from '@ant-design/icons';
import 'animate.css';

import '../styles/globals.css';
import sheet from '../services/sheet';
import DataContext from '../helpers/DataContext';
import { isSmallDevice } from '../helpers/MediaQuery';

const { Header, Content, Footer } = Layout;

function WomenApp({ Component, pageProps }) {
  const router = useRouter();
  const pathName = router.pathname;
  const goToRoute = (route) => {
    router.push(route);
  };
  const [allData, setAllData] = useState({
    records: [],
    types: {},
  });
  const loadData = async () => {
    const fetchedData = await sheet.loadAllData();
    setAllData(fetchedData);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Anek+Latin&display=swap" rel="stylesheet" />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RG467SZ5WC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RG467SZ5WC');
        `}
      </Script>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#262626',
            colorTextBase: '#262626',
            colorLink: '#262626',
            borderRadius: 7,
          },
        }}
      >
        <Layout color="red" style={{ minHeight: '100vh' }} className="layout">
          <Header className="header">
            <Button.Group size="large" style={{ width: isSmallDevice() ? undefined : '80%' }}>
              <Button onClick={() => goToRoute('/')} icon={<HomeOutlined />} type={pathName === '/' ? 'primary' : 'dashed'} block>Home</Button>
              <Button onClick={() => goToRoute('/report')} icon={<AreaChartOutlined />} type={pathName === '/report' ? 'primary' : 'dashed'} block>Reports</Button>
              {/* <Button onClick={() => goToRoute('/blog')} icon={<BookOutlined />} type={pathName === '/blog' || pathName === '/blog/[id]' ? 'primary' : 'dashed'} block>Blog</Button> */}
              <Button onClick={() => goToRoute('/about')} icon={<QuestionCircleOutlined />} type={pathName === '/about' ? 'primary' : 'dashed'} block>About</Button>
            </Button.Group>
          </Header>
          <Content className="main-container">
            <DataContext.Provider value={allData}>
              <Component {...pageProps} />
            </DataContext.Provider>
          </Content>
          <Footer className="footer" style={{ textAlign: 'center' }}>
            Women.krd ©
            {new Date().getFullYear()}
            {' '}
            Created by
            {' '}
            <a href="https://hesta.io"><b>Hesta</b></a>

          </Footer>
        </Layout>
      </ConfigProvider>
    </>
  );
}

export default WomenApp;
