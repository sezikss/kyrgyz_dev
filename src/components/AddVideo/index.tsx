import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '../../constants/index';

const AddVideo = () => {
    const [videoState, setVideoState] = useState({
        nameVideo: "",
        organVideo: "",
        dateVideo: ""
    });

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setVideoState({
            ...videoState,
            [name]: value
        });
    };

    const handleAddVideo = async (e: React.FormEvent) => {
        e.preventDefault();

        const { nameVideo, organVideo, dateVideo } = videoState;

        if (!nameVideo || !organVideo || !dateVideo) {
            toast.error("Пожалуйста, заполните все поля.");
            return;
        }

        try {
            const response = await axios.post(`${API_URL}/meetups`, {
                id: 0,
                title: nameVideo,
                cover: "string",
                slug: "string",
                date: dateVideo,
                created_at: "2024-08-24T04:19:32.195Z",
                updated_at: "2024-08-24T04:19:32.195Z",
                gradient: 0,
                organization_name: organVideo,
                cover_formats: [
                    {
                        type: "string",
                        url: "string"
                    }
                ]
            });

            if (response.data.success) {

                setVideoState({
                    nameVideo: "",
                    organVideo: "",
                    dateVideo: ""
                });

                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Не удалось добавить видео");
        }
    };

    return (
        <div id='addVacan'>
            <div className="container">
                <form className="addVacan" onSubmit={handleAddVideo}>
                    <h1>Добавить видео</h1>
                    <div className="addVacan--input">
                        <div className="addVacan--input__inpt">
                            <input
                                onChange={inputChangeHandler}
                                value={videoState.nameVideo}
                                name="nameVideo"
                                type="text"
                                placeholder="Название "
                            />
                            <input
                                onChange={inputChangeHandler}
                                value={videoState.organVideo}
                                name="organVideo"
                                type="text"
                                placeholder="Организатор"
                            />
                            <input
                                onChange={inputChangeHandler}
                                value={videoState.dateVideo}
                                name="dateVideo"
                                type="date"
                                placeholder=''
                            />
                        </div>
                    </div>
                    <button type="submit">Добавить</button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AddVideo;