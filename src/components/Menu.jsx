import "./Menu.scss";

export default function Menu({ onClick }) {
    return (
        <div className="menu">
            <button className="menu__button" onClick={onClick} type="button">
                Play Tetris
            </button>
        </div>
    );
}
