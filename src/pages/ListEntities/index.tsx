import { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import { Menu } from '../../components/Menu';
import api from '../../services/api';

interface Entity {
    id: number;
    descricao?: string;
    situacao?: string;
    updated_at?: any;
    created_at?: any;
}

export const ListEntities: React.FC = () => {

    const [entities, setEntities] = useState<Entity[]>([]);

    const getEntities = async () => {
        try {
            let response = await api.get('profession');
            setEntities(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteEntity = async (id: string|number) => {
        try {
            let response = await api.delete(`profession/${id}`);
            toast.info("Profissão deletada");
            getEntities();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getEntities();
        toast.success("Lista de profissões carregada");
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <Menu />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Descrição</th>
                                <th>Status</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {entities && entities.map((entity, idx) => (
                                <tr>
                                    <td>{entity.id}</td>
                                    <td>{entity.descricao}</td>
                                    <td>{entity.situacao ? 'Ativo' : 'Inativo'}</td>
                                    <td>
                                        <Button onClick={(e) => {e.preventDefault(); deleteEntity(entity.id)}} className="btn btn-sm btn-danger">Deletar</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}
