interface Resource {
    title: string;
    url: string;
  }

const resources: Resource[] = [
    {
        title: "Fingerprinting -  Définition (CNIL)",
        url: "https://www.cnil.fr/fr/definition/fingerprinting"
    },
    {
        title: "Qu'est-ce que le Browser Fingerprinting ?",
        url: "https://friendlycaptcha.com/fr/wiki/what-is-browser-fingerprinting/"
    },
    {
        title: "Découvrez à quel point votre navigateur est unique - Am i Unique",
        url: "https://amiunique.org/fr"
    },
    {
        title: "What is Browser Fingerprinting? - EFF",
        url: "https://panopticlick.eff.org/",
    },
    {
        title: "Our response to Google’s policy change on fingerprinting - ICO (UK)",
        url: "https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2024/12/our-response-to-google-s-policy-change-on-fingerprinting/",
    },
    {
        title: "Browser fingerprinting explained (+7 top techniques)",
        url: "https://fingerprint.com/blog/browser-fingerprinting-techniques/",
    },
    {
        title: "Protection de Firefox contre les détecteurs d’empreinte numérique",
        url: "https://support.mozilla.org/fr/kb/protection-firefox-contre-detecteurs-empreinte-numerique",
    },
];

const Ressources = () => {
    return (
        <div className="p-4 rounded-lg shadow-md my-5">
            <hr/>
          <h4 className="font-thin mt-4 italic">Pour aller plus loin</h4>
          <h4 className="text-3xl text-center mb-4 underline">Ressources sur le Fingerprinting</h4>
          <ul className="list-disc list-inside mt-3 space-y-2">
            {resources.map((resource, index) => (
                <li>
                    <a
                key={index}
                className="p-2 rounded-xl"
                  href={resource.url}
                  target="_blank"
                >
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Ressources
