import Head from "next/head";
import { useState } from "react";

import Modal from "@/components/modal/modal";
import Header from "@/components/header/header";
import Tasks from "@/components/tasks/tasks";
import { Data, TaskType } from "@/assets/data";
import Button from "@/components/button/button";

export default function Home() {
  const [showModalAddTask, setShowModalAddTask] = useState(false);
  const [showModalDeleteTask, setShowModalDeleteTask] = useState(false);
  const [deleteTask, setDeleteTask] = useState<TaskType>();
  return (
    <>
      <Head>
        <title>Task Manager</title>
        <meta name="description" content="Created by Milton-A" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className={"" + (showModalAddTask || showModalDeleteTask ? "blur" : "")}
      >
        <Header />
        <main className="container">
          <Tasks
            tasks={Data}
            onOpen={() => setShowModalDeleteTask(true)}
            setDeleteTask={setDeleteTask}
          />
          <div className="button">
            <Button
              variant="primary"
              typeButton="blue"
              title="Adicionar uma nova tarefa"
              onClick={() => setShowModalAddTask(true)}
            />
          </div>
        </main>
      </div>
      <Modal
        isOpen={showModalAddTask}
        onClose={() => setShowModalAddTask(false)}
        leftButton="Cancel"
        rightButton="Adicionar"
        TypeButton="blue"
        execFunction="add"
      />
      <Modal
        isOpen={showModalDeleteTask}
        onClose={() => setShowModalDeleteTask(false)}
        leftButton="Cancel"
        rightButton="Deletar"
        TypeButton="red"
        execFunction="remove"
        deleteTask={deleteTask}
      />
    </>
  );
}
