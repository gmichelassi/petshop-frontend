import React from 'react'

import './Header.css'

function Header(props) {

    function handleLogout() {
        localStorage.setItem('user_id', '')
        props.history.push('/')
    }

    function handleCalendario() {
        props.history.push('/calendario')
    }

    function handleAgendamentos() {
        props.history.push('/agendamentos')
    }

    return(
        <div className="header-page">
            <button className="header-buttons" onClick={ handleLogout }>Logout</button>
            <button id="calendario" className="header-buttons" onClick={ handleCalendario }>Calendário</button>
            <button className="header-buttons" onClick={ handleAgendamentos }>Agendamentos</button>
        </div>
    )
}

export default Header