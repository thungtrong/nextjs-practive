class ShapeBlock {
    contruct(shapes, color = "r") {
        this.shapes = shapes;
        this.currentForm = 0;
        this.color = color;
    }

    rotateRight() {
        this.currentForm = (this.currentForm + 1) % this.shapes.length;
    }
    rotateLeft() {
        this.currentForm = (this.currentForm - 1) % this.shapes.length;
    }

    getForm() {
        return this.shapes[this.currentForm];
    }

    getColor() {
        return this.color;
    }
}

const square = new ShapeBlock([
    [
        ["k", "k"],
        ["o", "o"],
        ["o", "o"],
    ],
]);

const t = new ShapeBlock([
    [
        ["k", "k", "k"],
        ["o", "o", "o"],
        ["k", "o", "k"],
    ],
    [
        ["k", "o", "k"],
        ["o", "o", "k"],
        ["k", "o", "k"],
    ],
    [
        ["k", "o", "k"],
        ["o", "o", "o"],
        ["k", "k", "k"],
    ],
    [
        ["k", "o", "k"],
        ["k", "o", "o"],
        ["k", "o", "k"],
    ],
]);

const z1 = new ShapeBlock([
    [
        ["k", "k", "k"],
        ["k", "o", "o"],
        ["o", "o", "k"],
    ],
    [
        ["o", "k", "k"],
        ["o", "o", "k"],
        ["k", "o", "k"],
    ],
]);

const z2 = new ShapeBlock([
    [
        ["k", "k", "k"],
        ["o", "o", "k"],
        ["k", "o", "o"],
    ],
    [
        ["k", "o", "k"],
        ["o", "o", "k"],
        ["o", "k", "k"],
    ],
]);

const l1 = new ShapeBlock([
    [
        ["k", "o", "k"],
        ["k", "o", "k"],
        ["k", "o", "o"],
    ],
    [
        ["k", "k", "k"],
        ["o", "o", "o"],
        ["o", "k", "k"],
    ],
    [
        ["o", "o", "k"],
        ["k", "o", "k"],
        ["k", "o", "k"],
    ],
]);

const l2 = new ShapeBlock([
    [
        ["k", "o", "k"],
        ["k", "o", "k"],
        ["o", "o", "k"],
    ],
    [
        ["k", "k", "k"],
        ["o", "k", "k"],
        ["o", "o", "o"],
    ],
    [
        ["k", "o", "o"],
        ["k", "o", "k"],
        ["k", "o", "k"],
    ],
]);

const shapeBlocks = [square, t, z1, z2, l1, l2];

module.exports = {
    shapeBlocks: shapeBlocks,
    ShapeBlock,
};
