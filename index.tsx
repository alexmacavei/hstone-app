import { h, render } from 'preact';
import { App } from './src/components/App';
import cardStore from './src/store/CardStore';
import { Provider } from 'mobx-preact';
import 'preact-material-components/TopAppBar/style.css';
import {
  TopAppBar,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from 'preact-material-components/TopAppBar';
import { LayoutGrid, LayoutGridCell } from 'preact-material-components/LayoutGrid';

render(
  <div>
    <LayoutGrid>
      <LayoutGridCell>
        <TopAppBar className='topappbar' onNav={() => {}}>
          <TopAppBarRow>
            <TopAppBarSection align-start>
              <TopAppBarTitle>Hearthstone Playground</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection align-end>
              <TopAppBarIcon>videogame_asset</TopAppBarIcon>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
      </LayoutGridCell>
      <LayoutGridCell>
        <Provider cardStore={cardStore}>
          <App />
        </Provider>
      </LayoutGridCell>
    </LayoutGrid>
  </div>,
  document.getElementById('root')
);
