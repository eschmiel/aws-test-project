import { SPRITES, type GfxEngine } from "./GfxEngine";

export class MonsterIdle {

    gfxEngine: GfxEngine;
    x: number;
    y: number;
    target?: Point 
    unitVectorToTarget?: Point;

    constructor(gfxEngine: GfxEngine, x: number, y: number){
        this.gfxEngine = gfxEngine
        this.x = x;
        this.y = y;
        this.setNewTarget()
    }

    run() {
        // if(!this.target) this.setNewTarget();
        const compX = Math.trunc(this.x);
        const compY = Math.trunc(this.y);
        if(this.unitVectorToTarget){
            if(this.target?.x != compX) this.x += this.unitVectorToTarget.x /4;
            // this.x += this.unitVectorToTarget.x;
            if(this.target?.y != compY) this.y += this.unitVectorToTarget.y /4;
            // this.y += this.unitVectorToTarget.y;
        }
        if(this.reachedTarget()){
            this.target = undefined;
            this.unitVectorToTarget = undefined;
            this.x = Math.trunc(this.x);
            this.y = Math.trunc(this.y);
            this.setNewTarget();
        }

        this.gfxEngine.drawSprite(SPRITES.POT_MONSTER, this.x, this.y)
    }

    setNewTarget() {
        let tarX = this.x + randomWholeNumber(2) * randomSign()
        let tarY = this.y + randomWholeNumber(2) * randomSign()

        if(tarX < 0) tarX = 0;
        if(tarY < 0) tarY = 0;

        if(tarX > 640) tarX = 640;
        if(tarY > 320) tarY = 320;

        this.target = {
            x: tarX,
            y: tarY
        }
        this.unitVectorToTarget = this.getUnitVectorToTarget()
    }

    reachedTarget() {
        const compX = Math.trunc(this.x);
        const compY = Math.trunc(this.y);
        return this.target?.x == compX && this.target.y == compY
    }

    getUnitVectorToTarget() {
        if(!this.target) return;
        const vector = getVector({x:this.x, y:this.y}, this.target)
        return getUnitVector(vector);
    }
}

type Point = {
    x: number,
    y: number
}

function randomWholeNumber(digits: number) {
    return Math.trunc(Math.random() * (10 * digits));
}

function randomSign() { 
    return Math.random() >= 0.5 ? 1 : -1; 
}

function getVector(origin: Point, target: Point) {
    return {
        x: target.x - origin.x,
        y: target.y - origin.y
    }
}

function getUnitVector(vector: Point) {
    const magnitude = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
    return {
        x: vector.x / magnitude,
        y: vector.y / magnitude
    }
}