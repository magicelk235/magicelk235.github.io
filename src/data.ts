export const CONTACT = {
  email: 'yehonatan.2350@gmail.com',
  github: 'https://github.com/magicelk235',
  linkedin: 'https://www.linkedin.com/in/magicelk235/',
  studio: 'https://magicelklabs.com',
};

export type App = {
  name: string;
  line: string;
  detail: string;
  icon: string;
  shot: string;
  shotSize: [number, number];
  alt: string;
  site: string;
  repo: string;
  meta: string;
};

export const APPS: App[] = [
  {
    name: 'Viaduct',
    line: 'Runs Chrome extensions in Safari, natively.',
    detail:
      'Drop in a .zip, a .crx, or a Chrome Web Store link. Viaduct rewrites the manifest, signs the bundle, and installs it into Safari as a real web extension.',
    icon: '/apps/viaduct-icon.png',
    shot: '/apps/viaduct.webp',
    shotSize: [1000, 712],
    alt: 'Viaduct on macOS, mid conversion, with the extension list and a converted bundle ready to install',
    site: 'https://magicelklabs.com/viaduct',
    repo: 'https://github.com/magicelk235/Viaduct-CLI',
    meta: 'Swift app, JavaScript CLI',
  },
  {
    name: 'Spyglass',
    line: 'Quick Look previews for Google Workspace files.',
    detail:
      'Press Space on a .gdoc, .gsheet, or .gslides in Finder and read the document. Without it macOS shows you the stub file, which is a few lines of JSON.',
    icon: '/apps/spyglass-icon.png',
    shot: '/apps/spyglass.webp',
    shotSize: [1000, 800],
    alt: 'A Google Docs file previewed in Quick Look on macOS through Spyglass',
    site: 'https://magicelklabs.com/spyglass',
    repo: 'https://github.com/magicelk235/Spyglass',
    meta: 'Swift, Quick Look extension',
  },
];

export type Metal = {
  name: string;
  what: string;
  body: string;
  facts: string[];
  href: string;
  hrefLabel: string;
};

export const METAL: Metal[] = [
  {
    name: 'HolyC++',
    what: 'A compiled language for x86-64 Linux',
    body: 'Source goes in, native machine code comes out through NASM and ld. The compiler itself is written in assembly, so the language bootstraps on nothing but an assembler and a linker.',
    facts: ['4,284 lines of NASM', '12 standard library modules', 'x86-64 Linux'],
    href: 'https://github.com/magicelk235/HolyCpp',
    hrefLabel: 'Read the language reference',
  },
  {
    name: 'NASM x86-64 for VS Code',
    what: 'Editor tooling for people writing assembly',
    body: 'Syntax highlighting that understands your own macros, hover docs for 684 instructions and directives, number conversion on hover, and label completion that reaches across open files.',
    facts: ['684 instructions documented', 'TypeScript', 'On the Marketplace'],
    href: 'https://marketplace.visualstudio.com/items?itemName=Magicelk235.nasm-x64',
    hrefLabel: 'Install the extension',
  },
  {
    name: 'Snake',
    what: 'Two-player Snake in x86 assembly',
    body: 'Runs under DOSBox. It writes straight into text-mode video memory at 0xB800, packs each segment into an x/y byte pair, and seeds its random apple placement from the BIOS tick counter.',
    facts: ['TASM', 'Text mode, 80x25', 'Wall or wrap mode'],
    href: 'https://github.com/magicelk235/Snake',
    hrefLabel: 'Read the source',
  },
  {
    name: 'PalPal',
    what: 'Images to assembly byte arrays',
    body: 'Open an image, get it back as db rows you can paste into a NASM source file. Built because putting sprites into an assembly program by hand is miserable.',
    facts: ['Python, Pillow', 'db byte rows', 'Copy to clipboard'],
    href: 'https://github.com/magicelk235/PalPal',
    hrefLabel: 'Read the source',
  },
];

export const HOLYC_SAMPLE = `include <io>

func add(qword a, qword b)>1
    new qword result
    result = a + b
    return result
end

func main(@byte args)>1
    print("Hello, World!\\n")
    return add(10, 20)
end`;

export const WORLDSPAWN_STATS: { value: number; label: string; suffix?: string }[] = [
  { value: 83, label: 'creatures' },
  { value: 143, label: 'items' },
  { value: 141, label: 'world objects' },
  { value: 5298, label: 'lines of Python' },
];

export const SPRITES = [
  'player_idle',
  'knight',
  'swordman',
  'skeleton',
  'zombie',
  'goblin',
  'goblin_archer',
  'troll',
  'ogre',
  'cyclops',
  'golem',
  'stone_golem',
  'fire_golem',
  'water_golem',
  'sand_golem',
  'yeti',
  'witch',
  'wizard',
  'phoenix',
  'demon',
  'mummy',
  'ghost',
  'wolf',
  'deer',
  'cow',
  'chicken',
  'horse',
  'scorpion',
];

export const OTHER = [
  {
    name: 'MathSpace',
    body: 'A two-player space shooter where a meteor hit pauses the game and hands you an inequality with fractions. Solve it fast to keep scoring.',
    href: 'https://github.com/magicelk235/MathSpace',
    meta: 'Python, Pygame, SymPy',
  },
  {
    name: 'Board Games',
    body: 'Seven terminal games in one menu, including chess with full move validation and bingo that prints several boards side by side.',
    href: 'https://github.com/magicelk235/Board-Games',
    meta: 'Python, no dependencies',
  },
  {
    name: 'Texture Pack Merger',
    body: 'Merges Minecraft texture packs. JSON files get deep merged instead of overwritten, so language files and model definitions survive the merge.',
    href: 'https://github.com/magicelk235/Merger',
    meta: 'Python 3.10+',
  },
];

export const LANGUAGES = [
  'x86-64 assembly',
  'Python',
  'C',
  'C++',
  'Swift',
  'TypeScript',
  'JavaScript',
  'Java',
  'C#',
  'Bash',
];
