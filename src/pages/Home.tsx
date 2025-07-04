import PageTemplate from '../components/PageTemplate';
import SpotlightCard from '../blocks/Components/SpotlightCard/SpotlightCard';
import AnimatedContent from '../blocks/Animations/AnimatedContent/AnimatedContent';
import CountUp from '../blocks/TextAnimations/CountUp/CountUp';

function countShowsToday(schedule: any[]) {
  const today = ['sun','mon','tue','wed','thu','fri','sat'][new Date().getDay()];
  return schedule.filter(item => item.day === today).length;
}

function Home({ listeners, songs, schedule }: { listeners: number, songs: any[], schedule: any[] }) {
  const showsToday = countShowsToday(schedule);
  const songsPlayed = songs.length > 0 ? songs.length : 0;

  return (
    <PageTemplate title="Nachtschicht FM" subtitle="Dein Darktheme Radio">
      <div className="container py-4">
        {/* Stat Cards */}
        <AnimatedContent distance={100} direction="vertical" reverse={false} duration={1.5} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.1} delay={0.2}>
          <section className="mb-5">
            <div className="row g-4">
              <div className="col-12 col-md-4">
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 20, 255, 0.5)">
                <div className="card-body">
                  <i className="bi bi-people-fill display-5 mb-2 d-block fs-1"></i>
                  <h5 className="card-title fw-bold mb-1">Hörer aktuell</h5>
                  <p className="card-text fs-5 mb-0" style={{color: '#888'}}><CountUp from={0} to={listeners} separator="," direction="up" duration={1} className="count-up-text"/></p>
                </div>
                </SpotlightCard>
              </div>

              <div className="col-12 col-md-4">
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 20, 255, 0.5)">
                <div className="card-body">
                  <i className="bi bi-music-note-beamed display-5 mb-2 d-block fs-1"></i>
                  <h5 className="card-title fw-bold mb-1">Songs gespielt</h5>
                  <p className="card-text fs-5 mb-0" style={{color: '#888'}}><CountUp from={0} to={songsPlayed} separator="," direction="up" duration={1} className="count-up-text"/></p>
                </div>
                </SpotlightCard>
              </div>

              <div className="col-12 col-md-4">
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 20, 255, 0.5)">
                <div className="card-body">
                  <i className="bi bi-broadcast-pin display-5 mb-2 d-block fs-1"></i>
                  <h5 className="card-title fw-bold mb-1">Sendungen heute</h5>
                  <p className="card-text fs-5 mb-0" style={{color: '#888'}}><CountUp from={0} to={showsToday} separator="," direction="up" duration={1} className="count-up-text"/></p>
                </div>
                </SpotlightCard>
              </div>
            </div>
          </section>
        </AnimatedContent>

        {/* Über Uns Bereich */}
        <section className="my-5 py-5">
          <div className="row align-items-center">
            <div className="col-12 col-md-7 mb-4 mb-md-0">
              <h2 className="fw-bold mb-4">
                <i className="bi bi-people-fill me-2"></i>
                ÜBER UNS
              </h2>
              <p className="lead mb-3">
                Nachtschicht FM ist dein Radiosender für die späten Stunden. Unser Team aus Musikliebhabern sorgt jede Nacht für die beste Auswahl an Songs, spannende Sendungen und aktuelle Nachrichten.
              </p>
              <p>
                Wir sind ein junges, engagiertes Team und freuen uns, gemeinsam mit dir die Nacht zu gestalten! Werde Teil unserer Community und genieße Musik, Infos und Unterhaltung rund um die Uhr.
              </p>
            </div>
            <div className="col-12 col-md-5 text-center">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80"
                alt="Über uns"
                className="img-fluid rounded shadow"
                style={{ maxHeight: 250, objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* Dienstleistungen Bereich */}
        <section className="mb-5">
          <div className="text-center mb-5">
            <span className="fw-bold fs-1 px-5 py-3 rounded-pill text-white shadow-lg d-inline-block">
              Unsere Highlights
            </span>
          </div>

          <div className="row justify-content-center g-4">
            <div className="col-12 col-md-4 text-center">
              <div className="mx-auto mb-4 d-flex align-items-center justify-content-center bg-gradient shadow-lg" style={{ border: '1px solid #444', width: 100, height: 100, borderRadius: '50%', background: 'linear-gradient(135deg, #0014ff 0%, #6a82fb 100%)' }}>
                <i className="bi bi-cash-stack fs-1 text-white"></i>
              </div>

              <h4 className="fw-bold mb-2">Transparente Finanzierung</h4>

              <p className="text-muted">
                Wir setzen auf faire, transparente Finanzierung und investieren direkt in Musik, Technik und Community. Deine Unterstützung macht den Unterschied!
              </p>
            </div>

            <div className="col-12 col-md-4 text-center">
              <div className="mx-auto mb-4 d-flex align-items-center justify-content-center bg-gradient shadow-lg" style={{ border: '1px solid #444', width: 100, height: 100, borderRadius: '50%', background: 'linear-gradient(135deg, #0014ff 0%, #6a82fb 100%)' }}>
                <i className="bi bi-mic-fill fs-1 text-white"></i>
              </div>

              <h4 className="fw-bold mb-2">Live Sendungen & Podcasts</h4>

              <p className="text-muted">
                Erlebe spannende Live-Shows, interaktive Talks und exklusive Podcasts – immer frisch, immer authentisch, immer für dich gemacht.
              </p>
            </div>

            <div className="col-12 col-md-4 text-center">
              <div className="mx-auto mb-4 d-flex align-items-center justify-content-center bg-gradient shadow-lg" style={{ border: '1px solid #444', width: 100, height: 100, borderRadius: '50%', background: 'linear-gradient(135deg, #0014ff 0%, #6a82fb 100%)' }}>
                <i className="bi bi-newspaper fs-1 text-white"></i>
              </div>

              <h4 className="fw-bold mb-2">Aktuelle News & Trends</h4>

              <p className="text-muted">
                Bleib informiert mit News, Trends und Insights aus der Musikszene und unserer Community – immer up-to-date, immer relevant.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}

export default Home;