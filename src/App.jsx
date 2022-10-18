import './App.css';
import {Routes, Route} from 'react-router-dom'
import Form from "./CreatePost";
import Nav from "./Nav";
import Posts from "./Posts";
import MyPost from './MyPost';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/post" element={<Form />} />
        <Route path="/" element={<Posts />} />
        <Route path="/11" element={<MyPost />} />
      </Routes>
    </div>
  );
}


export default App;
