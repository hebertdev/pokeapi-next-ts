import { useEffect } from "react";
import Renderer from './Renderer';

export default function Background() {
  useEffect(() => {
    new Renderer();
  }, []);

  return <canvas id="bg" />;
}