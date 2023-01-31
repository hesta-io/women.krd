import superagent from 'superagent';
import promiseHandler from '../helpers/promiseHandler';
import recordTransformer from '../helpers/recordTransformer';

async function loadRecords(pageToken = null) {
  const query = {
    key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    maxResults: 20,
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

export default {
  loadRecords,
};
