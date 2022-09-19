import './App.css';
import Review from './components/Review';

function App() {
  return (
    <div className='container'>
        <div className='title'>
          <h2>Our Reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </div>
  );
}

export default App;
