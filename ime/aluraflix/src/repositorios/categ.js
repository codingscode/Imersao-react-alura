import config from '../config/config'

const url_categorias = `${config.url_backend_top}/categorias`

function acessarTodoscomVideo() {

    console.log('*', url_categorias)

    return fetch(`${url_categorias}?_embed=videos`).then(async (res) => {
         if (res.ok) {
             const resposta = await res.json()
             return resposta
             
         }

         throw Error('Não foi possível acessar os dados')
    })

}

export default {
   acessarTodoscomVideo
}
