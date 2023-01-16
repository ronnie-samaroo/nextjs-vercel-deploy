import styles from '../styles/Tabs.module.css'
//import useActiveTab from "../utils/useActiveTab";
//import { Router } from "next/router";
import Link from 'next/link';

import { useState } from "react";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className={styles.TabsContainer}>
      <div className={styles.TabsBlock}>
        <div
          className={toggleState === 1 ? `${styles.Tabs} ${styles.ActiveTabs}` : styles.Tabs}
          onClick={() => toggleTab(1)}
        >
          Approvals
        </div>
        <div
          className={toggleState === 2 ? `${styles.Tabs} ${styles.ActiveTabs}` : styles.Tabs}
          onClick={() => toggleTab(2)}
        >
          Verifications
        </div>
        <div
          className={toggleState === 3 ? `${styles.Tabs} ${styles.ActiveTabs}` : styles.Tabs}
          onClick={() => toggleTab(3)}
        >
          Requests & Reports
        </div>
      </div>

      <div className={styles.ContentTabs}>
        <div
          className={toggleState === 1 ?  `${styles.Content} ${styles.ActiveContent}` : styles.Content}
        >
          <h2>Content 1</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className={toggleState === 2 ?   `${styles.Content} ${styles.ActiveContent}` : styles.Content}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ?  `${styles.Content} ${styles.ActiveContent}`  : styles.Content}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;