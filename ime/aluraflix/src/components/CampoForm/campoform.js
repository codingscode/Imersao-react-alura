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
                background: orange;
            }
            /* &:focus:not([type='color']) + ${Label.Texto} {
                transform: scale(.6) translateY(-10px);
            }
            ${({ value }) => {
                    const temValor = value.length > 0;
                    return temValor && css`
                        &:not([type='color']) + ${Label.Texto} {
                            transform: scale(.6) translateY(-10px);
                        }
                    `
                }
            } */
`




function CampoForm({etiqueta, tipo, valor, mudanca, nome}) {
      
     
     const eTipotextarea = tipo === 'textarea'
     const tag = eTipotextarea ? 'textarea' : 'input'

     const campoId = `id_${nome}`
     
     return (
         <CampoFormEnvolvedor>
                <div>
                    <Label htmlFor={campoId}>
                        <Tag as={tag} id={campoId} type={tipo} value={valor} name={nome} onChange={mudanca} />
                        <Label.Texto>
                            {etiqueta}:
                        </Label.Texto>
                    </Label>
                </div>
          </CampoFormEnvolvedor>

     )
}

CampoForm.defaultProps = {
    tipo: 'text',
    valor: '',
    mudanca: () => {},
    
}

CampoForm.propTypes = {
    etiqueta: PropTypes.string.isRequired,
    tipo: PropTypes.string,
    valor: PropTypes.string.isRequired,
    nome: PropTypes.string,
    mudanca: PropTypes.func.isRequired,
    
}

export default CampoForm