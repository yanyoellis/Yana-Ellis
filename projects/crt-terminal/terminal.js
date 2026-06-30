const terminal = document.querySelector("#terminal");
const flow = document.querySelector("#flow");
const crt = document.querySelector("#crt");
const matrixCanvas = document.querySelector("#matrix");
const shutdown = document.querySelector("#shutdown");
const signalText = document.querySelector("#signalText");
const keyboardCapture = document.querySelector("#keyboardCapture");
const uxFolder = document.querySelector("#uxFolder");
const uxFolderClose = document.querySelector("#uxFolderClose");
const uxLanguageButtons = document.querySelectorAll("[data-ux-lang]");
const uxTextNodes = document.querySelectorAll("[data-ux-i18n]");
const uxAriaNodes = document.querySelectorAll("[data-ux-i18n-aria]");

const uxTranslations = {
  en: {
    tab: "UX DOSSIER",
    close: "CLOSE",
    closeAria: "Close UX dossier",
    meta: "FILE CRT-UX-1987 / STATUS OPENED / ACCESS GUEST",
    title: "CRT Terminal UX Case",
    conceptTitle: "Concept",
    conceptBody: "CRT Terminal turns a portfolio page into an interactive command-line object. The interface removes traditional navigation and asks the user to explore through typed commands, making the act of discovery part of the visual identity.",
    problemTitle: "UX Problem",
    problemBody: "Most project pages explain interaction from the outside: menu, hero, cards, text, CTA. This concept needed the opposite feeling. The user should feel like they have found an old machine and are learning its language, while still understanding what can be done next.",
    goalsTitle: "Goals",
    goalOne: "Create a memorable first interaction instead of a standard landing layout.",
    goalTwo: "Make commands discoverable through help, feedback, and short system responses.",
    goalThree: "Keep the interface readable inside a noisy retro visual style.",
    goalFour: "Use motion, scanlines, color modes, and glitches as feedback rather than decoration only.",
    goalFive: "Support keyboard-first interaction while keeping the experience simple enough for casual users.",
    flowTitle: "User Flow",
    flowOne: "The terminal boots automatically and confirms that the system is ready.",
    flowTwo: "The user is invited to type help.",
    flowThree: "Help reveals a small command vocabulary, reducing uncertainty.",
    flowFour: "The user tries commands such as about, color, matrix, scan, glitch, and ux.",
    flowFive: "Each command returns an immediate state change or response, so the system feels alive.",
    flowSix: "The ux command opens this dossier as the deeper case-study layer.",
    interactionTitle: "Interaction Logic",
    interactionBody: "The terminal uses typed input as navigation. This makes every action intentional: the user chooses a command, receives feedback, and learns the system through repetition. The prompt, cursor, loading bars, scan sequence, matrix mode, and color modes all reinforce the same interaction language.",
    decisionsTitle: "Design Decisions",
    decisionOne: "The CRT frame creates a physical boundary for the interface.",
    decisionTwo: "Text is short in the terminal so the screen never becomes visually overloaded.",
    decisionThree: "The UX dossier opens as a separate folder because long reading does not belong inside the tiny terminal log.",
    decisionFour: "Green, amber, and blue modes let the user customize the mood without changing the system model.",
    decisionFive: "Glitch and matrix effects are temporary, so they feel expressive without blocking the core flow.",
    accessibilityTitle: "Accessibility Notes",
    accessibilityBody: "The project keeps high contrast, large monospaced text, visible system feedback, reduced command count, and a close button for the dossier. The design is intentionally stylized, but the user should always understand whether the system is waiting, loading, responding, or shutting down.",
    resultTitle: "Result",
    resultBody: "The final experience behaves like a tiny operating system for a portfolio concept. It communicates personality through interaction, not through a static hero section, and gives the UX case its own readable folder layer."
  },
  ru: {
    tab: "UX-ДОСЬЕ",
    close: "ЗАКРЫТЬ",
    closeAria: "Закрыть UX-досье",
    meta: "ФАЙЛ CRT-UX-1987 / СТАТУС ОТКРЫТ / ДОСТУП ГОСТЬ",
    title: "UX-кейс CRT Terminal",
    conceptTitle: "Концепт",
    conceptBody: "CRT Terminal превращает страницу портфолио в интерактивный объект командной строки. Интерфейс убирает привычную навигацию и предлагает пользователю исследовать проект через введенные команды, делая сам процесс открытия частью визуальной идентичности.",
    problemTitle: "UX-проблема",
    problemBody: "Большинство проектных страниц объясняют взаимодействие снаружи: меню, hero-блок, карточки, текст, CTA. Этому концепту нужен был противоположный эффект. Пользователь должен чувствовать, что нашел старую машину и изучает ее язык, но при этом все еще понимает, что можно сделать дальше.",
    goalsTitle: "Цели",
    goalOne: "Создать запоминающееся первое взаимодействие вместо стандартного landing layout.",
    goalTwo: "Сделать команды понятными через help, обратную связь и короткие системные ответы.",
    goalThree: "Сохранить читаемость интерфейса внутри шумной ретро-визуальности.",
    goalFour: "Использовать движение, scanlines, цветовые режимы и glitches как feedback, а не только как декор.",
    goalFive: "Поддержать keyboard-first взаимодействие, оставив опыт достаточно простым для обычного пользователя.",
    flowTitle: "Путь пользователя",
    flowOne: "Терминал загружается автоматически и подтверждает, что система готова.",
    flowTwo: "Пользователю предлагают ввести help.",
    flowThree: "Help показывает небольшой словарь команд и снижает неопределенность.",
    flowFour: "Пользователь пробует команды about, color, matrix, scan, glitch и ux.",
    flowFive: "Каждая команда сразу возвращает изменение состояния или ответ, поэтому система ощущается живой.",
    flowSix: "Команда ux открывает это досье как более глубокий слой case study.",
    interactionTitle: "Логика взаимодействия",
    interactionBody: "Терминал использует ввод текста как навигацию. Это делает каждое действие осознанным: пользователь выбирает команду, получает feedback и через повторение изучает систему. Prompt, cursor, loading bars, scan sequence, matrix mode и color modes поддерживают один общий язык взаимодействия.",
    decisionsTitle: "Дизайн-решения",
    decisionOne: "CRT-рамка создает физическую границу для интерфейса.",
    decisionTwo: "Текст в терминале короткий, чтобы экран не становился визуально перегруженным.",
    decisionThree: "UX-досье открывается отдельной папкой, потому что длинное чтение не должно жить внутри маленького terminal log.",
    decisionFour: "Зеленый, янтарный и синий режимы позволяют пользователю менять настроение, не ломая модель системы.",
    decisionFive: "Glitch и matrix effects временные, поэтому они выразительные, но не блокируют основной flow.",
    accessibilityTitle: "Заметки по доступности",
    accessibilityBody: "Проект сохраняет высокий контраст, крупный моноширинный текст, видимую системную обратную связь, небольшое количество команд и кнопку закрытия досье. Дизайн намеренно стилизован, но пользователь всегда должен понимать, система ждет, загружается, отвечает или выключается.",
    resultTitle: "Результат",
    resultBody: "Финальный опыт работает как маленькая операционная система для portfolio concept. Он передает характер через взаимодействие, а не через статичный hero-блок, и дает UX-кейсу отдельный читаемый слой папки."
  },
  uk: {
    tab: "UX-ДОСЬЄ",
    close: "ЗАКРИТИ",
    closeAria: "Закрити UX-досьє",
    meta: "ФАЙЛ CRT-UX-1987 / СТАТУС ВІДКРИТО / ДОСТУП ГІСТЬ",
    title: "UX-кейс CRT Terminal",
    conceptTitle: "Концепт",
    conceptBody: "CRT Terminal перетворює сторінку портфоліо на інтерактивний об'єкт командного рядка. Інтерфейс прибирає традиційну навігацію і пропонує користувачу досліджувати проєкт через введені команди, роблячи сам процес відкриття частиною візуальної ідентичності.",
    problemTitle: "UX-проблема",
    problemBody: "Більшість сторінок проєктів пояснюють взаємодію ззовні: меню, hero-блок, картки, текст, CTA. Цьому концепту потрібне було протилежне відчуття. Користувач має відчути, що знайшов стару машину й вивчає її мову, але водночас розуміє, що можна зробити далі.",
    goalsTitle: "Цілі",
    goalOne: "Створити пам'ятну першу взаємодію замість стандартного landing layout.",
    goalTwo: "Зробити команди зрозумілими через help, feedback і короткі системні відповіді.",
    goalThree: "Зберегти читабельність інтерфейсу всередині шумної ретро-візуальності.",
    goalFour: "Використати рух, scanlines, color modes і glitches як feedback, а не лише як декор.",
    goalFive: "Підтримати keyboard-first взаємодію, залишивши досвід достатньо простим для звичайного користувача.",
    flowTitle: "Шлях користувача",
    flowOne: "Термінал завантажується автоматично й підтверджує, що система готова.",
    flowTwo: "Користувачу пропонують ввести help.",
    flowThree: "Help показує невеликий словник команд і зменшує невизначеність.",
    flowFour: "Користувач пробує команди about, color, matrix, scan, glitch і ux.",
    flowFive: "Кожна команда одразу повертає зміну стану або відповідь, тому система відчувається живою.",
    flowSix: "Команда ux відкриває це досьє як глибший шар case study.",
    interactionTitle: "Логіка взаємодії",
    interactionBody: "Термінал використовує введення тексту як навігацію. Це робить кожну дію усвідомленою: користувач обирає команду, отримує feedback і через повторення вивчає систему. Prompt, cursor, loading bars, scan sequence, matrix mode і color modes підтримують одну спільну мову взаємодії.",
    decisionsTitle: "Дизайн-рішення",
    decisionOne: "CRT-рамка створює фізичну межу для інтерфейсу.",
    decisionTwo: "Текст у терміналі короткий, щоб екран не ставав візуально перевантаженим.",
    decisionThree: "UX-досьє відкривається окремою папкою, бо довге читання не має жити всередині маленького terminal log.",
    decisionFour: "Зелений, бурштиновий і синій режими дозволяють користувачу змінювати настрій, не руйнуючи модель системи.",
    decisionFive: "Glitch і matrix effects тимчасові, тому вони виразні, але не блокують основний flow.",
    accessibilityTitle: "Нотатки щодо доступності",
    accessibilityBody: "Проєкт зберігає високий контраст, великий моноширинний текст, видимий системний feedback, невелику кількість команд і кнопку закриття досьє. Дизайн навмисно стилізований, але користувач завжди має розуміти, система чекає, завантажується, відповідає чи вимикається.",
    resultTitle: "Результат",
    resultBody: "Фінальний досвід працює як маленька операційна система для portfolio concept. Він передає характер через взаємодію, а не через статичний hero-блок, і дає UX-кейсу окремий читабельний шар папки."
  },
  pl: {
    tab: "DOSSIER UX",
    close: "ZAMKNIJ",
    closeAria: "Zamknij dossier UX",
    meta: "PLIK CRT-UX-1987 / STATUS OTWARTY / DOSTĘP GOŚĆ",
    title: "UX case CRT Terminal",
    conceptTitle: "Koncept",
    conceptBody: "CRT Terminal zamienia stronę portfolio w interaktywny obiekt wiersza poleceń. Interfejs usuwa tradycyjną nawigację i zachęca użytkownika do eksploracji przez wpisywane komendy, dzięki czemu samo odkrywanie staje się częścią identyfikacji wizualnej.",
    problemTitle: "Problem UX",
    problemBody: "Większość stron projektowych wyjaśnia interakcję z zewnątrz: menu, hero, karty, tekst, CTA. Ten koncept potrzebował odwrotnego wrażenia. Użytkownik powinien poczuć, że znalazł starą maszynę i uczy się jej języka, ale nadal rozumie, co może zrobić dalej.",
    goalsTitle: "Cele",
    goalOne: "Stworzyć zapamiętywalną pierwszą interakcję zamiast standardowego landing layout.",
    goalTwo: "Uczynić komendy odkrywalnymi przez help, feedback i krótkie odpowiedzi systemu.",
    goalThree: "Zachować czytelność interfejsu wewnątrz szumnej retro stylistyki.",
    goalFour: "Użyć ruchu, scanlines, color modes i glitches jako feedbacku, a nie wyłącznie dekoracji.",
    goalFive: "Wesprzeć keyboard-first interaction, zachowując prostotę dla zwykłego użytkownika.",
    flowTitle: "Ścieżka użytkownika",
    flowOne: "Terminal uruchamia się automatycznie i potwierdza gotowość systemu.",
    flowTwo: "Użytkownik otrzymuje sugestię wpisania help.",
    flowThree: "Help pokazuje mały słownik komend i zmniejsza niepewność.",
    flowFour: "Użytkownik próbuje komend about, color, matrix, scan, glitch i ux.",
    flowFive: "Każda komenda natychmiast zwraca zmianę stanu albo odpowiedź, więc system wydaje się żywy.",
    flowSix: "Komenda ux otwiera to dossier jako głębszą warstwę case study.",
    interactionTitle: "Logika interakcji",
    interactionBody: "Terminal używa wpisywania tekstu jako nawigacji. Dzięki temu każda akcja jest intencjonalna: użytkownik wybiera komendę, otrzymuje feedback i poznaje system przez powtarzanie. Prompt, cursor, loading bars, scan sequence, matrix mode i color modes wzmacniają ten sam język interakcji.",
    decisionsTitle: "Decyzje projektowe",
    decisionOne: "Rama CRT tworzy fizyczną granicę interfejsu.",
    decisionTwo: "Tekst w terminalu jest krótki, aby ekran nie stał się wizualnie przeciążony.",
    decisionThree: "Dossier UX otwiera się jako osobna folderowa warstwa, bo długie czytanie nie pasuje do małego terminal log.",
    decisionFour: "Zielony, bursztynowy i niebieski tryb pozwalają zmieniać nastrój bez zmiany modelu systemu.",
    decisionFive: "Glitch i matrix effects są tymczasowe, więc są ekspresyjne, ale nie blokują głównego flow.",
    accessibilityTitle: "Uwagi o dostępności",
    accessibilityBody: "Projekt zachowuje wysoki kontrast, duży monospace text, widoczny feedback systemowy, ograniczoną liczbę komend i przycisk zamknięcia dossier. Design jest celowo stylizowany, ale użytkownik zawsze powinien rozumieć, czy system czeka, ładuje się, odpowiada czy wyłącza.",
    resultTitle: "Rezultat",
    resultBody: "Finalne doświadczenie działa jak mały system operacyjny dla portfolio concept. Komunikuje charakter przez interakcję, a nie przez statyczny hero section, i daje case study UX własną czytelną warstwę folderu."
  }
};

const palette = {
  green: ["#9bf871", "rgba(118, 255, 110, 0.28)", "rgba(1, 17, 7, 0.67)"],
  amber: ["#ffbd62", "rgba(255, 175, 64, 0.3)", "rgba(23, 12, 0, 0.7)"],
  blue: ["#8fdcff", "rgba(84, 197, 255, 0.3)", "rgba(0, 11, 24, 0.72)"],
};

const errors = [
  "COMMAND NOT FOUND",
  "UNKNOWN COMMAND",
  "INVALID INPUT\n\nTYPE \"help\"",
];

let input = "";
let busy = true;
let poweredOff = false;
let shuttingDown = false;
let promptNode = null;
let matrixTimer = 0;
let matrixEndTimer = 0;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const typingDelay = () => 15 + Math.floor(Math.random() * 16);

function keepAtBottom() {
  terminal.scrollTop = terminal.scrollHeight;
}

function clearTerminal() {
  flow.replaceChildren();
  promptNode = null;
  input = "";
  terminal.scrollTop = 0;
}

function addLine(text = "", className = "") {
  const line = document.createElement("div");
  line.className = `line ${className}`.trim();
  line.textContent = text;
  flow.append(line);
  keepAtBottom();
  return line;
}

async function typeLine(text = "", speed = typingDelay) {
  const line = addLine();
  for (const char of text) {
    line.textContent += char;
    keepAtBottom();
    await sleep(typeof speed === "function" ? speed() : speed);
  }
  return line;
}

async function typeBlock(text) {
  const lines = text.split("\n");
  for (let i = 0; i < lines.length; i += 1) {
    await typeLine(lines[i]);
    if (i < lines.length - 1) await sleep(lines[i] ? 90 : 45);
  }
}

function showPrompt() {
  promptNode = document.createElement("div");
  promptNode.className = "prompt-line";
  promptNode.innerHTML = '<span class="prompt-prefix">&gt;</span><span class="prompt-input"></span><span class="cursor" aria-hidden="true"></span>';
  flow.append(promptNode);
  input = "";
  busy = false;
  keepAtBottom();
}

function updatePrompt() {
  if (!promptNode) return;
  promptNode.querySelector(".prompt-input").textContent = input;
  keepAtBottom();
}

function commitPrompt() {
  const command = input;
  if (promptNode) promptNode.remove();
  promptNode = null;
  addLine(`> ${command}`);
  input = "";
  return command;
}

function setColor(mode) {
  const [color, glow, dark] = palette[mode];
  document.documentElement.style.setProperty("--phosphor", color);
  document.documentElement.style.setProperty("--phosphor-soft", glow);
  document.documentElement.style.setProperty("--screen-dark", dark);
}

async function openUxFolder() {
  await typeLine("OPENING UX DOSSIER...");
  await sleep(360);
  uxFolder.hidden = false;
  uxFolder.setAttribute("aria-hidden", "false");
  uxFolderClose.focus({ preventScroll: true });
}

function closeUxFolder() {
  uxFolder.hidden = true;
  uxFolder.setAttribute("aria-hidden", "true");
  keyboardCapture.focus({ preventScroll: true });
}

function setUxLanguage(language = "en") {
  const selectedLanguage = uxTranslations[language] ? language : "en";
  const translation = uxTranslations[selectedLanguage];

  uxFolder.setAttribute("lang", selectedLanguage);

  uxTextNodes.forEach((node) => {
    const key = node.dataset.uxI18n;
    if (translation[key]) {
      node.textContent = translation[key];
    }
  });

  uxAriaNodes.forEach((node) => {
    const key = node.dataset.uxI18nAria;
    if (translation[key]) {
      node.setAttribute("aria-label", translation[key]);
    }
  });

  uxLanguageButtons.forEach((button) => {
    const isActive = button.dataset.uxLang === selectedLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

uxLanguageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setUxLanguage(button.dataset.uxLang);
  });
});

setUxLanguage("en");

async function boot() {
  busy = true;
  poweredOff = false;
  shuttingDown = false;
  clearInterval(matrixTimer);
  clearTimeout(matrixEndTimer);
  matrixCanvas.classList.remove("active");
  shutdown.classList.remove("active");
  crt.classList.remove("powering-down", "glitching");
  signalText.textContent = "";
  clearTerminal();
  keyboardCapture.focus({ preventScroll: true });

  await sleep(450);
  await typeLine("SYSTEM INITIALIZED");
  await sleep(260);
  addLine();
  await typeLine("CHECKING MEMORY...");
  await sleep(380);
  await typeLine("OK");
  await sleep(220);
  addLine();
  await typeLine("LOADING TERMINAL...");
  await sleep(300);
  addLine();
  await typeLine("LOADING");
  await sleep(180);

  const progress = addLine("□□□□□□□□□□");
  for (let i = 1; i <= 10; i += 1) {
    await sleep(115);
    progress.textContent = `${"■".repeat(i)}${"□".repeat(10 - i)}`;
    keepAtBottom();
  }

  await sleep(520);
  clearTerminal();
  await typeLine("TERMINAL v0.1");
  addLine();
  await typeLine('TYPE "help"');
  addLine();
  showPrompt();
}

async function animateScan() {
  for (const label of ["FILES", "MEMORY", "SYSTEM"]) {
    await typeLine(label);
    const bar = addLine("□□□□□□□□");
    for (let i = 1; i <= 8; i += 1) {
      await sleep(105);
      bar.textContent = `${"■".repeat(i)}${"□".repeat(8 - i)}`;
      keepAtBottom();
    }
    await sleep(120);
    bar.textContent += " OK";
    addLine();
  }
  await typeLine("SCAN COMPLETE");
}

function startMatrix(duration = 4000) {
  return new Promise((resolve) => {
    const context = matrixCanvas.getContext("2d");
    matrixCanvas.classList.add("active");
    const bounds = matrixCanvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    matrixCanvas.width = Math.max(1, Math.floor(bounds.width * ratio));
    matrixCanvas.height = Math.max(1, Math.floor(bounds.height * ratio));

    const fontSize = Math.max(12, Math.floor(matrixCanvas.width / 28));
    const columns = Math.ceil(matrixCanvas.width / fontSize);
    const drops = Array.from({ length: columns }, () => Math.random() * -5);
    const glyphs = "01アイウエオカキクケコサシスセソ░▒▓<>/\\";
    const paint = () => {
      context.fillStyle = "rgba(0, 8, 2, 0.14)";
      context.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
      context.font = `${fontSize}px VT323, monospace`;
      const matrixColor = getComputedStyle(document.documentElement).getPropertyValue("--phosphor").trim();
      context.fillStyle = matrixColor;
      context.shadowColor = matrixColor;
      context.shadowBlur = fontSize * 0.45;

      drops.forEach((drop, index) => {
        const char = glyphs[Math.floor(Math.random() * glyphs.length)];
        context.fillText(char, index * fontSize, drop * fontSize);
        drops[index] += 0.72 + Math.random() * 0.58;
        if (drops[index] * fontSize > matrixCanvas.height && Math.random() > 0.965) {
          drops[index] = Math.random() * -8;
        }
      });
    };

    paint();
    matrixTimer = window.setInterval(paint, 55);
    matrixEndTimer = window.setTimeout(() => {
      clearInterval(matrixTimer);
      matrixCanvas.classList.remove("active");
      context.clearRect(0, 0, matrixCanvas.width, matrixCanvas.height);
      resolve();
    }, duration);
  });
}

async function glitch() {
  crt.classList.add("glitching");
  await sleep(1150);
  crt.classList.remove("glitching");
}

async function powerDown() {
  shuttingDown = true;
  crt.classList.add("powering-down");
  await sleep(1200);
  crt.classList.remove("powering-down");
  shutdown.classList.add("active");
  await sleep(400);
  signalText.textContent = "SIGNAL LOST";
  await sleep(1900);
  signalText.textContent = "SIGNAL LOST\n\nPRESS ANY KEY";
  shuttingDown = false;
  poweredOff = true;
}

async function runCommand(rawCommand) {
  const command = rawCommand.trim().toLowerCase();

  if (!command) {
    showPrompt();
    return;
  }

  if (command === "clear") {
    clearTerminal();
    showPrompt();
    return;
  }

  if (command === "boot") {
    await boot();
    return;
  }

  if (command === "exit") {
    await powerDown();
    return;
  }

  addLine();

  switch (command) {
    case "help":
      await typeBlock("AVAILABLE COMMANDS\n\nhelp\nabout\nux\nboot\nclear\ncolor\ngreen\namber\nblue\nglitch\nmatrix\nscan\ndate\nwhoami\ncoffee\nexit");
      break;
    case "about":
      await typeBlock("TERMINAL\n\nInteractive UI concept.\n\nNavigation is replaced with terminal commands.\n\nEverything happens inside one CRT monitor.");
      break;
    case "ux":
      await openUxFolder();
      break;
    case "color":
      await typeBlock("AVAILABLE MODES\n\ngreen\namber\nblue");
      break;
    case "green":
    case "amber":
    case "blue":
      setColor(command);
      await typeBlock(`COLOR MODE: ${command.toUpperCase()}`);
      break;
    case "glitch":
      await glitch();
      await typeBlock("SIGNAL STABILIZED");
      break;
    case "matrix":
      await startMatrix(4000);
      await typeBlock("MATRIX SEQUENCE ENDED");
      break;
    case "scan":
      await animateScan();
      break;
    case "date": {
      const value = new Intl.DateTimeFormat(undefined, {
        dateStyle: "full",
        timeStyle: "medium",
      }).format(new Date());
      await typeBlock(value.toUpperCase());
      break;
    }
    case "whoami":
      await typeBlock("USER\n\nGUEST\n\nACCESS LEVEL\n\nLIMITED");
      break;
    case "coffee":
      await typeBlock("REQUESTING COFFEE...\n\nERROR\n\nCOFFEE MODULE NOT INSTALLED");
      break;
    default:
      await typeBlock(errors[Math.floor(Math.random() * errors.length)]);
  }

  addLine();
  showPrompt();
}

document.addEventListener("keydown", (event) => {
  if (!uxFolder.hidden) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeUxFolder();
    }
    return;
  }

  if (poweredOff) {
    event.preventDefault();
    boot();
    return;
  }

  if (busy || shuttingDown || event.ctrlKey || event.metaKey || event.altKey) {
    if (event.target === keyboardCapture && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
    }
    return;
  }

  if (event.key === "Enter") {
    event.preventDefault();
    busy = true;
    runCommand(commitPrompt());
    return;
  }

  if (event.key === "Backspace") {
    event.preventDefault();
    input = input.slice(0, -1);
    updatePrompt();
    return;
  }

  if (event.key.length === 1 && input.length < 46) {
    event.preventDefault();
    input += event.key;
    updatePrompt();
  }
});

keyboardCapture.addEventListener("input", () => {
  if (!busy && !poweredOff && keyboardCapture.value) {
    input = (input + keyboardCapture.value).slice(0, 46);
    updatePrompt();
  }
  keyboardCapture.value = "";
});

uxFolderClose.addEventListener("click", closeUxFolder);

uxFolder.addEventListener("pointerdown", (event) => {
  if (event.target === uxFolder) {
    closeUxFolder();
  }
});

window.addEventListener("pointerdown", (event) => {
  if (!uxFolder.hidden || event.target.closest(".ux-folder")) return;
  keyboardCapture.focus({ preventScroll: true });
});

window.addEventListener("load", boot, { once: true });
