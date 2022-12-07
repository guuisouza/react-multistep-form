import { useState } from "react";

export function useForm(steps){
    const [currentStep, setCurrentStep] = useState(0) //Exibir a partir do hook o componente inicial (primeira etapa)
    
    function changeStep(i, eventStep){
        if(eventStep) eventStep.preventDefault(); 

        if(i<0 || i>=steps.length){ //Não deixa avançar além da funcionalidade
            return; 
        }
        else{
            setCurrentStep(i) //Mudar a etapa
        }
    }
    
    

    return{ //Retornar qual etapa está o usuário
        currentStep,
        currentComponent: steps[currentStep], //Acesso de indice 
        changeStep,
        isLastStep: currentStep + 1 === steps.length ? true : false, 
        isFirstStep: currentStep === 0 ? true : false,
    };
}