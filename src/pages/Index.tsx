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
  { name: 'Dota 2', genre: 'MOBA', communities: 312, players: '11.2M', rating: 4.7, discount: -100, price: 0, score: '94.7%', release: 'Июл 2013', low: true, icon: 'Swords', color: 'from-red-500/30 to-orange-500/10' },
  { name: 'Valorant', genre: 'Шутер', communities: 248, players: '8.4M', rating: 4.6, discount: -50, price: 499, score: '92.3%', release: 'Июн 2020', low: false, icon: 'Crosshair', color: 'from-pink-500/30 to-rose-500/10' },
  { name: 'Minecraft', genre: 'Песочница', communities: 521, players: '21.7M', rating: 4.9, discount: -20, price: 1199, score: '96.8%', release: 'Ноя 2011', low: false, icon: 'Box', color: 'from-green-500/30 to-emerald-500/10' },
  { name: 'Counter-Strike 2', genre: 'Шутер', communities: 419, players: '15.2M', rating: 4.8, discount: -75, price: 0, score: '95.1%', release: 'Сен 2023', low: true, icon: 'Target', color: 'from-amber-500/30 to-yellow-500/10' },
  { name: 'League of Legends', genre: 'MOBA', communities: 287, players: '13.5M', rating: 4.5, discount: -35, price: 844, score: '90.4%', release: 'Окт 2009', low: false, icon: 'Shield', color: 'from-blue-500/30 to-indigo-500/10' },
  { name: 'Fortnite', genre: 'Battle Royale', communities: 389, players: '18.9M', rating: 4.4, discount: -30, price: 599, score: '89.2%', release: 'Июл 2017', low: true, icon: 'Castle', color: 'from-violet-500/30 to-purple-500/10' },
  { name: 'Cyberpunk 2077', genre: 'RPG', communities: 96, players: '5.6M', rating: 4.3, discount: -90, price: 299, score: '88.6%', release: 'Дек 2020', low: true, icon: 'Cpu', color: 'from-cyan-500/30 to-blue-500/10' },
  { name: 'Apex Legends', genre: 'Battle Royale', communities: 174, players: '9.1M', rating: 4.5, discount: -20, price: 480, score: '91.5%', release: 'Фев 2019', low: false, icon: 'Zap', color: 'from-orange-500/30 to-red-500/10' },
];

const genres = ['Все', 'MOBA', 'Шутер', 'Battle Royale', 'RPG', 'Песочница'];

const tournaments = [
  { name: 'Winter Clash 2026', game: 'Dota 2', prize: '500 000 ₽', date: '24 июня', teams: '32 / 32', status: 'soon', icon: 'Swords', color: 'from-red-500/30 to-orange-500/10' },
  { name: 'Radiant Cup', game: 'Valorant', prize: '250 000 ₽', date: '28 июня', teams: '18 / 24', status: 'open', icon: 'Crosshair', color: 'from-pink-500/30 to-rose-500/10' },
  { name: 'Major Arena', game: 'Counter-Strike 2', prize: '1 200 000 ₽', date: '5 июля', teams: '12 / 16', status: 'open', icon: 'Target', color: 'from-amber-500/30 to-yellow-500/10' },
  { name: 'Block Battle', game: 'Minecraft', prize: '120 000 ₽', date: '12 июля', teams: '64 / 64', status: 'soon', icon: 'Box', color: 'from-green-500/30 to-emerald-500/10' },
  { name: 'Rift Showdown', game: 'League of Legends', prize: '380 000 ₽', date: '19 июля', teams: '9 / 16', status: 'open', icon: 'Shield', color: 'from-blue-500/30 to-indigo-500/10' },
  { name: 'Last Squad Standing', game: 'Fortnite', prize: '300 000 ₽', date: '14 июня', teams: '100 / 100', status: 'live', icon: 'Castle', color: 'from-violet-500/30 to-purple-500/10' },
];

const tStatus: Record<string, { label: string; cls: string }> = {
  open: { label: 'Регистрация открыта', cls: 'bg-green-500/15 text-green-500' },
  soon: { label: 'Скоро старт', cls: 'bg-amber-500/15 text-amber-500' },
  live: { label: 'В эфире', cls: 'bg-red-500/15 text-red-500' },
};

const chats = [
  {
    id: 'dota',
    name: 'Dota 2 Россия',
    type: 'Сообщество',
    last: 'GhostByte: турнир в субботу 🏆',
    time: '12:48',
    unread: 3,
    color: 'from-red-500/30 to-orange-500/10',
    icon: 'Swords',
    online: true,
    messages: [
      { name: 'NeoStrike', text: 'Кто на вечерний рейтинг?', me: false, time: '12:40' },
      { name: 'Вы', text: 'Я в деле, через 5 минут', me: true, time: '12:42' },
      { name: 'LunaQueen', text: 'Тоже залетаю 🔥', me: false, time: '12:43' },
      { name: 'GhostByte', text: 'Турнир в субботу, призовой 50к', me: false, time: '12:48' },
    ],
  },
  {
    id: 'valorant',
    name: 'Valorant Squad',
    type: 'Сообщество',
    last: 'PixelWolf: го катку?',
    time: '11:30',
    unread: 0,
    color: 'from-pink-500/30 to-rose-500/10',
    icon: 'Crosshair',
    online: true,
    messages: [
      { name: 'PixelWolf', text: 'Го катку?', me: false, time: '11:28' },
      { name: 'Вы', text: 'Дай 10 минут', me: true, time: '11:30' },
    ],
  },
  {
    id: 'luna',
    name: 'LunaQueen',
    type: 'Личный чат',
    last: 'Скинь свой ник в игре',
    time: 'Вчера',
    unread: 1,
    color: 'from-violet-500/30 to-purple-500/10',
    icon: 'User',
    online: false,
    messages: [
      { name: 'LunaQueen', text: 'Привет! Видела твой клатч 🔥', me: false, time: 'Вчера' },
      { name: 'Вы', text: 'Спасибо ) повезло', me: true, time: 'Вчера' },
      { name: 'LunaQueen', text: 'Скинь свой ник в игре', me: false, time: 'Вчера' },
    ],
  },
  {
    id: 'cs2',
    name: 'CS2 Pro League',
    type: 'Сообщество',
    last: 'Clutch Kings ищут пятого',
    time: 'Пн',
    unread: 0,
    color: 'from-amber-500/30 to-yellow-500/10',
    icon: 'Target',
    online: true,
    messages: [
      { name: 'DarkRaven', text: 'Clutch Kings ищут пятого', me: false, time: 'Пн' },
    ],
  },
];

const feedTabs = [
  { key: 'all', label: 'Всё', icon: 'LayoutGrid' },
  { key: 'video', label: 'Видео', icon: 'Video' },
  { key: 'thread', label: 'Обсуждения', icon: 'MessageSquare' },
  { key: 'news', label: 'Новости', icon: 'Newspaper' },
];

const trends = [
  { tag: '#Patch92', topic: 'Valorant', posts: '12.4K' },
  { tag: '#WinterClash', topic: 'Турниры', posts: '8.1K' },
  { tag: '#Dota2', topic: 'MOBA', posts: '24.7K' },
  { tag: '#ClutchKings', topic: 'CS2', posts: '3.2K' },
  { tag: '#VoiceRooms', topic: 'Новости', posts: '5.6K' },
];

const suggested = [
  { name: 'Apex Predators', game: 'Apex Legends', members: '6.9K', icon: 'Zap', color: 'from-orange-500/30 to-red-500/10' },
  { name: 'Summoner Rift', game: 'LoL', members: '11.3K', icon: 'Shield', color: 'from-blue-500/30 to-indigo-500/10' },
  { name: 'Redstone Masters', game: 'Minecraft', members: '9.8K', icon: 'Box', color: 'from-green-500/30 to-lime-500/10' },
];

const feed = [
  {
    type: 'thread',
    author: 'LunaQueen',
    handle: '@lunaqueen',
    badge: 'Valorant',
    time: '12 мин',
    text: 'Разобрала новый патч 9.2 — баланс агентов наконец-то завезли. Джетт всё ещё топ, но саппорты теперь реально решают. Кто уже катал на новой мете? Делитесь впечатлениями 👇',
    likes: 342,
    comments: 87,
    reposts: 24,
    color: 'from-pink-500/30 to-rose-500/10',
  },
  {
    type: 'video',
    author: 'NeoStrike',
    handle: '@neostrike',
    badge: 'Dota 2',
    time: '1 ч',
    title: 'ТОП-10 камбэков сезона — невозможные победы',
    thumb: 'https://cdn.poehali.dev/projects/0b0686e1-0368-4333-82d7-e68c465aed2e/files/e66f600d-7074-44a3-9787-f03f026a7a36.jpg',
    duration: '14:32',
    views: '124K',
    likes: 5800,
    comments: 412,
    reposts: 96,
    color: 'from-red-500/30 to-orange-500/10',
  },
  {
    type: 'news',
    author: 'GuildHub',
    handle: '@guildhub',
    badge: 'Новости',
    time: '2 ч',
    text: 'Winter Clash 2026 стартует 24 июня. Призовой фонд увеличен до 500 000 ₽! 🏆',
    likes: 891,
    comments: 156,
    reposts: 203,
    color: 'from-amber-500/30 to-yellow-500/10',
  },
  {
    type: 'video',
    author: 'PixelWolf',
    handle: '@pixelwolf',
    badge: 'Valorant',
    time: '4 ч',
    title: 'Гайд: как подняться с Серебра до Платины за неделю',
    thumb: 'https://cdn.poehali.dev/projects/0b0686e1-0368-4333-82d7-e68c465aed2e/files/576848ed-9a12-4bff-aedc-3207bf3c31fe.jpg',
    duration: '22:08',
    views: '67K',
    likes: 3100,
    comments: 248,
    reposts: 54,
    color: 'from-violet-500/30 to-purple-500/10',
  },
  {
    type: 'thread',
    author: 'GhostByte',
    handle: '@ghostbyte',
    badge: 'CS2',
    time: '6 ч',
    text: 'Собираю команду на Major Arena. Нужен опытный AWPer и саппорт. Тренировки по вечерам, цель — топ-8. Пишите в личку, проведём пробные катки 🎯',
    likes: 178,
    comments: 64,
    reposts: 19,
    color: 'from-cyan-500/30 to-blue-500/10',
  },
  {
    type: 'news',
    author: 'GuildHub',
    handle: '@guildhub',
    badge: 'Новости',
    time: '8 ч',
    text: 'В платформу добавили голосовые комнаты для сообществ. Теперь можно собираться на катки прямо в чате 🎙️',
    likes: 624,
    comments: 98,
    reposts: 112,
    color: 'from-green-500/30 to-emerald-500/10',
  },
];

const events = [
  { day: '15', month: 'ИЮН', name: 'Стрим: разбор меты Dota 2', host: 'NeoStrike', time: '19:00', type: 'Стрим', members: 214, icon: 'Radio', color: 'from-red-500/30 to-orange-500/10' },
  { day: '17', month: 'ИЮН', name: 'Открытый набор в Valorant Squad', host: 'PixelWolf', time: '20:30', type: 'Набор', members: 56, icon: 'UserPlus', color: 'from-pink-500/30 to-rose-500/10' },
  { day: '21', month: 'ИЮН', name: 'Совместная стройка в Minecraft', host: 'Redstone Masters', time: '16:00', type: 'Ивент', members: 132, icon: 'Box', color: 'from-green-500/30 to-emerald-500/10' },
  { day: '24', month: 'ИЮН', name: 'Winter Clash 2026 — финал', host: 'GuildHub', time: '18:00', type: 'Турнир', members: 1840, icon: 'Trophy', color: 'from-amber-500/30 to-yellow-500/10' },
  { day: '28', month: 'ИЮН', name: 'Q&A с про-игроками CS2', host: 'Clutch Kings', time: '21:00', type: 'Встреча', members: 318, icon: 'MessageSquare', color: 'from-cyan-500/30 to-blue-500/10' },
  { day: '02', month: 'ИЮЛ', name: 'Турнир Apex Predators', host: 'Apex Predators', time: '17:30', type: 'Турнир', members: 92, icon: 'Zap', color: 'from-orange-500/30 to-red-500/10' },
];

const Index = () => {
  const [active, setActive] = useState('Обзор');
  const [collapsed, setCollapsed] = useState(false);
  const [dark, setDark] = useState(false);
  const [selected, setSelected] = useState<Community | null>(null);
  const [genre, setGenre] = useState('Все');
  const [gameFilter, setGameFilter] = useState<string | null>(null);
  const [activeChat, setActiveChat] = useState(chats[0].id);
  const [feedTab, setFeedTab] = useState('all');

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
        {active === 'Обзор' ? (
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-6 max-w-[1040px] mx-auto p-5 sm:p-7">
            <div>
            {/* Feed header */}
            <div className="mb-5">
              <h1 className={`text-[26px] font-700 tracking-tight ${t.text}`}>Лента</h1>
              <p className={`text-[14px] mt-0.5 ${t.muted}`}>
                Новости, видео и обсуждения игрового мира
              </p>
            </div>

            {/* Composer */}
            <div className={`flex items-center gap-3 rounded-2xl border p-3 mb-5 ${t.border}`}>
              <img src={AVATAR} alt="" className="w-10 h-10 rounded-full object-cover shrink-0" />
              <span className={`text-[15px] flex-1 ${t.muted}`}>Что нового в игре?</span>
              <div className={`flex items-center gap-2 ${t.muted}`}>
                <Icon name="Image" size={19} />
                <Icon name="Video" size={19} />
              </div>
              <button className={`h-9 px-4 rounded-full text-[14px] font-500 ${t.activeBtn}`}>
                Опубликовать
              </button>
            </div>

            {/* Filter tabs */}
            <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
              {feedTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFeedTab(tab.key)}
                  className={`flex items-center gap-1.5 h-9 px-4 rounded-full text-[14px] font-500 whitespace-nowrap transition-colors ${
                    feedTab === tab.key ? t.activeBtn : `border ${t.border} ${t.text} ${t.hover}`
                  }`}
                >
                  <Icon name={tab.icon} size={15} />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Feed */}
            <div className="flex flex-col gap-4">
              {feed
                .filter((p) => feedTab === 'all' || p.type === feedTab)
                .map((p, i) => (
                <article key={i} className={`rounded-2xl border p-4 ${t.border}`}>
                  {/* Author */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${p.color} flex items-center justify-center text-[15px] font-700 ${t.text}`}>
                      {p.author[0]}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[14px] font-600 ${t.text}`}>{p.author}</span>
                        <Icon name="BadgeCheck" size={14} className="text-blue-500" />
                        <span className={`text-[13px] ${t.muted}`}>{p.handle} · {p.time}</span>
                      </div>
                      <span className={`text-[11px] font-500 px-2 py-0.5 rounded-full inline-block mt-0.5 ${dark ? 'bg-white/10 text-white' : 'bg-black/[0.06] text-[#1a1a1a]'}`}>
                        {p.badge}
                      </span>
                    </div>
                    <Icon name="MoreHorizontal" size={18} className={`ml-auto ${t.muted}`} />
                  </div>

                  {/* Content */}
                  {p.type === 'video' ? (
                    <>
                      <p className={`text-[15px] font-600 mb-2.5 ${t.text}`}>{p.title}</p>
                      <div className="relative rounded-xl overflow-hidden mb-3 group cursor-pointer">
                        <img src={p.thumb} alt={p.title} className="w-full aspect-video object-cover" />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Icon name="Play" size={24} className="text-black ml-0.5" />
                          </div>
                        </div>
                        <span className="absolute bottom-2 right-2 text-[12px] font-500 px-1.5 py-0.5 rounded bg-black/70 text-white">
                          {p.duration}
                        </span>
                      </div>
                      <div className={`text-[13px] mb-3 ${t.muted}`}>
                        <Icon name="Eye" size={14} className="inline mr-1" />
                        {p.views} просмотров
                      </div>
                    </>
                  ) : (
                    <p
                      className={`mb-3 leading-relaxed ${
                        p.type === 'news'
                          ? `text-[16px] font-500 ${t.text}`
                          : `text-[15px] ${t.text}`
                      }`}
                    >
                      {p.text}
                    </p>
                  )}

                  {/* Actions */}
                  <div className={`flex items-center gap-6 text-[13px] ${t.muted}`}>
                    <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
                      <Icon name="Heart" size={17} />
                      {p.likes > 999 ? `${(p.likes / 1000).toFixed(1)}K` : p.likes}
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-blue-500 transition-colors">
                      <Icon name="MessageCircle" size={17} />
                      {p.comments}
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-green-500 transition-colors">
                      <Icon name="Repeat2" size={17} />
                      {p.reposts}
                    </button>
                    <button className="ml-auto hover:opacity-70 transition-opacity">
                      <Icon name="Bookmark" size={17} />
                    </button>
                    <button className="hover:opacity-70 transition-opacity">
                      <Icon name="Share2" size={17} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
            </div>

            {/* Right sidebar */}
            <aside className="hidden xl:flex flex-col gap-4 sticky top-0 self-start">
              {/* Trends */}
              <div className={`rounded-2xl border p-4 ${t.border}`}>
                <h3 className={`text-[13px] tracking-[0.06em] font-500 mb-3 ${t.muted}`}>В ТРЕНДЕ</h3>
                <div className="flex flex-col gap-3">
                  {trends.map((tr) => (
                    <div key={tr.tag} className="cursor-pointer group">
                      <div className={`text-[14px] font-600 group-hover:text-blue-500 transition-colors ${t.text}`}>
                        {tr.tag}
                      </div>
                      <div className={`text-[12px] ${t.muted}`}>{tr.topic} · {tr.posts} постов</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggested communities */}
              <div className={`rounded-2xl border p-4 ${t.border}`}>
                <h3 className={`text-[13px] tracking-[0.06em] font-500 mb-3 ${t.muted}`}>РЕКОМЕНДУЕМ</h3>
                <div className="flex flex-col gap-3">
                  {suggested.map((s) => (
                    <div key={s.name} className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-xl shrink-0 bg-gradient-to-br ${s.color} flex items-center justify-center`}>
                        <Icon name={s.icon} size={17} className={t.text} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className={`text-[13px] font-600 truncate ${t.text}`}>{s.name}</div>
                        <div className={`text-[11px] ${t.muted}`}>{s.game} · {s.members}</div>
                      </div>
                      <button className={`shrink-0 h-7 px-3 rounded-full text-[12px] font-500 ${t.activeBtn}`}>
                        +
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <p className={`text-[11px] px-1 ${t.muted}`}>
                GuildHub © 2026 · Платформа игровых сообществ
              </p>
            </aside>
          </div>
        ) : active === 'Сообщества' ? (
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-6 max-w-[1040px] mx-auto p-5 sm:p-7">
            <div>
              {/* Header */}
              <div className="mb-5">
                {gameFilter && (
                  <button
                    onClick={() => setGameFilter(null)}
                    className={`flex items-center gap-1.5 text-[13px] font-500 mb-2 ${t.muted} hover:${t.text}`}
                  >
                    <Icon name="ArrowLeft" size={15} />
                    Все сообщества
                  </button>
                )}
                <h1 className={`text-[26px] font-700 tracking-tight ${t.text}`}>
                  {gameFilter ? `Сообщества · ${gameFilter}` : 'Сообщества'}
                </h1>
                <p className={`text-[14px] mt-0.5 ${t.muted}`}>
                  {gameFilter
                    ? 'Все сообщества по выбранной игре'
                    : 'Найди свою гильдию и играй с единомышленниками'}
                </p>
              </div>

              {/* Create community bar */}
              <div className={`flex items-center gap-3 rounded-2xl border p-3 mb-5 ${t.border}`}>
                <div className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center ${t.activeBtn}`}>
                  <Icon name="Plus" size={20} />
                </div>
                <span className={`text-[15px] flex-1 ${t.muted}`}>Создай своё сообщество</span>
                <button className={`h-9 px-4 rounded-full text-[14px] font-500 ${t.activeBtn}`}>
                  Создать
                </button>
              </div>

              {/* Genre filter */}
              <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
                {genres.map((g) => (
                  <button
                    key={g}
                    onClick={() => setGenre(g)}
                    className={`h-9 px-4 rounded-full text-[14px] font-500 whitespace-nowrap transition-colors ${
                      genre === g ? t.activeBtn : `border ${t.border} ${t.text} ${t.hover}`
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>

              {/* Communities list */}
              <div className="flex flex-col gap-4">
                {communities
                  .filter((c) => !gameFilter || c.game === gameFilter)
                  .filter((c) => genre === 'Все' || c.tag === genre)
                  .map((c) => (
                    <article
                      key={c.name}
                      onClick={() => setSelected(c)}
                      className={`group rounded-2xl border p-4 transition-all hover:-translate-y-0.5 cursor-pointer ${t.border}`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-14 h-14 rounded-2xl shrink-0 bg-gradient-to-br ${c.color} flex items-center justify-center`}>
                          <Icon name={c.icon} size={26} className={t.text} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className={`text-[16px] font-600 ${t.text}`}>{c.name}</h3>
                            <span className={`text-[11px] font-500 px-2 py-0.5 rounded-full ${dark ? 'bg-white/10 text-white' : 'bg-black/[0.06] text-[#1a1a1a]'}`}>
                              {c.tag}
                            </span>
                          </div>
                          <div className={`flex items-center gap-4 text-[13px] mt-1 ${t.muted}`}>
                            <span className="flex items-center gap-1.5">
                              <Icon name="Users" size={14} />
                              {c.members}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-green-500" />
                              {c.online} онлайн
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Icon name="Gamepad2" size={14} />
                              {c.game}
                            </span>
                          </div>
                        </div>
                        <button className={`shrink-0 h-9 px-5 rounded-full text-[14px] font-500 transition-colors ${t.activeBtn}`}>
                          Открыть
                        </button>
                      </div>
                    </article>
                  ))}
              </div>
            </div>

            {/* Right sidebar */}
            <aside className="hidden xl:flex flex-col gap-4 sticky top-0 self-start">
              {/* Stats */}
              <div className={`rounded-2xl border p-4 ${t.border}`}>
                <h3 className={`text-[13px] tracking-[0.06em] font-500 mb-3 ${t.muted}`}>СТАТИСТИКА</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: 'Users', label: 'Сообществ', value: '1 248' },
                    { icon: 'Gamepad2', label: 'Игр', value: '326' },
                    { icon: 'Trophy', label: 'Турниров', value: '57' },
                    { icon: 'Zap', label: 'Сейчас онлайн', value: '24.1K' },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${dark ? 'bg-white/10' : 'bg-black/[0.06]'}`}>
                        <Icon name={s.icon} size={16} className={t.text} />
                      </div>
                      <span className={`text-[13px] flex-1 ${t.muted}`}>{s.label}</span>
                      <span className={`text-[15px] font-700 ${t.text}`}>{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top games */}
              <div className={`rounded-2xl border p-4 ${t.border}`}>
                <h3 className={`text-[13px] tracking-[0.06em] font-500 mb-3 ${t.muted}`}>ПОПУЛЯРНЫЕ ИГРЫ</h3>
                <div className="flex flex-col gap-3">
                  {games.slice(0, 4).map((g) => (
                    <div
                      key={g.name}
                      onClick={() => openGame(g.name)}
                      className="flex items-center gap-2.5 cursor-pointer"
                    >
                      <div className={`w-9 h-9 rounded-xl shrink-0 bg-gradient-to-br ${g.color} flex items-center justify-center`}>
                        <Icon name={g.icon} size={17} className={t.text} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className={`text-[13px] font-600 truncate ${t.text}`}>{g.name}</div>
                        <div className={`text-[11px] ${t.muted}`}>{g.communities} сообществ</div>
                      </div>
                      <Icon name="ChevronRight" size={16} className={t.muted} />
                    </div>
                  ))}
                </div>
              </div>

              <p className={`text-[11px] px-1 ${t.muted}`}>
                GuildHub © 2026 · Платформа игровых сообществ
              </p>
            </aside>
          </div>
        ) : active === 'Игры' ? (
          <div className="p-5 sm:p-7">
            {/* Header */}
            <div className="mb-5">
              <h1 className={`text-[26px] font-700 tracking-tight ${t.text}`}>Каталог игр</h1>
              <p className={`text-[14px] mt-0.5 ${t.muted}`}>
                Лучшие скидки и рейтинги — выбери игру и найди сообщества
              </p>
            </div>

            {/* Genre filters */}
            <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
              {genres.map((g) => (
                <button
                  key={g}
                  onClick={() => setGenre(g)}
                  className={`h-9 px-4 rounded-full text-[14px] font-500 whitespace-nowrap transition-colors ${
                    genre === g ? t.activeBtn : `border ${t.border} ${t.text} ${t.hover}`
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>

            {/* Games table */}
            <div className={`rounded-2xl border overflow-hidden ${t.border}`}>
              {/* Table head */}
              <div className={`hidden md:grid grid-cols-[1fr_90px_90px_90px_110px] items-center gap-3 px-4 py-2.5 text-[12px] font-600 tracking-wide ${t.muted} ${dark ? 'bg-white/[0.03]' : 'bg-black/[0.02]'}`}>
                <span>Название</span>
                <span className="text-center">Скидка</span>
                <span className="text-right">Цена</span>
                <span className="text-center">Рейтинг</span>
                <span className="text-right">Выход</span>
              </div>

              {/* Rows */}
              {games
                .filter((g) => genre === 'Все' || g.genre === genre)
                .map((g) => (
                  <div
                    key={g.name}
                    onClick={() => openGame(g.name)}
                    className={`grid grid-cols-[1fr_auto] md:grid-cols-[1fr_90px_90px_90px_110px] items-center gap-3 px-4 py-2.5 cursor-pointer border-t ${t.border} ${t.hover} transition-colors`}
                  >
                    {/* Cover + name */}
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-16 h-9 rounded-md shrink-0 bg-gradient-to-br ${g.color} flex items-center justify-center`}>
                        <Icon name={g.icon} size={18} className={t.text} />
                      </div>
                      <div className="min-w-0">
                        <div className={`text-[14px] font-600 truncate ${t.text}`}>{g.name}</div>
                        {g.low && (
                          <span className={`text-[11px] ${t.muted}`}>исторический минимум</span>
                        )}
                      </div>
                    </div>

                    {/* Discount */}
                    <span
                      className={`hidden md:flex items-center justify-center h-7 rounded-md text-[13px] font-700 ${
                        g.discount <= -75
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-green-500/20 text-green-500'
                      }`}
                    >
                      {g.discount}%
                    </span>

                    {/* Price */}
                    <span className={`hidden md:block text-right text-[14px] font-500 ${t.text}`}>
                      {g.price === 0 ? '0 ₽' : `${g.price} ₽`}
                    </span>

                    {/* Rating */}
                    <span className={`hidden md:flex items-center justify-center gap-1 text-[13px] ${t.muted}`}>
                      <Icon name="Star" size={13} className="text-amber-400" />
                      {g.score}
                    </span>

                    {/* Release */}
                    <span className={`hidden md:block text-right text-[13px] ${t.muted}`}>
                      {g.release}
                    </span>

                    {/* Mobile compact */}
                    <span
                      className={`md:hidden flex items-center justify-center h-7 px-2 rounded-md text-[13px] font-700 ${
                        g.discount <= -75 ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-500'
                      }`}
                    >
                      {g.discount}%
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ) : active === 'Турниры' ? (
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-6 max-w-[1040px] mx-auto p-5 sm:p-7">
            <div>
              {/* Header */}
              <div className="mb-5">
                <h1 className={`text-[26px] font-700 tracking-tight ${t.text}`}>Турниры</h1>
                <p className={`text-[14px] mt-0.5 ${t.muted}`}>
                  Собирай команду, регистрируйся и сражайся за призовой фонд
                </p>
              </div>

              {/* Tournaments list */}
              <div className="flex flex-col gap-4">
                {tournaments.map((tr) => {
                  const st = tStatus[tr.status];
                  return (
                    <article
                      key={tr.name}
                      className={`group rounded-2xl border p-4 transition-all hover:-translate-y-0.5 ${t.border}`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-14 h-14 rounded-2xl shrink-0 bg-gradient-to-br ${tr.color} flex items-center justify-center`}>
                          <Icon name={tr.icon} size={26} className={t.text} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <h3 className={`text-[16px] font-600 ${t.text}`}>{tr.name}</h3>
                            <span className={`text-[11px] font-500 px-2 py-0.5 rounded-full ${st.cls}`}>
                              {tr.status === 'live' && (
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 mr-1 animate-pulse" />
                              )}
                              {st.label}
                            </span>
                          </div>
                          <div className={`flex items-center gap-4 text-[13px] mt-1 ${t.muted}`}>
                            <span className="flex items-center gap-1.5"><Icon name="Gamepad2" size={14} />{tr.game}</span>
                            <span className="flex items-center gap-1.5"><Icon name="Calendar" size={14} />{tr.date}</span>
                            <span className="flex items-center gap-1.5"><Icon name="Users" size={14} />{tr.teams}</span>
                          </div>
                        </div>

                        <button
                          className={`shrink-0 h-9 px-5 rounded-full text-[14px] font-500 transition-colors ${
                            tr.status === 'open' ? t.activeBtn : `border ${t.border} ${t.text} ${t.hover}`
                          }`}
                        >
                          {tr.status === 'live' ? 'Смотреть' : tr.status === 'open' ? 'Участвовать' : 'Напомнить'}
                        </button>
                      </div>

                      <div className={`flex items-center gap-1.5 mt-3 pt-3 border-t text-[13px] ${t.border} ${t.muted}`}>
                        <Icon name="Trophy" size={15} className="text-amber-500" />
                        Призовой фонд
                        <span className={`ml-auto text-[16px] font-700 ${t.text}`}>{tr.prize}</span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Right sidebar */}
            <aside className="hidden xl:flex flex-col gap-4 sticky top-0 self-start">
              {/* Prize pool */}
              <div className={`rounded-2xl border p-4 ${t.border}`}>
                <h3 className={`text-[13px] tracking-[0.06em] font-500 mb-3 ${t.muted}`}>ОБЩИЙ ПРИЗОВОЙ ФОНД</h3>
                <div className="flex items-center gap-2.5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/30 to-yellow-500/10 flex items-center justify-center">
                    <Icon name="Trophy" size={22} className="text-amber-500" />
                  </div>
                  <div>
                    <div className={`text-[22px] font-700 ${t.text}`}>2.75M ₽</div>
                    <div className={`text-[12px] ${t.muted}`}>в 6 турнирах</div>
                  </div>
                </div>
              </div>

              {/* Live now */}
              <div className={`rounded-2xl border p-4 ${t.border}`}>
                <h3 className={`text-[13px] tracking-[0.06em] font-500 mb-3 ${t.muted}`}>СЕЙЧАС В ЭФИРЕ</h3>
                <div className="flex flex-col gap-3">
                  {tournaments.filter((tr) => tr.status === 'live').map((tr) => (
                    <div key={tr.name} className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-xl shrink-0 bg-gradient-to-br ${tr.color} flex items-center justify-center`}>
                        <Icon name={tr.icon} size={17} className={t.text} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className={`text-[13px] font-600 truncate ${t.text}`}>{tr.name}</div>
                        <div className="flex items-center gap-1 text-[11px] text-red-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                          в эфире
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className={`text-[11px] px-1 ${t.muted}`}>
                GuildHub © 2026 · Платформа игровых сообществ
              </p>
            </aside>
          </div>
        ) : active === 'Чаты' ? (
          <div className="h-full grid grid-cols-1 md:grid-cols-[300px_1fr]">
            {/* Chat list */}
            <div className={`border-r overflow-y-auto ${t.border}`}>
              <div className="p-4">
                <h1 className={`text-[20px] font-700 tracking-tight ${t.text}`}>Чаты</h1>
              </div>
              <div className="px-2 pb-2 flex flex-col gap-1">
                {chats.map((c) => {
                  const isOpen = activeChat === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setActiveChat(c.id)}
                      className={`flex items-center gap-3 p-2.5 rounded-2xl text-left transition-colors ${
                        isOpen ? (dark ? 'bg-white/[0.07]' : 'bg-black/[0.05]') : t.hover
                      }`}
                    >
                      <div className="relative shrink-0">
                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center`}>
                          <Icon name={c.icon} size={20} className={t.text} />
                        </div>
                        {c.online && (
                          <span className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 ${dark ? 'border-[#1f1f1f]' : 'border-white'}`} />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`text-[14px] font-600 truncate ${t.text}`}>{c.name}</span>
                          <span className={`text-[11px] shrink-0 ${t.muted}`}>{c.time}</span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <span className={`text-[12px] truncate ${t.muted}`}>{c.last}</span>
                          {c.unread > 0 && (
                            <span className="shrink-0 min-w-[18px] h-[18px] px-1 rounded-full bg-red-500 text-white text-[11px] font-600 flex items-center justify-center">
                              {c.unread}
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Conversation */}
            {(() => {
              const chat = chats.find((c) => c.id === activeChat)!;
              return (
                <div className="flex flex-col h-full overflow-hidden">
                  {/* Chat header */}
                  <div className={`flex items-center gap-3 p-4 border-b shrink-0 ${t.border}`}>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${chat.color} flex items-center justify-center`}>
                      <Icon name={chat.icon} size={18} className={t.text} />
                    </div>
                    <div>
                      <div className={`text-[15px] font-600 ${t.text}`}>{chat.name}</div>
                      <div className={`text-[12px] ${t.muted}`}>
                        {chat.online ? '🟢 в сети' : chat.type}
                      </div>
                    </div>
                    <Icon name="Phone" size={18} className={`ml-auto ${t.muted}`} />
                    <Icon name="MoreVertical" size={18} className={t.muted} />
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-5 space-y-3">
                    {chat.messages.map((m, i) => (
                      <div key={i} className={`flex ${m.me ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[70%] ${m.me ? 'items-end' : 'items-start'} flex flex-col`}>
                          {!m.me && (
                            <span className={`text-[12px] font-500 mb-1 px-1 ${t.muted}`}>{m.name}</span>
                          )}
                          <div
                            className={`px-3.5 py-2.5 rounded-2xl text-[14px] ${
                              m.me
                                ? `${t.activeBtn} rounded-br-md`
                                : `${dark ? 'bg-white/[0.07] text-white' : 'bg-black/[0.05] text-[#1a1a1a]'} rounded-bl-md`
                            }`}
                          >
                            {m.text}
                          </div>
                          <span className={`text-[11px] mt-1 px-1 ${t.muted}`}>{m.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input */}
                  <div className="p-4 shrink-0">
                    <div className={`flex items-center gap-2 h-12 px-4 rounded-full border ${t.border}`}>
                      <Icon name="Smile" size={18} className={t.muted} />
                      <span className={`text-[14px] flex-1 ${t.muted}`}>Написать сообщение...</span>
                      <button className={`w-9 h-9 rounded-full flex items-center justify-center ${t.activeBtn}`}>
                        <Icon name="Send" size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        ) : active === 'События' ? (
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-6 max-w-[1040px] mx-auto p-5 sm:p-7">
            <div>
              {/* Header */}
              <div className="mb-5">
                <h1 className={`text-[26px] font-700 tracking-tight ${t.text}`}>События</h1>
                <p className={`text-[14px] mt-0.5 ${t.muted}`}>
                  Стримы, ивенты и встречи сообществ — не пропусти ничего
                </p>
              </div>

              {/* Create event bar */}
              <div className={`flex items-center gap-3 rounded-2xl border p-3 mb-5 ${t.border}`}>
                <div className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center ${t.activeBtn}`}>
                  <Icon name="CalendarPlus" size={20} />
                </div>
                <span className={`text-[15px] flex-1 ${t.muted}`}>Запланируй своё событие</span>
                <button className={`h-9 px-4 rounded-full text-[14px] font-500 ${t.activeBtn}`}>
                  Создать
                </button>
              </div>

              {/* Events list */}
              <div className="flex flex-col gap-4">
                {events.map((e) => (
                  <article
                    key={e.name}
                    className={`group rounded-2xl border p-4 transition-all hover:-translate-y-0.5 ${t.border}`}
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Date */}
                      <div className={`w-14 h-14 rounded-2xl shrink-0 bg-gradient-to-br ${e.color} flex flex-col items-center justify-center`}>
                        <span className={`text-[20px] font-700 leading-none ${t.text}`}>{e.day}</span>
                        <span className={`text-[10px] font-600 tracking-wider ${t.muted}`}>{e.month}</span>
                      </div>

                      {/* Info */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className={`text-[16px] font-600 ${t.text}`}>{e.name}</h3>
                          <span className={`flex items-center gap-1 text-[11px] font-500 px-2 py-0.5 rounded-full ${dark ? 'bg-white/10 text-white' : 'bg-black/[0.06] text-[#1a1a1a]'}`}>
                            <Icon name={e.icon} size={11} />
                            {e.type}
                          </span>
                        </div>
                        <div className={`flex items-center gap-4 text-[13px] mt-1 ${t.muted}`}>
                          <span className="flex items-center gap-1.5"><Icon name="Clock" size={14} />{e.time}</span>
                          <span className="flex items-center gap-1.5"><Icon name="User" size={14} />{e.host}</span>
                          <span className="flex items-center gap-1.5"><Icon name="Users" size={14} />{e.members} идут</span>
                        </div>
                      </div>

                      <button className={`shrink-0 h-9 px-5 rounded-full text-[14px] font-500 transition-colors border ${t.border} ${t.text} ${t.hover}`}>
                        Участвовать
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right sidebar */}
            <aside className="hidden xl:flex flex-col gap-4 sticky top-0 self-start">
              {/* This week */}
              <div className={`rounded-2xl border p-4 ${t.border}`}>
                <h3 className={`text-[13px] tracking-[0.06em] font-500 mb-3 ${t.muted}`}>НА ЭТОЙ НЕДЕЛЕ</h3>
                <div className="flex items-center gap-2.5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/10 flex items-center justify-center">
                    <Icon name="CalendarCheck" size={22} className="text-cyan-500" />
                  </div>
                  <div>
                    <div className={`text-[22px] font-700 ${t.text}`}>{events.length}</div>
                    <div className={`text-[12px] ${t.muted}`}>событий запланировано</div>
                  </div>
                </div>
              </div>

              {/* By type */}
              <div className={`rounded-2xl border p-4 ${t.border}`}>
                <h3 className={`text-[13px] tracking-[0.06em] font-500 mb-3 ${t.muted}`}>ТИПЫ СОБЫТИЙ</h3>
                <div className="flex flex-col gap-3">
                  {[...new Set(events.map((e) => e.type))].map((type) => {
                    const ev = events.find((e) => e.type === type)!;
                    const count = events.filter((e) => e.type === type).length;
                    return (
                      <div key={type} className="flex items-center gap-2.5">
                        <div className={`w-9 h-9 rounded-xl shrink-0 bg-gradient-to-br ${ev.color} flex items-center justify-center`}>
                          <Icon name={ev.icon} size={17} className={t.text} />
                        </div>
                        <span className={`text-[13px] flex-1 font-500 ${t.text}`}>{type}</span>
                        <span className={`text-[13px] ${t.muted}`}>{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className={`text-[11px] px-1 ${t.muted}`}>
                GuildHub © 2026 · Платформа игровых сообществ
              </p>
            </aside>
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