import React, { useEffect, useState } from 'react';
import {
  Col, Avatar, Row, Empty, Card,
  Tag, Image,
  Tooltip,
  Button,
  Drawer,
} from 'antd';
import _ from 'lodash';
import moment from 'moment';
import Head from 'next/head';
import { useRouter } from 'next/router';
import blogger from '../../services/blogger';
import SinglePost from '../../components/SinglePost';
import { isSmallDevice } from '../../helpers/MediaQuery';

export default function Blog() {
  const router = useRouter();
  const postId = router?.query?.post ?? null;
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
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawerVisible = () => {
    if (drawerVisible) {
      router.push('/blog');
    }
    setDrawerVisible((v) => !v);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (postId) {
      toggleDrawerVisible();
    } else {
      setDrawerVisible(false);
    }
  }, [postId]);
  const posts = (blog?.items ?? []).map((item) => (
    <Col style={{ }} md={8} sm={24} lg={8} key={item.id}>
      <Card
        onClick={() => {
          router.push(`?post=${item.id}`);
        }}
        style={{ minHeight: 130, cursor: 'pointer' }}
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
    </Col>
  ));
  const BlogHead = (
    <Head>
      <title>{blog.title}</title>
      <meta name="title" content={`${blog.title}`} />
      <meta property="article:author" content={`${blog?.author?.displayName}`} />
      <meta property="og:locale" content="en_EN" />
      <meta property="og:site_name" content={`${blog.title}`} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`${blog.title}`} />
      <meta property="og:site_name" content="Women.krd" />
      <meta property="og:image" content={`${blog?.images ? blog?.images[0]?.url : 'images/placeholder.jpg'}`} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`https://women.krd/blog?post=${blog.id}`} />
      <meta property="twitter:title" content={`${blog.title}`} />
      <meta property="twitter:image" content={`${blog?.images ? blog?.images[0]?.url : 'images/placeholder.jpg'}`} />
    </Head>
  );
  const defaultHead = (
    <Head>
      <title>Latest Articles</title>
      <meta
        name="description"
        content="is a virtual platform that documents women and
    girls killed in the name of honour within the Iraqi Kurdistan Region"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
  return (
    <div>
      {postId ? BlogHead : defaultHead}
      <Drawer
        bodyStyle={{
          padding: 0,
          overflowX: 'hidden',
        }}
        destroyOnClose
        placement="left"
        width={isSmallDevice() ? '100%' : '70%'}
        closable
        size="default"
        onClose={toggleDrawerVisible}
        open={drawerVisible}
      >
        <SinglePost resourceId={postId} />
      </Drawer>

      <Row gutter={[20, 20]} justify="center" align="middle">
        {!blog?.items && !loading ? (
          <Col span={24}>
            <Empty />
          </Col>
        ) : null}
        {posts}
        <Col span={24} />
        <Col md={8} sm={24} lg={8}>
          <Button onClick={olderPosts} loading={loading} disabled={loading} style={{ display: nextPageToken == null ? 'none' : undefined }} type="primary" block>Load More</Button>
        </Col>

      </Row>
    </div>
  );
}
