import { useState } from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

export default function SelectDropdown() {
  const [show, setShow] = useState(false)
const navigate = useNavigate()
  return (    
      <div>
        <div className='relative flex hover:bg-gray-100 items-center text-[12px] justify-between text-gray-600 border rounded-md px-2 w-[216px] bg-gray-50 py-2' onClick={()=>setShow(!show)}>Manage Who can your post 
          <AiOutlineCaretDown className='ml-5 text-gray-300'/>
        </div>
        {
          show ? (
            <div className='absolute top-[161px] overflow-hidden text-gray-700 flex flex-col bg-white z-10 rounded-md border-[1px] border-gray-200'>
             <span className='py-1.5 overflow-hidden px-4 hover:bg-[#8ea1c4] hover:text-white cursor-pointer'>Public</span>

             <span className='py-1.5 overflow-hidden px-4 hover:bg-[#8ea1c4] hover:text-white cursor-pointer'>Friends</span>
             <span className='py-1.5 px-4 hover:bg-[#8ea1c4] hover:text-white cursor-pointer'>Relative</span>
             <span className='py-1.5 px-4 hover:bg-[#8ea1c4] hover:text-white cursor-pointer'>Classmates</span>
             <span className='py-1.5 px-4 hover:bg-[#8ea1c4] hover:text-white cursor-pointer'>Officemates</span>
             <span className='py-1.5 px-4 hover:bg-[#8ea1c4] hover:text-white cursor-pointer' onClick={()=>navigate("/create-union")}>Create your own Union</span>
            </div>
          ) : null
        }
        
      </div>
  );
}