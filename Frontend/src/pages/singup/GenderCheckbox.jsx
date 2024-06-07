import React from 'react'

const GenderCheckbox = ({onCheckBoxChange,selectedGender}) => {
  return (
    <div className='flex'>
       
       <div className='form-control'>
           <label className={`label gap-2 cursor-pointer ${selectedGender==="male" ? "selected":""}` }>
           <span className='label-text text-gray-100'>Male</span>
         
           <input type="checkbox"  className='checkbox border-slate-900 text-gray-100'
           checked={selectedGender==="male"}
           onChange={()=>onCheckBoxChange("male")}/>
           </label>
       </div>

       <div className='form-control'>
           <label className={`label gap-2 cursor-pointer ${selectedGender==="female" ? "selected":""}`}>
           <span className='label-text text-gray-100'>female</span>
         
           <input type="checkbox"  className='checkbox border-slate-900 text-gray-100'
           checked={selectedGender==="female"}
           onChange={()=>onCheckBoxChange("female")}/>
           </label>
       </div>

    </div>
  )
}

export default GenderCheckbox




// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex'>
       
//        <div className='form-control'>
//            <label className={`label gap-2 cursor-pointer`}>
//            <span className='label-text text-gray-100'>Male</span>
         
//            <input type="checkbox"  className='checkbox border-slate-900 text-gray-100'/>
//            </label>
//        </div>

//        <div className='form-control'>
//            <label className={`label gap-2 cursor-pointer`}>
//            <span className='label-text text-gray-100'>FeMale</span>
         
//            <input type="checkbox"  className='checkbox border-slate-900 text-gray-100'/>
//            </label>
//        </div>

//     </div>
//   )
// }

// export default GenderCheckbox