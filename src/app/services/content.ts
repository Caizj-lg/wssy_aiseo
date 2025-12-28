// Mock API service for content management
// In production, replace with actual API calls

export interface ContentItem {
  id: number;
  keyword: string;
  question: string;
  platform: string;
  source: string;
  onlineTime: string;
}

export interface PlatformStats {
  platform: string;
  percentage: string;
  count: string;
}

// Mock data fetching
export const contentService = {
  // 获取内容列表
  getContentList: async (): Promise<ContentItem[]> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, keyword: '移民', question: '澳洲移民公司', platform: 'Deepseek', source: 'PC', onlineTime: '2025-12-05' },
          { id: 2, keyword: '移民', question: '澳洲移民公司', platform: 'Deepseek', source: '移动端', onlineTime: '2025-12-05' },
        ]);
      }, 500);
    });
  },

  // 获取平台统计数据
  getPlatformStats: async (): Promise<PlatformStats[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { platform: 'Deepseek', percentage: '6.80%', count: '1020条' },
          { platform: '豆包', percentage: '10.49%', count: '1574条' },
        ]);
      }, 500);
    });
  },

  // 搜索内容
  searchContent: async (keyword: string): Promise<ContentItem[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([]);
      }, 500);
    });
  },
};
