import { Router } from "express";
import { City, Country } from "../types";
import { citiesDB, contriesDB } from "../db";

const cityRouter = Router();

cityRouter.get("/", (_req, res) => {
  citiesDB.find({}, (err: Error | null, cities: City[]) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      contriesDB.find({}, (err: Error | null, countries: Country[]) => {
        if (err) {
          return res.status(500).send(err);
        } else if (!countries) {
          return res.status(404).send("Country not found");
        } else {
          const newCities = cities.map((city) => {
            const country = countries.find(
              (country) => country.code === city.country,
            );
            return { ...city, country };
          });
          return res.send(newCities);
        }
      });
    }
  }); // 오름차순
});

cityRouter.get("/search", (req, res) => {
  const { q } = req.query;
  if (typeof q !== "string") {
    res.status(400).send("Invalid query");
    return;
  }

  const queryRegex = new RegExp(q, "i");
  contriesDB.find({}, (err: Error | null, contries: Country[]) => {
    if (err) {
      return res.status(500).send(err);
    }
    const searchContries = contries.filter((country) =>
      country.name.match(queryRegex),
    );
    const countriesRegex = new RegExp(
      searchContries.map((country) => country.code).join("|"),
      "i",
    );
    const dbQuery =
      searchContries.length > 0
        ? { $or: [{ name: new RegExp(q, "i") }, { country: countriesRegex }] }
        : { name: new RegExp(q, "i") };

    citiesDB.find(dbQuery, (err: Error | null, cities: City[]) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        const newCities = cities.map((city) => {
          const country = contries.find(
            (country) => country.code === city.country,
          );
          return { ...city, country };
        });
        return res.send(newCities);
      }
    });
  });
});

cityRouter.get("/:city", (req, res) => {
  citiesDB.findOne(
    { city: req.params.city },
    (err: Error | null, city: City) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        contriesDB.findOne(
          {
            code: city.country,
          },
          (err: Error | null, country: City) => {
            if (err) {
              return res.status(500).send(err);
            } else if (!country) {
              return res.status(404).send("Country not found");
            } else {
              return res.send({ ...city, country });
            }
          },
        );
      }
    },
  );
});

cityRouter.post("/", (req, res) => {
  const city = req.body as City;
  citiesDB.insert(city, (err: Error | null, doc: City) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      return res.send(doc);
    }
  });
});

export default cityRouter;
