import React from 'react';

const AddVac = () => {
    return (
        <div id='addVac'>
            <div className="container">
                <div className="addVac">
                    <h1>Добавить вакансию</h1>
                <div className="addVac--input">
                <div className="addVac--input__inpt">
                    <input   type="text" placeholder="Название вакансии" />
                        <input  type="text" placeholder="Описание вакансии" />
                        <input type="text" placeholder="Зарплата" />
                        <input type="text" placeholder="Компания" />
                    </div>
                    <div className="addVac--input__inpt">
                       <input type="text" placeholder="Тип вакансии" />
                        <input type="text" placeholder="Адрес" />
                        <input type="text" placeholder="Телефон" />
                        <input type="text" placeholder="Email" />
                       </div>
                </div>
                       <button type="submit">Добавить</button>
                </div>
            </div>
        </div>
    );
};

export default AddVac;