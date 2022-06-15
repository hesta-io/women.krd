import superagent from 'superagent';
import _ from 'lodash';
import promiseHandler from '../helpers/promiseHandler';
import recordTransformer from '../helpers/recordTransformer';

const avilableTypeKeys = {
  relationships: 'relationships',
  ageGroups: 'ageGroups',
  occupations: 'occupations',
  methodsOfKilling: 'methodsOfKilling',
  provinces: 'provinces',
  apparentCircumstances: 'apparentCircumstances',
};

async function loadRecords() {
  const [recordsRes] = await promiseHandler(superagent
    .get(`${process.env.GOOGLE_SHEET_API_URL}/${process.env.GOOGLE_SHEET_KEY}/values/data!A2:M`)
    .query({
      key: process.env.GOOGLE_API_KEY,
    }));
  if (recordsRes) {
    return Promise.resolve(recordTransformer(recordsRes.body.values));
  }
  return Promise.resolve([]);
}

async function loadTypes() {
  const sheetName = 'types';
  const range = 'A2:F';
  const keys = _.keys(avilableTypeKeys);
  const response = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const k of keys) {
    response[k] = [];
  }

  const [typesRes] = await promiseHandler(superagent
    .get(`${process.env.GOOGLE_SHEET_API_URL}/${process.env.GOOGLE_SHEET_KEY}/values/${sheetName}!${range}`)
    .query({
      key: process.env.GOOGLE_API_KEY,
    }));
  if (typesRes) {
    const { body } = typesRes;
    const { values } = body;
    for (let i = 0; i < values.length; i += 1) {
      const row = values[i];
      for (let j = 0; j < row.length; j += 1) {
        response[keys[j]].push(row[j]);
      }
    }

    return Promise.resolve(response);
  }
  return Promise.resolve(response);
}

export default {
  loadRecords,
  loadTypes,
  avilableTypeKeys,
};
