import Layout from '../components/Layout';

export default function Terms() {
  return (
    <Layout>
      <div className="container-custom py-20">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>By using DAV School Management System, you agree to these terms and conditions.</p>
        </div>
      </div>
    </Layout>
  );
}

