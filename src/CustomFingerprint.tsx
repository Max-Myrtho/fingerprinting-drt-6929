///////////////////
//Not used
///////////////////

import { useEffect, useState } from "react";

const getFingerprint = (): string => {
  const screenRes = `${window.innerWidth}x${window.innerHeight}`;
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const fingerprint = btoa(`${screenRes}${timezone}`);
  console.log("Resolution: " + screenRes + " | Timezone: "+ timezone + " | Fingerprint: "+ fingerprint);
  return fingerprint;
};

const CustomFingerprint = () => {
  const [fingerprint, setFingerprint] = useState<string | null>(null);
  const [resolution, setResolution] = useState<string>(`${window.innerWidth}x${window.innerHeight}`);

  useEffect(() => {
    const updateFingerprint = () => {
      setResolution(`${window.innerWidth}x${window.innerHeight}`);
      setFingerprint(getFingerprint());
    };

    updateFingerprint()

    window.addEventListener("resize", updateFingerprint);

    return () => {
      window.removeEventListener("resize", updateFingerprint);
    };
  }, [resolution]);

  return (
    <div className="rounded-md p-2" style={{
        width: '100%',
        wordBreak: 'break-word',
        backgroundColor: "beige",
        color: "black"
    }}>
      <h4>Votre résolution actuelle: <u>{resolution}</u></h4>
      <b>Sur ce site, vous êtes identifié par ce fingerprint:</b>
      <br/>
      {fingerprint ? <span className="bg-black text-white rounded-md px-2 p-0.5">{fingerprint}</span> : <span>Calcul en cours...</span>}
    <hr className="mt-4"/>
    <p className="italic">Ce fingerprint a été calculé en fonction de votre résolution actuelle et de votre fuseau horaire uniquement.</p>
    </div>
  );
};

export default CustomFingerprint;

