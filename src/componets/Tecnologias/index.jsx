import style from "./styles.module.css";
import Title from "../Title";
import Carrousel from "./carrousel";
export default function Tecnologias() {
  return (
    <>
    <div  id="tecnologia" style={{height: "100px"}}></div>
    <div className={style.container}>
      <div style={{ marginTop: "5%" }}>
        <Title title="Tecnologias"  />
      </div>
      <Carrousel />
    </div>
    </>
  );
}
