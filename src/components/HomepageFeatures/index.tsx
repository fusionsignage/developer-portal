import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Custom Apps',
    Svg: require('@site/static/img/custom-apps.svg').default,
    description: (
      <>
        Create HTML-based applications to play on screens along other content like videos and images. <em>Nice.</em>
      </>
    ),
    link: '/docs/category/custom-apps',
  },
  {
    title: 'API',
    Svg: require('@site/static/img/api.svg').default,
    description: (
      <>
        Snuggle Fusion Signage into your workflows or products using our API. You're welcome.
      </>
    ),
    link: '/docs/category/api',
  },
  {
    title: 'SDK',
    Svg: require('@site/static/img/sdk.svg').default,
    description: (
      <>
        Extend your custom apps with our development kit so you can access native device behaviour like video playback
        and store content for offline access.
      </>
    ),
    link: '/docs/category/sdk',
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={styles.featureLink}>
        <div className="text--center padding--md">
          <Svg className={styles.featureSvg} aria-hidden="true" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
