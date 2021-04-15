import './board.css';
import React from 'react'

class Board extends React.Component {


    render() {
        let rows = []
        for (let col = 0; col < 8; col++) {
            let columns = []
            for (let row = 1; row <= 8; row++) {
                if ((col + row) % 2 === 0) {
                    columns.push(<td className="whiteSquare" key={col + "-" + row}></td>)
                }
                else {
                    columns.push(<td className="blackSquare" key={col + "-" + row}></td >)
                }
            }
            rows.push(<tr key={col}>{columns}</tr>)
        }

        return (
            <table className="board" >
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

export default Board;