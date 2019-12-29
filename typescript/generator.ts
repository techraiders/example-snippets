function* WeaponGenerator() {
  yield 'Katana';
  yield 'Wakizashi';
  yield 'Cannon';
}

for (let weapon of WeaponGenerator()) {
  console.log(`We have a ${weapon} in our options`);
}
