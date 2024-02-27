import { Button } from '@/components/ui/button'

import s from './components/ui/button/button.module.scss'

function App() {
  return (
    <div>
      Hello
      <div>
        <Button className={s.button}>Primary Button</Button>
      </div>
      <div>
        <Button
          as={'a'}
          className={s.button}
          fullWidth={false}
          href={'https://my.beltelecom.by/login'}
        >
          Primary Button As a
        </Button>
      </div>
      <div>
        <Button className={s.button} showIcon>
          Primary Button with Icon
        </Button>
      </div>
      <div>
        <Button className={s.button} variant={'secondary'}>
          Secondary Button
        </Button>
      </div>
      <div>
        <Button className={s.button} showIcon variant={'secondary'}>
          Secondary Button with Icon
        </Button>
      </div>
      <div>
        <Button className={s.button} fullWidth variant={'secondary'}>
          Secondary Button with Icon
        </Button>
      </div>
    </div>
  )
}

export default App
