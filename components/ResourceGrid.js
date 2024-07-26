// components/ResourceGrid.js
import React from 'react';
import ResourceCard from './ResourceCard';
import styles from './ResourceGrid.module.css';

const ResourceGrid = ({ resources, selectedTag }) => {
  const filteredResources = selectedTag
    ? resources.filter(resource => resource.tags.includes(selectedTag))
    : resources;

  return (
    <div className={styles.resourceGrid}>
      {filteredResources.map(resource => (
        <ResourceCard key={resource.title} {...resource} />
      ))}
    </div>
  );
};

export default ResourceGrid;
