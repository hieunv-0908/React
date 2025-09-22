import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons'
import React from 'react'

export default function ListStudent() {
  return (
    <div className='flex items-center flex-col'>
        <div className='flex justify-between p-2'>
            <div  className='flex gap-2'>
                <input type="checkbox" />
                <span>Quét nhà</span>
            </div>
            <div className='flex gap-2'>
                <EditTwoTone />
                <DeleteTwoTone />
            </div>
        </div>
    </div>
  )
}
