import AboutUsPage from '@/components/About/AboutUsPage';
import Layout from '../components/Layout';
import PageBanner from '@/components/PageBanner';

export default function About() {
  return (
    <Layout>
      <PageBanner />
      <AboutUsPage />
    </Layout>
  );
}
