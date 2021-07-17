import React, { useState } from 'react';
import { Novel } from '../../../domain/Novel';

interface NovelProps {
  id: string;
  title: string;
}

export const NovelCard = ({ novelProps }: { novelProps: NovelProps }) => {
  const novelEntity = new Novel(novelProps.id, novelProps.title);
  const [title, setTitle] = useState('');
  const [novel, setNovel] = useState(novelEntity);

  const handleClick = (newTitle: string) => {
    setNovel(new Novel(novel.id, newTitle));
  };

  return (
    <div>
      <h1>
        {novel.title}
      </h1>

      <input type="text" onChange={(event) => setTitle(event.target.value)} />
      <button type="button" onClick={() => handleClick(title)}>タイトルを変更する</button>
    </div>
  );
};
