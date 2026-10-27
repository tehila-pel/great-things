(() => {
  const translations = {
    en: {
      languageLabel: 'Language', home: 'Great Things home', skip: 'Skip to content', note: 'Our point of view',
      headline1: 'AI built around', headline2: 'your business.',
      paragraph1: 'Great people spend too much time on work that gets in the way of their work. Following up. Moving information around. Keeping disconnected systems running.',
      paragraph2: "We think that's worth fixing.",
      paragraph3: 'We work with teams to understand how their business runs, reaches people, and grows. Then we build better ways to do it, including practical AI tools and automations that handle routine work and open up new ways to serve customers. We use the tools that make sense for the job.',
      paragraph4: 'We stay close to the work. We try things, measure what changes, and keep improving. We have a simple goal and that is to help your business work better and give your people more time to move it forward.',
      invitation: "Let's talk about your business and what comes next.", book: 'Book a call',
      dialogTitle: "Let's talk.", close: 'Close booking popup',
      loading: 'Loading the calendar…', ready: 'Choose a time that works for you.',
      unavailable: 'The calendar is unavailable right now. Please try again later.',
      fallback: 'The calendar could not load here. Open it in a new tab below.',
      fallbackLink: 'Open the calendar in a new tab'
    },
    es: {
      languageLabel: 'Idioma', home: 'Inicio de Great Things', skip: 'Ir al contenido', note: 'Nuestra forma de verlo',
      headline1: 'IA diseñada en torno', headline2: 'a tu negocio.',
      paragraph1: 'Las grandes personas dedican demasiado tiempo a tareas que les impiden hacer su trabajo. Dar seguimiento. Mover información de un lado a otro. Mantener sistemas que no se conectan.',
      paragraph2: 'Creemos que vale la pena cambiar eso.',
      paragraph3: 'Trabajamos con equipos para entender cómo funciona su negocio, cómo llega a las personas y cómo crece. Después construimos mejores formas de hacer las cosas, incluidas herramientas prácticas de IA y automatizaciones que se ocupan del trabajo rutinario y abren nuevas formas de atender a los clientes. Usamos las herramientas que mejor encajan con cada tarea.',
      paragraph4: 'Estamos cerca del trabajo. Probamos ideas, medimos lo que cambia y seguimos mejorando. Tenemos un objetivo sencillo y es ayudar a que tu negocio funcione mejor y que tu equipo tenga más tiempo para hacerlo avanzar.',
      invitation: 'Hablemos de tu negocio y de lo que viene.', book: 'Reserva una llamada',
      dialogTitle: 'Hablemos.', close: 'Cerrar la ventana de reservas',
      loading: 'Cargando el calendario…', ready: 'Elige el momento que te venga bien.',
      unavailable: 'El calendario no está disponible ahora. Inténtalo más tarde.',
      fallback: 'No se pudo cargar el calendario aquí. Ábrelo en una pestaña nueva.',
      fallbackLink: 'Abrir el calendario en una pestaña nueva'
    },
    pt: {
      languageLabel: 'Idioma', home: 'Página inicial da Great Things', skip: 'Ir para o conteúdo', note: 'O nosso ponto de vista',
      headline1: 'IA criada à volta', headline2: 'do teu negócio.',
      paragraph1: 'Pessoas excelentes passam demasiado tempo em tarefas que as afastam do seu trabalho. Fazer seguimentos. Passar informação de um lado para o outro. Manter sistemas que não se ligam.',
      paragraph2: 'Achamos que vale a pena mudar isso.',
      paragraph3: 'Trabalhamos com equipas para perceber como o seu negócio funciona, chega às pessoas e cresce. Depois criamos melhores formas de fazer as coisas, incluindo ferramentas práticas de IA e automações que tratam das tarefas rotineiras e abrem novas formas de servir clientes. Usamos as ferramentas que fazem sentido para cada tarefa.',
      paragraph4: 'Ficamos perto do trabalho. Testamos ideias, medimos o que muda e continuamos a melhorar. Temos um objetivo simples e é ajudar o teu negócio a funcionar melhor e dar à tua equipa mais tempo para o fazer avançar.',
      invitation: 'Vamos falar sobre o teu negócio e o que vem a seguir.', book: 'Marcar uma conversa',
      dialogTitle: 'Vamos falar.', close: 'Fechar a janela de marcação',
      loading: 'A carregar o calendário…', ready: 'Escolhe uma hora que te dê jeito.',
      unavailable: 'O calendário não está disponível agora. Tenta novamente mais tarde.',
      fallback: 'Não foi possível carregar o calendário aqui. Podes abrir o calendário numa nova aba.',
      fallbackLink: 'Abrir o calendário numa nova aba'
    },
    zh: {
      languageLabel: '语言', home: 'Great Things 首页', skip: '跳转到正文', note: '我们的看法',
      headline1: '围绕你的业务', headline2: '打造的 AI。',
      paragraph1: '优秀的人花了太多时间处理妨碍正事的杂务。反复跟进。搬运信息。维持互不相通的系统运转。',
      paragraph2: '我们觉得，这些事值得改变。',
      paragraph3: '我们与团队一起了解业务如何运转，如何触达客户，以及如何成长。然后找到更好的做法，包括用实用的 AI 工具和自动化流程处理日常事务，并开辟服务客户的新方式。我们只用真正适合这项工作的工具。',
      paragraph4: '我们贴近实际工作。尝试新方法，衡量变化，再持续改进。我们有一个简单的目标，就是让你的业务运转得更好，让团队有更多时间推动它向前。',
      invitation: '聊聊你的业务，以及下一步要做什么。', book: '预约通话',
      dialogTitle: '聊聊吧。', close: '关闭预约窗口',
      loading: '正在加载日历…', ready: '请选择合适的时间。',
      unavailable: '日历暂时无法使用，请稍后再试。',
      fallback: '无法在此处加载日历。请在新标签页中打开。',
      fallbackLink: '在新标签页中打开日历'
    },
    he: {
      languageLabel: 'שפה', home: 'עמוד הבית של Great Things', skip: 'דילוג לתוכן', note: 'נקודת המבט שלנו',
      headline1: 'AI שנבנה', headline2: 'סביב העסק שלכם.',
      paragraph1: 'אנשים מעולים מבזבזים יותר מדי זמן על עבודה שמפריעה להם לעשות את העבודה שלהם. לעקוב אחרי דברים. להעביר מידע ממקום למקום. להחזיק מערכות שלא מדברות זו עם זו.',
      paragraph2: 'אנחנו חושבים שכדאי לשנות את זה.',
      paragraph3: 'אנחנו עובדים עם צוותים כדי להבין איך העסק שלהם פועל, מגיע לאנשים וצומח. אחר כך אנחנו בונים דרכים טובות יותר לעשות את הדברים, כולל כלי AI מעשיים ואוטומציות שמטפלים בעבודה השוטפת ופותחים דרכים חדשות לתת שירות ללקוחות. אנחנו משתמשים בכלים שמתאימים לעבודה.',
      paragraph4: 'אנחנו נשארים קרובים לעבודה. מנסים, מודדים מה השתנה וממשיכים לשפר. יש לנו מטרה פשוטה והיא לעזור לעסק שלכם לעבוד טוב יותר ולתת לצוות שלכם יותר זמן לקדם אותו.',
      invitation: 'בואו נדבר על העסק שלכם ועל מה שבא אחר כך.', book: 'קביעת שיחה',
      dialogTitle: 'בואו נדבר.', close: 'סגירת חלון קביעת השיחה',
      loading: 'טוענים את היומן…', ready: 'בחרו זמן שמתאים לכם.',
      unavailable: 'היומן לא זמין כרגע. אפשר לנסות שוב מאוחר יותר.',
      fallback: 'לא הצלחנו לטעון כאן את היומן. אפשר לפתוח אותו בלשונית חדשה.',
      fallbackLink: 'פתיחת היומן בלשונית חדשה'
    }
  };

  const picker = document.querySelector('#language');
  function setLanguage(language) {
    const selected = language === 'en-US' || language === 'en-GB'
      ? language
      : Object.hasOwn(translations, language) && language !== 'en' ? language : 'en-US';
    const copy = translations[selected.startsWith('en-') ? 'en' : selected];
    document.documentElement.lang = selected.startsWith('en-') ? 'en' : selected;
    document.documentElement.dir = selected === 'he' ? 'rtl' : 'ltr';
    picker.value = selected;
    picker.setAttribute('aria-label', copy.languageLabel);
    document.querySelector('.language-picker .visually-hidden').textContent = copy.languageLabel;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      element.textContent = copy[element.dataset.i18n];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
      element.setAttribute('aria-label', copy[element.dataset.i18nAria]);
    });
    try { localStorage.setItem('greatThingsLanguage', selected); } catch {}
  }

  window.GREAT_THINGS_TRANSLATIONS = translations;
  let savedLanguage;
  try { savedLanguage = localStorage.getItem('greatThingsLanguage'); } catch {}
  setLanguage(savedLanguage);
  picker.addEventListener('change', event => setLanguage(event.target.value));
})();
