import { useEffect, useRef } from "react"
import { GfxEngine } from "../gfx-engine/GfxEngine";

export const GameGFX = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const gfxEngineRef = useRef<GfxEngine>(null);

    useEffect(()=> {
        if(!canvasRef.current) return;
        gfxEngineRef.current = new GfxEngine(canvasRef.current);
    }, [])
    return <canvas height={320} width={640}ref={canvasRef} />
}

// make image drawing api
// Animate images, move them around