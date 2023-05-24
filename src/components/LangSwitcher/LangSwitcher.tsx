import React from 'react';
import { useSelector } from 'react-redux';
import styles from './lang-switcher.module.css';
import { RootState, useAppDispatch } from '../../services';
import { switchLanguage } from '../../services/reducers/language';

function LangSwitcher() {
  const { language } = useSelector((state: RootState) => state.language);
  const dispatch = useAppDispatch();

  // mock
  const languages: Array<string> = [
    'russian', 'english',
  ];

  const handleLanguageSwitch = (evt: any) => {
    dispatch(switchLanguage(evt.target.value));
    evt.target.blur();
  };

  return (
    <select
      className={styles.select}
      value={language || ''}
      onChange={handleLanguageSwitch}
    >
      {
        languages.map((item) => (
          <option
            key={item}
            value={item}
          >
            {item}
          </option>
        ))
      }
    </select>
  );
}

export default LangSwitcher;
