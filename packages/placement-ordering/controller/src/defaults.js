export default {
  choices: [
    {
      id: 'c2',
      label: 'Lemon',
      shuffle: false,
      moveOnDrag: true
    },
    {
      id: 'c3',
      label: 'Melon',
      moveOnDrag: true
    },
    {
      id: 'c1',
      label: 'Blueberry',
      moveOnDrag: false
    },
    {
      id: 'c4',
      label: 'Pear',
      moveOnDrag: false
    }
  ],
  completeLength: 4,
  config: {
    orientation: 'vertical',
    targetLabel: 'Answer Area Label',
    labelChoice: 'choices: ',
    showOrdering: true
  },
  numberedGuides: true,
  itemStem: 'Arrange the fruits alphabetically',
};
