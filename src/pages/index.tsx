import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// ----------------------------------------------------------------------------
// Hero Section
// ----------------------------------------------------------------------------
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.container}>
        <div className={clsx(styles.heroContent, styles.animateFadeIn)} style={{ animationDelay: '0.1s' }}>
          <div className={styles.heroBadge}>✨ 2025 全新升级</div>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>
            这不仅仅是一份文档，更是一个长期主义者的英语进阶指南。
            <br />汇聚 49 周社群精华，连接阅读、思维与表达。
          </p>
          <div className={styles.buttons}>
            <Link
              className={styles.primaryButton}
              to="/docs/2025年社群回放录像总结/2025.1.4-week1-简单入门英文读物注意事项">
              开始探索旅程 →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

// ----------------------------------------------------------------------------
// Stats Section
// ----------------------------------------------------------------------------
function StatsSection() {
  return (
    <div className={styles.container}>
      <div className={clsx(styles.statsSection, styles.animateFadeIn)} style={{ animationDelay: '0.3s' }}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>49</div>
            <div className={styles.statLabel}>深度直播回放</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>1200+</div>
            <div className={styles.statLabel}>小时学习时长</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>30+</div>
            <div className={styles.statLabel}>精读原版书</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>∞</div>
            <div className={styles.statLabel}>无限可能</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// Features Section
// ----------------------------------------------------------------------------
type FeatureItem = {
  emoji: string;
  title: string;
  description: ReactNode;
  delay: string;
};

const FeatureList: FeatureItem[] = [
  {
    emoji: '📖',
    title: '深度阅读体系',
    description: '掌握 Simple View of Reading 公式，从窄阅读到 i+1 理论，构建科学的原版书阅读路径。',
    delay: '0.4s'
  },
  {
    emoji: '�',
    title: '输入输出闭环',
    description: '打破哑巴英语，通过蓄水池理论与四象限法则，实现从 High Input 到 High Output 的质变。',
    delay: '0.5s'
  },
  {
    emoji: '🧠',
    title: '构建第二大脑',
    description: '建立个性化语料库和逻辑衔接句库，让词汇从"半生不熟"进化为"信得过的兵"。',
    delay: '0.6s'
  },
  {
    emoji: '🤖',
    title: 'AI 赋能学习',
    description: '拥抱 AI 时代，利用豆包、ChatGPT 进行口语对练、识图表达，重塑语言学习工作流。',
    delay: '0.7s'
  },
  {
    emoji: '⚡',
    title: '高效能心态',
    description: '运用 5秒法则与无限游戏思维，克服拖延症与阅读焦虑，维持长期稳定的学习心流。',
    delay: '0.8s'
  },
  {
    emoji: '🌍',
    title: '全球化视野',
    description: '通过经济学人、CEO 致股东信等真实语料，不仅学语言，更在这门语言中看见更大的世界。',
    delay: '0.9s'
  },
];

function Feature({ emoji, title, description, delay }: FeatureItem) {
  return (
    <div className={clsx(styles.featureCard, styles.animateFadeIn)} style={{ animationDelay: delay }}>
      <div className={styles.featureIconBox}>{emoji}</div>
      <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={clsx(styles.sectionHeading, styles.animateFadeIn)} style={{ animationDelay: '0.3s' }}>
          <Heading as="h2" className={styles.sectionTitle}>
            构建你的语言操作系统
          </Heading>
          <p>不只是英语，而是一套完整的认知与成长体系</p>
        </div>
        <div className={styles.featureGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------
// Quote Section
// ----------------------------------------------------------------------------
function QuoteSection() {
  return (
    <section className={styles.quoteSection}>
      <div className={styles.container}>
        <div className={clsx(styles.quoteCard, styles.animateFadeIn)} style={{ animationDelay: '1s' }}>
          <div className={styles.quoteIcon}>❝</div>
          <div className={styles.quoteText}>
            "When in doubt, keep the schedule, reduce the scope."
          </div>
          <div className={styles.quoteAuthor}>James Clear</div>
          <div className={styles.quoteRole}>Author of Atomic Habits</div>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------
// Main Page Layout
// ----------------------------------------------------------------------------
export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="2025年英语学习社群直播回放精华文档，涵盖阅读方法、口语练习、AI辅助学习等核心主题">
      <main>
        <HomepageHeader />
        <StatsSection />
        <HomepageFeatures />
        <QuoteSection />
      </main>
    </Layout>
  );
}
