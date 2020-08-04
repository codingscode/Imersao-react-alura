import React from 'react'


function CampoForm({valor, mudanca, nome}) {
     return (
            <div>
                <label>
                    Nome da Categoria:
                    <input type="text" value={valor} name={nome} onChange={mudanca} />
                </label>
            
            </div>
     )
}


export default CampoForm