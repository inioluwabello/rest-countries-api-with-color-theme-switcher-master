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
            <main>{props.children}</main>
          </section>
        </body>
      </html>
    </Providers>
  )
}
