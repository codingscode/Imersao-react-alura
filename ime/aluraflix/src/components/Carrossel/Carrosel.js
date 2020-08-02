import React from 'react'
import { ContainerGrupoVideoCard, Titulo, LinkExtra } from './Carrosel_estilo'
import VideoCard from './components/VideoCard/comp_carrosel'
import Slider, {SliderItem} from './components/Slider/slider'

function Carrossel({
  ignorar1Video,
  categoria,
}) {
  const tituloCategoria = categoria.titulo
  const corCategoria = categoria.cor
  const linkExtracategoria = categoria.link_extra
  const videos = categoria.videos
  return (
    <ContainerGrupoVideoCard>
      {tituloCategoria && (
        <>
          <Titulo style={{ backgroundColor: corCategoria || 'red' }}>
            {tituloCategoria}
          </Titulo>
          {linkExtracategoria && 
            <LinkExtra href={linkExtracategoria.url} target="_blank">
              {linkExtracategoria.texto}  
            </LinkExtra>
          }
        </>
      )}
      <Slider> 
        {videos.map((video, index) => {
          if (ignorar1Video && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                corCategoria={corCategoria}
              />
            </SliderItem>
          );
        })}
      </Slider> 
    </ContainerGrupoVideoCard>
  );
}

export default Carrossel
 
