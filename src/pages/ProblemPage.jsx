import React from 'react';
import Split from 'react-split';
import Header from '../components/Header';
import ProblemDescription from '../components/ProblemDescription';
import Answer from '../components/Answer';

function ProblemPage() {
  return (
    <div className='h-screen'>
      <Header />
      <main className=''>
        <Split
          className='split gutter horizontal'
          direction='horizontal'
          minSize={0}
        >
          <ProblemDescription />
          <Answer />
        </Split>
      </main>
    </div>
  );
}

export default ProblemPage;
