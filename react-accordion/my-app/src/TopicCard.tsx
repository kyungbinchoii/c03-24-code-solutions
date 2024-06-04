import './topiccard.css';

type Props = {
  topic: Topic;
  isOpen: boolean;
  onClick: () => void;
};

type Topic = {
  id: number;
  title: string;
  content: string;
};

export function TopicCard({ topic, isOpen, onClick }: Props) {
  return (
    <div className="topic-card" onClick={onClick}>
      <h2>{topic.title}</h2>
      {isOpen && <p>{topic.content}</p>}
    </div>
  );
}

export default TopicCard;
