import { useState } from "react";
import Newproject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSlidebar from "./components/ProjectSlidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setprojectState] = useState({
    selectedprojectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddtask(text) {
    setprojectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedprojectId,
        id: taskId,
      };
      return {
        ...prevState,
        selectedprojectId: undefined,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setprojectState((prevState) => {
      return {
        ...prevState,
        selectedprojectId: undefined,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleSelectProject(id) {
    setprojectState((prevState) => {
      return {
        ...prevState,
        selectedprojectId: id,
      };
    });
  }

  function handleStartAddProject() {
    setprojectState((prevState) => {
      return {
        ...prevState,
        selectedprojectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setprojectState((prevState) => {
      return {
        ...prevState,
        selectedprojectId: undefined,
      };
    });
  }

  function handleAddproject(projectData) {
    setprojectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedprojectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setprojectState((prevState) => {
      return {
        ...prevState,
        selectedprojectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedprojectId
        ),
      };
    });
  }
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedprojectId
  );
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddtask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedprojectId === null) {
    content = (
      <Newproject onAdd={handleAddproject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedprojectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSlidebar
        onSelectProject={handleSelectProject}
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedprojectId}
      />
      {content}
    </main>
  );
}

export default App;
