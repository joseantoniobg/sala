import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { BaiaModel } from '../models/baia.model';
import { v4 as uuidv4 } from 'uuid';
import Baia from '../components/baia';
import { useState } from 'react';

export default function Home() {

  const [ zoom, setZoom ] = useState(35.875);
  const [ test, setTest ] = useState('hum...');

  const names: any[] = [
                { nome: 'Roney' }, 	{ nome: '' },
                { nome: 'Sarah' }, 	{ nome: '' },
                { nome: 'Ariela' }, 	{ nome: '' },
                { nome: 'Gui' }, 	{ nome: '' },
                { nome: 'Labanca' }, 	{ nome: '' },
                { nome: 'Jairo' }, 	{ nome: 'Robson' },
                { nome: 'Danilo' }, 	{ nome: 'Eliezer' },
                { nome: 'Douglas' }, 	{ nome: 'Julio' },
                { nome: 'Leo' }, 	{ nome: 'Paula' },
                { nome: 'Lucas Matthes' }, 	{ nome: 'João Martins' },
                { nome: 'Alex' }, 	{ nome: 'João Lima' },
                { nome: 'Perses' }, 	{ nome: 'Carlos Rodrigues' },
                { nome: 'Roni' }, 	{ nome: 'Alef' },
                { nome: 'Fabio' }, 	{ nome: 'Ze Leo' },
                { nome: 'Roney' }, 	{ nome: 'Moreira' },
                { nome: 'José A.' }, 	{ nome: 'Baeza' }];

  const namesSecondLine: any[] = [
                    { nome: 'Anderson' }, 	{ nome: '' },
                    { nome: '' }, 	{ nome: 'Lucas Marques' },
                    { nome: '' }, 	{ nome: 'Breno Amadeu' },
                    { nome: '' }, 	{ nome: '' },
                    { nome: '' }, 	{ nome: 'Matheus Ribeiro' },
                    { nome: '' }, 	{ nome: 'Jefferson' },
                    { nome: '' }, 	{ nome: '' },
                    { nome: 'Mateus José' }, 	{ nome: 'Cleisson' },
                    { nome: 'João Carlos' }, 	{ nome: 'Victor' },
                    { nome: 'Carlos' }, 	{ nome: 'Vinicius' },
                    { nome: '' }, 	{ nome: '' },
                    { nome: '' }, 	{ nome: '' },
                    { nome: '' }, 	{ nome: 'Lucas Prado' },
                    { nome: '' }, 	{ nome: '' },
                    { nome: '' }, 	{ nome: 'Ana Livia' },
                    { nome: '' }, 	{ nome: 'Felipe' },
                    { nome: 'Cesár' }, 	{ nome: 'Mateus Nunes' },
                    { nome: 'Luana' }, 	{ nome: 'Jessica' },
                    { nome: 'Abhay' }, 	{ nome: 'Breno' },
  ];

  let gridRow1 = 7;
  let gridRow2 = 8;
  let left = true;

  const baias: BaiaModel[] = [];

  names.forEach((name) => {
    const baia: BaiaModel = {
      name: name.nome,
      inicial: name.nome.length > 0 ? name.nome.substring(0, 1) : '',
      left,
      gridRow: `${gridRow1} / ${gridRow2}`,
      gridColumn: left ? '2 / 3' : '3 / 4',
    }

    baias.push(baia);
    left = !left;
    if (left) {
      gridRow1 += 1;
      gridRow2 += 1;
    }
  })

  gridRow1 = 4;
  gridRow2 = 5;
  left = true;

  namesSecondLine.forEach((name) => {
    const baia: BaiaModel = {
      name: name.nome,
      inicial: name.nome.length > 0 ? name.nome.substring(0, 1) : '',
      left,
      gridRow: `${gridRow1} / ${gridRow2}`,
      gridColumn: left ? '5 / 6' : '6 / 7',
    }

    baias.push(baia);
    left = !left;
    if (left) {
      gridRow1 += 1;
      gridRow2 += 1;
    }
  })

  gridRow1 += 1;
  gridRow2 += 1;

  const Zoom = (value: number) => {
    const rootElement = document.documentElement;
    const currentZoom = zoom;
    setZoom(currentZoom + value);
    rootElement.style.fontSize = `${currentZoom + value}%`;
    console.log(rootElement);
  }

  return (
    <>
      <Head>
        <title>Sala TI</title>
        <meta name="description" content="A diagram to show the current IT employees positions" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet"></link>
      </Head>
      <div className={styles.body}>
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={() => Zoom(5)}>+</button>
          <button className={`${styles.btn} ${styles.btn__right}`} onClick={() => Zoom(-5)}>-</button>
        </div>
          <div className={styles.sala}>
            <div style={{ gridColumn: '4 / 5', gridRow: '1 / 4', width: '30rem' }} >
            </div>
            <div style={{ gridColumn: '1 / 2', gridRow: '1 / 4', width: '35rem' }} >
            </div>
            <div style={{ gridColumn: '4 / 8', gridRow: '1 / 2', height: '25rem' }} className={styles.title} >
              <div className={styles.back_title}><h1>Mapa do Setor</h1></div>
            </div>
            <div style={{ gridColumn: '5 / 6', gridRow: '2 / 3', height: '25rem' }} >
            </div>
            <div style={{ gridColumn: '7 / 8', gridRow: '1 / 4', width: '30rem' }} >
            </div>
            <div style={{ gridColumn: '1 / 4', gridRow: '1 / 5' }} className={styles.reuniao}>
                <p className={styles.titulo}>Sala de Reunião</p>
            </div>
            <div style={{ gridColumn: '7 / 8', gridRow: `${gridRow1} / ${gridRow2}`, height: '40rem' }} >
            </div>
            {baias.map((baia) => <Baia key={uuidv4()} gridRow={baia.gridRow} gridColumn={baia.gridColumn} left={baia.left} nome={baia.name} inicial={baia.inicial} />)}
          </div>
       </div>
      </>
  )
}