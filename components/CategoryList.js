import styles from '../styles/Home.module.css'
import CategoryItem from './CategoryItem'

const categoryList = ({categories}) => {
  return (
    <div className={styles.grid}>
        {
            categories.map((category) => {
                <CategoryItem key={category.id} category={category}/>
            })
        }
    </div>
  )
}

export default categoryList