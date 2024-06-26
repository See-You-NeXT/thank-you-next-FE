import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { RiEmotionSadLine } from "react-icons/ri";

//component
import Navigation from './components/Navigation';
import Footer from './components/Footer';

//pages
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Notice from './pages/Notice';
import Question from './pages/Question';
import Free from './pages/Free';
import WritePost from './pages/WritePost';
import EditPost from './pages/EditPost';
import BoardPost from './pages/BoardPost';
import Introduce from './pages/Introduce';
import Activity from './pages/Activity';
import Gallery from './pages/Gallery';
import GalleryInfo from './pages/GalleryInfo';
import GalleryUpload from './pages/GalleryUpload';
import MyPage from './pages/MyPage';
import MyPost from './pages/MyPost';
import MyComment from './pages/MyComment';
import MyProfile from './pages/MyProfile';
import EditMyProfile from './pages/EditMyProfile';
import MyInfo from './pages/MyInfo';
import Admin from './pages/Admin';
import ManageUsers from './pages/ManageUsers';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<div>
          <Landing />
          
        </div>}/>
        <Route path="/main" element={<Main />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/notice" element={<Notice />}/>
        <Route path="/question" element={<Question />}/>
        <Route path="/free" element={<Free />}/>
        <Route path="/writePost" element={<WritePost />} />
        <Route path="/editPost" element={<EditPost />} />
        <Route path="/boardPost" element={<BoardPost />} />
        <Route path="/introduce" element={<Introduce />}/>
        <Route path="/activity" element={<Activity />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/galleryInfo" element={<GalleryInfo />}/>
        <Route path="/galleryUpload" element={<GalleryUpload />}/>
        <Route path="/myPage" element={<MyPage />}/>
        <Route path="/myPost" element={<MyPost />}/>
        <Route path="/myComment" element={<MyComment />}/>
        <Route path="/myProfile" element={<MyProfile />}/>
        <Route path="/editMyProfile" element={<EditMyProfile />}/>
        <Route path="/myInfo" element={<MyInfo />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/manageUsers" element={<ManageUsers />}/>


        <Route path="*" element={
          <div className='notFoundPage'>
            <div className="sad">
              <RiEmotionSadLine size={60}/>
            </div>
            <div className='notFoundText'>
              404 Not Found
            </div>
          </div>}
        />
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
        <img src='/landingpage.png'/>
        <div className='roadmap'>
          <div className='shortcut' onClick={()=>{ navigate('/login') }}>로그인하러 가기 ➔</div>
          <div className='shortcut' onClick={()=>{ navigate('/introduce') }}>스터디 소개 보러가기 ➔</div>
          <div className='shortcut' onClick={()=>{ navigate('/activity') }}>스터디 활동 보러가기 ➔</div>
        </div>
      </div>
    </div>
  );
}

export default App;
