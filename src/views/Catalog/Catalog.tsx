import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import styles from './Catalog.module.scss';


const Catalog = () => {
  return (
    <>
    <Header />
    <div className={styles.catalog}>
    <div><Card /></div>
    <div><Card /></div>
    <div><Card /></div>
    <div><Card /></div>
    </div>
   
    </>
  )
}

export default Catalog