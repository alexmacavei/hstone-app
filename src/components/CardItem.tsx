import { Component, h } from 'preact';
import {
  ImageListAspectContainer,
  ImageListImage,
  ImageListItem,
  ImageListLabel,
  ImageListSupporting
} from 'preact-material-components/ImageList';
import 'preact-material-components/ImageList/style.css';

interface CardProperties {
  aCard: any;
}

export class CardItem extends Component<CardProperties> {
  render() {
    const { aCard } = this.props;

    return (
      <ImageListItem>
        <ImageListAspectContainer>
          <ImageListImage src={CardItem.getCardImage(aCard.cardId)} />
          <ImageListSupporting>
            <ImageListLabel>{aCard.title}</ImageListLabel>
          </ImageListSupporting>
        </ImageListAspectContainer>
      </ImageListItem>
    );
  }

  private static getCardImage(cardId: string): string {
    return 'https://art.hearthstonejson.com/v1/render/latest/enUs/256x/' + cardId + '.png';
  }
}
