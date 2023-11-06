import { useSelector, useDispatch } from "react-redux";
import { getModulos } from "../../slices/moduloSlice";
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';


export const Modulo = ({ onOptionChange, currentProcessoNegocio }) => {
    const dispatch = useDispatch();
    const { modulos, loading } = useSelector((state) => state.modulo);

    // Load all modulos
    useEffect(() => {
        dispatch(getModulos());
    }, [dispatch]);

    const [selectedOption, setSelectedOption] = useState(currentProcessoNegocio);

    if (loading) {
        return <p>Carregando...</p>;
    }

    const options = [];

    modulos.forEach((modulo) => {
        const moduloNome = modulo.nome || 'N/A';
        if (modulo.submodulos.length > 0) {
            modulo.submodulos.forEach((submodulo) => {
                const submoduloNome = submodulo.nome || 'N/A';
                if (submodulo.processosNegocio.length > 0) {
                    submodulo.processosNegocio.forEach((processo) => {
                        const processoNome = processo.nome || 'N/A';
                        const moduleOption = `${moduloNome} - ${submoduloNome} - ${processoNome}`;
                        options.push({
                            label: moduleOption,
                            value: moduleOption,
                        });
                    });
                } else {
                    const moduleOption = `${moduloNome} - ${submoduloNome} - N/A`;
                    options.push({
                        label: moduleOption,
                        value: moduleOption,
                    });
                }
            });
        } else {
            const moduleOption = `${moduloNome} - N/A - N/A`;
            options.push({
                label: moduleOption,
                value: moduleOption,
            });
        }
    });

    const handleOptionSelect = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        onOptionChange(selectedValue); // Notifique a página pai quando o valor for alterado
    };

    return (
        <>
            <Form.Select
                aria-label="Select Option"
                value={selectedOption}
                onChange={handleOptionSelect}
                style={{ borderColor: 'gray' }}
                size="sm"
            >
                <option>Selecione uma opção</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Form.Select>
        </>
    );
}

