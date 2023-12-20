import { Routes, Route } from 'react-router-dom';
import './App.css';

//component
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<div>
          <Landing />
          
        </div>}/>
        <Route path="/main" element={<div>메인페이지</div>}/>
        <Route path="/login" element={<div>로그인페이지</div>}/>
        <Route path="/signup" element={<div>회원가입페이지</div>}/>
        <Route path="/notice" element={<div>공지게시판페이지</div>}/>
        <Route path="/question" element={<div>질문게시판페이지</div>}/>
        <Route path="/free" element={<div>자유게시판페이지</div>}/>
        <Route path="/introduce" element={<div>스터디소개페이지</div>}/>
        <Route path="/gallery" element={<div>갤러리페이지</div>}/>
        <Route path="/mypage" element={<div>마이페이지</div>}/>
      </Routes>
    </div>
  );
}

function Landing(){
  return(
    <div className='landing'>
      랜딩페이지
      <div className='roadmap'>
        <div className='shortcut'>로그인하러 가깅 ➔</div>
        <div className='shortcut'>스터디 소개 보러가기 ➔</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
