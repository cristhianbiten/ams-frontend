import jsPDF from 'jspdf';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/logo.png'

const Pdf = ({ note }) => {


    const handleGeneratePDF = () => {
        const doc = new jsPDF();

        // Mapeamento de descrições personalizadas para campos
        const fieldDescriptions = {
            idChamado: "ID do Chamado",
            titulo: "Título",
            modulo: "Módulo/Submódulo",
            cliente: "Empresa",
            consultor: "Consultor responsável",
            solicitacao: "Solicitação",
            prioridade: "Prioridade",
            origemSolicitacao: "Origem da Solicitação de Melhoria",
            termoBusca: "Termos de Busca / Transações Envolvidas / Nº da Mensagem",
            processoNegocio: "Processo de Negócio",
            descricaoFuncional: "Descrição Funcional da Melhoria",
            referenciaFt: "Referência a Especificação Funcional e Técnica",
            cutover: "Plano de Cutover",
            request: "Request",
            definicaoProblema: "Definição do Problema",
            causaProblema: "Possíveis Causas do Problema",
            alternativaSolucao: "Alternativas de Solução Possíveis",
            pedidoMelhoria: "Pedidos de Melhorias Abertas Após Análise",
            reproducaoProblema: "Reprodução do Problema",
            sintomas: "Sintomas",
            reproducaoProcesso: "Reprodução do Processo",
            esclarecimentoDuvida: "Esclarecimento da Dúvida",
            duvida: "Dúvida",
            reproducaoErro: "Reprodução do Erro",
            descricaoSolucao: "Descrição da Solução",
            configuracoesExecutadas: "Configurações Executadas",
            objetosAbap: "Objetos ABAP criados/alterados",
            createdAt: "Data de criação",
            updatedAt: "Data de atualização",
            __v: "Versão",
            // Adicione mais campos e descrições personalizadas conforme necessário
        };

        doc.setFillColor(173, 216, 230); // R, G, B - cor azul claro

        // ... o restante do seu código para gerar o PDF ...

        // Cabeçalho
        doc.rect(0, 0, doc.internal.pageSize.width, 20, 'F');


        // Adicione o logotipo no canto superior direito
        const logoWidth = 27.54; // Largura do logotipo
        const logoHeight = 9.28; // Altura do logotipo
        const logoXPosition = doc.internal.pageSize.width - logoWidth - 8; // Ajuste a posição do logotipo
        const logoYPosition = 4.5; // Ajuste a posição do logotipo
        doc.addImage(logo, 'PNG', logoXPosition, logoYPosition, logoWidth, logoHeight);

        // Defina o título do PDF (centralizado com margem superior)
        doc.setFontSize(16);
        doc.setFont("helvetica", "bold")
        const title = `Note ${note.idChamado}`;
        const titleWidth = doc.getStringUnitWidth(title) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        const pageWidth = doc.internal.pageSize.width;
        const xPosition = (pageWidth - titleWidth) / 2;
        const Positiony = 13; // Ajuste a posição vertical com 5px de margem superior
        doc.text(title, xPosition, Positiony);

        // Campos a serem excluídos
        const excludedFields = ['_id', 'userId', 'userName', 'history'];

        // Itere sobre os campos e valores da nota e adicione-os ao PDF
        let yPosition = 30;
        const fieldSpacing = 10;
        let pageCount = 1;

        Object.entries(note).forEach(([fieldName, fieldValue]) => {
            if (fieldValue && !excludedFields.includes(fieldName)) { // Verifique se o campo não está na lista de campos excluídos
                doc.setFontSize(12);
                const fieldDescription = fieldDescriptions[fieldName] || fieldName;
                doc.setFont("helvetica", "bold"); // Define a fonte como negrito

                // Adicione um margem superior de 2px ao texto do campo de nome
                doc.text(`${fieldDescription}:`, 10, yPosition, {
                    // Define a margem superior como 2px
                    // O valor é em unidades de fonte
                    top: 2 * doc.internal.getFontSize() / doc.internal.scaleFactor,
                });
                yPosition += fieldSpacing;
                doc.setFont("helvetica", "normal"); // Volta ao estilo normal

                // Adicione o valor ao PDF
                const textLines = doc.splitTextToSize(fieldValue.toString(), 190);
                for (const textLine of textLines) {
                    doc.text(textLine, 10, yPosition);
                    yPosition += fieldSpacing;
                }

                // Verifique se o conteúdo da página está próximo da borda inferior
                if (yPosition > doc.internal.pageSize.height - 50) {
                    // Adicione uma nova página
                    doc.addPage();
                    yPosition = 30;
                    pageCount++;
                }
            }
        });

        // Verifique se a página atual é a última página
        if (pageCount === doc.getNumberOfPages()) {
            // Adicione o rodapé à página atual
            doc.setFontSize(10); // Tamanho da fonte para o rodapé
            const footerText = "Fusion Consultoria Ltda";

            // Define a cor de preenchimento do rodapé
            doc.setFillColor(173, 216, 230);
            const footerWidth = doc.getStringUnitWidth(footerText) * doc.internal.getFontSize() / doc.internal.scaleFactor;
            const footerXPosition = (doc.internal.pageSize.width - footerWidth) / 2;
            const footerYPosition = doc.internal.pageSize.height - 9; // Altura do rodapé
            doc.rect(0, doc.internal.pageSize.height - 20, doc.internal.pageSize.width, 20, 'F');
            doc.text(footerText, footerXPosition, footerYPosition);
        }


        // Salve o PDF com um nome de arquivo
        doc.save(`Note_${note.idChamado}.pdf`);
    };

    return (
        <div>
            <Button variant="warning" size="lg" id='gerar' onClick={handleGeneratePDF}
                style={{ width: '100%' }}>
                Gerar PDF
            </Button>
        </div>)
};

export default Pdf;