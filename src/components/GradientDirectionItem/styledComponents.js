import styled from 'styled-components'

export const DirectionItem = styled.button`
    background-color: ${props => (props.isSelected ? '#ededed' : '#ffffff79')};
    width:100px;
    height:38px;
    padding:10px;
    border-width:0px;
    border-radius:5px;
    margin:7px;
    font-weight: 600;
    color: ${props => (props.isSelected ? '#1e293b' : '#334155')}
`
