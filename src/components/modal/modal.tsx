import styles from "@/components/modal/modal-style.module.scss";
import Button from "../button/button";
import {
  TaskType,
  CreateTask,
  DeleteTask,
  DeleteTaskOnTrash,
} from "@/assets/data";
import { useState } from "react";

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  execFunction: "add" | "remove";
  leftButton: string;
  rightButton: string;
  TypeButton: "blue" | "red";
  deleteTask?: TaskType;
};

export default function Modal({
  isOpen,
  onClose,
  leftButton,
  rightButton,
  TypeButton,
  execFunction,
  deleteTask,
}: ModalProps) {
  const [task, setTask] = useState("");
  if (!isOpen) return null;

  function handleExecFunction() {
    if (execFunction === "add") CreateTask(task);
    else {
      if (deleteTask) DeleteTask(deleteTask);
    }

    onClose();
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Modal Title</h1>
        <div className={styles.input}>
          {execFunction === "remove" ? (
            <span className={styles.textSecondary}>
              Tem certeza que você deseja deletar essa tarefa?
            </span>
          ) : (
            <>
              <span className={styles.textPrimary}>Titulo</span>
              <input
                type="text"
                className={styles.text}
                placeholder="Digite uma tarefa"
                onChange={(event) => setTask(event.target.value)}
              />
            </>
          )}
        </div>
        <div className={styles.button}>
          <Button
            variant="secondary"
            typeButton={TypeButton}
            title={leftButton}
            onClick={onClose}
          />
          <Button
            variant="primary"
            typeButton={TypeButton}
            title={rightButton}
            onClick={handleExecFunction}
          />
        </div>
      </div>
    </div>
  );
}
