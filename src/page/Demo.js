import MyInput from './MyInput';
import React from 'React';

class Demo extends React.Component{
    state = {
        text: ''
    };

    /**
     * 会在组件挂载后自动调用
     */
    componentDidMount(){

    }

    /**
     * 会在组件卸载前自动调用
     */
    componentWillUnmount(){
    }

    /**
     * 会在 UI 每次更新后调用（即组件挂载成功以后，每次调用 render 方法，都会触发这个方法）
     */
    componentDidUpdate(){
        
    }

    /**
     * 每当this.props或this.state有变化，在render方法执行之前，就会调用这个方法。
     * 该方法返回一个布尔值，表示是否应该继续执行render方法，即如果返回false，UI 就不会更新，默认返回true。
     * 组件挂载时，render方法的第一次执行，不会调用这个方法
     */
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

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