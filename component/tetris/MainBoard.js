import React, { useState, useEffect, useMemo, useCallback } from "react";

import styles from "../styles/tetris.module.css";
import Row from "./Row";

import Game from "./module/Game.js";

let checkSetKeyListener = false;

function BoardModal({ startGame }) {
    console.log("BoardModal");
    const [show, setShow] = useState(true);

    const buttonHandler = () => {
        setShow(false);
        startGame();
    };
    return (
        <div className={`${styles.boardModal} ${show ? "" : styles.hide}`}>
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

function MainBoard({}) {
    console.log("MainBoard");
    const [delay, setDelay] = useState(500);
    const [reload, changeReload] = useState([]);
    const [gameOnGoing, setGameOnGoing] = useState(false);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        if (!checkSetKeyListener) {
            console.log("Content loaded");
            let tmp = new Game();
            tmp.check();
            document.onkeydown = (e) => {
                if (e.key === "ArrowDown") setDelay(250);
            };
            document.onkeyup = (e) => {
                if (e.key === "ArrowDown") setDelay(500);
            };
            checkSetKeyListener = true;

            // Tao ra list danh sach cac dong
            if (rows.length === 0) {
                for (let i = 0; i < 20; i++) {
                    rows.push(<Row key={i} dataI={i} />);
                }

                setRows([...rows]);
            }
        }
    });

    useEffect(() => {
        if (gameOnGoing) {
            // console.log("Re-render for gaphic");
            setTimeout(() => {
                changeReload([]);
            }, delay);
        }
    });

    const startGame = useCallback(() => {
        setGameOnGoing(true);
    }, [gameOnGoing]);
    return (
        <div>
            <div className={styles.mainBoard}>
                {rows}
                <MemoBoardModal startGame={startGame} />
            </div>
        </div>
    );
}

export default MainBoard;
