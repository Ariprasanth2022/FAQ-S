import { useState } from 'react'
import './App.css'

const FaqItems = ({question,answer}) =>{

  const toggle = ()=>{
    setShow(!show)
  }

  const [show,setShow] = useState(false);
  return(
    <div className={`faqitem ${show ? "active" : ""}`}>
      <div className="faqitemheader" onClick={toggle}>{question}</div>
      <div className="faqitembody">
        <div className="faqitemcontent">
         {answer}
        </div>
      </div>
    </div>
  )
}


const FaqAccordion = ({data}) =>{
  return(
    <div className="faqaccordion">
      <h2>FAQ's</h2>
      {data.map((item)=>(
        <FaqItems key={item.id} question={item.question} answer={item.answer}/>
      ))}
    </div>
  )
}

const data =[
  { id:1, question: "What is the correct command to create a  react-js-app?", answer:"npx create-react-app appname"},
  { id:2, question: "Which of the following is a way to handle data in React.js ?", answer:"State & Props"},
  { id:3, question: "In React.js, how we can pass the data from one component to another in React.js ?", answer:"Props"},
  { id:4, question: "What is the best definition of React.js ?", answer: "A Library for building interaction interfaces"},
  { id:5, question: "What is Babel?", answer: "Javascript Compiler"}
];

function App() {

  return (
    <>
      <div className="app">
       <FaqAccordion data={data}/>
      </div>
      
    </>
  )
}

export default App
