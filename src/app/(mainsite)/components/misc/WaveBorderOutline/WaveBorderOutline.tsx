import styles from './waveborderoutline.module.css';
import CSS from "csstype";


interface shaderProps{
    zIndex?: number,
    background?: string,
    opacity?: number
}

export default function WaveBorderOutline(){
  
return (
 <div className={styles.waveBorderOutline}>
    <img src="/img/wave.svg" alt="" />
 </div>
)};