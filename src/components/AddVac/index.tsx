import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/index';

const AddVac = () => {
    const [nameVacancy, setNameVacancy] = useState("");
    const [salaryVacancy, setSalaryVacancy] = useState("");
    const [priceFrom, setPriceFrom] = useState("");
    const [nameCompany, setNameCompany] = useState("");
    const [priceTo, setPriceTo] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleAddVacancy = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!nameVacancy || !salaryVacancy || !priceFrom || !priceTo || !nameCompany || !address || !phone) {
            alert("Пожалуйста, заполните все обязательные поля.");
            return;
        }
        const salary = parseFloat(salaryVacancy);
        const from = parseFloat(priceFrom);
        const to = parseFloat(priceTo);
        if (isNaN(salary) || isNaN(from) || isNaN(to)) {
            alert("Цены и зарплата должны быть числами.");
            return;
        }
        try {
            const response = await axios.post(`${API_URL}/jobs`, {
                organization_name: nameCompany,
                price_from: from,
                price_to: to,
                currency: 'USD', 
                position: nameVacancy,
                city: address,
                salary: salary,
                phone: phone,
                type: 'full-time', 
                id: Math.random(),
                slug: '', 
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
                is_archived: false,
                gradient: 0,
                workday: '',
                organization_icon: '',
                organization_icon_formats: [null]
            });

            if (response.data.success) {
                alert("Вакансия успешно добавлена!");
                setNameVacancy("");
                setSalaryVacancy("");
                setPriceFrom("");
                setPriceTo("");
                setNameCompany("");
                setAddress("");
                setPhone("");
                setEmail("");
            }
        } catch (error) {
            const errorMessage = (error instanceof Error) ? error.message : "Не удалось добавить вакансию";
            alert(errorMessage);
        }
    };

    return (
        <div id='addVac'>
            <div className="container">
                <form className="addVac" onSubmit={handleAddVacancy}>
                    <h1>Добавить вакансию</h1>
                    <div className="addVacan--input">
                        <div className="addVacan--input__inpt">
                            <input
                                onChange={(e) => setNameCompany(e.target.value)}
                                value={nameCompany}
                                type="text"
                                placeholder="Название компании"
                            />
                            <input
                                onChange={(e) => setSalaryVacancy(e.target.value)}
                                value={salaryVacancy}
                                type="text"
                                placeholder="Зарплата"
                            />
                            <input
                                onChange={(e) => setPriceTo(e.target.value)}
                                value={priceTo}
                                type="text"
                                placeholder="Цена до"
                            />
                            <input
                                onChange={(e) => setPriceFrom(e.target.value)}
                                value={priceFrom}
                                type="text"
                                placeholder="Цена от"
                            />
                        </div>
                        <div className="addVacan--input__inpt">
                            <input
                                onChange={(e) => setNameVacancy(e.target.value)}
                                value={nameVacancy}
                                type="text"
                                placeholder="Тип вакансии"
                            />
                            <input
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}
                                type="text"
                                placeholder="Адрес"
                            />
                            <input
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                type="text"
                                placeholder="Телефон"
                            />
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="text"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <button type="submit">Добавить</button>
                </form>
            </div>
        </div>
    );
};
export default AddVac;