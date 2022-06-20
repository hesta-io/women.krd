import { useContext, useState, useEffect } from 'react';
import Head from 'next/head';
import {
  Row, Col, Table, Typography, Button, Descriptions,
  Badge,
} from 'antd';
import moment from 'moment';
import Filters from '../components/Filters';
import DataContext from '../helpers/DataContext';
import ReportStatistics from '../components/ReportStatistics';
import { OnDesktop, OnMobile } from '../helpers/MediaQuery';

function Report() {
  const columns = [
    {
      title: 'Date',
      dataIndex: 'incident_date',
      key: 'incident_date',
      width: 120,
      render: (v) => (
        <span>
          {v}
        </span>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (v) => (
        <span>
          {v}
        </span>
      ),
    },
    {
      title: 'Age',
      dataIndex: 'age_range',
      key: 'age_range',
      width: 100,
      render: (v) => (
        <span>
          {v}
        </span>
      ),
      responsive: ['md'],
    },
    {
      title: 'Province',
      dataIndex: 'incident_province',
      key: 'incident_province',
      width: 100,
      render: (v) => (
        <span>
          {v}
        </span>
      ),
      responsive: ['lg'],
    },
    {
      title: 'Occupation',
      dataIndex: 'occupation',
      key: 'occupation',
      width: 150,
      render: (v) => (
        <span>
          {v}
        </span>
      ),
      responsive: ['lg'],
    },
    {
      title: 'Suspect',
      dataIndex: 'relationship_to_principal_suspect',
      key: 'relationship_to_principal_suspect',
      width: 250,
      render: (v, row) => (
        <span>
          {v}
          {' '}
          (
          {row.primary_suspect_status}
          )
        </span>
      ),
      responsive: ['sm'],
    },

    {
      title: 'Method',
      dataIndex: 'apparent_method_of_killing',
      key: 'apparent_method_of_killing',
      width: 150,
      render: (v) => (
        <span>
          {v}
        </span>
      ),
      responsive: ['lg'],
    },
  ];
  const pageSize = 10;

  const initialPagination = {
    pageSize,
    current: 1,
    hideOnSinglePage: true,
  };
  const data = useContext(DataContext);
  const [pagination, setPagination] = useState(initialPagination);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [previosPeriod, setPreviousPeriod] = useState([moment(), moment()]);
  const [currentPeriod, setCurrentPeriod] = useState([moment(), moment()]);
  const [shouldPassRanges, setShouldPassRanges] = useState(false);
  const [filters, setFilters] = useState(null);
  const filterValuesChange = (_filters, emptyFilter) => {
    setShouldPassRanges(false);
    if (emptyFilter) {
      setFilters(null);
      setFilteredRecords(data.records);
      setPagination(() => ({
        ...initialPagination,
        total: data.records.length,
      }));
    } else {
      setFilters(_filters);
      let filteredRecordsResult = data.records;
      if (_filters.date && _filters.date.length > 0) {
        const [startDate, endDate] = _filters.date;
        const diffrence = Math.abs(startDate.diff(endDate, 'days'));
        const startOfPreviousPeriod = moment(startDate).subtract(diffrence, 'days');
        const calculatedPreviosPeriod = [startOfPreviousPeriod, startDate];
        setCurrentPeriod(_filters.date);
        setPreviousPeriod(calculatedPreviosPeriod);
        setShouldPassRanges(true);
        filteredRecordsResult = filteredRecordsResult.filter(
          (v) => {
            const caseDate = moment(v.incident_date);
            return caseDate.isBetween(startDate, endDate);
          },
        );
      }
      if (_filters.province) {
        filteredRecordsResult = filteredRecordsResult.filter(
          (v) => v.incident_province === _filters.province,
        );
      }
      if (_filters.age) {
        filteredRecordsResult = filteredRecordsResult.filter(
          (v) => v.age_range === _filters.age,
        );
      }
      if (_filters.occupation) {
        filteredRecordsResult = filteredRecordsResult.filter(
          (v) => v.occupation === _filters.occupation,
        );
      }
      if (_filters.suspect_relationship) {
        filteredRecordsResult = filteredRecordsResult.filter(
          (v) => v.relationship_to_principal_suspect === _filters.suspect_relationship,
        );
      }
      if (_filters.suspect_status) {
        filteredRecordsResult = filteredRecordsResult.filter(
          (v) => v.primary_suspect_status === _filters.suspect_status,
        );
      }
      if (_filters.method) {
        filteredRecordsResult = filteredRecordsResult.filter(
          (v) => v.apparent_method_of_killing === _filters.method,
        );
      }
      if (_filters.circumstance) {
        filteredRecordsResult = filteredRecordsResult.filter(
          (v) => v.apparent_circumstances === _filters.circumstance,
        );
      }

      setFilteredRecords(filteredRecordsResult);
      setPagination(() => ({
        ...initialPagination,
        current: 1,
        total: filteredRecordsResult.length,
      }));
    }
  };

  useEffect(() => {
    setFilteredRecords(data.records);
    setPagination(() => ({
      ...initialPagination,
      total: data.records.length,
    }));
  }, [data]);

  const tableChanged = (paginationState) => {
    setPagination((oldValue) => ({
      ...oldValue,
      ...paginationState,
    }));
  };
  const rowExpanRendrer = (record) => (
    <>
      <OnDesktop>
        <Typography.Paragraph
          style={{
            margin: 0,
            padding: 10,
            borderRadius: 5,
          }}
          copyable
        >
          {record.incident_description}
        </Typography.Paragraph>
        {record.link1 !== '' ? <Button size="small" href={record.link1} target="_blank" type="primary">Source 1</Button> : null}
        &nbsp;
        {record.link2 !== '' ? <Button size="small" href={record.link2} target="_blank" type="primary">Source 2</Button> : null}
        &nbsp;
        {record.link3 !== '' ? <Button size="small" href={record.link3} target="_blank" type="primary">Source 3</Button> : null}
      </OnDesktop>
      <OnMobile>
        <Descriptions column={24} layout="vertical" bordered size="small">
          <Descriptions.Item span={12} label={<b>Method of killing</b>}>
            {record.apparent_method_of_killing}
          </Descriptions.Item>
          <Descriptions.Item span={12} label={<b>Circumstances</b>}>
            {record.apparent_circumstances}
          </Descriptions.Item>
          <Descriptions.Item span={12} label={<b>Suspect</b>}>
            {record.relationship_to_principal_suspect}
            (
            {record.primary_suspect_status}
            )
          </Descriptions.Item>
          <Descriptions.Item span={12} label={<b>Occupation</b>}>
            {record.occupation}
          </Descriptions.Item>
          <Descriptions.Item span={12} label={<b>Province</b>}>
            {record.incident_province}
          </Descriptions.Item>
          <Descriptions.Item span={12} label={<b>Sources</b>}>
            {record.link1 !== '' ? <Button size="small" href={record.link1} target="_blank" type="primary">Source 1</Button> : null}
            &nbsp;
            {record.link2 !== '' ? <Button size="small" href={record.link2} target="_blank" type="primary">Source 2</Button> : null}
            &nbsp;
            {record.link3 !== '' ? <Button size="small" href={record.link3} target="_blank" type="primary">Source 3</Button> : null}
          </Descriptions.Item>

          <Descriptions.Item span={24} label={<b>Description</b>}>
            <Typography.Paragraph
              style={{
                margin: 0,
                padding: 10,
                borderRadius: 5,
              }}
              copyable
            >
              {record.incident_description}
            </Typography.Paragraph>
          </Descriptions.Item>
        </Descriptions>
      </OnMobile>
    </>
  );
  return (
    <div>
      <Head>
        <title>Women.krd</title>
        <meta
          name="description"
          content="is a virtual platform that documents women and
            girls killed in the name of honour within the Iraqi Kurdistan Region"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row gutter={[10, 20]}>
        <Col span={24}>
          <Filters onValuesChange={filterValuesChange} />
        </Col>
        <Col span={24}>
          <ReportStatistics
            ranges={
            shouldPassRanges ? [previosPeriod, currentPeriod] : []
            }
            filters={filters}
          />
        </Col>
        <Col span={24}>
          <Badge.Ribbon text={<a style={{ color: 'white' }} target="_blank" href="https://docs.google.com/spreadsheets/d/18CX2__ItXMn_gqQS4wCMIkirzeRl_zidpQGdC1kboD4" rel="noreferrer">Explore Data</a>} color="green">
            <Table
              size="small"
              bordered
              columns={columns}
              dataSource={filteredRecords}
              onChange={tableChanged}
              pagination={pagination}
              rowKey={(record) => `${record.name}-${record.incident_date}-${record.age_range}`}
              expandable={{
                expandedRowRender: rowExpanRendrer,
                rowExpandable: (record) => record.incident_description !== '',
              }}
            />
          </Badge.Ribbon>
        </Col>
      </Row>
    </div>
  );
}

export default Report;
