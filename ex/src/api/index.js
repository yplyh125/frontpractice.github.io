import axios from 'axios'; // axios 임포트해주기 

function signupApi() {   // api를 get 방식으로 받아오는 통신전용 메소드!
  const BASE_URL = 'http://localhost:8080/manager/login';
  return axios.get(BASE_URL);
}

export { signupApi };
