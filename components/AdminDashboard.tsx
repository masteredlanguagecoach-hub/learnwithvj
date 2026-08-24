'use client';

import React, { useState, useEffect } from 'react';
import {
  Lock,
  Search,
  Download,
  RefreshCw,
  Users,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  LogOut,
  Calendar,
  X,
  Filter,
  BarChart3,
  MessageSquare,
  ExternalLink,
} from 'lucide-react';
import { formatINR } from '@/lib/utils';

export default function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  const [registrations, setRegistrations] = useState<any[]>([]);
  const [analytics, setAnalytics] = useState<any>({
    allTime: {
      totalStudents: 0,
      totalRevenue: 0,
      todaySales: 0,
      todayRevenue: 0,
      pendingCount: 0,
    },
    filtered: {
      periodLabel: 'All Time',
      totalRecords: 0,
      studentsCount: 0,
      amountCollected: 0,
      pendingCount: 0,
    },
  });

  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [professionFilter, setProfessionFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [datePreset, setDatePreset] = useState('ALL');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    // Check if session token exists
    const stored = localStorage.getItem('veeje_admin_authed');
    if (stored === 'true') {
      setAuthenticated(true);
      fetchData();
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setAuthenticated(true);
        localStorage.setItem('veeje_admin_authed', 'true');
        fetchData();
      } else {
        setLoginError(data.message || 'Invalid Password');
      }
    } catch (err: any) {
      setLoginError('Server error during authentication');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem('veeje_admin_authed');
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams();
      if (search) query.append('search', search);
      if (professionFilter !== 'ALL') query.append('profession', professionFilter);
      if (statusFilter !== 'ALL') query.append('status', statusFilter);
      if (datePreset !== 'ALL') query.append('datePreset', datePreset);
      if (datePreset === 'CUSTOM') {
        if (startDate) query.append('startDate', startDate);
        if (endDate) query.append('endDate', endDate);
      }

      const res = await fetch(`/api/admin/registrations?${query.toString()}`);
      const data = await res.json();

      if (res.ok && data.success) {
        setRegistrations(data.registrations || []);
        if (data.analytics) {
          setAnalytics(data.analytics);
        }
      }
    } catch (err) {
      console.error('Error fetching admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authenticated) {
      fetchData();
    }
  }, [search, professionFilter, statusFilter, datePreset, startDate, endDate, authenticated]);

  const handleResetFilters = () => {
    setSearch('');
    setProfessionFilter('ALL');
    setStatusFilter('ALL');
    setDatePreset('ALL');
    setStartDate('');
    setEndDate('');
  };

  const handleDownloadCSV = () => {
    const query = new URLSearchParams();
    if (search) query.append('search', search);
    if (professionFilter !== 'ALL') query.append('profession', professionFilter);
    if (statusFilter !== 'ALL') query.append('status', statusFilter);
    if (datePreset !== 'ALL') query.append('datePreset', datePreset);
    if (datePreset === 'CUSTOM') {
      if (startDate) query.append('startDate', startDate);
      if (endDate) query.append('endDate', endDate);
    }
    query.append('format', 'csv');

    window.open(`/api/admin/registrations?${query.toString()}`, '_blank');
  };

  const getStudentWhatsAppUrl = (reg: any) => {
    let rawPhone = String(reg.phone || '').replace(/\D/g, '');
    if (rawPhone.length === 10) {
      rawPhone = '91' + rawPhone;
    }

    const text = `Hi ${reg.name || 'Student'} 👋,\n\nYour registration for the AI Business System Design Masterclass is confirmed! 🎉\n\n🗓️ Next Session Date: September 1, 2026\n⏱️ Duration: 2 Hours 30 Minutes (Live Online)\n\nRegistration ID: ${reg.registrationId}\nPayment ID: ${reg.paymentId || 'N/A'}\n\nPlease ensure you have joined our official student WhatsApp group for live Google Meet links & dashboard templates:\nhttps://chat.whatsapp.com/H5MZSMLnKy07SlM5EGWOnc\n\nSee you in the live masterclass!\n— Veeje | Learn with Veeje`;

    return `https://wa.me/${rawPhone}?text=${encodeURIComponent(text)}`;
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-md w-full shadow-2xl">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto mb-4">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-extrabold text-white text-center mb-1">Admin Portal Login</h2>
          <p className="text-slate-400 text-xs text-center mb-6">Enter secret admin password to access registrations</p>

          {loginError && (
            <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Secret Password</label>
              <input
                type="password"
                placeholder="Enter password..."
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loginLoading ? 'Authenticating...' : 'Unlock Admin Panel'}
            </button>
          </form>
          <div className="mt-4 text-center">
            <a href="/" className="text-xs text-slate-400 hover:text-slate-200">
              ← Return to Main Website
            </a>
          </div>
        </div>
      </div>
    );
  }

  const isFiltered = search || professionFilter !== 'ALL' || statusFilter !== 'ALL' || datePreset !== 'ALL';
  const filteredData = analytics.filtered || {};
  const allTimeData = analytics.allTime || {};

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900/80 border border-slate-800 p-6 rounded-3xl">
          <div>
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                ADMIN CONSOLE
              </span>
              <span className="text-xs text-slate-400 font-mono">Learn with Veeje</span>
            </div>
            <h1 className="text-2xl font-extrabold text-white mt-1">Registrations & WhatsApp Outreach</h1>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={fetchData}
              className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={handleDownloadCSV}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Export Sales Report CSV</span>
            </button>
            <button
              onClick={handleLogout}
              className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-rose-400 hover:bg-rose-500/10 transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Sales Report Summary Banner */}
        <div className="bg-gradient-to-r from-blue-950/90 via-slate-900 to-indigo-950/90 border border-blue-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center space-x-2 text-sky-400 text-xs font-bold uppercase tracking-wider mb-2">
                <BarChart3 className="w-4 h-4 text-sky-400" />
                <span>Sales Report Summary • {filteredData.periodLabel || 'All Time'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {formatINR(filteredData.amountCollected || 0)}
              </h2>
              <p className="text-slate-300 text-sm mt-1">
                Total Amount Collected from <strong>{filteredData.studentsCount || 0} Paid Students</strong> for this filter.
              </p>
            </div>

            {/* Quick Report Metric Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full md:w-auto">
              {/* Student Count */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-center">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Students Count</span>
                <span className="text-2xl font-black text-emerald-400">{filteredData.studentsCount || 0}</span>
                <span className="text-[10px] text-slate-500 block">Enrolled</span>
              </div>

              {/* Amount Collected */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-center">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Amount Collected</span>
                <span className="text-2xl font-black text-white">{formatINR(filteredData.amountCollected || 0)}</span>
                <span className="text-[10px] text-emerald-400 block font-semibold">Razorpay Verified</span>
              </div>

              {/* Pending Orders */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-center col-span-2 sm:col-span-1">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Pending Orders</span>
                <span className="text-2xl font-black text-amber-400">{filteredData.pendingCount || 0}</span>
                <span className="text-[10px] text-slate-500 block">Awaiting</span>
              </div>
            </div>
          </div>
        </div>

        {/* All-Time Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Total Revenue */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6">
            <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
              <span>All-Time Revenue</span>
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-white">{formatINR(allTimeData.totalRevenue || 0)}</div>
            <span className="text-xs text-emerald-400 font-semibold block mt-1">Total Lifetime Collected</span>
          </div>

          {/* Total Students */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6">
            <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
              <span>All-Time Paid Students</span>
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-white">{allTimeData.totalStudents || 0}</div>
            <span className="text-xs text-blue-400 font-semibold block mt-1">Confirmed Lifetime Enrolled</span>
          </div>

          {/* Today's Sales */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6">
            <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
              <span>Today's Sales</span>
              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-white">{allTimeData.todaySales || 0} Students</div>
            <span className="text-xs text-indigo-400 font-semibold block mt-1">Revenue: {formatINR(allTimeData.todayRevenue || 0)}</span>
          </div>

          {/* Pending / Failed */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6">
            <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
              <span>Pending Orders</span>
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-amber-400">{allTimeData.pendingCount || 0}</div>
            <span className="text-xs text-amber-400/80 font-semibold block mt-1">Awaiting Payment</span>
          </div>
        </div>

        {/* Filters & Data Table Container */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-6">
          
          {/* Advanced Date & Filter Bar */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
                <Filter className="w-4 h-4 text-sky-400" />
                <span>Filter Sales Data</span>
              </div>
              {isFiltered && (
                <button
                  onClick={handleResetFilters}
                  className="text-xs text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1 bg-rose-500/10 border border-rose-500/20 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>

            {/* Filter Controls Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
              
              {/* Search Box */}
              <div className="lg:col-span-4 relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search name, email, phone, city..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Date Preset Selector */}
              <div className="lg:col-span-3 relative">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 text-sky-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={datePreset}
                    onChange={(e) => setDatePreset(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-blue-500 font-medium cursor-pointer"
                  >
                    <option value="ALL">📅 Date Range: All Time</option>
                    <option value="TODAY">📅 Today</option>
                    <option value="YESTERDAY">📅 Yesterday</option>
                    <option value="WEEKLY">📅 This Week (Last 7 Days)</option>
                    <option value="MONTHLY">📅 This Month (Last 30 Days)</option>
                    <option value="YEARLY">📅 This Year (Last 365 Days)</option>
                    <option value="CUSTOM">🗓️ Custom Date Range (Date to Date)</option>
                  </select>
                </div>
              </div>

              {/* Profession Filter */}
              <div className="lg:col-span-3">
                <select
                  value={professionFilter}
                  onChange={(e) => setProfessionFilter(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  <option value="ALL">All Professions</option>
                  <option value="Business Owner">Business Owner</option>
                  <option value="Student">Student</option>
                  <option value="Office Staff / Analyst">Office Staff</option>
                  <option value="Manager / Team Lead">Manager</option>
                  <option value="HR Professional">HR Professional</option>
                  <option value="Freelancer / Consultant">Freelancer</option>
                </select>
              </div>

              {/* Status Filter */}
              <div className="lg:col-span-2">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  <option value="ALL">All Statuses</option>
                  <option value="SUCCESS">SUCCESS</option>
                  <option value="PENDING">PENDING</option>
                </select>
              </div>

            </div>

            {/* Custom Date-to-Date Inputs (shown when datePreset === 'CUSTOM') */}
            {datePreset === 'CUSTOM' && (
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-wrap items-center gap-4 text-xs">
                <div className="flex items-center space-x-2">
                  <span className="text-slate-400 font-bold">Start Date:</span>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500 font-mono"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-slate-400 font-bold">End Date:</span>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500 font-mono"
                  />
                </div>

                <span className="text-slate-400 italic">Showing sales report from {startDate || 'Beginning'} to {endDate || 'Today'}</span>
              </div>
            )}

          </div>

          {/* Registrations Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-slate-400 uppercase font-bold text-[10px] tracking-wider border-b border-slate-800">
                <tr>
                  <th className="p-4">Reg ID</th>
                  <th className="p-4">Date / Time</th>
                  <th className="p-4">Student Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Phone</th>
                  <th className="p-4">City</th>
                  <th className="p-4">Profession</th>
                  <th className="p-4">Problem To Solve</th>
                  <th className="p-4">Payment ID</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-center">WhatsApp Direct</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-950/60">
                {registrations.length === 0 ? (
                  <tr>
                    <td colSpan={12} className="p-8 text-center text-slate-500">
                      No registration records found for the selected filter criteria.
                    </td>
                  </tr>
                ) : (
                  registrations.map((reg) => (
                    <tr key={reg.registrationId} className="hover:bg-slate-900/50 transition-colors">
                      <td className="p-4 font-mono text-sky-400 font-bold">{reg.registrationId}</td>
                      <td className="p-4 whitespace-nowrap text-slate-400">
                        {reg.date} <span className="text-[10px] block text-slate-500">{reg.time}</span>
                      </td>
                      <td className="p-4 font-bold text-white whitespace-nowrap">{reg.name}</td>
                      <td className="p-4 text-slate-300">{reg.email}</td>
                      <td className="p-4 font-mono">{reg.phone}</td>
                      <td className="p-4">{reg.city}</td>
                      <td className="p-4">{reg.profession}</td>
                      <td className="p-4 max-w-xs truncate text-amber-300" title={reg.problemToSolve}>
                        {reg.problemToSolve || '—'}
                      </td>
                      <td className="p-4 font-mono text-slate-400">{reg.paymentId || '—'}</td>
                      <td className="p-4 font-bold text-emerald-400">₹{reg.amount}</td>
                      <td className="p-4">
                        {reg.status === 'SUCCESS' ? (
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 inline-flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> SUCCESS
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 inline-flex items-center gap-1">
                            <Clock className="w-3 h-3" /> PENDING
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-center whitespace-nowrap">
                        <a
                          href={getStudentWhatsAppUrl(reg)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30 hover:text-white font-bold text-[11px] transition-all shadow-sm group"
                          title={`Send WhatsApp confirmation message to ${reg.name}`}
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                          <span>WhatsApp Me</span>
                          <ExternalLink className="w-3 h-3 text-emerald-400/70" />
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </div>
  );
}
