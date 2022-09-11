import DataTable from 'react-data-table-component';
import React from 'react'
// A super simple expandable component.

const details = [
    {
        id: 1,
        provedor: 'Beetlejuice',
        responsable:'Juancito',
        correo:'a@a.com',
        puntaje:0,
        fecha: '1988',
    },
    {
        id: 2,
        provedor: 'Cheeper Scriper',
        responsable:'Maria',
        correo:'b@b.com',
        puntaje:0,
        fecha: '1970',
    },
]


console.log(details)
const ExpandedComponent = ({ data }) => 
<><div>
<pre>Proveedor: {details[data.id-1].provedor}</pre><hr></hr>
<pre>Correo: {details[data.id-1].correo}</pre><hr></hr>
<pre>Puntaje: {details[data.id-1].puntaje}</pre><hr></hr>
<pre>Fecha: {details[data.id-1].fecha}</pre><hr></hr>
<pre>Responsable: {details[data.id-1].responsable}</pre><hr></hr>
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
    rowsPerPageOptions={[10, 25, 100]}
/>
  )
}