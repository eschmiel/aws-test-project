import { useEffect, useRef } from "react"

export const GameGFX = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const spriteSheetRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if(spriteSheetRef.current) return;

    }, []);

    useEffect(()=> {
        // Setup canvas and context
        if(!canvasRef.current) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if(!context) return;

        // Load sprite sheet
        const spriteSheet = new Image();
        spriteSheet.src = '../../public/sprites-4x.png';
        spriteSheetRef.current = spriteSheet;

        // placeholder for canvas so we can see it
        context.fillStyle = "green";
        context.fillRect(0,0,1280,960);

        // Run graphics once sprite sheet is loaded
        spriteSheet.addEventListener('load', () => {
            context.drawImage(spriteSheet, 256,0, 64, 64, 300,0,64,64);
        })
    }, [])
    return <canvas height={320} width={640}ref={canvasRef} />
}

// make image drawing api
// Animate images, move them around