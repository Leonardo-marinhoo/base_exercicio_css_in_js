import styled from 'styled-components'

const VagaContainer = styled.li`
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.08);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);

    a {
      border-color: var(--cor-principal);
      background-color: var(--cor-secundaria);
      color: var(--cor-principal);
    }
  }
`
const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
const Link = styled.a`
  border-color: var(--cor-secundaria);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
const Description = styled.li`
  font-weight: normal;
`
type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => {
  return (
    <VagaContainer>
      <Title>{props.titulo}</Title>
      <Description>
        <li>
          <b>Localização:</b> {props.localizacao}
        </li>
        <li>Senioridade: {props.nivel}</li>
        <li>Tipo de Contratação: {props.modalidade}</li>
        <li>
          Salário: {props.salarioMin} - {props.salarioMax}
        </li>
        <li>Localização: {props.localizacao}</li>
      </Description>
      <Link href="#">Ver detalhes e candidatar-se</Link>
    </VagaContainer>
  )
}

export default Vaga
