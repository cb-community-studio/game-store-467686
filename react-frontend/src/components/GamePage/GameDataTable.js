
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { Tag } from 'primereact/tag';
import { Calendar } from 'primereact/calendar';
import { Rating } from 'primereact/rating';


const GameDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.gamesName}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.description}</p>
    const imageTemplate2 = (rowData, { rowIndex }) => <Image src={rowData.gameImage}  alt="Image" height="60px" />
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.developer}</p>
    const tagTemplate4 = (rowData, { rowIndex }) => <Tag value={rowData.genre}  ></Tag>
    const calendarTemplate5 = (rowData, { rowIndex }) => <Calendar className="w-20rem" dateFormat="dd/mm/yy" placeholder={"dd/mm/yy"} value={new Date(rowData.releaseDate)} showTime ></Calendar>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.price}</p>
    const ratingTemplate7 = (rowData, { rowIndex }) => <Rating stars={5} style={{width:"20rem"}} value={rowData.rating} cancel={false}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="gamesName" header="Name" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="description" header="Description" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="gameImage" header="gameImage" body={imageTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="developer" header="Developer" body={pTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="genre" header="Genre" body={tagTemplate4} sortable style={{ minWidth: "8rem" }} />
            <Column field="releaseDate" header="Release Date" body={calendarTemplate5} sortable style={{ minWidth: "8rem" }} />
            <Column field="price" header="Price (RM)" body={pTemplate6} sortable style={{ minWidth: "8rem" }} />
            <Column field="rating" header="Rating" body={ratingTemplate7} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default GameDataTable;