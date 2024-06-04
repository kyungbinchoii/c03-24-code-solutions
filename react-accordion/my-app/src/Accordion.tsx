import { useState } from 'react';
import TopicCard from './TopicCard';
import './Accordion.css';

type Props = {
  topics: Topic[];
};

type Topic = {
  id: number;
  title: string;
  content: string;
};

export function Accordion({ topics }: Props) {
  const [openTopic, setOpenTopic] = useState<number | null>(null);

  const handleTopicClick = (id: number) => {
    setOpenTopic(openTopic === id ? null : id);
  };

  return (
    <div className="accordion">
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          isOpen={topic.id === openTopic}
          onClick={() => handleTopicClick(topic.id)}
        />
      ))}
    </div>
  );
}

export default Accordion;
