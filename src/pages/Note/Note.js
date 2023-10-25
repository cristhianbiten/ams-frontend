import './Note.css'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Redux
import { getNote } from "../../slices/noteSlice"
import Pdf from '../../components/Pdf/Pdf';


function Note() {

    const { id } = useParams();

    const dispatch = useDispatch();

    const { note } = useSelector(
        (state) => state.note
    );

    // Load note data
    useEffect(() => {
        dispatch(getNote(id));
    }, [dispatch, id]);



    return (
        <>
            <div className="new-post">
                <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Note {note.idChamado}</h2>
                <Form >
                    <Container>
                        <div>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="idChamado">
                                        <Form.Label>N° do chamado:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="idChamado"
                                            readOnly
                                            value={(note && note.idChamado) || ''}
                                            className='border-input'
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs={7}>
                                    <Form.Group className="mb-3" controlId="titulo">
                                        <Form.Label>Título:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="titulo"
                                            readOnly
                                            value={(note && note.titulo) || ''}
                                            className='border-input'
                                        />

                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="modulo">
                                        <Form.Label>Módulo/Submódulo:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="modulo"
                                            readOnly
                                            value={(note && note.modulo) || ''}
                                            className='border-input'
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="solicitacao">
                                        <Form.Label>Solicitação:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="solicitacao"
                                            readOnly
                                            value={(note && note.solicitacao) || ''}
                                            className='border-input'
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="prioridade">
                                        <Form.Label>Prioridade:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="prioridade"
                                            readOnly
                                            value={(note && note.prioridade) || ''}
                                            className='border-input'
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="empresa">
                                        <Form.Label>Empresa:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="empresa"
                                            readOnly
                                            value={(note && note.cliente) || ''}
                                            className='border-input'
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="consultor">
                                        <Form.Label>Consultor responsável:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="consultor"
                                            readOnly
                                            value={(note && note.consultor) || ''}
                                            className='border-input'
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    {note && note.solicitacao === 'Melhoria' && (
                        <>
                            <Container>
                                <div>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="origemSolicitacao">
                                                <Form.Label>Origem da Solicitação de Melhoria:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    name="origemSolicitacao"
                                                    value={(note && note.origemSolicitacao) || ''}
                                                    readOnly
                                                    className='textarea-input'
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="processoNegocio">
                                                <Form.Label>Processo de Negócio:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    name="processoNegocio"
                                                    value={(note && note.processoNegocio) || ''}
                                                    readOnly
                                                    className='textarea-input'
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="descricaoFuncional">
                                                <Form.Label>Descrição Funcional da Melhoria:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    name="descricaoFuncional"
                                                    value={(note && note.descricaoFuncional) || ''}
                                                    className='textarea-input-large'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="referenciaFt">
                                                <Form.Label>Referência a Especificação Funcional e Técnica:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    name="referenciaFt"
                                                    value={(note && note.referenciaFt) || ''}
                                                    className='textarea-input'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="cutover">
                                                <Form.Label>Plano de Cutover:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    name="cutover"
                                                    value={(note && note.cutover) || ''}
                                                    className='textarea-input-large'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="termoBusca">
                                                <Form.Label>Termos de Busca / Transações Envolvidas / Nº da Mensagem:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    name="termoBusca"
                                                    value={(note && note.termoBusca) || ''}
                                                    readOnly
                                                    className='textarea-input'
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="request">
                                                <Form.Label>Request:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    name="request"
                                                    value={(note && note.request) || ''}
                                                    className='textarea-input'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                        </>)}
                    {note && note.solicitacao === 'Problema' && (
                        <>
                            <Container>
                                <div>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="definicaoProblema">
                                                <Form.Label>Definição do Problema:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    name="definicaoProblema"
                                                    value={(note && note.definicaoProblema) || ''}
                                                    className='textarea-input'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="processoNegocio">
                                                <Form.Label>Processo de Negócio:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    name="processoNegocio"
                                                    value={(note && note.processoNegocio) || ''}
                                                    className='textarea-input'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="reproducaoProblema">
                                                <Form.Label>Reprodução do Problema:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    name="reproducaoProblema"
                                                    value={(note && note.reproducaoProblema) || ''}
                                                    className='textarea-input'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="causaProblema">
                                                <Form.Label>Possíveis Causas do Problema:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    name="causaProblema"
                                                    value={(note && note.causaProblema) || ''}
                                                    className='textarea-input-large'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="alternativaSolucao">
                                                <Form.Label>Alternativas de Solução Possíveis:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    name="alternativaSolucao"
                                                    value={(note && note.alternativaSolucao) || ''}
                                                    className='textarea-input'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="pedidoMelhoria">
                                                <Form.Label>Pedidos de Melhorias Abertas Após Análise:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    name="pedidoMelhoria"
                                                    value={(note && note.pedidoMelhoria) || ''}
                                                    className='textarea-input'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="termoBusca">
                                                <Form.Label>Termos de Busca / Transações Envolvidas / Nº da Mensagem:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    name="termoBusca"
                                                    value={(note && note.termoBusca) || ''}
                                                    className='textarea-input'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                        </>)}
                    {note && note.solicitacao === 'Dúvida' && (
                        <>
                            <Container>
                                <div>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="duvida">
                                                <Form.Label>Dúvida:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    type="text"
                                                    name="duvida"
                                                    value={(note && note.duvida) || ''}
                                                    className='textarea-input'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="processoNegocio">
                                                <Form.Label>Processo de Negócio:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    type="text"
                                                    name="processoNegocio"
                                                    value={(note && note.processoNegocio) || ''}
                                                    className='textarea-input'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="reproducaoProcesso">
                                                <Form.Label>Reprodução do Processo:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    type="text"
                                                    name="reproducaoProcesso"
                                                    value={(note && note.reproducaoProcesso) || ''}
                                                    className='textarea-input'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="esclarecimentoDuvida">
                                                <Form.Label>Esclarecimento da Dúvida:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    type="text"
                                                    name="esclarecimentoDuvida"
                                                    value={note.esclarecimentoDuvida}
                                                    className='textarea-input'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="termoBusca">
                                                <Form.Label>Termos de Busca / Transações Envolvidas / Nº da Mensagem:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    type="text"
                                                    name="termoBusca"
                                                    value={(note && note.termoBusca) || ''}
                                                    className='textarea-input'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                        </>
                    )}

                    {note && note.solicitacao === 'Erro/Incidente' && (
                        <>
                            <Container>
                                <div>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="sintomas">
                                                <Form.Label>Sintomas:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    type="text"
                                                    name="sintomas"
                                                    value={(note && note.sintomas) || ''}
                                                    className='textarea-input-large'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="processoNegocio">
                                                <Form.Label>Processo de Negócio:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    type="text"
                                                    name="processoNegocio"
                                                    value={(note && note.processoNegocio) || ''}
                                                    className='textarea-input'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="reproducaoErro">
                                                <Form.Label>Reprodução do Erro:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    type="text"
                                                    name="reproducaoErro"
                                                    value={(note && note.reproducaoErro) || ''}
                                                    className='textarea-input'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="causaProblema">
                                                <Form.Label>Causa do Problema:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    type="text"
                                                    name="causaProblema"
                                                    value={(note && note.causaProblema) || ''}
                                                    className='textarea-input'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="descricaoSolucao">
                                                <Form.Label>Descrição da Solução:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    type="text"
                                                    name="descricaoSolucao"
                                                    value={(note && note.descricaoSolucao) || ''}
                                                    className='textarea-input'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="configuracoesExecutadas">
                                                <Form.Label>Configurações Executadas:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    type="text"
                                                    name="configuracoesExecutadas"
                                                    value={(note && note.configuracoesExecutadas) || ''}
                                                    className='textarea-input'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="termoBusca">
                                                <Form.Label>Termos de Busca / Transações / Mensagem:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    type="text"
                                                    name="termoBusca"
                                                    value={(note && note.termoBusca) || ''}
                                                    className='textarea-input'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="objetosAbap">
                                                <Form.Label>Objetos ABAP criados/alterados:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    type="text"
                                                    name="objetosAbap"
                                                    value={(note && note.objetosAbap) || ''}
                                                    className='textarea-input'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="request">
                                                <Form.Label>Request:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    type="text"
                                                    name="request"
                                                    placeholder='Digite o request'
                                                    value={(note && note.request) || ''}
                                                    className='textarea-input'
                                                    readOnly
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                        </>
                    )}
                    <div className="container-btn" style={{ marginBottom: '1rem', marginLeft: '0.5rem', marginRight: '0.5rem' }} >
                        <div className="row">
                            <div className="col">
                                <Button id='criar' variant="secondary" size="lg" type="submit" style={{ width: '100%' }} href={`/narrativas/${note._id}`}>
                                    Reuniões e analises
                                </Button>
                            </div>
                            <div className="col">

                                <Pdf note={note} />

                            </div>
                        </div>
                    </div>
                </Form>
            </div>

        </>
    )

}

export default Note



