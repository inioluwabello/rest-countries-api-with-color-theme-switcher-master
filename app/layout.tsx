/* Components */
import { Providers } from '@/lib/providers'

/* Instruments */
import './styles/globals.css'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section className=''>
            {props.children}
          </section>
        </body>
      </html>
    </Providers>
  )
}
