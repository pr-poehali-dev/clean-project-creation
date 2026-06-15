import { useState } from 'react';
import Icon from '@/components/ui/icon';

const AVATAR =
  'https://cdn.poehali.dev/projects/0b0686e1-0368-4333-82d7-e68c465aed2e/bucket/3e4aeea1-36ab-478f-bb7f-78e2fe00b6cc.jpg';

const mainMenu = [
  { icon: 'Pentagon', label: 'Обзор' },
  { icon: 'Filter', label: 'Фильтры' },
  { icon: 'Bookmark', label: 'Избранное' },
  { icon: 'File', label: 'Отклики' },
  { icon: 'Atom', label: 'Тесты навыков' },
  { icon: 'GalleryThumbnails', label: 'Обучение', fallback: 'SquarePlus' },
];

const others = [
  { icon: 'CircleUserRound', label: 'Аккаунт' },
  { icon: 'Bell', label: 'Уведомления' },
  { icon: 'Settings', label: 'Настройки' },
];

const Logo = ({ size = 26, dark }: { size?: number; dark?: boolean }) => (
  <div
    className={`flex items-center justify-center rounded-[9px] shrink-0 ${
      dark ? 'bg-white text-[#111]' : 'bg-[#111] text-white'
    }`}
    style={{ width: size, height: size }}
  >
    <Icon name="Spline" size={size * 0.6} fallback="Slash" />
  </div>
);

const Index = () => {
  const [active, setActive] = useState('Обзор');
  const [collapsed, setCollapsed] = useState(false);
  const [dark, setDark] = useState(false);

  const t = {
    page: dark ? 'bg-[#161616]' : 'bg-[#f3f3f3]',
    panel: dark ? 'bg-[#1f1f1f] border-white/[0.06]' : 'bg-white border-black/5',
    text: dark ? 'text-[#e8e8e8]' : 'text-[#1a1a1a]',
    muted: dark ? 'text-[#7a7a7a]' : 'text-[#9a9a9a]',
    hover: dark ? 'hover:bg-white/[0.06]' : 'hover:bg-black/[0.04]',
    border: dark ? 'border-white/[0.08]' : 'border-black/[0.07]',
    activeBtn: dark ? 'bg-white text-[#111]' : 'bg-[#111] text-white',
    divider: dark ? 'bg-white/10' : 'bg-black/10',
    iconHover: dark ? 'hover:text-white' : 'hover:text-[#1a1a1a]',
  };

  return (
    <div className={`h-screen flex p-4 gap-4 overflow-hidden transition-colors ${t.page}`}>
      {/* SIDEBAR */}
      <aside
        className={`relative h-full rounded-3xl border shadow-[0_2px_24px_rgba(0,0,0,0.04)] flex flex-col py-4 transition-all duration-300 ease-in-out ${t.panel} ${
          collapsed ? 'w-[72px] items-center px-2.5' : 'w-[280px] px-4'
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center ${collapsed ? 'justify-center' : 'justify-between'} px-1`}
        >
          <div className="flex items-center gap-2.5">
            <Logo size={28} dark={dark} />
            {!collapsed && (
              <span className={`text-[19px] font-600 tracking-tight ${t.text}`}>Travay</span>
            )}
          </div>
          {!collapsed && (
            <div className={`flex items-center gap-3 ${t.muted}`}>
              <Icon name="CircleHelp" size={18} />
              <button
                onClick={() => setDark((v) => !v)}
                title="Сменить тему"
                className={`${t.iconHover} transition-colors`}
              >
                <Icon name={dark ? 'Sun' : 'Moon'} size={18} />
              </button>
              <button
                onClick={() => setCollapsed(true)}
                title="Свернуть"
                className={`${t.iconHover} transition-colors`}
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
            className={`absolute top-[18px] -right-[18px] z-10 w-9 h-9 rounded-xl border shadow-[0_2px_10px_rgba(0,0,0,0.06)] flex items-center justify-center transition-colors ${t.panel} ${t.text} ${t.hover}`}
          >
            <Icon name="Scaling" size={17} />
          </button>
        )}

        {/* Search */}
        <div
          className={`mt-4 flex items-center rounded-full border ${t.border} ${
            collapsed ? 'w-10 h-10 justify-center' : 'gap-2.5 h-11 px-3.5'
          }`}
        >
          <Icon name="Search" size={17} className={t.muted} />
          {!collapsed && <span className={`text-[15px] ${t.muted}`}>Поиск...</span>}
        </div>

        {/* Main menu */}
        {!collapsed && (
          <p className={`mt-5 mb-1.5 px-1 text-[11px] tracking-[0.08em] font-500 ${t.muted}`}>
            ГЛАВНОЕ МЕНЮ
          </p>
        )}
        {collapsed && <div className={`mt-4 mb-2 w-6 h-px ${t.divider}`} />}
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
                    ? `${t.activeBtn} font-500`
                    : `${t.text} ${t.hover} font-400`
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
          <p className={`mt-5 mb-1.5 px-1 text-[11px] tracking-[0.08em] font-500 ${t.muted}`}>
            ПРОЧЕЕ
          </p>
        )}
        {collapsed && <div className={`mt-4 mb-2 w-6 h-px ${t.divider}`} />}
        <nav className="flex flex-col gap-0.5">
          {others.map((item) => (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              title={item.label}
              className={`flex items-center rounded-full text-[15px] transition-colors ${t.text} ${t.hover} ${
                collapsed ? 'w-10 h-10 justify-center' : 'gap-3 h-11 px-3.5'
              }`}
            >
              <Icon name={item.icon} size={19} />
              {!collapsed && item.label}
            </button>
          ))}
          <button
            title="Выход"
            className={`flex items-center rounded-full text-[15px] text-[#ef4444] hover:bg-red-500/10 transition-colors font-500 ${
              collapsed ? 'w-10 h-10 justify-center' : 'gap-3 h-11 px-3.5'
            }`}
          >
            <Icon name="LogOut" size={19} />
            {!collapsed && 'Выход'}
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
                  <span className="text-[14px] font-600 text-[#1a1a1a]">Julius</span>
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
      <main
        className={`flex-1 h-full rounded-3xl border flex items-center justify-center transition-colors ${t.panel}`}
      >
        <div className={`text-center ${t.muted}`}>
          <Icon name="LayoutDashboard" size={40} className="mx-auto mb-3" />
          <p className="text-[17px] font-500">{active}</p>
        </div>
      </main>
    </div>
  );
};

export default Index;
