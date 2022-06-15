import {
  Row, Col, Select, Form,
  Button,
} from 'antd';
import { ClearOutlined } from '@ant-design/icons';

export default function GenerateFilters(props) {
  const { types } = props;
  return (
    <Form layout="vertical">

      <Row gutter={([10, 10])}>
        <Col span={3}>
          <Form.Item label="Provinces">
            <Select key="Provinces" allowClear style={{ width: '100%' }}>
              {types.provinces.map((v) => <Select.Option value={v}>{v}</Select.Option>)}
            </Select>
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item label="Age">
            <Select key="Age" allowClear style={{ width: '100%' }}>
              {types.ageGroups.map((v) => <Select.Option value={v}>{v}</Select.Option>)}
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="Occupation">
            <Select key="Occupation" allowClear style={{ width: '100%' }}>
              {types.occupations.map((v) => <Select.Option value={v}>{v}</Select.Option>)}
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="Suspect Relationship">
            <Select label="key" allowClear style={{ width: '100%' }}>
              {types.relationships.map((v) => <Select.Option value={v}>{v}</Select.Option>)}
            </Select>
          </Form.Item>
        </Col>

        <Col span={4}>
          <Form.Item label="Method">
            <Select key="Method" allowClear style={{ width: '100%' }}>
              {types.methodsOfKilling.map((v) => <Select.Option value={v}>{v}</Select.Option>)}
            </Select>
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item label="Circumstance">
            <Select key="Circumstance" allowClear style={{ width: '100%' }}>
              {types.apparentCircumstances.map((v) => <Select.Option value={v}>{v}</Select.Option>)}
            </Select>
          </Form.Item>
        </Col>
        <Col span={1}>
          <Form.Item label=" ">
            <Button disabled icon={<ClearOutlined />} block danger type="primary" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
