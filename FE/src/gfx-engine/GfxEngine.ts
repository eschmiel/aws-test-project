import { MonsterIdle } from "./MonsterIdle";

export class GfxEngine {
    ctx : CanvasRenderingContext2D;
    spriteSheet: HTMLImageElement;
    running: boolean;
    monsterIdle: MonsterIdle
    monsterIdle2: MonsterIdle
    private onLoadHandler: (() => void) | null = null;

    constructor(context: CanvasRenderingContext2D) {
        this.ctx = context;
        this.running = true;
        this.spriteSheet = new Image();
        this.spriteSheet.src = './sprites-4x.png';

        // placeholder for canvas so we can see it
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0,0,1280,960);

        this.monsterIdle = new MonsterIdle(this, 300, 0);
        this.monsterIdle2 = new MonsterIdle(this, 200, 50);

        this.onLoadHandler = () => {
            if (!this.running) return;
            window.requestAnimationFrame(() => this.run());
        }

        this.spriteSheet.addEventListener('load', this.onLoadHandler);
    }

    stop() {
        this.running = false;
        if (this.onLoadHandler) {
            this.spriteSheet.removeEventListener('load', this.onLoadHandler);
            this.onLoadHandler = null;
        }
    }

    run() {
        this.ctx.clearRect(0,0,600,600)
        this.ctx.fillRect(0,0,1280,960);
        // this.drawSprite(SPRITES.POT_MONSTER, 50,50);
        this.monsterIdle.run();
        this.monsterIdle2.run();
        
        if(this.running) window.requestAnimationFrame(() => this.run());
    }

    drawSprite(spriteObj: SpriteObject, x: number, y: number) {
        const {x: spriteX, y: spriteY, width, height} = picoToGameScale(spriteObj);
        this.ctx.drawImage(this.spriteSheet, spriteX, spriteY, width, height, x, y, width, height)
    }
}

type SpriteObject = {
    x: number;
    y: number;
    width: number;
    height: number;
}

function picoToGameScale(spriteObj:SpriteObject) {
    const scale = 4;
    return {
        x: spriteObj.x * scale,
        y: spriteObj.y * scale,
        width: spriteObj.width * scale,
        height: spriteObj.height * scale,
    }
}

export const SPRITES = {
    POT_MONSTER: Object.freeze({
        x: 64,
        y: 0,
        width: 11,
        height: 16
    })
}