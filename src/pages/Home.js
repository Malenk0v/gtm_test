import React from 'react';

const Home = () => {
  return (
    <div className="d-flex flex-column justify-content-between vh-100">
      <header className="container-fluid navbar bg-primary navbar-dark">
        <div className="m-2">
          <p className="col-6 navbar-brand">GTM TEST</p>
        </div>
        <a
          target="_blanck"
          className="col-3 btn btn-light m-2"
          href="https://t.me/Malenk0v"
        >
          Telegram: @Malenk0v
        </a>
      </header>
      <section className="container">
        <div>
          <h1 className="text-center m-3 fs-3">
            This test pages Google Tag Manager
          </h1>
        </div>
        <div className="d-flex flex-column justify-content-around align-items-center">
          <button className="col-6 btn btn-primary m-3" id="btn1">
            btn1
          </button>
          <button className="col-6 btn btn-primary m-3" id="btn2">
            btn2
          </button>
          <button className="col-6 btn btn-primary m-3" id="btn3">
            btn3
          </button>
          <button className="col-6 btn btn-primary m-3" id="btn4">
            btn4
          </button>
          <button className="col-6 btn btn-primary m-3" id="btn5">
            btn5
          </button>
          <button className="col-6 btn btn-primary m-3" id="btn6">
            btn6
          </button>
        </div>
      </section>
      <footer className="container-fluid navbar bg-black navbar-dark">
        <div className="m-2">
          <p className="col-6 navbar-brand ">Technical Solutions Manager</p>
        </div>

        <a
          target="_blanck"
          className="col-3 btn btn-light m-2"
          href="https://t.me/Malenk0v"
        >
          Telegram: @Malenk0v
        </a>
      </footer>
    </div>
  );
};

export default Home;
