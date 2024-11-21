import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '形式科学',
    Svg: require('@site/static/img/形式科学.svg').default,
    description: (
      <>
        分析｜函数论 & 微分方程 <br></br>
        代数｜矩阵论 & 线性代数 <br></br>
        优化｜凸问题 & 更优算法 <br></br>
      </>
    ),
  },
  {
    title: '社会科学',
    Svg: require('@site/static/img/社会科学.svg').default,
    description: (
      <>
        应用｜劳动经济学 & 家庭决策<br></br>
        交叉｜中国经济史 & 计量史学<br></br>
        理论｜商品和资本 & 现代古典
      </>
    ),
  },
  {
    title: '工程技术',
    Svg: require('@site/static/img/工程技术.svg').default,
    description: (
      <>
        验证计算｜看关系 & 因果推断<br></br>
        机器学习｜决策树 & 神经网络<br></br>
        模拟计算｜看结构 & 数值预测
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
