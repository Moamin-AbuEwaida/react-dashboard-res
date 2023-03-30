import React from "react";
import Board, {
  moveCard,
  moveColumn,
  removeCard,
  addCard,
} from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";
import "./Board.css";
import useBoard from "../../store/Board.js";
import { RxCross2 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";

const BoardPage = () => {
  const { board, setBoard } = useBoard();
  const handleColumnMove = (_card, source, destination) => {
    const updatedBoard = moveColumn(board, source, destination);
    setBoard(updatedBoard);
  };
  const handleCardMove = (_card, source, destination) => {
    const updatedBoard = moveCard(board, source, destination);
    setBoard(updatedBoard);
  };
  const getColumn = (card) => {
    const column = board.columns.filter((column) =>
      column.cards.includes(card)
    );
    return column[0];
  };

  const getGradient = (card) => {
    const column = getColumn(card);
    const title = column.title;

    if (title === "TODO") {
      return {
        background:
          "linear-gradient(65.35deg,rgba(65,65,65,.67) -1.72%, rgba(48,189,220) 163.54%)",
      };
    } else if (title === "Doing") {
      return {
        background:
          "linear-gradient(65.35deg,rgba(65,65,65,.67) -1.72%, rgba(220, 48, 48) 163.54%)",
      };
    } else if (title === "Completed") {
      return {
        background:
          "linear-gradient(65.35deg,rgba(65,65,65,.67) -1.72%, rgba(48,220,48) 163.54%)",
      };
    } else if (title === "Backlog") {
      return {
        background:
          "linear-gradient(65.35deg,rgba(65,65,65,.67) -1.72%, rgba(134,48,220) 163.54%)",
      };
    }
  };
  return (
    <div className="board-container">
      <span>Trello Board</span>
      <Board
        allowDragAndDrop={true}
        allowAddColumn
        allRenameColumn
        allowRemoveCard
        onCardDragEnd={handleCardMove}
        onColumnDragEnd={handleColumnMove}
        renderCard={(props, i) => (
          <div className="kanban-card" style={getGradient(props)} key={i}>
            <div>
              <span>{props.title}</span>
              <button
                className="remove-button"
                type="button"
                onClick={() => {
                  const updatedBoard = removeCard(
                    board,
                    getColumn(props),
                    props
                  );
                  setBoard(updatedBoard);
                }}
              >
                <RxCross2 color="white" size={15} />
              </button>
            </div>
            <span>{props.description}</span>
          </div>
        )}
        renderColumnHeader={(props, i) => {
          return (
            <div className="column-header" key={i}>
              <span>{props.title}</span>
              <IoMdAdd color="#fff" size={25} title="Add Card" />
            </div>
          );
        }}
      >
        {board}
      </Board>
    </div>
  );
};

export default BoardPage;
