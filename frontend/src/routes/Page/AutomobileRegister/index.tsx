import { useEffect, useState } from 'react';
import * as forms from '../../../utils/forms';
import './styles.css';
import FormInput from '../../../components/FormInput';
import { CardSucess } from '../../../components/CardSucess';
import { BrandDTO } from '../../../models/automobile';
import * as brandService from '../../../services/brand-service';
import * as automobileService from '../../../services/automobile-service';
import FormSelect from '../../../components/FormSelect';
import { selectStyles } from '../../../utils/select';
import { useNavigate } from 'react-router-dom';

export function AutomobileRegister() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState(formEmpty());

    const [cardSucessVisible, setCardSucessVissible] = useState<boolean>(false);

    const [brands, setBrands] = useState<BrandDTO[]>([]);

    function formEmpty() {
        return {
            imgUrl: {
                value: "",
                id: "imgUrl",
                name: "imgUrl",
                type: "text",
                placeholder: "URL da Imagem",
                validation: function (value: string) {
                    return /^.{10,}$/.test(value);
                },
                message: "Minimo de 10 caracteres",
            },
            plate: {
                value: "",
                id: "plate",
                name: "plate",
                type: "text",
                placeholder: "Placa",
                validation: function (value: string) {
                    return /^[A-Z]{3}-?\d[A-Z0-9]\d{2}$/.test(value);
                },
                message: "Placa inválida",
            },
            year: {
                value: "",
                id: "year",
                name: "year",
                type: "number",
                placeholder: "Ano",
                validation: function (value: string) {
                    return /^(19[5-9]\d|20[0-3]\d|2040)$/.test(value);
                },
                message: "Data inválida",
            },
            color: {
                value: "",
                id: "color",
                name: "color",
                type: "text",
                placeholder: "Cor",
                validation: function (value: string) {
                    return /^.{3,}$/.test(value);
                },
                message: "Campo requerido",
            },
            km: {
                value: "",
                id: "km",
                name: "km",
                type: "number",
                placeholder: "Kilometragem",
                validation: function (value: string) {
                    return /^\d+$/.test(value);
                },
                message: "Campo requerido",
            },
            valuePerDay: {
                value: "",
                id: "valuePerDay",
                name: "valuePerDay",
                type: "number",
                placeholder: "Valor por dia",
                validation: function (value: string) {
                    return /^\d+$/.test(value);
                },
                message: "Campo requerido",
            },
            model: {
                value: { name: "", brand: { name: "" } },
                id: "model",
                name: "model",
                placeholder: "Modelo",
                type: "text",
                validation: function (value: { name: string, brand: { name: string } }) {
                    return value.name.trim() !== "" && value.brand.name.trim() !== "";
                },
                message: "Marca e Modelo são obrigatórios",
            },
        };
    }

    useEffect(() => {
        brandService.findAll().then(response =>
            setBrands(response.data)
        )
    }, []);

    function handleCardSucessCloseClick() {
        setCardSucessVissible(false);
    }

    function handleInputChange(event: any) {
        const { name, value } = event.target;

        setFormData((prev) => {
            if (name === "model") {
                return {
                    ...prev,
                    model: {
                        ...prev.model,
                        value: {
                            ...prev.model.value,
                            name: value,
                        },
                    },
                };
            } else if (name === "brand") {
                return {
                    ...prev,
                    model: {
                        ...prev.model,
                        value: {
                            ...prev.model.value,
                            brand: {
                                ...prev.model.value.brand,
                                name: value,
                            },
                        },
                    },
                };
            }

            return forms.updateAndValidate(prev, name, value);
        });
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

        console.log(requestBody);


        automobileService.insert(requestBody).then(() => {
            navigate("/")
        }
        ).catch(error => {
            const newInputs = forms.setBackendErrors(
                formData,
                error.response.data.errors
            );
            console.log(newInputs);
            setFormData(newInputs);
        })


    }

    return (
        <section id="automobile-section" className="container">
            <div className="page-register-card">
                <h2>Criar Automobile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="register-card-form-item-input form-item-input">
                        <label>URL da Imagem</label>
                        <FormInput
                            {...formData.imgUrl}
                            onTurnDirty={handleTurnDirty}
                            onChange={handleInputChange} />
                        <div className="form-error">{formData.imgUrl.message}</div>
                    </div>
                    <div className="register-card-form-item-input form-item-input">
                        <label>Placa</label>
                        <FormInput
                            {...formData.plate}
                            onTurnDirty={handleTurnDirty}
                            onChange={handleInputChange} />
                        <div className="form-error">{formData.plate.message}</div>
                    </div>
                    <div className="register-card-form-item-input form-item-input">
                        <label>Ano</label>
                        <FormInput
                            {...formData.year}
                            onTurnDirty={handleTurnDirty}
                            onChange={handleInputChange} />
                        <div className="form-error">{formData.year.message}</div>
                    </div>
                    <div className="register-card-form-item-input form-item-input">
                        <label>Kilometragem</label>
                        <FormInput
                            {...formData.km}
                            onTurnDirty={handleTurnDirty}
                            onChange={handleInputChange} />
                        <div className="form-error">{formData.km.message}</div>
                    </div>
                    <div className="register-card-form-item-input form-item-input">
                        <label>Valor por dia</label>
                        <FormInput
                            {...formData.valuePerDay}
                            onTurnDirty={handleTurnDirty}
                            onChange={handleInputChange} />
                        <div className="form-error">{formData.valuePerDay.message}</div>
                    </div>
                    <div className="register-card-form-item-input form-item-input">
                        <label>Cor</label>
                        <FormInput
                            {...formData.color}
                            onTurnDirty={handleTurnDirty}
                            onChange={handleInputChange} />
                        <div className="form-error">{formData.color.message}</div>
                    </div>
                    <div className="register-card-form-item-input form-item-input">
                        <label>Modelo</label>
                        <FormInput
                            {...formData.model}
                            value={formData.model.value.name}
                            onTurnDirty={handleTurnDirty}
                            onChange={
                                (e: any) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        model: {
                                            ...prev.model,
                                            value: {
                                                ...prev.model.value,
                                                name: e.target.value,
                                            },
                                        },
                                    }))
                            } />
                        <div className="form-error">{formData.model.message}</div>
                    </div>
                    <div className="register-card-select-brand">
                        <label>Marca</label>
                        <FormSelect
                            {...formData.model}
                            value={brands.find((b) => b.name === formData.model.value?.brand?.name) || ""}
                            styles={selectStyles}
                            options={brands}
                            onChange={(selectedBrand: BrandDTO) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    model: {
                                        ...prev.model,
                                        value: {
                                            ...prev.model.value,
                                            brand: selectedBrand,
                                        },
                                    },
                                }))
                            }
                            onTurnDirty={handleTurnDirty}
                            getOptionLabel={(obj: any) => obj.name}
                            getOptionValue={(obj: any) => String(obj.id)}
                        />
                        <div className="form-error">
                            {formData.model.message}
                        </div>
                    </div>

                    <div className="register-card-btn">
                        <button onClick={handleSubmit}>Criar</button>
                    </div>
                </form>
            </div>
            {
                cardSucessVisible && <CardSucess message="Salvo" closeCard={handleCardSucessCloseClick} />
            }
        </section>
    );
}