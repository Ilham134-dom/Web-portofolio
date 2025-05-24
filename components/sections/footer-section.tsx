export const FooterSection = () => {
  return (
    <>
      <style>{`
        .footer {
          background: #f8fafc; /* soft light background */
          padding: 30px 80px;
          font-family: 'Space Grotesk', sans-serif;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #475569;
          font-size: 0.9rem;
          border-top: 1px solid #e0e7ff;
        }

        .footer .social-links {
          display: flex;
          gap: 20px;
        }

        .footer .social-link {
          display: flex;
          align-items: center;
          color: #6366f1;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
          gap: 8px;
        }

        .footer .social-link:hover {
          color: #2563eb;
        }

        .footer .social-link svg {
          width: 20px;
          height: 20px;
          fill: currentColor;
        }

        @media (max-width: 600px) {
          .footer {
            flex-direction: column;
            text-align: center;
            gap: 15px;
            padding: 20px 20px;
          }

          .footer .social-links {
            margin-top: 10px;
          }
        }
      `}</style>

      <footer className="footer">
        <div>© {new Date().getFullYear()} Your Name. All rights reserved.</div>
        <div className="social-links">
          <a
            href="https://twitter.com/msafdev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="social-link"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.954 4.569c-0.885 0.392-1.83 0.656-2.825 0.775 1.014-0.609 1.794-1.574 2.163-2.724-0.951 0.564-2.005 0.974-3.127 1.195-0.897-0.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 0.39 0.045 0.765 0.127 1.124-4.087-0.205-7.713-2.164-10.141-5.144-0.424 0.729-0.666 1.577-0.666 2.476 0 1.708 0.87 3.216 2.188 4.099-0.807-0.026-1.566-0.247-2.228-0.616v0.061c0 2.385 1.693 4.374 3.946 4.827-0.413 0.112-0.849 0.171-1.296 0.171-0.317 0-0.626-0.03-0.927-0.086 0.627 1.956 2.444 3.379 4.6 3.418-1.68 1.318-3.8 2.105-6.102 2.105-0.397 0-0.789-0.023-1.174-0.069 2.179 1.397 4.768 2.213 7.548 2.213 9.055 0 14.01-7.503 14.01-14.007 0-0.213-0.005-0.425-0.014-0.636 0.961-0.694 1.796-1.562 2.457-2.549z" />
            </svg>
            Twitter
          </a>
          <a
            href="https://github.com/msafdev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-link"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0.2975c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.011-1.04-0.017-2.04-3.338 0.724-4.042-1.612-4.042-1.612-0.546-1.387-1.333-1.757-1.333-1.757-1.089-0.744 0.082-0.729 0.082-0.729 1.205 0.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495 0.997 0.108-0.776 0.419-1.305 0.762-1.605-2.665-0.304-5.467-1.334-5.467-5.933 0-1.311 0.469-2.381 1.236-3.221-0.124-0.303-0.535-1.523 0.117-3.176 0 0 1.008-0.322 3.301 1.23 0.957-0.266 1.983-0.399 3.003-0.404 1.02 0.005 2.047 0.138 3.006 0.404 2.289-1.552 3.295-1.23 3.295-1.23 0.654 1.653 0.243 2.873 0.119 3.176 0.77 0.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.625-5.479 5.922 0.43 0.371 0.814 1.102 0.814 2.222 0 1.604-0.015 2.896-0.015 3.286 0 0.321 0.217 0.694 0.825 0.576 4.765-1.589 8.201-6.084 8.201-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://salmoon.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Personal Site"
            className="social-link"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.466h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            Website
          </a>
        </div>
      </footer>
    </>
  )
}
