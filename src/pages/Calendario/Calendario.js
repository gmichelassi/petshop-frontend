import React, { useEffect } from 'react'

import api from '../../services/api'

import CalendarioComponent from '../../components/Calendario/Calendario'
import Header from '../../components/Header/Header'

function Calendario({ history }) {
    useEffect( () => {
        async function verificarLogin() {
            let user_id = localStorage.getItem('user_id')
            
            const resposta = await api.get(`verificar?user_id=${user_id}`)
            if(!resposta.data.sucesso) {
                history.push('/')
            }
        }

        verificarLogin()
    }, [] )

    return(
        <>
            <Header history={ history } />
            <CalendarioComponent />
        </>
    )
}

export default Calendario