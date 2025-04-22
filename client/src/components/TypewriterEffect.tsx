import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  words: string[];
}

export default function TypewriterEffect({ words }: TypewriterEffectProps) {
  return (
    <span className="font-medium">
      {words.join(' • ')}
    </span>
  );
}