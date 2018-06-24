import {TableComponent} from "../../pages/table/table.component";
import {SmartTableComponent} from "../../pages/table/smart-table/smart-table.component";

const menuList = [
  {
    title: 'Table', path: 'table',
    children: [
      {
        title: 'Basic Table', path: 'basic_table'
      },
      {
        title: 'Smart Table', path: 'smart_table'
      }
    ]
  }
];

export default {menuList}
