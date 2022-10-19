import React from 'react';
import styles from './AddItems.module.css';
import Image from 'next/image';
import folder from '../../../assets/Folder.png';
import file from '../../../assets/file.png';
import folder2 from '../../../assets/Folderr.png';
import file2 from '../../../assets/filer.png';
import { useRouter } from 'next/router';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const AddItems = ({ values, setLevel, setMapping, mapping, setIdArray, subitems, setOrderVal, setNameVal, count, setClicked }) => {
  const router = useRouter();
  count++;

  const handleAction = (el) => {
    el.classList.toggle('none');
  }

  return (
    <>
      <ul className={count === 1 ? `${styles.ul2} ${styles.ul}` : styles.ul}>
        {
          subitems.map(({ id, title, subitems, display_order }) => {
            return (
              <li key={id} style={{ zIndex: id, position: 'relative' }}>
                <div className={styles.hr}>
                  <div className={count === 1 ? null : styles.hr2}></div>
                  <div className={count === 1 ? null : styles.hr3}></div>
                </div>
                <p
                  id={`key${title.replace(/\s/g, '')}${display_order}${id}${count}`}
                  className={count === 4 ? styles.key2 : styles.key}
                  onClick={() => {
                    handleAction(document.getElementById(`${title.replace(/\s/g, '')}${display_order}${id}${count}`));
                  }}>
                  {display_order}
                </p>
                <p
                  id={`title${title.replace(/\s/g, '')}${display_order}${id}${count}`}
                  className={styles.title}
                  onClick={(e) => {
                    if (router.pathname === '/entity') {
                      document.getElementById('form').classList.add('none');
                      if (e.target.classList.contains('key-select')) {
                        document.getElementById('del').classList.add('none');
                        setNameVal('');
                        setOrderVal('');
                        setIdArray(['', '', '', '']);
                        setLevel(null);
                        setClicked(false);
                        document.getElementById(`title${title.replace(/\s/g, '')}${display_order}${id}${count}`).classList.remove('key-select');
                        document.getElementById(`key${title.replace(/\s/g, '')}${display_order}${id}${count}`).classList.remove('key-select');
                      } else {
                        document.getElementById('del').classList.add('none');
                        setNameVal(title);
                        setOrderVal(display_order);
                        const newValue = [...values];
                        newValue[count - 1] = id;
                        setIdArray(newValue);
                        const node = count - 1;
                        setLevel(node);
                        document.querySelectorAll('p').forEach(p => p.classList.remove('key-select'));
                        setClicked(true);
                        document.getElementById(`title${title.replace(/\s/g, '')}${display_order}${id}${count}`).classList.add('key-select');
                        document.getElementById(`key${title.replace(/\s/g, '')}${display_order}${id}${count}`).classList.add('key-select');
                      }
                    }
                  }}>
                  <Image src={document.getElementById(`title${title.replace(/\s/g, '')}${display_order}${id}${count}`)?.classList.contains('key-select') ? count === 4 ? file2 : folder2 : count === 4 ? file : folder} alt='icon' height={21} width={count === 4 ? 17 : 21} />
                  {title}
                </p>
                {router.pathname !== '/entity' && count === 4 &&
                  <span
                    className={styles.check}
                    onClick={() => {
                      if (document.getElementById(`check${title.replace(/\s/g, '')}${display_order}${id}${count}`).classList.contains('none')) {
                        const newState = mapping;
                        newState.push(id);
                        setMapping(newState);
                      } else {
                        const newState = mapping;
                        newState = newState.filter(key => id !== key);
                        setMapping(newState);
                      }
                      document.getElementById(`check-blank${title.replace(/\s/g, '')}${display_order}${id}${count}`).classList.toggle('none');
                      document.getElementById(`check${title.replace(/\s/g, '')}${display_order}${id}${count}`).classList.toggle('none');
                    }}>
                    <CheckBoxIcon color='primary' className={mapping.indexOf(id) === -1 ? 'none' : ''} id={`check${title.replace(/\s/g, '')}${display_order}${id}${count}`} />
                    <CheckBoxOutlineBlankIcon className={mapping.indexOf(id) !== -1 ? 'none' : ''} id={`check-blank${title.replace(/\s/g, '')}${display_order}${id}${count}`} />
                  </span>}
                {
                  subitems.length ?
                    <div className={styles.div} id={`${title.replace(/\s/g, '')}${display_order}${id}${count}`}>
                      <AddItems
                        values={[
                          values.map((val, i) => {
                            if (count - 1 === i) return id;
                            return val;
                          })
                        ][0]}
                        setIdArray={setIdArray}
                        setLevel={setLevel}
                        setOrderVal={setOrderVal}
                        setNameVal={setNameVal}
                        setClicked={setClicked}
                        count={count}
                        subitems={subitems}
                        mapping={mapping}
                        setMapping={setMapping} />
                    </div> :
                    null
                }
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default AddItems