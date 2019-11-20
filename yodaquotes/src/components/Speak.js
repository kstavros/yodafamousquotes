import React, { useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

export default function({ text }) {
  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    speak({ text });
  }, [text]);

  return <div></div>;
}
