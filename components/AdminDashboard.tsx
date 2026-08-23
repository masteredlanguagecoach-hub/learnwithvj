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
} from 'lucide-react';
import { formatINR } from '@/lib/utils';

export default function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  const [registrations, setRegistrations] = useState<any[]>([]);
  const [analytics, setAnalytics] = useState({
    totalStudents: 0,
    totalRevenue: 0,
    todaySales: 0,
    todayRevenue: 0,
    pendingCount: 0,
  });

  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [professionFilter, setProfessionFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');

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
  }, [search, professionFilter, statusFilter, authenticated]);

  const handleDownloadCSV = () => {
    const query = new URLSearchParams();
    if (search) query.append('search', search);
    if (professionFilter !== 'ALL') query.append('profession', professionFilter);
    if (statusFilter !== 'ALL') query.append('status', statusFilter);
    query.append('format', 'csv');

    window.open(`/api/admin/registrations?${query.toString()}`, '_blank');
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
            <h1 className="text-2xl font-extrabold text-white mt-1">Registrations & Analytics</h1>
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
              <span>Export CSV</span>
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

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Total Revenue */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6">
            <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
              <span>Total Revenue</span>
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-white">{formatINR(analytics.totalRevenue)}</div>
            <span className="text-xs text-emerald-400 font-semibold block mt-1">Verified Razorpay Payments</span>
          </div>

          {/* Total Students */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6">
            <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
              <span>Paid Students</span>
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-white">{analytics.totalStudents}</div>
            <span className="text-xs text-blue-400 font-semibold block mt-1">Confirmed Enrolled</span>
          </div>

          {/* Today's Sales */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6">
            <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
              <span>Today's Sales</span>
              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-white">{analytics.todaySales} Students</div>
            <span className="text-xs text-indigo-400 font-semibold block mt-1">Revenue: {formatINR(analytics.todayRevenue)}</span>
          </div>

          {/* Pending / Failed */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6">
            <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
              <span>Pending Orders</span>
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-amber-400">{analytics.pendingCount}</div>
            <span className="text-xs text-amber-400/80 font-semibold block mt-1">Awaiting Payment</span>
          </div>
        </div>

        {/* Filters & Data Table */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-6">
          
          {/* Controls Header */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search name, email, problem..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <select
                value={professionFilter}
                onChange={(e) => setProfessionFilter(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none"
              >
                <option value="ALL">All Professions</option>
                <option value="Business Owner">Business Owner</option>
                <option value="Student">Student</option>
                <option value="Office Staff / Analyst">Office Staff</option>
                <option value="Manager / Team Lead">Manager</option>
                <option value="HR Professional">HR Professional</option>
                <option value="Freelancer / Consultant">Freelancer</option>
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none"
              >
                <option value="ALL">All Statuses</option>
                <option value="SUCCESS">SUCCESS</option>
                <option value="PENDING">PENDING</option>
              </select>
            </div>

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
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-950/60">
                {registrations.length === 0 ? (
                  <tr>
                    <td colSpan={11} className="p-8 text-center text-slate-500">
                      No registration records found.
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
