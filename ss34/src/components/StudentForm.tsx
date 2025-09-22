import {
  Button,
  MenuItem,
  Select,
  TextField,
  type SelectChangeEvent,
} from '@mui/material';

import React, { useState } from 'react';
import type { Student } from '../utils/types';

interface StudentFormProps {
  onSubmit: (student: Student) => void;
  handleUpdate: (id: string, student: Student) => void;
  isEdit: boolean;
  tempStudent: Student | undefined;
}

type InputChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type FormChangeEvent = InputChangeEvent | SelectChangeEvent;

const StudentForm: React.FC<StudentFormProps> = ({ onSubmit, isEdit, tempStudent, handleUpdate }) => {
  const [form, setForm] = React.useState<Student>(() => {
    if (tempStudent) {
      return {
        id: tempStudent.id,
        name: tempStudent.name,
        age: tempStudent.age,
        gender: tempStudent.gender,
        birthday: tempStudent.birthday,
        hometown: tempStudent.hometown,
        address: tempStudent.address,
      }
    } else {
      return {
        id: 'SV001',
        name: 'Nguyễn Văn A',
        age: 20,
        gender: 'Nam',
        birthday: '2025-11-11',
        hometown: 'Hà Nội',
        address: 'Hà Nội',
      }
    }
  });

  const handleChange = (e: FormChangeEvent) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    if (!form.id || !form.name) return;
    onSubmit(form);
    setForm({
      id: '',
      name: '',
      age: 0,
      gender: 'Nam',
      birthday: '',
      hometown: '',
      address: '',
    });
  };

  return (
    <div className="w-1/3 p-4 border rounded-xl shadow">
      <h2 className="font-semibold mb-4">Thông Tin Sinh Viên</h2>
      <div className="flex flex-col gap-4">
        <TextField
          label="Mã sinh viên"
          name="id"
          value={form.id}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Tên sinh viên"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Tuổi"
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          fullWidth
        />
        <Select name="gender" value={form.gender} onChange={handleChange} fullWidth>
          <MenuItem value="Nam">Nam</MenuItem>
          <MenuItem value="Nữ">Nữ</MenuItem>
        </Select>
        <TextField
          type="date"
          label="Ngày sinh"
          name="birthday"
          value={form.birthday}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Nơi sinh"
          name="hometown"
          value={form.hometown}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Địa chỉ"
          name="address"
          value={form.address}
          onChange={handleChange}
          fullWidth
        />
        {isEdit ? (
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={()=>{handleUpdate(form.id,form)}}>
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default StudentForm;
