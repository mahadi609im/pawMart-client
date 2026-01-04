import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/ContextProvider';
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
  const { user } = useContext(AuthContext);
  const [allListings, setAllListings] = useState([]);
  const [myOrders, setMyOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);

      // ১. প্ল্যাটফর্মের সকল লিস্টিং ফেচ
      const fetchListings = fetch(
        `https://paw-mart-server-smoky.vercel.app/listings`
      ).then(res => res.json());

      // ২. ইউজারের নিজের করা অর্ডারের লিস্ট ফেচ
      const fetchOrders = fetch(
        `https://paw-mart-server-smoky.vercel.app/myOrders?email=${user.email}`
      ).then(res => res.json());

      Promise.all([fetchListings, fetchOrders])
        .then(([listingsData, ordersData]) => {
          setAllListings(listingsData || []);
          setMyOrders(ordersData || []);
          setLoading(false);
        })
        .catch(err => {
          console.error('Data Fetch Error:', err);
          setLoading(false);
        });
    }
  }, [user]);

  // ডায়নামিক ক্যালকুলেশন
  const totalSpent = myOrders.reduce(
    (sum, order) => sum + parseFloat(order.price || 0),
    0
  );

  const categoryStats = allListings.reduce((acc, item) => {
    const cat = item.category || 'Other';
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  const categoryChartData = Object.keys(categoryStats).map(key => ({
    name: key,
    count: categoryStats[key],
  }));

  const activityData = [
    {
      name: 'Your Listings',
      value: allListings.filter(l => l.email === user?.email).length,
    },
    { name: 'Your Orders', value: myOrders.length },
    { name: 'Total Products', value: allListings.length },
  ];

  const stats = [
    {
      id: 1,
      label: 'Total Listings',
      value: allListings.length,
      icon: <HiOutlineCube />,
      color: 'bg-blue-500',
    },
    {
      id: 2,
      label: 'Your Orders',
      value: myOrders.length,
      icon: <HiOutlineShoppingBag />,
      color: 'bg-[#fb7b53]',
    },
    {
      id: 3,
      label: 'Total Spent',
      value: `$${totalSpent.toLocaleString()}`,
      icon: <HiOutlineChartBar />,
      color: 'bg-emerald-500',
    },
    {
      id: 4,
      label: 'Total Items',
      value: allListings.length + myOrders.length,
      icon: <HiOutlineUserGroup />,
      color: 'bg-purple-500',
    },
  ];

  if (loading) {
    return (
      <div className="h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#fb7b53]"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* 1. Header Title */}
      <div>
        <h1 className="text-2xl font-black text-slate-800 dark:text-white">
          Welcome back, {user?.displayName || 'User'}!
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Here is a summary of your activity on pawMart.
        </p>
      </div>

      {/* 2. dynamic Stats Cards */}
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
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">
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
        <div className="bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6 pl-2">
            Inventory Distribution
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={
                  categoryChartData.length > 0
                    ? categoryChartData
                    : [{ name: 'No Data', count: 0 }]
                }
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 10 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                />
                <Tooltip
                  cursor={{ fill: '#fb7b5310' }} // হালকা ব্র্যান্ড কালার হোভার এফেক্ট
                  contentStyle={{
                    borderRadius: '16px',
                    border: 'none',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  }}
                />
                <Bar
                  dataKey="count"
                  fill="#fb7b53" // আপনার আগের ব্র্যান্ড কালার
                  radius={[6, 6, 0, 0]}
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ২. প্ল্যাটফর্ম অ্যাক্টিভিটি মিক্স */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6 pl-2">
            Platform Activity Mix
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData}>
                <defs>
                  <linearGradient id="colorMix" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fb7b53" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#fb7b53" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
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
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#fb7b53" // ব্র্যান্ড কালার বর্ডার
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#colorMix)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 4. Dynamic Data Table (Recent Orders) */}
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Recent Orders
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50">
                <th className="p-4 text-sm font-black text-slate-900 dark:text-slate-400  uppercase tracking-widest pl-8">
                  Item Name
                </th>
                <th className="p-4 text-xs font-black text-slate-900 dark:text-slate-400 uppercase tracking-widest">
                  Category
                </th>
                <th className="p-4 text-xs font-black text-slate-900 dark:text-slate-400 uppercase tracking-widest">
                  Price
                </th>
                <th className="p-4 text-xs font-black text-slate-900 dark:text-slate-400 uppercase tracking-widest">
                  Quantity
                </th>
                <th className="p-4 text-xs font-black text-slate-900 dark:text-slate-400 uppercase tracking-widest">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              {myOrders.length > 0 ? (
                myOrders.slice(0, 5).map((order, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group"
                  >
                    <td className="p-4 text-sm font-black text-slate-600 dark:text-white pl-8">
                      {order.listingName || 'Unnamed Item'}
                    </td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-600">
                      {order.category}
                    </td>
                    <td className="p-4 text-sm font-bold text-slate-800 dark:text-white">
                      ${order.price}
                    </td>
                    <td className="p-4 text-sm font-bold text-slate-800 dark:text-white ">
                      {order.quantity < 10
                        ? '0' + order.quantity
                        : order.quantity}
                    </td>
                    <td className="p-4 text-sm">
                      <span className="px-3 py-1 rounded-full text-[10px] font-black tracking-tighter bg-orange-100 text-orange-600">
                        In Progress
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="p-8 text-center text-slate-400 italic"
                  >
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
