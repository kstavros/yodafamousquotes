import React, { useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import Quote from "../Quote";

export default function({ children }) {
  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    speak({ text: children });
  }, [children]);

  return <Quote>{children}</Quote>;
}
