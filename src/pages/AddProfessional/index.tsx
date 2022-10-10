import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { Menu } from '../../components/Menu';

interface Entity {
    id?: number;
    descricao?: string;
    situacao?: string;
    updated_at?: any;
    created_at?: any;
}

export const AddProfessional: React.FC = () => {
    
    const navigate = useNavigate();
    const [entities, setEntities] = useState<Entity[]>([]);
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [profissao, setProfissao] = useState('');
    const [situacao, setSituacao] = useState('0');

    // adicionar profissional
    const handleAdd = async () => {
    
        try {
            const data = {
                nome,
                telefone,
                email,
                situacao,
                tipoDeProfissional: profissao
            }

            let response = await api.post('user', data);

            toast.success("Profissional adicionado com sucesso.");

            navigate('/ListProfessionals');
        } catch (error) {
            toast.error("Não foi possível adicionar o profissional.");
            console.log(error);
        }
    }

    
    // pegar profissões
    const getEntities = async () => {
        try {
            let response = await api.get('profession');
            setEntities(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    // setar inicio de componente
    useEffect(() => {
        getEntities();
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <Menu />
                    <legend>Adicionar Profissional</legend>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control onChange={(e) => setNome(e.target.value)} value={nome} type="text" placeholder="Nome" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="text" onChange={(e) => setTelefone(e.target.value)} value={telefone} placeholder="Telefone" />
                        </Form.Group> 
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="E-mail" />
                            <Form.Text className="text-muted">
                                Tenha certeza de ser um e-mail válido.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicProfissao">
                            <Form.Label>Profissão</Form.Label>
                            <Form.Select onChange={(e) => setProfissao(e.target.value)} aria-label="Escolha a Profissão">
                                <option>Escolha a Profissão</option>
                                {entities && entities.map((entity, idx) => (
                                    <option value={entity.id}>{entity.descricao}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSituacao">
                            <Form.Label>Situação</Form.Label>
                            <Form.Select onChange={(e) => setSituacao(e.target.value)} aria-label="Escolha o Profissional">
                                <option value="0">Situação do Profissional</option>
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
