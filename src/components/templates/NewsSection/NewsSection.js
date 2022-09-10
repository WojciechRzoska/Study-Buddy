import React, { useState, useEffect } from 'react';
import styles from './NewsSection.module.scss';
import wrapperStyle from 'assets/styles/ViewWrapper.module.scss';
import Button from 'components/atoms/Button/Button';
import axios from 'axios';
import { Title } from 'components/atoms/Title/Title';

export const query = `
         {
          allArticles {
            id
            title
            category
            content
            image {
              url
            }
          }
        }
      `;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => {
        setError(`Sorry, we couldn't load articles for you`);
      });
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2>University news feed</h2>
      {articles.length > 0 ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <div
            key={id}
            className={`${wrapperStyle.viewWrapper} ${styles.articleWrapper}`}
          >
            <div className={styles.titleWrapper}>
              <h3>{title}</h3>
              <p>{category}</p>
            </div>
            <div className={styles.contentWrapper}>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article" /> : null}
            </div>
            <Button isbig="true">Click me</Button>
          </div>
        ))
      ) : (
        <Title>{error ? error : 'Loading...'}</Title>
      )}
    </div>
  );
};

export default NewsSection;
