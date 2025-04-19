const addressData = {
  firstName: "Test",
  lastName: "Testing",
  email: "test@mail.com",
  phone: "8123456789",
  address: "123 Tester St",
  city: "Testville",
  state: "NL",
  zip: "64000",
  country: "Mexico"
};

const invalidAddressData = {
  firstName: "k",
  email: "ggk",
  phone: "ghjjgj",
  address: "ghjg",
  city: "1234city",
  state: "st@te!",
  zip: "invalidzip",
  country: "c0untry!"
};

export { addressData, invalidAddressData };
