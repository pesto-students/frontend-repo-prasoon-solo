const TestCases = () => {
  return (
    <div className='text-white bg-dark-layer-1 px-6 py-4'>
      <div>
        <p className='border-b border-white w-fit pb-2'>Testcases</p>
        <div className='flex mt-2'>
          <button className='bg-dark-layer-3 px-4 py-1 border border-dark-layer-3 rounded-lg mr-2'>
            Case1
          </button>
          <button className='bg-dark-layer-3 px-4 py-1 border border-dark-layer-3 rounded-lg mr-2'>
            Case2
          </button>
          <button className='bg-dark-layer-3 px-4 py-1 border border-dark-layer-3 rounded-lg mr-2'>
            Case3
          </button>
        </div>
      </div>
      <div className='mt-4'>
        <p>Input</p>
        <p className='bg-dark-layer-3 px-4 py-2 border border-dark-layer-3 rounded-lg mt-2'>
          nums = [2,4,5,6], target = 9
        </p>
      </div>
      <div className="mt-4">
        <p>Output</p>
        <p className='bg-dark-layer-3 px-4 py-2 border border-dark-layer-3 rounded-lg mt-2'>[0,1]</p>
      </div>
      <div className="flex justify-between mt-4">
        <button className='bg-dark-layer-3 px-4 py-1 border border-dark-layer-3 rounded-lg'>Console</button>
        <div>
          <button className='bg-dark-layer-3 px-4 py-1 border border-dark-layer-3 rounded-lg mr-4'>Run</button>
          <button className='bg-green-500 px-4 py-1 border border-dark-layer-3 rounded-lg'>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default TestCases;
