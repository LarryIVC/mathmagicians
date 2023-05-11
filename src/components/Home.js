import React from 'react';
import styles from './css/Home.module.css';

const Home = () => (
  <div className={styles.homeCont}>
    <h2>Welcome to our page!</h2>
    <p className={styles.pHome}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aliquam ac pharetra arcu, quis malesuada justo. Orci varius
      natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Curabitur faucibus, neque in porttitor molestie,
      purus dui feugiat orci, ac tristique tortor risus ac ex. Integer
      eget felis efficitur, tincidunt lorem sit amet, rhoncus elit.
      In dictum magna in ligula aliquet iaculis eget nec leo. Duis
      consectetur libero id rutrum lobortis. Nunc eget diam eget justo
      blandit malesuada a in leo. Aliquam erat volutpat. Sed sit
      amet risus maximus, facilisis magna quis, aliquam velit.
      Phasellus sollicitudin rhoncus magna, in semper felis faucibus
      eu. Nam porttitor odio vel urna ornare, quis porttitor magna
      feugiat.
    </p>
    <p className={styles.pHome}>
      Vestibulum pulvinar lacus efficitur augue mattis, sit amet convallis
      tellus dapibus. Nulla sodales porttitor aliquam. Praesent augue ex,
      ornare ac varius id, semper at lorem. Sed nibh justo, rutrum id sem
      at, tristique facilisis massa. Integer ut rhoncus mi, at pretium
      diam. Donec quis porttitor magna. Sed id ante id massa gravida
      laoreet. Aliquam in lorem varius, laoreet metus eget, aliquet leo.
      Sed eget varius purus, id egestas dolor. Mauris mattis nisl varius
      neque laoreet lacinia. Mauris tempor magna sit amet nisl dapibus
      tempor.
    </p>
  </div>
);

export default Home;
