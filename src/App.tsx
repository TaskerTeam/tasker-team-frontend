import AsideForm from './components/AsideForm'
import TemplateDefault from './components/TemplateDefault'

function App() {
  return (
    <TemplateDefault asideChildren={<AsideForm/>}>
      <span>Conteudo principal</span>
    </TemplateDefault>
  )
}

export default App
