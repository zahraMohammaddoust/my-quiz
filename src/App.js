import React, { useState,useEffect } from "react";
import LoginForm from "./components/LoginForm";
import Start from "./components/start";
import Question from "./components/Question";
import quizData from './data/quiz.json'
import End from "./components/End";
import Modal from "./components/Modal"

let interval;


function App() {
  const adminUser={
    email:"zahramohammaddoost@gmail.com",
    password:"Zm11",
    name:"zahra"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    // console.log(details);
     if(details.email == adminUser.email && details.password == adminUser.password && details.name == adminUser.name){
    // console.log("Logged in")
    setUser({
      name: details.name,
      email: details.email
    });
    }else{
    // console.log("Details do not match!");
    setError("Details do not match!")
    }
  }

  const Logout = () => {
    setUser({ name: "", email: "", password:"" });
  }

// quiz-------------------------------------
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [time, setTime] = useState(0);
  const[showModal, setShowModal] = useState(false)


  useEffect(() => {
    if(step === 3){
      clearInterval(interval);
    }
  },[step]);


  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1)
    }, 1000);
  }

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(1);
    setTime(0);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1)
    },1000);

  }

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>welcome, <span>{user.name}</span></h2>

          {step === 1 && <Start onQuizStart={quizStartHandler}/>}
          {step ===2 && <Question
          data={quizData.data[activeQuestion]}
          onAnswerUpdate={setAnswers}
          numberOfQuestion={quizData.data.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
          />}
          {step === 3 && <End
          results={answers}
          data={quizData.data}
          onReset={resetClickHandler}
          onAnswersCheck={() => setShowModal(true)}
          time={time}    
          />}

          {showModal && <Modal
          onClose={() => setShowModal(false)}
          results={answers}
          data={quizData.data}
          
          />}
                    <button className="mt-5" onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
      
    </div>
  );
}

export default App;
