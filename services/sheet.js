import superagent from 'superagent';
import promiseHandler from '../helpers/promiseHandler';
import recordTransformer from '../helpers/recordTransformer';
import typeTransformer from '../helpers/typeTransformer';

async function loadRecords() {
  const [recordsRes] = await promiseHandler(superagent
    .get(`${process.env.NEXT_PUBLIC_GOOGLE_SHEET_API_URL}/${process.env.NEXT_PUBLIC_GOOGLE_SHEET_KEY}/values/data!A2:M`)
    .query({
      key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    }));
  if (recordsRes) {
    return Promise.resolve(recordTransformer(recordsRes.body.values));
  }
  return Promise.resolve([]);
}

async function loadTypes() {
  const [typesRes] = await promiseHandler(superagent
    .get(`${process.env.NEXT_PUBLIC_GOOGLE_SHEET_API_URL}/${process.env.NEXT_PUBLIC_GOOGLE_SHEET_KEY}/values/types!A2:G`)
    .query({
      key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    }));
  if (typesRes) {
    const { body } = typesRes;
    const { values } = body;
    return Promise.resolve(typeTransformer(values));
  }
  return Promise.resolve({});
}

async function loadAllData() {
  const dataSheetName = 'data!A2:M';
  const typesSheetName = 'types!A2:G';
  const [dataRes] = await promiseHandler(superagent
    .get(`${process.env.NEXT_PUBLIC_GOOGLE_SHEET_API_URL}/${process.env.NEXT_PUBLIC_GOOGLE_SHEET_KEY}/values:batchGet`)
    .query({
      key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
      ranges: [
        dataSheetName,
        typesSheetName,
      ],
      valueRenderOption: 'FORMATTED_VALUE',
    }));
  if (dataRes) {
    const { valueRanges } = dataRes.body;
    const [records, types] = valueRanges;
    const resultedRecords = recordTransformer(records.values);
    const resultedTypes = typeTransformer(types.values);

    return Promise.resolve({
      records: resultedRecords,
      types: resultedTypes,
    });
  }
  return Promise.resolve({
    records: [],
    types: {},
  });
}

export default {
  loadRecords,
  loadTypes,
  loadAllData,
};
