import React from 'react';
import {
  HiOutlineCube,
  HiOutlineChartBar,
  HiOutlineShoppingBag,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

const DashboardHome = () => {
  // Mock Data (এগুলো আপনার Backend API থেকে আসবে)
  const stats = [
    {
      id: 1,
      label: 'Total Listings',
      value: '24',
      icon: <HiOutlineCube />,
      color: 'bg-blue-500',
    },
    {
      id: 2,
      label: 'Active Orders',
      value: '12',
      icon: <HiOutlineShoppingBag />,
      color: 'bg-[#fb7b53]',
    },
    {
      id: 3,
      label: 'Total Sales',
      value: '$4,250',
      icon: <HiOutlineChartBar />,
      color: 'bg-emerald-500',
    },
    {
      id: 4,
      label: 'Followers',
      value: '1.2k',
      icon: <HiOutlineUserGroup />,
      color: 'bg-purple-500',
    },
  ];

  const chartData = [
    { name: 'Jan', sales: 400, orders: 240 },
    { name: 'Feb', sales: 300, orders: 139 },
    { name: 'Mar', sales: 600, orders: 380 },
    { name: 'Apr', sales: 800, orders: 490 },
    { name: 'May', sales: 500, orders: 400 },
    { name: 'Jun', sales: 900, orders: 550 },
  ];

  const recentOrders = [
    {
      id: '#1024',
      item: 'Golden Retriever',
      price: '$1200',
      status: 'Completed',
      date: '20 Oct, 2025',
    },
    {
      id: '#1025',
      item: 'Cat Food Bundle',
      price: '$45',
      status: 'Pending',
      date: '21 Oct, 2025',
    },
    {
      id: '#1026',
      item: 'Bird Cage Large',
      price: '$89',
      status: 'Processing',
      date: '22 Oct, 2025',
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* 1. Header Title */}
      <div>
        <h1 className="text-2xl font-black text-slate-800 dark:text-white">
          Dashboard Overview
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Monitor your pet shop performance and sales.
        </p>
      </div>

      {/* 2. Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(stat => (
          <div
            key={stat.id}
            className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div
                className={`${stat.color} p-3 rounded-2xl text-white text-2xl shadow-lg shadow-inherit/20`}
              >
                {stat.icon}
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {stat.label}
                </p>
                <h3 className="text-2xl font-black text-slate-800 dark:text-white">
                  {stat.value}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sales Bar Chart */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6 pl-2">
            Monthly Sales Analysis
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                />
                <Tooltip
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{
                    borderRadius: '16px',
                    border: 'none',
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                  }}
                />
                <Bar
                  dataKey="sales"
                  fill="#fb7b53"
                  radius={[6, 6, 0, 0]}
                  barSize={30}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Order Area Chart */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6 pl-2">
            Order Trends
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fb7b53" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#fb7b53" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: '16px',
                    border: 'none',
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="orders"
                  stroke="#fb7b53"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorOrders)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 4. Dynamic Data Table */}
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Recent Transactions
          </h3>
          <button className="text-sm font-bold text-[#fb7b53] hover:underline">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50">
                <th className="p-4 text-xs font-black text-slate-400 uppercase tracking-widest pl-8">
                  Order ID
                </th>
                <th className="p-4 text-xs font-black text-slate-400 uppercase tracking-widest">
                  Item Name
                </th>
                <th className="p-4 text-xs font-black text-slate-400 uppercase tracking-widest">
                  Date
                </th>
                <th className="p-4 text-xs font-black text-slate-400 uppercase tracking-widest">
                  Price
                </th>
                <th className="p-4 text-xs font-black text-slate-400 uppercase tracking-widest">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              {recentOrders.map(order => (
                <tr
                  key={order.id}
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group"
                >
                  <td className="p-4 text-sm font-bold text-slate-600 dark:text-slate-300 pl-8">
                    {order.id}
                  </td>
                  <td className="p-4 text-sm font-black text-slate-800 dark:text-white">
                    {order.item}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {order.date}
                  </td>
                  <td className="p-4 text-sm font-bold text-slate-800 dark:text-white">
                    {order.price}
                  </td>
                  <td className="p-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                        order.status === 'Completed'
                          ? 'bg-emerald-100 text-emerald-600'
                          : order.status === 'Pending'
                          ? 'bg-amber-100 text-amber-600'
                          : 'bg-blue-100 text-blue-600'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
