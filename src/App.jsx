import './App.css';
import CreatePost from "./CreatePost";
import Nav from "./Nav";
import Posts from "./Posts";
import {Routes, Route} from 'react-router-dom'
import MyPost from './MyPost';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post" element={<CreatePost />} />
        <Route path="/11" element={<MyPost />} />
      </Routes>
    </div>
  );
}


export default App;
