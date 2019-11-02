import * as React from "react";
import * as text from "../../data/sample.json";

export interface ILandingPageProps {}

export const LandingPage: React.FC<ILandingPageProps> = props => {
  return (
    <div>
      <h1>Bonjour et bienvenue!</h1>
      <p>
        This is a template made by Hunter Kievet. See the /docs folder in the
        main directory for some good learning material.
      </p>
      <p>This text is imported from a JSON file: "{text.text}"</p>
      <p>Features:</p>
      <ul>
        <li>Made for Netlify</li>
        <li>Lazily loaded components</li>
        <li>Heezy Styles</li>
        <li>Sass compilation</li>
        <li>Typescript!!!</li>
        <li>Heezy Klovaday (HK) logo favicon</li>
      </ul>
      <p>Future Features:</p>
      <ul>
        <li>Emotion Infrastructure</li>
        <li>Markdown articles</li>
      </ul>
    </div>
  );
};

export default LandingPage;
