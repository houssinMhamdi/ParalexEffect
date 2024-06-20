import "./App.css";

function App() {
  return (
    <>
      <header className="sticky-section sticky-section--1">
        <iframe
          className="sticky-section__video"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/8VsvdCaSyaQ?autoplay=1&mute=1&loop=1&playlist=8VsvdCaSyaQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <h1 className="sticky-section__main-title">How is</h1>
        <p className="sticky-section__txt-info">Mahdi</p>
      </header>
      <main>
        <section className="sticky-section">
          <h2 className="sticky-section__h2">Mahdi Saghroun</h2>
        </section>
        <section className="sticky-section sticky-section--3">
          <h2 className="sticky-section__h2">Zero</h2>
        </section>
        <section className="content-section content-section--1">
          <h2 className="content-section__h2">Bug</h2>
        </section>
        <section className="content-section content-section--2">
          <h2 className="content-section__h2">Zero Bug</h2>
        </section>
      </main>
    </>
  );
}

export default App;
