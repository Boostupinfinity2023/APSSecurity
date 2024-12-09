import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function Inventory() {
    return (
        <div>
            <h2 className="py-3 space-x-2  flex items-center uppercase font-extrabold  mb-1">Inventory Management</h2>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    Dashboard
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>HRM</span>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <NavLink to="/dashboard" className="text-[#E2AD17]">
                        <span>Inventory Management</span>
                    </NavLink>
                </li>
            </ul>

            <div className='inventory-table mt-4'>
                <Table aria-label="Example static collection table"
                    selectionMode="multiple"
                >
                    <TableHeader>
                        <TableColumn>NAME</TableColumn>
                        <TableColumn>ROLE</TableColumn>
                        <TableColumn>STATUS</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="1">
                            <TableCell>Tony Reichert</TableCell>
                            <TableCell>CEO</TableCell>
                            <TableCell>Active</TableCell>
                        </TableRow>
                        <TableRow key="2">
                            <TableCell>Zoey Lang</TableCell>
                            <TableCell>Technical Lead</TableCell>
                            <TableCell>Paused</TableCell>
                        </TableRow>
                        <TableRow key="3">
                            <TableCell>Jane Fisher</TableCell>
                            <TableCell>Senior Developer</TableCell>
                            <TableCell>Active</TableCell>
                        </TableRow>
                        <TableRow key="4">
                            <TableCell>William Howard</TableCell>
                            <TableCell>Community Manager</TableCell>
                            <TableCell>Vacation</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

        </div>
    )
}
