import { useState } from 'react';
import Icon from '@/components/ui/icon';

const AVATAR =
  'https://cdn.poehali.dev/projects/0b0686e1-0368-4333-82d7-e68c465aed2e/bucket/3e4aeea1-36ab-478f-bb7f-78e2fe00b6cc.jpg';

const mainMenu = [
  { icon: 'LayoutGrid', label: 'Обзор' },
  { icon: 'Users', label: 'Сообщества' },
  { icon: 'Gamepad2', label: 'Игры' },
  { icon: 'Trophy', label: 'Турниры' },
  { icon: 'MessageSquare', label: 'Чаты' },
  { icon: 'Calendar', label: 'События' },
];

const others = [
  { icon: 'CircleUserRound', label: 'Профиль' },
  { icon: 'Bell', label: 'Уведомления' },
  { icon: 'Settings', label: 'Настройки' },
];

const communities = [
  { name: 'Dota 2 Россия', members: '12.4K', tag: 'MOBA', online: 842, color: 'from-red-500/20 to-orange-500/10', icon: 'Swords' },
  { name: 'Valorant Squad', members: '8.1K', tag: 'Шутер', online: 531, color: 'from-pink-500/20 to-rose-500/10', icon: 'Crosshair' },
  { name: 'Minecraft Builders', members: '21.7K', tag: 'Песочница', online: 1203, color: 'from-green-500/20 to-emerald-500/10', icon: 'Box' },
  { name: 'CS2 Pro League', members: '15.2K', tag: 'Шутер', online: 967, color: 'from-amber-500/20 to-yellow-500/10', icon: 'Target' },
  { name: 'Cyberpunk Lore', members: '5.6K', tag: 'RPG', online: 214, color: 'from-cyan-500/20 to-blue-500/10', icon: 'Cpu' },
  { name: 'Fortnite Builders', members: '18.9K', tag: 'Battle Royale', online: 1521, color: 'from-violet-500/20 to-purple-500/10', icon: 'Castle' },
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
              <span className={`text-[19px] font-600 tracking-tight ${t.text}`}>GuildHub</span>
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
        className={`flex-1 h-full rounded-3xl border transition-colors overflow-y-auto ${t.panel}`}
      >
        {active === 'Обзор' || active === 'Сообщества' ? (
          <div className="p-7">
            {/* Hero */}
            <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
              <div>
                <h1 className={`text-[28px] font-700 tracking-tight ${t.text}`}>
                  Найди свою гильдию
                </h1>
                <p className={`text-[15px] mt-1 ${t.muted}`}>
                  Создавай сообщества, играй с друзьями и побеждай в турнирах
                </p>
              </div>
              <button className={`flex items-center gap-2 h-11 px-5 rounded-full font-500 text-[15px] ${t.activeBtn}`}>
                <Icon name="Plus" size={18} />
                Создать сообщество
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-7">
              {[
                { icon: 'Users', label: 'Сообществ', value: '1 248' },
                { icon: 'Gamepad2', label: 'Игр', value: '326' },
                { icon: 'Trophy', label: 'Турниров', value: '57' },
                { icon: 'Zap', label: 'Онлайн', value: '24.1K' },
              ].map((s) => (
                <div key={s.label} className={`rounded-2xl border p-4 ${t.border}`}>
                  <Icon name={s.icon} size={20} className={t.muted} />
                  <div className={`text-[22px] font-700 mt-2 ${t.text}`}>{s.value}</div>
                  <div className={`text-[13px] ${t.muted}`}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Communities grid */}
            <h2 className={`text-[13px] tracking-[0.08em] font-500 mb-3 ${t.muted}`}>
              ПОПУЛЯРНЫЕ СООБЩЕСТВА
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {communities.map((c) => (
                <div
                  key={c.name}
                  className={`group relative rounded-2xl border p-5 transition-all hover:-translate-y-1 cursor-pointer ${t.border} bg-gradient-to-br ${c.color}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${dark ? 'bg-white/10' : 'bg-black/[0.06]'}`}>
                      <Icon name={c.icon} size={24} className={t.text} />
                    </div>
                    <span className={`text-[11px] font-500 px-2 py-1 rounded-full ${dark ? 'bg-white/10 text-white' : 'bg-black/[0.06] text-[#1a1a1a]'}`}>
                      {c.tag}
                    </span>
                  </div>
                  <h3 className={`text-[17px] font-600 mb-1 ${t.text}`}>{c.name}</h3>
                  <div className={`flex items-center gap-4 text-[13px] ${t.muted}`}>
                    <span className="flex items-center gap-1.5">
                      <Icon name="Users" size={14} />
                      {c.members}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      {c.online} онлайн
                    </span>
                  </div>
                  <button className={`mt-4 w-full h-9 rounded-full text-[14px] font-500 transition-colors ${t.activeBtn} opacity-0 group-hover:opacity-100`}>
                    Вступить
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className={`text-center ${t.muted}`}>
              <Icon name="Gamepad2" size={40} className="mx-auto mb-3" />
              <p className="text-[17px] font-500">{active}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;