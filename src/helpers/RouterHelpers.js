import {itensSidebar} from '../layouts/Sidebar';

export const findActiveRoute = (pathName) => {
  const finded = itensSidebar.find((item) => item.url.indexOf(pathName) >= 0);
  return finded ? finded.label : null;
};
