import type { Student } from '../utils/types';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';
import Toolbar from '../components/Toolbar';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';

const StudentManagement = () => {
  const students = useSelector((state: RootState) => state.student)
  const dispatch = useDispatch()
  const [studentListSearch, setStudentListSearch] = useState<Student[]>()
  const [formStatus, setFormStatus] = useState(false)
  const [isEdit, setIsEdit] = useState(false);
  const [tempStudent, setTempStudent] = useState<Student|undefined>(undefined)
  
  const handleTempStudent = (student: Student) => {
    setTempStudent(student)
  }

  const handleForm = (status: boolean) => {
    setFormStatus(status)
  }

  const handleAddStudent = (student: Student) => {
    dispatch({ type: "ADD_STUDENT", payload: student });
  };

  const handleDeleteStudent = (id: string) => {
    dispatch({ type: "DELETE_STUDENT", payload: id })
  }

  const handleSearch = (keyword: string) => {
    if (keyword) {
      setStudentListSearch(students);
      dispatch({ type: "SEARCH_STUDENT", payload: keyword })
    } else {
      dispatch({ type: "SEARCH_STUDENT", payload: studentListSearch })
    }
  };

  const handleUpdate = (id: string, student: Student) => {
    handleForm(false);
    dispatch({ type: "UPDATE_STUDENT", payload1: id, payload2: student })
  }

  return (
    <div className="flex gap-6 p-6">
      <div className="flex-1">
        <Toolbar onSearch={handleSearch} handleForm={handleForm}/>
        <StudentList students={students} handleDeleteStudent={handleDeleteStudent} handleForm={handleForm} handleTempStudent={handleTempStudent}/>
      </div>
      {formStatus ? (<StudentForm onSubmit={handleAddStudent} handleUpdate={handleUpdate} isEdit={isEdit} tempStudent={tempStudent} />) : (<></>)}
    </div>
  );
};

export default StudentManagement;
