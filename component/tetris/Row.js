import React, { useMemo, useEffect, useState } from "react";
import styles from "../styles/tetris.module.css";

const colors = {
    r: styles.red,
    b: styles.blue,
    a: styles.aqua,
    v: styles.blueviolet,
    g: styles.gray,
    o: styles.orange,
    y: styles.yellow,
    k: styles.black,
};

function Block({ color }) {
    // console.log("Block");

    return <div className={`block ${color}  ${styles.block}`}></div>;
}

const MemoBlock = React.memo(Block);

function Row({ dataI, rowData }) {
    const renderBlocks = () => {
        let blocks = [];
        if (blocks.length === 0) {
            for (let i = 0; i < rowData.length; i++) {
                blocks.push(<Block key={i} color={colors[rowData[i]]} />);
            }
        }
        return blocks;
    };

    return (
        <div className={`row ${styles.row}`} id={`row-${dataI}`}>
            {renderBlocks()}
        </div>
    );
}

export default Row;
