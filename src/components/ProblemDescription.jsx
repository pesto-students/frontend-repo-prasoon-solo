import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import authAxios from '../utils/authAxios';
import { toast } from 'react-toastify';

const ProblemDescription = () => {
  const [problem, setProblem] = useState();
  const [constraints, setConstraints] = useState();
  const [paraStatements, setParaStatements] = useState();
  const [examples, setExamples] = useState();

  const { id } = useParams();

  const fetchProblem = async (id) => {
    try {
      if (id) {
        const results = await authAxios.get(`problems/problem/${id}`);
        if (results.status !== 200) throw new Error(results);
        const problem = results.data;
        if (problem?.id) setProblem(problem);
      }
    } catch (error) {
      console.log('error', error);
      toast.error(error.response?.data.message, { theme: 'colored' });
    }
  };

  const fetchProblemConstraints = async (constraintId) => {
    try {
      if (constraintId) {
        const results = await authAxios.get(
          `problems/problem/constraints/${constraintId}`
        );
        if (results.status !== 200) throw new Error(results);
        const constraint = results.data;
        if (constraint?.id) setConstraints(constraint);
      }
    } catch (error) {
      console.log('error', error);
      toast.error(error.response?.data.message, { theme: 'colored' });
    }
  };

  const fetchProblemParaStatements = async (paraStatementId) => {
    try {
      if (paraStatementId) {
        const results = await authAxios.get(
          `problems/problem/paraStatements/${paraStatementId}`
        );
        if (results.status !== 200) throw new Error(results);
        const statements = results.data;
        if (statements?.id) setParaStatements(statements);
      }
    } catch (error) {
      console.log('error', error);
      toast.error(error.response?.data.message, { theme: 'colored' });
    }
  };

  const fetchProblemExamples = async (examplesIds) => {
    try {
      if (examplesIds) {
        const results = await authAxios.post(`problems/problem/examples`, {
          examplesIds,
        });
        if (results?.status !== 200) throw new Error(results);
        const examples = results.data;
        if (examples?.length) setExamples(examples);
      }
    } catch (error) {
      console.log('error', error);
      toast.error(error.response?.data.message, { theme: 'colored' });
    }
  };

  useEffect(() => {
    if (problem?.id) {
      console.log('useeffect 111111111111111');
      fetchProblemConstraints(problem?.constraintId);
      fetchProblemParaStatements(problem?.paraStatementId);
      fetchProblemExamples(problem?.examplesIds);
    }
  }, [problem]);

  useEffect(() => {
    if (!problem?.id) {
      console.log('useffect 222222222222');
      fetchProblem(id);
    }
  }, [id]);

  const difficulty = () => {
    if (problem.difficulty === 'EASY') return 'text-green-500';
    if (problem.difficulty === 'MEDIUM') return 'text-yellow-500';
    else return 'text-rose-500';
  };

  const renderConstraints = () => {
    const {
      constraintOne,
      constraintTwo,
      constraintThree,
      constraintFour,
      constraintFive,
    } = constraints;
    if (constraintOne)
      return (
        <div className='mt-4 px-6'>
          <p>Constraints:</p>
          <ul className='list-disc ml-6 flex flex-col mt-4'>
            {constraintOne && (
              <li className='bg-dark-layer-3 w-fit px-2 border border-slate-600 rounded-md'>
                {constraintOne}
              </li>
            )}
            {constraintTwo && (
              <li className='bg-dark-layer-3 w-fit px-2 border border-slate-600 rounded mt-2'>
                {constraintTwo}
              </li>
            )}
            {constraintThree && (
              <li className='bg-dark-layer-3 w-fit px-2 border border-slate-600 rounded mt-2'>
                {constraintThree}
              </li>
            )}
            {constraintFour && (
              <li className='bg-dark-layer-3 w-fit px-2 border border-slate-600 rounded mt-2'>
                {constraintFour}
              </li>
            )}
            {constraintFive && (
              <li className='bg-dark-layer-3 w-fit px-2 border border-slate-600 rounded mt-2'>
                {constraintFive}
              </li>
            )}
          </ul>
        </div>
      );
    else return null;
  };

  const renderParaStatements = () => {
    const { paraOne, paraTwo, paraThree, paraFour, paraFive } = paraStatements;
    if (paraOne) {
      return (
        <div className='mt-4 px-6 text-sm'>
          {paraOne && <p>{paraOne}</p>}
          {paraTwo && <p className='mt-2'>{paraTwo}</p>}
          {paraThree && <p className='mt-2'>{paraThree}</p>}
          {paraFour && <p className='mt-2'>{paraFour}</p>}
          {paraFive && <p className='mt-2'>{paraFive}</p>}
        </div>
      );
    } else return null;
  };

  const returnExampleNum = (caseType) => {
    if (caseType === 'CASE1') return 'Example 1:';
    else if (caseType === 'CASE2') return 'Example 2:';
    else if (caseType === 'CASE3') return 'Example 3:';
  };

  const renderExamples = () => {
    if (examples?.length) {
      const intxt = 'nums = [2 , 7 , 11 , 15] , target = 9 ';
      const imgUrl =
        'https://leetclone.vercel.app/_next/static/media/reverseLL.00d07f65.jpg';
      return examples.map((example) => {
        const {
          inputText,
          outputText,
          imageUrl,
          explanation,
          case: caseType,
        } = example;
        return (
          <div className='mt-2 px-6'>
            <p className='mt-2'>{returnExampleNum(caseType)}</p>
            {imageUrl && <img src={imageUrl} />}
            <div className='bg-dark-layer-4 mt-4 p-4 rounded-lg flex flex-col'>
              <p className='font-bold'>
                Input :&nbsp;&nbsp;&nbsp;
                <span className='font-normal text-stone-300'>{inputText}</span>
              </p>
              <p className='font-bold'>
                Output :&nbsp;&nbsp;&nbsp;
                <span className='font-normal text-stone-300'>{outputText}</span>
              </p>
              {explanation && (
                <p className='font-bold'>
                  Explanation :&nbsp;&nbsp;&nbsp;
                  <span className='font-normal text-stone-300'>
                    {explanation}
                  </span>
                </p>
              )}
            </div>
          </div>
        );
      });
    } else return null;
  };

  if (problem?.id && paraStatements?.id && constraints?.id)
    return (
      <div className='h-screen text-white'>
        <div className='h-11 w-full flex bg-dark-layer-2'>
          <p className='mt-2 bg-dark-layer-1 p-2 rounded-t cursor-pointer text-xs px-4'>
            Description
          </p>
        </div>
        <div className='bg-dark-layer-1 flex flex-col justify-center'>
          <div className='mr-24'>
            <div className='h-8 px-6 text-xl mt-4'>
              {problem.order}. {problem.title}
            </div>
            <div className='flex justify-start mt-2 px-2'>
              <p className={`ml-4 ${difficulty()}`}>{problem.difficulty}</p>
              <p className='ml-4'>{problem.category}</p>
            </div>
            {renderParaStatements()}
            {renderExamples()}
            {renderConstraints()}
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className='h-screen text-white'>
        <p>Loading.....</p>
      </div>
    );
};

export default ProblemDescription;
