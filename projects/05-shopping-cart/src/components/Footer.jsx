import './Footer.css'

export function Footer ({ filters }) {
  return (
    <footer className='footer-main'>
      {
        JSON.stringify(filters, null, 2)
      }
    </footer>
  )
}
