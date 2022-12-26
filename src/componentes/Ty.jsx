import React from "react";
import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,

} from 'react-icons/bs';
import "./Ty.css"

const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill/>,
    neutral: <BsFillEmojiNeutralFill/>,
    satisfied: <BsFillEmojiSmileFill/>,
    love_it: <BsFillEmojiHeartEyesFill/>
}


const Thanks = ({data}) => {
    return(
        <div className="thanks-container">
            <h2>Estamos quase lá...</h2>
            <p> 
                A sua opinião é super importante, em breve você receberá um cupom de 10%
                de desconto para a sua próxima compra.
            </p>
            <p>
                Para concluir a avaliação clique no botão de enviar abaixo
            </p>
            <h3>Aqui está um resumo da sua avaliação {data.name}:</h3>
            <p className="review-data">
                <span>Satisfação com o produto:</span>
                {emojiData[data.review]}
            </p>
            <p className="review-data">
                <span>Comentário:</span>
                {data.comment}
            </p>

        </div>
    )    
}

export default Thanks