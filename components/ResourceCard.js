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
          <p><span key={tag} className={styles.tag}>{tag}</span></p>
        ))}
      </div>
    </div>
  );
};

export default ResourceCard;
