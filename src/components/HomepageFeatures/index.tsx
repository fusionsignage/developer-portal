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
        Create HTML-based applications that can be played on your screens alongside other content like videos
        and images.
      </>
    ),
    link: '/docs/category/custom-apps',
  },
  {
    title: 'API',
    Svg: require('@site/static/img/api.svg').default,
    description: (
      <>
        Integrate Fusion Signage more deeply into your own workflows or products using our API.
      </>
    ),
    link: '/docs/category/api',
  },
  {
    title: 'SDK',
    Svg: require('@site/static/img/sdk.svg').default,
    description: (
      <>
        Extend your custom apps with our development kit allowing you to access native device behaviour such as video
        playback and storing content for offline access.
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
