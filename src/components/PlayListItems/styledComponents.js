import styled from 'styled-components'

import {AiOutlineDelete} from 'react-icons/ai'

export const ListItemPlayList = styled.li`
  list-style-type: none;
  width: 100%;
  min-height: 120px;
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ImageNameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 7px;
`

export const SongImage = styled.img`
  width: 180px;
  height: 120px;
  margin-right: 7px;
`

export const TrackNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7px;
`

export const TrackName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
`

export const TrackType = styled.p`
  color: #3b82f6;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
`

export const TrackDurationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 7px;
  margin-right: 15px;
`

export const TrackDuration = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-right: 15px;
`

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  margin-left: 15px;
`

export const DeleteIcon = styled(AiOutlineDelete)`
  width: 22px;
  height: 22px;
  color: #ffffff;
`
