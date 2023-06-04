import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import generate from './questions/mainPage';
import Question from './components/question';

function App() {
  return ( 
    <div className="container-md min-vh-100 pb-5 d-flex flex-column" style={{height: "100%"}}>
      <Header />
      <Question question_data={generate()} />
    </div>
   );
}

export default App;
