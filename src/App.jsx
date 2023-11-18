import useWeather from './hooks/useWeather'

function App() {
  
  const data = useWeather('Mahasamund');
  if(data) console.log('data===>', data)

  return (
    <>
      <h1 className='text-3xl font-bold'>Weather App</h1>
    </>
  )
}

export default App
