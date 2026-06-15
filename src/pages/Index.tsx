import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/0b0686e1-0368-4333-82d7-e68c465aed2e/files/6478cc03-81a8-4740-94a2-9cce3c2f9065.jpg';

const courses = [
  {
    icon: 'Code2',
    title: 'Веб-разработка',
    desc: 'От первой строки кода до полноценного приложения на React.',
    lessons: 48,
    weeks: 12,
    color: 'from-primary/20 to-primary/5',
    accent: 'text-primary',
  },
  {
    icon: 'Palette',
    title: 'UX/UI Дизайн',
    desc: 'Проектируем интерфейсы, которыми пользуются миллионы.',
    lessons: 36,
    weeks: 10,
    color: 'from-secondary/20 to-secondary/5',
    accent: 'text-secondary',
  },
  {
    icon: 'LineChart',
    title: 'Аналитика данных',
    desc: 'Учимся принимать решения на основе цифр и графиков.',
    lessons: 40,
    weeks: 11,
    color: 'from-accent/20 to-accent/5',
    accent: 'text-accent',
  },
];

const features = [
  { icon: 'GraduationCap', title: 'Практика с первого дня', desc: 'Реальные проекты в портфолио уже на старте обучения.' },
  { icon: 'Users', title: 'Менторы из индустрии', desc: 'Каждую неделю — личный разбор от практикующих экспертов.' },
  { icon: 'Award', title: 'Диплом и трудоустройство', desc: 'Помогаем с резюме и доводим до первого оффера.' },
  { icon: 'Infinity', title: 'Доступ навсегда', desc: 'Возвращайтесь к материалам и обновлениям в любое время.' },
];

const stats = [
  { value: '12 000+', label: 'выпускников' },
  { value: '94%', label: 'находят работу' },
  { value: '120+', label: 'курсов' },
  { value: '4.9', label: 'средний рейтинг' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <nav className="container flex items-center justify-between h-18 py-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Sparkles" size={18} className="text-white" />
            </div>
            <span className="font-display font-700 text-lg">Курсум</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#courses" className="hover:text-foreground transition-colors">Курсы</a>
            <a href="#features" className="hover:text-foreground transition-colors">Почему мы</a>
            <a href="#cta" className="hover:text-foreground transition-colors">Запись</a>
          </div>
          <Button className="rounded-full font-600">Войти</Button>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative pt-36 pb-24 grid-pattern">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/25 rounded-full blur-[140px]" />
        <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm text-muted-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Набор на новый поток открыт
            </span>
            <h1 className="font-display font-800 text-5xl md:text-6xl xl:text-7xl leading-[1.05] mb-6">
              Учись тому,<br />что меняет <span className="text-gradient">жизнь</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8">
              Онлайн-курсы по востребованным профессиям с практикой, менторами и реальными проектами в портфолио.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full h-13 px-8 text-base font-600">
                Начать обучение
                <Icon name="ArrowRight" size={18} className="ml-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-13 px-8 text-base font-600 border-border">
                <Icon name="Play" size={16} className="mr-1" />
                Смотреть демо
              </Button>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-secondary/40 blur-3xl rounded-full" />
            <img
              src={HERO_IMG}
              alt="Онлайн-обучение"
              className="relative rounded-3xl w-full shadow-2xl border border-border/50"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/50 bg-card/40">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display font-700 text-3xl md:text-4xl text-gradient">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="container py-24">
        <div className="max-w-xl mb-14">
          <h2 className="font-display font-700 text-4xl md:text-5xl mb-4">Популярные курсы</h2>
          <p className="text-muted-foreground text-lg">Выберите направление и начните путь к новой профессии уже сегодня.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((c) => (
            <div
              key={c.title}
              className={`group relative rounded-3xl p-8 bg-gradient-to-br ${c.color} border border-border/50 hover:border-border transition-all hover:-translate-y-2 duration-300`}
            >
              <div className="w-14 h-14 rounded-2xl bg-card flex items-center justify-center mb-6 border border-border/50">
                <Icon name={c.icon} size={26} className={c.accent} />
              </div>
              <h3 className="font-display font-600 text-2xl mb-3">{c.title}</h3>
              <p className="text-muted-foreground mb-6">{c.desc}</p>
              <div className="flex items-center gap-5 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1.5"><Icon name="BookOpen" size={15} />{c.lessons} уроков</span>
                <span className="flex items-center gap-1.5"><Icon name="Clock" size={15} />{c.weeks} недель</span>
              </div>
              <button className="flex items-center gap-2 font-600 group-hover:gap-3 transition-all">
                Подробнее <Icon name="ArrowRight" size={16} className={c.accent} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="container py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display font-700 text-4xl md:text-5xl mb-6">Почему выбирают нас</h2>
            <p className="text-muted-foreground text-lg mb-10">
              Мы создали среду, где знания превращаются в навыки, а навыки — в карьеру мечты.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-muted flex items-center justify-center">
                    <Icon name={f.icon} size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-600 mb-1">{f.title}</h4>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl bg-gradient-to-br from-secondary/20 to-primary/10 border border-border/50 p-10">
            <div className="space-y-5">
              {['Записались на курс', 'Прошли первый модуль', 'Собрали портфолио', 'Получили оффер'].map((step, i) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-700 text-sm">
                    {i + 1}
                  </div>
                  <span className="font-500">{step}</span>
                  {i < 3 && <div className="flex-1 h-px bg-border" />}
                  {i === 3 && <Icon name="PartyPopper" size={20} className="text-accent ml-auto" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="container py-24">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary p-12 md:p-20 text-center">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="relative">
            <h2 className="font-display font-800 text-4xl md:text-6xl text-white mb-6">
              Готовы начать?
            </h2>
            <p className="text-white/90 text-lg max-w-lg mx-auto mb-8">
              Присоединяйтесь к тысячам студентов, которые уже меняют свою жизнь вместе с Курсум.
            </p>
            <Button size="lg" variant="secondary" className="rounded-full h-14 px-10 text-base font-700 bg-white text-primary hover:bg-white/90">
              Записаться на курс
              <Icon name="Rocket" size={18} className="ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/50">
        <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Sparkles" size={16} className="text-white" />
            </div>
            <span className="font-display font-700">Курсум</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Курсум. Учим тому, что меняет жизнь.</p>
          <div className="flex gap-3">
            {['Send', 'Youtube', 'Instagram'].map((s) => (
              <a key={s} href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Icon name={s} size={16} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
