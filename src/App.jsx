import React, { useState, useEffect, useMemo } from 'react';

// ==========================================
// 100% NATIVE INLINE HIGH-TECH SVG ICONS
// Bypasses all lucide-react module resolution issues
// ==========================================
const Icon = ({ name, className = "h-4 w-4 inline-block" }) => {
  const baseSvg = "fill-none stroke-current stroke-2 stroke-round ";
  
  switch(name) {
    case 'cpu':
      return (
        <svg className={`${baseSvg} ${className}`} viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
        </svg>
      );
    case 'layers':
      return (
        <svg className={`${baseSvg} ${className}`} viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case 'sparkles':
      return (
        <svg className={`${baseSvg} ${className}`} viewBox="0 0 24 24">
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.3-6.3l-.7.7M6.7 17.3l-.7.7m12.6 0l-.7-.7M6.7 6.7l-.7-.7M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      );
    case 'calculator':
      return (
        <svg className={`${baseSvg} ${className}`} viewBox="0 0 24 24">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="8" y1="6" x2="16" y2="6" />
          <line x1="16" y1="14" x2="16" y2="18" />
          <path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M8 18h.01M12 18h.01" />
        </svg>
      );
    case 'code':
      return (
        <svg className={`${baseSvg} ${className}`} viewBox="0 0 24 24">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      );
    case 'search':
      return (
        <svg className={`${baseSvg} ${className}`} viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case 'refresh':
      return (
        <svg className={`${baseSvg} ${className}`} viewBox="0 0 24 24">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 11-.57-8.38l5.67-5.67" />
        </svg>
      );
    case 'sliders':
      return (
        <svg className={`${baseSvg} ${className}`} viewBox="0 0 24 24">
          <line x1="4" y1="21" x2="4" y2="14" />
          <line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" />
          <line x1="20" y1="12" x2="20" y2="3" />
          <line x1="1" y1="14" x2="7" y2="14" />
          <line x1="9" y1="8" x2="15" y2="8" />
          <line x1="17" y1="16" x2="23" y2="16" />
        </svg>
      );
    case 'dollar':
      return (
        <svg className={`${baseSvg} ${className}`} viewBox="0 0 24 24">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      );
    case 'trending-down':
      return (
        <svg className={`${baseSvg} ${className}`} viewBox="0 0 24 24">
          <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
          <polyline points="17 18 23 18 23 12" />
        </svg>
      );
    case 'activity':
      return (
        <svg className={`${baseSvg} ${className}`} viewBox="0 0 24 24">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );
    case 'shield':
      return (
        <svg className={`${baseSvg} ${className}`} viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'database':
      return (
        <svg className={`${baseSvg} ${className}`} viewBox="0 0 24 24">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case 'external-link':
      return (
        <svg className={`${baseSvg} ${className}`} viewBox="0 0 24 24">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
        </svg>
      );
    case 'copy':
      return (
        <svg className={`${baseSvg} ${className}`} viewBox="0 0 24 24">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
        </svg>
      );
    case 'trash':
      return (
        <svg className={`${baseSvg} ${className}`} viewBox="0 0 24 24">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
      );
    case 'plus':
      return (
        <svg className={`${baseSvg} ${className}`} viewBox="0 0 24 24">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      );
    case 'info':
      return (
        <svg className={`${baseSvg} ${className}`} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      );
    case 'alert':
      return (
        <svg className={`${baseSvg} ${className}`} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
    case 'check':
      return (
        <svg className={`${baseSvg} ${className}`} viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    case 'arrow-up-down':
      return (
        <svg className={`${baseSvg} ${className}`} viewBox="0 0 24 24">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      );
    default:
      return null;
  }
};

const INITIAL_GPU_OFFERINGS = [
  // H100 SXM5 / PCIe
  { id: '1', provider: 'Spheron', type: 'Neo Cloud', gpu: 'H100 SXM5', price: 1.03, billing: 'Spot', vram: '80GB', notes: 'HGX 8-way cluster split; lowest recorded spot rate', source: 'Spheron Blog', date: '2026-05' },
  { id: '2', provider: 'Spheron', type: 'Neo Cloud', gpu: 'H100 SXM5', price: 2.50, billing: 'On-Demand', vram: '80GB', notes: 'HGX 8-way; high availability tier', source: 'Spheron Blog', date: '2026-05' },
  { id: '3', provider: 'Vast.ai', type: 'Neo Cloud', gpu: 'H100 SXM5', price: 1.47, billing: 'Spot', vram: '80GB', notes: 'Marketplace rate fluctuates based on local power', source: 'GPUs.io', date: '2026-06' },
  { id: '4', provider: 'RunPod', type: 'Neo Cloud', gpu: 'H100 SXM5', price: 3.29, billing: 'On-Demand', vram: '80GB', notes: 'Secure Cloud SXM; guaranteed persistence', source: 'RunPod pricing', date: '2026-06' },
  { id: '5', provider: 'AWS (p5)', type: 'Hyperscaler', gpu: 'H100 SXM5', price: 6.88, billing: 'On-Demand', vram: '80GB', notes: 'Standard p5.48xlarge configuration (per-GPU rate)', source: 'AWS calculator', date: '2026-05' },
  { id: '6', provider: 'Azure (NDv5)', type: 'Hyperscaler', gpu: 'H100 SXM5', price: 12.29, billing: 'On-Demand', vram: '80GB', notes: 'ND96isr H100 v5 instance allocation', source: 'Azure Catalog', date: '2026-05' },
  { id: '7', provider: 'Google Cloud (A3)', type: 'Hyperscaler', gpu: 'H100 SXM5', price: 10.98, billing: 'On-Demand', vram: '80GB', notes: 'A3 Mega Instance tier pricing standard', source: 'GCP pricing calculator', date: '2026-05' },
  { id: '8', provider: 'GCP (A3 Spot)', type: 'Hyperscaler', gpu: 'H100 SXM5', price: 3.69, billing: 'Spot', vram: '80GB', notes: 'Preemptible high capacity instances', source: 'GCP pricing list', date: '2026-05' },
  
  // H200 SXM (141GB)
  { id: '9', provider: 'Theta EdgeCloud', type: 'Neo Cloud', gpu: 'H200 SXM', price: 2.49, billing: 'On-Demand', vram: '141GB', notes: 'Cheapest enterprise-grade single H200 node', source: 'GPUs.io Tracker', date: '2026-06' },
  { id: '10', provider: 'Sesterce Cloud', type: 'Neo Cloud', gpu: 'H200 SXM', price: 2.47, billing: 'On-Demand', vram: '141GB', notes: 'Deployments in European multi-rack clusters', source: 'Sesterce official', date: '2026-06' },
  { id: '11', provider: 'Jarvislabs', type: 'Neo Cloud', gpu: 'H200 SXM', price: 3.80, billing: 'On-Demand', vram: '141GB', notes: 'Single-unit available without contracts', source: 'Jarvislabs Blog', date: '2026-01' },
  { id: '12', provider: 'RunPod', type: 'Neo Cloud', gpu: 'H200 SXM', price: 4.39, billing: 'On-Demand', vram: '141GB', notes: 'Extreme memory serving node configuration', source: 'RunPod catalog', date: '2026-06' },
  { id: '13', provider: 'AWS (p5e)', type: 'Hyperscaler', gpu: 'H200 SXM', price: 4.98, billing: 'Spot', vram: '141GB', notes: 'Estimated preemptible availability', source: 'Spheron analysis', date: '2026-05' },
  { id: '14', provider: 'Azure (NDv5 H200)', type: 'Hyperscaler', gpu: 'H200 SXM', price: 13.78, billing: 'On-Demand', vram: '141GB', notes: 'ND H200 standard high-performance cloud', source: 'Azure official calculator', date: '2026-01' },
  { id: '15', provider: 'Oracle Cloud (OCI)', type: 'Hyperscaler', gpu: 'H200 SXM', price: 10.00, billing: 'On-Demand', vram: '141GB', notes: 'Bare metal BM.GPU.H200.8 pricing per-node hour', source: 'OCI official list', date: '2026-01' },
  
  // B200 SXM6 (180GB)
  { id: '16', provider: 'Spheron', type: 'Neo Cloud', gpu: 'B200 SXM6', price: 2.12, billing: 'Spot', vram: '180GB', notes: 'High density spot market pricing', source: 'Spheron pricing index', date: '2026-05' },
  { id: '17', provider: 'Spheron', type: 'Neo Cloud', gpu: 'B200 SXM6', price: 6.02, billing: 'On-Demand', vram: '180GB', notes: 'Unrestricted premium Blackwell nodes', source: 'Spheron blog', date: '2026-03' },
  { id: '18', provider: 'Packet.ai', type: 'Neo Cloud', gpu: 'B200 SXM6', price: 3.75, billing: 'On-Demand', vram: '180GB', notes: 'B200 NVL setup with low-latency link', source: 'GetDeploying', date: '2026-06' },
  { id: '19', provider: 'RunPod', type: 'Neo Cloud', gpu: 'B200 SXM6', price: 5.89, billing: 'On-Demand', vram: '180GB', notes: 'Full secure cloud hosting available now', source: 'RunPod official', date: '2026-06' },
  { id: '20', provider: 'Lambda Labs', type: 'Neo Cloud', gpu: 'B200 SXM6', price: 6.99, billing: 'On-Demand', vram: '180GB', notes: 'Standard secure tenant; multi-region availability', source: 'Lambda Catalog', date: '2026-06' },
  { id: '21', provider: 'CoreWeave', type: 'Neo Cloud', gpu: 'B200 SXM6', price: 8.60, billing: 'On-Demand', vram: '180GB', notes: 'Enterprise dedicated tier pricing', source: 'CoreWeave listing', date: '2026-06' },
  { id: '22', provider: 'AWS (p6-b200)', type: 'Hyperscaler', gpu: 'B200 SXM6', price: 14.24, billing: 'On-Demand', vram: '180GB', notes: 'Standard virtualized Blackwell node (8-GPU split)', source: 'AWS Blog / Spheron', date: '2026-05' },
  { id: '23', provider: 'Google Cloud (B200)', type: 'Hyperscaler', gpu: 'B200 SXM6', price: 16.11, billing: 'On-Demand', vram: '180GB', notes: 'Ultra density 8-GPU multi-cluster nodes', source: 'GCP catalog', date: '2026-06' },
  { id: '24', provider: 'Oracle (B200)', type: 'Hyperscaler', gpu: 'B200 SXM6', price: 14.00, billing: 'On-Demand', vram: '180GB', notes: 'Flat bare-metal speed pricing', source: 'Oracle direct quote', date: '2026-06' },
  
  // B300 (Blackwell DGX, 192GB)
  { id: '25', provider: 'Spheron', type: 'Neo Cloud', gpu: 'B300', price: 2.45, billing: 'Spot', vram: '192GB', notes: 'Spot market reservation pricing', source: 'Spheron Blog', date: '2026-05' },
  { id: '26', provider: 'Spheron', type: 'Neo Cloud', gpu: 'B300', price: 6.80, billing: 'On-Demand', vram: '192GB', notes: 'Premium Blackwell Ultra 192GB VRAM', source: 'Spheron Blog', date: '2026-05' },
  { id: '27', provider: 'Market Average', type: 'Neo Cloud', gpu: 'B300', price: 7.20, billing: 'On-Demand', vram: '192GB', notes: 'Consolidated average rate across smaller providers', source: 'GPUs.io', date: '2026-06' },
  { id: '28', provider: 'Hyperscaler Average', type: 'Hyperscaler', gpu: 'B300', price: 15.50, billing: 'On-Demand', vram: '192GB', notes: 'Projected rates for standard multi-rack tiering', source: 'Spheron Forecast', date: '2026-05' },
];

const GPU_SPEC_DATA = {
  'H100 SXM5': { valScore: 1.0, bandwidth: '3.3 TB/s', tensor: '989 TFLOPS', architecture: 'NVIDIA Hopper' },
  'H200 SXM': { valScore: 1.4, bandwidth: '4.8 TB/s', tensor: '989 TFLOPS', architecture: 'NVIDIA Hopper' },
  'B200 SXM6': { valScore: 2.3, bandwidth: '8.0 TB/s', tensor: '2,250 TFLOPS', architecture: 'NVIDIA Blackwell' },
  'B300': { valScore: 2.5, bandwidth: '8.0 TB/s', tensor: '2,250 TFLOPS', architecture: 'NVIDIA Blackwell' },
};

export default function App() {
  const [offerings, setOfferings] = useState(INITIAL_GPU_OFFERINGS);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [providerTypeFilter, setProviderTypeFilter] = useState('All');
  const [billingFilter, setBillingFilter] = useState('All');
  const [sortConfig, setSortConfig] = useState({ key: 'price', direction: 'asc' });
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ show: false, message: '', type: 'success' });
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const getGpuArch = (gpuName) => {
    const cleanGpu = Object.keys(GPU_SPEC_DATA).find(k => gpuName.includes(k));
    return cleanGpu ? GPU_SPEC_DATA[cleanGpu].architecture : 'Other';
  };

  const processedOfferings = useMemo(() => {
    return offerings
      .filter(item => {
        const matchesSearch = item.provider.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              item.gpu.toLowerCase().includes(searchTerm.toLowerCase());
        const arch = getGpuArch(item.gpu);
        const matchesCategory = categoryFilter === 'All' || 
          (categoryFilter === 'Hopper' && arch.includes('Hopper')) ||
          (categoryFilter === 'Blackwell' && arch.includes('Blackwell'));
        const matchesProviderType = providerTypeFilter === 'All' || item.type === providerTypeFilter;
        const matchesBilling = billingFilter === 'All' || item.billing === billingFilter;
        return matchesSearch && matchesCategory && matchesProviderType && matchesBilling;
      })
      .sort((a, b) => {
        if (sortConfig.key === 'price') {
          return sortConfig.direction === 'asc' ? a.price - b.price : b.price - a.price;
        }
        return 0;
      });
  }, [offerings, searchTerm, categoryFilter, providerTypeFilter, billingFilter, sortConfig]);

  const metrics = useMemo(() => {
    if (processedOfferings.length === 0) return { lowest: 0, highest: 0, variance: 0, avgNeo: 0, avgHyper: 0 };
    
    let lowest = Infinity;
    let lowestItem = null;
    let highest = -Infinity;
    let highestItem = null;

    processedOfferings.forEach(item => {
      if (item.price < lowest) {
        lowest = item.price;
        lowestItem = item;
      }
      if (item.price > highest) {
        highest = item.price;
        highestItem = item;
      }
    });

    const neoList = processedOfferings.filter(i => i.type === 'Neo Cloud').map(i => i.price);
    const hyperList = processedOfferings.filter(i => i.type === 'Hyperscaler').map(i => i.price);

    const avgNeo = neoList.length ? (neoList.reduce((a, b) => a + b, 0) / neoList.length) : 0;
    const avgHyper = hyperList.length ? (hyperList.reduce((a, b) => a + b, 0) / hyperList.length) : 0;

    const markupVariance = avgNeo > 0 ? ((avgHyper - avgNeo) / avgNeo) * 100 : 0;

    return {
      lowest,
      lowestLabel: lowestItem ? `${lowestItem.gpu} (${lowestItem.provider})` : '',
      highest,
      highestLabel: highestItem ? `${highestItem.gpu} (${highestItem.provider})` : '',
      variance: markupVariance,
      avgNeo,
      avgHyper
    };
  }, [processedOfferings]);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleDeleteEntry = (id) => {
    setOfferings(offerings.filter(item => item.id !== id));
    showToast('GPU listing entry removed.', 'info');
  };

  const handleResetData = () => {
    setOfferings(INITIAL_GPU_OFFERINGS);
    showToast('Dashboard reset to official 2026 data.', 'info');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200 scroll-smooth">
      
      {/* Toast Notification Widget */}
      {toast.show && (
        <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-lg border shadow-xl transition-all duration-300 transform translate-y-0 ${
          toast.type === 'error' 
            ? 'bg-rose-950/90 border-rose-500/40 text-rose-200' 
            : toast.type === 'info'
            ? 'bg-sky-950/90 border-sky-500/40 text-sky-200'
            : 'bg-emerald-950/90 border-emerald-500/40 text-emerald-200'
        }`}>
          {toast.type === 'error' && <Icon name="alert" className="h-5 w-5 text-rose-400" />}
          {toast.type === 'info' && <Icon name="info" className="h-5 w-5 text-sky-400" />}
          {toast.type === 'success' && <Icon name="check" className="h-5 w-5 text-emerald-400" />}
          <span className="text-sm font-medium">{toast.message}</span>
        </div>
      )}

      {/* Navigation Header */}
      <header className="border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 px-4 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Icon name="cpu" className="h-5 w-5 text-white animate-pulse" />
            </div>
            <div>
              <h1 className="text-lg lg:text-xl font-black tracking-tight text-white">NEO<span className="text-cyan-400">CLOUD</span> SENSORS</h1>
              <p className="text-xs text-slate-400 font-mono">Live GPU Compute Cost Indexer</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 lg:px-8 py-8 space-y-12">
        
        {/* Metric Summary Boxes */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/30 transition-all">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-slate-400">Lowest Tracked Rate</span>
              <Icon name="trending-down" className="h-4 w-4 text-cyan-400" />
            </div>
            <h3 className="text-3xl font-black text-cyan-400 font-mono">${metrics.lowest.toFixed(2)}<span className="text-xs text-slate-400 font-normal"> /hr</span></h3>
            <p className="text-xs font-bold text-slate-200 mt-2 truncate">{metrics.lowestLabel}</p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-indigo-500/30 transition-all">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-slate-400">Hyperscaler Peak</span>
              <Icon name="dollar" className="h-4 w-4 text-indigo-400" />
            </div>
            <h3 className="text-3xl font-black text-white font-mono">${metrics.highest.toFixed(2)}<span className="text-xs text-slate-400 font-normal"> /hr</span></h3>
            <p className="text-xs font-bold text-slate-300 mt-2 truncate">{metrics.highestLabel}</p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-purple-500/30 transition-all">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-slate-400">Market Price Variance</span>
              <Icon name="activity" className="h-4 w-4 text-purple-400" />
            </div>
            <h3 className="text-3xl font-black text-purple-400 font-mono">{metrics.variance > 0 ? `+${metrics.variance.toFixed(0)}%` : '0%'}</h3>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/30 transition-all">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-slate-400">Tracked Models</span>
              <Icon name="shield" className="h-4 w-4 text-emerald-400" />
            </div>
            <h3 className="text-3xl font-black text-emerald-400 font-mono">{processedOfferings.length}</h3>
          </div>
        </section>

        {/* Filter Panel */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="sliders" className="h-4 w-4 text-cyan-400" />
              <h2 className="text-sm font-bold uppercase text-slate-300">Filters</h2>
            </div>
            <button 
              onClick={handleResetData}
              className="text-xs font-semibold text-slate-400 hover:text-cyan-400 flex items-center gap-1"
            >
              <Icon name="refresh" className="h-3 w-3" />
              Reset Data
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Icon name="search" className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search GPU or Provider..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-lg py-2 pl-10 pr-4 text-sm text-slate-200 focus:outline-none"
              />
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-1 flex">
              {['All', 'Hopper', 'Blackwell'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`flex-1 text-center text-xs py-1.5 rounded font-medium ${
                    categoryFilter === cat ? 'bg-slate-800 text-cyan-400' : 'text-slate-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-1 flex">
              {['All', 'Neo Cloud', 'Hyperscaler'].map(type => (
                <button
                  key={type}
                  onClick={() => setProviderTypeFilter(type)}
                  className={`flex-1 text-center text-xs py-1.5 rounded font-medium ${
                    providerTypeFilter === type ? 'bg-slate-800 text-cyan-400' : 'text-slate-400'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-1 flex">
              {['All', 'On-Demand', 'Spot'].map(mode => (
                <button
                  key={mode}
                  onClick={() => setBillingFilter(mode)}
                  className={`flex-1 text-center text-xs py-1.5 rounded font-medium ${
                    billingFilter === mode ? 'bg-slate-800 text-cyan-400' : 'text-slate-400'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* GPU League Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
            <h3 className="font-bold text-sm uppercase text-slate-200">
              GPU League Table ({processedOfferings.length} models)
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-950 text-slate-400 text-xs font-mono uppercase border-b border-slate-800">
                <tr>
                  <th className="py-3 px-6 cursor-pointer" onClick={() => requestSort('provider')}>Provider</th>
                  <th className="py-3 px-6 cursor-pointer" onClick={() => requestSort('gpu')}>GPU Model</th>
                  <th className="py-3 px-6 text-center">VRAM</th>
                  <th className="py-3 px-6 text-center">Billing</th>
                  <th className="py-3 px-6 cursor-pointer text-right" onClick={() => requestSort('price')}>Price/Hr</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {processedOfferings.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-12 text-center text-slate-500">
                      No pricing structures match active filters.
                    </td>
                  </tr>
                ) : (
                  processedOfferings.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-4 px-6 font-semibold">
                        <div>{item.provider}</div>
                        <span className={`text-[10px] px-1.5 py-0.25 mt-1 font-mono rounded-md block w-max ${
                          item.type === 'Neo Cloud' 
                            ? 'bg-cyan-950 text-cyan-400' 
                            : 'bg-indigo-950 text-indigo-400'
                        }`}>
                          {item.type}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="font-mono font-bold">{item.gpu}</div>
                        <span className="text-[11px] text-slate-400 block truncate">{item.notes}</span>
                      </td>
                      <td className="py-4 px-6 text-center text-slate-300 font-mono">{item.vram}</td>
                      <td className="py-4 px-6 text-center">
                        <span className={`text-xs px-2.5 py-0.5 rounded-full ${
                          item.billing === 'Spot' 
                            ? 'bg-amber-950 text-amber-300' 
                            : 'bg-slate-800 text-slate-300'
                        }`}>
                          {item.billing}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right font-mono font-black text-cyan-400">${item.price.toFixed(2)}</td>
                      <td className="py-4 px-6 text-center">
                        <button 
                          onClick={() => handleDeleteEntry(item.id)}
                          className="p-1.5 rounded bg-slate-950 hover:bg-rose-950/40 text-slate-500 hover:text-rose-400 border border-slate-800"
                        >
                          <Icon name="trash" className="h-3.5 w-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 px-4 text-center text-slate-500 text-xs font-mono">
        &copy; 2026 Karl Havard. NEO-CLOUD SENSORS - Live GPU Compute Cost Indexer
      </footer>

    </div>
  );
}
