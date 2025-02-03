import {UAParser} from "ua-parser-js";

const LiElement = ({title = "", value = ""}) => {
  return (<li
  key={title}
  style={{
    color: 'black',
    marginBottom: '10px',
    background: '#f4f4f4',
    padding: '10px',
    borderRadius: '5px',
    wordBreak: 'break-word',
  }}
>
  <b style={{color: 'red'}}>{title}</b><br/>
  {value}
</li>);
}
const FingerprintDetails = () => {
  const uap = new UAParser();

  return (
    <div>
      <h3 className='text-3xl text-center mb-4 underline'>Résultats du Fingerprinting</h3>
      <ul style={{
        listStyleType: 'none',
        padding: 0, 
        maxWidth: '100%', 
        overflow: 'hidden', 
        wordBreak: 'break-word'
       }}>
        <LiElement title='Navigateur' value={`${uap.getResult().browser.name} | Version: ${uap.getResult().browser.version}`}/>
        <LiElement title='Résolution écran' value={`X: ${window.innerWidth}px | Y: ${window.innerHeight}px`}/>
        <LiElement title="Système d'exploitation" value={navigator.platform}/>
        <LiElement title='Mémoire RAM' value={`${navigator.hardwareConcurrency} GB`}/>
        <LiElement title='Fuseau horaire' value={Intl.DateTimeFormat().resolvedOptions().timeZone}/>
        <LiElement title='Langue' value={navigator.language}/>
      </ul>
    </div>
  );
};

export default FingerprintDetails;
