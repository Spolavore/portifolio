import Title from "../Title"
import styles from './styles.module.css'
import Item from "./Item"
export default function Portifolio(){
    return(
        <div className={styles.container}>
            <Title title={'Portifólio'} color={'black'}/>
            <div className={styles.itemList}>
                <Item title='NEJPOA'/>
            </div>
        </div>
    )
}