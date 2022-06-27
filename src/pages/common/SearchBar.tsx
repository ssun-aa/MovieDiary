import { ChangeEvent, useState } from 'react';
import { SearchIcon } from 'assets/svgs';
import { useNavigate } from 'react-router-dom';
import styles from './searchBar.module.scss';

function SearchBar() {
  const [keyword, setKeyword] = useState<string>('');
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.currentTarget.value);
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate('/search', {
      state: { keyword },
    });
  };

  return (
    <header>
      <form id="searchForm" onSubmit={onSubmit}>
        <input
          required
          type="text"
          placeholder="검색어를 입력하세요"
          className={styles.searchBar}
          onChange={handleChange}
        />
        <button type="submit" form="searchForm" className={styles.searchButton}>
          <SearchIcon className={styles.searchIcon} />
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
