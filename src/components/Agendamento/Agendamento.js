import React, { useState, useEffect } from 'react'

import './Agendamento.css'

function Agendamento(props) {
    const { dia, mes, ano, hora, minuto, nomeCliente, nomeCachorro, obs, telefone, onClick, cor, banho, hotel, taxi, creche, tosa, higiene, fixo } = props
    const [diaFixo, setDiaFixo] = useState('')
    const novoMinuto = "00"
    let tipo = ""
    let eh00 = false
    
    if(minuto == 0){
        eh00 = true
    }

    if(banho) {
        if(tipo.length == 0){
            tipo += "Banho"
        } else {
            tipo += ", Banho"
        }  
    }
    if(hotel) {
        if(tipo.length == 0){
            tipo += "Hotel"
        } else {
            tipo += ", Hotel"
        } 
    }
    if(taxi) {
        if(tipo.length == 0){
            tipo += "Taxi"
        } else{
            tipo += ", Taxi"
        }
    }
    if(creche) {
        if(tipo.length == 0){
            tipo += "Creche"
        } else {
            tipo += ", Creche"
        }   
    } 
    if(tosa) {
        if(tipo.length == 0){
            tipo += "Banho e Tosa"
        } else {
            tipo += ", Banho e Tosa"
        }
    }
    if(higiene) {
        if(tipo.length == 0){
            tipo += "Banho e Tosa Higiênica"
        } else {
            tipo += ", Banho e Tosa Higiênica"
        }
            
    }

    useEffect(() => {
        if(fixo) {
            const today = Date.parse(`${ ano }/${ mes }/${ dia }`);
            const date = new Date(today)
            var weekday = new Array(7);
            weekday[0] = "Domingo";
            weekday[1] = "Segunda";
            weekday[2] = "Terça";
            weekday[3] = "Quarta";
            weekday[4] = "Quinta";
            weekday[5] = "Sexta";
            weekday[6] = "Sábado";

            setDiaFixo(weekday[date.getDay()]);
        }
    })

    return(
        <tbody>
            <tr className="linha-tabela" style={{ backgroundColor: cor }} onClick={ onClick }>
                <td className="column1">{ nomeCliente }</td>
                <td className="column2">{ nomeCachorro }</td>
                { fixo && (
                    <td className="column3"></td>
                ) }
                { !fixo && (
                    <td className="column3">{ `${ dia }/${ mes }/${ ano }` }</td>
                ) }

                { eh00 && (
                    <td className="column4">{ `${ hora }:${ novoMinuto }` }</td>
                ) }

                { !eh00 && (
                    <td className="column4">{ `${ hora }:${ minuto }` }</td>
                ) }

                <td className="column5">{ tipo }</td>
                <td className="column6">{ obs }</td>
                <td className="column7">{ telefone }</td>
                { fixo && (
                    <td className="column8">{ diaFixo }</td>
                ) }
                { !fixo && (
                    <td className="column8"></td>
                ) }
            </tr>
        </tbody>
    )
}

export default Agendamento