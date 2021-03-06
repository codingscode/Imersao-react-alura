import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'




const CampoFormEnvolvedor = styled.div`
     position: relative;
     textarea {
        min-height: 150px;
     }
     input[type="color"] {
        padding-left: 56px;
     }
`

const Label = styled.label``

Label.Texto = styled.span`
        color: #E5E5E5;
        height: 57px;
        position: absolute; 
        top: 0;
        left: 16px;
        
        display: flex;
        align-items: center;
        
        transform-origin: 0% 0%;
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        
        transition: .1s ease-in-out;
`

let Tag = styled.input`
            background: #53585D;
            color: #F5F5F5;
            display: block;
            width: 100%;
            height: 57px;
            font-size: 18px;
            
            outline: 0;
            border: 0;
            border-top: 4px solid transparent;
            border-bottom: 4px solid #53585D;
            
            padding: 16px 16px;
            margin-bottom: 45px;
            
            resize: none;
            border-radius: 4px;
            transition: border-color .3s;
            
            &:focus {
                border-bottom-color: var(--primario);
            }
            &:focus:not([type="color"]) + span {
                transform: scale(.6) translateY(-10px);
            }

            ${function({hasValue}) {
                console.log('*', hasValue)
                return hasValue &&  css`
                      &:not([type="color"]) + span {
                            transform: scale(.6) translateY(-10px);
                      }
                  `
            }}
`

function CampoForm({etiqueta, tipo, valor, mudanca, nome, sugestoes}) {
      
     const eTipotextarea = tipo === 'textarea'
     const tag = eTipotextarea ? 'textarea' : 'input'

     const campoId = `id_${nome}`
     const temValor = Boolean(valor.length)
     const haSugestoes = Boolean(sugestoes.length) 
     
     return (
         <CampoFormEnvolvedor>
                <div>
                    <Label htmlFor={campoId}>
                        <Tag as={tag} hasValue={temValor} id={campoId} type={tipo} value={valor} name={nome} 
                                     onChange={mudanca} list={haSugestoes ? `sugestaopara_${campoId}` : undefined} 
                                     autoComplete={haSugestoes ? 'off' : 'on'}/>
                        <Label.Texto>
                            {etiqueta}:
                        </Label.Texto>
                        {haSugestoes && (
                            <datalist id={`sugestaopara_${campoId}`}>
                                {sugestoes.map((sug) => (
                                    <option value={sug} key={`sugestaopara_${campoId}_opcao${sug}`}>
                                        {sug}
                                    </option>
                                ))}
                            </datalist>
                        )}
                    </Label>
                </div>
          </CampoFormEnvolvedor>
     )
}

CampoForm.defaultProps = {
    tipo: 'text',
    valor: '',
    mudanca: () => {},
    sugestoes: []
}

CampoForm.propTypes = {
    etiqueta: PropTypes.string.isRequired,
    tipo: PropTypes.string,
    valor: PropTypes.string.isRequired,
    nome: PropTypes.string,
    mudanca: PropTypes.func.isRequired,
    sugestoes: PropTypes.arrayOf(PropTypes.string)
}

export default CampoForm