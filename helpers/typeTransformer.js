import _ from 'lodash';

const avilableTypeKeys = {
  relationships: 'relationships',
  ageGroups: 'ageGroups',
  occupations: 'occupations',
  methodsOfKilling: 'methodsOfKilling',
  provinces: 'provinces',
  apparentCircumstances: 'apparentCircumstances',
  suspectStatuses: 'suspectStatuses',
};
export default function typeTransformer(types = []) {
  const keys = _.keys(avilableTypeKeys);
  const result = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const k of keys) {
    result[k] = [];
  }
  for (let i = 0; i < types.length; i += 1) {
    const row = types[i];
    for (let j = 0; j < row.length; j += 1) {
      result[keys[j]].push(row[j]);
    }
  }
  return result;
}
