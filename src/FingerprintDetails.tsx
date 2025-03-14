import { useState, useEffect } from "react";
import { UAParser } from "ua-parser-js";

const LiElement = ({ title = "", value = "" }) => {
  return (
    <li
      key={title}
      style={{
        color: "black",
        marginBottom: "10px",
        background: "#f4f4f4",
        padding: "10px",
        borderRadius: "5px",
        wordBreak: "break-word",
      }}
    >
      <b style={{ color: "red" }}>{title}</b>
      <br />
      {value}
    </li>
  );
};
const FingerprintDetails = () => {
  const [resolution, setResolution] = useState<string>(
    `${window.innerWidth}x${window.innerHeight}`
  );

  useEffect(() => {
    const updateFingerprint = () => {
      setResolution(`${window.innerWidth}x${window.innerHeight}`);
    };

    updateFingerprint();

    window.addEventListener("resize", updateFingerprint);

    return () => {
      window.removeEventListener("resize", updateFingerprint);
    };
  }, [resolution]);

  const uap = new UAParser();

  return (
    <div className="p-[2rem] pt-1">
      <h3 className="text-3xl text-center mb-4 underline">
        Échantillon de résultat du Fingerprinting
      </h3>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          maxWidth: "100%",
          overflow: "hidden",
          wordBreak: "break-word",
        }}
      >
        <LiElement
          title="Navigateur"
          value={`${uap.getResult().browser.name} | Version: ${
            uap.getResult().browser.version
          }`}
        />
        <LiElement
          title="Résolution écran (en temps réel)"
          value={resolution}
        />
        <LiElement title="Système d'exploitation" value={navigator.platform} />
        <LiElement
          title="Mémoire RAM"
          value={`${navigator.hardwareConcurrency} GB`}
        />
        <LiElement
          title="Fuseau horaire"
          value={Intl.DateTimeFormat().resolvedOptions().timeZone}
        />
        <LiElement title="Langue" value={navigator.language} />
      </ul>
    </div>
  );
};

export default FingerprintDetails;
