
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';


const OfferDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const chipTemplate0 = (rowData, { rowIndex }) => <Chip label={rowData.offerType}  />
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.valueFromDate}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.valueToDate}</p>
    const chipTemplate3 = (rowData, { rowIndex }) => <Chip label={rowData.discount}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="offerType" header="Promotion" body={chipTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="valueFromDate" header="From" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="valueToDate" header="To" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="discount" header="Discount" body={chipTemplate3} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default OfferDataTable;