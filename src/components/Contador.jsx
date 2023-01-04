import React, { useState } from "react";
import '../Bootstrap.css'
import Botao from "../elements/Botao";

export default function Contador(){
    
    const [number, setNumber] = useState(0)
    const [passo, setpasso] = useState(1)

    function Incrementa(){
        setNumber(number + passo)
    }
    function Decrementa(){
        setNumber(number - passo)
    }
    function mudou(e){
        setpasso(parseInt(e.target.value))
    }

    return (
        <div className={`container d-flex justify-content-center`}>
            <div>
                <h2 className="display-4">Contador</h2>
                <p className="display-5">Valor: <span className={`text-primary`}>{number}</span></p>
                <div className={`d-flex justify-content-center`}>
                    <Botao funcao={Incrementa} color={`primary`}>+</Botao>
                    <Botao funcao={Decrementa} color={`secondary`}>-</Botao>
                </div>
                <p>passo: <span className={`text-primary`}>{passo}</span></p>
                <input type="number" placeholder="input a number" onChange={mudou} className={`form-control`} />
            </div>
        </div>
    )
}