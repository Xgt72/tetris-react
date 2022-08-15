import "./Tetris.scss";
import Board from "./Board";
import { useBoard } from "../hooks/useBoard";
import GameStats from "./GameStats";
import { useGameStats } from "../hooks/useGameStats";
import Previews from "./Previews";
import { usePlayer } from "../hooks/usePlayer";
import GameController from "./GameController";

export default function Tetris({ rows, columns, setGameOver }) {
    const [gameStats, addLinesCleared] = useGameStats();
    const [player, setPlayer, resetPlayer] = usePlayer();
    const [board] = useBoard({
        rows,
        columns,
        player,
        resetPlayer,
        addLinesCleared,
    });

    return (
        <div className="tetris__container">
            <Board board={board} />
            <GameStats gameStats={gameStats} />
            <Previews tetrominoes={player.tetrominoes} />
            <GameController
                board={board}
                gameStats={gameStats}
                setGameOver={setGameOver}
                player={player}
                setPlayer={setPlayer}
            />
        </div>
    );
}
