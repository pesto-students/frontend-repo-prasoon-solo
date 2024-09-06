import { TESTCASETYPE } from '../utils/enums';

const TestCases = (props) => {
  const { setCaseNum, examples, caseNum } = props;
  const { inputText, outputText } = examples.find(
    (example) => example.case === caseNum
  );

  return (
    <div className='text-white bg-dark-layer-1 px-6 py-4'>
      <div>
        <p className='border-b border-white w-fit pb-2'>Testcases</p>
        <div className='flex mt-2'>
          <button
            onClick={() => setCaseNum(TESTCASETYPE.CASE1)}
            className='bg-dark-layer-3 px-4 py-1 border border-dark-layer-3 rounded-lg mr-2'
          >
            Case1
          </button>
          <button
            onClick={() => setCaseNum(TESTCASETYPE.CASE2)}
            className='bg-dark-layer-3 px-4 py-1 border border-dark-layer-3 rounded-lg mr-2'
          >
            Case2
          </button>
          <button
            onClick={() => setCaseNum(TESTCASETYPE.CASE3)}
            className='bg-dark-layer-3 px-4 py-1 border border-dark-layer-3 rounded-lg mr-2'
          >
            Case3
          </button>
        </div>
      </div>
      <div className='mt-4'>
        <p>Input</p>
        <p className='bg-dark-layer-3 px-4 py-2 border border-dark-layer-3 rounded-lg mt-2'>
          {inputText}
        </p>
      </div>
      <div className='mt-4'>
        <p>Output</p>
        <p className='bg-dark-layer-3 px-4 py-2 border border-dark-layer-3 rounded-lg mt-2'>
          {outputText}
        </p>
      </div>
      <div className='flex justify-between mt-4'>
        <button className='bg-dark-layer-3 px-4 py-1 border border-dark-layer-3 rounded-lg'>
          Console
        </button>
        <div>
          <button className='bg-dark-layer-3 px-4 py-1 border border-dark-layer-3 rounded-lg mr-4'>
            Run
          </button>
          <button className='bg-green-500 px-4 py-1 border border-dark-layer-3 rounded-lg'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestCases;
