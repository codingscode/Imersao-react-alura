import config from '../config/config'

const url_videos = `${config.url_backend_top}/videos`

function create(objetodoVideo) {
    console.log('videos_reposit', url_videos)

    return fetch(`${url_videos}?_embed=videos`, {
             method: 'post',
             headers: {
                'Content-type': 'application/json'
             },
             body: JSON.stringify(objetodoVideo)
         })
         .then(async (res) => {
                if (res.ok) {
                    const resposta = await res.json()
                    return resposta
                }

                throw Error('Não foi possível cadastrar os dados')
    })

}

export default {
   create
}
