import Container from './Layout/Container/Container'
import Row from './Layout/Row/Row'
import Column from './Layout/Column/Column'
import Guides from './Helpers/Guides/Guides'

const VueFlexLayout = {
  install (Vue) {
    Vue.component(Container.name, Container)
    Vue.component(Row.name, Row)
    Vue.component(Column.name, Column)
    Vue.component(Guides.name, Guides)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFlexLayout);
}

export default VueFlexLayout
export {Container, Row, Column, Guides}

