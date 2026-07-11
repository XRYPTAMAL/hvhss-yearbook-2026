"use client";

import { Music, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        /* Autoplay may be blocked until user interacts — that's fine. */
      });
    }
    setPlaying(!playing);
  };

  return (
    <>
      {/* Drop a track at /public/audio/theme.mp3 to enable this */}
      <audio ref={audioRef} loop src="/audio/theme.mp3" />
      <button
        onClick={toggle}
        aria-label={playing ? "Mute background music" : "Play background music"}
        className="relative flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 dark:border-ivory/10 text-ink dark:text-ivory hover:border-gold/60 transition-colors"
      >
        {playing ? <Music size={16} className="text-gold" /> : <VolumeX size={16} />}
      </button>
    </>
  );
}
