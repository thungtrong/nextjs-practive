import React from "react";
import styles from "../styles/tetris.module.css";
import Row from "./Row";

function MainBoard({}) {
    const renderRows = (numberRow) => {
        let rows = [];
        for (let i = 0; i < numberRow; i++) {
            rows.push(<Row key={i} dataI={i} />);
        }
        return rows;
    };
    return <div className={styles.mainBoard}>{renderRows(20)}</div>;
}

export default MainBoard;
