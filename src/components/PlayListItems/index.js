import {
  ListItemPlayList,
  ImageNameContainer,
  SongImage,
  TrackNameContainer,
  TrackName,
  TrackType,
  TrackDurationContainer,
  TrackDuration,
  DeleteButton,
  DeleteIcon,
} from './styledComponents'

const PlayListItems = props => {
  const {eachObject, deleteParticularTrack} = props
  const {id, imageUrl, name, genre, duration} = eachObject

  const deleteTheTrack = () => {
    deleteParticularTrack(id)
  }

  return (
    <ListItemPlayList>
      <ImageNameContainer>
        <SongImage src={imageUrl} alt="track" />
        <TrackNameContainer>
          <TrackName>{name}</TrackName>
          <TrackType>{genre}</TrackType>
        </TrackNameContainer>
      </ImageNameContainer>
      <TrackDurationContainer>
        <TrackDuration>{duration}</TrackDuration>
        <DeleteButton
          type="button"
          onClick={deleteTheTrack}
          data-testid="delete"
        >
          <DeleteIcon />
        </DeleteButton>
      </TrackDurationContainer>
    </ListItemPlayList>
  )
}

export default PlayListItems
