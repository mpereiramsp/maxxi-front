import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { Menu } from '../../components/Menu';

export const AddEntities: React.FC = () => {
    
    const navigate = useNavigate();
    const [descricao, setDescricao] = useState('');
    const [situacao, setSituacao] = useState('0');

    // adicionar profissão
    const handleAdd = async () => {
    
        try {

            const data = {
                descricao,
                situacao
            }

            let response = await api.post('profession', data);
            toast.success("Profissão adicionada com sucesso.");
            navigate('/');
        } catch (error) {
            toast.error("Não foi possível adicionar a profissão.");
            console.log(error);
        }
    }

    
    return (
        <Container>
            <Row>
                <Col>
                    <Menu />
                    <legend>Adicionar Profissão</legend>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control onChange={(e) => setDescricao(e.target.value)} value={descricao} type="text" placeholder="Descrição" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSituacao">
                            <Form.Label>Situação</Form.Label>
                            <Form.Select onChange={(e) => setSituacao(e.target.value)} aria-label="Escolha da Profissão">
                                <option value="0">Situação da Profissão</option>
                                <option value="0">Inativo</option>
                                <option value="1">Ativo</option>
                            </Form.Select>
                        </Form.Group>
                        <Button onClick={(e) => {e.preventDefault(); handleAdd();}} variant="primary" type="button">
                            Cadastrar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
