import React, { FormEvent, useState } from 'react'
import styled from 'styled-components'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
const SearchBtn = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`
const InputField = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormContainer onSubmit={aoEnviarForm}>
      <InputField
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      ></InputField>
      <SearchBtn type="submit">Pesquisar</SearchBtn>
    </FormContainer>
  )
}

export default FormVagas
