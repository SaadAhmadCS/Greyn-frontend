'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

type RoleTab = 'user' | 'ngo' | 'corporate' | 'carbon' | 'admin';

const HowItWorksPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<RoleTab>('user');

  // Check if user came from auth page with a role parameter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const role = params.get('role');
    if (role === 'simple-user' || role === 'investor') setActiveTab('user');
    else if (role === 'ngo') setActiveTab('ngo');
    else if (role === 'corporate') setActiveTab('corporate');
    else if (role === 'carbon') setActiveTab('carbon');
    else if (role === 'admin') setActiveTab('admin');
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const tabs = [
    { id: 'user' as RoleTab, label: 'User', icon: '👤' },
    { id: 'ngo' as RoleTab, label: 'NGO', icon: '🌱' },
    { id: 'corporate' as RoleTab, label: 'Corporate ESG', icon: '🏢' },
    { id: 'carbon' as RoleTab, label: 'Carbon Credit', icon: '🌍' },
    { id: 'admin' as RoleTab, label: 'Admin & Verification', icon: '🛡' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <main className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              The Greyn Ecosystem
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Greyn operates through five interconnected portals — creating a fully transparent 
              climate infrastructure for verified global impact.
            </p>
          </div>

          {/* Role Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    scrollToSection(`section-${tab.id}`);
                  }}
                  className={`flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 shadow hover:shadow-md'
                  }`}
                >
                  <span className="text-xl">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* User Section */}
          <section
            id="section-user"
            className={`mb-16 rounded-2xl bg-white p-8 shadow-xl transition-all ${
              activeTab === 'user' ? 'border-2 border-green-500' : 'border border-gray-200'
            }`}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-3xl">
                👤
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">User Climate Action Portal</h2>
                <p className="text-gray-600">Climate Action for Everyone</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Greyn empowers individuals to participate in verified climate initiatives through a
                transparent digital platform. Greyn transforms everyday actions into measurable environmental progress.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl bg-green-50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
                    1
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Support Eco-Projects</h3>
                  <p className="text-gray-600">
                    Support certified eco-projects and contribute to verified environmental 
                    initiatives around the world.
                  </p>
                </div>

                <div className="rounded-xl bg-green-50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
                    2
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Earn CO₂ Credits</h3>
                  <p className="text-gray-600">
                    Earn CO₂ credits by planting trees, recycling, or volunteering. 
                    Join global sustainability challenges to maximize your impact.
                  </p>
                </div>

                <div className="rounded-xl bg-green-50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
                    3
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Track & Redeem</h3>
                  <p className="text-gray-600">
                    Track personal impact through real-time dashboards and redeem 
                    eco-rewards made from recycled materials.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-blue-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">User Portal Features</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-green-600">✓</span>
                    <span><strong>Eco-Projects:</strong> Support certified environmental initiatives worldwide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-green-600">✓</span>
                    <span><strong>Global Challenges:</strong> Join sustainability challenges and compete globally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-green-600">✓</span>
                    <span><strong>Impact Dashboard:</strong> Track your personal environmental impact in real-time</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* NGO Section */}
          <section
            id="section-ngo"
            className={`mb-16 rounded-2xl bg-white p-8 shadow-xl transition-all ${
              activeTab === 'ngo' ? 'border-2 border-green-500' : 'border border-gray-200'
            }`}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-3xl">
                🌱
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">NGO Transparency & Fundraising Portal</h2>
                <p className="text-gray-600">Transparency & Fundraising at Scale</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Greyn provides NGOs with a secure climate-tech infrastructure to manage projects and
                demonstrate measurable impact. Greyn builds trust by ensuring every project is transparent and verifiable.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl bg-emerald-50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-2xl font-bold text-white">
                    1
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Launch Campaigns</h3>
                  <p className="text-gray-600">
                    Launch climate and sustainability campaigns. Receive donations 
                    from corporates and individuals globally.
                  </p>
                </div>

                <div className="rounded-xl bg-emerald-50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-2xl font-bold text-white">
                    2
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Upload Evidence</h3>
                  <p className="text-gray-600">
                    Upload geo-tagged project evidence and apply for carbon credit 
                    certification through the MRV verification system.
                  </p>
                </div>

                <div className="rounded-xl bg-emerald-50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-2xl font-bold text-white">
                    3
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Track & Report</h3>
                  <p className="text-gray-600">
                    Track impact through automated reporting dashboards. 
                    Manage volunteers and climate events efficiently.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-blue-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">NGO Portal Features</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-emerald-600">✓</span>
                    <span><strong>Carbon Certification:</strong> Apply for carbon credit certification with full transparency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-emerald-600">✓</span>
                    <span><strong>Geo-Tagged Evidence:</strong> Upload verified project evidence with location data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-emerald-600">✓</span>
                    <span><strong>Automated Reporting:</strong> Track impact through real-time dashboards and analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Corporate ESG Section */}
          <section
            id="section-corporate"
            className={`mb-16 rounded-2xl bg-white p-8 shadow-xl transition-all ${
              activeTab === 'corporate' ? 'border-2 border-blue-500' : 'border border-gray-200'
            }`}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-3xl">
                🏢
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Corporate ESG Reporting Portal</h2>
                <p className="text-gray-600">Measure. Report. Prove Your Impact.</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Greyn provides corporations with a powerful ESG reporting system integrated into a broader
                climate ecosystem. Greyn replaces fragmented ESG tools with one unified platform.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl bg-blue-50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                    1
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Measure Emissions</h3>
                  <p className="text-gray-600">
                    Measure Scope 1, 2, and 3 emissions. Track sustainability KPIs 
                    across your entire organization.
                  </p>
                </div>

                <div className="rounded-xl bg-blue-50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                    2
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Engage & Offset</h3>
                  <p className="text-gray-600">
                    Manage corporate social campaigns, engage employees through green 
                    challenges, and purchase verified carbon credits.
                  </p>
                </div>

                <div className="rounded-xl bg-blue-50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                    3
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Generate Reports</h3>
                  <p className="text-gray-600">
                    Generate audit-ready ESG compliance reports. Retire verified carbon 
                    credits and prove your sustainability impact.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-blue-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">Corporate ESG Features</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-600">✓</span>
                    <span><strong>Scope 1-3 Emissions:</strong> Comprehensive carbon footprint measurement and tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-600">✓</span>
                    <span><strong>Green Challenges:</strong> Engage employees through sustainability challenges and campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-600">✓</span>
                    <span><strong>Audit-Ready Reports:</strong> Generate ESG compliance reports for regulatory and stakeholder review</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Carbon Credit Section */}
          <section
            id="section-carbon"
            className={`mb-16 rounded-2xl bg-white p-8 shadow-xl transition-all ${
              activeTab === 'carbon' ? 'border-2 border-amber-500' : 'border border-gray-200'
            }`}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-3xl">
                🌍
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Carbon Credit Marketplace</h2>
                <p className="text-gray-600">Verified Carbon Credits with Full Traceability</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Greyn connects climate projects with global carbon markets through a transparent digital
                infrastructure. One credit equals one verified ton of CO₂ reduced. No greenwashing. Only measurable impact.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl bg-amber-50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-2xl font-bold text-white">
                    1
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Project Onboarding</h3>
                  <p className="text-gray-600">
                    NGO climate projects are onboarded and verified through MRV-based 
                    validation including geo-tagging, audit logs, and satellite validation.
                  </p>
                </div>

                <div className="rounded-xl bg-amber-50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-2xl font-bold text-white">
                    2
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Credit Issuance</h3>
                  <p className="text-gray-600">
                    Digital carbon credits are issued upon verification. Each credit 
                    represents one verified ton of CO₂ reduced or offset.
                  </p>
                </div>

                <div className="rounded-xl bg-amber-50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-2xl font-bold text-white">
                    3
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Purchase & Retire</h3>
                  <p className="text-gray-600">
                    Corporations purchase and retire verified carbon credits with 
                    official offset certification and complete traceability.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-blue-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">Carbon Marketplace Features</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-amber-600">✓</span>
                    <span><strong>MRV Verification:</strong> Geo-tagging, audit logs, and satellite validation for every project</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-amber-600">✓</span>
                    <span><strong>Full Traceability:</strong> Complete chain from project to buyer with transparent documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-amber-600">✓</span>
                    <span><strong>Offset Certification:</strong> Official carbon offset certificates for regulatory compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Admin & Verification Section */}
          <section
            id="section-admin"
            className={`mb-16 rounded-2xl bg-white p-8 shadow-xl transition-all ${
              activeTab === 'admin' ? 'border-2 border-red-500' : 'border border-gray-200'
            }`}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-rose-500 text-3xl">
                🛡
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Admin & Verification System</h2>
                <p className="text-gray-600">Trust Is the Infrastructure</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Greyn&apos;s Admin & Verification system ensures ecosystem-wide transparency and integrity.
                Greyn is not just a platform. It is a verification engine for global climate impact.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl bg-red-50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-2xl font-bold text-white">
                    1
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Account Approval</h3>
                  <p className="text-gray-600">
                    NGO and corporate account approval with thorough credential 
                    verification to ensure ecosystem authenticity.
                  </p>
                </div>

                <div className="rounded-xl bg-red-50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-2xl font-bold text-white">
                    2
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Project Validation</h3>
                  <p className="text-gray-600">
                    Climate project validation and fraud detection monitoring to 
                    maintain the highest standards of integrity.
                  </p>
                </div>

                <div className="rounded-xl bg-red-50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-2xl font-bold text-white">
                    3
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Compliance Oversight</h3>
                  <p className="text-gray-600">
                    Carbon credit compliance oversight and data integrity protection 
                    across the entire ecosystem.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-blue-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">Verification Features</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-red-600">✓</span>
                    <span><strong>Fraud Detection:</strong> Advanced monitoring systems to detect and prevent fraudulent activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-red-600">✓</span>
                    <span><strong>Compliance Management:</strong> Carbon credit compliance oversight and regulatory alignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-red-600">✓</span>
                    <span><strong>Data Integrity:</strong> Ecosystem-wide data protection and audit trail maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 p-8 text-center text-white shadow-xl">
            <h2 className="mb-4 text-3xl font-bold">Ready to Join the Ecosystem?</h2>
            <p className="mb-6 text-lg opacity-90">
              Be part of the verified climate action infrastructure powering global impact
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/auth"
                className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-green-600 transition-all hover:scale-105 hover:shadow-lg"
              >
                Explore the Ecosystem
              </Link>
              <Link
                href="/contact"
                className="inline-block rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:bg-white hover:text-green-600"
              >
                Partner With Greyn
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
