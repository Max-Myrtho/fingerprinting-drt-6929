const Home = () => {
  return (
    <>
      <div className="p-[2rem] mb-4">
        <h2 className="text-center text-4xl mb-4 underline">
          Démonstration du Fingerprinting (DRT-6929E)
        </h2>
        <img
          className="mx-auto rounded-2xl m-3 border-s-white border-4"
          src="/hIsOZdCd.jpeg"
          alt="fingerprint on a phone and a cookie"
        />
        {/* <p>Ce site accompagne le texte <a href="#" target="_blank">Le fingerprinting : une arme à double tranchant pour la vie privée.</a> en proposant une présentation pratique du fingerprinting. */}
        <p className="mb-3">
          Ce site propose une présentation pratique du fingerprinting et
          accompagne un texte de blog. Il a été réalisé dans le cadre du cours
          DRT-6929E à l'Université de Montréal.
          <br />
          <u>Aucune information personnelle n'est enregistrée.</u> Ce projet est
          en libre accès et disponible sur{" "}
          <a
            href="https://github.com/Max-Myrtho/fingerprinting-drt-6929"
            target="_blank"
          >
            GitHub
          </a>{" "}
          sous licence MIT. L'image a été généré sur{" "}
          <a
            target="_blank"
            href="https://images.deepai.org/art-image/9332fc2b171346b7bc377cb47a6044ec/digital-fingerprint-on-device-and-cookie-fcc0b2.jpg"
          >
            Deep AI
          </a>
          .
        </p>
        -{" "}
        <a href="https://maxmyrtho.me" target="_blank" className="">
          Max-Myrtho Saint-Louis
        </a>{" "}
        -
        <hr className="mt-3" />
      </div>
    </>
  );
};

export default Home;
