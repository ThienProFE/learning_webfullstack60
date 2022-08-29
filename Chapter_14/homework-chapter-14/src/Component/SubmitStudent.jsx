import React from "react";
import { Form, Input, Button, Radio } from "antd";
import { useInput } from "./hooks";

const SubmitStudent = ({ onAddStudent }) => {
  const id = useInput();
  const name = useInput();
  const age = useInput();
  const gender = useInput();
  const address = useInput();
  const phone = useInput();
  const introduction = useInput();

  const handleAddNewStudent = () => {
    const student = { id, name, age, gender, address, phone, introduction };
    onAddStudent(student);
  };

  //Layout form
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 10 },
    style: { paddingTop: 30 },
  };

  return (
    <>
      <Form {...layout} name="nest-messages">
        <Form.Item
          name="Số thứ tự"
          label="Số thứ tự"
          rules={[{ required: true }]}
        >
          <Input value={id.value} onChange={id.onChange} />
        </Form.Item>
        <Form.Item
          name="Họ và tên"
          label="Họ và tên"
          rules={[{ required: true }]}
        >
          <Input value={name.value} onChange={name.onChange} />
        </Form.Item>
        <Form.Item name="Tuổi" label="Tuổi" rules={[{ required: true }]}>
          <Input value={age.value} onChange={age.onChange} />
        </Form.Item>
        <Form.Item
          name="Giới tính"
          label="Giới tính"
          rules={[{ required: true }]}
        >
          <Radio.Group value={gender.value} onChange={gender.onChange}>
            <Radio value="Nam"> Nam </Radio>
            <Radio value="Nữ"> Nữ </Radio>
            <Radio value="Khác"> Khác </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="Quê quán"
          label="Quê quán"
          rules={[{ required: true }]}
        >
          <Input value={address.value} onChange={address.onChange} />
        </Form.Item>
        <Form.Item
          name="Số điện thoại"
          label="Số điện thoại"
          rules={[{ required: true }]}
        >
          <Input value={phone.value} onChange={phone.onChange} />
        </Form.Item>
        <Form.Item name="Mô tả bản thân" label="Mô tả bản thân">
          <Input.TextArea
            value={introduction.value}
            onChange={introduction.onChange}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
          <Button
            type="primary"
            htmlType="submit"
            onClick={handleAddNewStudent}
          >
            Thêm học viên
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SubmitStudent;
