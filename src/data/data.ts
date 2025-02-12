type Navlist = {
  icon: string,
  text: string
}



export const list: Navlist[] = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#fff" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/></svg>',
    text: 'Beranda'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#fff" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>',
    text: 'Following'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512"><path fill="#fff" fill-rule="evenodd" d="M469.334 426.667v42.667H42.667v-42.667zM320 42.667l106.667 106.667L192 384H85.334V277.334zM249.747 173.25L128 294.998v46.336h46.336l121.747-121.748zM320 102.998l-40.083 40.082l46.336 46.336l40.083-40.082z"/></svg>',
    text: 'Jawab'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#fff" d="M8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zM8 6h12V4H8zM4 22q-.825 0-1.412-.587T2 20V6h2v14h14v2z"/></svg>',
    text: 'Ruang'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="#fff" d="M5 9a7 7 0 0 1 14 0v3.764l1.822 3.644A1.1 1.1 0 0 1 19.838 18h-3.964a4.002 4.002 0 0 1-7.748 0H4.162a1.1 1.1 0 0 1-.984-1.592L5 12.764zm5.268 9a2 2 0 0 0 3.464 0zM12 4a5 5 0 0 0-5 5v3.764a2 2 0 0 1-.211.894L5.619 16h12.763l-1.17-2.342a2 2 0 0 1-.212-.894V9a5 5 0 0 0-5-5"/></g></svg>',
    text: 'Notifikasi'
  }
];

interface Kategori {
  img: string,
  title: string
}

export const CategoryPost: Required<Kategori[]> = [
  {
    img: '/images/psychiatra.jpg',
    title: 'psychology'
  },
  {
    img: '/images/psychiatra.jpg',
    title: 'psychology'
  },
  {
    img: '/images/psychiatra.jpg',
    title: 'psychology'
  },
  {
    img: '/images/psychiatra.jpg',
    title: 'psychology'
  },
  {
    img: '/images/psychiatra.jpg',
    title: 'psychology'
  },
]