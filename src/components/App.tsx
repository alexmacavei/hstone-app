import { Component, h } from 'preact';
import { inject, observer } from 'mobx-preact';
import cardStore, { FetchState } from '../store/CardStore';
import 'preact-material-components/LinearProgress/style.css';
import LinearProgress from 'preact-material-components/LinearProgress';
import Typography from 'preact-material-components/Typography';
import { CardItem } from './CardItem';
import { CardsList } from './CardsList';

@inject(stores => ({ cardStore: stores.cardStore }))
@observer
export class App extends Component {
  componentDidMount(): void {
    cardStore.fetchAllCards();
  }

  render() {
    return (
      <div>
        <Typography headline3>There are {cardStore.countCards || 0} cards in the Hearthstone DB!</Typography>
        {App.displayCardsListIfDoneLoading(cardStore.fetchState)}
      </div>
    );
  }

  private static displayCardsListIfDoneLoading(state: FetchState) {
    return state === 'pending' ? (
      <LinearProgress indeterminate />
    ) : (
      <CardsList displayEachCard={aCard => <CardItem aCard={aCard} />} />
    );
  }
}
