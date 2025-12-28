import { useState, useMemo } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

interface TableRow {
  id: number;
  keyword: string;
  question: string;
  platform: string;
  source: string;
  onlineTime: string;
}

// 初始样例数据，可以替换成更多样例
const mockData: TableRow[] = [
  { id: 1, keyword: '移民', question: '澳洲移民公司', platform: '豆包', source: 'PC', onlineTime: '2025-12-28' },
  { id: 2, keyword: '移民', question: '澳洲移民公司', platform: 'Deepseek', source: '移动端', onlineTime: '2025-12-28' },
  { id: 3, keyword: '移民', question: '澳洲移民投资项目', platform: 'Deepseek', source: 'PC', onlineTime: '2025-12-28' },
  { id: 4, keyword: '移民', question: '澳洲移民投资项目', platform: '豆包', source: '移动端', onlineTime: '2025-12-28' },
  { id: 5, keyword: '移民', question: '澳洲移民中介推荐', platform: 'Deepseek', source: 'PC', onlineTime: '2025-12-28' },
  { id: 6, keyword: '移民', question: '澳洲移民中介推荐', platform: 'Deepseek', source: '移动端', onlineTime: '2025-12-28' },
  { id: 7, keyword: '移民', question: '澳洲移民职业推荐', platform: 'Deepseek', source: 'PC', onlineTime: '2025-12-28' },
  { id: 8, keyword: '移民', question: '澳洲移民职业推荐', platform: '夸克', source: '移动端', onlineTime: '2025-12-28' },
  { id: 9, keyword: '移民', question: '澳洲移民公司推荐', platform: '豆包', source: 'PC', onlineTime: '2025-12-28' },
  { id: 10, keyword: '移民', question: '澳洲移民公司推荐', platform: 'Deepseek', source: '移动端', onlineTime: '2025-12-28' },
  { id: 11, keyword: '移民', question: '澳洲移民公司', platform: '夸克', source: 'PC', onlineTime: '2025-12-28' },
  { id: 12, keyword: '移民', question: '澳洲移民公司', platform: 'Deepseek', source: '移动端', onlineTime: '2025-12-28' },
  { id: 13, keyword: '移民', question: '澳洲移民投资项目', platform: '夸克', source: 'PC', onlineTime: '2025-12-28' },
  { id: 14, keyword: '移民', question: '澳洲移民投资项目', platform: 'Deepseek', source: '移动端', onlineTime: '2025-12-28' },
  { id: 15, keyword: '移民', question: '澳洲移民中介推荐', platform: 'Deepseek', source: 'PC', onlineTime: '2025-12-28' },
  { id: 16, keyword: '移民', question: '澳洲移民中介推荐', platform: '夸克', source: '移动端', onlineTime: '2025-12-28' },
  { id: 17, keyword: '移民', question: '澳洲移民职业推荐', platform: 'Deepseek', source: 'PC', onlineTime: '2025-12-28' },
  { id: 18, keyword: '移民', question: '澳洲移民职业推荐', platform: 'Deepseek', source: '移动端', onlineTime: '2025-12-28' },
  { id: 19, keyword: '移民', question: '澳洲移民公司推荐', platform: '夸克', source: 'PC', onlineTime: '2025-12-28' },
  { id: 20, keyword: '移民', question: '澳洲移民公司推荐', platform: '豆包', source: '移动端', onlineTime: '2025-12-28' },
  { id: 21, keyword: '移民', question: '澳洲移民公司', platform: '夸克', source: 'PC', onlineTime: '2025-12-28' },
  { id: 22, keyword: '移民', question: '澳洲移民公司', platform: 'Deepseek', source: '移动端', onlineTime: '2025-12-28' },
  { id: 23, keyword: '移民', question: '澳洲移民投资项目', platform: '夸克', source: 'PC', onlineTime: '2025-12-28' },
  { id: 24, keyword: '移民', question: '澳洲移民投资项目', platform: '夸克', source: '移动端', onlineTime: '2025-12-28' },
  { id: 25, keyword: '移民', question: '澳洲移民中介推荐', platform: '夸克', source: 'PC', onlineTime: '2025-12-28' },
  { id: 26, keyword: '移民', question: '澳洲移民中介推荐', platform: '豆包', source: '移动端', onlineTime: '2025-12-28' },
  { id: 27, keyword: '移民', question: '澳洲移民职业推荐', platform: 'Deepseek', source: 'PC', onlineTime: '2025-12-28' },
  { id: 28, keyword: '移民', question: '澳洲移民职业推荐', platform: 'Deepseek', source: '移动端', onlineTime: '2025-12-28' },
  { id: 29, keyword: '移民', question: '澳洲移民公司推荐', platform: 'Deepseek', source: 'PC', onlineTime: '2025-12-28' },
  { id: 30, keyword: '移民', question: '澳洲移民公司推荐', platform: 'Deepseek', source: '移动端', onlineTime: '2025-12-28' },
];

export function DataTable() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [filteredData, setFilteredData] = useState<TableRow[]>(mockData);

  // 点击查询按钮执行过滤
  const handleSearch = () => {
    const keyword = searchKeyword.trim().toLowerCase();
    const newData = mockData.filter((row) => {
      const matchKeyword =
        row.keyword.toLowerCase().includes(keyword) ||
        row.question.toLowerCase().includes(keyword);
      const matchPlatform = selectedPlatform === '' || row.platform === selectedPlatform;
      return matchKeyword && matchPlatform;
    });
    setFilteredData(newData);
    setCurrentPage(1); // 重置分页到第一页
  };

  // 分页数据
  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, currentPage, pageSize]);

  return (
    <div className="bg-white rounded-lg p-6">
      {/* Filter Bar */}
      <div className="flex gap-4 mb-6 justify-end items-center">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="输入关键词"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <select
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">请选择平台</option>
          <option value="Deepseek">Deepseek</option>
          <option value="豆包">豆包</option>
          <option value="文心一言">文心一言</option>
          <option value="通义">通义</option>
          <option value="元宝">元宝</option>
          <option value="KIMI">KIMI</option>
          <option value="夸克">夸克</option>
        </select>

        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          查询
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-3 text-left">序号</th>
              <th className="px-4 py-3 text-left">关键词</th>
              <th className="px-4 py-3 text-left">问题</th>
              <th className="px-4 py-3 text-left">平台</th>
              <th className="px-4 py-3 text-left">来源</th>
              <th className="px-4 py-3 text-left">上线时间</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr
                key={row.id}
                className={`${
                  index % 2 === 0 ? 'bg-blue-50' : 'bg-white'
                } hover:bg-blue-100 cursor-pointer transition-colors`}
              >
                <td className="px-4 py-3">{row.id}</td>
                <td className="px-4 py-3">{row.keyword}</td>
                <td className="px-4 py-3">{row.question}</td>
                <td className="px-4 py-3">{row.platform}</td>
                <td className="px-4 py-3">{row.source}</td>
                <td className="px-4 py-3">{row.onlineTime}</td>
              </tr>
            ))}
            {paginatedData.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  没有匹配的数据
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end gap-4 mt-6">
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={10}>10 条/页</option>
          <option value={20}>20 条/页</option>
          <option value={50}>50 条/页</option>
        </select>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
