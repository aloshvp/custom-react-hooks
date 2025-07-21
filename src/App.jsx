import './App.css'
import DebouncedInput from './components/DebouncedInput';
import PostList from './components/PostList';
import useWindowSize from './hooks/useWindowSize'

function App() {

  const { height, width } = useWindowSize();

  return (
    <>
      <h2>Custom hook to track and update window dimensions dynamically</h2>
      <p>Width:{width}</p>
      <p>Height:{height}</p>
      <h2>Custom hook to fetch data from an api</h2>
      <PostList />
      <h2>Custom hook to debounce user input</h2>
      <DebouncedInput />
    </>
  )
}

export default App