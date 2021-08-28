import React, { useState, useEffect, useMemo, useCallback } from "react";

import styles from "../styles/tetris.module.css";
import Row from "./Row";

import Game from "./module/Game.js";

let checkSetKeyListener = false;

function BoardModal({ startGame, gameOnGoing }) {
    // console.log("BoardModal");

    const buttonHandler = () => {
        startGame();
    };
    return (
        <div
            className={`${styles.boardModal} ${
                !gameOnGoing ? "" : styles.hide
            }`}
        >
            <button
                type="button"
                className={styles.buttonStartGame}
                onClick={buttonHandler}
            >
                Start Game
            </button>
        </div>
    );
}

const MemoBoardModal = React.memo(BoardModal);
const MemoRow = React.memo(Row);
const game = new Game();

function MainBoard() {
    // console.log("MainBoard");
    const [delay, setDelay] = useState(400);
    const [reload, changeReload] = useState(true);
    const [move, loadMove] = useState(true);
    const [gameOnGoing, setGameOnGoing] = useState(false);

    useEffect(() => {
        if (!checkSetKeyListener) {
            // console.log("Content loaded");
            game.check(setGameOnGoing);

            document.onkeydown = (e) => {
                if (e.key === "ArrowDown" || e.key === "s") {
                    setDelay(70);
                }
                if (e.key === "ArrowRight" || e.key === "d") {
                    game.moveRight();
                    loadMove([]);
                }
                if (e.key === "ArrowLeft" || e.key === "a") {
                    game.moveLeft();
                    loadMove([]);
                }
                if (e.key === "j") {
                    game.rotateLeft();
                    loadMove([]);
                }
                if (e.key === "k") {
                    game.rotateRight();
                    loadMove([]);
                }
            };
            document.onkeyup = (e) => {
                if (e.key === "ArrowDown" || e.key === "s") {
                    setDelay(400);
                }
            };

            checkSetKeyListener = true;
        }
    });

    useEffect(() => {
        if (gameOnGoing) {
            setTimeout(() => {
                game.moveDown();
                // if (game.moveDown()) {
                //     setDelay(100);
                // } else
                // {
                //     setDelay(100);
                // }
                changeReload([]);
            }, delay);
        }
    }, [reload]);

    const startGame = useCallback(() => {
        setGameOnGoing(true);
        changeReload([]);
    }, [gameOnGoing]);

    const renderRow = () => {
        var rows = [];
        for (let i = 0; i < 20; i++) {
            rows.push(
                <Row
                    key={i}
                    dataI={i}
                    rowData={game.getRowData(i)}
                    reload={reload}
                />
            );
        }
        return rows;
    };
    return (
        <div>
            <div className={styles.mainBoard}>
                {renderRow()}
                <MemoBoardModal
                    startGame={startGame}
                    gameOnGoing={gameOnGoing}
                />
            </div>
        </div>
    );
}

export default MainBoard;
