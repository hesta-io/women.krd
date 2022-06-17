/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Layout, Menu } from 'antd';
import { HomeOutlined, AreaChartOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';
import 'animate.css';

import '../styles/globals.css';
import '../styles/antd.less';
import sheet from '../services/sheet';
import DataContext from '../helpers/DataContext';

const { Header, Content, Footer } = Layout;

function WomenApp({ Component, pageProps }) {
  const router = useRouter();
  const pathName = router.pathname;
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
    <Layout color="red" style={{ minHeight: '100vh' }} className="layout">
      <Header className="header">
        <div className="logo" />
        <Menu
          className="main-menu"
          theme="light"
          mode="horizontal"
          selectedKeys={[pathName]}
        >
          <Menu.Item className="main-menu-item" key="/">
            <Link href="/">
              <a>
                <HomeOutlined />
                &nbsp;
                Home
              </a>
            </Link>

          </Menu.Item>
          <Menu.Item className="main-menu-item" key="/report">

            <Link href="/report">
              <a>
                <AreaChartOutlined />
                &nbsp;
                Reports
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item className="main-menu-item" key="/about">
            <Link href="/about">
              <a>
                <QuestionCircleOutlined />
                &nbsp;
                About
              </a>
            </Link>
          </Menu.Item>
        </Menu>
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
        <a href="https://hesta.io"><b>Hesta LTD</b></a>

      </Footer>
    </Layout>
  );
}

export default WomenApp;
