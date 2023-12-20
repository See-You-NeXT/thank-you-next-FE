import { Routes, Route, useNavigate } from 'react-router-dom';
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
      <Footer />
    </div>
  );
}

function Landing(){

  let navigate = useNavigate();

  return(
    <div>
      <div className='landing'>
        <img src='/landingpage.png'></img>
        <div className='roadmap'>
          <div className='shortcut' onClick={()=>{ navigate('/login') }}>로그인하러 가기 ➔</div>
          <div className='shortcut' onClick={()=>{ navigate('/introduce') }}>스터디 소개 보러가기 ➔</div>
        </div>
      </div>
    </div>
  );
}

export default App;
