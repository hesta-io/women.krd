import { useContext } from 'react';
import {
  Row, Col, Card, Statistic,
} from 'antd';
import moment from 'moment';
import { ArrowUpOutlined, ArrowDownOutlined, ExceptionOutlined } from '@ant-design/icons';
import DataContext from '../helpers/DataContext';

const dateFormat = 'YYYY-MM-DD';
function getDataByRange(range, records, filters) {
  let filteredRecords = records.filter((v) => {
    const caseDate = moment(v.incident_date);
    return caseDate.isBetween(range[0], range[1]);
  });
  if (filters !== null) {
    if (filters.province) {
      filteredRecords = filteredRecords.filter(
        (v) => v.incident_province === filters.province,
      );
    }
    if (filters.age) {
      filteredRecords = filteredRecords.filter(
        (v) => v.age_range === filters.age,
      );
    }
    if (filters.occupation) {
      filteredRecords = filteredRecords.filter(
        (v) => v.occupation === filters.occupation,
      );
    }
    if (filters.suspect_relationship) {
      filteredRecords = filteredRecords.filter(
        (v) => v.relationship_to_principal_suspect === filters.suspect_relationship,
      );
    }
    if (filters.method) {
      filteredRecords = filteredRecords.filter(
        (v) => v.apparent_method_of_killing === filters.method,
      );
    }
    if (filters.circumstance) {
      filteredRecords = filteredRecords.filter(
        (v) => v.apparent_circumstances === filters.circumstance,
      );
    }
  }
  return filteredRecords;
}
export default function ReportStatistics(props) {
  const { ranges, filters } = props;
  if (ranges.length === 0) {
    return <span />;
  }
  const data = useContext(DataContext);
  const previosPeriodRecord = getDataByRange(ranges[0], data.records, filters);
  const currentPeriodRecord = getDataByRange(ranges[1], data.records, filters);
  //   https://www.skillsyouneed.com/num/percent-change.html
  let percentage = ((currentPeriodRecord.length - previosPeriodRecord.length)
  / (previosPeriodRecord.length === 0 ? 1 : previosPeriodRecord.length)) * 100;
  if (Number.isNaN(percentage)) {
    percentage = 0;
  }
  return (
    <Row gutter={[20, 20]} justify="center">

      <Col span={5}>
        <Card style={{ width: '100%', textAlign: 'center' }}>
          <Statistic
            title={`${ranges[0][0].format(dateFormat)} → ${ranges[0][1].format(dateFormat)}`}
            value={previosPeriodRecord.length}
            precision={0}
            prefix={<ExceptionOutlined />}
          />
        </Card>
      </Col>
      <Col span={5}>
        <Card style={{ width: '100%', textAlign: 'center' }}>
          <Statistic
            title={`${ranges[1][0].format(dateFormat)} → ${ranges[1][1].format(dateFormat)}`}
            value={currentPeriodRecord.length}
            precision={0}
            prefix={<ExceptionOutlined />}
          />
        </Card>
      </Col>
      <Col span={5}>
        <Card style={{ width: '100%', textAlign: 'center' }}>
          <Statistic
            title="Compared to last period"
            value={percentage}
            precision={1}
            valueStyle={{
              color: percentage < 0 ? '#3f8600' : '#cf1322',
            }}
            prefix={percentage < 0 ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
  );
}
