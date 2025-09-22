import { Button, TextField } from '@mui/material';

import React, { useState } from 'react';

interface ToolbarProps {
  onSearch: (keyword: string) => void;
  handleForm:(status:boolean)=>void
}

const Toolbar: React.FC<ToolbarProps> = ({ onSearch,handleForm }) => {
  const [keyword, setKeyword] = React.useState('');
  const [statusForm,setStatusForm] = useState(false)

  return (
    <div className="flex justify-between mb-4">
      <Button variant="contained" color="primary" onClick={()=>{handleForm(!statusForm); setStatusForm(!statusForm)}}>
        Thêm mới sinh viên
      </Button>
      <div className="flex gap-2">
        <TextField
          size="small"
          placeholder="Search Here"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button variant="contained" onClick={() => onSearch(keyword)}>
          Tìm kiếm
        </Button>
        <Button variant="outlined">Sắp xếp</Button>
      </div>
    </div>
  );
};

export default Toolbar;
