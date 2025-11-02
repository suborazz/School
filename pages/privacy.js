import Layout from '../components/Layout';

export default function Privacy() {
  return (
    <Layout>
      <div className="container-custom py-20">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>DAV School respects your privacy and is committed to protecting your personal information.</p>
        </div>
      </div>
    </Layout>
  );
}

