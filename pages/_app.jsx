/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
import '../styles/globals.css';
import '../styles/antd.less';
import { useRouter } from 'next/router';
import { Layout, Menu } from 'antd';
import { HomeOutlined, AreaChartOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Header, Content, Footer } = Layout;

function WomenApp({ Component, pageProps }) {
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <Layout color="red" style={{ height: '100vh' }} className="layout">
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
        <Component {...pageProps} />
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
