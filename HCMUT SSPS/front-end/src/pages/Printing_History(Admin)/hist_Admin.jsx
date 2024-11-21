import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import {  Pagination, PaginationPrevious, PaginationNext, PaginationList, PaginationPage, PaginationGap } from "primitives";
import BackgroundSVG from "../../assets/background.svg"; // Path to the SVG
import "./hist_Admin.css";
import { IconSearch } from "icons";
import { Button } from "primitives"
import { IconChevronDown } from "icons"
import { IconCopy } from "icons";
import { IconTrash2 } from "icons";
import { IconEdit2 } from "icons";

function Admin_history() {
    return (
        <div>
            <Navbar property="Admin"/>
            <div
                style={{
                    backgroundImage: `url(${BackgroundSVG})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100vh',
                    display:'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    
                <div className="container">
                    <div className="input-wrapper">
                        <input className="searchBar" placeholder="Search..." />
                        <IconSearch className="icon-search icon-black" />
                    </div>
                    <table className="custom-table">
                    <thead>
                        <tr>
                        <th>
                            <Button
                            onPress={() => alert("MSSV clicked")}
                            variant="neutral"
                            className="buttonTable"
                            >
                            MSSV
                            <IconChevronDown />
                            </Button>
                        </th>
                        <th>
                            <Button
                            onPress={() => alert("Máy in clicked")}
                            variant="neutral"
                            className="buttonTable"
                            >
                            Máy in
                            <IconChevronDown />
                            </Button>
                        </th>
                        <th>
                            <Button
                            onPress={() => alert("Ngày in clicked")}
                            variant="neutral"
                            className="buttonTable"
                            >
                            Ngày in
                            <IconChevronDown />
                            </Button>
                        </th>
                        <th>
                            <Button
                            onPress={() => alert("Trạng thái clicked")}
                            variant="neutral"
                            className="buttonTable"
                            >
                            Trạng thái
                            <IconChevronDown />
                            </Button>
                        </th>
                        <th>
                            <Button
                            onPress={() => alert("Hành động clicked")}
                            variant="neutral"
                            className="buttonTable"
                            >
                            Hành động
                            </Button>
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>2252938</td>
                        <td>Printer A</td>
                        <td>2024-11-20</td>
                        <td>Completed</td>
                        <td>
                            <Button variant="neutral" className="buttonTable" onPress={() => alert("Copy clicked")}>
                                <IconCopy className="icon-black"></IconCopy></Button>
                            <Button variant="neutral" className="buttonTable" onPress={() => alert("Edit clicked")}>
                                <IconEdit2 className="icon-black"></IconEdit2></Button>
                            <Button variant="neutral" className="buttonTable" onPress={() => alert("Delete clicked")}>
                                <IconTrash2 className="icon-black"></IconTrash2></Button>
                        </td>
                        </tr>
                        <tr>
                        <td>2252939</td>
                        <td>Printer B</td>
                        <td>2024-11-19</td>
                        <td>Pending</td>
                        <td>
                            <Button variant="neutral" className="buttonTable" onPress={() => alert("Copy clicked")}>
                                <IconCopy className="icon-black"></IconCopy></Button>
                            <Button variant="neutral" className="buttonTable" onPress={() => alert("Edit clicked")}><
                                IconEdit2 className="icon-black"></IconEdit2></Button>
                            <Button variant="neutral" className="buttonTable" onPress={() => alert("Delete clicked")}>
                                <IconTrash2 className="icon-black"></IconTrash2></Button>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                    <Pagination style={{justifyContent: 'center'}}>
                    <PaginationList>
                        <PaginationPage href="/page/1" current>
                        1
                        </PaginationPage>
                        <PaginationPage href="/page/2">2</PaginationPage>
                        <PaginationGap />
                        <PaginationPage href="/page/5">5</PaginationPage>
                    </PaginationList>
                    </Pagination>
                </div>
            </div>
            <Footer />
        </div>
    );
}


export default Admin_history;
