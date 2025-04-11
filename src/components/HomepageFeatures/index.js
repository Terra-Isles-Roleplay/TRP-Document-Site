import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Welcome to the Terra Isles RP Community',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
    Terra Isles Roleplay has been serving the public since the 1st of January 2017. Our approach to a realistic and professional roleplaying environment is a combined goal of the Community, along with maintaining a family-orientated community all with a love for gaming.
    <br></br>
    <br></br>
    Terra Isles RP strives to achieve these tasks by having a community of gamers and modders, as well as real-life military, law enforcement, healthcare professionals and first responders, who believe in a respectful and mature environment where we can build a willingness to learn and better ourselves along with our surroundings.
      </>
    ),
  },
  {
    title: 'Focusing on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      Our mission is to provide an authentic, mature, realistic and true-to-form roleplaying experience, while simultaneously delivering an enjoyable environment for all members. The community bases itself within the fictional Grand Theft Auto island of San Andreas with influences from; Australia, Canada and the United States of America.
      <br></br>
      <br></br>
      To ensure the highest quality of roleplay, the community has always been whitelisted. This means that all of our members have submitted an application, undergone an interview, and been approved into the community, if you think you have what it takes, click here and follow the application instructions.      
      </>
    ),
  },
  {
    title: 'Apply Today',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Upon applying to the Community, prospective members will automatically join as civilians responsible for orchestrating a lively society. Our members develop and maintain our roleplay society through their Character's Background Stories in an environment with unlimited opportunities for criminal enterprises or playing big within civilian businesses.
        <br></br>
        <br></br>
        On behalf of Terra Isles Roleplay and our Administrators, we thank future applicants for taking the time and effort it takes to thrive and dedicate themselves to the TRP and the goals set to bring us forward to the future.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
