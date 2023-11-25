import './App.css';
import { Route, Routes } from 'react-router-dom';
import TaskList from './components/componenteTaskList/TaskList';
import TaskForm from './components/componenteTaskForm/TaskForm';
import TopBar from './components/navbar/TopBar';
import Inicio from './components/inicio/Inicio';
import Footer from './components/footer/Footer';


function App() {

  return (
    <>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/creartarea" element={<TaskForm />} />
        <Route path="/listadetareas" element={<TaskList />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App