export const Pirture = (props) =>{
    return(
        <div>
            <img src={props.src}/>
            {props.children}
        </div>
    )
}