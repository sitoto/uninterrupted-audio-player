import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SongsList = styled.ul`
  list-style-type: none;
  border: 1px solid lightgrey;
  width: 400px;
`

const SongItem = styled.li`
  border-bottom: 1px solid lightgrey;

  display: flex;
  align-items: center;
`

const SongTitle = styled.h3`
  margin-left: 8px;
`

const SongLink = styled.a`
  text-decoration: none;
  padding: 8px;
`

const PlayBtn = styled.a`
  padding: 8px;
  cursor: pointer;
`

export default class SongsPage extends React.Component {
  playAudio = (song) => {
    window.dispatchEvent(new CustomEvent('play-audio', {detail: song}))
  }

  render() {
    const { songs } = this.props
    return (
      <SongsList>
        {
          songs.map(song =>
            <SongItem key={song.id}>
              <img src={song.cover_url} width={48} height={48}/>
              <SongTitle>{song.title}</SongTitle>
              <SongLink href={`/songs/${song.id}`}>detail</SongLink>
              <span>&nbsp;|&nbsp;</span>
              <PlayBtn onClick={()=>this.playAudio(song)}>play</PlayBtn>
            </SongItem>
          )
        }
      </SongsList>
    )
  }
}

SongsPage.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    cover_url: PropTypes.string,
    audio_url: PropTypes.string
  }))
}
