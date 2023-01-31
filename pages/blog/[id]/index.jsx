import React, { useEffect, useState } from 'react';
import {
  Col, Avatar, Row, Empty, Spin, Card,
  Tag, Image,
  Tooltip,
} from 'antd';
import moment from 'moment';
import Head from 'next/head';
import blogger from '../../../services/blogger';

export default function Blog() {
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState({});

  const loadData = async () => {
    setLoading(true);
    // blog?.nextPageToken ?? null
    const blogData = await blogger.loadRecords();
    console.log(blogData);
    setBlog(blogData);
    setLoading(false);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <Head>
        <title>Reading This</title>
        <meta
          name="description"
          content="is a virtual platform that documents women and
            girls killed in the name of honour within the Iraqi Kurdistan Region"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row gutter={[20, 20]} justify="center" align="middle">
        {!blog?.items && !loading ? (
          <Col span={24}>
            <Empty />
          </Col>
        ) : null}
        {loading ? (
          <Col style={{ textAlign: 'center' }} span={24}>
            <Spin size="small" />
          </Col>
        ) : null}
      </Row>
    </div>
  );
}
