export const DEFAULT_PROFILE = 'gamedev'

// Every skill card the site can show. Profiles pick and order these by id.
export const skillCatalog = {
    gamedev: {
        svgName: 'gamepad',
        title: 'Game Development',
        description: 'Developing engaging gaming experiences',
    },
    gamedesign: {
        svgName: 'tetris',
        title: 'Game Design',
        description: 'Prototyping and designing engaging games',
    },
    software: {
        svgName: 'code',
        title: 'Software Engineering',
        description: 'Building scalable and efficient software solutions',
    },
    web: {
        svgName: 'globe',
        title: 'Web Development',
        description: 'Crafting modern and responsive web applications',
    },
    it: {
        svgName: 'server',
        title: 'IT Solutions',
        description: 'Building and securing IT applications',
    },
    ai: {
        svgName: 'bot',
        title: 'AI Programming',
        description: 'Training and deploying AI models',
    },
}

export const profiles = {
    gamedev: {
        id: 'gamedev',
        label: 'Game Dev',
        documentTitle: 'Mohammed Bajaman | Game Developer',
        typewriterRoles: [
            'Game Programmer',
            'Gameplay Engineer',
            'Unity Developer',
            'UE5 Developer',
        ],
        heroSubtitle:
            'Gameplay systems, engines, and AI. Shipped across Unity, Unreal, Godot, and MapleStory Worlds.',
        aboutSubtitle:
            'Game Developer | Gameplay Programmer | Engine Programmer',
        skillCards: ['gamedev', 'gamedesign', 'software', 'ai'],
    },
    swe: {
        id: 'swe',
        label: 'Software',
        documentTitle: 'Mohammed Bajaman | Software Engineer',
        typewriterRoles: [
            'Software Engineer',
            'Backend Developer',
            'Systems Programmer',
        ],
        heroSubtitle:
            'Passionate about creating elegant solutions through code, from C++ engine internals to Python services.',
        aboutSubtitle: 'Software Engineer | Game Developer | IT Expert',
        skillCards: ['software', 'gamedev', 'ai', 'web'],
    },
    it: {
        id: 'it',
        label: 'IT',
        documentTitle: 'Mohammed Bajaman | IT Specialist',
        typewriterRoles: [
            'IT Specialist',
            'Systems Administrator',
            'Automation Engineer',
        ],
        heroSubtitle:
            '5+ years automating and securing IT infrastructure for 200+ user environments.',
        aboutSubtitle:
            'IT Specialist | Systems Administrator | Automation Engineer',
        skillCards: ['it', 'software', 'ai', 'web'],
    },
    ai: {
        id: 'ai',
        label: 'AI / ML',
        documentTitle: 'Mohammed Bajaman | AI Programmer',
        typewriterRoles: ['AI Programmer', 'ML Engineer', 'Game AI Programmer'],
        heroSubtitle:
            'Machine learning and game AI, from intrusion detection models to GOAP agents in Unreal.',
        aboutSubtitle: 'AI Programmer | ML Engineer | Game Developer',
        skillCards: ['ai', 'software', 'gamedev', 'it'],
    },
    web: {
        id: 'web',
        label: 'Web',
        documentTitle: 'Mohammed Bajaman | Web Developer',
        typewriterRoles: [
            'Web Developer',
            'Frontend Developer',
            'Full Stack Developer',
        ],
        heroSubtitle:
            'Crafting modern, responsive web applications with React and Python backends.',
        aboutSubtitle: 'Web Developer | Software Engineer | IT Expert',
        skillCards: ['web', 'software', 'it', 'ai'],
    },
}

export const profileList = Object.values(profiles)
