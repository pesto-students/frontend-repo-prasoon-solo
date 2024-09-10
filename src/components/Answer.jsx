import ReactCodeMirror from '@uiw/react-codemirror';
import Split from 'react-split';
import PreferenceNavbar from './PreferenceNavbar';
import TestCases from './TestCases';

const Answer = (props) => {
  return (
    <div className='flex flex-col'>
      <PreferenceNavbar />
      <Split
        className=''
        direction='vertical'
        sizes={[60, 40]}
      >
        <div className='bg-dark-layer-1'>
          <ReactCodeMirror className='h-56' />
        </div>
        <div className='h-56 bg-blue-500'>
          <TestCases {...props}/>
        </div>
      </Split>
    </div>
  );
};

export default Answer;
