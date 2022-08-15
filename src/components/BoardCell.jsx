import "./BoardCell.scss";

export default function BoardCell({ cell }) {
    return (
        <div className={`boardCell ${cell.className}`}>
            <div className="sparkle" />
        </div>
    );
}
