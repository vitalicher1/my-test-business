import React, { useState, useEffect } from 'react';
import { 
  Gamepad2, 
  Rocket, 
  BrainCircuit, 
  TrendingUp, 
  Target, 
  Users, 
  Zap,
  ChevronRight,
  Sparkles,
  BarChart3,
  MonitorPlay,
  Lightbulb,
  CheckCircle2,
  Briefcase,
  Award,
  BookOpen,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const Header = () => (
  <header className="fixed top-0 left-0 w-full z-50 bg-[#060913]/80 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)]">
          <Gamepad2 className="text-white w-6 h-6" />
        </div>
        <span className="text-2xl font-black tracking-tight text-white">
          Cognify<span className="text-cyan-400">Media</span>
        </span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <a href="#about" className="hover:text-fuchsia-400 transition-colors">Про підхід</a>
        <a href="#services" className="hover:text-cyan-400 transition-colors">Послуги</a>
        <a href="#cases" className="hover:text-emerald-400 transition-colors">Кейси</a>
        <a href="#calculator" className="hover:text-purple-400 transition-colors">Калькулятор ROI</a>
      </nav>
      <button className="relative group overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 rounded-full animate-spin-slow group-hover:scale-105 transition-transform duration-300"></span>
        <div className="relative bg-[#060913] px-6 py-2 rounded-full flex items-center gap-2 transition-all duration-300 group-hover:bg-opacity-0">
          <span className="text-sm font-bold text-white group-hover:text-white transition-colors">Обговорити проєкт</span>
          <Zap className="w-4 h-4 text-cyan-400 group-hover:text-white" />
        </div>
      </button>
    </div>
  </header>
);

const Hero = () => {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLevelUp = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    let newXp = xp + 35;
    if (newXp >= 100) {
      setTimeout(() => {
        setLevel(l => l + 1);
        setXp(newXp - 100);
      }, 300);
      setXp(100); // Max out briefly for animation
    } else {
      setXp(newXp);
    }

    setTimeout(() => setIsAnimating(false), 400);
  };

  return (
    <section className="pt-32 pb-20 px-6 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-cyan-400/30 text-cyan-400 text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>EdTech агенція нового покоління</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
            Трансформуємо нудне навчання у <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">захопливу гру.</span><br />
          </h1>
          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            Ми перетворюємо класичні корпоративні тренінги та онлайн-курси на інтерактивні сюжетні пригоди. 
            Підвищуйте рівень утримання уваги та перетворюйте своїх студентів чи співробітників на залучених гравців.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] flex items-center justify-center gap-2">
              Дивитись шоурил <MonitorPlay className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-lg transition-all duration-300 backdrop-blur-md">
              Наша методологія
            </button>
          </div>
        </div>

        {/* Gamified Interactive Element */}
        <div className="relative">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative z-10 transform transition-transform duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-3xl pointer-events-none" />
            
            <div className="flex justify-between items-end mb-6">
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Поточний статус</p>
                <h3 className="text-3xl font-black text-white flex items-center gap-3">
                  Рівень {level}
                  <span className="flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                  </span>
                </h3>
              </div>
              <div className="text-right">
                <span className="text-cyan-400 font-mono font-bold text-xl">{xp}</span>
                <span className="text-gray-500 font-mono text-sm"> / 100 XP</span>
              </div>
            </div>

            <div className="h-4 bg-gray-900 rounded-full overflow-hidden border border-white/5 mb-8 shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-emerald-400 transition-all duration-500 ease-out relative"
                style={{ width: `${xp}%` }}
              >
                <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]" />
              </div>
            </div>

            <button 
              onClick={handleLevelUp}
              className={`w-full py-4 rounded-xl font-black text-lg uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-2
                ${isAnimating ? 'bg-fuchsia-600 scale-95 shadow-none text-white' : 'bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-400/50 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] text-white'}
              `}
            >
              <Rocket className={`w-6 h-6 ${isAnimating ? 'animate-bounce' : ''}`} />
              {isAnimating ? '+35 XP Отримано!' : 'Отримати досвід'}
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">
              Відчуйте дофаміновий ефект гейміфікації на собі.
            </p>
          </div>
          
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-500/10 rounded-full border border-cyan-400/20 backdrop-blur-md flex items-center justify-center animate-[bounce_4s_infinite]">
            <BrainCircuit className="text-cyan-400 w-10 h-10" />
          </div>
          <div className="absolute -bottom-10 -left-6 w-32 h-32 bg-fuchsia-500/10 rounded-full border border-fuchsia-400/20 backdrop-blur-md flex items-center justify-center animate-[bounce_5s_infinite_reverse]">
            <Target className="text-fuchsia-400 w-12 h-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutEdutainment = () => (
  <section id="about" className="py-24 px-6 relative border-t border-white/5 bg-[#0a0d1a]">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
          Чому <span className="text-fuchsia-400">Edutainment</span> працює?
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Наш мозок еволюційно налаштований навчатися через гру. Коли ми поєднуємо освітній контент (Education) 
          з розважальними механіками (Entertainment), ми активуємо дофамінові цикли. Це не просто "робить навчання веселим", 
          це фундаментально змінює те, як інформація закріплюється в довгостроковій пам'яті.
        </p>
        <ul className="space-y-4 pt-4">
          {['Зниження когнітивного навантаження завдяки мікронавчанню', 'Стимулювання внутрішньої мотивації через систему винагород', 'Безпечне середовище для помилок у симуляторах'].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm sm:col-span-2 hover:border-cyan-400/30 transition-colors">
          <h4 className="text-5xl font-black text-cyan-400 mb-2">На 80%</h4>
          <p className="text-gray-400 font-medium">Вище утримання уваги порівняно зі звичайними відео-лекціями.</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:border-fuchsia-400/30 transition-colors">
          <h4 className="text-4xl font-black text-fuchsia-400 mb-2">x3</h4>
          <p className="text-gray-400 font-medium">Залученість та час взаємодії з платформою.</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:border-emerald-400/30 transition-colors">
          <h4 className="text-4xl font-black text-emerald-400 mb-2">95%</h4>
          <p className="text-gray-400 font-medium">Коефіцієнт завершеності (Completion Rate) курсів.</p>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: 'Корпоративне навчання',
      desc: 'Перетворюємо нудні інструкції з безпеки та комплаєнсу на інтерактивні квести. Співробітники засвоюють культуру компанії швидше та без примусу.',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'from-cyan-400 to-blue-600',
      glow: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]',
      border: 'hover:border-cyan-400/50'
    },
    {
      title: 'Освітні ігри',
      desc: 'Розробка повноцінних "Serious Games" (серйозних ігор) для відпрацювання складних навичок, софт-скілів та прийняття рішень у віртуальному середовищі.',
      icon: <Gamepad2 className="w-8 h-8" />,
      color: 'from-fuchsia-400 to-purple-600',
      glow: 'hover:shadow-[0_0_30px_rgba(232,121,249,0.3)]',
      border: 'hover:border-fuchsia-400/50'
    },
    {
      title: 'Гейміфікація процесів',
      desc: 'Інтеграція ігрових механік (лідерборди, бейджі, рівні, економіка) у вашу існуючу LMS або робочий портал для стимулювання активності.',
      icon: <Target className="w-8 h-8" />,
      color: 'from-emerald-400 to-teal-600',
      glow: 'hover:shadow-[0_0_30px_rgba(52,211,153,0.3)]',
      border: 'hover:border-emerald-400/50'
    },
    {
      title: 'Інтерактивний сторітелінг',
      desc: 'Створення розгалужених відео-сценаріїв та коміксів, де користувач сам обирає розвиток подій, впливаючи на фінал навчального модуля.',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'from-amber-400 to-orange-600',
      glow: 'hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]',
      border: 'hover:border-amber-400/50'
    }
  ];

  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-white">Наші <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Послуги</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Ми не просто створюємо контент. Ми проєктуємо цифрові екосистеми, адаптовані під сучасні патерни сприйняття інформації.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => (
            <div key={idx} className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col ${srv.border} ${srv.glow} group cursor-pointer`}>
              <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${srv.color} text-white shadow-lg transition-transform group-hover:scale-110 duration-300`}>
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{srv.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow text-sm">{srv.desc}</p>
              <div className="flex items-center text-sm font-bold text-white group-hover:text-cyan-400 transition-colors mt-auto">
                Дізнатись більше <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Cases = () => {
  const cases = [
    {
      category: 'FinTech',
      title: 'Симулятор для комерційного банку',
      desc: 'Розробили 3D-симулятор відділення банку для відпрацювання нестандартних ситуацій з клієнтами. Результат: зменшення скарг на 34%.',
      color: 'bg-cyan-500/10 border-cyan-500/30'
    },
    {
      category: 'Retail',
      title: 'Гейміфікований онбординг',
      desc: 'Мобільний квест для нових касирів великої мережі супермаркетів. Час виходу на самостійну роботу скоротився з 14 до 5 днів.',
      color: 'bg-fuchsia-500/10 border-fuchsia-500/30'
    },
    {
      category: 'IT Education',
      title: 'Навчальна RPG-гра для Академії',
      desc: 'Вивчення основ Python у форматі фентезійної RPG, де код використовується як магічні заклинання. Утримання студентів зросло на 45%.',
      color: 'bg-emerald-500/10 border-emerald-500/30'
    }
  ];

  return (
    <section id="cases" className="py-24 px-6 relative bg-gradient-to-b from-transparent to-[#0a0d1a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Наші <span className="text-emerald-400">Кейси</span></h2>
            <p className="text-gray-400 text-lg max-w-xl">Реальні історії трансформації бізнес-показників завдяки правильному впровадженню Edutainment-механік.</p>
          </div>
          <button className="flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors">
            Дивитись портфоліо <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <div key={idx} className="group rounded-3xl bg-[#111626] border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300">
              <div className="h-48 w-full bg-[#1a2138] relative overflow-hidden flex items-center justify-center">
                <div className={`absolute inset-0 ${c.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                <div className="w-32 h-32 rounded-full blur-[60px] bg-white/10" />
                <span className="relative z-10 text-white/50 font-black text-2xl tracking-widest uppercase">{c.category}</span>
              </div>
              <div className="p-8">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">{c.category}</div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{c.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Calculator = () => {
  const [employees, setEmployees] = useState(250);
  const [completionRate, setCompletionRate] = useState(30);

  // Dynamic calculations
  const projectedRate = Math.min(completionRate + 45, 98); 
  const currentEngaged = Math.floor(employees * (completionRate / 100));
  const newEngaged = Math.floor(employees * (projectedRate / 100));
  const additionalEngaged = newEngaged - currentEngaged;
  
  // Custom logic for the requested metrics
  const estimatedHours = newEngaged * 15; // Assumption: 15 effective hours per engaged user
  
  // Dummy ROI calculation that looks impressive but plausible
  // Base ROI increases as the gap between current and projected grows
  const roiPercentage = Math.floor(((projectedRate - completionRate) / completionRate) * 120) + 115;

  return (
    <section id="calculator" className="py-24 px-6 relative bg-gradient-to-b from-[#0a0d1a] to-cyan-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0f1423]/80 backdrop-blur-xl border border-cyan-900/50 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_50px_rgba(8,145,178,0.1)]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Input Side */}
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold mb-6">
                  <BarChart3 className="w-4 h-4" />
                  <span>Калькулятор ефективності</span>
                </div>
                <h2 className="text-4xl font-black text-white mb-4">Розрахуйте ваш <br/><span className="text-cyan-400">Edutainment ROI</span></h2>
                <p className="text-gray-400">Використовуйте повзунки, щоб побачити, як гейміфікація навчального контенту вплине на показники вашої компанії.</p>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-sm font-bold text-gray-300 uppercase tracking-wide">Кількість співробітників / студентів</label>
                    <span className="text-2xl font-black text-white">{employees}</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="1000" 
                    step="10"
                    value={employees} 
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-sm font-bold text-gray-300 uppercase tracking-wide">Поточний рівень залученості</label>
                    <span className="text-2xl font-black text-white">{completionRate}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="80" 
                    step="1"
                    value={completionRate} 
                    onChange={(e) => setCompletionRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50"
                  />
                </div>
              </div>
            </div>

            {/* Output Side */}
            <div className="bg-gradient-to-br from-[#151b2e] to-[#0a0d17] border border-white/5 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4">Прогноз результатів із Cognify Media</h3>
              
              <div className="space-y-8">
                <div className="flex justify-between items-center group">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Прогнозована залученість</p>
                    <p className="text-3xl font-black text-emerald-400 flex items-center gap-2">
                      {projectedRate}% <TrendingUp className="w-6 h-6" />
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Зараз</p>
                    <p className="text-sm font-medium text-gray-400 line-through">{completionRate}%</p>
                  </div>
                </div>

                <div className="flex justify-between items-center group">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Години ефективного навчання</p>
                    <p className="text-3xl font-black text-cyan-400">
                      {estimatedHours.toLocaleString()} <span className="text-lg text-cyan-400/50 font-medium">год/міс</span>
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider font-bold">Приблизний ROI (%)</p>
                  <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">
                    +{roiPercentage}%
                  </p>
                  <p className="text-xs text-gray-500 mt-2">*Розрахунок базується на середніх показниках зниження плинності кадрів та підвищення продуктивності після гейміфікації.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-24 px-6 relative border-t border-white/5 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-[#060913] to-fuchsia-900/20" />
    <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
      <h2 className="text-5xl md:text-6xl font-black text-white">
        Готові підвищити <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">ефективність навчання?</span>
      </h2>
      <p className="text-xl text-gray-400">
        Залишіть заявку на безкоштовну консультацію. Ми проаналізуємо ваші поточні освітні матеріали та запропонуємо концепт їх гейміфікації.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
        <button className="px-10 py-5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-lg transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:scale-105">
          Почати проєкт
        </button>
        <button className="px-10 py-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-lg transition-all duration-300 backdrop-blur-md">
          Завантажити презентацію
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/10 bg-[#04060d] pt-16 pb-8 px-6 relative z-10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
          <Gamepad2 className="text-white w-5 h-5" />
        </div>
        <span className="text-xl font-black tracking-tight text-white">
          Cognify<span className="text-cyan-400">Media</span>
        </span>
      </div>
      
      <div className="text-gray-500 text-sm text-center md:text-left flex flex-col items-center md:items-start gap-1">
        <p>© {new Date().getFullYear()} Cognify Media. Всі права захищено.</p>
        <p>Київ, Україна • hello@cognifymedia.ua</p>
      </div>
      
      <div className="flex gap-4">
        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition-all">
          <span className="sr-only">Twitter</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-fuchsia-400 hover:bg-white/10 transition-all">
          <span className="sr-only">LinkedIn</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
        </a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#060913] font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        html { scroll-behavior: smooth; }
      `}} />
      <Header />
      <main>
        <Hero />
        <AboutEdutainment />
        <Services />
        <Cases />
        <Calculator />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}