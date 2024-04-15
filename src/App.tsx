import styled from "styled-components";
import AsideForm from "./components/AsideForm";
import TemplateDefault from "./components/TemplateDefault";
import { getListTask, postTaskData } from "./services/api";
import { useEffect, useState } from "react";
import TaskCard from "./components/TaskCard";

function App() {
    const [taskList, setTaskList] = useState<{ tasks: postTaskData[] }>({
        tasks: [],
    });

    async function getTasks() {
        const tasks = await getListTask();
        setTaskList(tasks);
    }

    useEffect(() => {
        getTasks();
        console.log(taskList)
    }, []);

    async function refreshItens() {
        const updatedTasks = await getListTask()
        setTaskList(updatedTasks)
    }

    return (
        <TemplateDefault asideChildren={<AsideForm refreshTrigger={refreshItens} />}>
            <MainContentContainer>
                <StatusContainer>
                    <Status>
                        <TitleStatus>Pendentes</TitleStatus>
                        {taskList.tasks && taskList.tasks.map((task) => (
                            <TaskCard task={task} refreshTigger={refreshItens}/>
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


const MainContentContainer = styled.div`
    display: flex;
    align-items: end;
    height: 100%;
`;

export default App;
