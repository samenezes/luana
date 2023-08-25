import React, { useState } from 'react';
import styles from '../Home/Home.module.css';

function Home() {


async function fetchData() {
  try {
    const response = await fetch('https://opentdb.com/api.php?amount=30&category=16');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Erro ao buscar os dados:', error);
    throw error;
  }
}

async function main() {
  try {
    const data = await fetchData();
    const dadosTransformados = extractData(data);
    displayData(dadosTransformados);
  } catch (error) {
    console.log('Erro:', error);
  }
}

main();
}

export default Home