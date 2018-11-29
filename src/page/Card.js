import React from 'React';
import pictrue, { Pirture } from './Picture'

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            value : null
        }
    }

    //#region 生命周期

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


    /**
     * 该方法在render方法执行之前调用，包括组件的第一次记载。
     * 它应该返回一个新的 state 对象，通常用在组件状态依赖外部输入的参数的情况
     */
    static getDerivedStateFromProps(props, state){

    }

    /**
     * 该方法在每次 DOM 更新之前调用，用来收集 DOM 信息。
     * 它返回的值，将作为参数传入componentDidUpdate()方法。
     */
    getSnapshotBeforeUpdate(){

    }

    //#endregion

    render(){
        const pictrue = {
            src : 'https://cdn.nlark.com/yuque/0/2018/jpeg/84141/1536207007004-59352a41-4ad8-409b-a416-a4f324eb6d0b.jpeg',
            desc :'1234'
        };
        return(
            <div className='container'>
                <Pirture src={pictrue.src}>
                    <div>这里放置的内容就是:props.children</div>
                </Pirture>
            </div>
        )
    }
}


export default Card;