import ReactCodeMirror from '@uiw/react-codemirror';
import Split from 'react-split';
import PreferenceNavbar from './PreferenceNavbar';
import TestCases from './TestCases';

const Answer = () => {
  return (
    <div className='flex flex-col'>
      <PreferenceNavbar />
      <Split
        className=''
        direction='vertical'
        sizes={[60, 40]}
        minSize={60}
      >
        <div className='bg-dark-layer-1'>
          <ReactCodeMirror />
        </div>
        <div className=''>
          <TestCases />
        </div>
      </Split>
    </div>
  );
};

export default Answer;
