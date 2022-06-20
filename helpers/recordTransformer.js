export default function recordTransformer(records = []) {
  const result = [];
  for (let i = 0; i < records.length; i += 1) {
    const row = records[i];
    result.push({
      name: row[0] ? row[0] : '',
      incident_date: row[1] ? row[1] : '',
      age_range: row[2] ? row[2] : '',
      apparent_method_of_killing: row[3] ? row[3] : '',
      apparent_circumstances: row[4] ? row[4] : '',
      relationship_to_principal_suspect: row[5] ? row[5] : '',
      occupation: row[6] ? row[6] : '',
      incident_province: row[7] ? row[7] : '',
      primary_suspect_status: row[8] ? row[8] : '',
      incident_description: row[9] ? row[9] : '',
      link1: row[10] ? row[10] : '',
      link2: row[11] ? row[11] : '',
      link3: row[12] ? row[12] : '',
    });
  }
  return result;
}
