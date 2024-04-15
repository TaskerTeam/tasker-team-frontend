import styled from "styled-components";

import { useState } from "react";
import { postTask } from "../../services/api.tsx";

export default function AsideForm({refreshTrigger}: {refreshTrigger: () => void }) {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    async function handleTaskSubmit(e: HTMLFormElement) {
        e.preventDefault();
        await postTask({
            taskId: 0,
            title: taskTitle,
            description: taskDescription,
            date: new Date().toString(),
        });
        refreshTrigger()
    }

    return (
        <DivTemplate>
            <FormContainer onSubmit={(e) => handleTaskSubmit(e)}>
                <h2 className="title">Registar Tarefa</h2>

                <input
                    className="taskTitle"
                    type="text"
                    id="taskTitle"
                    name="taskTitle"
                    placeholder="Insira o título da tarefa"
                    required
                    onChange={(e) => setTaskTitle(e.target.value)}
                />

                <textarea
                    className="taskDescription"
                    id="taskDescription"
                    name="taskDescription"
                    placeholder="Insira a descrição da tarefa"
                    required
                    onChange={(e) => setTaskDescription(e.target.value)}
                ></textarea>

                <select
                    className="taskResponsible"
                    id="taskResponsible"
                    name="taskResponsible"
                >
                    <option value="">Escolha o responsavel...</option>
                    <option value="responsavel1">Responsável 1</option>
                    <option value="responsavel2">Responsável 2</option>
                    <option value="responsavel3">Responsável 3</option>
                </select>

                <button className="salvedata" type="submit">
                    Salvar
                </button>
            </FormContainer>

            <FormContainer>
                <h2 className="title">Registrar user</h2>
                <input
                    className="file"
                    type="file"
                    id="fileInput"
                    name="fileInput"
                ></input>
                <input
                    className="createUser"
                    type="text"
                    id="createUser"
                    name="createUser"
                    placeholder="Cadastrar pessoa"
                    required
                />
                <button className="salvedata" type="submit">
                    Salvar
                </button>
            </FormContainer>
        </DivTemplate>
    );
}

const DivTemplate = styled.div`
    width: 100%;
    padding: 0 43px;
`;

const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;

    .title {
        color: #2496ff;
        font-size: 20px;
        margin-bottom: 16px;
        font-weight: 600;
        text-transform: uppercase;

        &::after {
        }
    }

    .createUser,
    .taskTitle {
        width: 100%;
        font-size: 18px;
        padding: 10px;
        outline: none;
        border: none;
        border-bottom: 1px solid #bfbfbf;
        margin-bottom: 16px;
        background-color: transparent;
    }

    .taskDescription {
        min-height: 30vh;
        outline: none;
        border: 1px solid #bfbfbf;
        border-radius: 4px;
        resize: none;
        padding: 10px;
        color: black;
        font-size: 18px;
        background-color: transparent;
        margin-bottom: 16px;
    }

    .taskResponsible {
        font-size: 18px;
        padding: 10px;
        outline: none;
        border: none;
        border-bottom: 1px solid #bfbfbf;
        margin-bottom: 16px;
        background-color: transparent;
        color: black;
    }

    .salvedata {
        min-height: 45px;
        background-color: #2496ff;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 16px;
    }

    .file {
        border: 1px solid #bfbfbf;
        padding: 10px;
        border-radius: 4px;
        font-size: 18px;
        margin-bottom: 16px;
    }
`;
