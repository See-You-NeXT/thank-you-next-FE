import axios from 'axios' 

/**
 * create메소드의 인자로 객체를 전달하고 이 객체 안에 설정값(config)을 설정
 * baseURL의 경우 API 주소를 숨기기 위해 .env 파일에 환경변수로 설정하였음
 * .env 파일은 .gitignore 파일에 추가하여 깃허브에는 올라가지 않음
*/
console.log("?",process.env);
console.log("?",process.env.REACT_APP_API_URL);
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  //baseURL: 'http://develop.seeunext.store',
  //headers: {'Content-Type': 'application/json'},
  timeout: 10000,  //10초 이내 응답 없으면 에러 발생
  
});

/**
 * --요청 인터셉터--
 * 첫 번째 콜백의 인자로 config를 받아오는데 이 config는 
 * 만들어놓은 axios 객체의 기본 설정을 가져오는 것
 * 이 config 를 return 해줘야지 네트워크 요청을 보낼 수 있음
 * return 해주지 않으면 요청의 설정값이 날아가서 요청이 보내지지 않음

 * 에러가 났을 시 use의 두 번째 인자로 에러 콜백함수를 넣어 처리
 * err를 인자로 받아 return값으로 Promise.reject를 보내 아예 요청을 거절
*/
instance.interceptors.request.use(
  (config) => {  
    //요청이 전달되기 전에 작업 수행

    switch(config.url){
      case '/api/member/profile': //유저 정보 조회
        config.headers = {'Content-Type': 'application/json'}
        console.log("창식앙ㅜㅜㅜ");
        break;

      case '/api/post': //게시글 등록
        config.headers = {'Content-Type': 'multipart/form-data'}
        break;
    }
    
    //차후 인증 구현 시 로그인이 되어 있다면 토큰을 담아보내는 코드를 추가해야함
    console.log(config.baseURL);
    return config;
  },
  (error) => {
    //요청 오류가 있는 작업 수행
    console.log(error);
    return Promise.reject(error);
  }
);



/**
 * --응답 인터셉터--
 * 요청과 마찬가지로 첫 번째 인자는 응답 성공, 두 번째 인자는 실패
*/
instance.interceptors.response.use(
  (response) => {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거
    // 응답 데이터가 있는 작업 수행
    console.log(response.data);
    return response;
  },
  (error) => {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

export default instance;