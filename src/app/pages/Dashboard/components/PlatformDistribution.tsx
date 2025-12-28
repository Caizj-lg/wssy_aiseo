import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';

interface PlatformData {
  platform: string;
  percentage: number; // 改为 number
  count: number;      // 改为 number
  color: string;
}

const data: PlatformData[] = [
  { platform: 'Deepseek', percentage: 6.8, count: 1020, color: '#8B5CF6' },
  { platform: '豆包', percentage: 10.49, count: 1574, color: '#06B6D4' },
  { platform: '文心一言', percentage: 20.62, count: 3094, color: '#F97316' },
  { platform: '通义', percentage: 15.53, count: 2330, color: '#EF4444' },
  { platform: '元宝', percentage: 9.32, count: 1398, color: '#3B82F6' },
  { platform: 'KIMI', percentage: 3.11, count: 466, color: '#EC4899' },
  { platform: '夸克', percentage: 34.16, count: 5126, color: '#10B981' },
];

export function PlatformDistribution() {
  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="font-semibold mb-6">各平台问题占比</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 左侧：饼图 */}
        <div className="flex items-center justify-center">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="count"
                label={({ payload }) =>
                  `${payload.percentage.toFixed(1)}%`
                }
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>

              <Tooltip
                formatter={(_, __, props: any) => {
                  const { platform, count, percentage } = props.payload;
                  return [
                    `${count} 条（${percentage}%）`,
                    platform,
                  ];
                }}
              />

              <Legend
                verticalAlign="middle"
                align="right"
                layout="vertical"
                iconType="circle"
                formatter={(_, entry: any) => (
                  <span className="text-sm">
                    {entry.payload.platform}
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* 右侧：数据表 */}
        <div className="flex items-center">
          <div className="w-full">
            <div className="grid grid-cols-3 gap-4 mb-4 pb-2 border-b text-sm text-gray-600">
              <div>平台</div>
              <div className="text-center">占比</div>
              <div className="text-right">问题数量</div>
            </div>

            {data.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 py-3 hover:bg-blue-50 rounded transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span>{item.platform}</span>
                </div>

                <div className="text-center">
                  {item.percentage}%
                </div>

                <div className="text-right">
                  {item.count} 条
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
