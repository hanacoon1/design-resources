// components/ResourceCard.js
import React from 'react';
import styles from './ResourceCard.module.css';

const ResourceCard = ({ title, url, description, tags, thumbnail }) => {
  const handleCardClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <div 
        className={styles.thumbnail} 
        style={{ backgroundImage: `url(${thumbnail})`, backgroundColor: !thumbnail ? 'var(--solidColor)' : 'transparent' }}>
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.tags}>
          {tags.map(tag => (
            <p key={tag}><span className={styles.tag}>{tag}</span></p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
