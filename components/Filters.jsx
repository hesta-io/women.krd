import { useState, useContext } from 'react';
import {
  Row, Col, Select, Form,
  Button, DatePicker,
} from 'antd';
import { ClearOutlined } from '@ant-design/icons';
import DataContext from '../helpers/DataContext';

export default function Filters(props) {
  const [mainForm] = Form.useForm();
  const { types } = useContext(DataContext);
  const [isEmpty, setIsEmpty] = useState(true);
  const sendValuesChangeEvent = (formData = null, empty = true) => {
    try {
      // eslint-disable-next-line react/destructuring-assignment
      props.onValuesChange(formData, empty);
    } catch (e) {
      // useless comment
    }
  };
  const onValuesChange = (changedValue, allValues) => {
    if (
      allValues.date || allValues.province
      || allValues.age || allValues.occupation
      || allValues.suspect_relationship || allValues.circumstance
      || allValues.method
    ) {
      setIsEmpty(false);
      sendValuesChangeEvent(allValues, false);
    } else {
      sendValuesChangeEvent(allValues, true);
      setIsEmpty(true);
    }
  };
  const resetForm = () => {
    mainForm.resetFields();
    sendValuesChangeEvent(null, true);
    setIsEmpty(true);
  };
  return (
    <Form style={{ marginBottom: -20 }} form={mainForm} onValuesChange={onValuesChange} layout="vertical">
      <Row gutter={[10, 0]}>
        <Col span={4}>
          <Form.Item label="Date" name="date">
            <DatePicker.RangePicker />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item label="Provinces" name="province">
            <Select key="Provinces" allowClear style={{ width: '100%' }}>
              {types?.provinces?.map((v) => <Select.Option key={v} value={v}>{v}</Select.Option>)}
            </Select>
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item label="Age" name="age">
            <Select key="Age" allowClear style={{ width: '100%' }}>
              {types?.ageGroups?.map((v) => <Select.Option key={v} value={v}>{v}</Select.Option>)}
            </Select>
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item label="Occupation" name="occupation">
            <Select key="Occupation" allowClear style={{ width: '100%' }}>
              {types?.occupations?.map((v) => <Select.Option key={v} value={v}>{v}</Select.Option>)}
            </Select>
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item label="Suspect Relationship" name="suspect_relationship">
            <Select label="key" allowClear style={{ width: '100%' }}>
              {types?.relationships?.map((v) => (
                <Select.Option
                  key={v}
                  value={v}
                >
                  {v}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>

        <Col span={3}>
          <Form.Item label="Method" name="method">
            <Select key="Method" allowClear style={{ width: '100%' }}>
              {types?.methodsOfKilling?.map((v) => (
                <Select.Option
                  key={v}
                  value={v}
                >
                  {v}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="Circumstance" name="circumstance">
            <Select key="Circumstance" allowClear style={{ width: '100%' }}>
              {types?.apparentCircumstances?.map(
                (v) => <Select.Option key={v} value={v}>{v}</Select.Option>,
              )}
            </Select>
          </Form.Item>
        </Col>
        <Col span={1}>
          <Form.Item label=" ">
            <Button disabled={isEmpty} onClick={resetForm} icon={<ClearOutlined />} block danger type="primary" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
