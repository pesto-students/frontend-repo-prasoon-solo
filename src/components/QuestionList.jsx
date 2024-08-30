import { Link } from 'react-router-dom';

const QuestionList = () => {
  return (
    <main className='bg-dark-layer-2 basis-2/3 h-screen p-4 text-white'>
      <div className='m-6 text-center h-10 text-xl font-bold'>
        Quality over Quantity.
      </div>
      <div className='m-6'>
        <div className='flex justify-around border-b border-white h-12 text-lg bg-dark-layer-2 p-2'>
          <p className='w-1/4'>Status</p>
          <p className='w-1/4'>Title</p>
          <p className='w-1/4'>Difficulty</p>
          <p className='w-1/4'>Category</p>
          <p className='w-1/4'>Solution</p>
        </div>
        <div className='flex justify-around h-12 items-center bg-dark-layer-2 p-2'>
        <p className=' w-1/4 text-white'>Completed</p>
          <Link className='w-1/4 hover:text-blue-600 cursor-pointer'>
            Two Sum
          </Link>
          <p className=' w-1/4 text-yellow-300'>Medium</p>
          <p className='w-1/4'>Array</p>
          <p className='w-1/4'>link</p>
        </div>
        <div className='flex justify-around h-12 rounded-lg items-center bg-dark-layer-1 p-2'>
        <p className=' w-1/4 text-white'>Incomplete</p>
          <Link className='w-1/4 hover:text-blue-600 cursor-pointer'>
            Reverse Linked List
          </Link>
          <p className='w-1/4 text-red-800'>Hard</p>
          <p className='w-1/4'>Linked List</p>
          <p className='w-1/4'>link</p>
        </div>
      </div>
    </main>
  );
};

export default QuestionList;
