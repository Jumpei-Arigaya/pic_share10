import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LoadingProvider } from '../providers/LoadingProviders'
import { LoginUserProvider } from '../providers/LoginUserProviders'
import { ModalProvider } from '../providers/ModalProvider'
import { ProfileProvider } from '../providers/ProfileProviders'
import { ProfileUserProvider } from '../providers/ProfileUserProviders'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProfileUserProvider>
      <ProfileProvider>
        <LoginUserProvider>
          <LoadingProvider>
            <ModalProvider>
              <Component {...pageProps} />
            </ModalProvider>
          </LoadingProvider>
        </LoginUserProvider>
      </ProfileProvider>
    </ProfileUserProvider>
  )
}
