export type Elevation = {
  id: number
  name:string
  url: string
  alt:string
}

export const elevations:Array<Elevation> = [
  {
    id: 1,
    alt: 'Brick',
    url: 'https://res.cloudinary.com/tomasz-sosi-ski/image/upload/v1690732547/ELEVATION_BRICK_nt0ijr.png',
    name:'Brick'
  },
  {
    id: 2,
    alt: 'Metal',
    url: 'https://res.cloudinary.com/tomasz-sosi-ski/image/upload/v1690732547/ELEVATION_METAL_kcbrmv.png',
    name:'Metal'
  },
  {
    id: 3,
    alt: 'Light Wood',
    url: 'https://res.cloudinary.com/tomasz-sosi-ski/image/upload/v1690732547/ELEVATION_WOOD_LIGHT_pcry5b.png',
    name:'Light Wood'
  },
  {
    id: 4,
    alt: 'Light Wood',
    url: 'https://res.cloudinary.com/tomasz-sosi-ski/image/upload/v1690738763/ELEVATION_WOOD_LIGHT_zqu33m.png',
    name:'Light Wood'
  },
  {
    id: 5,
    alt: 'Dark Wood',
    url: 'https://res.cloudinary.com/tomasz-sosi-ski/image/upload/v1690738763/ELEVATION_WOOD_DARK_trypqg.png',
    name:'Dark Wood'
  },
  {
    id: 6,
    alt: 'Plaster',
    url: 'https://res.cloudinary.com/tomasz-sosi-ski/image/upload/v1690738645/ELEVATION_PLASTER_nghegq.png',
    name:'Plaster'
  },
]