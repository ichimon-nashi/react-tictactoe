const GameBoard = ({ onSelectSquare, board }) => {
    return (
    <ol id="game-board">
        {board.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <button 
                            onClick={() => onSelectSquare(rowIndex, colIndex)} 
                            disabled={playerSymbol !== null}
                        >
                            {playerSymbol}
                        </button>
                    ))}
                </ol>
            </li>
        ))}
    </ol>
    )
}

export default GameBoard;