import { AppProps } from "next/app"
import { FavoriteProvider } from "../hooks/useFavorite"
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FavoriteProvider>
      <Component {...pageProps} />
    </FavoriteProvider>
  )
}

export default MyApp
