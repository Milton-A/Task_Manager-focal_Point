import { v4 as uuidv4 } from "uuid";

export type TaskType = {
  id: string;
  name: string;
};

export const Data: TaskType[] = [
  {
    id: "1",
    name: "Lavar as mãos",
  },
  {
    id: "2",
    name: "Fazer um bolo",
  },
  {
    id: "3",
    name: "Lavar a louça",
  },
  {
    id: "4",
    name: "Levar o lixo para fora",
  },
];
export const DataFinished = [
  {
    id: "1",
    name: "Lavar as mãos",
  },
];

export function CreateTask(task: string) {
  Data.push({
    id: uuidv4(),
    name: task,
  });
}
export function DeleteTask(deleteTask: TaskType) {
  const array = Data.filter((item) => item === deleteTask);
  array.forEach((element) => {
    Data.splice(Data.indexOf(element), 1);
  });
  DataFinished.push(deleteTask);
}
export function DeleteTaskOnTrash(deleteTask: TaskType) {
  const array = DataFinished.filter((item) => item === deleteTask);
  array.forEach((element) => {
    DataFinished.splice(Data.indexOf(element), 1);
  });
}
