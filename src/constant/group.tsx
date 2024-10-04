import { title } from "process"
import {
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9,
  site1, site2, site3, site4, site5, site6
} from "../../public"

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

export const galleryData = [
  {
    url: gallery1,
    name: 'Название мероприятия',
    venue: 'Место его проведения'
  },
  {
    url: gallery2,
    name: 'Название мероприятия',
    venue: 'Место его проведения'
  },
  {
    url: gallery3,
    name: 'Название мероприятия',
    venue: 'Место его проведения'
  },
  {
    url: gallery4,
    name: 'Название мероприятия',
    venue: 'Место его проведения'
  },
  {
    url: gallery5,
    name: 'Название мероприятия',
    venue: 'Место его проведения'
  },
  {
    url: gallery6,
    name: 'Название мероприятия',
    venue: 'Место его проведения'
  },
  {
    url: gallery7,
    name: 'Название мероприятия',
    venue: 'Место его проведения'
  },
  {
    url: gallery8,
    name: 'Название мероприятия',
    venue: 'Место его проведения'
  },
  {
    url: gallery9,
    name: 'Название мероприятия',
    venue: 'Место его проведения'
  },
]

export const submenu = [
  { title: 'Одежда сцены и линолеум', url: '/technical/stageclothes' },
  { title: 'Свет', url: '/technical' },
  { title: 'Звук', url: '/technical/sound' },
  { title: 'Видео', url: '/technical/videopage' },
]

export const gallery = [
  { top: 0, width: 463, },
  { top: 212, width: 360, },
  { width: 259, top: 38, },
  { width: 359, top: 27, },
  { width: 360, top: 136, },
  { width: 400, top: 0, },
  { width: 260, top: 212, },
  { width: 260, top: 145, },
  { width: 660, top: 249, },
]

export const sites = [
  {
    url: site1,
    capacity: 2300,
    name: '1930 Moscow',
    address: 'Россия, Москва'
  },
  {
    url: site2,
    capacity: 2300,
    name: '1930 Moscow',
    address: 'Россия, Москва'
  },
  {
    url: site3,
    capacity: 2300,
    name: '1930 Moscow',
    address: 'Россия, Москва'
  },
  {
    url: site4,
    capacity: 2300,
    name: '1930 Moscow',
    address: 'Россия, Москва'
  },
  {
    url: site5,
    capacity: 2300,
    name: '1930 Moscow',
    address: 'Россия, Москва'
  },
  {
    url: site6,
    capacity: 2300,
    name: '1930 Moscow',
    address: 'Россия, Москва'
  },
]

export const visualizationData = [
  {
    title: 'Площадки ЗАВОД ШОУ - Площадки | Ивент | Концерт | Мероприятия | Решения и концепции',
    url: 'smallCardVideo',
    description: 'Всем привет! Делимся прошедшим туром с Ириной Круг. Ребята снимают целые влоги, делимся частичкой 🤝',
    link: '/'
  },
  {
    title: 'Площадки ЗАВОД ШОУ - Площадки | Ивент | Концерт | Мероприятия | Решения и концепции',
    url: 'smallCardVideo',
    description: 'Всем привет! Делимся прошедшим туром с Ириной Круг. Ребята снимают целые влоги, делимся частичкой 🤝',
    link: '/'
  }
]