
import renderer from 'react-test-renderer'
import Login from './login'
test(('login test'), () => {
  const tree = renderer.create(<Login />).toJSON()
  expect(tree).toMatchSnapshot()
})