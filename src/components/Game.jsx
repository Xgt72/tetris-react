import { useGameOver } from "../hooks/useGameOver";
import Menu from "./Menu";
import Tetris from "./Tetris";

export default function Game({ rows, columns }) {
    const [gameOver, setGameOver, resetGameOver] = useGameOver();
    const start = () => {
        resetGameOver();
    };

    return (
        <div className="game">
            {gameOver ? (
                <Menu onClick={start} />
            ) : (
                <Tetris
                    rows={rows}
                    columns={columns}
                    setGameOver={setGameOver}
                />
            )}
        </div>
    );
}
