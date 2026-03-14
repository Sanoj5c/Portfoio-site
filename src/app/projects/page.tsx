import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
    title: 'Projects | Sanoj Dayarathna Portfolio',
    description: 'View the latest software development projects built by Sanoj Dayarathna.',
};

export default function Projects() {
    return <ProjectsClient />;
}
