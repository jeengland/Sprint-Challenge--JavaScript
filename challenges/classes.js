// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(args) {
        this.cuboidLength = args.cLength;
        this.cuboidWidth = args.cWidth;
        this.cuboidHeight = args.cHeight;
    }
    volume() {
        return this.cuboidLength * this.cuboidWidth * this.cuboidHeight
    }
    surfaceArea() {
        return 2 * (this.cuboidLength * this.cuboidWidth + this.cuboidLength * this.cuboidHeight + this.cuboidWidth * this.cuboidHeight)
    }
  }

let cuboid = new CuboidMaker({cLength: 4, cWidth: 5, cHeight: 5});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(edge){
        super({cLength: edge, cWidth: edge, cHeight: edge})
    }
}

let cube = new CubeMaker(4)

console.log(cube.volume()); // 64
console.log(cube.surfaceArea()); // 96