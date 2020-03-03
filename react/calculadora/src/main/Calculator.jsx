import React, {Component} from 'react';
import './Calculator.css';
import Button from '../Components/Button/Button';
import Display from '../Components/Display/Display';

const initialState = {
    displayValue: 0, // valor inicial da calc
    clearDisplay: false, // limpar calc
    operation: null, // operação
    values: [0, 0], // valores da calc
    current: 0 // indice da calculadora
}

export default class Calculator extends Component {

    state = { ...initialState };

    // limpa o display
    clearMemory() {
        this.setState({ ...initialState });
    }

    // seta a operação da calc
    setOperation(operation) {
        console.log(operation);
    }

    // add um digito 
    addDigit(n) {
        // se já existir um ponto no display ignora o ponto caso 
        // tente incluir
        if (n === '.' && this.state.displayValue.includes('.')){
            return;
        };

        // evita zeros a esquerda
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
        
        // Pega o valor corrente
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + n
        this.setState({displayValue, clearDisplay: false});
    }
        
    render () {
        return (
            <div className="calculator">
                <h1>Calculadora</h1>
                <br/>
                <Button label="AC" click={this.clearMemory}/>
                <Button label="0" click={this.addDigit}/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="4" click={this.addDigit}/>
                <br/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <br/>
                <Button label="+" click={this.setOperation}/>
                <Button label="-" click={this.setOperation}/>
                <Button label="*" click={this.setOperation}/>
                <Button label="/" click={this.setOperation}/>
                <Button label="=" click={this.setOperation}/>
                <br/>
                <br/>
                <Display total={this.state.displayValue}/>
            </div>
        )
    }
}