import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Cookies from 'universal-cookie';



function App() {

  axios.get("http://localhost:3001/read", {withCredentials: true}).then((res) => {   // change this to api auth tester.
  console.log("authorizer OK! :", res.status);

  })
  .catch(function (error) {
    console.log("error", error.response.status);

    if( error.response.status== 401){

      const cookies = new Cookies();
      const currentUrl = window.location.href;
      cookies.set('CALLBACK_URL', currentUrl, { path: '/' });
      window.location.replace("http://localhost:3001/sso"); // change this to bizprac sso url
    }
  });





  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          authorizer test page.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
       
        </a>
      </header>
    </div>
  );
}

export default App;
