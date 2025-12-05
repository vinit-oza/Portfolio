const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      background: '#000',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '20px 0',
    }}>
      <div className="container">
        <p style={{
          color: '#888',
          fontSize: '0.9rem',
          textAlign: 'center',
          margin: 0,
        }}>
          © {currentYear} Vinit Prajapati. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
