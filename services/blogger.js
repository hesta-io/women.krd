import superagent from 'superagent';
import promiseHandler from '../helpers/promiseHandler';

async function loadRecords(pageToken = null) {
  const query = {
    key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    maxResults: 10,
    fetchBodies: true,
    fetchImages: true,
    status: 'live',
  };
  if (pageToken) {
    query.pageToken = pageToken;
  }
  const [recordsRes] = await promiseHandler(
    superagent
      .get(`${process.env.NEXT_PUBLIC_BLOGGER_API_URL}/blogs/${process.env.NEXT_PUBLIC_BLOGGER_ID}/posts`)
      .query(query),
  );
  if (recordsRes) {
    return Promise.resolve(recordsRes.body);
  }
  return Promise.resolve([]);
}
async function loadRecord(recordId = '') {
  const query = {
    key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    fetchBodies: true,
    fetchImages: true,
  };

  const [recordsRes] = await promiseHandler(
    superagent
      .get(`${process.env.NEXT_PUBLIC_BLOGGER_API_URL}/blogs/${process.env.NEXT_PUBLIC_BLOGGER_ID}/posts/${recordId}`)
      .query(query),
  );
  if (recordsRes) {
    return Promise.resolve(recordsRes.body);
  }
  return Promise.resolve({});
}

export default {
  loadRecords,
  loadRecord,
};
