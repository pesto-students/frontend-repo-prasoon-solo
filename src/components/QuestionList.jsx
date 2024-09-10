import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import authAxios from '../utils/authAxios';

const QuestionList = () => {
  const [problems, setProblems] = useState();

  const fetchProblems = async () => {
    try {
      const result = await authAxios.get('/problems/allProblems');
      if (result?.data) setProblems(result.data);
    } catch (error) {
      console.log('error', error)
    }
  };

  useEffect(() => {
    console.log('refddfdfdsfdfd')
    fetchProblems();
  }, []);

  const renderProblems = () => {
    if (problems?.length) {
      return problems.map((problem) => {
        const difficulty = () => {
          if (problem.difficulty === 'EASY') return 'text-green-500';
          if (problem.difficulty === 'MEDIUM') return 'text-yellow-500';
          else return 'text-rose-500';
        };
        return (
          <div
            key={problem.id}
            className={`flex justify-around h-12 items-center p-2 ${
              problem.order % 2 === 0 ? 'bg-dark-layer-1' : 'bg-dark-layer-2'
            }`}
          >
            <p className=' w-1/4 text-white'>Completed</p>
            <Link
              to={`/problem/${problem.id}`}
              className='w-1/4 hover:text-blue-600 cursor-pointer'
            >
              {problem.title}
            </Link>
            <p className={`${difficulty()} w-1/4`}>{problem.difficulty}</p>
            <p className='w-1/4'>{problem.category}</p>
            <p className='w-1/4'>link</p>
          </div>
        );
      });
    }
  };
  console.log('problems', problems);
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
        {renderProblems()}
        {/* <div className='flex justify-around h-12 items-center bg-dark-layer-2 p-2'>
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
        </div> */}
      </div>
    </main>
  );
};

export default QuestionList;
