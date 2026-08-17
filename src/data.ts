export const CONTACT = {
  email: 'yehonatan.2350@gmail.com',
  github: 'https://github.com/magicelk235',
  linkedin: 'https://www.linkedin.com/in/magicelk235/',
  gitlab: 'https://gitlab.com/magicelk235',
  studio: 'https://magicelklabs.com',
  location: 'Israel',
  cv: '/cv.pdf',
};

export type App = {
  name: string;
  year: string;
  line: string;
  detail: string;
  stack: string;
  icon: string;
  shot: string;
  shotSize: [number, number];
  alt: string;
  site: string;
  repo: string;
};

export const APPS: App[] = [
  {
    name: 'Viaduct',
    year: '2026',
    line: 'Runs Chrome extensions in Safari, natively.',
    detail:
      'Drop in a .zip, a .crx, or a Chrome Web Store link. Viaduct rewrites the manifest, signs the bundle, and installs it into Safari as a real web extension, without opening Xcode.',
    stack: 'Swift app wrapping a JavaScript CLI',
    icon: '/apps/viaduct-icon.png',
    shot: '/apps/viaduct.webp',
    shotSize: [1000, 712],
    alt: 'Viaduct on macOS with a Chrome extension dropped in and ready to convert',
    site: 'https://magicelklabs.com/viaduct',
    repo: 'https://github.com/magicelk235/Viaduct-CLI',
  },
  {
    name: 'Spyglass',
    year: '2026',
    line: 'Quick Look previews for Google Workspace files.',
    detail:
      'Press Space on a .gdoc, .gsheet, or .gslides in Finder and read the document. Without it macOS shows you the stub file, which is a few lines of JSON.',
    stack: 'Swift, Quick Look extension',
    icon: '/apps/spyglass-icon.png',
    shot: '/apps/spyglass.webp',
    shotSize: [1000, 800],
    alt: 'A Google Docs file previewed in Quick Look on macOS through Spyglass',
    site: 'https://magicelklabs.com/spyglass',
    repo: 'https://github.com/magicelk235/Spyglass',
  },
];

export type Metal = {
  name: string;
  year: string;
  what: string;
  body: string;
  facts: string[];
  href: string;
  hrefLabel: string;
};

export const METAL: Metal[] = [
  {
    name: 'HolyC++',
    year: '2025',
    what: 'A compiled language for x86-64 Linux',
    body: 'My own language. Source goes in, native machine code comes out through NASM and ld. The compiler is written in assembly, so the whole thing bootstraps on an assembler and a linker.',
    facts: ['4,284 lines of NASM', '12 standard library modules', '2,110 lines of library code'],
    href: 'https://github.com/magicelk235/HolyCpp',
    hrefLabel: 'Read the language reference',
  },
  {
    name: 'NASM x86-64 for VS Code',
    year: '2026',
    what: 'Editor tooling for people writing assembly',
    body: 'Highlighting that understands the macros you defined, hover docs for 684 instructions and directives, number conversion on hover, and label completion that reaches across open files.',
    facts: ['684 instructions documented', 'TypeScript', 'On the VS Code Marketplace'],
    href: 'https://marketplace.visualstudio.com/items?itemName=Magicelk235.nasm-x64',
    hrefLabel: 'Install the extension',
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

export const WORLDSPAWN_STATS: { value: number; label: string }[] = [
  { value: 83, label: 'creatures' },
  { value: 143, label: 'items' },
  { value: 141, label: 'world objects' },
  { value: 5298, label: 'lines of Python' },
];

export const WORLDSPAWN_SAMPLE = `def generate_temperature_elevation(self, bx, by):
    """Temperature and elevation for a biome region, deterministically."""
    temp = self.seeded_random(bx, by, -20, 50)
    elev = self.seeded_random(bx + 1000, by - 1000, 0, 60)
    return temp, elev

def get_biome(self, temp, elev):
    possible_biomes = []
    for biome in self.world_data.chunks_data.keys():
        data = self.world_data.chunks_data[biome]
        temp_range, elev_range = data.temperature, data.elevation
        if temp_range[0] <= temp <= temp_range[1] and elev_range[0] <= elev <= elev_range[1]:
            possible_biomes.append(biome)
    if possible_biomes:
        return random.choice(possible_biomes)
    return list(self.world_data.chunks_data.keys())[0]`;

export const WORKFLOW = [
  {
    title: 'Agents run in the terminal',
    body: 'Claude Code is part of the daily loop. I set the project rules and the context it reads, wire up MCP servers and skills, and give it work in pieces rather than one large prompt.',
  },
  {
    title: 'Prototype fast, then take over',
    body: 'A model is quick at the first version and careless with the parts that matter. I let it draft, then write the parsing, the memory handling, and anything performance sensitive myself.',
  },
  {
    title: 'Shipped this way',
    body: 'Parts of Viaduct and Spyglass were built in this workflow, including the sites and the packaging. Reviewing what the agent produced is the part of the job that stays mine.',
  },
];

export const BACKGROUND: { label: string; items: string[] }[] = [
  {
    label: 'School',
    items: [
      '11th grade in Israel',
      'Majoring in cyber, computer science, and physics',
    ],
  },
  {
    label: 'Tel Aviv University',
    items: [
      'Artificial Intelligence and Data Science program, taken alongside high school',
      'Completed: calculus, linear algebra, statistics',
      'Next semester: data science',
    ],
  },
  {
    label: 'Self taught',
    items: [
      'Systems programming, compilers, and macOS development',
      'None of it is on a syllabus. It came out of the projects on this page',
    ],
  },
];

/**
 * Bytes per language as GitHub counts them, summed over the project
 * repositories only. The two website repos are left out: their generated HTML
 * would outweigh everything and say nothing. Refresh with the languages API.
 */
export const LANGUAGE_BYTES = [
  { name: 'JavaScript', bytes: 585840, percent: 27.7 },
  { name: 'Python', bytes: 553051, percent: 26.2 },
  { name: 'TypeScript', bytes: 471742, percent: 22.3 },
  { name: 'Swift', bytes: 355006, percent: 16.8 },
  { name: 'Assembly', bytes: 121599, percent: 5.8 },
  { name: 'Shell', bytes: 24749, percent: 1.2 },
];

export const LANGUAGE_MEASURED = { repos: 14, date: 'August 2026' };

export const SKILLS: { label: string; items: string[] }[] = [
  {
    label: 'Also written in',
    items: ['C', 'C++', 'Java', 'C#', 'Bash'],
  },
  {
    label: 'Technologies',
    items: ['React', 'Node', 'NASM', 'CMake', 'Docker', 'Git', 'Linux', 'macOS', 'Pygame'],
  },
  {
    label: 'Fields',
    items: [
      'Compilers and systems programming',
      'Developer tools',
      'macOS applications',
      'Game development',
      'Cyber',
    ],
  },
  { label: 'Spoken', items: ['Hebrew, native', 'English, fluent'] },
];

export type IndexRow = { name: string; year: string; what: string; lang: string; href: string };

export const INDEX: IndexRow[] = [
  {
    name: 'Snake',
    year: '2026',
    what: 'Two-player Snake for DOS, writing straight to video memory at 0xB800',
    lang: 'x86 assembly',
    href: 'https://github.com/magicelk235/Snake',
  },
  {
    name: 'MathSpace',
    year: '2026',
    what: 'Space shooter where a meteor hit pauses the game and hands you an inequality',
    lang: 'Python',
    href: 'https://github.com/magicelk235/MathSpace',
  },
  {
    name: 'Board Games',
    year: '2026',
    what: 'Seven terminal games in one menu, chess move validation included',
    lang: 'Python',
    href: 'https://github.com/magicelk235/Board-Games',
  },
  {
    name: 'PalPal',
    year: '2026',
    what: 'Turns an image into assembly db byte rows you can paste into a source file',
    lang: 'Python',
    href: 'https://github.com/magicelk235/PalPal',
  },
  {
    name: 'Texture Pack Merger',
    year: '2026',
    what: 'Merges Minecraft texture packs, deep merging the JSON instead of overwriting it',
    lang: 'Python',
    href: 'https://github.com/magicelk235/Merger',
  },
  {
    name: 'Homebrew tap',
    year: '2026',
    what: 'brew install for the Magicelk Labs command line tools',
    lang: 'Ruby',
    href: 'https://github.com/magicelk235/homebrew-magicelklabs',
  },
];
