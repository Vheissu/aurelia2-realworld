import Aurelia, { RouterConfiguration } from 'aurelia';
import { MyApp } from './my-app';

// Prepend the import with !style-loader!css-loader! so the glboal styles don't get squashed by CSS Modules processing
import '!style-loader!css-loader!./styles/global.css';

Aurelia
  .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(MyApp)
  .start();
