import './App.css';
import {Routes, Route} from 'react-router-dom'
import Form from "./createPost/CreatePost";
import Nav from "./nav/Nav";
import Posts from "./posts/Posts";
import MyPost from "./myPost/MyPost";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/post" element={<Form />} />
        <Route exact path="/" element={<Posts />} />
        <Route exact path="/11" element={<MyPost />} />
      </Routes>
    </div>
  );
}


export default App;
