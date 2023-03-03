import React from 'react';
import styles from "./Main.module.css";
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import data from './data';
import { useState } from 'react';

const Main = () => {


    const [index, setIndex] = useState(0);



    const { name, image, job, text } = data[index];

    const checknumber = (number) => {
        if (number > data.length - 1) {
            return 0;
        }
        if (number < 0) {
            return data.length - 1
        }
        return number
    }

    const lefthandler = () => {
        setIndex((prevState) => checknumber(prevState + 1));



    };
    const righthandler = () => {
        setIndex((prevState) => checknumber(prevState - 1));
    };


    const randomHandler = () => {
        const random = Math.floor(Math.random() * data.length);
        console.log(random);
        if(random === index) {
            setIndex(checknumber(random+1))
        }else {
            setIndex(random)
        }

    }

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
                    <button className={styles.random} onClick={randomHandler}>Random</button>
                </div>
                <div className={styles.leftright}>
                    <button onClick={lefthandler}><BiChevronLeft /></button>
                    <button onClick={righthandler}><BiChevronRight /></button>
                </div>






            </main>
        </div>
    );
};

export default Main;