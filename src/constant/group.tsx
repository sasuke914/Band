import { title } from "process"

export const menuItemData = [
  {
    title: 'КОМАНДА',
    url: '/team',
  },
  {
    title: 'УСЛУГИ',
    submenu: [
      {
        title: 'ТЕХНИЧЕСКИЕ УСЛУГИ',
        submenu: [
          { title: 'Свет', url: '/technical' },
          { title: 'Звук', url: '/technical/sound' },
          { title: 'Видео', url: '/technical/videopage' },
          { title: 'Одежда сцены и линолеум', url: '/technical/stageclothes' },
        ]
      },
      {
        title: 'ФИРМЕННЫЕ УСЛУГИ',
        submenu: [
          { title: 'Разработка шоу', url: '/services/showdevelopment' },
          { title: '3D-визуализация', url: '/services' },
          { title: 'База для репетиций', url: '/services/rehearsal' },
        ]
      },
      {
        title: 'ПРОДАКШН',
        submenu: [
          { title: 'События', url: '/production' },
          { title: 'Концерты и туры', url: '/production/tourconcert' },
        ]
      },
    ]
  },
  { title: 'КЕЙСЫ', url: '/cases', },
  { title: 'ПЛОЩАДКИ', url: '/platforms', },
  { title: 'ОБОРУДОВАНИЕ', url: '/equipment', },
  { title: 'КОНТАКТЫ', url: '/contact', },
]

export const footerTopLink = [
  { title: "КОМАНДА", url: "/team" },
  { title: "КЕЙСЫ", url: "/cases" },
  { title: "ПЛОЩАДКИ", url: "/platforms" },
  { title: "ОБОРУДОВАНИЕ", url: "/equipment" },
  { title: "КОНТАКТЫ", url: "/contact" },
]

export const footerBottomLink = [
  {
    title: 'РАЗРАБОТКА ШОУ',
    submenu: [
      { title: '3D-визуализация', url: '' },
      { title: 'Репетиционная база', url: '' }
    ]
  },
  {
    title: 'ПРОДАКШН',
    submenu: [
      { title: 'События', url: '' },
      { title: 'Концерты и туры', url: '' },
    ]
  },
  {
    title: 'ТЕХНИЧЕСКИЕ УСЛУГИ',
    submenu: [
      { title: 'Свет', url: '' },
      { title: 'Видео', url: '' },
      { title: 'Звук', url: '' },
      { title: 'Одежда сцены', url: '' },
    ]
  }
]