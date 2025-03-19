import {DirectionItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, isSelected, directionChange} = props
  const {directionId, displayText} = directionDetails

  const onClick = () => {
    directionChange(directionId)
  }

  return (
    <DirectionItem isSelected={isSelected} onClick={onClick}>
      {displayText}
    </DirectionItem>
  )
}

export default GradientDirectionItem
