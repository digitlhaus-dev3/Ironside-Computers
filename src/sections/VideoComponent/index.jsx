import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import IconButton from 'Components/IconButton'

const VideoComponent = () => {
  const [playing, setPlaying] = useState(true)

  return (
    <div className="player-wrapper">
      <ReactPlayer
        url="https://vimeo.com/243556536"
        className="react-player"
        playing={playing}
        onPlay={playing}
        onPause={playing}
      />
      {playing ? (
        <a
          aria-label="Go to the previous image"
          className="play-bg flex"
          onClick={() => setPlaying(false)}
        />
      ) : (
        <a
          className="pause-bg flex"
          aria-label="Go to the previous image"
          onClick={() => setPlaying(true)}
          />
      )}
    </div>
  )
}

export default VideoComponent
