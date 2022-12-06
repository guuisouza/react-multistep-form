import { useState } from "react";

export function useForm(steps){
    const [currentStep, setCurrentStep] = useState(0) //Exibir a partir do hook o componente inicial (primeira etapa)
    
    
    return{ //Retornar qual etapa está o usuário
        currentStep,
        currentComponent: steps[currentStep], //Acesso de indice 
    };
}