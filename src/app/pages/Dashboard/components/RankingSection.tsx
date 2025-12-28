import { useState } from 'react';
import { MessageSquare, Award } from 'lucide-react';

interface RankingItem {
  platform: string;
  icon: string;
  marketing?: string;
  brand?: string;
}

const rankingData: RankingItem[] = [
  { platform: '全部', icon: '🌐', marketing: '15008', brand: '12500' },
  { platform: 'Deepseek 电脑端', icon: '💻', marketing: '510', brand: '420' },
  { platform: 'Deepseek 移动端', icon: '📱', marketing: '510', brand: '430' },
  { platform: '豆包 电脑端', icon: '🎯', marketing: '1233', brand: '980' },
  { platform: '豆包 移动端', icon: '📲', marketing: '641', brand: '550' },
  { platform: 'KIMI 电脑端', icon: '🤖', marketing: '699', brand: '620' },
  { platform: 'KIMI 移动端', icon: '📱', marketing: '699', brand: '580' },
  { platform: '文心一言 电脑端', icon: '💡', marketing: '1233', brand: '1100' },
  { platform: '文心一言 移动端', icon: '📲', marketing: '1233', brand: '990' },
  { platform: '文心一言 电脑端', icon: '✨', marketing: '1559', brand: '1350' },
  { platform: '文心一言 移动端', icon: '📱', marketing: '1559', brand: '1280' },
  { platform: '豆包 移动端', icon: '🎪', marketing: '2563', brand: '2100' },
];

export function RankingSection() {
  const [activeTab, setActiveTab] = useState<'marketing' | 'brand'>('marketing');

  return (
    <div className="bg-white rounded-lg p-6">
      {/* Tab Navigation */}
      <div className="flex gap-8 border-b mb-6">
        <button
          onClick={() => setActiveTab('marketing')}
          className={`pb-3 px-2 flex items-center gap-2 transition-colors relative ${
            activeTab === 'marketing'
              ? 'text-blue-600 font-semibold'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          营销榜单
          {activeTab === 'marketing' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('brand')}
          className={`pb-3 px-2 flex items-center gap-2 transition-colors relative ${
            activeTab === 'brand'
              ? 'text-blue-600 font-semibold'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Award className="w-4 h-4" />
          品牌榜单
          {activeTab === 'brand' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
          )}
        </button>
      </div>

      {/* Ranking Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {rankingData.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 hover:shadow-md transition-all cursor-pointer border border-blue-100"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm text-gray-700 line-clamp-1">{item.platform}</span>
            </div>
            <p className="font-bold text-blue-600">
              {activeTab === 'marketing' ? item.marketing : item.brand}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
