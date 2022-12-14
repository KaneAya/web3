function Header() {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container has-text-centere">
          <h1 className="title">Cute Fox Images</h1>
        </div>
      </div>
    </header>
  );
}

function Image(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
            <img src={props.src} alt="Fox png"  />
        </figure>
      </div>
    </div>
  );
}

function Loading() {
  return <p>Loading...</p>;
}

function Gallery(props) {
    const {urls}=props;
  return (
    <div className="columns is-vcentered is-multiline">
	{urls.map((url)=>{
	    return(
		<div key={url} className="column is-3">
		    <Image src={url}/>
		</div>
	    );
	})}
    </div>
  );
}

function Main() {
    const x=21;
    const urls=[
	"https:\/\/randomfox.ca\/images\/21.jpg",
	"https:\/\/randomfox.ca\/images\/22.jpg",
	"https:\/\/randomfox.ca\/images\/23.jpg",
	"https:\/\/randomfox.ca\/images\/24.jpg",
    ];
    return (
	<main>
	    <section className="section">
		<div className="container">
		    <Gallery urls={urls}/>
		</div>
	    </section>
	</main>
    );
 }


function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Fox images are retrieved from Random Fox API</p>
        <p>
          <a href="https://randomfox.ca/floof/">Donate to Fox API</a>
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
