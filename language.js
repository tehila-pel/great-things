(() => {
  const translations = {
    en: {
      languageLabel: 'Language', home: 'Great Things home', skip: 'Skip to content', note: 'Our point of view',
      headline1: 'Tailored AI, built', headline2: 'inside your business.',
      heroIntro: 'We build AI agents and automations on your systems and data, alongside your team. You own everything we build.',
      paragraph1: 'You know AI matters, but the tools you have tried have not fit the way your company actually works. Meanwhile, great people still spend too much time following up, moving information around, and keeping disconnected systems running. Your team has work to do and little time for another tool that stays on the sidelines.',
      paragraph2: 'A better place to start is with the work itself. Look at where information stalls, where people repeat the same steps, and where a new capability could help the business reach more customers or serve them better.',
      statement: 'AI should fit the way your business works.', section2Label: 'What we build',
      paragraph3: 'We learn how your business runs, then build AI agents and automations around your processes, systems, and data, side by side with your team. The tools become part of the work you already do, and what we build is yours.',
      paragraph4: 'Some projects help your team get more from the systems it already uses. Others make room for growth by finding better ways to reach customers or offer something new. The first project is small by design, with a clear goal, so you can see what changes before deciding what comes next.',
      section3Label: 'How we work',
      paragraph5: 'We start with a conversation, learn how things actually run, and choose the first problem worth solving together. Then we agree on the scope, build, put the result to work, and improve it in use. Each project has its own timeline, which you see before work begins.',
      paragraph6: 'We have a simple goal and that is to help your business work better and give your people more time to move it forward.',
      invitation: 'See where AI fits in your business.', book: 'Book a call', bookIntro: 'Book an intro call', contactLabel: 'Get in touch',
      dialogTitle: "Let's talk.", close: 'Close booking popup',
      loading: 'Loading the calendar…', ready: 'Choose a time that works for you.',
      unavailable: 'The calendar is unavailable right now. Please try again later.',
      fallback: 'The calendar could not load here. Open it in a new tab below.',
      fallbackLink: 'Open the calendar in a new tab'
    },
    es: {
      languageLabel: 'Idioma', home: 'Inicio de Great Things', skip: 'Ir al contenido', note: 'Nuestra forma de verlo',
      headline1: 'IA a medida, creada', headline2: 'dentro de tu negocio.',
      heroIntro: 'Creamos agentes de IA y automatizaciones con tus sistemas y datos, junto a tu equipo. Todo lo que construimos es tuyo.',
      paragraph1: 'Sabes que la IA importa, pero las herramientas que has probado no encajan con la forma en que funciona tu empresa. Mientras tanto, grandes personas siguen dedicando demasiado tiempo a hacer seguimientos, mover información y mantener sistemas desconectados en marcha. Tu equipo tiene trabajo que hacer y poco tiempo para otra herramienta que se queda al margen.',
      paragraph2: 'Es mejor empezar por el trabajo mismo. Mirar dónde se detiene la información, dónde se repiten los mismos pasos y dónde una nueva capacidad podría ayudar al negocio a llegar a más clientes o atenderlos mejor.',
      statement: 'La IA debe adaptarse a cómo funciona tu negocio.', section2Label: 'Lo que construimos',
      paragraph3: 'Aprendemos cómo funciona tu negocio y creamos agentes de IA y automatizaciones alrededor de tus procesos, sistemas y datos, junto a tu equipo. Las herramientas pasan a formar parte del trabajo diario y lo que construimos es tuyo.',
      paragraph4: 'Algunos proyectos ayudan a tu equipo a sacar más partido de los sistemas que ya usa. Otros abren espacio para crecer al encontrar mejores maneras de llegar a los clientes u ofrecer algo nuevo. El primer proyecto es pequeño a propósito y tiene un objetivo claro, para que veas qué cambia antes de decidir el siguiente paso.',
      section3Label: 'Cómo trabajamos',
      paragraph5: 'Empezamos con una conversación, aprendemos cómo funciona todo en la práctica y elegimos juntos el primer problema que merece atención. Después acordamos el alcance, construimos, ponemos el resultado en marcha y lo mejoramos con el uso. Cada proyecto tiene su propio plazo, que conocerás antes de empezar.',
      paragraph6: 'Tenemos un objetivo sencillo y es ayudar a que tu negocio funcione mejor y que tu equipo tenga más tiempo para hacerlo avanzar.',
      invitation: 'Descubre dónde encaja la IA en tu negocio.', book: 'Reserva una llamada', bookIntro: 'Reserva una primera llamada', contactLabel: 'Contacto',
      dialogTitle: 'Hablemos.', close: 'Cerrar la ventana de reservas',
      loading: 'Cargando el calendario…', ready: 'Elige el momento que te venga bien.',
      unavailable: 'El calendario no está disponible ahora. Inténtalo más tarde.',
      fallback: 'No se pudo cargar el calendario aquí. Ábrelo en una pestaña nueva.',
      fallbackLink: 'Abrir el calendario en una pestaña nueva'
    },
    pt: {
      languageLabel: 'Idioma', home: 'Página inicial da Great Things', skip: 'Ir para o conteúdo', note: 'O nosso ponto de vista',
      headline1: 'IA à medida, criada', headline2: 'dentro do teu negócio.',
      heroIntro: 'Criamos agentes de IA e automações com os teus sistemas e dados, lado a lado com a tua equipa. Tudo o que construímos é teu.',
      paragraph1: 'Sabes que a IA é importante, mas as ferramentas que experimentaste não se adaptam à forma como a tua empresa funciona. Entretanto, pessoas excelentes continuam a gastar demasiado tempo a acompanhar pedidos, mover informação e manter sistemas desligados a funcionar. A tua equipa tem trabalho para fazer e pouco tempo para mais uma ferramenta que fica de lado.',
      paragraph2: 'É melhor começar pelo trabalho em si. Ver onde a informação para, onde as pessoas repetem os mesmos passos e onde uma nova capacidade pode ajudar o negócio a chegar a mais clientes ou a servi-los melhor.',
      statement: 'A IA deve adaptar-se à forma como o teu negócio funciona.', section2Label: 'O que construímos',
      paragraph3: 'Aprendemos como o teu negócio funciona e criamos agentes de IA e automações à volta dos teus processos, sistemas e dados, lado a lado com a tua equipa. As ferramentas passam a fazer parte do trabalho diário e aquilo que construímos é teu.',
      paragraph4: 'Alguns projetos ajudam a tua equipa a tirar mais partido dos sistemas que já usa. Outros criam espaço para crescer, com melhores formas de chegar aos clientes ou oferecer algo novo. O primeiro projeto é pequeno por opção e tem um objetivo claro, para que possas ver o que muda antes de decidir o passo seguinte.',
      section3Label: 'Como trabalhamos',
      paragraph5: 'Começamos com uma conversa, aprendemos como tudo funciona na prática e escolhemos juntos o primeiro problema que vale a pena resolver. Depois acordamos o âmbito, construímos, colocamos o resultado em uso e melhoramos com a experiência. Cada projeto tem o seu prazo, que conheces antes de começar.',
      paragraph6: 'Temos um objetivo simples e é ajudar o teu negócio a funcionar melhor e dar à tua equipa mais tempo para o fazer avançar.',
      invitation: 'Vê onde a IA se encaixa no teu negócio.', book: 'Marcar uma conversa', bookIntro: 'Marcar uma primeira conversa', contactLabel: 'Entra em contacto',
      dialogTitle: 'Vamos falar.', close: 'Fechar a janela de marcação',
      loading: 'A carregar o calendário…', ready: 'Escolhe uma hora que te dê jeito.',
      unavailable: 'O calendário não está disponível agora. Tenta novamente mais tarde.',
      fallback: 'Não foi possível carregar o calendário aqui. Podes abrir o calendário numa nova aba.',
      fallbackLink: 'Abrir o calendário numa nova aba'
    },
    zh: {
      languageLabel: '语言', home: 'Great Things 首页', skip: '跳转到正文', note: '我们的看法',
      headline1: '量身打造的 AI，', headline2: '融入你的业务。',
      heroIntro: '我们基于你的系统和数据，与团队一起打造 AI 智能体和自动化流程。我们打造的一切都归你所有。',
      paragraph1: '你知道 AI 很重要，但试过的工具并不适合公司的实际运作方式。与此同时，优秀的人仍花太多时间跟进事项、搬运信息和维持互不相通的系统。你的团队有正事要做，没有多少时间留给又一个用不起来的工具。',
      paragraph2: '更好的起点是工作本身。看看信息在哪里停滞，哪些步骤在反复进行，以及新的能力能在哪里帮助企业接触更多客户或提供更好的服务。',
      statement: 'AI 应该适应你的业务。', section2Label: '我们打造什么',
      paragraph3: '我们先了解你的业务如何运转，再与团队并肩，围绕现有流程、系统和数据打造 AI 智能体及自动化流程。工具融入日常工作，我们打造的成果归你所有。',
      paragraph4: '有些项目帮助团队更好地使用现有系统。另一些项目通过找到接触客户或提供新服务的方式，为增长腾出空间。第一个项目有意从小处开始，并设定明确目标，让你看到实际变化，再决定下一步。',
      section3Label: '我们如何工作',
      paragraph5: '我们先聊一聊，了解业务的实际运作方式，再一起选出第一个值得解决的问题。随后确定范围、完成构建、投入使用，并根据使用情况持续改进。每个项目都有自己的时间安排，我们会在开始前与你确认。',
      paragraph6: '我们有一个简单的目标，就是让你的业务运转得更好，让团队有更多时间推动它向前。',
      invitation: '看看 AI 能如何融入你的业务。', book: '预约通话', bookIntro: '预约初步通话', contactLabel: '联系我们',
      dialogTitle: '聊聊吧。', close: '关闭预约窗口',
      loading: '正在加载日历…', ready: '请选择合适的时间。',
      unavailable: '日历暂时无法使用，请稍后再试。',
      fallback: '无法在此处加载日历。请在新标签页中打开。',
      fallbackLink: '在新标签页中打开日历'
    },
    he: {
      languageLabel: 'שפה', home: 'עמוד הבית של Great Things', skip: 'דילוג לתוכן', note: 'נקודת המבט שלנו',
      headline1: 'AI מותאם אישית,', headline2: 'שנבנה בתוך העסק שלכם.',
      heroIntro: 'אנחנו בונים סוכני AI ואוטומציות על המערכות והנתונים שלכם, יחד עם הצוות שלכם. כל מה שנבנה שייך לכם.',
      paragraph1: 'אתם יודעים ש AI חשוב, אבל הכלים שניסיתם לא התאימו לאופן שבו החברה שלכם באמת עובדת. בינתיים, אנשים מעולים עדיין משקיעים יותר מדי זמן במעקב, בהעברת מידע ובתחזוקה של מערכות שלא מחוברות זו לזו. לצוות שלכם יש עבודה לעשות, ואין לו זמן לעוד כלי שנשאר בצד.',
      paragraph2: 'מקום טוב יותר להתחיל בו הוא העבודה עצמה. לראות איפה מידע נתקע, איפה אנשים חוזרים על אותם צעדים, ואיפה יכולת חדשה יכולה לעזור לעסק להגיע ליותר לקוחות או לתת להם שירות טוב יותר.',
      statement: 'AI צריך להתאים לאופן שבו העסק שלכם עובד.', section2Label: 'מה אנחנו בונים',
      paragraph3: 'אנחנו לומדים איך העסק שלכם עובד, ואז בונים סוכני AI ואוטומציות סביב התהליכים, המערכות והנתונים שלכם, יחד עם הצוות שלכם. הכלים הופכים לחלק מהעבודה היומיומית, ומה שאנחנו בונים שייך לכם.',
      paragraph4: 'יש פרויקטים שעוזרים לצוות להפיק יותר מהמערכות שבהן הוא כבר משתמש. אחרים יוצרים מקום לצמיחה, עם דרכים טובות יותר להגיע ללקוחות או להציע משהו חדש. הפרויקט הראשון קטן בכוונה ויש לו מטרה ברורה, כדי שתוכלו לראות מה משתנה לפני שמחליטים מה בא אחר כך.',
      section3Label: 'איך אנחנו עובדים',
      paragraph5: 'אנחנו מתחילים בשיחה, לומדים איך הדברים עובדים בפועל ובוחרים יחד את הבעיה הראשונה שכדאי לפתור. אחר כך מסכמים את היקף העבודה, בונים, מטמיעים ומשפרים תוך כדי שימוש. לכל פרויקט יש לוח זמנים משלו, שתכירו לפני שהעבודה מתחילה.',
      paragraph6: 'יש לנו מטרה פשוטה והיא לעזור לעסק שלכם לעבוד טוב יותר ולתת לצוות שלכם יותר זמן לקדם אותו.',
      invitation: 'בואו נראה איפה AI מתאים לעסק שלכם.', book: 'קביעת שיחה', bookIntro: 'קביעת שיחת היכרות', contactLabel: 'צרו קשר',
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
