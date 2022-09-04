import React from "react";

const Modal = ({ onClose, results, data}) => {
    return(
        <div id="parent" className="modal is-active">
            {/* <div onClick={onClose}></div> */}
            <div className="modal-card">
                <header className="modal-card-head">
                    <p id="yourA" className="modal-card">Your answers</p>
                    <button className="delete" onClick={onClose}></button>
                </header>
                <section className="modal-card-body content">
                    <ul>
                        {results.map((result, i) =>(
                            <li key={i} className="mb-2">
                                <p id="question"><strong>{result.q}</strong></p>
                                <p id="answer" className={result.a === data[i].answer ? 'has-background-success has-text-white p-2' : 'has-background-danger has-text-white p-2'}>
                                    Your answer: {result.a}
                                </p>
                                {result.a !== data[i].answer && <p id="answer" className="has-background-link has-text-white p-2">correct answer: {data[i].answer}</p>}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    )
}
export default Modal;