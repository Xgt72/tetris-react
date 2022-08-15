import { memo } from "react";
import Preview from "./Preview";

function Previews({ tetrominoes }) {
    const previewTetrominoes = tetrominoes
        .slice(1 - tetrominoes.length)
        .reverse();

    return (
        <>
            {previewTetrominoes.map((tetromino, index) => (
                <Preview tetromino={tetromino} index={index} key={index} />
            ))}
        </>
    );
}

export default memo(Previews);
