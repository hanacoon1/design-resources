// components/ResourceCard.js
import React from 'react';
import styles from './ResourceCard.module.css';

const ResourceCard = ({ title, url, description, tags }) => {
  const handleCardClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.tags}>
        {tags.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ResourceCard;
