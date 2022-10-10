import { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import { Menu } from '../../components/Menu';
import api from '../../services/api';

interface Professional {
    id: number;
    nome?: string;
    telefone?: string;
    email?: string;
    tipoDeProfesisonal?: string;
    descricao?: string;
    situacao?: string;
    updated_at?: any;
    created_at?: any;
}

export const ListProfessionals: React.FC = () => {

    const [professionals, setProfessionals] = useState<Professional[]>([]);

    const getProfessionals = async () => {
        try {
            let response = await api.get('/');
            setProfessionals(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProfessional = async (id: string|number) => {
        try {
            let response = await api.delete(`user/${id}`);
            toast.info("Profissional deletado");
            getProfessionals();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProfessionals();
        toast.success("Lista de profissionais carregada");
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
                                <th>Profissional</th>
                                <th>Telefone</th>
                                <th>E-mail</th>
                                <th>Tipo de Profissional</th>
                                <th>Situação</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {professionals && professionals.map((professional, idx) => (
                                <tr>
                                    <td>{professional.id}</td>
                                    <td>{professional.nome}</td>
                                    <td>{professional.telefone}</td>
                                    <td>{professional.email}</td>
                                    <td>{professional.descricao}</td>
                                    <td>{professional.situacao ? 'Ativo' : 'Inativo'}</td>
                                    <td>{professional.created_at}</td>
                                    <td>
                                    <Button onClick={(e) => {e.preventDefault(); deleteProfessional(professional.id)}} className="btn btn-sm btn-danger">Deletar</Button>
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
