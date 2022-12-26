//Impor components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr';
import {FiSend} from 'react-icons/fi';
import UserForm from './componentes/UserForm';
import ReviewForm from './componentes/ReviewForm';
import Thanks from './componentes/Ty';
import Steps from './componentes/Steps';

//Import Hooks
import { useForm } from './hooks/useForm';
import {useState} from "react";

import "./App.css";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
}

function App(){ //Tudo dentro deste arquivo são componentes fixos que não serão alterados
  const [data, setData] = useState(formTemplate) //Inicializar ele como um template e esse data será compartilhado com todos componentes
  
  const updateFieldHandler = (key, value) => {
    return setData((prev) => {
      return {...prev, [key]: value}
    })
  }

  const formComponents = [
  <UserForm data={data} updateFieldHandler={updateFieldHandler}/>, 
  <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>, 
  <Thanks data={data}/>] //Passando o data para os componentes em forma de prop

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents) //Passando os itens do array acima
  return (
    <div className="app">
      <div className="header"> {/* Div do cabeçalho do formulário */}
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos muito felizes com a sua compra, responda o formulário abaixo
          para fazer uma avaliação do produto!
        </p>
      </div>

      <div className="form-container"> {/* Div do conteúdo do formulário */}
        <Steps currentStep = {currentStep}/>
        <form onSubmit={(eventStep) => changeStep(currentStep + 1, eventStep)}>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="actions">
            {!isFirstStep && (
              <button type='button' onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious/>
              <span> Voltar </span>
            </button>
            )}
            {!isLastStep ? (
              <button type='submit'>
              <span> Avançar </span>
              <GrFormNext/>
            </button>
            ) : (
              <button type='button'>
              <span> Enviar </span>
              <FiSend/>
            </button>)}
          </div>
        </form>
      </div> 
    </div>
  )
}

export default App
