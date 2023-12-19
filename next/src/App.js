import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import './App.css';

function App() {

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar style={{ borderBottom : "1px solid grey" }}>
        <Container>
          <Navbar.Brand href="#home">NeXT Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}><img src='/nextLogosmall.png'/></Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/') }}>NeXT</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/') }}>게시판</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/mypage') }}>마이페이지</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<div>랜딩페이지</div>}/>
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

export default App;
