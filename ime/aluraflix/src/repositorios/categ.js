import config from '../config/config'

//const url_categorias = `${config.url_backend_top}/categorias`

function acessarTodoscomVideo() {

    console.log(config.url_backend_top)

   /*  fetch(config.url_backend_top).then(async (res) => {
                const resposta = await res.json()
                setCategorias([
                    ...resposta,
                ]) 
            }) */




    return config.url_backend_top
}


export default {
   acessarTodoscomVideo
}




