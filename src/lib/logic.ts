// 記事のフィルター機能
export const multipleSearch = (array: any, languages: string, database: string, cms: string) => {
    return array.filter((post: any) => {
        const languagesMatch = !languages ||
            (post.fields.languages || '').toString().toLowerCase().includes(languages);
        const databaseMatch = !database ||
            (post.fields.database || '').toString().toLowerCase().includes(database);
        const cmsMatch = !cms ||
            (post.fields.cms || '').toString().toLowerCase().includes(cms);
        return languagesMatch && databaseMatch && cmsMatch;
    });
};

// modalのアニメーション
export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.1 }, // 適宜調整
  };

  