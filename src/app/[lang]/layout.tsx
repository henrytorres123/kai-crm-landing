// Next Imports
import { headers } from 'next/headers'

// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'
import { Button } from '@mui/material'

// Type Imports
import type { ChildrenType } from '@core/types'
import type { Locale } from '@configs/i18n'

// HOC Imports
import TranslationWrapper from '@/hocs/TranslationWrapper'

// Config Imports
import { i18n } from '@configs/i18n'

// Style Imports
import '@/app/globals.css'
import '@assets/iconify-icons/generated-icons.css'

// Component Imports
import Providers from '@/components/Providers'
import BlankLayout from '@/@layouts/BlankLayout'
import FrontLayout from '@/components/layout/front-pages'
import ScrollToTop from '@/@core/components/scroll-to-top'

// Context Imports
import { IntersectionProvider } from '@/contexts/intersectionContext'

// Utility Imports
import { getSystemMode } from '@/@core/utils/serverHelpers'

export const metadata = {
  title: 'Materio - Material Design Next.js Admin Template',
  description:
    'Materio - Material Design Next.js Admin Dashboard Template - is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.'
}

const RootLayout = ({ children, params }: ChildrenType & { params: { lang: Locale } }) => {
  // Vars
  const headersList = headers()
  const direction = i18n.langDirection[params.lang]
  const systemMode = getSystemMode()

  return (
    <TranslationWrapper headersList={headersList} lang={params.lang}>
      <html id='__next' lang={params.lang} dir={direction}>
        <body className='flex is-full min-bs-full flex-auto flex-col'>
          <Providers direction='ltr'>
            <BlankLayout systemMode={systemMode}>
              <IntersectionProvider>
                <FrontLayout>
                  {children}
                  <ScrollToTop className='mui-fixed'>
                    <Button
                      variant='contained'
                      className='is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center'
                    >
                      <i className='ri-arrow-up-line' />
                    </Button>
                  </ScrollToTop>
                </FrontLayout>
              </IntersectionProvider>
            </BlankLayout>
          </Providers>
        </body>
      </html>
    </TranslationWrapper>
  )
}

export default RootLayout
