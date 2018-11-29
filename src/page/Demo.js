import MyInput from './MyInput';
import React from 'React';

class Demo extends React.Component{
    state = {
        text: ''
    };

    onTextChange =(event) =>{
        this.setState({ text: event.target.value });
    };

    onTextRest =()=>{
        this.setState({text: ""});
    }

    render(){
        return(
            <div>
                <MyInput value={this.state.text} onChange={this.onTextChange}/>
                <button style={{width:'100px',height:'30px'}} onClick={this.onTextRest}>Rest</button>
            </div>
        )
    }
};

export default Demo;