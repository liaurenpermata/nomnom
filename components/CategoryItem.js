import styles from '../styles/Home.module.css'
import Link from 'next/link'

const CategoryItem = ({category}) => {
  return (
    <Link href={category.id}></Link>
  )
}

export default CategoryItem