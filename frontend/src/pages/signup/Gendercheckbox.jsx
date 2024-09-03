import React from 'react'

const Gendercheckbox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className='flex gap-5 '>
        <div className='form-control'>
            <label className= {`' label cursor-pointer flex gap-3 ' ${selectedGender ==='male' ? "selected":""}`}>
                <span className='label-text text-gray-400 '>Male</span>
                <input type="checkbox" className='checkbox border-slate-900 ' 
                checked={selectedGender === "male"}
                onChange={()=>onCheckboxChange('male')}

                />
            </label>
        </div>
        <div className='form-control'>
        <label className= {`' label cursor-pointer flex gap-3 ' ${selectedGender ==='female' ? "selected":""}`}>
                <span className='label-text  text-gray-400 '>Female</span>
                <input type="checkbox" className='checkbox border-slate-900' 
                checked={selectedGender === "female"}
                onChange={()=>onCheckboxChange('female')}/>
            </label>
        </div>
    </div>
  )
}

export default Gendercheckbox