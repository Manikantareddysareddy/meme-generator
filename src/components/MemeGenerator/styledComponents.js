import styled from 'styled-components'

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  font-size: 25px;
  @media (max-width: 577px) {
    order: 0;
  }
`
export const LabelEl = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
  font-size: 14px;
  margin-bottom: 10px;
`
export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  @media (max-width: 577px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
  }
`
export const FormContainer = styled.form`
  @media (max-width: 577px) {
    order: 2;
  }
`
export const InputEl = styled.div`
  height: 3vh;
  width: 20vw;
  font-family: 'Open Sans';
`
export const Input = styled.input`
  height: 5vh;
  width: 30vw;
  @media (max-width: 577px) {
    height: 4vh;
    width: 60vw;
  }
`
export const Select = styled.select`
  height: 5vh;
  width: 30vw;
`
export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  margin-left: 50px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 577px) {
    display: flex;
    height: 100vh;
    flex-direction: column;
    margin-left: 50px;

    align-items: center;
  }
`
export const Button = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  font-family: 'Open Sans';
  border: 0 none;
  font-size: 14px;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
`
export const MemeContainer = styled.div`
  background-image: url(${props =>
    props.displayMeme === true
      ? 'https://assets.ccbp.in/frontend/react-js/nature-img.png'
      : null});
  height: 40vh;
  width: 40%;
  margin-right: 100px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 577px) {
    background-image: url(${props =>
      props.displayMeme === true
        ? 'https://assets.ccbp.in/frontend/react-js/nature-img.png'
        : null});
    height: 40vh;
    width: 100%;
    margin-left: 20px;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    order: 1;
  }
`
export const TopPara = styled.p`
  font-size: ${props => props.fontSize};
  font-family: 'Open Sans';
  color: #ffffff;
`
export const BottomPara = styled.p`
  font-size: ${props => props.fontSize};
  font-family: 'Open Sans';
  color: #ffffff;
`
