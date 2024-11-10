import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState('');
  const userId = 1; // 假设用户 ID 为 1，您可以替换为实际的用户 ID

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files)); // 将 FileList 转换为数组
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      setMessage('Please select at least one file.');
      return;
    }

    const formData = new FormData();
    files.forEach(file => formData.append('files', file)); // 添加多个文件
    formData.append('userId', userId); // 添加用户 ID

    try {
      const response = await axios.post('http://localhost:3000/files/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Files uploaded and saved successfully!');
      console.log('Saved applications:', response.data.applications);
    } catch (error) {
      console.error('Error uploading files:', error);
      setMessage('Error uploading files. Please try again.');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-200">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-8">
        <h2 className="text-3xl font-bold mb-6">Upload Photos or Files</h2>
        <input type="file" multiple onChange={handleFileChange} className="mb-4" />
        <button
          onClick={handleUpload}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Upload
        </button>
        {message && <p className="mt-4">{message}</p>}
        {files.length > 0 && (
          <ul className="mt-4">
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
