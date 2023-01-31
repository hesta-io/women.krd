import React, { useEffect, useState } from 'react';
import {
  Col, Avatar, Row, Empty, Spin, Card,
  Tag, Image,
  Tooltip,
} from 'antd';
import moment from 'moment';
import Head from 'next/head';
import blogger from '../../services/blogger';

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
        <title>Blogs</title>
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

        {(blog?.items ?? []).map((item) => {
          const x = 10;
          return (
            <Col style={{ }} span={8}>
              <a href={`/blog/${item.id}`} className="blog-link">
                <Card
                  style={{ minHeight: 130 }}
                  cover={<Image preview={false} height={250} src={item?.images ? item?.images[0]?.url : 'images/placeholder.jpg'} />}
                >
                  <Card.Meta
                    title={<Tooltip title={item.title}>{item.title}</Tooltip>}
                    avatar={<Avatar size="default" src={item?.author?.image?.url} />}
                    description={(
                      <>
                        <span>
                          By:
                          {' '}
                          {item?.author?.displayName}
                        </span>
                      &nbsp;&nbsp;|&nbsp;&nbsp;
                        <span>
                          At:
                          {' '}
                          {moment(item.published).format('LLL')}
                        </span>
                        {/* <Divider dashed /> */}
                        <br />
                        {item?.labels?.map((l) => <Tag style={{ background: '#262626', color: 'white', border: 'none' }}>{l}</Tag>)}
                      </>
                  )}
                  />
                </Card>
              </a>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
