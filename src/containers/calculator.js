import React, { Component } from "react";
import Display from '../components/display';
import  Button  from '../components/buttons';




class Calculator extends Component {

    initialState = { firstValue: 0, secondValue: 0 , operador: null, valor1: 0, valor2: 0, resultado: 0, show: 0, segundo: 0 }
    
    constructor(props) {
        super(props);
        this.state = this.initialState;
    }
    putValue = (value) => {

        if (this.state.operador === null) {

            const lastValuef = this.state.firstValue;

            if (value === ',' & this.state.valor1 === 0) {
                this.setState({ firstValue: (lastValuef) + '.', valor1: 1 })
            }
            else if (this.state.valor1 !== 0) {
                    
                switch (this.state.valor1) {

                    case 1:
                        this.setState({ firstValue: (parseFloat((lastValuef)) + parseFloat((value / 10))), valor1: 2 });
                        break
                    case 2:
                        this.setState({ firstValue: (parseFloat(lastValuef) + parseFloat(value / 100)).toFixed(2), valor1: 3 });
                        break
                    case 3:
                        this.setState({ firstValue: (parseFloat(lastValuef) + parseFloat(value / 1000)).toFixed(3), valor1: 4 });
                        break
                    case 4:
                        this.setState({ firstValue: (parseFloat(lastValuef) + parseFloat(value / 10000)).toFixed(4), valor1: 5 });
                        break
                    case 5:
                        this.setState({ firstValue: (parseFloat(lastValuef) + parseFloat(value / 100000)).toFixed(5), valor1: 6 });
                        break
                    case 6:
                        this.setState({ firstValue: (parseFloat(lastValuef) + parseFloat(value / 1000000)).toFixed(6), valor1: 7 });
                        break
                    default:
                        alert('Máximo de 6 casas decimais atingido')
                }

            } else if (parseInt(this.state.firstValue) === lastValuef) {

                this.setState({ firstValue: lastValuef * 10 + value })
                
            }
            
        } else {
            this.setState({ segundo: 1 });
            const lastValues = this.state.secondValue;

            if (value === ',' &  this.state.valor2 === 0) {
                

                this.setState({ secondValue: parseInt(lastValues) + '.', valor2: 1 })
            }
            else if (this.state.valor2 !== 0) {
                    
                switch (this.state.valor2) {

                    case 1:
                        this.setState({ secondValue: (parseFloat((lastValues)) + parseFloat((value / 10))), valor2: 2 });
                        break
                    case 2:
                        this.setState({ secondValue:((parseFloat(lastValues) + parseFloat(value / 100)).toFixed(2)), valor2: 3 });
                        break
                    case 3:
                        this.setState({ secondValue: ((parseFloat(lastValues) + parseFloat(value / 1000)).toFixed(3)), valor2: 4 });
                        break
                    case 4:
                        this.setState({ secondValue: ((parseFloat(lastValues) + parseFloat(value / 10000)).toFixed(4)), valor2: 5 });
                        break
                    case 5:
                        this.setState({ secondValue: ((parseFloat(lastValues) + parseFloat(value / 100000)).toFixed(5)), valor2: 6 });
                        break
                    case 6:
                        this.setState({ secondValue: ((parseFloat(lastValues) + parseFloat(value / 1000000)).toFixed(6)), valor2: 7 });
                        break
                    default:
                        alert('Máximo de 6 casas decimais atingido')
                }

            } else if (parseInt(this.state.secondValue) === lastValues) {

                this.setState({ secondValue: lastValues * 10 + value })
                
            } else {
                this.setState({ secondValue: value });
            }
            

        }

       

    }

    pickOperation = (op) => {
        var lista = ['+', '-', '/', '*', 'x', '^'];
        var qtd = 0;
        for (let c = 0; c < lista.length; c++){
            if (this.state.operador === lista[c]) {
                qtd = 1;
            }
        }
        var valor = parseFloat(this.state.resultado);
        
    

        switch (op) {
            case 1:
                if (qtd === 1) {
                    this.setState({ operador: '+', firstValue: valor, secondValue: 0, valor2: 0, valor1:6,  resultado: 0, show: 0, segundo: 0 });
                } else {
                    this.setState({ operador: '+'});
                }
                return
               
            case 2:
                if (qtd === 1) {
                    this.setState({ operador: '-', firstValue: valor, secondValue: 0, valor2: 0, valor1:6,  resultado: 0, show: 0, segundo: 0 });
                } else {
                    this.setState({ operador: '-'});
                }
                return
              
            case 3:
                if (qtd === 1) {
                    this.setState({ operador: '/', firstValue: valor, secondValue: 0, valor2: 0, valor1:6,  resultado: 0, show: 0, segundo: 0 });
                } else {
                    this.setState({ operador: '/'});
                }
                return 
              
            case 4:
                if (qtd === 1) {
                    this.setState({ operador: 'x', firstValue: valor, secondValue: 0, valor2: 0, valor1:6,  resultado: 0, show: 0, segundo: 0 });
                } else {
                    this.setState({ operador: 'x'});
                }
                return
              
            case 5:
                if (qtd === 1) {
                    this.setState({ operador: '^', firstValue: valor, secondValue: 0, valor2: 0, valor1:6,  resultado: 0, show: 0, segundo: 0 });
                } else {
                    this.setState({ operador: '^'});
                }
                return 
                
            case 'C':
                this.setState(this.initialState);
                return

            case '=':
                
                const v1 = this.state.valor1;
                const v2 = this.state.valor2;
                var usado = 1;

                if (v1 > v2) {
                    usado = parseInt(v1);
                } else {
                    usado = parseInt(v2);

                }
                const a = parseFloat(this.state.firstValue);
                const b = parseFloat(this.state.secondValue);
                this.setState({show: 1})
        

                switch (this.state.operador) {
                    case '+':
                        return this.setState({ resultado: (a + b).toFixed(usado) });
                        
                
                
                    case '-':
                        return this.setState({ resultado: (a - b).toFixed(usado) });
                
                    case '/':
                        if (b === 0) {
                            alert('Não podemos dividir por zero');
                            return this.setState(this.initialState);
                        } else {
                            return this.setState({ resultado: (a / b).toFixed(usado + 2)});
                        };
                
                    case 'x':
                        return this.setState({ resultado: (a * b).toFixed(usado + 1) });

                    case '^':
                        return this.setState({ resultado: (a ** b).toFixed(usado + 1) });
                    
                }
               
            
                
        }

    }

    
    getValue = () => {
        if (this.state.operador === null & this.state.show === 0) {
            return this.state.firstValue;

        } else if (this.state.operador !== null) {
            if (this.state.resultado === 0 & this.state.secondValue === 0) {
                
                if (this.state.segundo === 1) {
                    return (this.state.firstValue + '  ' + this.state.operador + '  ' + this.state.secondValue + '  ');
                }
                return (this.state.firstValue + '  ' + this.state.operador + '  ');
            } else if (this.state.secondValue !== 0 & this.state.resultado === 0) {

                return (this.state.firstValue + '  ' + this.state.operador + '  ' + this.state.secondValue + '  ');
            } else {
                if (this.state.resultado === parseInt(this.state.resultado)) {
                    return (this.state.firstValue + '  ' + this.state.operador + '  ' + this.state.secondValue + '  ' + ' = ' + parseInt(this.state.resultado));
                } else {
                    return (this.state.firstValue + '  ' + this.state.operador + '  ' + this.state.secondValue + '  ' + ' = ' + parseFloat(this.state.resultado));
                }
            }


        } 
        
    }

    render() {
        return (
            <div className={'calculator'}>

                <div className={'resultado'}><Display value={this.getValue()} /></div>

                <div className={'buttonsContainer'}>

                    <div className={'igualdade'}> <Button display={'C'} onClick={() => this.pickOperation('C')} /> </div>
                    <div className={'btns'}> <Button display={'^'} onClick={() => this.pickOperation(5)} /> </div>
                    <div className={'btns'}> <Button display={'x'} onClick={() => this.pickOperation(4)} /> </div>
                    <Button display={'7'} onClick={() => this.putValue(7)} />
                    <Button display={'8'} onClick={() => this.putValue(8)} />
                    <Button display={'9'} onClick={() => this.putValue(9)} />
                    <div className={'btns'}> <Button display={'/'} onClick={() => this.pickOperation(3)} /> </div>
                    <Button display={'4'} onClick={() => this.putValue(4)} />
                    <Button display={'5'} onClick={() => this.putValue(5)} />
                    <Button display={'6'} onClick={() => this.putValue(6)} />
                    <div className={'btns'}> <Button display={'-'} onClick={() => this.pickOperation(2)} /> </div>
                    <Button display={'1'} onClick={() => this.putValue(1)} />
                    <Button display={'2'} onClick={() => this.putValue(2)} />
                    <Button display={'3'} onClick={() => this.putValue(3)} />
                    <div className={'btns'}> <Button display={'+'} onClick={() => this.pickOperation(1)} /> </div>
                    <Button display={'0'} onClick={() => this.putValue(0)} />
                    <Button display={','} onClick={() => this.putValue(',')} />
                   

                    <div className={'igualdade'}> <Button display={'='} onClick={() => this.pickOperation('=')} /> </div>
                    
                </div>
            </div>
        )
    }
}

export default Calculator;