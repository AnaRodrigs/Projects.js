import {} from '../css.modules/GridDivTable.modules.css'

export default function GridDivTableCaption({props}){
    if (!props)
    {
        props.text =".";
    }
    return(

        <div className='gridDivTableCaption'>
           {props.text}
        </div>
    );
}