import styles from "../styles/tetris.module.css";

function Block({ color }) {
    return <div className={`block ${color}  ${styles.block}`}></div>;
}

let count = 0;
const random = function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
function Row({ dataI }) {
    const colors = [
        styles.red,
        styles.blue,
        styles.aqua,
        styles.blueviolet,
        styles.gray,
        styles.orange,
        styles.yellow,
        styles.black,
    ];
    if (!(dataI % 2)) {
        count = (count + 1) % 7;
    }

    const renderBlocks = (numberBlock, dataI) => {
        let blocks = [];

        for (let i = 0; i < numberBlock; i++) {
            blocks.push(<Block key={i} color={styles.black} />);
        }
        return blocks;
    };
    return (
        <div className={`row ${styles.row}`} id={`row-${dataI}`}>
            {renderBlocks(10, dataI)}
        </div>
    );
}

export default Row;
