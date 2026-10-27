(() => {
  const translations = {
    en: {
      languageLabel: 'Language', home: 'Great Things home', skip: 'Skip to content', note: 'Our point of view',
      headline1: 'AI built around', headline2: 'your business.',
      paragraph1: 'Great people spend too much time on work that gets in the way of their work. Customers need follow up, information has to move between systems, and someone has to keep the pieces connected. Each task seems small, but together they take up the time and attention a business needs to move forward.',
      paragraph2: 'The cost is more than time. When teams are busy holding disconnected processes together, good ideas and customers both have to wait. The business has less room to change, even when the people inside it know what should happen next.',
      statement: 'We think that is worth fixing.', section2Label: 'What we build',
      paragraph3: 'Every business has its own way of serving customers, making decisions, and finding room to grow. That is where we start, with the people who know the work and the systems they use every day. The answer becomes clearer when we understand what is already working and what is getting in the way.',
      paragraph4: "Sometimes the answer is an automation that takes routine work off a team's hands. Sometimes it is a practical AI tool built into the systems they already use. The same work can also reveal a new way to reach customers, offer something useful, or add another line to the business. We build what makes sense for the job.",
      section3Label: 'How we work',
      paragraph5: 'We stay close to the work, try ideas in the real flow of the business, and measure what changes. Then we keep improving. The result should be something people can use every day and a business can build on over time.',
      paragraph6: 'We have a simple goal and that is to help your business work better and give your people more time to move it forward.',
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
      paragraph1: 'Las personas con talento pasan demasiado tiempo en tareas que les impiden hacer su trabajo. Los clientes necesitan seguimiento, la información tiene que pasar de un sistema a otro y alguien debe mantener todo conectado. Cada tarea parece pequeña, pero juntas consumen el tiempo y la atención que un negocio necesita para avanzar.',
      paragraph2: 'El costo va más allá del tiempo. Cuando los equipos mantienen unidos procesos que no se conectan, las buenas ideas y los clientes tienen que esperar. El negocio tiene menos espacio para cambiar, incluso cuando quienes lo conocen saben qué debería venir después.',
      statement: 'Creemos que vale la pena cambiarlo.', section2Label: 'Lo que construimos',
      paragraph3: 'Cada negocio tiene su propia forma de atender a los clientes, tomar decisiones y encontrar espacio para crecer. Ahí empezamos, con las personas que conocen el trabajo y los sistemas que usan cada día. La respuesta se vuelve más clara cuando entendemos qué funciona y qué se interpone.',
      paragraph4: 'A veces la respuesta es una automatización que quita tareas rutinarias al equipo. A veces es una herramienta práctica de IA integrada en los sistemas que ya usa. Ese mismo trabajo también puede mostrar una nueva forma de llegar a los clientes, ofrecer algo útil o abrir otra línea de negocio. Construimos lo que tiene sentido para cada caso.',
      section3Label: 'Cómo trabajamos',
      paragraph5: 'Nos mantenemos cerca del trabajo, probamos ideas en el día a día del negocio y medimos lo que cambia. Después seguimos mejorando. El resultado debe ser algo que las personas puedan usar cada día y sobre lo que el negocio pueda seguir construyendo.',
      paragraph6: 'Tenemos un objetivo sencillo y es ayudar a que tu negocio funcione mejor y que tu equipo tenga más tiempo para hacerlo avanzar.',
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
      paragraph1: 'Pessoas excelentes passam demasiado tempo em tarefas que as afastam do seu trabalho. Os clientes precisam de acompanhamento, a informação tem de passar entre sistemas e alguém tem de manter tudo ligado. Cada tarefa parece pequena, mas em conjunto ocupam o tempo e a atenção de que um negócio precisa para avançar.',
      paragraph2: 'O custo vai além do tempo. Quando as equipas mantêm processos desligados a funcionar em conjunto, as boas ideias e os clientes ficam à espera. O negócio tem menos espaço para mudar, mesmo quando quem o conhece sabe o que deveria acontecer a seguir.',
      statement: 'Achamos que vale a pena mudar isso.', section2Label: 'O que construímos',
      paragraph3: 'Cada negócio tem a sua forma de servir clientes, tomar decisões e encontrar espaço para crescer. É aí que começamos, com as pessoas que conhecem o trabalho e os sistemas que usam todos os dias. A resposta torna-se mais clara quando percebemos o que já funciona e o que está a impedir o progresso.',
      paragraph4: 'Às vezes a resposta é uma automação que tira tarefas rotineiras das mãos da equipa. Outras vezes é uma ferramenta prática de IA integrada nos sistemas que já usam. O mesmo trabalho também pode revelar uma nova forma de chegar aos clientes, oferecer algo útil ou criar outra linha de negócio. Construímos o que faz sentido para cada caso.',
      section3Label: 'Como trabalhamos',
      paragraph5: 'Ficamos perto do trabalho, testamos ideias no dia a dia do negócio e medimos o que muda. Depois continuamos a melhorar. O resultado deve ser algo que as pessoas possam usar todos os dias e sobre o qual o negócio possa continuar a crescer.',
      paragraph6: 'Temos um objetivo simples e é ajudar o teu negócio a funcionar melhor e dar à tua equipa mais tempo para o fazer avançar.',
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
      paragraph1: '优秀的人花了太多时间处理妨碍正事的工作。客户需要跟进，信息需要在系统之间流转，还得有人把各个环节连接起来。每件事看似不大，加在一起却占用了企业向前发展所需的时间和精力。',
      paragraph2: '代价不只是时间。当团队忙着维持互不相通的流程时，好的想法和客户都只能等待。即使最了解业务的人知道下一步该怎么做，企业也很难腾出空间改变。',
      statement: '我们认为，这值得改变。', section2Label: '我们打造什么',
      paragraph3: '每家企业服务客户、做出决策和寻找增长空间的方式都不同。我们从了解这些实际工作开始，与熟悉业务的人一起，看清他们每天使用的系统。弄明白什么已经有效、什么仍在阻碍进展，答案才会更清楚。',
      paragraph4: '有时，答案是替团队处理日常事务的自动化流程。有时，是融入现有系统的实用 AI 工具。同样的工作也可能带来接触客户、提供新服务或开拓新业务的机会。我们只做真正适合这项工作的事。',
      section3Label: '我们如何工作',
      paragraph5: '我们贴近实际工作，在业务的日常流程中尝试新想法，并衡量发生了什么变化。然后持续改进。最终成果应该是人们每天都能使用、企业也能长期依靠的东西。',
      paragraph6: '我们有一个简单的目标，就是让你的业务运转得更好，让团队有更多时间推动它向前。',
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
      paragraph1: 'אנשים מעולים משקיעים יותר מדי זמן בעבודה שמפריעה להם לעשות את העבודה שלהם. לקוחות צריכים מענה, מידע צריך לעבור בין מערכות, ומישהו צריך לחבר בין כל החלקים. כל משימה נראית קטנה, אבל יחד הן לוקחות את הזמן ואת תשומת הלב שהעסק צריך כדי להתקדם.',
      paragraph2: 'המחיר הוא לא רק זמן. כשהצוות עסוק בהחזקת תהליכים שלא מתחברים זה לזה, רעיונות טובים ולקוחות נאלצים לחכות. לעסק נשאר פחות מקום להשתנות, גם כשהאנשים שמכירים אותו יודעים מה צריך לקרות בהמשך.',
      statement: 'אנחנו חושבים שכדאי לשנות את זה.', section2Label: 'מה אנחנו בונים',
      paragraph3: 'לכל עסק יש דרך משלו לתת שירות ללקוחות, לקבל החלטות ולמצוא מקום לצמוח. שם אנחנו מתחילים, עם האנשים שמכירים את העבודה ואת המערכות שבהן הם משתמשים בכל יום. התשובה מתבהרת כשמבינים מה כבר עובד ומה עומד בדרך.',
      paragraph4: 'לפעמים התשובה היא אוטומציה שמורידה מהצוות עבודה שגרתית. לפעמים זה כלי AI מעשי שמשתלב במערכות שכבר נמצאות בשימוש. אותה עבודה יכולה גם לחשוף דרך חדשה להגיע ללקוחות, להציע משהו מועיל או להוסיף תחום פעילות לעסק. אנחנו בונים את מה שמתאים לעבודה.',
      section3Label: 'איך אנחנו עובדים',
      paragraph5: 'אנחנו נשארים קרובים לעבודה, מנסים רעיונות בתוך הפעילות היומיומית של העסק ומודדים מה משתנה. אחר כך ממשיכים לשפר. התוצאה צריכה להיות משהו שאנשים יכולים להשתמש בו בכל יום ושהעסק יכול להמשיך לבנות עליו.',
      paragraph6: 'יש לנו מטרה פשוטה והיא לעזור לעסק שלכם לעבוד טוב יותר ולתת לצוות שלכם יותר זמן לקדם אותו.',
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
