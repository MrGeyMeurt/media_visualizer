import s from "./Landing.module.scss";
import AudioController from "../../utils/AudioController";
import { useState } from "react";
import Button from "../Button/Button";
import { useEffect } from "react";

const Landing = () => {
  const [hasClicked, setHasClicked] = useState(() => {
    const savedState = localStorage.getItem('hasVisited');
    return savedState ? true : false;
  });

  useEffect(() => {
    if (localStorage.getItem('hasVisited')) {
      AudioController.setup();
    }
  }, []);

  const onClick = () => {
    AudioController.setup();
    setTimeout(() => {
      setHasClicked(true);
    }, 100);
    localStorage.setItem('hasVisited', 'true');
  };

  return (
    <section className={`${s.landing} ${hasClicked ? s.landingHidden : ""}`}>
      <div className={s.wrapper}>
        <h1 className={s.title}>Music Visualizer</h1>
        <p>
          Projet conçu dans le cadre du cours Dispositifs interactifs à l'IUT de
          Champs-sur-Marne. <br />
          Découverte et usage de three.js, gsap, react, la Web Audio API. <br />
          Importez vos fichiers audio pour pouvoir les visualiser en 3D.
        </p>
        <Button label={"Commencer"} onClick={onClick} />
      </div>
    </section>
  );
};

export default Landing;
