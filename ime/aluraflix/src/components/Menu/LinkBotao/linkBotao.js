import React from 'react'



function LinkBotao(props) {
    // props => {className: "O que alguém passar", href: "/"}
    console.log(props)

    return (
        <a href={props.href} className={props.className} >
            Novo vídeo
        </a>
    )
}


export default LinkBotao