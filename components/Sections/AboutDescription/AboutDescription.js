import Link from 'next/link';
import React from 'react';
import styles from './AboutDescription.module.css';

const AboutDescription = () => {
  return (
    <>
      <h1 className={styles.title}>About</h1>

      <div className={styles.main}>
        <h2 className={styles.sub_heading}>Who we are</h2>

        <p className={styles.body}>The Swachh Bharat Mission - Urban is poised at a crucial juncture. While cities and towns have become cleaner and free of open defecation, and SBM-U has captured the mind-space of citizens, there is still a lot that remains to be done to ensure that the gains made under the current SBM-U are sustained and carried forward. As outlined by the Hon’ble Finance Minister of India in the 2021 Budget, the focus on complete faecal sludge and septage management (FSSM) will be central to this effort. <br /><br />

          <span className={styles.italic}>“…for further swachhata of Urban India, we intend to focus on complete faecal sludge management, wastewater treatment, source segregation of garbage, reduction in single use plastic, reduction in air pollution by effectively managing waste from construction and demolition activities, and bio-remediation of all legacy dumpsites” - Honorable Finance Minister. Smt Nirmala Sitharaman, Budget Speech 2021</span> <br /><br />

          With 60% of toilets in urban India relying on on-site sanitation systems, FSSM promises a means to achieve the SDG target 6.2 of adequate, inclusive and safely managed sanitation for all in a time-bound manner. FSSM prioritizes human excreta management, a waste stream with the highest potential for spreading diseases. It is a low-cost and easily scalable sanitation solution that focuses on safe collection, transportation, treatment, and reuse of human waste, especially in small and medium cities and in areas within larger cities not covered by sewerage systems. <br /><br />

          Under the guidance of the <span className={styles.links}><Link href='https://www.mohua.gov.in/index.php'>Ministry of Housing and Urban Affairs (MoHUA)</Link></span>, India has witnessed unprecedented momentum around FSSM since 2015. In 2017, under the aegis of the Ministry, India became one of the first countries in the world to launch a <span className={styles.links}><Link href='http://swachhfssm.in/files/FSSM_Policy_Report_23Feb-%20National.pdf'>National Policy on Faecal Sludge and Septage Management.</Link></span><br /><br />

          This platform is powered by the <span className={styles.links}><Link href='https://nfssmalliance.org/'>National Faecal Sludge and Septage Management (NFSSM)</Link></span> Alliance. The Alliance works in close collaboration with MoHUA and comprises numerous national and international organizations across the country working towards sustainable sanitation solutions for India. The NFSSM Alliance was convened in January 2016 to build consensus around FSSM in the country.<br /><br />

          In a first of its kind, this one-stop knowledge platform is intended to support practitioners to advance FSSM across India at all levels including national, state and city. This platform has many uniquely curated features and knowledge management options including: <br /><br />

          • <span className={styles.links}><Link href='/'>Quick and Advanced Search;</Link></span><br />
          <span>-</span><br />
          • <span className={styles.links}><Link href='/knowledgecontent'>Curated knowledge guides for different user categories;</Link></span><br />
          <span>-</span><br />
          • <span className={styles.links}><Link href='/qanda'>A Help Desk to have all your queries answered directly by Subject Matter Experts within 5 days;</Link></span><br />
          <span>-</span><br />
          • <span className={styles.links}><Link href='/faq'>FAQs and Glossary for quick referencing;</Link></span><br />
          <span>-</span><br />
          • <span className={styles.links}><Link href='/tenders'>Tenders to keep informed and updated;</Link></span><br />

          For more information, please contact <a href='mailto:info@swachhfssm.in'>info@swachhfssm.in.</a></p>
      </div>
    </>
  )
}

export default AboutDescription