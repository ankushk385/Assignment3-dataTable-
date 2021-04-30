import './App.css';
import jsonData from './data/photos.json';
import DataTable from './component/DataTable';

const get50 = (data)=>{
  return data.slice(0,50);
}
function App() {
  return (
    <div className="App">
      <DataTable
      items={get50(jsonData)}
      RenderHead = {()=>(
        <tr>
          <th>ID</th>
          <th>ALBUM ID</th>
          <th>TITLE</th>
          <th>THUMBNAIL</th>
        </tr>
      )}
      RenderRow={(row)=>(
        <tr>
        <td>{row.id}</td>
        <td>{row.albumId}</td>
        <td>{row.title}</td>
        <td><img src={row.thumbnailUrl} alt="tabel data"/></td>
        </tr>
      )}
      />
    </div>
  );
}

export default App;
