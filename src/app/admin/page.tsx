'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { CheckCircle, XCircle, Clock, DollarSign, Music, Package, TrendingUp } from 'lucide-react';

interface Submission {
  id: string;
  title: string;
  artist_name: string;
  genre: string;
  status: 'received' | 'under_review' | 'approved' | 'published';
  created_at: string;
  priority: boolean;
}

interface PromoOrder {
  id: string;
  package: string;
  artist_name: string;
  amount: number;
  status: string;
  created_at: string;
  deliverables: Array<{ task: string; completed: boolean }>;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'submissions' | 'promo' | 'merch' | 'reports'>('submissions');
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [promoOrders, setPromoOrders] = useState<PromoOrder[]>([]);

  useEffect(() => {
    setSubmissions([
      {
        id: '1',
        title: 'Summer Vibes EP',
        artist_name: 'DJ Heatwave',
        genre: 'hip-hop',
        status: 'received',
        created_at: '2024-08-15T10:30:00Z',
        priority: true
      },
      {
        id: '2',
        title: 'Midnight Dreams',
        artist_name: 'Luna Rose',
        genre: 'r&b',
        status: 'under_review',
        created_at: '2024-08-14T15:45:00Z',
        priority: false
      },
      {
        id: '3',
        title: 'City Lights',
        artist_name: 'Urban Poet',
        genre: 'rap',
        status: 'approved',
        created_at: '2024-08-13T09:20:00Z',
        priority: false
      }
    ]);

    setPromoOrders([
      {
        id: '1',
        package: 'ig_post',
        artist_name: 'Rising Star',
        amount: 50,
        status: 'paid',
        created_at: '2024-08-15T12:00:00Z',
        deliverables: [
          { task: 'Create Instagram post', completed: false },
          { task: 'Add to story highlights', completed: false }
        ]
      },
      {
        id: '2',
        package: 'album_rollout',
        artist_name: 'Major Artist',
        amount: 2500,
        status: 'paid',
        created_at: '2024-08-14T14:30:00Z',
        deliverables: [
          { task: 'Premiere post', completed: true },
          { task: 'Instagram Reels', completed: false },
          { task: 'Podcast booking', completed: false },
          { task: 'Playlist placement', completed: false }
        ]
      }
    ]);
  }, []);

  const handleApproveSubmission = (id: string) => {
    setSubmissions(prev => prev.map(sub => 
      sub.id === id ? { ...sub, status: 'approved' as const } : sub
    ));
  };

  const handleDeclineSubmission = (id: string) => {
    setSubmissions(prev => prev.filter(sub => sub.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'received': return 'text-yellow-400';
      case 'under_review': return 'text-blue-400';
      case 'approved': return 'text-green-400';
      case 'published': return 'text-orange';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'received': return <Clock size={16} />;
      case 'under_review': return <Clock size={16} className="animate-spin" />;
      case 'approved': return <CheckCircle size={16} />;
      case 'published': return <TrendingUp size={16} />;
      default: return <Clock size={16} />;
    }
  };

  return (
    <div className="min-h-screen bg-juice-black">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-display font-black ju-hero mb-4">
              Admin Dashboard
            </h1>
            <p className="text-xl text-gray-300">
              Manage submissions, orders, and platform content
            </p>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 mb-8 bg-white/5 p-1 rounded-lg">
            {[
              { id: 'submissions', label: 'Submissions', icon: Music },
              { id: 'promo', label: 'Promo Orders', icon: TrendingUp },
              { id: 'merch', label: 'Merch Orders', icon: Package },
              { id: 'reports', label: 'Reports', icon: DollarSign }
            ].map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'submissions' | 'promo' | 'merch' | 'reports')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-orange text-juice-black'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <IconComponent size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Submissions Tab */}
          {activeTab === 'submissions' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-display font-bold text-white">Music Submissions</h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-orange/20 text-orange rounded-lg font-medium">
                    Priority First
                  </button>
                  <select className="bg-white/10 border border-orange/30 rounded-lg px-4 py-2 text-white">
                    <option>All Status</option>
                    <option>Received</option>
                    <option>Under Review</option>
                    <option>Approved</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4">
                {submissions.map((submission) => (
                  <div key={submission.id} className="card">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange to-pulp-yellow rounded-lg flex items-center justify-center">
                          <Music className="text-juice-black" size={24} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-bold text-white">{submission.title}</h3>
                            {submission.priority && (
                              <div className="chip bg-red-500 text-white text-xs">PRIORITY</div>
                            )}
                          </div>
                          <p className="text-gray-400">{submission.artist_name}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="chip bg-gray-600 text-white text-xs">{submission.genre}</span>
                            <span className={`flex items-center gap-1 text-sm ${getStatusColor(submission.status)}`}>
                              {getStatusIcon(submission.status)}
                              {submission.status.replace('_', ' ').toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {submission.status === 'received' && (
                          <>
                            <button
                              onClick={() => handleApproveSubmission(submission.id)}
                              className="flex items-center gap-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                            >
                              <CheckCircle size={16} />
                              Approve
                            </button>
                            <button
                              onClick={() => handleDeclineSubmission(submission.id)}
                              className="flex items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                            >
                              <XCircle size={16} />
                              Decline
                            </button>
                          </>
                        )}
                        {submission.status === 'approved' && (
                          <button className="px-4 py-2 bg-orange hover:bg-orange/80 text-juice-black rounded-lg font-medium transition-colors">
                            Publish
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Promo Orders Tab */}
          {activeTab === 'promo' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-display font-bold text-white">Promo Orders</h2>
                <div className="flex gap-2">
                  <select className="bg-white/10 border border-orange/30 rounded-lg px-4 py-2 text-white">
                    <option>All Packages</option>
                    <option>Instagram Post</option>
                    <option>Instagram Story</option>
                    <option>Podcast</option>
                    <option>Album Rollout</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4">
                {promoOrders.map((order) => (
                  <div key={order.id} className="card">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-leaf-green to-orange rounded-lg flex items-center justify-center">
                          <TrendingUp className="text-juice-black" size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{order.package.replace('_', ' ').toUpperCase()}</h3>
                          <p className="text-gray-400">{order.artist_name}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-orange font-bold">${order.amount}</span>
                            <span className="chip bg-green-600 text-white text-xs">{order.status.toUpperCase()}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-sm text-gray-400">
                          {new Date(order.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="text-white font-medium mb-3">Deliverables</h4>
                      <div className="space-y-2">
                        {order.deliverables.map((deliverable, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={deliverable.completed}
                              className="w-4 h-4 text-orange bg-white/10 border-orange/30 rounded focus:ring-orange"
                              readOnly
                            />
                            <span className={`text-sm ${deliverable.completed ? 'text-green-400 line-through' : 'text-gray-300'}`}>
                              {deliverable.task}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === 'reports' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-bold text-white">Reports &amp; Analytics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card text-center">
                  <DollarSign className="text-orange mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-white mb-2">$3,250</h3>
                  <p className="text-gray-400">Total Revenue (This Month)</p>
                </div>
                
                <div className="card text-center">
                  <Music className="text-orange mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-white mb-2">47</h3>
                  <p className="text-gray-400">Submissions (This Month)</p>
                </div>
                
                <div className="card text-center">
                  <TrendingUp className="text-orange mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-white mb-2">1.2M</h3>
                  <p className="text-gray-400">Total Streams</p>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-white mb-4">Revenue by Source</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Promo Services</span>
                    <span className="text-orange font-bold">$2,800 (86%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Priority Reviews</span>
                    <span className="text-orange font-bold">$290 (9%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Merchandise</span>
                    <span className="text-orange font-bold">$160 (5%)</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
