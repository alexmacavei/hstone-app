import { action, computed, configure, observable } from 'mobx';

export type FetchState = 'pending' | 'success' | 'failed';

configure({ enforceActions: 'observed' });

class CardStore {
  readonly allCards = observable<any>([]);
  @observable fetchState: FetchState = 'pending';

  @computed get countCards() {
    return this.allCards.length;
  }

  @action fetchAllCards() {
    fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards', {
      headers: {
        'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '7a9f4b2d3amsh5e46c1a597792a9p1fabe2jsn73d5ce2bbd16'
      }
    })
      .then(results => results.json())
      .then(this.fetchAllCardsSuccess)
      .catch(this.fetchAllCardsFailure);
  }

  @action.bound
  private fetchAllCardsSuccess(cards) {
    this.fetchState = 'success';
    this.allCards.replace(Object.values(cards).flatMap(x => x));
  }

  @action.bound
  private fetchAllCardsFailure() {
    this.fetchState = 'failed';
  }
}

const cardStore = new CardStore();
export default cardStore;
