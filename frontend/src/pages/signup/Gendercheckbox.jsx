import React from 'react'

const Gendercheckbox = () => {
  return (
    <div className='flex gap-6'>
        <div className='form-control'>
            <label htmlFor=' label cursor-pointer ' className='flex gap-3'>
                <span className='label-text text-gray-400'>Male</span>
                <input type="checkbox" className='checkbox border-slate-900' />
            </label>
        </div>
        <div className='form-control'>
            <label htmlFor={'label gap-2 cursor-pointer'}  className='flex gap-3'>
                <span className='label-text  text-gray-400'>Female</span>
                <input type="checkbox" className='checkbox border-slate-900' />
            </label>
        </div>
    </div>
  )
}

export default Gendercheckbox