//Impor components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import UserForm from './componentes/UserForm'
import ReviewForm from './componentes/ReviewForm'
import Thanks from './componentes/Ty'

//Import Hooks
import { useForm } from './hooks/useForm'

function App(){ //Tudo dentro deste arquivo são componentes fixos que não serão alterados
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />]

  const {currentStep, currentComponent} = useForm(formComponents) //Passando os itens do array acima
  return (
    <div className="app">
      <div className="header"> {/* Div do cabeçalho do formulário */}
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos muito felizes com a sua compra, responda o formulário abaixo
          para fazer uma avaliação do produto!
        </p>
      </div>

      <div className="form-container"> {/* Div do conteúdo do formulário */}
        <p> Etapas </p> 
        <form>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="actions">
            <button type='button'>
              <GrFormPrevious/>
              <span> Voltar </span>
            </button>
            <button type='submit'>
              <span> Avançar </span>
              <GrFormNext/>
            </button>
          </div>
        </form>
      </div> 
    </div>
  )
}

export default App
