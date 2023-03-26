import { faker } from '@faker-js/faker';
const GenerateArtists = (count) => {
  const artists = [];

  for (let i = 0; i < count; i++) {
    const name = faker.name.fullName();
    const imageUrl = faker.image.imageUrl(500, 500, "people", true);
    const bio = faker.lorem.paragraph();
    const birthDate = faker.date.past().toLocaleDateString();
    const birthPlace = `${faker.address.city()}, ${faker.address.country()}`;
    const genres = [
      faker.music.genre(),
      faker.music.genre(),
      faker.music.genre(),
    ];
    const albums = [
      { id: faker.datatype.uuid(), title: faker.lorem.words(), year: faker.date.past().getFullYear() },
      { id: faker.datatype.uuid(), title: faker.lorem.words(), year: faker.date.past().getFullYear() },
      { id: faker.datatype.uuid(), title: faker.lorem.words(), year: faker.date.past().getFullYear() },
    ];
    const website = faker.internet.url();
    const twitter = `https://twitter.com/${faker.internet.userName()}`;
    const instagram = `https://www.instagram.com/${faker.internet.userName()}`;
    const facebook = `https://www.facebook.com/${faker.internet.userName()}`;

    const artist = {
      id: faker.datatype.uuid(),
      name,
      imageUrl,
      bio,
      birthDate,
      birthPlace,
      genres,
      albums,
      website,
      twitter,
      instagram,
      facebook,
    };

    artists.push(artist);
  }

  return artists;
};
export default GenerateArtists
