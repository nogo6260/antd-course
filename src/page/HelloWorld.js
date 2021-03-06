
import {Card} from 'antd';//导入antd组件Card
import Demo from './Demo';

export default ()=>{
    const style ={
        width:'400px',
        margin: '30px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        border: '1px solid #e8e8e8',
    };

    
    const test =() => {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'https://cdn.bootcss.com/jquery/3.2.0/jquery.slim.min.js';
        document.body.appendChild(s)   
    }

    return (
        <div>
            <Card style ={style} actions={[<a>操作一</a>,<a>操作二</a>]}>
                <Card.Meta //Meta Card 的子组件
                    avatar={<img 
                    alt="" 
                    style={{width:'64px',height:'64px',borderRadius:'32px'}}
                    src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"/>}
                    title="Alipay"
                    description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
                    />
            </Card>
            <Demo/>
        </div>
    )
}