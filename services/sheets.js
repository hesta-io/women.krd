import superagent from 'superagent';
import promiseHandler from '../helpers/promiseHandler';

async function loadRecords() {
  return promiseHandler(superagent
    .get(`${process.env.GOOGLE_SHEET_API_URL}/${process.env.GOOGLE_SHEET_KEY}/values/data!A1:B2`)
    .query({
      key: process.env.GOOGLE_API_KEY,
    }));
}

export default {
  loadRecords,
};
