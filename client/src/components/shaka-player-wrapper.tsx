import React, { useRef, useEffect, useLayoutEffect } from 'react';
import 'shaka-player/dist/controls.css';
// @ts-ignore
import shaka from 'shaka-player/dist/shaka-player.ui.js';

interface ShakaPlayerProps {
    src: string;
    poster?: string;
    autoPlay?: boolean;
    startTime?: number;
}

export function ShakaPlayerWrapper({ src, poster, autoPlay, startTime }: ShakaPlayerProps) {
    const uiContainerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const playerRef = useRef<any>(null);
    const uiRef = useRef<any>(null);

    useEffect(() => {
        // Install polyfills
        shaka.polyfill.installAll();

        if (!shaka.Player.isBrowserSupported()) {
            console.error('Browser not supported by Shaka Player');
            return;
        }

        const initPlayer = async () => {
            if (!videoRef.current || !uiContainerRef.current) return;

            const video = videoRef.current;
            const uiContainer = uiContainerRef.current;

            const player = new shaka.Player(video);
            const ui = new shaka.ui.Overlay(player, uiContainer, video);

            playerRef.current = player;
            uiRef.current = ui;

            // Configure buffering for large files
            player.configure({
                streaming: {
                    bufferingGoal: 10, // Buffer 10 seconds ahead (reduced from 30)
                    rebufferingGoal: 2, // Only wait for 2 seconds of buffer before playing (reduced from 15)
                    alwaysStreamText: false,
                    jumpLargeGaps: true,
                },
                abr: {
                    enabled: false, // Disable ABR for static MP4s
                }
            });

            // Listen for errors
            player.addEventListener('error', (event: any) => {
                console.error('Shaka Player Error:', event.detail);
            });

            // Load the source
            try {
                await player.load(src);

                if (startTime && startTime > 0) {
                    video.currentTime = startTime;
                }

                if (autoPlay) {
                    video.play().catch(() => { });
                }
            } catch (e) {
                console.error('Error loading video:', e);
            }
        };

        initPlayer();

        return () => {
            if (uiRef.current) {
                uiRef.current.destroy();
            }
            if (playerRef.current) {
                playerRef.current.destroy();
            }
        };
    }, [src, autoPlay]);

    return (
        <div
            ref={uiContainerRef}
            className="w-full h-full relative group !flex !items-center !justify-center !bg-black"
        >
            <video
                ref={videoRef}
                className="!w-full !h-full !object-contain !bg-black"
                poster={poster}
                playsInline
            />
        </div>
    );
}
