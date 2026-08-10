export class GfxEngine {

    spriteSheet: HTMLImageElement;

    constructor(canvas: HTMLCanvasElement) {
        this.spriteSheet = new Image();
        this.spriteSheet.src = '../../public/sprites-4x.png';

        const context = canvas.getContext('2d');
        if(!context) return;

        // placeholder for canvas so we can see it
        context.fillStyle = "green";
        context.fillRect(0,0,1280,960);

        // Run graphics once sprite sheet is loaded
        this.spriteSheet.addEventListener('load', () => {
            context.drawImage(this.spriteSheet, 256,0, 64, 64, 300,0,64,64);
        })
    }
}