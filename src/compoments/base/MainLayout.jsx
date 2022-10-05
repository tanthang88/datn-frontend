import { ContainerFullWidth, Container } from './Container.jsx'
import Header from '../header/Header.jsx'
export default function MainLayout(props) {
  return (
    <>
      <Header />
      <ContainerFullWidth>
        <Container>{props.children}</Container>
      </ContainerFullWidth>
    </>
  )
}
