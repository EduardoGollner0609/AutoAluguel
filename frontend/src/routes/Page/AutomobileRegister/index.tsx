import { useEffect, useState } from 'react';
import * as forms from '../../../utils/forms';
import './styles.css';
import FormInput from '../../../components/FormInput';
import { BrandDTO, ModelDTO } from '../../../models/automobile';
import * as brandService from '../../../services/brand-service';
import * as automobileService from '../../../services/automobile-service';
import { selectStyles } from '../../../utils/select';
import { useParams } from 'react-router-dom';
import FormSelect from '../../../components/FormSelect';
import loadingIcon from '../../../assets/spinner-loading-icon.svg';
import { CardError } from '../../../components/CardError';
import { CardSucess } from '../../../components/CardSucess';


export function AutomobileRegister() {

    const params = useParams();

    const isEditing = params.automobileId !== "create";

    const [formData, setFormData] = useState(formEmpty());

    const [brands, setBrands] = useState<BrandDTO[]>([]);

    const [loading, setLoading] = useState<boolean>(false);

    const [messageError, setMessageError] = useState<string>('');

    const [cardSucessVisible, setCardSucessVissible] = useState<boolean>(false);

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
                    return /.*[A-Za-z0-9]{4,}.*/.test(value);
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
                message: "Campo requerido, apenas números inteiros positivos",
            },
            valuePerDay: {
                value: "",
                id: "valuePerDay",
                name: "valuePerDay",
                type: "number",
                placeholder: "Valor por dia",
                validation: function (value: string) {
                    return /^\d+([,.]\d{1,2})?$/.test(value);
                },
                message: "Campo requerido, apenas 2 casas decimais permitidas",
            },
            model: {
                value: { id: null, name: "" },
                id: "model",
                name: "model",
                placeholder: "Modelo",
                type: "text",
                validation: function (value: ModelDTO) {
                    return !(value == null || value.name === "");
                },
                message: "Campo requerido",
            },
            brand: {
                id: "brand",
                name: "brand",
                placeholder: "Marca",
                type: "text",
                validation: function (value: BrandDTO) {
                    return !(value == null || value.id === undefined || value.id === 0 || value.name.trim() === "");
                }
                ,
                message: "Campo requerido"
            }
        };
    }

    useEffect(() => {
        if (isEditing) {
            automobileService.findById(Number(params.automobileId)).then(response => {
                const automobile = response.data;
                const { model, ...rest } = automobile;

                const newFormData = forms.updateAll(formData, rest);

                setFormData({
                    ...newFormData,
                    model: {
                        value: { id: model?.id || null, name: model?.name || "" },
                        id: "model",
                        name: "model",
                        placeholder: "Modelo",
                        type: "text",
                        validation: (value: ModelDTO) => !(value == null || value.name === ""),
                        message: "Campo requerido",
                    },
                    brand: {
                        value: model?.brand
                            ? { id: model.brand.id || null, name: model.brand.name || "" }
                            : { id: null, name: "" },
                        id: "brand",
                        name: "brand",
                        placeholder: "Marca",
                        type: "text",
                        validation: (value: BrandDTO) => !(value == null || value.id === undefined || value.id === 0 || value.name.trim() === ""),
                        message: "Campo requerido"
                    }
                });


            });

        }
        brandService.findAll().then(response => {
            setBrands(response.data);
        }
        )
    }, []);

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormData(
            forms.updateAndValidate(formData, event.target.name, event.target.value)
        );
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

        setLoading(true);

        const requestBody = forms.toValues(formData);

        if (isEditing) {
            automobileService.update(Number(params.automobileId), requestBody).then(() => {
                setCardSucessVissible(true);
                setLoading(false);
            }).catch(error => {
                setLoading(true);
                const newInputs = forms.setBackendErrors(
                    formData,
                    error.response.data.errors
                );
                setFormData(newInputs);
                setMessageError(error);
            });
        }
        else {
            automobileService.insert(requestBody).then(() => {
                setCardSucessVissible(true);
                setLoading(false);
            }
            ).catch(error => {
                setLoading(true);
                const newInputs = forms.setBackendErrors(
                    formData,
                    error.response.data.errors
                );
                setFormData(newInputs);
            })
        }

    }

    return (
        <section id="automobile-section" className="container">
            <div className="page-register-card">
                <h2>Dados do Automóvel</h2>
                {
                    !loading ?
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
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {

                                        const newObj = {
                                            id: null,
                                            name: event.target.value
                                        }

                                        const newFormData = forms.updateAndValidate(
                                            formData,
                                            "model",
                                            newObj
                                        );
                                        setFormData(newFormData);
                                    }}
                                />
                                <div className="form-error">{formData.model.message}</div>
                            </div>
                            <div className="register-card-select-brand form-item-input-select">
                                <label>Marca</label>
                                <FormSelect
                                    {...formData.brand}
                                    placeholder="Marca"
                                    styles={selectStyles}
                                    options={brands}
                                    onChange={(obj: any) => {
                                        const newFormData = forms.updateAndValidate(
                                            formData,
                                            "brand",
                                            obj
                                        );
                                        setFormData(newFormData);
                                    }}
                                    onTurnDirty={handleTurnDirty}
                                    getOptionLabel={(obj: any) => obj.name}
                                    getOptionValue={(obj: any) => String(obj.id)}
                                />
                                <div className="form-error">
                                    {formData.brand.message}
                                </div>
                            </div>
                            {
                                isEditing ? <div className="register-card-btn">
                                    <button onClick={handleSubmit}>Atualizar</button>
                                </div>
                                    :
                                    <div className="register-card-btn">
                                        <button onClick={handleSubmit}>Criar</button>
                                    </div>
                            }

                        </form>
                        :
                        <div className="register-automobile-loading">
                            <img src={loadingIcon} alt="" />
                        </div>
                }
            </div>
            {
                messageError && <CardError message={messageError} closeCard={() => setMessageError('')} />
            }
            {
                cardSucessVisible && <CardSucess message='Salvo' totalValue={0} closeCard={() => setCardSucessVissible(false)} />
            }
        </section>
    );
}