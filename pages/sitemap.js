import Layout from '../components/Layout';
import Link from 'next/link';

export default function Sitemap() {
  const pages = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Admission', url: '/admission' },
    { title: 'Gallery', url: '/gallery' },
    { title: 'Contact', url: '/contact' },
    { title: 'Login', url: '/login' },
  ];

  return (
    <Layout>
      <div className="container-custom py-20">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8">Sitemap</h1>
        <div className="space-y-2">
          {pages.map((page, index) => (
            <Link key={index} href={page.url}>
              <a className="block text-lg text-purple-600 hover:text-purple-800">
                → {page.title}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

