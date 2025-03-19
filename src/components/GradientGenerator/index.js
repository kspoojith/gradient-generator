import {Component} from 'react'
import {
  Background,
  Para,
  Input,
  ColorsCon,
  Color,
  Button,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    directionId: gradientDirectionsList[0].directionId,
    generatedList: {color1: '#8ae323', color2: '#014f7b', directionId: 'TOP'},
  }

  directionChange = id => {
    this.setState(prev => ({
      generatedList: {...prev.generatedList, directionId: id},
    }))
  }

  color1change = event => {
    this.setState(prev => ({
      generatedList: {...prev.generatedList, color1: event.target.value},
    }))
  }

  color2change = event => {
    this.setState(prev => ({
      generatedList: {...prev.generatedList, color2: event.target.value}, // Fix: Updated color2 instead of color1
    }))
  }

  generate = () => {
    const {generatedList} = this.state
    this.setState({
      color1: generatedList.color1,
      color2: generatedList.color2,
      directionId: generatedList.directionId,
    })
  }

  render() {
    const {color1, color2, directionId, generatedList} = this.state
    const direction = gradientDirectionsList.find(
      each => each.directionId === directionId,
    )?.value

    return (
      <Background color1={color1} color2={color2} direction={direction}>
        <h1>Generate a CSS Color Gradient</h1>
        <Para>Choose Direction</Para>
        {gradientDirectionsList.map(each => (
          <GradientDirectionItem
            directionDetails={each}
            key={each.directionId}
            isSelected={generatedList.directionId === each.directionId}
            directionChange={this.directionChange}
          />
        ))}
        <Para>Pick the Colors</Para>
        <ColorsCon>
          <Color>
            <Para>{generatedList.color1}</Para>
            <Input
              type="color"
              onChange={this.color1change}
              value={generatedList.color1}
            />
          </Color>
          <Color>
            <Para>{generatedList.color2}</Para>
            <Input
              type="color"
              onChange={this.color2change}
              value={generatedList.color2}
            />
          </Color>
        </ColorsCon>
        <Button type="button" onClick={this.generate}>
          Generate
        </Button>
      </Background>
    )
  }
}

export default GradientGenerator
