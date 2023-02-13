import React, { useState } from 'react'
import ReactPlayer from 'react-player'

const VideoComponent = ({ videoUrl }) => {
  const [playing, setPlaying] = useState(true)
  const play = () => setPlaying(true);
  const pause = () => setPlaying(false);
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={videoUrl?.src}
        className="react-player"
        playing={playing}
        onPlay={play}
        onPause={pause}
      />
      {playing ? (
        <a
          className="pause-bg flex"
          aria-label="Go to the previous image"
          onClick={play}
        />
      ) : (
        <a
          aria-label="Go to the previous image"
          className="play-bg flex"
          onClick={pause}
        />
      )}
    </div>
  )
}

export default VideoComponent
