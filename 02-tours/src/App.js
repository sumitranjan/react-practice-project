import "./App.css";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      console.log(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return <Loading />;
  }

  //If All data is removed
  if (tours.length === 0) {
    return (
      <main>
        <div className='container2'>
          <h2>No Tours Left</h2>
          <button className='refreshBtn' onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <div className="container">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
