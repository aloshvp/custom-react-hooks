import './App.css'
import DebouncedInput from './components/DebouncedInput';
import PostList from './components/PostList';
import useWindowSize from './hooks/useWindowSize'

function App() {

  const { height, width } = useWindowSize();

  return (
    <>
      <h2>Custom hook to track and update window dimensions dynamically</h2>
      <p>Width:{height}</p>
      <p>Height:{width}</p>
      <PostList />
      <DebouncedInput />
    </>
  )
}

export default App