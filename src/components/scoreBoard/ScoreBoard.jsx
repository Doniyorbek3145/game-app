import React from 'react';
import './ScoreBoard.scss';
import ButtonComponent from '../LittleComponents/Button/Button';

function ScoreBoard() {
    return (
        <div className='score-board'>
            <div className="background">
                <img src="./assets/background-main-menu.png" alt="background" />
            </div>

            <table className='table'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Task 1</th>
                        <th>Task 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Mistakes:</th>
                        <td>2</td>
                        <td>4</td>
                    </tr>
                </tbody>
            </table>

            
        </div>
    )
}

export default ScoreBoard;
