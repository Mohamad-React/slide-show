import React from 'react';
import styles from "./Main.module.css";
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import data from './data';
import { useState } from 'react';

const Main = () => {


    const [index, setIndex] = useState(0);
    const { name, job, image, text } = data[index];

    return (
        <div className={styles.container}>
            <h1>über unsere Mitarbeiter</h1>
            <main>

                <div className={styles.image}>
                    <img src={image} alt='src' />
                </div>
                <div className={styles.Beschreibung}>
                    <p>{name}</p>
                    <p className={styles.secendp}>{job}</p>
                </div>
                <div className={styles.text}>
                <p>{text}</p>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.random}>Random</button>
                </div>
                <div className={styles.leftright}>
                    <button><BiChevronLeft /></button>
                    <button><BiChevronRight /></button>
                </div>
                





            </main>
        </div>
    );
};

export default Main;