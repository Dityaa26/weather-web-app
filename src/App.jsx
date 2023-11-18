import useWeather from './hooks/useWeather'
import Header from './components/Header/Header'
import Search from './components/Search/Search';
import MainContainer from './components/MainContainer/MainContainer';

function App() {
  
  // const data = useWeather('Mahasamund');
  // if(data) console.log('data===>', data)

  return (
    <div className="bg-[#aac2dc]">
      <Header />
      <Search />
      <MainContainer />
    </div>
  );
}

export default App
