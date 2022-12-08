import React from "react";
import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,

} from 'react-icons/bs';

import "./ReviewForm.css";

const ReviewForm = ({data}) => {
    return(
        <div className="review-form">
            <div className="form-control score-container">
                <label className="radio-container">
                    <input type="radio" value="unsatisfied" name="review" required />
                    <BsFillEmojiFrownFill/>
                    <p>Insatisfeito</p>
                </label>

                <label className="radio-container">
                    <input type="radio" value="neutral" name="review" required />
                    <BsFillEmojiNeutralFill/>
                    <p>Poderia ser melhor</p>
                </label>

                <label className="radio-container">
                    <input type="radio" value="satisfied" name="review" required />
                    <BsFillEmojiSmileFill/>
                    <p>Satisfeito</p>
                </label>

                <label className="radio-container">
                    <input type="radio" value="love_it" name="review" required />
                    <BsFillEmojiHeartEyesFill/>
                    <p>Muito Satisfeito</p>
                </label>
            </div>
            <div className="form-control">
                <label htmlFor="comment">Comentário :</label>
                <textarea name="comment" id="comment" placeholder="Conte para nós como foi sua experiência..." required></textarea>
            </div>
        </div>
    )
}

export default ReviewForm