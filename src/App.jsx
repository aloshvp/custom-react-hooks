import './App.css'
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
    </>
  )
}

export default App