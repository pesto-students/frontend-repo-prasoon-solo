import Ads from '../components/Ads';
import Header from '../components/Header';
import QuestionList from '../components/QuestionList';

function Homepage() {
  return (
    <>
      <Header />
      <main className='flex'>
        <QuestionList />
        <Ads />
      </main>
    </>
  );
}

export default Homepage;
