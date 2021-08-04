const ages = [12, 14, 20];
const ages2 = [12, 14, 20];
const ages3 = [12, 14, 20];

// const allAges = ages.concat(ages2).concat(ages3);
// Or
// const allAges = [ages, ages2, 5, ages3];
// Or
const allAges2 = [...ages, ...ages2, ...ages3];

// ... is a spread operator

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisha = [650, 450, 250];
// const maximum = Math.max(business, minister, sochib);

const maximum = Math.max(...takaPoisha);console.log(maximum);