
import Footer from './footer'

export default function LoginLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}