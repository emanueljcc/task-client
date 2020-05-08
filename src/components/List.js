import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { BsArrowsAngleExpand, BsFillTrashFill } from "react-icons/bs";
import ModalView from "./Modal";
import { update } from "../config/Api";
import debounce from "lodash.debounce";

export default function List({ rows, setRows, deletedTask, setReload }) {
    const [modalShow, setModalShow] = useState(false);
    const [dataModal, setDataModal] = useState({});

    const handleChange = (e, val) => {
        e.persist();
        const data = {
            ...val,
            [e.target.name]: e.target.name === "active" ? e.target.checked : e.target.value
        }
        updateTask(e, data);
    }

    const updateTask = debounce((e, data) => {
        // update data modal
        setDataModal(data);

        // update rows list
        setRows([]);
        const items = rows.map((row) => {
            if (row._id === data._id) {
                row = data
            }
            return row;
        });
        setRows(items);

        // update api
        update({
            ...data,
            [e.target.name]: e.target.name === "active" ? e.target.checked : e.target.value
        });

        setReload(true);
    }, 300);

    const openModal = (data) => {
        setDataModal(data);
        setModalShow(true);
    }

    const closeModal = () => setModalShow(false);

    return (
        <>
            {rows.map(row => (
                <InputGroup className="mb-3" key={row._id}>
                    <InputGroup.Prepend>
                        <InputGroup.Checkbox
                            name="active"
                            defaultChecked={row.active}
                            onClick={(e) => handleChange(e, row)}
                        />
                    </InputGroup.Prepend>
                    <FormControl
                        name="name"
                        defaultValue={row.name}
                        onChange={(e) => handleChange(e, row)}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={() => deletedTask(row._id)}>
                            <BsFillTrashFill className="delete" />
                        </Button>
                        <Button variant="outline-secondary" onClick={() => openModal(row)}>
                            <BsArrowsAngleExpand />
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            ))}
            <ModalView
                show={modalShow}
                onHide={closeModal}
                dataModal={dataModal}
                handleChange={handleChange}
            />
        </>

    )
}


