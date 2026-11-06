// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   LayoutDashboard,
//   FolderKanban,
//   Users,
//   BriefcaseBusiness,
//   MessageSquare,
//   Settings,
//   Bell,
//   Search,
//   Menu,
//   X,
//   TrendingUp,
//   TrendingDown,
//   DollarSign,
//   Eye,
//   Activity,
//   ArrowUpRight,
//   MoreHorizontal,
//   Plus,
//   CalendarDays,
//   ChevronDown,
//   Code2,
//   LogOut,
//   Zap,
// } from "lucide-react";

// const navItems = [
//   { name: "Dashboard", icon: LayoutDashboard },
//   { name: "Projects", icon: FolderKanban },
//   { name: "Services", icon: BriefcaseBusiness },
//   { name: "Team", icon: Users },
//   { name: "Messages", icon: MessageSquare, badge: 4 },
// ];

// const stats = [
//   {
//     title: "Total Revenue",
//     value: "$24,580",
//     change: "+12.5%",
//     positive: true,
//     icon: DollarSign,
//     color: "from-blue-500 to-cyan-400",
//     bg: "bg-blue-500/10",
//   },
//   {
//     title: "Total Projects",
//     value: "128",
//     change: "+8.2%",
//     positive: true,
//     icon: FolderKanban,
//     color: "from-purple-500 to-pink-400",
//     bg: "bg-purple-500/10",
//   },
//   {
//     title: "Total Clients",
//     value: "856",
//     change: "+18.4%",
//     positive: true,
//     icon: Users,
//     color: "from-emerald-500 to-teal-400",
//     bg: "bg-emerald-500/10",
//   },
//   {
//     title: "Page Views",
//     value: "42.8K",
//     change: "-2.4%",
//     positive: false,
//     icon: Eye,
//     color: "from-orange-500 to-yellow-400",
//     bg: "bg-orange-500/10",
//   },
// ];

// const projects = [
//   {
//     name: "Nexa Commerce",
//     category: "Web Development",
//     date: "06 Nov 2026",
//     status: "Completed",
//     color: "bg-emerald-500/10 text-emerald-400",
//     initial: "N",
//   },
//   {
//     name: "Finova Dashboard",
//     category: "Dashboard",
//     date: "04 Nov 2026",
//     status: "In Progress",
//     color: "bg-blue-500/10 text-blue-400",
//     initial: "F",
//   },
//   {
//     name: "TravelGo",
//     category: "UI/UX Design",
//     date: "02 Nov 2026",
//     status: "Pending",
//     color: "bg-orange-500/10 text-orange-400",
//     initial: "T",
//   },
//   {
//     name: "Creative Studio",
//     category: "Web Design",
//     date: "01 Nov 2026",
//     status: "Completed",
//     color: "bg-emerald-500/10 text-emerald-400",
//     initial: "C",
//   },
// ];

// const activities = [
//   {
//     title: "New project created",
//     detail: "Nexa Commerce project was added",
//     time: "10 minutes ago",
//     color: "bg-blue-500",
//   },
//   {
//     title: "New client registered",
//     detail: "A new client joined AuraTech",
//     time: "1 hour ago",
//     color: "bg-purple-500",
//   },
//   {
//     title: "Project completed",
//     detail: "Creative Studio was completed",
//     time: "3 hours ago",
//     color: "bg-emerald-500",
//   },
// ];

// const Dashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [activeNav, setActiveNav] = useState("Dashboard");
//   const [period, setPeriod] = useState("Last 7 days");

//   const chartData = [35, 55, 42, 72, 50, 85, 65, 95, 72, 82, 60, 100];

//   return (
//     <div className="min-h-screen bg-[#070b18] text-white">
//       {/* Mobile Overlay */}
//       <AnimatePresence>
//         {sidebarOpen && (
//           <motion.button
//             aria-label="Close sidebar"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSidebarOpen(false)}
//             className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
//           />
//         )}
//       </AnimatePresence>

//       {/* Sidebar */}
//       <motion.aside
//         initial={false}
//         animate={{
//           x: sidebarOpen ? 0 : undefined,
//         }}
//         className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-white/10 bg-[#0c1122] transition-transform duration-300 lg:translate-x-0 ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Logo */}
//         <div className="flex h-20 items-center justify-between border-b border-white/10 px-7">
//           <div className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
//               <Zap size={23} />
//             </div>
//             <div>
//               <h1 className="text-xl font-extrabold tracking-wide">
//                 Aura<span className="text-purple-400">Tech</span>
//               </h1>
//               <p className="text-[10px] tracking-[3px] text-slate-500">
//                 ADMIN PANEL
//               </p>
//             </div>
//           </div>

//           <button
//             onClick={() => setSidebarOpen(false)}
//             className="rounded-lg p-2 text-slate-400 hover:bg-white/10 lg:hidden"
//           >
//             <X size={21} />
//           </button>
//         </div>

//         {/* Navigation */}
//         <div className="flex-1 overflow-y-auto px-5 py-8">
//           <p className="mb-5 px-3 text-xs font-bold uppercase tracking-widest text-slate-500">
//             Main Menu
//           </p>

//           <nav className="space-y-2">
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               const active = activeNav === item.name;

//               return (
//                 <button
//                   key={item.name}
//                   onClick={() => {
//                     setActiveNav(item.name);
//                     setSidebarOpen(false);
//                   }}
//                   className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition ${
//                     active
//                       ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white shadow-lg shadow-purple-900/10"
//                       : "text-slate-400 hover:bg-white/5 hover:text-white"
//                   }`}
//                 >
//                   <span className="flex items-center gap-3">
//                     <Icon
//                       size={19}
//                       className={active ? "text-purple-400" : ""}
//                     />
//                     {item.name}
//                   </span>

//                   {active && (
//                     <span className="h-5 w-1 rounded-full bg-purple-400" />
//                   )}

//                   {item.badge && (
//                     <span className="rounded-full bg-purple-500 px-2 py-0.5 text-xs text-white">
//                       {item.badge}
//                     </span>
//                   )}
//                 </button>
//               );
//             })}
//           </nav>

//           <p className="mb-5 mt-10 px-3 text-xs font-bold uppercase tracking-widest text-slate-500">
//             Preferences
//           </p>

//           <nav className="space-y-2">
//             {[
//               { name: "Settings", icon: Settings },
//               { name: "Activity", icon: Activity },
//             ].map((item) => {
//               const Icon = item.icon;

//               return (
//                 <button
//                   key={item.name}
//                   onClick={() => {
//                     setActiveNav(item.name);
//                     setSidebarOpen(false);
//                   }}
//                   className={`flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-sm transition ${
//                     activeNav === item.name
//                       ? "bg-purple-500/15 text-white"
//                       : "text-slate-400 hover:bg-white/5 hover:text-white"
//                   }`}
//                 >
//                   <Icon size={19} />
//                   {item.name}
//                 </button>
//               );
//             })}
//           </nav>
//         </div>

//         {/* Sidebar Bottom */}
//         <div className="border-t border-white/10 p-5">
//           <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-4">
//             <div className="mb-3 flex items-center gap-2">
//               <SparklesIcon />
//               <span className="text-sm font-semibold">Upgrade Plan</span>
//             </div>
//             <p className="mb-4 text-xs leading-6 text-slate-400">
//               Unlock more features and grow your business.
//             </p>
//             <button className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-2.5 text-xs font-bold">
//               Explore Plans
//             </button>
//           </div>

//           <button className="mt-5 flex w-full items-center gap-3 px-2 text-sm text-slate-400 hover:text-red-400">
//             <LogOut size={18} />
//             Sign Out
//           </button>
//         </div>
//       </motion.aside>

//       {/* Main Content */}
//       <main className="min-h-screen lg:ml-72">
//         {/* Top Navbar */}
//         <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-white/10 bg-[#070b18]/90 px-4 backdrop-blur-xl sm:px-7 lg:px-10">
//           <div className="flex items-center gap-4">
//             <button
//               onClick={() => setSidebarOpen(true)}
//               className="rounded-xl border border-white/10 p-2.5 text-slate-300 hover:bg-white/10 lg:hidden"
//               aria-label="Open menu"
//             >
//               <Menu size={21} />
//             </button>

//             <div>
//               <h2 className="text-lg font-bold sm:text-xl">{activeNav}</h2>
//               <p className="hidden text-xs text-slate-500 sm:block">
//                 Welcome back to AuraTech Admin
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3 sm:gap-5">
//             <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 md:flex">
//               <Search size={17} className="text-slate-500" />
//               <input
//                 placeholder="Search anything..."
//                 className="w-36 bg-transparent text-sm outline-none placeholder:text-slate-500 lg:w-48"
//               />
//             </div>

//             <button
//               aria-label="Notifications"
//               className="relative rounded-xl border border-white/10 p-2.5 text-slate-300 hover:bg-white/10"
//             >
//               <Bell size={20} />
//               <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-purple-500" />
//             </button>

//             <div className="flex items-center gap-3 border-l border-white/10 pl-3 sm:pl-5">
//               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 font-bold">
//                 A
//               </div>
//               <div className="hidden sm:block">
//                 <p className="text-sm font-semibold">Admin User</p>
//                 <p className="text-xs text-slate-500">Administrator</p>
//               </div>
//               <ChevronDown
//                 size={16}
//                 className="hidden text-slate-500 sm:block"
//               />
//             </div>
//           </div>
//         </header>

//         {/* Dashboard Body */}
//         <div className="px-4 py-8 sm:px-7 lg:px-10">
//           {/* Page Heading */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center"
//           >
//             <div>
//               <p className="text-sm text-slate-400">Friday, November 6, 2026</p>
//               <h1 className="mt-2 text-2xl font-extrabold sm:text-3xl">
//                 Dashboard Overview
//               </h1>
//               <p className="mt-2 text-sm text-slate-500">
//                 Here's what's happening with your business today.
//               </p>
//             </div>

//             <button className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-sm font-semibold shadow-lg shadow-purple-600/20 transition hover:-translate-y-1">
//               <Plus size={18} />
//               Add New Project
//             </button>
//           </motion.div>

//           {/* Stats Cards */}
//           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
//             {stats.map((stat, index) => {
//               const Icon = stat.icon;

//               return (
//                 <motion.div
//                   key={stat.title}
//                   initial={{ opacity: 0, y: 25 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/[0.06] sm:p-6"
//                 >
//                   <div className="flex items-center justify-between">
//                     <p className="text-sm text-slate-400">{stat.title}</p>
//                     <div className={`rounded-xl ${stat.bg} p-3`}>
//                       <Icon
//                         size={21}
//                         className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
//                       />
//                     </div>
//                   </div>

//                   <h2 className="mt-5 text-3xl font-extrabold tracking-tight">
//                     {stat.value}
//                   </h2>

//                   <div className="mt-4 flex items-center gap-2">
//                     <span
//                       className={`flex items-center gap-1 text-xs font-semibold ${
//                         stat.positive ? "text-emerald-400" : "text-red-400"
//                       }`}
//                     >
//                       {stat.positive ? (
//                         <TrendingUp size={15} />
//                       ) : (
//                         <TrendingDown size={15} />
//                       )}
//                       {stat.change}
//                     </span>
//                     <span className="text-xs text-slate-500">
//                       vs last month
//                     </span>
//                   </div>

//                   <div
//                     className={`absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-gradient-to-br ${stat.color} opacity-10 blur-2xl transition group-hover:opacity-30`}
//                   />
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Chart + Activity */}
//           <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">
//             {/* Revenue Chart */}
//             <motion.div
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-7 xl:col-span-2"
//             >
//               <div className="flex flex-wrap items-center justify-between gap-4">
//                 <div>
//                   <h3 className="text-lg font-bold">Revenue Analytics</h3>
//                   <p className="mt-1 text-xs text-slate-500">
//                     Track your business revenue
//                   </p>
//                 </div>

//                 <select
//                   value={period}
//                   onChange={(e) => setPeriod(e.target.value)}
//                   className="rounded-lg border border-white/10 bg-[#11182b] px-3 py-2 text-xs text-slate-300 outline-none"
//                 >
//                   <option>Last 7 days</option>
//                   <option>Last 30 days</option>
//                   <option>Last 90 days</option>
//                 </select>
//               </div>

//               <div className="mt-8 flex items-end gap-3">
//                 <h2 className="text-3xl font-extrabold">$24,580</h2>
//                 <span className="mb-1 flex items-center gap-1 text-xs text-emerald-400">
//                   <TrendingUp size={14} />
//                   12.5%
//                 </span>
//               </div>

//               {/* CSS Bar Chart */}
//               <div className="mt-8 flex h-52 items-end justify-between gap-2 border-b border-white/10 pb-2 sm:gap-4">
//                 {chartData.map((height, index) => (
//                   <div
//                     key={index}
//                     className="group flex h-full flex-1 items-end justify-center"
//                   >
//                     <motion.div
//                       initial={{ height: 0 }}
//                       animate={{ height: `${height}%` }}
//                       transition={{ duration: 0.8, delay: index * 0.05 }}
//                       className="relative w-full max-w-10 rounded-t-lg bg-gradient-to-t from-blue-600 to-purple-400 opacity-70 transition hover:opacity-100"
//                     />
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-4 flex justify-between text-[10px] text-slate-500 sm:text-xs">
//                 {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
//                   (day) => (
//                     <span key={day}>{day}</span>
//                   ),
//                 )}
//               </div>
//             </motion.div>

//             {/* Activity */}
//             <motion.div
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-7"
//             >
//               <div className="flex items-center justify-between">
//                 <h3 className="text-lg font-bold">Recent Activity</h3>
//                 <button aria-label="More activity options">
//                   <MoreHorizontal className="text-slate-500" />
//                 </button>
//               </div>

//               <div className="mt-7 space-y-7">
//                 {activities.map((activity, index) => (
//                   <div key={index} className="flex gap-4">
//                     <div className="relative">
//                       <span
//                         className={`block h-3 w-3 rounded-full ${activity.color}`}
//                       />
//                       {index !== activities.length - 1 && (
//                         <span className="absolute left-1.5 top-4 h-12 w-px bg-white/10" />
//                       )}
//                     </div>

//                     <div>
//                       <h4 className="text-sm font-semibold">
//                         {activity.title}
//                       </h4>
//                       <p className="mt-1 text-xs leading-5 text-slate-500">
//                         {activity.detail}
//                       </p>
//                       <p className="mt-2 text-[11px] text-slate-600">
//                         {activity.time}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <button className="mt-8 w-full rounded-xl border border-white/10 py-3 text-sm font-medium text-slate-400 transition hover:border-purple-500/40 hover:text-white">
//                 View All Activity
//               </button>
//             </motion.div>
//           </div>

//           {/* Recent Projects Table */}
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]"
//           >
//             <div className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center sm:p-7">
//               <div>
//                 <h3 className="text-lg font-bold">Recent Projects</h3>
//                 <p className="mt-1 text-xs text-slate-500">
//                   Manage and monitor your latest projects
//                 </p>
//               </div>

//               <button className="flex items-center gap-2 self-start text-sm font-semibold text-purple-400 transition hover:text-purple-300 sm:self-auto">
//                 View All
//                 <ArrowUpRight size={17} />
//               </button>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[650px] text-left">
//                 <thead>
//                   <tr className="border-y border-white/10 bg-white/[0.025] text-xs uppercase tracking-wider text-slate-500">
//                     <th className="px-7 py-4 font-medium">Project Name</th>
//                     <th className="px-7 py-4 font-medium">Category</th>
//                     <th className="px-7 py-4 font-medium">Date</th>
//                     <th className="px-7 py-4 font-medium">Status</th>
//                     <th className="px-7 py-4 font-medium">Action</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {projects.map((project) => (
//                     <tr
//                       key={project.name}
//                       className="border-b border-white/5 transition hover:bg-white/[0.025]"
//                     >
//                       <td className="px-7 py-5">
//                         <div className="flex items-center gap-3">
//                           <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 font-bold text-purple-300">
//                             {project.initial}
//                           </div>
//                           <span className="text-sm font-semibold">
//                             {project.name}
//                           </span>
//                         </div>
//                       </td>

//                       <td className="px-7 py-5 text-sm text-slate-400">
//                         {project.category}
//                       </td>

//                       <td className="px-7 py-5 text-sm text-slate-400">
//                         {project.date}
//                       </td>

//                       <td className="px-7 py-5">
//                         <span
//                           className={`rounded-full px-3 py-1.5 text-xs font-semibold ${project.color}`}
//                         >
//                           {project.status}
//                         </span>
//                       </td>

//                       <td className="px-7 py-5">
//                         <button
//                           aria-label={`Open ${project.name}`}
//                           className="rounded-lg p-2 text-slate-400 transition hover:bg-purple-500/10 hover:text-purple-400"
//                         >
//                           <ArrowUpRight size={18} />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Footer */}
//           <footer className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-slate-600 sm:flex-row">
//             <p>© 2026 AuraTech. All rights reserved.</p>
//             <p>Designed with ❤️ by AuraTech Team</p>
//           </footer>
//         </div>
//       </main>
//     </div>
//   );
// };

// // Small icon component
// const SparklesIcon = () => <Zap size={18} className="text-purple-400" />;

// export default Dashboard;

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiGrid,
  FiUsers,
  FiBriefcase,
  FiSettings,
  FiMenu,
  FiX,
  FiBell,
  FiSearch,
  FiTrendingUp,
  FiTrendingDown,
  FiDollarSign,
  FiFolder,
  FiCheckCircle,
  FiClock,
  FiArrowUpRight,
  FiMoreHorizontal,
  FiLogOut,
  FiPlus,
} from "react-icons/fi";

const stats = [
  {
    title: "Total Projects",
    value: "124",
    change: "+12.5%",
    icon: <FiFolder />,
    positive: true,
  },
  {
    title: "Total Clients",
    value: "2,420",
    change: "+8.2%",
    icon: <FiUsers />,
    positive: true,
  },
  {
    title: "Revenue",
    value: "$48,290",
    change: "+15.3%",
    icon: <FiDollarSign />,
    positive: true,
  },
  {
    title: "Pending Tasks",
    value: "18",
    change: "-4.5%",
    icon: <FiClock />,
    positive: false,
  },
];

const projects = [
  {
    name: "E-Commerce Platform",
    category: "Web Development",
    status: "Completed",
    progress: 100,
    color: "bg-emerald-400",
  },
  {
    name: "Mobile Banking App",
    category: "UI/UX Design",
    status: "In Progress",
    progress: 72,
    color: "bg-blue-400",
  },
  {
    name: "Real Estate Website",
    category: "Development",
    status: "In Progress",
    progress: 45,
    color: "bg-purple-400",
  },
  {
    name: "AI Analytics Dashboard",
    category: "AI Solutions",
    status: "Pending",
    progress: 20,
    color: "bg-orange-400",
  },
];

const activities = [
  {
    title: "New project created",
    desc: "E-Commerce Platform",
    time: "10 minutes ago",
    icon: <FiPlus />,
  },
  {
    title: "Payment received",
    desc: "Invoice #INV-2048",
    time: "1 hour ago",
    icon: <FiDollarSign />,
  },
  {
    title: "Task completed",
    desc: "Website UI Design",
    time: "3 hours ago",
    icon: <FiCheckCircle />,
  },
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Overview");

  const navItems = [
    { name: "Overview", icon: <FiGrid /> },
    { name: "Projects", icon: <FiBriefcase /> },
    { name: "Clients", icon: <FiUsers /> },
    { name: "Settings", icon: <FiSettings /> },
  ];

  return (
    <div className="min-h-screen bg-[#080b18] text-white flex">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-64
        bg-[#0d1224] border-r border-white/10 p-5
        transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-2xl font-bold tracking-wide">
            Aura<span className="text-purple-400">Tech.</span>
          </h1>

          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-400 text-xl"
          >
            <FiX />
          </button>
        </div>

        <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
          Main Menu
        </p>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveNav(item.name);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl
              transition-all ${
                activeNav === item.name
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-900/30"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium text-sm">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-6 left-5 right-5">
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 mb-5">
            <p className="font-semibold text-sm">Upgrade Plan</p>
            <p className="text-xs text-gray-400 mt-1">
              Unlock more features with Pro.
            </p>
            <button className="mt-3 text-xs text-purple-300 font-semibold">
              Explore Plans →
            </button>
          </div>

          <button className="flex items-center gap-3 text-gray-400 hover:text-red-400 text-sm">
            <FiLogOut /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {/* Header */}
        <header className="h-20 border-b border-white/10 px-4 sm:px-6 lg:px-8 flex items-center justify-between bg-[#0b1020]">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-xl"
            >
              <FiMenu />
            </button>

            <div>
              <h2 className="text-lg sm:text-xl font-bold">{activeNav}</h2>
              <p className="text-xs text-gray-500 hidden sm:block">
                Welcome back to AuraTech Admin
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-lg px-3 py-2">
              <FiSearch className="text-gray-400" />
              <input
                placeholder="Search anything..."
                className="bg-transparent outline-none text-sm ml-2 w-36"
              />
            </div>

            <button className="relative text-xl text-gray-400">
              <FiBell />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full" />
            </button>

            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold text-sm">
              A
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-8">
          {/* Welcome */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Dashboard Overview
              </h2>
              <p className="text-gray-400 text-sm mt-2">
                Track your business performance and activity.
              </p>
            </div>

            <button className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 transition text-sm font-semibold">
              <FiPlus /> Create Project
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#11182c] border border-white/10 rounded-2xl p-5 hover:border-purple-500/40 transition"
              >
                <div className="flex justify-between items-center">
                  <p className="text-gray-400 text-sm">{stat.title}</p>
                  <div className="w-11 h-11 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center text-xl">
                    {stat.icon}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold mt-5">
                  {stat.value}
                </h3>

                <div className="flex items-center gap-2 mt-3 text-xs">
                  <span
                    className={
                      stat.positive ? "text-emerald-400" : "text-orange-400"
                    }
                  >
                    {stat.positive ? <FiTrendingUp /> : <FiTrendingDown />}
                    {stat.change}
                  </span>
                  <span className="text-gray-500">vs last month</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chart + Activities */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
            {/* Chart */}
            <div className="xl:col-span-2 bg-[#11182c] border border-white/10 rounded-2xl p-5 sm:p-6">
              <div className="flex flex-wrap justify-between items-center gap-3">
                <div>
                  <h3 className="font-bold text-lg">Revenue Overview</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Monthly revenue performance
                  </p>
                </div>

                <select className="bg-[#1b2440] border border-white/10 rounded-lg px-3 py-2 text-xs outline-none">
                  <option>Last 7 months</option>
                  <option>Last 30 days</option>
                  <option>This year</option>
                </select>
              </div>

              <div className="flex items-end justify-between gap-2 h-56 mt-8 border-b border-white/10">
                {[45, 65, 40, 80, 55, 95, 72].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 flex flex-col justify-end items-center h-full gap-3"
                  >
                    <div
                      style={{ height: `${height}%` }}
                      className="w-full max-w-12 rounded-t-lg bg-gradient-to-t from-purple-700 to-blue-400 hover:opacity-80 transition"
                    />
                    <span className="text-[10px] sm:text-xs text-gray-500">
                      {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"][index]}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-gray-400 text-xs">Revenue growth</span>
              </div>
            </div>

            {/* Activity */}
            <div className="bg-[#11182c] border border-white/10 rounded-2xl p-5 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg">Recent Activity</h3>
                <FiMoreHorizontal className="text-gray-400 text-xl" />
              </div>

              <div className="space-y-6">
                {activities.map((activity, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center">
                      {activity.icon}
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold">{activity.title}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {activity.desc}
                      </p>
                      <p className="text-[10px] text-gray-500 mt-2">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-7 py-3 rounded-lg border border-white/10 text-xs text-purple-300 hover:bg-white/5">
                View All Activity
              </button>
            </div>
          </div>

          {/* Projects Table */}
          <div className="bg-[#11182c] border border-white/10 rounded-2xl overflow-hidden">
            <div className="p-5 sm:p-6 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">Recent Projects</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Manage your latest projects
                </p>
              </div>

              <button className="text-purple-400 text-sm flex items-center gap-2">
                View All <FiArrowUpRight />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] text-left">
                <thead className="bg-white/5 text-xs text-gray-400">
                  <tr>
                    <th className="px-6 py-4">PROJECT NAME</th>
                    <th className="px-6 py-4">CATEGORY</th>
                    <th className="px-6 py-4">PROGRESS</th>
                    <th className="px-6 py-4">STATUS</th>
                    <th className="px-6 py-4">ACTION</th>
                  </tr>
                </thead>

                <tbody>
                  {projects.map((project) => (
                    <tr
                      key={project.name}
                      className="border-t border-white/5 hover:bg-white/[0.02]"
                    >
                      <td className="px-6 py-5 font-medium text-sm">
                        {project.name}
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-400">
                        {project.category}
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-24 h-1.5 rounded-full bg-white/10 overflow-hidden">
                            <div
                              style={{ width: `${project.progress}%` }}
                              className={`h-full rounded-full ${project.color}`}
                            />
                          </div>
                          <span className="text-xs text-gray-400">
                            {project.progress}%
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`text-xs px-3 py-1.5 rounded-full ${
                            project.status === "Completed"
                              ? "bg-emerald-500/10 text-emerald-400"
                              : project.status === "Pending"
                                ? "bg-orange-500/10 text-orange-400"
                                : "bg-blue-500/10 text-blue-400"
                          }`}
                        >
                          {project.status}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-gray-400">
                        <button>
                          <FiMoreHorizontal />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-xs text-gray-600 pb-3">
            © 2026 AuraTech Admin Dashboard. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
