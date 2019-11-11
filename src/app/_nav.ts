interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'หน้าหลัก',
    url: '/admin/main',
    icon: 'icon-home',
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
  },
  {
    name: 'จัดการฐานข้อมูล',
    url: '/admin',
    icon: 'icon-layers',
    children: [
      {
        name: 'คลาสผลิตภัณฑ์',
        url: '/admin/managedatabase',
        icon: 'icon-list'
      },
    ]
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
  }
  
];
