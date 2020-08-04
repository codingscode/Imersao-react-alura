import React from 'react'
import PropTypes from 'prop-types'

function CampoForm({etiqueta, tipo, valor, mudanca, nome, como}) {
     const campoId = `id_${nome}`
     const Tag = como

     return (
            <div>
                <label htmlFor={campoId}>
                    {etiqueta}:
                    <Tag as={como} id={campoId} type={tipo} value={valor} name={nome} onChange={mudanca} />
                </label>
            
            </div>
     )
}
/* tagName={nometag} */
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