import { Routes, Route } from 'react-router-dom';
import './App.css';

//component
import Navigation from './components/Navigation';

function App() {

  return (
    <div className="App">
      
      <Navigation />

      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/main" element={<div>메인페이지</div>}/>
        <Route path="/login" element={<div>로그인페이지</div>}/>
        <Route path="/signup" element={<div>회원가입페이지</div>}/>
        <Route path="/notice" element={<div>공지게시판페이지</div>}/>
        <Route path="/question" element={<div>질문게시판페이지</div>}/>
        <Route path="/free" element={<div>자유게시판페이지</div>}/>
        <Route path="/mypage" element={<div>마이페이지</div>}/>
      </Routes>
    </div>
  );
}

function Landing(){
  return(
    <div>
      <div>랜딩페이지</div>
    </div>
  );
}

export default App;
