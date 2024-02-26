import { Button } from '@/components/ui/button'

import s from './components/ui/button/button.module.scss'

import logoutIcon from './components/ui/button/log-out-icon.svg'

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
      <div>
        <Button className={s.button}>
          <img src={logoutIcon} />
          Primary with Icon
        </Button>
      </div>
      <div>
        <Button className={s.button} showIcon>
          Primary with Icon
        </Button>
      </div>
    </div>
  )
}

export default App
