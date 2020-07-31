import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive/comp_banner';
import { BannerPrincipalContainer, AreaConteudoContainer, BotaoWatch } from './bannerprincipal_estilo';

function acessarYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    )
}

export default function BannerPrincipal({
  videoTitulo,
  videoDescricao,
  url,
}) {
  const youTubeID = acessarYouTubeId(url)
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`

  return (
    <BannerPrincipalContainer backgroundImage={bgUrl}>
      <AreaConteudoContainer>
        <AreaConteudoContainer.Item>
          <AreaConteudoContainer.Title>
            {videoTitulo}
          </AreaConteudoContainer.Title>

          <AreaConteudoContainer.Description>
            {videoDescricao}
          </AreaConteudoContainer.Description>
        </AreaConteudoContainer.Item>

        <AreaConteudoContainer.Item>
          <VideoIframeResponsive
            youtubeID={youTubeID}
          />
          <BotaoWatch>
            Assistir
          </BotaoWatch>
        </AreaConteudoContainer.Item>
      </AreaConteudoContainer>
    </BannerPrincipalContainer>
  );
}
