const colors = ["r", "b", "a", "v", "o", "y"];

class ShapeBlock {
    constructor(forms, color = "r") {
        this.forms = forms;
        this.currentForm = 0;
        this.color = color;
    }

    rotateRight() {
        this.currentForm = (this.currentForm + 1) % this.forms.length;
    }
    rotateLeft() {
        this.currentForm =
            this.currentForm == 0
                ? this.forms.length - 1
                : this.currentForm - 1;
    }

    getForm() {
        return this.forms[this.currentForm];
    }

    getNumForm() {
        return this.forms.length;
    }

    getColor() {
        return this.color;
    }

    getNumColumn() {
        return this.forms[0][0].length;
    }

    pickRandomColor() {
        let i = Math.floor(Math.random() * colors.length);
        this.color = colors[i];
    }
}

const square = new ShapeBlock([
    [
        ["k", "k", "k"],
        ["k", "x", "x"],
        ["k", "x", "x"],
    ],
]);

const t = new ShapeBlock([
    [
        ["k", "k", "k"],
        ["x", "x", "x"],
        ["k", "x", "k"],
    ],
    [
        ["k", "k", "x"],
        ["k", "x", "x"],
        ["k", "k", "x"],
    ],
    [
        ["k", "k", "k"],
        ["k", "x", "k"],
        ["x", "x", "x"],
    ],
    [
        ["k", "x", "k"],
        ["k", "x", "x"],
        ["k", "x", "k"],
    ],
]);

const z1 = new ShapeBlock([
    [
        ["k", "k", "k"],
        ["k", "x", "x"],
        ["x", "x", "k"],
    ],
    [
        ["k", "x", "k"],
        ["k", "x", "x"],
        ["k", "k", "x"],
    ],
]);

const z2 = new ShapeBlock([
    [
        ["k", "k", "k"],
        ["x", "x", "k"],
        ["k", "x", "x"],
    ],
    [
        ["k", "k", "x"],
        ["k", "x", "x"],
        ["k", "x", "k"],
    ],
]);

const l1 = new ShapeBlock([
    [
        ["k", "x", "k"],
        ["k", "x", "k"],
        ["k", "x", "x"],
    ],
    [
        ["k", "k", "k"],
        ["x", "x", "x"],
        ["x", "k", "k"],
    ],
    [
        ["k", "x", "x"],
        ["k", "k", "x"],
        ["k", "k", "x"],
    ],
    [
        ["k", "k", "k"],
        ["k", "k", "x"],
        ["x", "x", "x"],
    ],
]);

const l2 = new ShapeBlock([
    [
        ["k", "k", "x"],
        ["k", "k", "x"],
        ["k", "x", "x"],
    ],
    [
        ["k", "k", "k"],
        ["x", "k", "k"],
        ["x", "x", "x"],
    ],
    [
        ["k", "x", "x"],
        ["k", "x", "k"],
        ["k", "x", "k"],
    ],
    [
        ["k", "k", "k"],
        ["x", "x", "x"],
        ["k", "k", "x"],
    ],
]);

i = new ShapeBlock([
    [
        ["k", "x"],
        ["k", "x"],
        ["k", "x"],
        ["k", "x"],
    ],
    [
        ["k", "k", "k", "k"],
        ["x", "x", "x", "x"],
    ],
]);

const shapeBlocks = [square, t, z1, z2, l1, l2, i];

module.exports = {
    shapeBlocks: shapeBlocks,
    ShapeBlock,
};
