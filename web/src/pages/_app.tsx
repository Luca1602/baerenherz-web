import type { AppProps } from 'next/app'
import Script from 'next/script'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Brevo config muss vor dem Brevo main.js gesetzt sein */}
      <Script id="brevo-config" strategy="beforeInteractive">
        {`
          window.REQUIRED_CODE_ERROR_MESSAGE = 'Wähle bitte einen Ländervorwahl aus.';
          window.LOCALE = 'de';
          window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "Die eingegebenen Informationen sind nicht gültig. Bitte überprüfe das Feldformat und versuche es erneut.";
          window.REQUIRED_ERROR_MESSAGE = "Dieses Feld darf nicht leer sein. ";
          window.GENERIC_INVALID_MESSAGE = "Die eingegebenen Informationen sind nicht gültig. Bitte überprüfe das Feldformat und versuche es erneut.";

          window.translation = {
            common: {
              selectedList: '{quantity} Liste ausgewählt',
              selectedLists: '{quantity} Listen ausgewählt',
              selectedOption: '{quantity} ausgewählt',
              selectedOptions: '{quantity} ausgewählt',
            }
          };

          var AUTOHIDE = Boolean(0);

          // Brevo reCAPTCHA callback erwartet genau diesen Namen
          window.handleCaptchaResponse = function() {
            var event = new Event('captchaChange');
            var el = document.getElementById('sib-captcha');
            if (el) el.dispatchEvent(event);
          }
        `}
      </Script>

      {/* Brevo Script */}
      <Script
        src="https://sibforms.com/forms/end-form/build/main.js"
        strategy="afterInteractive"
        defer
      />

      {/* Google reCAPTCHA */}
      <Script
        src="https://www.google.com/recaptcha/api.js?hl=de"
        strategy="afterInteractive"
      />

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
