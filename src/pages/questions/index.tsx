import React from 'react';
import { useAppSelector } from '../../app/hooks';
import CardComponent from '../../components/card/CardComponent';
import { selectLevels } from '../../features/questions/questionsSlice';

const QuestionsScreen = (): React.ReactElement => {
  const levels = useAppSelector(selectLevels);

  return (
    <div>
      {levels.map((level, index) => (
        <CardComponent key={index} content={level.name} />
      ))}
    </div>
  );
};

export default QuestionsScreen;
