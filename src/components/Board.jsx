import "./Board.scss";
import BoardCell from "./BoardCell";

export default function Board({ board }) {
    const boardStyle = {
        gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`,
    };
    return (
        <div className="board" style={boardStyle}>
            {board.rows.map((row, y) =>
                row.map((cell, x) => (
                    <BoardCell key={x * board.size.columns + x} cell={cell} />
                ))
            )}
        </div>
    );
}
