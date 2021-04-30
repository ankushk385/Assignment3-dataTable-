import React,{useEffect,useRef} from 'react'

const DataTable = ({items,RenderHead,RenderRow,loadMore}) => {

    const ref = useRef(null);
    useEffect(() => {
        document.addEventListener("scroll",renderScroll)
        return ()=> document.removeEventListener("scroll",renderScroll);
    }, [])

const renderScroll = ()=>{
    const cy = window.scrollY;
    const tbh = ref.current.offsetHeight;
    const thres = 1000;
    if(tbh-cy-thres < 0 ) loadMore();
   
}
    return (
        <table ref={ref} >
            <thead> {RenderHead()}</thead>
            <tbody> {items.map((row)=>RenderRow(row))}  </tbody>
        </table>
    )
}

export default DataTable;
