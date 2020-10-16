import React, {Component} from "react"
import {TextField, Button, ButtonGroup} from "@material-ui/core"


export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: "",
            arr: []

        }
    }

    addTask = () =>{
        if (this.state.value){
            if (this.state.arr.length){
                for (var i in this.state.arr){
                    if (this.state.arr[i] === this.state.value){
                        alert("This Task is Already Included!")
                        return
                    }
                }
            }
            let current = [this.state.value];
            this.setState({
                arr: this.state.arr.concat(current),
                value: ""
            });
        }

    }

    delete = (event) =>{
        let txt = event.target.parentNode.parentNode.parentNode.parentNode.childNodes[0].innerText.split("\n")[0];
        let index = this.state.arr.indexOf(txt);
        let newArr = this.state.arr;
        delete newArr[index]
        this.setState({...this.state, arr: newArr})
    }

    edit = (event) => {
        let value = prompt("Enter New Task: ");
        for (var i in this.state.arr){
            if (this.state.arr[i] === value){
                alert("This Task is Already Included!")
                return
            }
        }
        if (value){
            let x = event.target.parentNode.parentNode.parentNode.parentNode.childNodes[0].innerText.split("\n")[0];
            let newArr = this.state.arr.map((obj)=>{
                if (obj === x){
                    return value
                }else{
                    return obj
                }
            })
            this.setState({...this.state, arr: newArr})
        }
    }

    render(){
        return(
            <React.Fragment>
                <h1 color="primary" style={{textAlign: "center", background: "#f50057", marginTop: "0px", fontSize: "2.5rem", padding: "0.1em"}}>TODO APP</h1>
                <div className="main">
                        <div style={{display: "inline-block"}}>
                            <TextField id="standard-basic" label="Enter Task" onChange={(e)=>this.setState({value: e.target.value})} value={this.state.value}/>
                            <Button variant="contained" color="secondary" style={{verticalAlign: "bottom", marginLeft: "10px"}} onClick={this.addTask}>Add</Button>
                            <ul style={{listStyleType: "square", listStylePosition: "inside", paddingLeft: "0px", textAlign: "start"}}>
                                {this.state.arr.map((obj, index)=>{
                                    return(
                                        <li key={index} style={{marginBottom: "20px"}}>
                                            <h4 style={{display: "inline-block"}}>{obj}</h4>
                                            <div style={{display: "inline-block"}}>
                                                <ButtonGroup style={{paddingLeft: "20px"}}>
                                                    <Button variant="contained" color="primary" onClick={this.edit}>Edit</Button>
                                                    <Button variant="contained" color="secondary" onClick={this.delete}>Delete</Button>
                                                </ButtonGroup>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                </div>
            </React.Fragment>
        )
    }
}