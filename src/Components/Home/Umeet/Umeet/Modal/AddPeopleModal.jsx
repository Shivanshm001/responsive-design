import { useState } from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'
import wishes from '../../../../../Assets/Images/Umeet/wishesTemplate.webp'
import selectedimg from '../../../../../Assets/Images/Umeet/Umeet-Main/Umeet-Attending.png'
import person from '../../../../../Assets/Images/Person.jpg'
import '../../Umeet.css'
import AddByContactModal from './AddByContactModal'

const dataList = [
  {
    name: "Smith",
    img: person
  },
  {
    name: "Russel",
    img: person
  },
  {
    name: "De-Villiers",
    img: person
  },
  {
    name: "Ajaykumar",
    img: person
  },
  {
    name: "Ajaykumar",
    img: person
  },
  {
    name: "Ajaykumar",
    img: person
  },
  {
    name: "Ajaykumar",
    img: person
  },
  {
    name: "Ajaykumar",
    img: person
  },
]

const AddPeopleModal = ({ onClose }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [showAddByContactModal, setShowAddByContactModal] = useState(false)

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
  }

  const handleAddByContactModal = ()=>{
   setShowAddByContactModal(true)
  }

  return (
    <div className='absolute top-0 w-full h-full flex justify-center items-center bg-gray-100' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>

     <div className={`w-[60%] flex flex-col justify-between min-h-[96%] bg-white rounded-xl p-5 ${showAddByContactModal ? '-z-10' : ''}`}>
      <div className=''>
       <div className='flex justify-start items-center border-b pb-2 text-gray-600'>
         <button className='px-5 py-1 rounded-md text-white border bg-[#649B8E]'>Choose Classmate</button>
         <button onClick={handleAddByContactModal} className='px-5 py-1 rounded-md ml-5 border boredr-[#649B8E] text-[#649B8E]'>Add by Email/Phone</button>
       </div>
       <div className=''>
        <p className='py-2'>Graduation - QIS college of Engg & Tech, Tamilnadu</p>  
        <input type='search' className='h-7 p-2 h-8 outline-none border border-gray-300 w-full bg-gray-100 rounded-md' placeholder='Search....' />
        <div className='my-3 flex items-center'>
      	 <label className='text-[17px] text-gray-700 flex items-center'>
         <input
          type="checkbox"
          checked={selectAll}
          onChange={handleSelectAllChange}
          className='w-5 h-5 mr-2'
          />Select All</label>
    	</div>
    	<div className='h-[265px] hideScroll overflow-y-scroll'>
    	{
    	 dataList.map((data, i)=>(
    	  <div key={i} className='flex items-center my-3'>    	   
    	   <div className='w-1/6'>
    	    <img src={data.img} className='w-10 h-10 rounded-full object-cover' />
    	   </div>
    	   <span className='w-4/6 font-medium text-[15px]'>{data.name}</span>
    	   <div className='w-1/6 flex justify-end'>
    	    {selectAll ? <img src={selectedimg} className='h-6 w-6'/> :
    	     <input type="checkbox" className='w-4 h-4' />
    	    }
    	   </div>
    	  </div>
    	 ))
    	}
    	</div>

       </div>            
      </div>

      <div>
       <button className='w-full py-1 rounded-xl text-white border border-[#649B8E] bg-[#649B8E]'>Save</button>
       <button onClick={onClose} className='w-full py-1 my-2 rounded-xl border border-[#649B8E] text-[#649B8E]'>Cancel</button> 
      </div>
     </div>  
     {showAddByContactModal && <AddByContactModal onClose={()=>setShowAddByContactModal(false)} />}
    </div>
  )
}

export default AddPeopleModal