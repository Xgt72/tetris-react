import "./GameController.scss";
import { Action, actionForKey, actionIsDrop } from "../business/Input";
import { playerController } from "../business/PlayerController";
import { useInterval } from "../hooks/useInterval";
import { useDropTime } from "../hooks/useDropTime";

export default function GameController({
  board,
  player,
  setPlayer,
  gameStats,
  setGameOver,
}) {
  const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({ gameStats });

  useInterval(() => {
    handleInput({ action: Action.SlowDrop });
  }, dropTime);

  const onKeyUp = ({ code }) => {
    const action = actionForKey(code);

    if (actionIsDrop(action)) {
      resumeDropTime();
    }
  };

  const onKeyDown = ({ code }) => {
    const action = actionForKey(code);

    if (action === Action.Pause) {
      if (dropTime) {
        pauseDropTime();
      } else {
        resumeDropTime();
      }
    } else if (action === Action.Quit) {
      setGameOver(true);
    } else {
      if (actionIsDrop(action)) {
        pauseDropTime();
      }
      handleInput({ action });
    }
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
