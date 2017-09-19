/*
* @Author: nshah
* @Date:   2017-09-19 17:42:45
* @Last Modified by:   nshah
* @Last Modified time: 2017-09-19 17:48:25
*/

import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  overlay,
  asyncStorage,
  networking
} from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'


  Reactotron
    .configure({
      name: 'Starwars'
    })
    .use(trackGlobalErrors())
    .use(openInEditor())
    .use(overlay())
    .use(asyncStorage())
    .use(networking())
    .use(reactotronRedux())
    .connect()

export function reactotron() {
  return Reactotron;
}