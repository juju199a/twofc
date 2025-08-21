import styles from '@/styles/sections/featuredprojects.module.css'
import ProjectCard from '../ui/ProjectCard'
import { useTranslations } from 'next-intl';

export default function FeaturedProjectSection() {

    const project1 = useTranslations('LandingPage.featuredProjectsSection.project1');
    const project2 = useTranslations('LandingPage.featuredProjectsSection.project2');
    const project3 = useTranslations('LandingPage.featuredProjectsSection.project3');
    const project4 = useTranslations('LandingPage.featuredProjectsSection.project4');
    const project5 = useTranslations('LandingPage.featuredProjectsSection.project5');
    const project6 = useTranslations('LandingPage.featuredProjectsSection.project6');
    const project7 = useTranslations('LandingPage.featuredProjectsSection.project7');
    const project8 = useTranslations('LandingPage.featuredProjectsSection.project8');
    const project9 = useTranslations('LandingPage.featuredProjectsSection.project9');

    return (
        <div className={styles['featuredprojects']}>
            <section className={styles['section']}>
                <div className={styles['container']}>
                    <div className={styles['heading']}>
                        <div className={styles['big']}>
                            Featured Projects
                        </div>
                    </div>
                    <div className={styles['projects']}>
                        <ProjectCard category={project1('category')} title={project1('title')} subtitle={project1('subtitle')} description={project1('description')} />
                        <ProjectCard category={project2('category')} title={project2('title')} subtitle={project2('subtitle')} description={project2('description')} />
                        <ProjectCard category={project3('category')} title={project3('title')} subtitle={project3('subtitle')} description={project3('description')} />
                        <ProjectCard category={project4('category')} title={project4('title')} subtitle={project4('subtitle')} description={project4('description')} />
                        <ProjectCard category={project5('category')} title={project5('title')} subtitle={project5('subtitle')} description={project5('description')} />
                        <ProjectCard category={project6('category')} title={project6('title')} subtitle={project6('subtitle')} description={project6('description')} />
                        <ProjectCard category={project7('category')} title={project7('title')} subtitle={project7('subtitle')} description={project7('description')} />
                        <ProjectCard category={project8('category')} title={project8('title')} subtitle={project8('subtitle')} description={project8('description')} />
                        <ProjectCard category={project9('category')} title={project9('title')} subtitle={project9('subtitle')} description={project9('description')} />
                    </div>
                </div>
            </section>
        </div>
    )
}