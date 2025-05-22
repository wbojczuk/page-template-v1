import styles from './shader.module.css';
import CSS from "csstype";


interface shaderProps{
    zIndex?: number,
    background?: string,
    opacity?: number
}

export default function Shader(props: shaderProps){
    const shaderStyleObj: CSS.Properties = {
        zIndex: (props.zIndex) ? props.zIndex : -1,
        opacity: (props.opacity) ? props.opacity : 0.6,
        background: (props.background) ? props.background : "rgba(0,0,0)",
    }
return (
 <div className={styles.shader} style={shaderStyleObj}></div>
)};