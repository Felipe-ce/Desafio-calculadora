import React, { Component } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

body{
  font-family: sans-serif;
  font-size: 1.25rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
button{
  font-size: 2rem;
  paddinsg: .5rem;
  background-color: #c9557b;
  width: 40px;
  height: 40px;
  color: #fff;
  border: none;
  margin-top: 1.5rem;
  border-radius: 50%;
}
button + button {
  margin-left: 1rem;
}
h1{
  font-size: 1.5rem;
  color: #606060;
  margin-bottom: 1.5rem;
}
h2{
  height: 1rem;
  font-size: 3rem;
  text-align: center;
  margin-top: .5rem;
}
input{
  max-width: 100px;
  padding: 0.5rem;
  font-size: 1rem;
}
input + input{
  margin-left: 1rem;
}
`;

const Container = styled.div`
  width: 50vh;
  height: 50vh;
  border-radius: 50%;
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  place-items: center;
  place-content: center;
  display: grid;
`;

export class App extends Component {
  state = {
    n1: '',
    n2: '',
    res: '',
  };

  soma = () => {
    const { n1, n2 } = this.state;
    this.setState({
      res: n1 + n2,
    });
  };
  divisao = () => {
    const { n1, n2 } = this.state;
    this.setState({
      res: n1 / n2,
    });
  };
  mult = () => {
    const { n1, n2 } = this.state;
    this.setState({
      res: n1 * n2,
    });
  };
  sub = () => {
    const { n1, n2 } = this.state;
    this.setState({
      res: n1 - n2,
    });
  };

  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value),
    });
  };
  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value),
    });
  };

  clear = () => {
    this.setState({
      n1: '',
      n2: '',
      res: '',
    });
  };

  render() {
    return (
      <Container>
        <GlobalStyle />
        <h1>Calc App</h1>
        <div>
          <input onChange={this.handleChange1} value={this.state.n1} />
          <input onChange={this.handleChange2} value={this.state.n2} />
        </div>
        <div>
          <button onClick={this.divisao}>/</button>
          <button onClick={this.mult}>*</button>
          <button onClick={this.sub}>-</button>
          <button onClick={this.soma}>+</button>
          <button onClick={this.clear}>C</button>
          <h2>{this.state.res}</h2>
        </div>
      </Container>
    );
  }
}

export default App;
