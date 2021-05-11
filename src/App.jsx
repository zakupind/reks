import styles from  './App.module.scss';
import { Search } from './components/search/Search'
import { StatusSearch } from './components/statusSearch/StatusSearch';
import { ButtonsQuery } from './components/buttonsQuery/ButtonsQuery'

export function App() {
  return (
    <div className={styles.app}>
      <Search />
      <ButtonsQuery />
      <StatusSearch />
    </div>
  );
}
