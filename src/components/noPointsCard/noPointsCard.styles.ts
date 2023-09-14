import { Button, Card, Container, Text, Image, styled } from '@nextui-org/react';

export const MyCard = styled(Card, {
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: 250,
  boxShadow: '9px 8px 8px -10px rgba(0,0,0,0.75)',
  backgroundColor: 'white',
  cursor: 'pointer',
  '&::before':{
    content: "",
    width: '100%',
    height: '100%',
    position: 'absolute',
    transition: 'all 0.5s ease-in-out',
    zIndex: 1
  },
  '&:hover::before':{
    backgroundColor: '#55cce3',
    opacity: 0.9,
    zIndex: 1
  }
})

export const MyContainer = styled(Container, {
  position: 'absolute',
  top: 20
})

export const MyCardText = styled(Text, {
  color: 'gray',
  position: 'absolute',
  zIndex: 1,
  top: 0,
  right: 50,
  fontWeight: 'bold',
  fontSize: 10,
  margin: 0
})

export const MyCardCost = styled(Text, {
  display: 'none',
  position: 'absolute',
  zIndex: 1,
  top: 95,
  marginRight: 20,
  fontSize: 30,
  fontWeight: 'normal',
  margin: 0
})

export const MyCoin = styled(Image, {
  position: 'absolute',
  zIndex: 1,
  top: 102,
  left: 170
})

export const MyCardButton = styled(Button, {
  display: 'none',
  position: 'absolute',
  top: '50%',
  zIndex: 1
})
