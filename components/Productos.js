import DataTable from 'react-data-table-component';
import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// A super simple expandable component.

const details = [
    {
        id: 1,
        provedor: 'Beetlejuice',
        fecha: '1988',
    },
    {
        id: 2,
        provedor: 'Ghostbusters',
        fecha: '1984',
    },
]


console.log(details)
const ExpandedComponent = ({ data }) => 
<><div>
<pre>Proveedor: {details[data.id-1].provedor}</pre>
<button className='btn btn-success'>Agregar campo</button><hr></hr>
<button className='btn btn-warning'>Editar campo</button><hr></hr>
<button className='btn btn-danger'>Eliminar campo</button><hr></hr>
</div>
    </> 
const columns = [
    {
        name: 'Nombre',
        selector: row => row.title,
    },
    {
        name: 'Costo unitario',
        selector: row => row.year,
    },
    {
        name: 'Costo por mayor',
        selector: row => row.year,
    },
    {
        name: '',
        selector: row => row.btn,
    },
    {
        name: '',
        selector: row => row.btn2,
    }
];

const data = [
    {
        id: 1,
        title: 'Panes',
        year: 25,
        btn: <button className="btn btn-success"> Editar</button>,
        btn2: <button  className="btn btn-danger" > Eliminar</button>
    }
    ,
    {
        id: 2,
        title: 'Facturines',
        year: 27,
        btn: <button  className="btn btn-success" > Editar</button>,
        btn2: <button  className="btn btn-danger" > Eliminar</button>
    }, 
]


export const Productos =()=> {
  return (
    
    <DataTable
    columns={columns}
    data={data}
    expandableRows
    expandableRowsComponent={ExpandedComponent}
/>
  )
}