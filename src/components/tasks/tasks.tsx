import { DataFinished } from "@/assets/data";
import style from "@/components/tasks/tasks-style.module.scss";
import { BoxSelect, Trash } from "lucide-react";
import { TaskType } from "@/assets/data";

export type TaskList = {
  tasks: TaskType[];
  onOpen: () => void;
  task?: TaskType;
  setDeleteTask: (text: TaskType) => void;
};

export default function Tasks({ tasks, onOpen, setDeleteTask }: TaskList) {
  function handleDeleteAtask(task: TaskType) {
    setDeleteTask(task);
    onOpen();
  }
  return (
    <div className={style.tasks}>
      <span className={style.title}>Suas tarefas de hoje</span>
      {tasks.map((task) => (
        <div key={task.id} className={style.task}>
          <BoxSelect color="#B0BBD1" />
          <span className={style.text}>{task.name}</span>
          <Trash
            color="#B0BBD1"
            strokeWidth={1.33}
            size={24}
            onClick={() => handleDeleteAtask(task)}
          />
        </div>
      ))}
      <span className={style.title}>Tarefas finalizadas</span>
      {DataFinished.map((task) => (
        <div key={task.id} className={style.task}>
          <BoxSelect color="#B0BBD1" />
          <span className={style.textFinished}>{task.name}</span>
          <Trash
            color="#B0BBD1"
            strokeWidth={1.33}
            size={24}
            onClick={onOpen}
          />
        </div>
      ))}
    </div>
  );
}
