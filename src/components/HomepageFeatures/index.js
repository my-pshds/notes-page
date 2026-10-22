import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const FeatureList = [
  {
    title: '形式科学',
    SvgLight: require('@site/static/img/形式科学.svg').default,
    SvgDark: require('@site/static/img/形式科学_dark.svg').default,
    description: (
      <>
        分析＆代数＆算法
      </>
    ),
  },
  {
    title: '社会科学',
    SvgLight: require('@site/static/img/社会科学.svg').default,
    SvgDark: require('@site/static/img/社会科学_dark.svg').default,
    description: (
      <>
        应用＆交叉＆理论
      </>
    ),
  },
  {
    title: '工程技术',
    SvgLight: require('@site/static/img/工程技术.svg').default,
    SvgDark: require('@site/static/img/工程技术_dark.svg').default,
    description: (
      <>
        验证＆学习＆模拟
      </>
    ),
  },
];



function Feature({ SvgLight, SvgDark, title, description}) {
  const { colorMode } = useColorMode();
  const Svg = colorMode === 'dark' ? SvgDark : SvgLight;
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
