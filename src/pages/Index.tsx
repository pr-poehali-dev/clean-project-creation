import { useState } from 'react';
import Icon from '@/components/ui/icon';

const AVATAR =
  'https://cdn.poehali.dev/projects/0b0686e1-0368-4333-82d7-e68c465aed2e/bucket/3e4aeea1-36ab-478f-bb7f-78e2fe00b6cc.jpg';

const mainMenu = [
  { icon: 'Pentagon', label: 'Overview' },
  { icon: 'Filter', label: 'Filters' },
  { icon: 'Bookmark', label: 'Saved Jobs' },
  { icon: 'File', label: 'Applications' },
  { icon: 'Atom', label: 'Skill Assessments' },
  { icon: 'GalleryThumbnails', label: 'Learning Resources', fallback: 'SquarePlus' },
];

const others = [
  { icon: 'CircleUserRound', label: 'Account' },
  { icon: 'Bell', label: 'Notifications' },
  { icon: 'Settings', label: 'Settings' },
];

const Logo = ({ size = 26 }: { size?: number }) => (
  <div
    className="flex items-center justify-center rounded-[9px] bg-[#111] text-white shrink-0"
    style={{ width: size, height: size }}
  >
    <Icon name="Spline" size={size * 0.6} fallback="Slash" />
  </div>
);

const Index = () => {
  const [active, setActive] = useState('Overview');
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="h-screen bg-[#f3f3f3] flex p-4 gap-4 overflow-hidden">
      {/* SIDEBAR */}
      <aside
        className={`relative h-full bg-white rounded-3xl border border-black/5 shadow-[0_2px_24px_rgba(0,0,0,0.04)] flex flex-col py-4 transition-[width] duration-300 ease-in-out ${
          collapsed ? 'w-[72px] items-center px-2.5' : 'w-[280px] px-4'
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center ${collapsed ? 'justify-center' : 'justify-between'} px-1`}
        >
          <div className="flex items-center gap-2.5">
            <Logo size={28} />
            {!collapsed && (
              <span className="text-[19px] font-600 tracking-tight">Travay</span>
            )}
          </div>
          {!collapsed && (
            <div className="flex items-center gap-3 text-[#9a9a9a]">
              <Icon name="CircleHelp" size={18} />
              <button
                onClick={() => setCollapsed(true)}
                title="Свернуть"
                className="hover:text-[#1a1a1a] transition-colors"
              >
                <Icon name="Scaling" size={18} />
              </button>
            </div>
          )}
        </div>

        {/* Expand button (collapsed) */}
        {collapsed && (
          <button
            onClick={() => setCollapsed(false)}
            title="Развернуть"
            className="absolute top-[18px] -right-[18px] z-10 w-9 h-9 rounded-xl bg-white border border-black/[0.08] shadow-[0_2px_10px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#1a1a1a] hover:bg-black/[0.03] transition-colors"
          >
            <Icon name="Scaling" size={17} />
          </button>
        )}

        {/* Search */}
        <div
          className={`mt-4 flex items-center rounded-full border border-black/[0.07] ${
            collapsed ? 'w-10 h-10 justify-center' : 'gap-2.5 h-11 px-3.5'
          }`}
        >
          <Icon name="Search" size={17} className="text-[#b3b3b3]" />
          {!collapsed && <span className="text-[15px] text-[#b3b3b3]">Search...</span>}
        </div>

        {/* Main menu */}
        {!collapsed && (
          <p className="mt-5 mb-1.5 px-1 text-[11px] tracking-[0.08em] text-[#9a9a9a] font-500">
            MAIN MENU
          </p>
        )}
        {collapsed && <div className="mt-4 mb-2 w-6 h-px bg-black/10" />}
        <nav className="flex flex-col gap-0.5">
          {mainMenu.map((item) => {
            const isActive = active === item.label;
            return (
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                title={item.label}
                className={`flex items-center rounded-full text-[15px] transition-colors ${
                  collapsed ? 'w-10 h-10 justify-center' : 'gap-3 h-11 px-3.5'
                } ${
                  isActive
                    ? 'bg-[#111] text-white font-500'
                    : 'text-[#1a1a1a] hover:bg-black/[0.04] font-400'
                }`}
              >
                <Icon name={item.icon} fallback={item.fallback || 'Circle'} size={19} />
                {!collapsed && item.label}
              </button>
            );
          })}
        </nav>

        {/* Others */}
        {!collapsed && (
          <p className="mt-5 mb-1.5 px-1 text-[11px] tracking-[0.08em] text-[#9a9a9a] font-500">
            OTHERS
          </p>
        )}
        {collapsed && <div className="mt-4 mb-2 w-6 h-px bg-black/10" />}
        <nav className="flex flex-col gap-0.5">
          {others.map((item) => (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              title={item.label}
              className={`flex items-center rounded-full text-[15px] text-[#1a1a1a] hover:bg-black/[0.04] transition-colors ${
                collapsed ? 'w-10 h-10 justify-center' : 'gap-3 h-11 px-3.5'
              }`}
            >
              <Icon name={item.icon} size={19} />
              {!collapsed && item.label}
            </button>
          ))}
          <button
            title="Logout"
            className={`flex items-center rounded-full text-[15px] text-[#ef4444] hover:bg-red-50 transition-colors font-500 ${
              collapsed ? 'w-10 h-10 justify-center' : 'gap-3 h-11 px-3.5'
            }`}
          >
            <Icon name="LogOut" size={19} />
            {!collapsed && 'Logout'}
          </button>
        </nav>

        {/* Profile */}
        <div className="mt-auto pt-4">
          {collapsed ? (
            <div className="w-11 h-11 rounded-2xl bg-[#fbe3e8] flex items-center justify-center mx-auto">
              <img src={AVATAR} alt="Julius" className="w-8 h-8 rounded-full object-cover" />
            </div>
          ) : (
            <div className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-[#fbe3e8]">
              <img src={AVATAR} alt="Julius" className="w-10 h-10 rounded-full object-cover" />
              <div className="leading-tight">
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-600">Julius</span>
                  <span className="text-[10px] bg-[#111] text-white px-1.5 py-0.5 rounded font-mono">
                    premium
                  </span>
                </div>
                <span className="text-[12px] text-[#7a6b6e] font-mono">julius@gmail.com</span>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* MAIN AREA */}
      <main className="flex-1 h-full bg-white rounded-3xl border border-black/5 flex items-center justify-center">
        <div className="text-center text-[#c4c4c4]">
          <Icon name="LayoutDashboard" size={40} className="mx-auto mb-3" />
          <p className="text-[17px] font-500 text-[#9a9a9a]">{active}</p>
        </div>
      </main>
    </div>
  );
};

export default Index;