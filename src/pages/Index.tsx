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

const Logo = ({ size = 28 }: { size?: number }) => (
  <div
    className="flex items-center justify-center rounded-[10px] bg-[#111] text-white shrink-0"
    style={{ width: size, height: size }}
  >
    <Icon name="Spline" size={size * 0.6} fallback="Slash" />
  </div>
);

const Index = () => {
  const [active, setActive] = useState('Overview');

  return (
    <div className="min-h-screen bg-[#f3f3f3] flex items-start justify-center gap-7 py-10 px-6">
      {/* EXPANDED SIDEBAR */}
      <aside className="w-[360px] min-h-[1340px] bg-white rounded-[28px] border border-black/5 shadow-[0_2px_24px_rgba(0,0,0,0.04)] flex flex-col p-5">
        {/* Header */}
        <div className="flex items-center justify-between px-1 pt-1">
          <div className="flex items-center gap-2.5">
            <Logo size={30} />
            <span className="text-[22px] font-600 tracking-tight">Travay</span>
          </div>
          <div className="flex items-center gap-3 text-[#9a9a9a]">
            <Icon name="CircleHelp" size={20} />
            <Icon name="Scaling" size={20} />
          </div>
        </div>

        {/* Search */}
        <div className="mt-5 flex items-center gap-2.5 h-[52px] px-4 rounded-full border border-black/[0.07] bg-white">
          <Icon name="Search" size={19} className="text-[#b3b3b3]" />
          <span className="text-[17px] text-[#b3b3b3]">Search...</span>
        </div>

        {/* Main menu */}
        <p className="mt-7 mb-2 px-1 text-[13px] tracking-[0.08em] text-[#9a9a9a] font-500">
          MAIN MENU
        </p>
        <nav className="flex flex-col gap-0.5">
          {mainMenu.map((item) => {
            const isActive = active === item.label;
            return (
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                className={`flex items-center gap-3.5 h-[54px] px-4 rounded-full text-[17px] transition-colors ${
                  isActive
                    ? 'bg-[#111] text-white font-500'
                    : 'text-[#1a1a1a] hover:bg-black/[0.04] font-400'
                }`}
              >
                <Icon name={item.icon} fallback={item.fallback || 'Circle'} size={21} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Others */}
        <p className="mt-7 mb-2 px-1 text-[13px] tracking-[0.08em] text-[#9a9a9a] font-500">
          OTHERS
        </p>
        <nav className="flex flex-col gap-0.5">
          {others.map((item) => (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className="flex items-center gap-3.5 h-[54px] px-4 rounded-full text-[17px] text-[#1a1a1a] hover:bg-black/[0.04] transition-colors"
            >
              <Icon name={item.icon} size={21} />
              {item.label}
            </button>
          ))}
          <button className="flex items-center gap-3.5 h-[54px] px-4 rounded-full text-[17px] text-[#ef4444] hover:bg-red-50 transition-colors font-500">
            <Icon name="LogOut" size={21} />
            Logout
          </button>
        </nav>

        {/* Profile */}
        <div className="mt-auto pt-5">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#fbe3e8]">
            <img src={AVATAR} alt="Julius" className="w-11 h-11 rounded-full object-cover" />
            <div className="leading-tight">
              <div className="flex items-center gap-2">
                <span className="text-[16px] font-600">Julius</span>
                <span className="text-[11px] bg-[#111] text-white px-1.5 py-0.5 rounded font-mono">
                  premium
                </span>
              </div>
              <span className="text-[13px] text-[#7a6b6e] font-mono">julius@gmail.com</span>
            </div>
          </div>
        </div>
      </aside>

      {/* COLLAPSED SIDEBAR */}
      <aside className="relative w-[78px] min-h-[1340px] bg-white rounded-[28px] border border-black/5 shadow-[0_2px_24px_rgba(0,0,0,0.04)] flex flex-col items-center py-5">
        <Logo size={34} />

        {/* expand pill */}
        <div className="absolute top-[58px] -right-3 w-9 h-9 rounded-xl bg-white border border-black/[0.07] shadow-sm flex items-center justify-center text-[#1a1a1a]">
          <Icon name="Scaling" size={17} />
        </div>

        <button className="mt-7 w-11 h-11 rounded-full border border-black/[0.07] flex items-center justify-center text-[#1a1a1a]">
          <Icon name="Search" size={19} />
        </button>

        <div className="my-5 w-7 h-px bg-black/10" />

        <div className="flex flex-col items-center gap-5">
          {mainMenu.map((item) => {
            const isActive = active === item.label;
            return (
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors ${
                  isActive ? 'bg-[#111] text-white' : 'text-[#1a1a1a] hover:bg-black/[0.04]'
                }`}
              >
                <Icon name={item.icon} fallback={item.fallback || 'Circle'} size={21} />
              </button>
            );
          })}
        </div>

        <div className="my-5 w-7 h-px bg-black/10" />

        <div className="flex flex-col items-center gap-5">
          {others.map((item) => (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className="w-11 h-11 rounded-full flex items-center justify-center text-[#1a1a1a] hover:bg-black/[0.04] transition-colors"
            >
              <Icon name={item.icon} size={21} />
            </button>
          ))}
          <button className="w-11 h-11 rounded-full flex items-center justify-center text-[#ef4444] hover:bg-red-50 transition-colors">
            <Icon name="LogOut" size={21} />
          </button>
        </div>

        <div className="mt-auto">
          <div className="w-12 h-12 rounded-2xl bg-[#fbe3e8] flex items-center justify-center">
            <img src={AVATAR} alt="Julius" className="w-9 h-9 rounded-full object-cover" />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Index;
