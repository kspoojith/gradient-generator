import styled from 'styled-components'

export const Background = styled.div`
    background-image: linear-gradient(to ${props => props.direction}, ${props =>
      props.color1}, ${props => props.color2});
      color:white;
      font-family: 'roboto';
    background-size: cover;
    height:100vh;
    width: 100vw;
    margin: 0px;
    padding: 100px;
    text-align: center;
`
export const Para = styled.p`
  font-weight: 500;
  margin-top: 50px;
  font-size:20px;
  color:  #ededed;
`
export const Input = styled.input`
  border-width:0px;
  background-color: transparent;
  width:100px;
  height:38px;
`
export const ColorsCon = styled.div`
  display:flex;
  justify-content:center;
`
export const Color = styled.div`
  margin:10px;
`
export const Button = styled.button`
  background-color:#00c9b7;
  color:#1e293b;
  width:100px;
  height:30px;
  border-radius:5px;
  border-width:0px;
`
