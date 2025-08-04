import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Custom Apps',
    Svg: require('@site/static/img/html5-01-svgrepo-com.svg').default,
    description: (
      <>
        Create HTML-based applications that can be played on your screens alongside other content like videos
        and images.
      </>
    ),
  },
  {
    title: 'API',
    Svg: require('@site/static/img/api-settings-svgrepo-com.svg').default,
    description: (
      <>
        Integrate Fusion Signage more deeply into your own workflows or products using our API.
      </>
    ),
  },
  {
    title: 'SDK',
    Svg: require('@site/static/img/coding-data-development-svgrepo-com.svg').default,
    description: (
      <>
        Extend your custom apps with our development kit allowing you to access native device behaviour such as video
        playback and storing content for offline access.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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
