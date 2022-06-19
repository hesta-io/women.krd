import { useState, useContext } from 'react';
import {
  Row, Col, Select, Form,
  Button, DatePicker,
  Drawer,
} from 'antd';
import { ClearOutlined, FilterOutlined } from '@ant-design/icons';
import dynamic from 'next/dynamic';
import DataContext from '../helpers/DataContext';

const OnDesktop = dynamic(() => import('../helpers/MediaQuery').then((Comp) => Comp.OnDesktop), {
  ssr: false,
});
const OnMobile = dynamic(() => import('../helpers/MediaQuery').then((Comp) => Comp.OnMobile), {
  ssr: false,
});
export default function Filters(props) {
  const [mainForm] = Form.useForm();
  const { types } = useContext(DataContext);
  const [isEmpty, setIsEmpty] = useState(true);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const toggleDrawer = () => {
    setDrawerVisible((v) => !v);
  };
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
  const FiltersForm = (
    <Form style={{ marginBottom: -20 }} form={mainForm} onValuesChange={onValuesChange} layout="vertical">
      <Row gutter={[10, 0]}>
        <Col xs={24} sm={24} md={4} lg={4}>
          <Form.Item label="Date" name="date">
            <DatePicker.RangePicker style={{ width: '100%' }} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={3} lg={3}>
          <Form.Item label="Provinces" name="province">
            <Select key="Provinces" allowClear style={{ width: '100%' }}>
              {types?.provinces?.map((v) => <Select.Option key={v} value={v}>{v}</Select.Option>)}
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={3} lg={3}>
          <Form.Item label="Age" name="age">
            <Select key="Age" allowClear style={{ width: '100%' }}>
              {types?.ageGroups?.map((v) => <Select.Option key={v} value={v}>{v}</Select.Option>)}
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={3} lg={3}>
          <Form.Item label="Occupation" name="occupation">
            <Select key="Occupation" allowClear style={{ width: '100%' }}>
              {types?.occupations?.map((v) => <Select.Option key={v} value={v}>{v}</Select.Option>)}
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={3} lg={3}>
          <Form.Item label="Relationship" name="suspect_relationship">
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

        <Col xs={24} sm={24} md={3} lg={3}>
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
        <Col xs={24} sm={24} md={4} lg={4}>
          <Form.Item label="Circumstance" name="circumstance">
            <Select key="Circumstance" allowClear style={{ width: '100%' }}>
              {types?.apparentCircumstances?.map(
                (v) => <Select.Option key={v} value={v}>{v}</Select.Option>,
              )}
            </Select>
          </Form.Item>
        </Col>
        <OnDesktop>

          <Col xs={24} sm={24} md={1} lg={1}>
            <Form.Item label=" ">
              <Button disabled={isEmpty} onClick={resetForm} icon={<ClearOutlined />} block danger type="primary" />
            </Form.Item>
          </Col>
        </OnDesktop>
        <OnMobile>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Form.Item label=" ">
              <Button disabled={isEmpty} onClick={resetForm} icon={<ClearOutlined />} block danger type="primary" />
            </Form.Item>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Form.Item label=" ">
              <Button onClick={toggleDrawer} icon={<FilterOutlined />} block type="primary">Filter</Button>
            </Form.Item>
          </Col>
        </OnMobile>
      </Row>
    </Form>
  );

  return (
    <>
      <OnDesktop>
        {FiltersForm}
      </OnDesktop>
      <OnMobile>
        <Drawer forceRender title="Apply Filters" visible={drawerVisible} onClose={toggleDrawer} width="100%">
          {FiltersForm}
        </Drawer>
        <Button style={{ marginBottom: -10 }} onClick={toggleDrawer} icon={<FilterOutlined />} block type="primary">Filters</Button>

      </OnMobile>
    </>
  );
}
