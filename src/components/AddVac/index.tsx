import React from 'react';
import React, { useState } from 'react';
import { API } from '../../constants/intex';
import axios from 'axios';

const AddVac = () => {
    const [nameVacancy, setNameVacancy] = useState("");
    const [salaryVacancy, setSalarylVacancy] = useState("");
    const [priceFrom, setPriceFrom] = useState("");
    const [nameCompany, setNameCompany] = useState("");
    const [priceTo, setPriceTo] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const handleAddVacancy = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API}/jobs`, {
                organization_name: nameCompany,
                price_from: Number(priceFrom),
                price_to: Number(priceTo),
                currency: 'currency',
                position: nameVacancy,
                city: address,
                salary: salaryVacancy,
                phone: phone,
                type: 'type',
                id: Math.random(),
                slug: '',
                created_at: '',
                updated_at: '',
                is_archived: true,
                gradient: 0,
                workday: '',
                organization_icon: '',
                organization_icon_formats: [null]
            });
            if (response.data.success) {
                console.log(response.data);
            }
            alert(response.data.message);
        } catch (error) {
            alert(error.message || "Не удалось добавить вакансию");
        }
    };
    return (
        <div id='addVac'>
            <div className="container">
            <form className="addVac" onSubmit={handleAddVacancy}>   
                 <h1>Добавить вакансию</h1>
                 <div className="addVacan--input">
                        <div className="addVacan--input__inpt">
                            <input onChange={(e) => setNameCompany(e.target.value)} value={nameCompany} type="text" placeholder="Название компании" />
                            <input onChange={(e) => setSalarylVacancy(e.target.value)} value={salaryVacancy} type="text" placeholder="Зарплата" />
                            <input onChange={(e) => setPriceTo(e.target.value)} value={priceTo} type="text" placeholder='Price to' />
                            <input onChange={(e) => setPriceFrom(e.target.value)} value={priceFrom} type="text" placeholder="Price from" />
                        </div>
                        <div className="addVacan--input__inpt">
                            <input onChange={(e) => setNameVacancy(e.target.value)} value={nameVacancy} type="text" placeholder="Тип вакансии" />
                            <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" placeholder="Адрес" />
                            <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" placeholder="Телефон" />
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Email" />
                        </div>
                    </div>
                    <button type="submit">Добавить</button>
                </form>
            </div>
        </div>
    );
};

export default AddVac;