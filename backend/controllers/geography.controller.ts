import User from "../model/auth.model";
import { getCountryISO3 } from "ts-country-iso-2-to-3";

export const getGeography = async (req: any, res: any, next: any) => {
  try {
    const users = await User.find();
    const mappedLocations = await users.reduce((acc: any, { country }) => {
      const countryISO3 = getCountryISO3(country);
      if (!acc[countryISO3]) {
        acc[countryISO3] = 0;
      }
      acc[countryISO3]++;
      return acc;
    }, {});
    const formattedLocations = Object.entries(mappedLocations).map(
      ([country, count]) => {
        return { id: country, value: count };
      }
    );
    res.status(200).json(formattedLocations);
  } catch (error) {
    next(error);
  }
};
