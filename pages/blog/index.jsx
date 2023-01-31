import React, { useEffect, useState } from 'react';
import {
  Col, Avatar, Row, Empty, Card,
  Tag, Image,
  Tooltip,
  Button,
} from 'antd';
import _ from 'lodash';
import moment from 'moment';
import Head from 'next/head';
import blogger from '../../services/blogger';

export default function Blog() {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState({});
  const [nextPageToken, setNextPageToken] = useState(null);

  const loadData = async () => {
    const blogData = await blogger.loadRecords();
    setNextPageToken(blogData?.nextPageToken ?? null);
    setBlog(blogData);
    setLoading(false);
  };
  const olderPosts = async () => {
    setLoading(true);
    const blogData = await blogger.loadRecords(nextPageToken);
    setNextPageToken(blogData?.nextPageToken ?? null);
    const newBlog = _.cloneDeep(blog);
    newBlog.nextPageToken = blogData.nextPageToken;
    newBlog.items = [...newBlog.items, ...blogData.items];
    setBlog(newBlog);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const posts = (blog?.items ?? []).map((item) => (
    <Col style={{ }} span={8} key={item.id}>
      <a target="_blank" href={`/blog/${item.id}`} className="blog-link" rel="noreferrer">
        <Card
          style={{ minHeight: 130 }}
          cover={<Image preview={false} height={240} src={item?.images ? item?.images[0]?.url : 'images/placeholder.jpg'} />}
        >
          <Card.Meta
            title={<Tooltip title={item.title}>{item.title}</Tooltip>}
            avatar={<Avatar size="default" src={item?.author?.image?.url} />}
            description={(
              <>
                <span>
                  Author:
                  {' '}
                  {item?.author?.displayName}
                </span>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <span>
                  Date:
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
  ));
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
        {posts}
        <Col span={24} />
        <Col span={8}>
          <Button onClick={olderPosts} loading={loading} disabled={loading} style={{ display: nextPageToken == null ? 'none' : undefined }} type="primary" block>Load More</Button>
        </Col>

      </Row>
    </div>
  );
}
