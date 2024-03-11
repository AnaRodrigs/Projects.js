import GridDivTableCaption from "./GridDivTableCaption";
import {} from "../css.modules/GridDivTable.modules.css"


export default function GridDivTable()
{
    const prop = {
        text: 'Laboratório'
    };
    return(
        <div className="gridDivTable">
           <GridDivTableCaption
           props={prop}
           />
        </div>

    );
}