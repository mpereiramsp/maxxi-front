import { useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export const Menu: React.FC = () => {

    const navigate = useNavigate();

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Teste Maxxi</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate('/')}>Listar Profissão</Nav.Link>
                        <Nav.Link onClick={() => navigate('/addEntities')}>Adicionar Profissão</Nav.Link>
                        <Nav.Link onClick={() => navigate('/ListProfessionals')}>Listar Profissionais</Nav.Link>
                        <Nav.Link onClick={() => navigate('/addProfessional')}>Adicionar Profissional</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
