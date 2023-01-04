import React from "react";
import '../Bootstrap.css'

export default function Botao(props){
    return(
        <button onClick={props.funcao} className={`btn btn-${props.color} me-2`}>{props.children}</button>
    )
}