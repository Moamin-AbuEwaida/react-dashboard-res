import React from "react";
import css from "./AddCardModal.module.css";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
const AddCardModal = ({ visible, onClose, handleCardAdd }) => {
  const customStyle = {
    background: "rgb(58,58,58)",
    padding: "20px",
    width: "50%",
    top: "-3rem",
    height: "fit-content",
    maxWidth: "40rem",
  };
  const [title, setTitle] = React.useState("");
  const [detail, setDetail] = React.useState("");
  return (
    <Rodal visible={visible} onClose={onClose} customStyles={customStyle}>
      <div className={css.container}>
        <div>
          <span className={css.label}>Card Title</span>
          <input
            type="text"
            className={css.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <span className={css.label}>Detail</span>
          <textArea
            rows={10}
            className={css.input}
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            type="text"
          />
        </div>
        <button
          className={css.saveButton}
          disabled={title === "" && detail === ""}
          onClick={() => {
            handleCardAdd(title, detail);
            setDetail("");
            setTitle("");
          }}
        >
          Add
        </button>
      </div>
    </Rodal>
  );
};

export default AddCardModal;
