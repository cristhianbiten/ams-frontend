import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const NoteDetail = ({ note }) => {

    const truncateTitle = (title) => {
        if (title.length <= 40) {
            return title;
        } else {
            return title.substring(0, 40) + '...';
        }
    };

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
                    <Card.Title> {truncateTitle(note.titulo)}</Card.Title>
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
