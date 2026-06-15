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
  { name: 'Dota 2 Россия', game: 'Dota 2', members: '12.4K', tag: 'MOBA', online: 842, color: 'from-red-500/20 to-orange-500/10', icon: 'Swords' },
  { name: 'Mid or Feed', game: 'Dota 2', members: '6.3K', tag: 'MOBA', online: 318, color: 'from-red-500/20 to-rose-500/10', icon: 'Swords' },
  { name: 'Valorant Squad', game: 'Valorant', members: '8.1K', tag: 'Шутер', online: 531, color: 'from-pink-500/20 to-rose-500/10', icon: 'Crosshair' },
  { name: 'Radiant Climb', game: 'Valorant', members: '4.2K', tag: 'Шутер', online: 199, color: 'from-pink-500/20 to-fuchsia-500/10', icon: 'Crosshair' },
  { name: 'Minecraft Builders', game: 'Minecraft', members: '21.7K', tag: 'Песочница', online: 1203, color: 'from-green-500/20 to-emerald-500/10', icon: 'Box' },
  { name: 'Redstone Masters', game: 'Minecraft', members: '9.8K', tag: 'Песочница', online: 644, color: 'from-green-500/20 to-lime-500/10', icon: 'Box' },
  { name: 'CS2 Pro League', game: 'Counter-Strike 2', members: '15.2K', tag: 'Шутер', online: 967, color: 'from-amber-500/20 to-yellow-500/10', icon: 'Target' },
  { name: 'Clutch Kings', game: 'Counter-Strike 2', members: '7.5K', tag: 'Шутер', online: 421, color: 'from-amber-500/20 to-orange-500/10', icon: 'Target' },
  { name: 'Cyberpunk Lore', game: 'Cyberpunk 2077', members: '5.6K', tag: 'RPG', online: 214, color: 'from-cyan-500/20 to-blue-500/10', icon: 'Cpu' },
  { name: 'Fortnite Builders', game: 'Fortnite', members: '18.9K', tag: 'Battle Royale', online: 1521, color: 'from-violet-500/20 to-purple-500/10', icon: 'Castle' },
  { name: 'Summoner Rift', game: 'League of Legends', members: '11.3K', tag: 'MOBA', online: 702, color: 'from-blue-500/20 to-indigo-500/10', icon: 'Shield' },
  { name: 'Apex Predators', game: 'Apex Legends', members: '6.9K', tag: 'Battle Royale', online: 388, color: 'from-orange-500/20 to-red-500/10', icon: 'Zap' },
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

type Community = (typeof communities)[number];

const posts = [
  { author: 'NeoStrike', time: '12 мин', text: 'Кто в пати на вечерний рейтинг? Ищу двоих на мид и саппорт 🎮', likes: 24, comments: 8 },
  { author: 'LunaQueen', time: '1 ч', text: 'Залил гайд по новому патчу — разобрал мету и топ героев. Ссылка в закрепе!', likes: 156, comments: 42 },
  { author: 'GhostByte', time: '3 ч', text: 'Турнир в эту субботу, призовой фонд 50 000 ₽. Регистрация открыта 🏆', likes: 312, comments: 97 },
];

const onlineMembers = [
  { name: 'NeoStrike', role: 'Лидер' },
  { name: 'LunaQueen', role: 'Модератор' },
  { name: 'GhostByte', role: 'Игрок' },
  { name: 'PixelWolf', role: 'Игрок' },
  { name: 'DarkRaven', role: 'Игрок' },
];

const chatMessages = [
  { name: 'PixelWolf', text: 'Го катку?' },
  { name: 'NeoStrike', text: 'Я в деле, через 5 минут' },
  { name: 'LunaQueen', text: 'Тоже залетаю 🔥' },
];

const games = [
  { name: 'Dota 2', genre: 'MOBA', communities: 312, players: '11.2M', rating: 4.7, icon: 'Swords', color: 'from-red-500/30 to-orange-500/10' },
  { name: 'Valorant', genre: 'Шутер', communities: 248, players: '8.4M', rating: 4.6, icon: 'Crosshair', color: 'from-pink-500/30 to-rose-500/10' },
  { name: 'Minecraft', genre: 'Песочница', communities: 521, players: '21.7M', rating: 4.9, icon: 'Box', color: 'from-green-500/30 to-emerald-500/10' },
  { name: 'Counter-Strike 2', genre: 'Шутер', communities: 419, players: '15.2M', rating: 4.8, icon: 'Target', color: 'from-amber-500/30 to-yellow-500/10' },
  { name: 'League of Legends', genre: 'MOBA', communities: 287, players: '13.5M', rating: 4.5, icon: 'Shield', color: 'from-blue-500/30 to-indigo-500/10' },
  { name: 'Fortnite', genre: 'Battle Royale', communities: 389, players: '18.9M', rating: 4.4, icon: 'Castle', color: 'from-violet-500/30 to-purple-500/10' },
  { name: 'Cyberpunk 2077', genre: 'RPG', communities: 96, players: '5.6M', rating: 4.3, icon: 'Cpu', color: 'from-cyan-500/30 to-blue-500/10' },
  { name: 'Apex Legends', genre: 'Battle Royale', communities: 174, players: '9.1M', rating: 4.5, icon: 'Zap', color: 'from-orange-500/30 to-red-500/10' },
];

const genres = ['Все', 'MOBA', 'Шутер', 'Battle Royale', 'RPG', 'Песочница'];

const Index = () => {
  const [active, setActive] = useState('Обзор');
  const [collapsed, setCollapsed] = useState(false);
  const [dark, setDark] = useState(false);
  const [selected, setSelected] = useState<Community | null>(null);
  const [genre, setGenre] = useState('Все');
  const [gameFilter, setGameFilter] = useState<string | null>(null);

  const openGame = (gameName: string) => {
    setGameFilter(gameName);
    setActive('Сообщества');
  };

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
                onClick={() => {
                  setActive(item.label);
                  setGameFilter(null);
                }}
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
                {gameFilter && (
                  <button
                    onClick={() => setGameFilter(null)}
                    className={`flex items-center gap-1.5 text-[13px] font-500 mb-2 ${t.muted} hover:${t.text}`}
                  >
                    <Icon name="ArrowLeft" size={15} />
                    Все сообщества
                  </button>
                )}
                <h1 className={`text-[28px] font-700 tracking-tight ${t.text}`}>
                  {gameFilter ? `Сообщества · ${gameFilter}` : 'Найди свою гильдию'}
                </h1>
                <p className={`text-[15px] mt-1 ${t.muted}`}>
                  {gameFilter
                    ? 'Все сообщества по выбранной игре'
                    : 'Создавай сообщества, играй с друзьями и побеждай в турнирах'}
                </p>
              </div>
              <button className={`flex items-center gap-2 h-11 px-5 rounded-full font-500 text-[15px] ${t.activeBtn}`}>
                <Icon name="Plus" size={18} />
                Создать сообщество
              </button>
            </div>

            {/* Stats */}
            {!gameFilter && (
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
            )}

            {/* Communities grid */}
            <h2 className={`text-[13px] tracking-[0.08em] font-500 mb-3 ${t.muted}`}>
              {gameFilter ? 'НАЙДЕНО СООБЩЕСТВ' : 'ПОПУЛЯРНЫЕ СООБЩЕСТВА'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {communities
                .filter((c) => !gameFilter || c.game === gameFilter)
                .map((c) => (
                <div
                  key={c.name}
                  onClick={() => setSelected(c)}
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
                    Открыть
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : active === 'Игры' ? (
          <div className="p-7">
            {/* Header */}
            <div className="mb-6">
              <h1 className={`text-[28px] font-700 tracking-tight ${t.text}`}>Каталог игр</h1>
              <p className={`text-[15px] mt-1 ${t.muted}`}>
                Выбери игру и найди сообщества по своему вкусу
              </p>
            </div>

            {/* Genre filters */}
            <div className="flex flex-wrap gap-2 mb-7">
              {genres.map((g) => (
                <button
                  key={g}
                  onClick={() => setGenre(g)}
                  className={`h-9 px-4 rounded-full text-[14px] font-500 transition-colors ${
                    genre === g ? t.activeBtn : `border ${t.border} ${t.text} ${t.hover}`
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>

            {/* Games grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {games
                .filter((g) => genre === 'Все' || g.genre === genre)
                .map((g) => (
                  <div
                    key={g.name}
                    onClick={() => openGame(g.name)}
                    className={`group rounded-2xl border overflow-hidden transition-all hover:-translate-y-1 cursor-pointer ${t.border}`}
                  >
                    {/* Cover */}
                    <div className={`relative h-32 bg-gradient-to-br ${g.color} flex items-center justify-center`}>
                      <Icon name={g.icon} size={44} className={t.text} />
                      <span className={`absolute top-3 right-3 flex items-center gap-1 text-[12px] font-600 px-2 py-1 rounded-full ${dark ? 'bg-black/40 text-white' : 'bg-white/70 text-[#1a1a1a]'}`}>
                        <Icon name="Star" size={12} className="text-amber-400" />
                        {g.rating}
                      </span>
                    </div>
                    {/* Info */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`text-[17px] font-600 ${t.text}`}>{g.name}</h3>
                        <span className={`text-[11px] font-500 px-2 py-0.5 rounded-full ${dark ? 'bg-white/10 text-white' : 'bg-black/[0.06] text-[#1a1a1a]'}`}>
                          {g.genre}
                        </span>
                      </div>
                      <div className={`flex items-center gap-4 text-[13px] ${t.muted}`}>
                        <span className="flex items-center gap-1.5"><Icon name="Users" size={14} />{g.communities} сообществ</span>
                        <span className="flex items-center gap-1.5"><Icon name="Gamepad2" size={14} />{g.players}</span>
                      </div>
                    </div>
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

      {/* COMMUNITY DETAIL OVERLAY */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 animate-fade-in">
          <div
            className={`relative w-full max-w-5xl h-[88vh] rounded-3xl border overflow-hidden flex flex-col ${t.panel} animate-scale-in`}
          >
            {/* Banner */}
            <div className={`relative h-32 bg-gradient-to-br ${selected.color} shrink-0`}>
              <button
                onClick={() => setSelected(null)}
                className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center ${dark ? 'bg-black/40 text-white' : 'bg-white/70 text-[#1a1a1a]'} hover:scale-105 transition-transform`}
              >
                <Icon name="X" size={18} />
              </button>
              <div className="absolute -bottom-7 left-7 flex items-end gap-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border-4 ${dark ? 'bg-[#1f1f1f] border-[#1f1f1f]' : 'bg-white border-white'}`}>
                  <Icon name={selected.icon} size={30} className={t.text} />
                </div>
              </div>
            </div>

            {/* Header info */}
            <div className="pt-10 px-7 pb-4 flex items-center justify-between flex-wrap gap-3 shrink-0">
              <div>
                <h2 className={`text-[22px] font-700 ${t.text}`}>{selected.name}</h2>
                <div className={`flex items-center gap-4 text-[13px] mt-0.5 ${t.muted}`}>
                  <span>{selected.tag}</span>
                  <span className="flex items-center gap-1.5"><Icon name="Users" size={14} />{selected.members}</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500" />{selected.online} онлайн</span>
                </div>
              </div>
              <button className={`flex items-center gap-2 h-10 px-5 rounded-full font-500 text-[14px] ${t.activeBtn}`}>
                <Icon name="UserPlus" size={16} />
                Вступить
              </button>
            </div>

            {/* Body: feed + sidebar */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5 px-7 pb-7 overflow-hidden">
              {/* Feed */}
              <div className="overflow-y-auto pr-1 space-y-4">
                {posts.map((p, i) => (
                  <div key={i} className={`rounded-2xl border p-4 ${t.border}`}>
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-600 ${t.activeBtn}`}>
                        {p.author[0]}
                      </div>
                      <div>
                        <div className={`text-[14px] font-600 ${t.text}`}>{p.author}</div>
                        <div className={`text-[12px] ${t.muted}`}>{p.time} назад</div>
                      </div>
                    </div>
                    <p className={`text-[14px] leading-relaxed mb-3 ${t.text}`}>{p.text}</p>
                    <div className={`flex items-center gap-5 text-[13px] ${t.muted}`}>
                      <span className="flex items-center gap-1.5 cursor-pointer hover:text-red-500 transition-colors"><Icon name="Heart" size={15} />{p.likes}</span>
                      <span className="flex items-center gap-1.5 cursor-pointer"><Icon name="MessageCircle" size={15} />{p.comments}</span>
                      <span className="flex items-center gap-1.5 cursor-pointer ml-auto"><Icon name="Share2" size={15} /></span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right sidebar: members + chat */}
              <div className="hidden lg:flex flex-col gap-4 overflow-hidden">
                <div className={`rounded-2xl border p-4 ${t.border}`}>
                  <h3 className={`text-[13px] tracking-[0.06em] font-500 mb-3 ${t.muted}`}>УЧАСТНИКИ ОНЛАЙН</h3>
                  <div className="space-y-2.5">
                    {onlineMembers.map((m) => (
                      <div key={m.name} className="flex items-center gap-2.5">
                        <div className="relative">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-600 ${dark ? 'bg-white/10 text-white' : 'bg-black/[0.06] text-[#1a1a1a]'}`}>
                            {m.name[0]}
                          </div>
                          <span className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 border-2 ${dark ? 'border-[#1f1f1f]' : 'border-white'}`} />
                        </div>
                        <div className="leading-tight">
                          <div className={`text-[13px] font-500 ${t.text}`}>{m.name}</div>
                          <div className={`text-[11px] ${t.muted}`}>{m.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`rounded-2xl border p-4 flex-1 flex flex-col overflow-hidden ${t.border}`}>
                  <h3 className={`text-[13px] tracking-[0.06em] font-500 mb-3 ${t.muted}`}>ОБЩИЙ ЧАТ</h3>
                  <div className="flex-1 overflow-y-auto space-y-2.5">
                    {chatMessages.map((m, i) => (
                      <div key={i}>
                        <span className={`text-[12px] font-600 ${t.text}`}>{m.name}: </span>
                        <span className={`text-[13px] ${t.muted}`}>{m.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className={`mt-3 flex items-center gap-2 h-10 px-3 rounded-full border ${t.border}`}>
                    <Icon name="Smile" size={16} className={t.muted} />
                    <span className={`text-[13px] ${t.muted}`}>Написать...</span>
                    <Icon name="Send" size={15} className={`${t.muted} ml-auto`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;