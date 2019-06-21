import { Component, h } from 'preact';
import { ImageList } from 'preact-material-components/ImageList';
import 'preact-material-components/ImageList/style.css';
import cardStore from '../store/CardStore';
import { inject, observer } from 'mobx-preact';

type CardDisplayer = { displayEachCard: (aCard) => any };

@inject(stores => ({ cardStore: stores.cardStore }))
@observer
export class CardsList extends Component<CardDisplayer> {
  render() {
    return (
      <ImageList mdc-image-list--with-text-protection mdc-image-list--masonry>
        {cardStore.allCards.map(this.props.displayEachCard)}
      </ImageList>
    );
  }
}
