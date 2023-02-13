import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import IconButton from 'Components/IconButton'
import PauseIcon from 'Components/PauseIcon'
import PlayIcon from 'Components/PlayIcon'

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
        <IconButton
          aria-label="Go to the previous image"
          variant="icon"
          icon={<PauseIcon />}
          onClick={() => setPlaying(false)}
        />
      ) : (
        <IconButton
          aria-label="Go to the previous image"
          variant="icon"
          icon={<PlayIcon />}
          onClick={() => setPlaying(true)}
        />
      )}
    </div>
  )
}

export default VideoComponent
