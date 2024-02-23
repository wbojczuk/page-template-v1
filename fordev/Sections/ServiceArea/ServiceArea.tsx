import styles from "./servicearea.module.css"
import Area from "./Area"

export default function ServiceArea({areaData, mapURL}: {areaData: string[], mapURL: string}) {

    const areaElems = areaData.map((area, i)=>{
        return <Area area={area} key={i} />
    })

  return (
    <section className={styles.serviceArea}>
        <div className={styles.areas}>
            <h2>Service Area</h2>
            {areaElems}
            <div className={styles.areaShader}></div>
        </div>
        <div className={styles.serviceAreaMap} >
        <div className={styles.menuCover} ></div>
          <iframe src={mapURL}></iframe>
        </div>
    </section>
  )
}
