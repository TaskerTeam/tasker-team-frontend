import styled from "styled-components";
import AsideForm from "./components/AsideForm";
import TemplateDefault from "./components/TemplateDefault";
import VetorEdit from "/vetor_edit.svg";
import VetorDelete from "/vetor_delete.svg";
import Woman from "/woman.png";
import { getListTask, postTaskData } from "./services/api";
import { useEffect, useState } from "react";

function App() {
    const [taskList, setTaskList] = useState<{ tasks: postTaskData[] }>({
        tasks: [],
    });

    async function getNotifications() {
        const tasks = await getListTask();
        setTaskList(tasks);
    }

    useEffect(() => {
        getNotifications();
    }, []);

    return (
        <TemplateDefault asideChildren={<AsideForm />}>
            <MainContentContainer>
                <StatusContainer>
                    <Status>
                        <TitleStatus>Pendentes</TitleStatus>
                        {taskList.tasks.map((task) => (
                            <TaskCard>
                                <Task>
                                    <TitleTask title={task.title}>
                                        {task.description}
                                    </TitleTask>
                                    <ActionsTask>
                                        <Button title="editar_tarefa">
                                            <img
                                                src={VetorEdit}
                                                alt="editar_tarefa"
                                                width={16}
                                                height={16}
                                            />
                                        </Button>
                                        <Button title="deletar_tarefa">
                                            <img
                                                src={VetorDelete}
                                                alt="deletar_tarefa"
                                                width={16}
                                                height={16}
                                            />
                                        </Button>
                                    </ActionsTask>
                                </Task>
                                <img src={Woman} alt="" title="foto_usuario" />
                            </TaskCard>
                        ))}
                    </Status>

                    <Status>
                        <TitleStatus>Em andamento</TitleStatus>
                    </Status>

                    <Status>
                        <TitleStatus>Concluído</TitleStatus>
                    </Status>
                </StatusContainer>
            </MainContentContainer>
        </TemplateDefault>
    );
}

const TitleStatus = styled.div`
    font-weight: bold;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: 2px;
    width: 24px;
    height: 24px;
    border-radius: 6px;
    border: 1px solid #000000a2;
    aspect-ratio: 1/1;
`;

const ActionsTask = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const TitleTask = styled.p`
    max-width: 20ch;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis; /* exibe reticências (...) quando o texto é cortado */
    white-space: nowrap; /* impede que o texto seja quebrado em várias linhas */
`;

const Task = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
`;

const TaskCard = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    background-color: #fff;
    justify-content: space-evenly;
    padding: 1em 0em;
    max-width: 100%;
`;

const Status = styled.div`
    background-color: #f9f9f9;
    padding: 1em;
    border-radius: 0.2em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 300px;
`;

const StatusContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5em;
    max-width: 100%;
    height: 80vh;
    overflow-x: auto;
    overflow-y: auto;
`;

const MainContent = styled.div`
    max-width: 100%;
    height: 100%;

    @media screen and (max-width: 1380px) {
        max-width: 100%;
    }
`;

const MainContentContainer = styled.div`
    display: flex;
    align-items: end;
    height: 100%;
`;

export default App;
