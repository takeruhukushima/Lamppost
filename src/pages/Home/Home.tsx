import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header'; // Header のインポート
import Footer from '../../components/Footer/Footer'; // Footer のインポート
import { useProjectContext } from '../../contexts/ProjectContext';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const { projects } = useProjectContext();

  // 進捗状態に基づく優先度を定義（小さい値ほど優先度が高い）
  const progressionPriority: { [key in '進行中' | 'deploy済' | '構想中']: number } = {
    'deploy済': 0,
    '進行中': 1,
    '構想中': 2
  };

  // プロジェクトをソートする
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.id === "1") return -1; // id=1のプロジェクトを最上部に配置
    if (b.id === "1") return 1;  // 逆の場合はbを前に

    // 進捗状態の優先度で比較
    return progressionPriority[a.progression] - progressionPriority[b.progression];
  });

  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.pageTitle}>Projects</h1>
      <section className={styles.projectSection}>
        {sortedProjects.map(project => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className={styles.projectCardLink}
          >
            <div className={styles.projectCard}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
              <p
                className={`${styles.projectProgression} ${getProgressionClass(project.progression)}`}
              >
                {project.progression}
              </p>
            </div>
          </Link>
        ))}
      </section>
      <Footer />
    </div>
  );
};

// progression のクラスを決定するヘルパー関数
const getProgressionClass = (progression: '進行中' | 'deploy済' | '構想中'): string => {
  switch (progression) {
    case '進行中':
      return styles['progression-in-progress'];
    case 'deploy済':
      return styles['progression-deployed'];
    case '構想中':
      return styles['progression-ideas'];
    default:
      return '';
  }
};

export default Home;
