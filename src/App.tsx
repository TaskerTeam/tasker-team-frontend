import styled from 'styled-components'
import AsideForm from './components/AsideForm'
import TemplateDefault from './components/TemplateDefault'
import VetorEdit from '/vetor_edit.svg'
import VetorDelete from '/vetor_delete.svg'
import Woman from '/woman.png'

function App() {
  return (
    <TemplateDefault asideChildren={<AsideForm/>}>
      <MainContentContainer>
        <MainContent>
          <StatusContainer> 

            <Status>

              <TitleStatus>Pendentes</TitleStatus>

            </Status>

            <Status>

              <TitleStatus>Em andamento</TitleStatus>
              
            </Status>

            <Status>

              <TitleStatus>Concluído</TitleStatus>

              <TaskCard>
                <Task>
                  <TitleTask title="titulo_completo_da_tarefa">Tarefa com um nome extremamente grande e nada a ver!</TitleTask>
                  <ActionsTask>
                    <EditLink href="" title='editar_tarefa'>
                      <ImageTasks src={VetorEdit} alt="editar_tarefa" />
                    </EditLink>
                    <EditLink href="" title='deletar_tarefa'>
                      <ImageTasks src={VetorDelete} alt="deletar_tarefa" />
                    </EditLink>
                  </ActionsTask>
                </Task>
                <ImageUser src={Woman} alt="" title='foto_usuario'/>
              </TaskCard>
            </Status>

          </StatusContainer>
        </MainContent>
      </MainContentContainer>
    </TemplateDefault>
  )
}

const ImageUser = styled.img `

`;

const ImageTasks = styled.img `

`;

const EditLink = styled.a `

`;

const TitleStatus = styled.div `
  font-weight: bold;
`;

const ActionsTask = styled.div `

`;

const TitleTask = styled.p `
  max-width: 20ch;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis; /* exibe reticências (...) quando o texto é cortado */
  white-space: nowrap; /* impede que o texto seja quebrado em várias linhas */
`;

const Task = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  
`;

const TaskCard = styled.div `
  display: flex;
  align-items: center;
  width: 300px;
  background-color: #fff;
  justify-content: space-evenly;
  padding: 1em 0em;
  max-width: 100%;
`;

const Status = styled.div `
  background-color: #F9F9F9;
  padding: 1em;
  border-radius: 0.2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 300px;
`;

const StatusContainer = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5em;
  max-width: 100%;
  max-height: 500px;
  height: 500px;
  overflow-x: auto;
  overflow-y: auto;
`;

const MainContent = styled.div `
  max-width: 100%;

  @media screen and (max-width: 1380px) {
    max-width: 100%;
  }

`;

const MainContentContainer = styled.div `
  display: flex;
  align-items: center;

`;

export default App
