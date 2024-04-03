/* eslint-disable no-console,react/no-this-in-sfc */
'use strict';

import React, { StrictMode, useEffect, useState } from 'react';
import { Tree } from '@self';
import Button from '../components/Button';

const getAllDataDemo = (options?: { instanceNum?: number; dbNum?: number; tableNum?: number }) => {
  const { instanceNum = 5, dbNum = 5, tableNum = 1000 } = options || {};
  const instanceList = [];
  for (let i = 0; i < instanceNum; i++) {
    const dbList = [];
    for (let d = 0; d < dbNum; d++) {
      const table = [];
      for (let f = 0; f < tableNum; f++) {
        table.push({
          type: 'table',
          name: `Table${f}-DB${d}-instance${i}`,
          title: `Table${f}-DB${d}-instance${i}`,
          key: `Table${f}-DB${d}-instance${i}`,
          isLeaf: true,
        });
      }
      const dbs = {
        type: 'db',
        name: `DB${d}-instance${i}`,
        title: `DB${d}-instance${i}`,
        key: `DB${d}-instance${i}`,
        tables: table,
        children: table,
      };
      dbList.push(dbs);
    }
    const item = {
      instanceId: `实例${i}`,
      instanceName: `实例${i}`,
      name: `实例${i}`,
      title: `实例${i}`,
      key: `实例${i}`,
      dbs: dbList,
      children: dbList,
      type: 'instance',
    };
    instanceList.push(item);
  }
  return instanceList;
};

const TreeNode = Tree.Node;
const TreeData = [
  {
    title: 'Trunk 0-0',
    key: '0-0',
    children: [
      {
        title: 'Leaf 0-0-1',
        key: '0-0-1',
      },
      {
        title: 'Branch 0-0-2',
        key: '0-0-2',
        children: [
          {
            title: 'Leaf 0-0-2-1',
            key: '0-0-2-1',
          },
        ],
      },
    ],
  },
  {
    title: 'Trunk 0-1',
    key: '0-1',
    children: [
      {
        title: 'Leaf 0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Leaf 0-1-2',
        key: '0-1-2',
      },
    ],
  },
];
// --
const newPageData = [
  {
    key: '5U5NEugbB1Z4H444v2UI-',
    title: '通用布局',
    children: [
      {
        key: '0-0',
        title: '文本',
      },
      {
        key: '0-1',
        title: '文本',
      },
      {
        key: '0-2',
        title: '文本',
      },
      {
        key: '0-3',
        title: '查询标签',
      },
      {
        key: '0-4',
        title: '查询标签',
      },
      {
        key: 'PzbYCInmOrKLJhpbVZ256',
        title: '分组',
        children: [
          {
            key: '0-1-1',
            title: '网格布局',
          },
        ],
      },
      {
        key: '0-5',
        title: '新增',
      },
      {
        key: '0-6',
        title: '导出',
      },
      {
        key: 'tableRowInfo&zNWbweD4GQ1uDLdts_ZDb&',
        title: '数据表格',
        children: [
          {
            key: '0-0-0',
            title: '数据主键',
          },
          {
            key: '0-0-1',
            title: '分页器-记录总条数',
          },
          {
            key: '0-0-2',
            title: '页码',
          },
          {
            key: '0-0-3',
            title: '每页数量',
          },
          {
            key: '0-0-4',
            title: '记录列表',
          },
          {
            key: '0-0-5',
            title: '分页器返回页码',
          },
          {
            key: '0-0-6',
            title: '表格行选中值',
          },
          {
            key: '0-0-7',
            title: '当前行数据',
          },
        ],
      },
    ],
  },
  {
    key: 'R2WVb16UiI2Ixvil7PDHu',
    title: '申请',
    children: [
      {
        key: 'fvWB6Og7v3aR9MPM13DYI',
        title: '弹框按钮区',
        children: [
          {
            key: '1-1-1',
            title: '确定',
          },
          {
            key: '1-1-2',
            title: '取消',
          },
        ],
      },
    ],
  },
  {
    key: 'K2uzyT3B3prEeRampkRSL',
    title: '自由弹框',
    children: [
      {
        key: '2-1',
        title: '文本',
      },
      {
        key: '9Vde-2HoFf0g6EOewegj9',
        title: '表单容器',
        children: [
          {
            key: '2-2-1',
            title: '通过',
          },
        ],
      },
      {
        key: '2-3',
        title: '按钮',
      },
    ],
  },
  {
    key: 'J7vmjwtyUyBbdqRx-gvGk',
    title: '表单容器',
    children: [
      {
        key: 'Cko7gZcuvaELaD1cqx4dx',
        title: '单选框',
        children: [
          {
            key: '3-1-1',
            title: '单选框-label',
          },
          {
            key: '3-1-2',
            title: '单选框-value',
          },
        ],
      },
      {
        key: 'YfGxxkUKyHtuHz2jPuOro',
        title: '单选框',
        children: [
          {
            key: '3-2-1',
            title: '单选框-label',
          },
          {
            key: '3-2-2',
            title: '单选框-value',
          },
        ],
      },
      {
        key: '52-x4AE-QNICQ8Sczh3M5',
        title: '单选框',
        children: [
          {
            key: '3-3-1',
            title: '单选框-label',
          },
          {
            key: '3-3-2',
            title: '单选框-value',
          },
        ],
      },
      {
        key: 'kOnXRvsOQxKE28iOo3IZg',
        title: '单选框',
        children: [
          {
            key: '3-4-1',
            title: '单选框-label',
          },
          {
            key: '3-4-2',
            title: '单选框-value',
          },
        ],
      },
    ],
  },
];

const allExpandedKeys = [
  'J7vmjwtyUyBbdqRx-gvGk',
  'Cko7gZcuvaELaD1cqx4dx',
  'YfGxxkUKyHtuHz2jPuOro',
  '52-x4AE-QNICQ8Sczh3M5',
  'kOnXRvsOQxKE28iOo3IZg',
  'K2uzyT3B3prEeRampkRSL',
  '9Vde-2HoFf0g6EOewegj9',
  'R2WVb16UiI2Ixvil7PDHu',
  'fvWB6Og7v3aR9MPM13DYI',
  '5U5NEugbB1Z4H444v2UI-',
  'PzbYCInmOrKLJhpbVZ256',
];
export const FoldError = () => {
  const [expandedKeys, setExpandedKeys] = useState(allExpandedKeys);
  useEffect(() => {
    console.log(React.StrictMode.toString());
  }, []);
  return (
    <div style={{ width: 500 }}>
      <span></span>
      <StrictMode>
        <Button
          onClick={() => {
            setExpandedKeys(allExpandedKeys);
          }}
          style={{ marginRight: '10px' }}
        >
          展开所有
        </Button>
        <Button
          onClick={() => {
            setExpandedKeys([]);
          }}
        >
          折叠所有
        </Button>
        <Tree
          expandedKeys={expandedKeys}
          onExpand={(keys) => {
            console.log('keys', keys);
            setExpandedKeys(keys);
          }}
          style={{
            overflow: 'auto',
          }}
          treeData={newPageData}
        ></Tree>
      </StrictMode>
    </div>
  );
};

export const foldDemo = () => {
  const allCheckedKeys = ['0-0', '0-0-1', '0-0-2', '0-0-2-1', '0-1', '0-1-1', '0-1-2'];
  const allExpandedKeys = ['0-0', '0-1', '0-0-2'];
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [expandedKeys, setExpandedKeys] = useState(allExpandedKeys);
  return (
    <div>
      <Button.Group style={{ marginBottom: 20 }}>
        <Button
          type="primary"
          onClick={() => setCheckedKeys(checkedKeys.length ? [] : allCheckedKeys)}
        >
          {checkedKeys.length ? 'deselect all' : 'select all'}
        </Button>
        <Button
          type="primary"
          onClick={() => setExpandedKeys(expandedKeys.length ? [] : allExpandedKeys)}
        >
          {expandedKeys.length ? 'fold' : 'unfold'}
        </Button>
      </Button.Group>
      <Tree
        checkable
        // checkedKeys={checkedKeys}
        selectedKeys={selectedKeys}
        expandedKeys={expandedKeys}
        onSelect={(keys, extra) => {
          console.log(keys, extra);
          setSelectedKeys(keys);
        }}
        onCheck={(keys, extra) => {
          console.log(keys, extra);
          setCheckedKeys(keys);
        }}
        onExpand={(keys, extra) => {
          console.log(keys, extra);
          setExpandedKeys(keys);
        }}
        treeData={TreeData}
      ></Tree>
    </div>
  );
};
export const Demo = () => {
  const [treeData] = useState(getAllDataDemo());

  const [checkedKeys, setCheckedKeys] = useState<string[]>([]);

  const handleCheck = (keys: string[], extra: any) => {
    setCheckedKeys(keys);
    console.log(extra.checkedNodes);
  };

  return (
    <Tree
      onCheck={handleCheck}
      checkedKeys={checkedKeys}
      size="small"
      treeData={treeData}
      showLine
      checkable
      autoExpandParent={false}
      virtualListProps={{
        height: 394,
      }}
      // __ArcoAdapterMode__
    />
  );
};

export default {
  title: 'Tree',
};
