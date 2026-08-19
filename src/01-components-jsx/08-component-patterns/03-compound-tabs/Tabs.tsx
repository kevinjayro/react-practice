import { createContext, useContext, useState, type ReactNode } from 'react';

type TabsContextType = {
  activeTab: string;
  setActiveTab: (value: string) => void;
};

const TabsContext = createContext<TabsContextType | null>(null);

type TabsProps = {
  children: ReactNode;
  defaultValue: string;
};

type ListProps = {
  children: ReactNode;
};

type TabProps = {
  value: string;
  children: ReactNode;
};

type PanelProps = {
  value: string;
  children: ReactNode;
};

export default function Tabs({ children, defaultValue }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

function List({ children }: ListProps) {
  return <>{children}</>;
}

function Tab({ value, children }: TabProps) {
  const { setActiveTab } = useTabsContext();

  return <button onClick={() => setActiveTab(value)}>{children}</button>;
}

function Panel({ value, children }: PanelProps) {
  const { activeTab } = useTabsContext();

  return <>{value === activeTab && children}</>;
}

function useTabsContext() {
  const context = useContext(TabsContext);

  if (context === null) {
    throw new Error('Tabs components must be used inside <Tabs>');
  }

  return context;
}

Tabs.List = List;
Tabs.Tab = Tab;
Tabs.Panel = Panel;
