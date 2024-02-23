import { BsCircleFill } from 'react-icons/bs';
import { FaRegWindowMinimize, FaRegSquare } from 'react-icons/fa';
import { RiCloseFill } from 'react-icons/ri'
import Square from './square';

export default function Modal ({children}) {
  return (
    <div className='w-screen flex flex-col px-6 md:px-12'>
        <span className='w-full h-10 bg-green-d/70 rounded-t-2xl border-2 border-solid border-violet-500 flex justify-between items-center p-1 px-4'>
          <div className='flex gap-2'>
             <BsCircleFill className='text-gray-200'/>
             <BsCircleFill className='text-gray-200'/>
             <BsCircleFill className='text-gray-200'/>
          </div>
          <div className='flex gap-2'>
            <Square>
              <FaRegWindowMinimize className='hover:scale-90'/>
            </Square>
            <Square>
              <FaRegSquare className='w-3.5 h-3.5 hover:scale-90'/>
            </Square>
            <Square>
              <RiCloseFill className='w-6 h-6 hover:scale-90'/>
            </Square>
          </div>
        </span>
        <div
          id="modal"
          className='bg-green-c/90 p-2 w-full shadow-lg border-x-2 border-solid border-violet-500'>
            <div className='bg-easy/70 p-2 border-2 border-solid border-violet-500'>
              <div className="bg-white border-2 border-solid  border-violet-500">
                <div className="content bg-[url('/planet-5.jpg')] bg-cover">
                  {children}
                </div>
             </div>
           </div>
        </div>
        <span className='w-full h-6 bg-green-c/70 rounded-b-3xl border-2 border-solid border-violet-500'></span>
    </div>
  );
};

