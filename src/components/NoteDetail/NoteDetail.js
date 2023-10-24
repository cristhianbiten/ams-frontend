import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const NoteDetail = ({ note }) => {
    return (
        <Container style={{ marginBottom: '30px' }}>
            <Card
            border='secondary'
                text={'dark'}
                style={{ width: '18rem' }}
                className="mb-2"
                bg='Light'
            >
                <Card.Header>{note.idChamado}</Card.Header>
                <Card.Body >
                    <Card.Title> {note.titulo}</Card.Title>
                    <Card.Text>
                    {note.modulo}
                    </Card.Text>
                    <Button variant="warning" href={`/note/${note._id}`} style={{ marginBottom: '15px' }}>Ler mais</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default NoteDetail;
