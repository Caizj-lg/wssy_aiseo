import { Tag, FileText, Globe, Building2 } from 'lucide-react';
import { StatCard } from './components/StatCard';
import { PlatformDistribution } from './components/PlatformDistribution';
import { RankingSection } from './components/RankingSection';
import { DataTable } from './components/DataTable';

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-4 right-4 w-32 h-32 opacity-10">
          <div className="w-full h-full border-4 border-blue-300 rounded-lg transform rotate-12" />
        </div>
        <div className="absolute bottom-4 right-16 w-24 h-24 opacity-10">
          <div className="w-full h-full border-4 border-cyan-300 rounded-full" />
        </div>

        <p className="text-blue-200 text-sm mb-2">AI 问答营销优化平台</p>
        <h1 className="font-bold mb-4">AI平台关键词优化</h1>
        <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
          AI 日均人群使用量已突破 8 亿 +
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="总词量"
          value="20000"
          icon={Tag}
          iconColor="bg-blue-500"
        />
        <StatCard
          label="收录词量"
          value="15008"
          icon={FileText}
          iconColor="bg-cyan-500"
        />
        <StatCard
          label="收录平台"
          value="63"
          icon={Globe}
          iconColor="bg-purple-500"
        />
        <StatCard
          label="覆盖平台"
          value="7"
          icon={Building2}
          iconColor="bg-orange-500"
        />
      </div>

      {/* Platform Distribution */}
      <PlatformDistribution />

      {/* Ranking Section */}
      <RankingSection />

      {/* Data Table */}
      <DataTable />
    </div>
  );
}
