import { shapeBlocks } from "./ShapeBlock";

class Game {
    contructor() {
        // Tao bang
        this.board = [];
        let row = ["k", "k", "k", "k", "k", "k", "k", "k", "k", "k"];
        for (let i = 0; i < 20; i++) {
            this.board.push([...row]);
        }
        board[-1] = [...row];
        board[-2] = [...row];
        board[-3] = [...row];

        this.position = {
            x: 3, // column
            y: 0, // row
        };

        this.currentShape = []; // shape block object

        this.nextShape = [
            // index shape block.
            // index rotate of shape block
        ];
    }

    moveDown() {
        this.position.y += 1;
    }

    moveRight() {
        this.position.x += 1;
    }

    moveLeft() {
        this.position.x -= 1;
    }

    // re fill shape into board at position.
    fill() {}

    checkClearRow() {}

    checkEnd() {}

    check() {
        console.log("Da chay");
        console.log(shapeBlocks);
    }
}

export default Game;
