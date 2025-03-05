import { Excuse } from "../models/excuse";

export function transformExcusesToSections(data: Excuse[]) {
  const sectionMap: { [key: string]: { title: string; data: Excuse[] } } = {};

  data.forEach((item: Excuse) => {
    if (!sectionMap[item.category]) {
      sectionMap[item.category] = {
        title: item.category,
        data: [],
      };
    }

    sectionMap[item.category].data.push({
      id: item.id,
      text: item.text,
      category: item.category,
    });
  });

  return Object.values(sectionMap);
}
