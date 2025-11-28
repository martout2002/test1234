

import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">test1234</h1>
          <div className="flex items-center gap-4">
            
            
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome to your Dashboard</h2>
          <p className="text-gray-600">xcfas</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Total Users</h3>
            <p className="text-3xl font-bold text-gray-900">1,234</p>
            <p className="text-sm text-green-600 mt-2">↑ 12% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Active Sessions</h3>
            <p className="text-3xl font-bold text-gray-900">567</p>
            <p className="text-sm text-green-600 mt-2">↑ 8% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Revenue</h3>
            <p className="text-3xl font-bold text-gray-900">$12,345</p>
            <p className="text-sm text-red-600 mt-2">↓ 3% from last month</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/profile"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-amber-500 hover:bg-amber-50 transition-colors"
            >
              <div className="text-2xl mb-2">👤</div>
              <h4 className="font-medium text-gray-900">View Profile</h4>
              <p className="text-sm text-gray-500">Manage your account</p>
            </Link>
            <Link
              href="/settings"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-amber-500 hover:bg-amber-50 transition-colors"
            >
              <div className="text-2xl mb-2">⚙️</div>
              <h4 className="font-medium text-gray-900">Settings</h4>
              <p className="text-sm text-gray-500">Configure preferences</p>
            </Link>
            <Link
              href="/analytics"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-amber-500 hover:bg-amber-50 transition-colors"
            >
              <div className="text-2xl mb-2">📊</div>
              <h4 className="font-medium text-gray-900">Analytics</h4>
              <p className="text-sm text-gray-500">View insights</p>
            </Link>
            <Link
              href="/help"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-amber-500 hover:bg-amber-50 transition-colors"
            >
              <div className="text-2xl mb-2">❓</div>
              <h4 className="font-medium text-gray-900">Help & Support</h4>
              <p className="text-sm text-gray-500">Get assistance</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
