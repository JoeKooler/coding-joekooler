import React from 'react';

interface TabProps {
  tabName: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ tabName, isActive, onClick }) => {
  return (
    <button
      className={`block w-full py-2 px-4 rounded-md text-white ${
        isActive ? 'bg-slate-500' : ''
      }`}
      onClick={onClick}
    >
      {tabName}
    </button>
  );
};

export default Tab;
