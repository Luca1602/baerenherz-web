import { useEffect, useState } from "react";

export default function BrevoNewsletterForm() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Wichtig: während SSR nichts rendern
  if (!mounted) return null;

  return (
    <div className="w-full md:w-auto">
      <div
        id="sib-container"
        className="sib-container--vertical"
        style={{ background: "transparent", border: "none" }}
      >
        <form
          id="sib-form"
          method="POST"
          action="https://9ddd2547.sibforms.com/serve/MUIFABipZ-_Z9iofzLEsL6W2kgaGvwN-sfkGk4yf9-e7ODGq5o6sW_Z7iWpJdQj1Ydj1OEQqa1FaBwjb22U5xyupSJCeh1ywTpgAvkqBpT4Hm3F3RczRta6Q9QFosnkyjLzXQ4dm6hHOdNcDs7vJ01jWemgBLDI1kNomre9rzZh_sAkosJySyDhRe7WxCmlZpqOuSJHKNXZpNPhaiA=="
          data-type="subscription"
          className="flex w-full"
        >
          <input
            className="p-2 rounded-l-md border border-gray-300 flex-grow md:w-64"
            type="email"
            id="EMAIL"
            name="EMAIL"
            placeholder="Deine E-Mail-Adresse"
            required
          />

          <button
            type="submit"
            className="bg-accentBlue text-white px-4 py-2 rounded-r-md hover:bg-actionRed cursor-pointer"
          >
            Anmelden
          </button>

          <input type="text" name="email_address_check" defaultValue="" className="hidden" />
          <input type="hidden" name="locale" value="de" />
        </form>

        {/* reCAPTCHA (nur falls in Brevo aktiv) */}
        <div className="mt-3">
          <div
            className="g-recaptcha"
            id="sib-captcha"
            data-sitekey="6LcypDcsAAAAAPLw3Q7h4I-lTSOcT7RaNmaWNvfR"
            data-callback="handleCaptchaResponse"
          />
        </div>
      </div>
    </div>
  );
}
