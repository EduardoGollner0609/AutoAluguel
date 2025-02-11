import { useState } from 'react';
import * as forms from '../../../utils/forms';
import './styles.css';
import FormInput from '../../../components/FormInput';

export function ClientRegister() {

    const [formData, setFormData] = useState(formEmpty);

    function formEmpty() {
        return {
            name: {
                value: "",
                id: "name",
                name: "name",
                type: "text",
                placeholder: "Nome",
                validation: function (value: string) {
                    return /^.{5,80}$/.test(value);
                },
                message: "Favor informar um nome de 5 a 80 caracteres",
            },
            phone: {
                value: "",
                id: "phone",
                name: "phone",
                type: "text",
                placeholder: "Número",
                validation: function (value: string) {
                    return /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(value);
                },
                message: "Número inválido",
            },
            address: {
                value: "",
                id: "address",
                name: "address",
                type: "text",
                placeholder: "CEP",
                validation: function (value: string) {
                    return /^.{8,}$/.test(value);;
                },
                message: "Campo requerido",
            },
            birthDate: {
                value: "",
                id: "birthDate",
                name: "birthDate",
                type: "date",
                validation: function (value: string) {
                    return new Date(value).getTime() <= Date.now();
                },
                message: "Data inválida",
            },
            email: {
                value: "",
                id: "email",
                name: "email",
                type: "text",
                placeholder: "Email",
                validation: function (value: string) {
                    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                },
                message: "Email inválido",
            },
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
    }

    return (
        <section id="client-section" className="container">
            <div className="client-register-card">
                <h2>Criar usuario</h2>
                <form onSubmit={handleSubmit}>
                    <div className="client-register-card-form-item-input form-item-input">
                        <label>Nome</label>
                        <FormInput
                            {...formData.name}
                            onTurnDirty={handleTurnDirty}
                            onChange={handleInputChange} />
                        <div className="form-error">{formData.name.message}</div>
                    </div>
                    <div className="client-register-card-form-item-input form-item-input">
                        <label>CPF</label>
                        <FormInput
                            {...formData.cpf}
                            onTurnDirty={handleTurnDirty}
                            onChange={handleInputChange} />
                        <div className="form-error">{formData.cpf.message}</div>
                    </div>
                    <div className="client-register-card-form-item-input form-item-input">
                        <label>Data de Nascimento</label>
                        <FormInput
                            {...formData.birthDate}
                            onTurnDirty={handleTurnDirty}
                            onChange={handleInputChange} />
                        <div className="form-error">{formData.birthDate.message}</div>
                    </div>
                    <div className="client-register-card-form-item-input form-item-input">
                        <label>Email</label>
                        <FormInput
                            {...formData.email}
                            onTurnDirty={handleTurnDirty}
                            onChange={handleInputChange} />
                        <div className="form-error">{formData.email.message}</div>
                    </div>
                    <div className="client-register-card-form-item-input form-item-input">
                        <label>Número de telefone</label>
                        <FormInput
                            {...formData.phone}
                            onTurnDirty={handleTurnDirty}
                            onChange={handleInputChange} />
                        <div className="form-error">{formData.phone.message}</div>
                    </div>
                    <div className="client-register-card-btn">
                        <button>Criar</button>
                    </div>

                </form>
            </div>
        </section>
    );
}