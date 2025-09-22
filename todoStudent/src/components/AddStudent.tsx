import React from 'react'

export default function AddStudent() {
  return (
    <div className='flex items-center gap-[8px]'>
      <div>
        <input type="text" className='border-[2px] border-zinc-100 rounded-[8px] w-4/6' />
        <button className='border-[1px] bg-blue-400 w-2/8'>Thêm</button>
      </div>
      <span className='text-red-500 font-bold'>Không được để trống</span>
    </div>
  )
}
