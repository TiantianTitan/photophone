import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Application = () => {
  const [applications, setApplications] = useState([]); // 默认设置为空数组
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('http://localhost:3000/applications'); // 确保路径正确
        setApplications(Array.isArray(response.data) ? response.data : []); // 确保数据是数组
      } catch (error) {
        console.error("Error fetching applications:", error);
        setError('Error fetching applications');
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Application Data</h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : applications.length > 0 ? ( 
        <table className="min-w-full bg-white shadow-md rounded overflow-hidden">
          <thead>
            <tr>
              <th className="py-3 px-6 bg-gray-100 font-semibold text-gray-600">ID</th>
              <th className="py-3 px-6 bg-gray-100 font-semibold text-gray-600">File Path</th>
              <th className="py-3 px-6 bg-gray-100 font-semibold text-gray-600">Uploaded At</th>
              <th className="py-3 px-6 bg-gray-100 font-semibold text-gray-600">Is Completed</th>
              <th className="py-3 px-6 bg-gray-100 font-semibold text-gray-600">Is Paid</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border-b">
                <td className="py-3 px-6">{app.id}</td>
                <td className="py-3 px-6">{app.filePath}</td>
                <td className="py-3 px-6">{new Date(app.uploadedAt).toLocaleString()}</td>
                <td className="py-3 px-6">{app.isCompleted ? 'Yes' : 'No'}</td>
                <td className="py-3 px-6">{app.isPaid ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No applications found.</p>
      )}
    </div>
  );
};

export default Application;
