"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <html lang="sv">
      <head>
        <title>TerraTrade</title>
        <meta name="description" content="B2B-plattform för företagsansökningar och teamhantering" />
        <style>{`
          :root {
            --bg: #0b1020;
            --card: #11172e;
            --text: #e6e8ef;
            --muted: #9aa3b2;
            --brand: #6aa3ff;
            --brand-hover: #5a90e5;
            --outline: #233156;
          }

          * { box-sizing: border-box; }

          body {
            margin: 0;
            font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial;
            min-height: 100svh;
            display: grid;
            place-items: center;
            background: radial-gradient(1200px 800px at 70% -10%, #1a2550 0%, transparent 60%) var(--bg);
            color: var(--text);
            padding: 24px;
          }

          .card {
            width: 100%;
            max-width: 720px;
            background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01)) var(--card);
            border: 1px solid var(--outline);
            border-radius: 20px;
            padding: 28px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.35);
          }

          .header {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .logo {
            width: 36px; height: 36px; border-radius: 8px;
            background: linear-gradient(135deg, #6aa3ff, #78f0ff);
            display: grid; place-items: center; color: #081028; font-weight: 800;
          }

          .title { font-size: 24px; margin: 0; }
          .subtitle { margin: 4px 0 0; color: var(--muted) }

          .hero {
            margin-top: 18px;
            padding: 18px;
            border: 1px dashed var(--outline);
            border-radius: 14px;
            color: var(--muted);
            background: rgba(14, 22, 44, 0.35);
          }

          .actions {
            margin-top: 22px;
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
          }

          .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 12px 18px;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 600;
            border: 1px solid var(--outline);
            transition: transform .04s ease;
          }

          .btn:hover { transform: translateY(-1px); }

          .btn-primary {
            background: var(--brand);
            color: #081028;
            border-color: transparent;
          }
          .btn-primary:hover { background: var(--brand-hover); }

          .btn-secondary { color: var(--text); background: transparent; }

          .helper {
            margin-top: 10px; color: var(--muted); font-size: 14px;
          }
        `}</style>
      </head>
      <body>
        <main>
          <section className="card">
            <header className="header">
              <div className="logo">T</div>
              <div>
                <h1 className="title">TerraTrade</h1>
                <p className="subtitle">
                  B2B-plattform för företagsansökningar och teamhantering
                </p>
              </div>
            </header>

            <div className="hero">
              <p>
                Välkommen! Här kan företag <strong>ansöka</strong> om konto och efter
                godkännande loggar teamet in för att använda tjänsten. Admin hanterar
                ansökningar centralt.
              </p>
            </div>

            <div className="actions">
              <Link href="/apply" className="btn btn-primary">Ansök</Link>
              <Link href="/login" className="btn btn-secondary">Logga in</Link>
            </div>

            <p className="helper">Du kan alltid komma tillbaka hit via “Startsida”.</p>
          </section>
        </main>
      </body>
    </html>
  );
}
