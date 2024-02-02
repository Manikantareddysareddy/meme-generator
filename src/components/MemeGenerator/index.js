import {Component} from 'react'

import {
  Heading,
  LabelEl,
  SecondContainer,
  InputEl,
  Input,
  Select,
  MainContainer,
  Button,
  MemeContainer,
  TopPara,
  FormContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

const OptionItem = props => {
  const {Item} = props
  const {displayText} = Item
  return <option>{displayText}</option>
}

class MemeGenerator extends Component {
  state = {
    imageInput: '',
    topInput: '',
    bottomInput: '',
    selectVal: fontSizesOptionsList[0].displayText,
    displayMeme: false,
    fontSizeList: fontSizesOptionsList,
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {displayMeme} = this.state
    this.setState({displayMeme: !displayMeme})
  }

  onChangeSize = event => {
    this.setState({selectVal: event.target.value})
  }

  onChangeImage = event => {
    this.setState({imageInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomInput: event.target.value})
  }

  render() {
    const {
      imageInput,
      topInput,
      bottomInput,
      selectVal,
      displayMeme,
      fontSizeList,
    } = this.state
    return (
      <MainContainer>
        <div>
          <Heading>Meme Generator</Heading>
          <FormContainer type="submit">
            <SecondContainer>
              <LabelEl htmlFor="image">Image URL</LabelEl>
              <InputEl>
                <Input
                  placeholder="Enter the Image Url"
                  id="image"
                  value={imageInput}
                  className="inputEl"
                  onChange={this.onChangeImage}
                />
              </InputEl>
            </SecondContainer>
            <SecondContainer>
              <LabelEl htmlFor="TopText" className="labelEl">
                Top Text
              </LabelEl>
              <InputEl>
                <Input
                  placeholder="Enter the Top Text"
                  id="TopText"
                  className="inputEl"
                  value={topInput}
                  onChange={this.onChangeTopText}
                />
              </InputEl>
            </SecondContainer>
            <SecondContainer>
              <LabelEl htmlFor="BottomText" className="labelEl">
                Bottom Text
              </LabelEl>
              <InputEl>
                <Input
                  placeholder="Enter the Bottom Text"
                  id="BottomText"
                  value={bottomInput}
                  onChange={this.onChangeBottomText}
                  className="inputEl"
                />
              </InputEl>
            </SecondContainer>
            <SecondContainer>
              <LabelEl htmlFor="select">Font Size</LabelEl>
              <InputEl>
                <Select
                  id="select"
                  className="labelEl"
                  onChange={this.onChangeSize}
                  value={selectVal}
                >
                  {fontSizeList.map(eachItem => (
                    <OptionItem key={eachItem.optionId} Item={eachItem} />
                  ))}
                </Select>
              </InputEl>
            </SecondContainer>
            <Button onClick={this.onGenerateMeme}>Generate</Button>
          </FormContainer>
        </div>
        {displayMeme === true ? (
          <MemeContainer displayMeme image={`${imageInput}`} data-testid="meme">
            <TopPara fontSize={`${selectVal}px`}>{topInput}</TopPara>
            <TopPara fontSize={`${selectVal}px`}>{bottomInput}</TopPara>
          </MemeContainer>
        ) : null}
      </MainContainer>
    )
  }
}

export default MemeGenerator
