import React, { Component } from 'react'
import axios from 'axios'

export default class Calculator extends Component {
    constructor(){
        super()
        this.state = {
            num1: null,
            num2: null,
            combinedNum: '',
            operator: '',
            total: null
        }
    }

    //this function handles the number buttons being clicked, as well as the -/+ and decimal buttons
    handleNum = (num) => {
        let combined = this.state.combinedNum + num
        this.setState({
            combinedNum: combined
        })

        const { num1, total } = this.state

        if(total){
            this.setState({
                num1: total,
                num2: +combined
            })
        }
        else if(num1){
            this.setState({
                num2: +combined
            })
        }
       
    }

    //this function handles the operator buttons and sets their value on state, it also takes the combined num from state, converts it to a number, and sets it on the num1 spot
    handleOperator = (operator) => {
        const { combinedNum } = this.state
        this.setState({
            operator,
            num1: +combinedNum,
            combinedNum: ''
        })
    }

    //this function is fired by the equals button, this function hit's the endpoints on the server based on the operator stored on state
    getTotal = () => {
        const { num1, num2, operator } = this.state
        const body = { num1, num2 }
       
        switch(operator){
            case "+":
                axios.post('/api/addition', body)
                .then((res) => {
                    this.setState({
                        total: res.data.total,
                        combinedNum: ''
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
                break;

            case "-":
                axios.post('/api/subtraction', body)
                .then((res) => {
                    this.setState({
                        total: res.data.total, combinedNum: ''
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
                break;

            case "x":
                axios.post('/api/multiplication', body)
                .then((res) => {
                    this.setState({
                        total: res.data.total, combinedNum: ''
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
                break;

            case "%":
                axios.post('/api/division', body)
                .then((res) => {
                    this.setState({
                        total: res.data.total, combinedNum: ''
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    //this function handles the clear button functionality, resets all values on state
    handleClear = () => {
        this.setState({
            num1: null,
            num2: null,
            combinedNum: '',
            operator: '',
            total: null
        })
    }

    render() {

        const { num1, num2, operator, total } = this.state
 
        return (
            <div className='calculator'>
                
                <div className='num-display'>
                        <p id='total'>{total}</p>
                    {
                        !num1 ?
                        <p id='input'>{this.state.combinedNum}</p>
                        :
                        <p id='input'>{num1} {operator} {num2}</p>
                    }  
                </div>
                
                <div className='button-row'>
                    <button id='clear' onClick={() => this.handleClear()}>Clear</button>
                    <button id='operator' onClick={() => this.handleOperator('%')}>%</button>
                </div>

                <div className='button-row'>
                    <button onClick={() => this.handleNum(7)}>7</button>
                    <button onClick={() => this.handleNum(8)}>8</button>
                    <button onClick={() => this.handleNum(9)}>9</button>
                    <button id='operator' onClick={() => this.handleOperator('x')}>X</button>
                </div>

                <div className='button-row'>
                    <button onClick={() => this.handleNum(4)}>4</button>
                    <button onClick={() => this.handleNum(5)}>5</button>
                    <button onClick={() => this.handleNum(6)}>6</button>
                    <button id='operator' onClick={() => this.handleOperator('-')}>-</button>
                </div>

                <div className='button-row'>
                    <button onClick={() => this.handleNum(1)}>1</button>
                    <button onClick={() => this.handleNum(2)}>2</button>
                    <button onClick={() => this.handleNum(3)}>3</button>
                    <button id='operator' onClick={() => this.handleOperator('+')}>+</button>
                </div>

                <div className='button-row'>
                    <button onClick={() => this.handleNum('.')}>.</button>
                    <button onClick={() => this.handleNum(0)}>0</button>
                    <button onClick={() => this.handleNum('-')}>+/-</button>
                    <button id='equals' onClick={() => this.getTotal()}>=</button>
                </div>

            </div>
        )
    }
}