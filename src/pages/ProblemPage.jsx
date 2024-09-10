import React from 'react';
import Split from 'react-split';
import Header from '../components/Header';
import ProblemDescription from '../components/ProblemDescription';
import Answer from '../components/Answer';
import { useState } from 'react';
import { TESTCASETYPE } from '../utils/enums';

function ProblemPage() {
  const [caseNum,setCaseNum] = useState(TESTCASETYPE.CASE1)
  const examples = [
    {
        "id": 9,
        "imageUrl": "imageurl first src link",
        "inputText": "first input text",
        "outputText": "first ooutput text",
        "explanation": "this is first explanation",
        "problemId": 18,
        "createdAt": "2024-09-06T09:05:29.725Z",
        "updatedAt": "2024-09-06T09:05:29.725Z",
        "case": "CASE1"
    },
    {
        "id": 10,
        "imageUrl": "imageurl second src link",
        "inputText": "second input text",
        "outputText": "second ooutput text",
        "explanation": "this is second explanation",
        "problemId": 18,
        "createdAt": "2024-09-06T09:05:29.725Z",
        "updatedAt": "2024-09-06T09:05:29.725Z",
        "case": "CASE2"
    },
    {
        "id": 11,
        "imageUrl": "imageurl third src link",
        "inputText": "third input text",
        "outputText": "third ooutput text",
        "explanation": "this is third explanation",
        "problemId": 18,
        "createdAt": "2024-09-06T09:05:29.725Z",
        "updatedAt": "2024-09-06T09:05:29.725Z",
        "case": "CASE3"
    }
]
  return (
    <div className='h-screen'>
      <Header />
      <main className=''>
        <Split
          className='split gutter horizontal'
          direction='horizontal'
          // minSize={0}
        >
          <ProblemDescription />
          <Answer examples={examples} caseNum={caseNum} setCaseNum={setCaseNum}/>
        </Split>
      </main>
    </div>
  );
}

export default ProblemPage;
