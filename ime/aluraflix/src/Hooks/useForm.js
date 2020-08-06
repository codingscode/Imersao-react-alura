import {useState} from 'react'



function useForm (valoresIniciais) {
    const [valores, setValores] = useState(valoresIniciais) 

    function setarValor(chave, valor) {
        // chave: nome, descricao, blablá
        setValores({
            ...valores,
            [chave]: valor
        })
    }

    function tratarMudanca(evento) {
        setarValor(
           evento.target.getAttribute('name'),
           evento.target.value
        )
    }

    function limparForm() {
        setValores(valoresIniciais)
    }

    return {valores, tratarMudanca, limparForm}
}

export default useForm