// components/TagFilter.js
import React from 'react';
import styles from './TagFilter.module.css';

const TagFilter = ({ tags, selectedTag, onSelectTag }) => {
  return (
    <div className={styles.tagFilter}>
      <button onClick={() => onSelectTag(null)} className={!selectedTag ? styles.active : ''}>All</button>
      {tags.map(tag => (
        <button
          key={tag}
          onClick={() => onSelectTag(tag)}
          className={selectedTag === tag ? styles.active : ''}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
