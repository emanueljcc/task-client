import React, { useState } from "react";
import { Row, InputGroup, FormControl, Button } from "react-bootstrap";
import { create } from "../config/Api";

export default function InputForm({ setReload }) {
    const [task, setTask] = useState("");

    const save = (e) => {
        e.preventDefault();

        const data = {
            active: false,
            name: task,
            comment: "",
        };

        // TODO: create data in api
        create(data);

        // update state
        setReload(true);

        // clear input
        setTask("");
    }

    return (
        <form onSubmit={save}>
            <Row>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Escriba su tarea"
                        aria-label="Escriba su tarea"
                        aria-describedby="basic-addon2"
                        onChange={e => setTask(e.target.value)}
                        value={task}
                    />
                    <InputGroup.Append>
                        <Button type="submit" variant="primary">Agregar Tarea</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Row>
        </form>
    );
}
