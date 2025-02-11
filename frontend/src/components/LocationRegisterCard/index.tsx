import { Link } from 'react-router-dom';
import './styles.css';
import FormInput from '../FormInput';
import { useState } from 'react';
import * as forms from '../../utils/forms';
import * as clientService from '../../services/client-service';

type Props = {
    rentCardVisible: () => void
}
export default function LocationRegisterCard({ rentCardVisible }: Props) {

    const [formData, setFormData] = useState(formEmpty);

    function formEmpty() {
        return {
            cpf: {
                value: "",
                id: "cpf",
                name: "cpf",
                type: "text",
                placeholder: "CPF",
                validation: function (value: string) {
                    return /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/.test(value);
                },
                message: "CPF inválido",
            },
        };
    }

    function handleInputChange(event: any) {
        setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value));
    }

    function handleTurnDirty(name: string) {
        setFormData(forms.dirtyAndValidate(formData, name));
    }

    function handleSubmit(event: any) {
        event.preventDefault();

        const formDataValidated = forms.dirtyAndValidateAll(formData);

        if (forms.hasAnyInvalid(formDataValidated)) {
            setFormData(formDataValidated);
            return;
        }

        const requestBody = forms.toValues(formData);

        clientService.findByCpf(requestBody.cpf).then(() => {
            console.log(requestBody.cpf);
        }).catch(error => {
            const newInput = forms.setBackEndError(formData, formData.cpf.name, error.response.data.message);
            setFormData(newInput);
        });

    }

    return (
        <>
            <div className="location-register-card-background" onClick={rentCardVisible}>
            </div>
            <div className="location-register-card">
                <h2>Alugar</h2>
                <div className="location-register-card-search form-item-input">
                    <label>Digite um CPF</label>
                    <FormInput
                        {...formData.cpf}
                        onTurnDirty={handleTurnDirty}
                        onChange={handleInputChange} />
                    <div className="form-error">{formData.cpf.message}</div>
                    <button onClick={handleSubmit}>Buscar</button>
                </div>
                <div className="location-register-card-invite-register-client">
                    <Link to="/user-register">Cliente não tem cadastro</Link>
                </div>

            </div>
        </>

    );
}