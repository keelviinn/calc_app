import React, { useState, useEffect } from 'react';
import api from './services/api';
import { Wrapper, FormAndList, FormWrapper, CalcList, CardCald } from './style/global';

export default () => {
  const [calc, setCalc] = useState([])
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const auxValues = { ...values };
    auxValues[event.target.name] = event.target.value;
    setValues(auxValues);
  };
  
  useEffect( async () => {
    const { data } = await api.get('api/calc');
    setCalc(data);
  }, [values, calc]);

  const handleSubmit = callback => event => {
    event.preventDefault();
    setLoading(true);
    callback();
    setLoading(false);
    setValues({})
  };

  const sendCalc = async () => {
    await api.post('api/calc',
      {
        name: values.name,
        numberA: values.numberA,
        numberB: values.numberB,
      },
      { 'Content-Type': 'application/json' }
    )
  };

  return (
    <Wrapper>
      <h1>Calculadora de multiplicação</h1>
      <FormAndList>
        <FormWrapper>
          <h2>Digite as informações abaixo para efetuar o calculo</h2>
          <form onSubmit={handleSubmit(sendCalc)}>
            <label>
              Nome:
              <input
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Digite o seu nome"
              />
            </label>
            <label>
              Primeiro número:
              <input
                onChange={handleChange}
                type="text"
                name="numberA"
                placeholder="Digite o primeiro numero"
              />
            </label>
            <label>
              Segundo número:
              <input
                onChange={handleChange}
                type="text"
                name="numberB"
                placeholder="Digite o segundo numero"
              />
            </label>
            <button type="submit">{loading ? "Enviando..." : "Enviar"}</button>
          </form>
        </FormWrapper>
        
        <CalcList>
          <h2>Lista de Calculos</h2>
          {calc.length === undefined ?
            <p>Sem resoluções de calculos </p> :
            <div>
              {calc.map((item) => {
                return (
                  <CardCald>
                    <p>Nome do solicitante: <span>{item.name}</span></p>
                    <p>resolução: <span>{item.numberA}</span> x <span>{item.numberB}</span> = <span>{item.calculator}</span></p>
                  </CardCald>
                )
              })}
            </div>
          }
        </CalcList>
      </FormAndList>
    </Wrapper>
  );
}
