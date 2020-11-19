import React, { useState } from 'react';
import {
  SwipeableList,
  SwipeableListItem
} from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';


import BasicListItem from './BasicListItem';
import BasicListItem2 from './BasicListItem2';
import BasicListItem3 from './BasicListItem3';
import BasicSwipeContent from './BasicSwipeContent';

import DeleteIcon from '@material-ui/icons/Delete';

import './BasicExample.css';



const ProductList = () => {
  const [triggeredItemAction, triggerItemAction] = useState('None');
  const [swipeProgress, handleSwipeProgress] = useState();
  const [swipeAction, handleSwipeAction] = useState('None');


  const swipeLeftOptions = name => ({
    content: <BasicSwipeContent label={<DeleteIcon fontSize='large' />} position="right" />,
    action: () => triggerItemAction(`Swipe left action on "${name}"`)
  });

  const handleSwipeStart = () => {
    triggerItemAction('None');
    handleSwipeAction('Swipe started');
  };

  const handleSwipeEnd = () => {
    handleSwipeAction('Swipe ended');
    handleSwipeProgress();
  };

  return (
    <>
      <div className="basic-swipeable-list__container">
        <SwipeableList>
          <SwipeableListItem
            swipeLeft={swipeLeftOptions()}
            onSwipeEnd={handleSwipeEnd}
            onSwipeProgress={handleSwipeProgress}
            onSwipeStart={handleSwipeStart}
          >
            <BasicListItem label="Item with swipe left" />
          </SwipeableListItem>
          <SwipeableListItem
            swipeLeft={swipeLeftOptions()}
            onSwipeEnd={handleSwipeEnd}
            onSwipeProgress={handleSwipeProgress}
            onSwipeStart={handleSwipeStart}
          >
            <BasicListItem2 label="Item with swipe left" />
          </SwipeableListItem>
          <SwipeableListItem
            swipeLeft={swipeLeftOptions()}
            onSwipeEnd={handleSwipeEnd}
            onSwipeProgress={handleSwipeProgress}
            onSwipeStart={handleSwipeStart}
          >
            <BasicListItem3 label="Item with swipe left" />
          </SwipeableListItem>
        </SwipeableList>
      </div>
    </>
  );
};

export default ProductList;
