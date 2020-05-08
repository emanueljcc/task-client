import React, { useState, useEffect } from 'react';
import { Container, Card } from "react-bootstrap"
import InputForm from './components/InputForm';
import List from './components/List';
import { getAll, remove } from "./config/Api";

function App() {
    const [rows, setRows] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        (async () => {
            const { data } = await getAll();
            setRows(data);
        })();
        setReload(false);
    }, [reload]);

    const deletedTask = (id) => {
        remove(id);
        setReload(true);
    }

    return (
        <Container>
            <Card>
                <Card.Header className="text-center">TODO List - React Bootstrap</Card.Header>
                <Card.Body>

                    <InputForm setReload={setReload} />

                </Card.Body>
                <Card.Footer className="text-muted">

                    <List rows={rows} setRows={setRows} deletedTask={deletedTask} setReload={setReload} />

                </Card.Footer>
            </Card>
        </Container>
    );
}

export default App;
