import Head from 'next/head'
import React, { useState } from 'react';
import ResourceGrid from '../components/ResourceGrid';
import TagFilter from '../components/TagFilter';
import styles from '../components/index.module.css';


const resources = [
  {
    title: 'Designing for the Digital Age',
    url: 'https://example.com/resource1',
    description: 'Description for resource 1',
    tags: ['Books', 'Product design']
  },
  {
    title: 'What Can a Body Do?',
    url: 'https://example.com/resource2',
    description: 'Description for resource 2',
    tags: ['Books', 'Accessibility']
  },
  // Add more resources as needed
];

const allTags = [...new Set(resources.flatMap(resource => resource.tags))];

export default function Home() {

  const [selectedTag, setSelectedTag] = useState(null);

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
    </Head> 

      <main>
        <div className={styles.container}>
        <h1>Design Resources</h1>
        <TagFilter tags={allTags} selectedTag={selectedTag} onSelectTag={setSelectedTag} />
        <ResourceGrid resources={resources} selectedTag={selectedTag} />
      </div>
      </main>
    </div>
  )
}
