import React, { useState } from 'react'
import ReactPlayer from 'react-player'

const VideoComponent = ({ videoUrl }) => {
  const [playing, setPlaying] = useState(false)
  const play = () => setPlaying(true)
  const pause = () => setPlaying(false)
  return (
    <div className="player-wrapper">
      <div className="container">
        <ReactPlayer
          url={videoUrl?.src}
          className="react-player"
          playing={playing}
          onPlay={play}
          onPause={pause}
          width="100%"
          height="100%"
          config={{ file: { attributes: { poster: videoUrl?.posterUrl } } }}
        />
        {playing ? (
          <button className="play-bg flex" aria-label="Go to the previous image" onClick={pause} />
        ) : (
          <button aria-label="Go to the previous image " className="pause-bg flex" onClick={play} />
        )}
      </div>
    </div>
  )
}

export default VideoComponent
