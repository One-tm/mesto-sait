export type PriceService = {
  name: string;
  price: number;
  hasNote?: boolean;
};

export type PetType = "dog" | "cat";
export type PetSize = "small" | "medium" | "large" | "giant";

export type PriceItem = {
  id: string;
  petType: PetType;
  breed: string;
  size?: PetSize;
  coatType?: string;
  serviceCategory: string;
  serviceName: string;
  description?: string;
  priceFrom: number;
  priceTo?: number;
  durationMinutes?: number;
  notes?: string;
};

export type BreedPriceGroup = {
  id: string;
  breed: string;
  services: PriceService[];
};

export type ServiceDescription = {
  name: string;
  description: string;
};

export type AdditionalPriceItem = {
  id: string;
  name: string;
  category: string;
  price: number;
};

export type PriorityBreedSection = {
  title: string;
  breedNames: string[];
};

export const priorityBreedSections = [
  {
    "title": "Пудель",
    "breedNames": [
      "Пудель королевский от 45 см",
      "Пудель малый (средний) от 36 до 45 см",
      "Пудель карликовый от 28 до 36 см",
      "Пудель той до 28 см"
    ]
  },
  {
    "title": "Мальтипу",
    "breedNames": [
      "Мальтипу до 5 кг",
      "Мальтипу от 5 кг"
    ]
  },
  {
    "title": "Шпиц",
    "breedNames": [
      "Шпиц до 24 см",
      "Шпиц от 24 до 30 см",
      "Шпиц от 30 до 38 см",
      "Шпиц от 38 см"
    ]
  },
  {
    "title": "Йорк",
    "breedNames": [
      "Йоркширский терьер до 5 кг",
      "Йоркширский терьер от 5 кг"
    ]
  },
  {
    "title": "Мальтезе",
    "breedNames": [
      "Мальтийская болонка (Мальтезе) до 5 кг",
      "Мальтийская болонка (Мальтезе) от 5 кг"
    ]
  },
  {
    "title": "Папильон",
    "breedNames": [
      "Папийьон (Папильон)"
    ]
  },
  {
    "title": "Хаски",
    "breedNames": [
      "Сибирский хаски"
    ]
  },
  {
    "title": "Сиба ину",
    "breedNames": [
      "Сиба Ину (Шиба Ину)"
    ]
  },
  {
    "title": "Корги",
    "breedNames": [
      "Вельш-корги (до 15 кг)",
      "Вельш-корги (от 15 кг)"
    ]
  }
] as const;

export const dogPriceGroups = [
  {
    "id": "avstraliyskaya-ovcharka-aussi",
    "breed": "Австралийская овчарка (Аусси)",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 6000,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3800,
        "hasNote": true
      }
    ]
  },
  {
    "id": "akita-inu-amerikanskaya",
    "breed": "Акита Ину (Американская)",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 8500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 5500,
        "hasNote": true
      }
    ]
  },
  {
    "id": "akita-inu-yaponskaya",
    "breed": "Акита Ину (Японская)",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 6800,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4500,
        "hasNote": true
      }
    ]
  },
  {
    "id": "alyaskinskiy-malamut",
    "breed": "Аляскинский маламут",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 7900,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 5100,
        "hasNote": true
      }
    ]
  },
  {
    "id": "alyaskinskiy-kli-kay",
    "breed": "Аляскинский кли-кай",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 5500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3500,
        "hasNote": true
      }
    ]
  },
  {
    "id": "amerikanskiy-bulli-do-30-kg",
    "breed": "Американский булли до 30 кг",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 5900,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4900,
        "hasNote": false
      }
    ]
  },
  {
    "id": "amerikanskiy-bulli-ot-30-kg",
    "breed": "Американский булли от 30 кг",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 6900,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 5700,
        "hasNote": false
      }
    ]
  },
  {
    "id": "amerikanskiy-toy-foks-ter-er",
    "breed": "Американский той фокс-терьер",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 4200,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3000,
        "hasNote": false
      }
    ]
  },
  {
    "id": "afrikanskiy-burbul",
    "breed": "Африканский Бурбуль",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 8900,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 6500,
        "hasNote": false
      }
    ]
  },
  {
    "id": "afganskaya-borzaya",
    "breed": "Афганская борзая",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 7900,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 5200,
        "hasNote": false
      }
    ]
  },
  {
    "id": "affen-pincher",
    "breed": "Аффен-пинчер",
    "services": [
      {
        "name": "Комплекс с триммингом",
        "price": 5200,
        "hasNote": false
      },
      {
        "name": "Комплекс со стрижкой",
        "price": 4200,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3100,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2000,
        "hasNote": false
      }
    ]
  },
  {
    "id": "bassendzhi",
    "breed": "Бассенджи",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 4700,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3100,
        "hasNote": false
      }
    ]
  },
  {
    "id": "basset-haund-do-25-kg",
    "breed": "Бассет-хаунд до 25 кг",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 5500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3600,
        "hasNote": false
      }
    ]
  },
  {
    "id": "basset-haund-ot-25-kg",
    "breed": "Бассет-хаунд от 25 кг",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 5500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3600,
        "hasNote": false
      }
    ]
  },
  {
    "id": "bedlington-ter-er",
    "breed": "Бедлингтон терьер",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 5600,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4400,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 3000,
        "hasNote": false
      }
    ]
  },
  {
    "id": "bel-giyskaya-ovcharka-dlinnosherstnaya",
    "breed": "Бельгийская овчарка длинношерстная",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 8200,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 6000,
        "hasNote": true
      }
    ]
  },
  {
    "id": "bel-giyskaya-ovcharka-korotkosherstnaya",
    "breed": "Бельгийская овчарка короткошерстная",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 7500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 5200,
        "hasNote": false
      }
    ]
  },
  {
    "id": "bernskiy-zennenhund-dlinnosherstnyy",
    "breed": "Бернский зенненхунд длинношерстный",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 9500,
        "hasNote": false
      },
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 8500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 6500,
        "hasNote": true
      }
    ]
  },
  {
    "id": "bernskiy-zennenhund-gladkosherstnyy",
    "breed": "Бернский зенненхунд гладкошерстный",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 7900,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 5300,
        "hasNote": false
      }
    ]
  },
  {
    "id": "biver-yorkshirskiy-ter-er-do-5-kg",
    "breed": "Бивер йоркширский терьер до 5 кг",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3600,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 1800,
        "hasNote": false
      }
    ]
  },
  {
    "id": "biver-yorkshirskiy-ter-er-ot-5kg",
    "breed": "Бивер йоркширский терьер от 5кг",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4700,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3800,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2000,
        "hasNote": false
      }
    ]
  },
  {
    "id": "bigl-do-15-kg",
    "breed": "Бигль до 15 кг",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 4800,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3900,
        "hasNote": false
      }
    ]
  },
  {
    "id": "bigl-ot-15-kg",
    "breed": "Бигль от 15 кг",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 5000,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4000,
        "hasNote": false
      }
    ]
  },
  {
    "id": "bishon-frize",
    "breed": "Бишон-фризе",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 5500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4500,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 3100,
        "hasNote": false
      }
    ]
  },
  {
    "id": "bladhaund",
    "breed": "Бладхаунд",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 6700,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4900,
        "hasNote": false
      }
    ]
  },
  {
    "id": "bobteyl",
    "breed": "Бобтейл",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 8900,
        "hasNote": false
      },
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 7900,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 6900,
        "hasNote": true
      }
    ]
  },
  {
    "id": "bokser",
    "breed": "Боксер",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 5700,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3700,
        "hasNote": false
      }
    ]
  },
  {
    "id": "bolon-ez",
    "breed": "Болоньез",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4900,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3900,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2800,
        "hasNote": false
      }
    ]
  },
  {
    "id": "bordosskiy-dog-mastif",
    "breed": "Бордосский дог (мастиф)",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 7500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 5200,
        "hasNote": false
      }
    ]
  },
  {
    "id": "border-kolli",
    "breed": "Бордер колли",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 5200,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4000,
        "hasNote": true
      }
    ]
  },
  {
    "id": "border-ter-er",
    "breed": "Бордер терьер",
    "services": [
      {
        "name": "Комплекс с триммингом",
        "price": 5800,
        "hasNote": false
      },
      {
        "name": "Комплекс со стрижкой",
        "price": 4900,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3600,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2300,
        "hasNote": false
      }
    ]
  },
  {
    "id": "boston-ter-er",
    "breed": "Бостон терьер",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 4600,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 2900,
        "hasNote": false
      }
    ]
  },
  {
    "id": "briar",
    "breed": "Бриар",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 8700,
        "hasNote": false
      },
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 7700,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 6700,
        "hasNote": true
      }
    ]
  },
  {
    "id": "bryusel-skiy-grifon",
    "breed": "Брюсельский грифон",
    "services": [
      {
        "name": "Комплекс с триммингом",
        "price": 5200,
        "hasNote": false
      },
      {
        "name": "Комплекс со стрижкой",
        "price": 4200,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3100,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2000,
        "hasNote": false
      }
    ]
  },
  {
    "id": "bul-dog-amerikanskiy",
    "breed": "Бульдог американский",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 7200,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 5400,
        "hasNote": false
      }
    ]
  },
  {
    "id": "bul-dog-angliyskiy",
    "breed": "Бульдог английский",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 5900,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4200,
        "hasNote": false
      }
    ]
  },
  {
    "id": "bul-ter-er",
    "breed": "Бультерьер",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 5500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3800,
        "hasNote": false
      }
    ]
  },
  {
    "id": "bul-mastif",
    "breed": "Бульмастиф",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 7200,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4900,
        "hasNote": false
      }
    ]
  },
  {
    "id": "vel-sh-ter-er",
    "breed": "Вельш терьер",
    "services": [
      {
        "name": "Комплекс с триммингом",
        "price": 5700,
        "hasNote": false
      },
      {
        "name": "Комплекс со стрижкой",
        "price": 4700,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3600,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2300,
        "hasNote": false
      }
    ]
  },
  {
    "id": "vel-sh-korgi-do-15-kg",
    "breed": "Вельш-корги (до 15 кг)",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 5000,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4000,
        "hasNote": true
      }
    ]
  },
  {
    "id": "vel-sh-korgi-ot-15-kg",
    "breed": "Вельш-корги (от 15 кг)",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 5500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4400,
        "hasNote": true
      }
    ]
  },
  {
    "id": "vengerskaya-vyzhla",
    "breed": "Венгерская выжла",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 5500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3900,
        "hasNote": false
      }
    ]
  },
  {
    "id": "vest-haylend-uayt-ter-er",
    "breed": "Вест-Хайленд-Уайт терьер",
    "services": [
      {
        "name": "Комплекс с триммингом",
        "price": 5900,
        "hasNote": false
      },
      {
        "name": "Комплекс со стрижкой",
        "price": 5000,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3900,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2500,
        "hasNote": false
      }
    ]
  },
  {
    "id": "vostochno-evropeyskaya-ovcharka-korotkosherstnaya",
    "breed": "Восточно-европейская овчарка короткошерстная",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 7900,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 5500,
        "hasNote": false
      }
    ]
  },
  {
    "id": "vostochno-evropeyskaya-ovcharka-dlinnosherstnaya",
    "breed": "Восточно-европейская овчарка длинношерстная",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 8900,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 6500,
        "hasNote": true
      }
    ]
  },
  {
    "id": "gavanskiy-bishon",
    "breed": "Гаванский бишон",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4600,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3900,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2200,
        "hasNote": false
      }
    ]
  },
  {
    "id": "greyhaund",
    "breed": "Грейхаунд",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 5900,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3800,
        "hasNote": false
      }
    ]
  },
  {
    "id": "dalmatin",
    "breed": "Далматин",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 5900,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3800,
        "hasNote": false
      }
    ]
  },
  {
    "id": "dendi-dinmont-ter-er",
    "breed": "Денди-динмонт-терьер",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3600,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 1800,
        "hasNote": false
      }
    ]
  },
  {
    "id": "dzhek-rassel-ter-er-gladkosherstnyy",
    "breed": "Джек-рассел-терьер гладкошерстный",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 4600,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3000,
        "hasNote": false
      }
    ]
  },
  {
    "id": "dzhek-rassel-ter-er-broken",
    "breed": "Джек-рассел-терьер брокен",
    "services": [
      {
        "name": "Комплекс с триммингом",
        "price": 5500,
        "hasNote": false
      },
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 4600,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3000,
        "hasNote": false
      }
    ]
  },
  {
    "id": "dzhek-rassel-ter-er-zhestkosherstnyy",
    "breed": "Джек-рассел-терьер жесткошерстный",
    "services": [
      {
        "name": "Комплекс с триммингом",
        "price": 5100,
        "hasNote": false
      },
      {
        "name": "Комплекс со стрижкой",
        "price": 4600,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3200,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2000,
        "hasNote": false
      }
    ]
  },
  {
    "id": "doberman",
    "breed": "Доберман",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 6400,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4500,
        "hasNote": false
      }
    ]
  },
  {
    "id": "nemeckiy-dog-datskiy",
    "breed": "Немецкий дог (Датский)",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 7700,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4900,
        "hasNote": false
      }
    ]
  },
  {
    "id": "ispanskaya-vodyanaya",
    "breed": "Испанская водяная",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 5900,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4900,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 3900,
        "hasNote": false
      }
    ]
  },
  {
    "id": "portugal-skaya-vodyanaya",
    "breed": "Португальская водяная",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 6300,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 5300,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 4300,
        "hasNote": false
      }
    ]
  },
  {
    "id": "lagotto-roman-olo",
    "breed": "Лаготто-романьоло",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 5500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4500,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 3500,
        "hasNote": false
      }
    ]
  },
  {
    "id": "irlandskiy-volkodav",
    "breed": "Ирландский волкодав",
    "services": [
      {
        "name": "Комплекс с триммингом",
        "price": 10700,
        "hasNote": false
      },
      {
        "name": "Комплекс со стрижкой",
        "price": 6500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 5200,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 4100,
        "hasNote": false
      }
    ]
  },
  {
    "id": "irlandskiy-ter-er",
    "breed": "Ирландский терьер",
    "services": [
      {
        "name": "Комплекс с триммингом",
        "price": 6200,
        "hasNote": false
      },
      {
        "name": "Комплекс со стрижкой",
        "price": 5200,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3800,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2700,
        "hasNote": false
      }
    ]
  },
  {
    "id": "yorkshirskiy-ter-er-do-5-kg",
    "breed": "Йоркширский терьер до 5 кг",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3600,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 1800,
        "hasNote": false
      }
    ]
  },
  {
    "id": "yorkshirskiy-ter-er-ot-5-kg",
    "breed": "Йоркширский терьер от 5 кг",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4700,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3800,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2000,
        "hasNote": false
      }
    ]
  },
  {
    "id": "kavkazskaya-ovcharka",
    "breed": "Кавказская овчарка",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 14500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 8900,
        "hasNote": true
      }
    ]
  },
  {
    "id": "kavapu-do-5kg",
    "breed": "Кавапу до 5кг",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4800,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3900,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2300,
        "hasNote": false
      }
    ]
  },
  {
    "id": "kavapu-ot-5kg",
    "breed": "Кавапу от 5кг",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 5000,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4100,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2500,
        "hasNote": false
      }
    ]
  },
  {
    "id": "kavashon-do-7-kg",
    "breed": "Кавашон до 7 кг",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 5200,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4100,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2500,
        "hasNote": false
      }
    ]
  },
  {
    "id": "kavashon-ot-7-kg",
    "breed": "Кавашон от 7 кг",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 5500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4300,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 3000,
        "hasNote": false
      }
    ]
  },
  {
    "id": "ka-de-bo-mayorkskiy-mastif",
    "breed": "Ка-де-бо (Майоркский Мастиф)",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 6500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4500,
        "hasNote": false
      }
    ]
  },
  {
    "id": "kane-korso",
    "breed": "Кане-корсо",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 6900,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4700,
        "hasNote": false
      }
    ]
  },
  {
    "id": "kerri-blyu-ter-er",
    "breed": "Керри-блю терьер",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 5800,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4600,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2900,
        "hasNote": false
      }
    ]
  },
  {
    "id": "kern-ter-er",
    "breed": "Керн терьер",
    "services": [
      {
        "name": "Комплекс с триммингом",
        "price": 6100,
        "hasNote": false
      },
      {
        "name": "Комплекс со стрижкой",
        "price": 4200,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3600,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2300,
        "hasNote": false
      }
    ]
  },
  {
    "id": "kitayskaya-hohlataya-golaya",
    "breed": "Китайская хохлатая голая",
    "services": [
      {
        "name": "Комплекс с гигиеной",
        "price": 3500,
        "hasNote": false
      }
    ]
  },
  {
    "id": "kitayskaya-hohlataya-puhovaya-do-5kg",
    "breed": "Китайская хохлатая пуховая до 5кг",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3600,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 1900,
        "hasNote": false
      }
    ]
  },
  {
    "id": "kitayskaya-hohlataya-puhovaya-ot-5kg",
    "breed": "Китайская хохлатая пуховая от 5кг",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4900,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4000,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2300,
        "hasNote": false
      }
    ]
  },
  {
    "id": "kolli-gladkosherstnaya",
    "breed": "Колли гладкошерстная",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 5500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4000,
        "hasNote": false
      }
    ]
  },
  {
    "id": "kolli-dlinnosherstnaya",
    "breed": "Колли длинношерстная",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 7200,
        "hasNote": false
      },
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 6200,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4400,
        "hasNote": true
      }
    ]
  },
  {
    "id": "koton-de-tulear-do-5-kg",
    "breed": "Котон-де-тулеар до 5 кг",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4800,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3900,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2000,
        "hasNote": false
      }
    ]
  },
  {
    "id": "koton-de-tulear-ot-5-kg",
    "breed": "Котон-де-тулеар от 5 кг",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 5000,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4100,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2200,
        "hasNote": false
      }
    ]
  },
  {
    "id": "kurchaar",
    "breed": "Курцхаар",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 5600,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3800,
        "hasNote": false
      }
    ]
  },
  {
    "id": "labrador",
    "breed": "Лабрадор",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 7500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 5400,
        "hasNote": false
      }
    ]
  },
  {
    "id": "labradudl-do-45-sm-v-holke",
    "breed": "Лабрадудль до 45 см в холке",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 6000,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 5000,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 3600,
        "hasNote": false
      }
    ]
  },
  {
    "id": "labradudl-ot-45-sm-v-holke",
    "breed": "Лабрадудль от 45 см в холке",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 6700,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 5500,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 4100,
        "hasNote": false
      }
    ]
  },
  {
    "id": "layka-do-15-kg",
    "breed": "Лайка до 15 кг",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 5500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4000,
        "hasNote": true
      }
    ]
  },
  {
    "id": "layka-ot-15-kg",
    "breed": "Лайка от 15 кг",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 6200,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4400,
        "hasNote": true
      }
    ]
  },
  {
    "id": "landsir",
    "breed": "Ландсир",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 9200,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 6800,
        "hasNote": true
      }
    ]
  },
  {
    "id": "levretka",
    "breed": "Левретка",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 4200,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 2800,
        "hasNote": false
      }
    ]
  },
  {
    "id": "leonberger",
    "breed": "Леонбергер",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 14500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 8900,
        "hasNote": true
      }
    ]
  },
  {
    "id": "lhasskiy-apso-lhasa-apso",
    "breed": "Лхасский апсо (Лхаса апсо)",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4800,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4000,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2600,
        "hasNote": false
      }
    ]
  },
  {
    "id": "mal-tiyskaya-bolonka-mal-teze-do-5-kg",
    "breed": "Мальтийская болонка (Мальтезе) до 5 кг",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4400,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3500,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2000,
        "hasNote": false
      }
    ]
  },
  {
    "id": "mal-tiyskaya-bolonka-mal-teze-ot-5-kg",
    "breed": "Мальтийская болонка (Мальтезе) от 5 кг",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4600,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3700,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2200,
        "hasNote": false
      }
    ]
  },
  {
    "id": "mal-tipu-do-5-kg",
    "breed": "Мальтипу до 5 кг",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4600,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3700,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2100,
        "hasNote": false
      }
    ]
  },
  {
    "id": "mal-tipu-ot-5-kg",
    "breed": "Мальтипу от 5 кг",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4800,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3900,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2300,
        "hasNote": false
      }
    ]
  },
  {
    "id": "metis-korotkosherstnyy-do-5-kg",
    "breed": "Метис короткошерстный до 5 кг",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 4000,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 2200,
        "hasNote": false
      }
    ]
  },
  {
    "id": "metis-dlinnosherstnyy-do-5-kg",
    "breed": "Метис длинношерстный до 5 кг",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4500,
        "hasNote": false
      },
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 4200,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 2400,
        "hasNote": true
      }
    ]
  },
  {
    "id": "metis-korotkosherstnyy-ot-5-do-10-kg",
    "breed": "Метис короткошерстный от 5 до 10 кг",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 4400,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 2500,
        "hasNote": false
      }
    ]
  },
  {
    "id": "metis-dlinnosherstnyy-ot-5-do-10-kg",
    "breed": "Метис длинношерстный от 5 до 10 кг",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4700,
        "hasNote": false
      },
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 4400,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 2600,
        "hasNote": true
      }
    ]
  },
  {
    "id": "metis-korotkosherstnyy-ot-10-do-20-kg",
    "breed": "Метис короткошерстный от 10 до 20 кг",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 4900,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3000,
        "hasNote": false
      }
    ]
  },
  {
    "id": "metis-dlinnosherstnyy-ot-10-do-20-kg",
    "breed": "Метис длинношерстный от 10 до 20 кг",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 5300,
        "hasNote": false
      },
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 4900,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3200,
        "hasNote": true
      }
    ]
  },
  {
    "id": "metis-korotkosherstnyy-ot-20-do-40-kg",
    "breed": "Метис короткошерстный от 20 до 40 кг",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 5500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3600,
        "hasNote": false
      }
    ]
  },
  {
    "id": "metis-dlinnosherstnyy-ot-20-do-40-kg",
    "breed": "Метис длинношерстный от 20 до 40 кг",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 6500,
        "hasNote": false
      },
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 5900,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3700,
        "hasNote": true
      }
    ]
  },
  {
    "id": "metis-korotkosherstnyy-ot-40-kg",
    "breed": "Метис короткошерстный от 40 кг",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 6200,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4200,
        "hasNote": false
      }
    ]
  },
  {
    "id": "metis-dlinnosherstnyy-ot-40-kg",
    "breed": "Метис длинношерстный от 40 кг",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 7600,
        "hasNote": false
      },
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 6400,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4500,
        "hasNote": true
      }
    ]
  },
  {
    "id": "mops",
    "breed": "Мопс",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 4600,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 2600,
        "hasNote": false
      }
    ]
  },
  {
    "id": "papiy-on-papil-on",
    "breed": "Папийьон (Папильон)",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4600,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4100,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2300,
        "hasNote": true
      }
    ]
  },
  {
    "id": "pomski-do-8-kg",
    "breed": "Помски до 8 кг",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 5000,
        "hasNote": false
      },
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 4700,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 2900,
        "hasNote": true
      }
    ]
  },
  {
    "id": "pomski-ot-8-kg",
    "breed": "Помски от 8 кг",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 5300,
        "hasNote": false
      },
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 5000,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3200,
        "hasNote": true
      }
    ]
  },
  {
    "id": "pudel-korolevskiy-ot-45-sm",
    "breed": "Пудель королевский от 45 см",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 6500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 5500,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 3700,
        "hasNote": false
      }
    ]
  },
  {
    "id": "pudel-malyy-sredniy-ot-36-do-45-sm",
    "breed": "Пудель малый (средний) от 36 до 45 см",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 5500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4600,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 3200,
        "hasNote": false
      }
    ]
  },
  {
    "id": "pudel-karlikovyy-ot-28-do-36-sm",
    "breed": "Пудель карликовый от 28 до 36 см",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 5000,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4100,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2500,
        "hasNote": false
      }
    ]
  },
  {
    "id": "pudel-toy-do-28-sm",
    "breed": "Пудель той до 28 см",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4600,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3700,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2200,
        "hasNote": false
      }
    ]
  },
  {
    "id": "samoed",
    "breed": "Самоед",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 8000,
        "hasNote": false
      },
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 7200,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 5600,
        "hasNote": true
      }
    ]
  },
  {
    "id": "sibirskiy-haski",
    "breed": "Сибирский хаски",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 6500,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3900,
        "hasNote": true
      }
    ]
  },
  {
    "id": "siba-inu-shiba-inu",
    "breed": "Сиба Ину (Шиба Ину)",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 4900,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3400,
        "hasNote": true
      }
    ]
  },
  {
    "id": "francuzskiy-bul-dog",
    "breed": "Французский бульдог",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 4600,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 2500,
        "hasNote": false
      }
    ]
  },
  {
    "id": "cvergshnaucer",
    "breed": "Цвергшнауцер",
    "services": [
      {
        "name": "Комплекс с триммингом",
        "price": 5900,
        "hasNote": false
      },
      {
        "name": "Комплекс со стрижкой",
        "price": 5000,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3700,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2400,
        "hasNote": false
      }
    ]
  },
  {
    "id": "chi-hua-hua-gladkosherstnaya",
    "breed": "Чи-хуа-хуа гладкошерстная",
    "services": [
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 4000,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 2500,
        "hasNote": false
      }
    ]
  },
  {
    "id": "chi-hua-hua-dlinnosherstnaya",
    "breed": "Чи-хуа-хуа длинношерстная",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4200,
        "hasNote": false
      },
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 4000,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 2800,
        "hasNote": false
      }
    ]
  },
  {
    "id": "shi-tcu",
    "breed": "Ши-тцу",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4600,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3800,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2400,
        "hasNote": false
      }
    ]
  },
  {
    "id": "shpic-do-24-sm",
    "breed": "Шпиц до 24 см",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4700,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 3900,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2000,
        "hasNote": false
      }
    ]
  },
  {
    "id": "shpic-ot-24-do-30-sm",
    "breed": "Шпиц от 24 до 30 см",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 4900,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4100,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2200,
        "hasNote": false
      }
    ]
  },
  {
    "id": "shpic-ot-30-do-38-sm",
    "breed": "Шпиц от 30 до 38 см",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 5300,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4400,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2500,
        "hasNote": false
      }
    ]
  },
  {
    "id": "shpic-ot-38-sm",
    "breed": "Шпиц от 38 см",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 5800,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4900,
        "hasNote": false
      },
      {
        "name": "Мытье и сушка",
        "price": 2900,
        "hasNote": false
      }
    ]
  },
  {
    "id": "vol-fshpic-keeshond",
    "breed": "Вольфшпиц (Кеесхонд)",
    "services": [
      {
        "name": "Комплекс со стрижкой",
        "price": 7900,
        "hasNote": false
      },
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 6900,
        "hasNote": false
      },
      {
        "name": "Комплекс с гигиеной",
        "price": 4200,
        "hasNote": true
      }
    ]
  }
] as const;

export const catPriceGroups = [
  {
    "id": "koshki-do-5-kg",
    "breed": "Кошки до 5 кг",
    "services": [
      {
        "name": "Стрижка машинкой 2 мм",
        "price": 3500,
        "hasNote": false
      },
      {
        "name": "Стрижка машинкой 2 мм + мытье и сушка",
        "price": 4500,
        "hasNote": false
      },
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 4500,
        "hasNote": false
      }
    ]
  },
  {
    "id": "koshki-do-10-kg",
    "breed": "Кошки до 10 кг",
    "services": [
      {
        "name": "Стрижка машинкой 2 мм",
        "price": 4000,
        "hasNote": false
      },
      {
        "name": "Стрижка машинкой 2 мм + мытье и сушка",
        "price": 5000,
        "hasNote": false
      },
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 5000,
        "hasNote": false
      }
    ]
  },
  {
    "id": "koshki-ot-10-kg",
    "breed": "Кошки от 10 кг",
    "services": [
      {
        "name": "Стрижка машинкой 2 мм",
        "price": 4500,
        "hasNote": false
      },
      {
        "name": "Стрижка машинкой 2 мм + мытье и сушка",
        "price": 5500,
        "hasNote": false
      },
      {
        "name": "Комплекс с экспресс-линькой",
        "price": 5500,
        "hasNote": false
      }
    ]
  }
] as const;

export const additionalPriceItems = [
  {
    "id": "strizhka-kogtey-koshki-koshki",
    "name": "Стрижка когтей кошки",
    "category": "Кошки",
    "price": 500
  },
  {
    "id": "strizhka-kogtey-s-podpilivaniem-melkie-porody-do-8-kg",
    "name": "Стрижка когтей с подпиливанием",
    "category": "Мелкие породы до 8 кг",
    "price": 500
  },
  {
    "id": "strizhka-kogtey-s-podpilivaniem-srednie-ot-8-do-15-kg",
    "name": "Стрижка когтей с подпиливанием",
    "category": "Средние от 8 до 15 кг",
    "price": 600
  },
  {
    "id": "strizhka-kogtey-s-podpilivaniem-krupnye-ot-15-kg",
    "name": "Стрижка когтей с подпиливанием",
    "category": "Крупные от 15 кг",
    "price": 700
  },
  {
    "id": "chistka-zubov-schetka-pasta-melkie-porody-do-8-kg-koshki",
    "name": "Чистка зубов щетка+паста",
    "category": "Мелкие породы до 8 кг, кошки",
    "price": 500
  },
  {
    "id": "chistka-zubov-schetka-pasta-srednie-ot-8-do-15-kg",
    "name": "Чистка зубов щетка+паста",
    "category": "Средние от 8 до 15 кг",
    "price": 600
  },
  {
    "id": "chistka-zubov-schetka-pasta-krupnye-ot-15-kg",
    "name": "Чистка зубов щетка+паста",
    "category": "Крупные от 15 кг",
    "price": 700
  },
  {
    "id": "maska-po-tipu-shersti-melkie-porody-do-8-kg",
    "name": "Маска по типу шерсти",
    "category": "Мелкие породы до 8 кг",
    "price": 500
  },
  {
    "id": "maska-po-tipu-shersti-srednie-ot-8-do-15-kg",
    "name": "Маска по типу шерсти",
    "category": "Средние от 8 до 15 кг",
    "price": 600
  },
  {
    "id": "maska-po-tipu-shersti-krupnye-ot-15-kg",
    "name": "Маска по типу шерсти",
    "category": "Крупные от 15 кг",
    "price": 700
  },
  {
    "id": "vyches-koltunov-v-chas",
    "name": "Вычес колтунов",
    "category": "в час",
    "price": 1500
  },
  {
    "id": "strizhka-golovy-melkie-porody-do-8-kg",
    "name": "Стрижка головы",
    "category": "Мелкие породы до 8 кг",
    "price": 500
  },
  {
    "id": "strizhka-golovy-srednie-ot-8-do-15-kg",
    "name": "Стрижка головы",
    "category": "Средние от 8 до 15 кг",
    "price": 600
  },
  {
    "id": "strizhka-golovy-krupnye-ot-15-kg",
    "name": "Стрижка головы",
    "category": "Крупные от 15 кг",
    "price": 700
  },
  {
    "id": "nadbavka-za-shou-strizhku-melkie-porody-do-8-kg",
    "name": "Надбавка за шоу-стрижку",
    "category": "Мелкие породы до 8 кг",
    "price": 600
  },
  {
    "id": "nadbavka-za-shou-strizhku-srednie-ot-8-do-15-kg",
    "name": "Надбавка за шоу-стрижку",
    "category": "Средние от 8 до 15 кг",
    "price": 800
  },
  {
    "id": "nadbavka-za-shou-strizhku-krupnye-ot-15-kg",
    "name": "Надбавка за шоу-стрижку",
    "category": "Крупные от 15 кг",
    "price": 1000
  },
  {
    "id": "nadbavka-za-agressiyu-za-chas-procedur",
    "name": "Надбавка за агрессию",
    "category": "за час процедур",
    "price": 1000
  }
] as const;

export const serviceDescriptions = [
  {
    "name": "Комплекс с экспресс-линькой",
    "description": "Включает тщательный вычес, мытье, сушку, стрижку и подпил когтей, выщипывание шерсти из ушей (если положено по породе), выбривание подушек и паховой области (если положено по породе), чистку ушей"
  },
  {
    "name": "Комплекс со стрижкой",
    "description": "Включает мытье, сушку, стрижку и подпил когтей, выщипывание шерсти из ушей (если положено по породе), выбривание подушек и паховой области (если положено по породе), чистку ушей, стрижку по пожеланию хозяев"
  },
  {
    "name": "Комплекс с гигиеной",
    "description": "Включает мытье, сушку, стрижку и подпил когтей, чистку ушей, для длинношерстных пород выщипывание шерсти из ушей, окантовку лап, выбривание подушек и паховой области, снятие шерсти вокруг глаз."
  },
  {
    "name": "Комплекс с триммингом",
    "description": "Включает тримминг по породным линиям, мытье, сушку, стрижку и подпил когтей, выщипывание шерсти из ушей (если положено по породе), выбривание подушек и паховой области (если положено по породе), чистку ушей"
  },
  {
    "name": "Мытье и сушка",
    "description": "Включает мытье и сушку"
  }
] as const;

export const serviceNote = "* процедура возможна, если были у нас на экспресс-линьке менее 2 месяцев назад, в ином случае запись осуществляется на экспресс-линьку";

export const priceItems: PriceItem[] = dogPriceGroups.flatMap((group) =>
  group.services.map((service, index) => ({
    id: `${group.id}-${index}`,
    petType: "dog",
    breed: group.breed,
    serviceCategory: service.name,
    serviceName: service.name,
    priceFrom: service.price,
    notes: service.hasNote ? serviceNote : undefined
  }))
);
