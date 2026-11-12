import { useEffect, useRef } from "react"
import { GfxEngine } from "../gfx-engine/GfxEngine";

export const GameGFX = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const gfxEngineRef = useRef<GfxEngine | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;
        const context = canvasRef.current.getContext('2d');
        if (!context) return;

        const engine = new GfxEngine(context);
        gfxEngineRef.current = engine;

        return () => {
            gfxEngineRef.current?.stop();
            gfxEngineRef.current = null;
        }
    }, [])

    return <canvas height={320} width={640} ref={canvasRef} />
}

// make image drawing api
// Animate images, move them around