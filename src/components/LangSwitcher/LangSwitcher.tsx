import React from 'react';
import { useSelector } from 'react-redux';
import styles from './lang-switcher.module.css';
import { RootState, useAppDispatch } from '../../services';
import { switchLanguage } from '../../services/reducers/language';
import data from '../../utils/data/data.json';

function LangSwitcher() {
  const { language } = useSelector((state: RootState) => state.language);
  const dispatch = useAppDispatch();

  const languages: Array<string> = Object.keys(data);

  const handleLanguageSwitch = (evt: React.SyntheticEvent): void => {
    const { target } = evt;
    if (target) dispatch(switchLanguage((target as HTMLButtonElement).value));
    // evt.target.blur();
    (document.activeElement as HTMLElement).blur();
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
