import config from '../config/config'

const url_categorias = `${config.url_backend_top}/categorias?_embed=videos`

function acessarTodoscomVideo() {

    console.log(url_categorias)

    return fetch(url_categorias).then(async (res) => {
         const resposta = await res.json()
         return resposta
    })

}

export default {
   acessarTodoscomVideo
}
