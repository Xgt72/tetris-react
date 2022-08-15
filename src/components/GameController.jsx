import "./GameController.scss";
import { Action, actionForKey } from "../business/Input";
import { playerController } from "../business/PlayerController";
import { useInterval } from "../hooks/useInterval";

export default function GameController({
    board,
    player,
    setPlayer,
    gameStats,
    setGameOver,
}) {
    const onKeyUp = ({ code }) => {
        const action = actionForKey(code);

        if (action === Action.Quit) {
            setGameOver(true);
        }
    };

    const onKeyDown = ({ code }) => {
        const action = actionForKey(code);

        handleInput({ action });
    };

    const handleInput = ({ action }) => {
        playerController({
            action,
            board,
            player,
            setPlayer,
            setGameOver,
        });
    };

    useInterval(() => {
        handleInput({ action: Action.SlowDrop });
    }, 1000);

    return (
        <input
            className="gameController"
            type="text"
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            autoFocus
        />
    );
}
