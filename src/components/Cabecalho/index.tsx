import styles from './Cabecalho.module.css'
import styled from 'styled-components'

// const Cabecalho = () => (
//   <header className={styles.cabecalho}>
//     <h1>EBAC Jobs</h1>
//   </header>
// )

const Header = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
  text-transform: uppercase;
`

const Cabecalho = () => {
  return (
    <>
      <Header>
        <h1>EBAC Jobs</h1>
      </Header>
    </>
  )
}

export default Cabecalho
