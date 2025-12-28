import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import Dashboard from '../pages/Dashboard';
import ContentList from '../pages/ContentList';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'content-list',
        element: <ContentList />,
      },
      {
        path: 'analytics',
        element: (
          <div className="p-6">
            <div className="bg-white rounded-lg p-8">
              <h2 className="font-semibold mb-4">数据分析</h2>
              <p className="text-gray-600">数据分析功能正在开发中...</p>
            </div>
          </div>
        ),
      },
      {
        path: 'settings',
        element: (
          <div className="p-6">
            <div className="bg-white rounded-lg p-8">
              <h2 className="font-semibold mb-4">系统设置</h2>
              <p className="text-gray-600">系统设置功能正在开发中...</p>
            </div>
          </div>
        ),
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
