import React,{useEffect,useRef} from 'react'

const DataTable = ({items,RenderHead,RenderRow}) => {

    
    return (
        <table>
            <thead> {RenderHead()}</thead>
            <tbody> {items.map((row)=>RenderRow(row))}  </tbody>
        </table>
    )
}

export default DataTable;
