import React, { useEffect, useState } from 'react';
import {
  Col, Avatar, Row, Empty, Spin, Card,
  Tag,
  Tooltip,
  Divider,
} from 'antd';
import moment from 'moment';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Interweave } from 'interweave';
import blogger from '../../services/blogger';

export default function Blog() {
  const router = useRouter();
  const postId = router.query.id;
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState({});

  const loadData = async () => {
    const blogData = await blogger.loadRecord(postId);
    setBlog(blogData);
    setLoading(false);
  };
  useEffect(() => {
    if (postId !== undefined) {
      loadData();
    }
  }, [postId]);
  return (
    <div>
      {blog.id
        ? (
          <Head>
            <title>{blog.title}</title>
            <meta
              name="description"
              content="is a virtual platform that documents women and
            girls killed in the name of honour within the Iraqi Kurdistan Region"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        )
        : null}
      <Row gutter={[20, 20]} justify="center" align="middle">
        {!blog.id && !loading ? (
          <Col span={24}>
            <Empty description="Post not found" />
          </Col>
        ) : null}
        {loading ? (
          <Col style={{ textAlign: 'center' }} span={24}>
            <Spin size="small" />
          </Col>
        ) : null}
        <Col span={24}>
          <Card
            style={{ minHeight: 130 }}
          >
            <Card.Meta
              title={<Tooltip title={blog.title}>{blog.title}</Tooltip>}
              avatar={<Avatar size="default" src={blog?.author?.image?.url} />}
              description={(
                <>
                  <span>
                    Author:
                    {' '}
                    {blog?.author?.displayName}
                  </span>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                  <span>
                    Date:
                    {' '}
                    {moment(blog.published).format('LLL')}
                  </span>
                  {/* <Divider dashed /> */}
                  <br />
                  {blog?.labels?.map((l) => <Tag style={{ background: '#262626', color: 'white', border: 'none' }}>{l}</Tag>)}
                </>
            )}
            />
            <Divider />
            <Row>
              <Col span={24} style={{ overflow: 'auto' }}>
                <Interweave content={blog.content} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
