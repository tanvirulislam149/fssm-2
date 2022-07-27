import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Button from '../../Buttons/Submit/SubmitButton';
import styles from './FaqNavigation.module.css';

const FaqNavigation = () => {
  const router = useRouter();

  useEffect(() => {
    var id = router.pathname.slice(1);
    var faq = document.getElementById('faq-btn');
    var glossary = document.getElementById('glossary-btn');
    id === 'faq' ? faq.classList.add('onroute') : glossary.classList.add('onroute');
  }, [])

  const navigate = (id) => {
    id === 2 ? router.push('/glossary') : router.push('/faq');
  }

  return (
    <>
      <div className={styles.cont}>
        <div>
          <p
            id='faq-btn'
            onClick={() => {
              navigate(1);
            }}
          >FAQ's
          </p>
          <p
            id='glossary-btn'
            onClick={() => {
              navigate(2);
            }}
          >Glossary
          </p>
        </div>
        <Button
          title='PDF Download'
          style={styles.btn}
        />
      </div>
    </>
  )
}

export default FaqNavigation 