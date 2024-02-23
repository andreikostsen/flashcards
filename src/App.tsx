import { Button } from '@/components/ui/button'

import s from './components/ui/button/button.module.scss'

function App() {
  return (
    <div>
      Hello
      <div>
        <Button className={s.button}>Button As Button</Button>
      </div>
      <div>
        <Button as={'a'} className={s.button} href={'https://my.beltelecom.by/login'}>
          Button As a
        </Button>
      </div>
    </div>
  )
}
export default App
