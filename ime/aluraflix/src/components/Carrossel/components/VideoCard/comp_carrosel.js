import React from 'react'
import { VideoCardContainer } from './comp_carrosel_estilo'

function acessarYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    )
}


function VideoCard({ tituloCategoria, videoURL, corCategoria }) {
  const imagem = `https://img.youtube.com/vi/${acessarYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    <VideoCardContainer
      url={imagem}
      href={videoURL}
      target="_blank"
      style={{ borderColor: corCategoria || 'red' }}
      title={tituloCategoria}
    />
  )
}

export default VideoCard
