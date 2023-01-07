import './styles/App.css';
import BarChart from './components/Barchart';
import ScatteredCharts from './components/ScatteredCharts';


function App() {
  return (
    <>
      <div className='App'>
        <h1>Scattered Chart</h1>
        <ScatteredCharts/>
        {/* ++++++++++++++++++++++++++++ */}
        <h1>BarChart</h1>
        <BarChart/>
      </div>
    </>
  )

}

export default App;
