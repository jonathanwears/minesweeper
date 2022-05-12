import useTileStore from '../src/utils/stores/useTileStore';
import CreateGame from '../src/utils/CreateGame';
import RandomIds from '../src/utils/RandomIDs';

const orginalState = useTileStore.getState();
beforeEach(() => {
  useTileStore.setState(orginalState);
});

test('test update tiles works', () => {
  useTileStore.initTiles(CreateGame(), RandomIds());
  expect(useTileStore.tiles).toHaveSize(0);
});
