import styled from "styled-components";
import VetorEdit from "/vetor_edit.svg";
import VetorDelete from "/vetor_delete.svg";
import { deleteTask, postTaskData } from "../../services/api";

interface TaskCardProps {
    task: postTaskData
    refreshTigger: () => void
}


export default function TaskCard({task, refreshTigger}: TaskCardProps) {

    async function deleteTaskFunc() {
        if (confirm('Você realmente deseja remover essa tarefa?')) {
            await deleteTask(task.taskId)
            refreshTigger()
        } else {
            alert('Operação cancelada')
        }
    }

    return (
        <TaskCardElement>
            <Task>
                <TitleTask title={task.title}>{task.description}</TitleTask>
                <ActionsTask>
                    <Button title="deletar_tarefa" onClick={() => deleteTaskFunc()}>
                        <img
                            src={VetorDelete}
                            alt="deletar_tarefa"
                            width={16}
                            height={16}
                        />
                    </Button>
                </ActionsTask>
            </Task>
            <img src='src/assets/icons/defaultUserIcon.jpg' alt="" title="foto_usuario" width={30} height={30} />
        </TaskCardElement>
    );
}

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
    cursor: pointer;
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
    justify-content: space-between;
    gap: 0.5em;

    img {
        border-radius: 50%;
    }
`;

const TaskCardElement = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    background-color: #fff;
    justify-content: space-between;
    padding: 1em 30px;
    max-width: 100%;
    cursor: grab;
`;