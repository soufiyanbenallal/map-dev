import { routesEnum } from "@/enums";

export const NAVIGATION = [
    { name: 'Insight', href: routesEnum.root },
    // { name: 'Works & Solutions', href: routesEnum.solutions },
    // { name: 'Work', href: routesEnum.works },
    { name: 'Our Services', href: routesEnum.services },
    { name: 'Who We Are?', href: routesEnum.team },
    { name: 'Get in Touch', href: routesEnum.contact, className:'bg-gradient-to-r from-orange-500 via-rose-500 to-violet-600 bg-clip-text !text-transparent' },
]