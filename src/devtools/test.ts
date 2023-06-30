/*
 * Copyright 2023 pyamsoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { TEST_PARSE_DINING_JSON } from "./FoodParser";

const json = `{
  "results": [
    {
      "id": "354084;entityType=restaurant",
      "urlFriendlyId": "award-wieners",
      "url": "/dining/disney-california-adventure/award-wieners/",
      "name": "Award Wieners",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "336981;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Award Weiners",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/award-weiners/award-weiners-00-sq.jpg?1673559987700",
          "alt": "Award Wieners, Best Wieners in a Supporting Role menu and sign for the Disneyland Resort hot dog restaurant",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/award-weiners/award-weiners-00-sq.jpg?1673559987700"
        },
        "finderStandardThumb": {
          "title": "na",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/award-weiners/award-weiners-00.jpg?1673559987700",
          "alt": "Award Wieners, Best Wieners in a Supporting Role menu and sign for the Disneyland Resort hot dog restaurant",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/award-weiners/award-weiners-00.jpg?1673559987700"
        },
        "mapBubbleThumbLarge": {
          "title": "Award Weiners",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/award-weiners/award-weiners-00-sq.jpg?1673559987700",
          "alt": "Award Wieners, Best Wieners in a Supporting Role menu and sign for the Disneyland Resort hot dog restaurant",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/award-weiners/award-weiners-00-sq.jpg?1673559987700"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "pixar-themed-food"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "tableService": [
          "dinner"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "354084",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service, Table Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "354084;entityType=restaurant",
          "name": "Award Wieners",
          "urlFriendlyId": "award-wieners",
          "url": "/dining/disney-california-adventure/award-wieners/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/award-weiners/award-weiners-00-sq.jpg?1673559987700",
            "alt": "Award Wieners, Best Wieners in a Supporting Role menu and sign for the Disneyland Resort hot dog restaurant"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.807735,
        "lng": -117.918127,
        "name": "Award Wieners",
        "id": "354084;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354447;entityType=restaurant",
      "urlFriendlyId": "ritas-baja-blenders",
      "url": "/dining/disney-california-adventure/ritas-baja-blenders/",
      "name": "Rita's Baja Blenders",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "336977;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "Rita's Baja Blenders",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/ritas-baja-blenders/ritas-baja-blenders-00.jpg?1673561777242",
          "alt": "Sign for Rita's Baja Blenders, an outdoor Mexican margarita stand at Disney California Adventure park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/ritas-baja-blenders/ritas-baja-blenders-00.jpg?1673561777242"
        },
        "mapBubbleThumbLarge": {
          "title": "Rita's Baja Blenders",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/ritas-baja-blenders/ritas-baja-blenders-00.jpg?1673561777243",
          "alt": "Sign for Rita's Baja Blenders, an outdoor Mexican margarita stand at Disney California Adventure park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/ritas-baja-blenders/ritas-baja-blenders-00.jpg?1673561777243"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "type": [
          "park-admission-required"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "19:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "354447",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "354447;entityType=restaurant",
          "name": "Rita's Baja Blenders",
          "urlFriendlyId": "ritas-baja-blenders",
          "url": "/dining/disney-california-adventure/ritas-baja-blenders/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/ritas-baja-blenders/ritas-baja-blenders-00.jpg?1673561777243",
            "alt": "Sign for Rita's Baja Blenders, an outdoor Mexican margarita stand at Disney California Adventure park"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.805751,
        "lng": -117.919986,
        "name": "Rita's Baja Blenders",
        "id": "354447;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "426608;entityType=restaurant",
      "urlFriendlyId": "tropical-imports",
      "url": "/dining/disneyland/tropical-imports/",
      "name": "Tropical Imports",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336941;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Tropical Imports",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/tropical-imports/tropical-imports-1x1.jpg?1673562091999",
          "alt": "A fruit stand with apples and oranges",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/tropical-imports/tropical-imports-1x1.jpg?1673562091999"
        },
        "finderStandardThumb": {
          "title": "Tropical Imports",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/tropical-imports/tropical-imports-16x9.jpg?1673562091998",
          "alt": "A fruit stand with apples and oranges",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/tropical-imports/tropical-imports-16x9.jpg?1673562091998"
        },
        "mapBubbleThumbLarge": {
          "title": "Tropical Imports",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/tropical-imports/tropical-imports-1x1.jpg?1673562091999",
          "alt": "A fruit stand with apples and oranges",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/tropical-imports/tropical-imports-1x1.jpg?1673562091999"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine",
          "healthy-selections-cuisine",
          "vegetarian-cuisine"
        ],
        "diningExperience": [
          "carts-kiosks"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "type": [
          "park-admission-required"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "00:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "426608",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "marker": {
        "card": {
          "id": "426608;entityType=restaurant",
          "name": "Tropical Imports",
          "urlFriendlyId": "tropical-imports",
          "url": "/dining/disneyland/tropical-imports/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/tropical-imports/tropical-imports-1x1.jpg?1673562091999",
            "alt": "A fruit stand with apples and oranges"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.811607,
        "lng": -117.920095,
        "name": "Tropical Imports",
        "id": "426608;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "19013078;entityType=restaurant",
      "urlFriendlyId": "lamplight-lounge",
      "url": "/dining/disney-california-adventure/lamplight-lounge/",
      "name": "Lamplight Lounge",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "19005291;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "A Guest sits in a rustic chair that is stylized with an illustration of Miguel from Coco playing guitar",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/lamplight-lounge-chair-1x1.jpg?1673561393085",
          "alt": "A Guest sits in a rustic chair that is stylized with an illustration of Miguel from Coco playing guitar",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/lamplight-lounge-chair-1x1.jpg?1673561393085"
        },
        "finderStandardThumb": {
          "title": "A Guest sits in a rustic chair that is stylized with an illustration of Miguel from Coco playing guitar",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/lamplight-lounge-chair-16x9.jpg?1673561393085",
          "alt": "A Guest sits in a rustic chair that is stylized with an illustration of Miguel from Coco playing guitar",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/lamplight-lounge-chair-16x9.jpg?1673561393085"
        },
        "mapBubbleThumbLarge": {
          "title": "A Guest sits in a rustic chair that is stylized with an illustration of Miguel from Coco playing guitar",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/lamplight-lounge-chair-1x1.jpg?1673561393084",
          "alt": "A Guest sits in a rustic chair that is stylized with an illustration of Miguel from Coco playing guitar",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/lamplight-lounge-chair-1x1.jpg?1673561393084"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "behaviorType": [
          "walkupWaitList"
        ],
        "checkAvailability": [
          "checkavailmodule"
        ],
        "cuisine": [
          "american-cuisine",
          "californian-cuisine",
          "healthy-selections-cuisine",
          "vegetarian-cuisine"
        ],
        "diningInterests": [
          "table-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "disneyFavorites": [
          "pixar-rec"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "otherDining": [
          "bars-and-lounges"
        ],
        "priceRange": [
          "$$"
        ],
        "specialEvent": [
          "food-and-wine"
        ],
        "tableService": [
          "special-unique-dining",
          "table-service",
          "reservations-accepted",
          "lunch-no-characters",
          "Dinner-no-characters"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "14:00:00",
            "endTime": "20:30:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/19012970",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/19012975",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/19295229"
      ],
      "locationName": "Disney California Adventure Park",
      "facilityId": "19013078",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Bars & Lounges, Reservations Accepted"
      },
      "marker": {
        "card": {
          "id": "19013078;entityType=restaurant",
          "name": "Lamplight Lounge",
          "urlFriendlyId": "lamplight-lounge",
          "url": "/dining/disney-california-adventure/lamplight-lounge/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/lamplight-lounge-chair-1x1.jpg?1673561393084",
            "alt": "A Guest sits in a rustic chair that is stylized with an illustration of Miguel from Coco playing guitar"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8053994053,
        "lng": -117.9209410699,
        "name": "Lamplight Lounge",
        "id": "19013078;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "18584293;entityType=restaurant",
      "urlFriendlyId": "kaylas-cake",
      "url": "/dining/downtown-disney-district/kaylas-cake/",
      "name": "Kayla's Cake",
      "parkIds": [
        "336978;entityType=Entertainment-Venue"
      ],
      "media": {
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/downtown-disney/Kayla-s-HERO-image-16x9.jpg?2022-05-12T13:29:25+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/downtown-disney/Kayla-s-HERO-image-16x9.jpg?2022-05-12T13:29:25+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/downtown-disney/Kayla-s-HERO-image-1x1.jpg?2022-05-12T13:29:25+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/downtown-disney/Kayla-s-HERO-image-1x1.jpg?2022-05-12T13:29:25+00:00"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "quickService": [
          "quick-service"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "10:00:00",
            "endTime": "00:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Downtown Disney District",
      "facilityId": "18584293",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "18584293;entityType=restaurant",
          "name": "Kayla's Cake",
          "urlFriendlyId": "kaylas-cake",
          "url": "/dining/downtown-disney-district/kaylas-cake/",
          "land": "Downtown Disney District",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/downtown-disney/Kayla-s-HERO-image-1x1.jpg?2022-05-12T13:29:25+00:00",
            "alt": ""
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.808727,
        "lng": -117.921589,
        "name": "Kayla's Cake",
        "id": "18584293;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354435;entityType=restaurant",
      "urlFriendlyId": "jazz-kitchen-coastal-grill-patio",
      "url": "/dining/downtown-disney-district/jazz-kitchen-coastal-grill-patio/",
      "name": "Jazz Kitchen Coastal Grill & Patio",
      "parkIds": [
        "336978;entityType=Entertainment-Venue"
      ],
      "media": {
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/coastal-grill-and-patio/CrawfishWraps-H-16x9.jpg?2023-04-19T07:22:20+00:00",
          "alt": "Fried crawfish lettuce wraps on a white tablecloth",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/coastal-grill-and-patio/CrawfishWraps-H-16x9.jpg?2023-04-19T07:22:20+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/coastal-grill-and-patio/CrawfishWraps-H-1x1.jpg?2023-04-19T07:22:20+00:00",
          "alt": "Fried crawfish lettuce wraps on a white tablecloth",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/coastal-grill-and-patio/CrawfishWraps-H-1x1.jpg?2023-04-19T07:22:20+00:00"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "checkAvailability": [
          "checkavailmodule"
        ],
        "cuisine": [
          "cajun-creole-cuisine"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "guestRating": [
          "four-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "otherDining": [
          "bars-and-lounges"
        ],
        "priceRange": [
          "$$"
        ],
        "tableService": [
          "special-unique-dining",
          "table-service",
          "reservations-accepted",
          "lunch",
          "dinner"
        ],
        "validDays": [
          "mon-fri-jazz-kitchen-up-to-50-excludes-alcohol-tax-tip"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "22:30:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "341613",
        "reviewCount": 1754
      },
      "guestRating": 4,
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/369737",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/369738"
      ],
      "locationName": "Downtown Disney District",
      "facilityId": "354435",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Bars & Lounges, Reservations Accepted"
      },
      "marker": {
        "card": {
          "id": "354435;entityType=restaurant",
          "name": "Jazz Kitchen Coastal Grill & Patio",
          "urlFriendlyId": "jazz-kitchen-coastal-grill-patio",
          "url": "/dining/downtown-disney-district/jazz-kitchen-coastal-grill-patio/",
          "land": "Downtown Disney District",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/coastal-grill-and-patio/CrawfishWraps-H-1x1.jpg?2023-04-19T07:22:20+00:00",
            "alt": "Fried crawfish lettuce wraps on a white tablecloth"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8090491312,
        "lng": -117.9235986239,
        "name": "Jazz Kitchen Coastal Grill & Patio",
        "id": "354435;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354369;entityType=restaurant",
      "urlFriendlyId": "mint-julep-bar",
      "url": "/dining/disneyland/mint-julep-bar/",
      "name": "Mint Julep Bar",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336946;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "na",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/mint-julep-bar/mint-julep-bar-00-sq.jpg?1673561471837",
          "alt": "Sign for Mint Julep Bar, French Quarter dining location in Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/mint-julep-bar/mint-julep-bar-00-sq.jpg?1673561471837"
        },
        "finderStandardThumb": {
          "title": "na",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/mint-julep-bar/mint-julep-bar-00.jpg?1673561471837",
          "alt": "Sign for Mint Julep Bar, French Quarter dining location in Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/mint-julep-bar/mint-julep-bar-00.jpg?1673561471837"
        },
        "mapBubbleThumbLarge": {
          "title": "na",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/mint-julep-bar/mint-julep-bar-00-sq.jpg?1673561471837",
          "alt": "Sign for Mint Julep Bar, French Quarter dining location in Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/mint-julep-bar/mint-julep-bar-00-sq.jpg?1673561471837"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningInterests": [
          "character-dining-rec",
          "quick-service-rec"
        ],
        "disneyFavorites": [
          "star-wars-rec"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Refurbishment",
            "startTime": "00:00:00",
            "endTime": "23:59:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": true
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "354369",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "closedForRefurbishment": "Closed for Refurbishment",
      "marker": {
        "card": {
          "id": "354369;entityType=restaurant",
          "name": "Mint Julep Bar",
          "urlFriendlyId": "mint-julep-bar",
          "url": "/dining/disneyland/mint-julep-bar/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/mint-julep-bar/mint-julep-bar-00-sq.jpg?1673561471837",
            "alt": "Sign for Mint Julep Bar, French Quarter dining location in Disneyland Park"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.811176,
        "lng": -117.921656,
        "name": "Mint Julep Bar",
        "id": "354369;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354129;entityType=restaurant",
      "urlFriendlyId": "carnation-cafe",
      "url": "/dining/disneyland/carnation-cafe/",
      "name": "Carnation Cafe",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336938;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Carnation Cafe",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/carnation-cafe/sourdough-patty-melt-1x1.jpg?1673558579003",
          "alt": "A plated serving of the sourdough bacon cheese melt with French fries from Carnation Cafe",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/carnation-cafe/sourdough-patty-melt-1x1.jpg?1673558579003"
        },
        "finderStandardThumb": {
          "title": "Carnation Cafe",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/carnation-cafe/sourdough-patty-melt-16x9.jpg?1673558579002",
          "alt": "A plated serving of the sourdough bacon cheese melt with French fries from Carnation Cafe",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/carnation-cafe/sourdough-patty-melt-16x9.jpg?1673558579002"
        },
        "mapBubbleThumbLarge": {
          "title": "Carnation Cafe",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/carnation-cafe/sourdough-patty-melt-1x1.jpg?1673558579002",
          "alt": "A plated serving of the sourdough bacon cheese melt with French fries from Carnation Cafe",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/carnation-cafe/sourdough-patty-melt-1x1.jpg?1673558579002"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "behaviorType": [
          "walkupWaitList"
        ],
        "checkAvailability": [
          "checkavailmodule"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "pixar-themed-food"
        ],
        "diningInterests": [
          "table-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "guestRating": [
          "four-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$",
          "$$"
        ],
        "reservationOfferings": [
          "add-ons-available"
        ],
        "tableService": [
          "table-service",
          "reservations-accepted",
          "breakfast",
          "lunch",
          "dinner"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "21:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "1099731",
        "reviewCount": 798
      },
      "guestRating": 4,
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/356910",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/368555",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/368556"
      ],
      "locationName": "Disneyland Park",
      "facilityId": "354129",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Breakfast, Reservations Accepted"
      },
      "marker": {
        "card": {
          "id": "354129;entityType=restaurant",
          "name": "Carnation Cafe",
          "urlFriendlyId": "carnation-cafe",
          "url": "/dining/disneyland/carnation-cafe/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/carnation-cafe/sourdough-patty-melt-1x1.jpg?1673558579002",
            "alt": "A plated serving of the sourdough bacon cheese melt with French fries from Carnation Cafe"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8110402999,
        "lng": -117.9190407415,
        "name": "Carnation Cafe",
        "id": "354129;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354117;entityType=restaurant",
      "urlFriendlyId": "cafe-orleans",
      "url": "/dining/disneyland/cafe-orleans/",
      "name": "Cafe Orleans",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336946;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Roasted chicken with grilled vegetables and a delicious sauce.",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/cafe-orleans/DLR_DLP_CafeOrleans_RoastedHalfChicken_08172021_DSC09754DN-1x1.jpg?2022-01-28T18:42:07+00:00",
          "alt": "Roasted chicken with grilled vegetables and a delicious sauce.",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/cafe-orleans/DLR_DLP_CafeOrleans_RoastedHalfChicken_08172021_DSC09754DN-1x1.jpg?2022-01-28T18:42:07+00:00"
        },
        "finderStandardThumb": {
          "title": "Roasted chicken with grilled vegetables and a delicious sauce.",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/cafe-orleans/DLR_DLP_CafeOrleans_RoastedHalfChicken_08172021_DSC09754DN-16x9.jpg?2022-01-28T18:42:07+00:00",
          "alt": "Roasted chicken with grilled vegetables and a delicious sauce.",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/cafe-orleans/DLR_DLP_CafeOrleans_RoastedHalfChicken_08172021_DSC09754DN-16x9.jpg?2022-01-28T18:42:07+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "Roasted chicken with grilled vegetables and a delicious sauce.",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/cafe-orleans/DLR_DLP_CafeOrleans_RoastedHalfChicken_08172021_DSC09754DN-1x1.jpg?2022-01-28T18:42:07+00:00",
          "alt": "Roasted chicken with grilled vegetables and a delicious sauce.",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/cafe-orleans/DLR_DLP_CafeOrleans_RoastedHalfChicken_08172021_DSC09754DN-1x1.jpg?2022-01-28T18:42:07+00:00"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "behaviorType": [
          "walkupWaitList"
        ],
        "checkAvailability": [
          "checkavailmodule"
        ],
        "cuisine": [
          "cajun-creole-cuisine"
        ],
        "diningExperience": [
          "pixar-themed-food"
        ],
        "diningInterests": [
          "table-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "guestRating": [
          "four-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$$"
        ],
        "reservationOfferings": [
          "add-ons-available"
        ],
        "tableService": [
          "casual-dining",
          "table-service",
          "reservations-accepted",
          "lunch",
          "dinner"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:30:00",
            "endTime": "20:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "2220024",
        "reviewCount": 906
      },
      "guestRating": 4,
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/356898",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/368530"
      ],
      "locationName": "Disneyland Park",
      "facilityId": "354117",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Casual Dining, Reservations Accepted"
      },
      "marker": {
        "card": {
          "id": "354117;entityType=restaurant",
          "name": "Cafe Orleans",
          "urlFriendlyId": "cafe-orleans",
          "url": "/dining/disneyland/cafe-orleans/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/cafe-orleans/DLR_DLP_CafeOrleans_RoastedHalfChicken_08172021_DSC09754DN-1x1.jpg?2022-01-28T18:42:07+00:00",
            "alt": "Roasted chicken with grilled vegetables and a delicious sauce."
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.811205,
        "lng": -117.921262,
        "name": "Cafe Orleans",
        "id": "354117;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "18516129;entityType=restaurant",
      "urlFriendlyId": "churros",
      "url": "/dining/churros/",
      "name": "Churro Carts",
      "parkIds": [
        "336894;entityType=theme-park",
        "330339;entityType=theme-park"
      ],
      "landId": "m",
      "media": {
        "finderStandardThumb": {
          "title": "churros",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/churros_cart-00.jpg?1673559361682",
          "alt": "A stack of churros",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/churros_cart-00.jpg?1673559361682"
        },
        "mapBubbleThumbLarge": {
          "title": "churros",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/churros_cart-00-sq.jpg?1673559361683",
          "alt": "A stack of churros",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/churros_cart-00-sq.jpg?1673559361683"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "carts-kiosks",
          "pixar-themed-food"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "locationName": "Multiple Locations",
      "locationsList": {
        "330339;entityType=theme-park": "Disneyland Park",
        "336894;entityType=theme-park": "Disney California Adventure Park"
      },
      "facilityId": "18516129",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "parkLocations": {
        "336894;entityType=theme-park": {
          "lat": 33.807763,
          "lng": -117.917844,
          "name": "Churros at Hollywood Land",
          "id": "19607522;entityType=point-of-interest",
          "closeButtonLabel": "finder.maps.closePopUpButtonText",
          "pin": "activities"
        },
        "330339;entityType=theme-park": {
          "lat": 33.81239074,
          "lng": -117.922499,
          "name": "Churros & Lemonade in Critter Country",
          "id": "18518217;entityType=point-of-interest",
          "closeButtonLabel": "finder.maps.closePopUpButtonText",
          "pin": "activities"
        }
      },
      "marker": {
        "card": {
          "id": "18516129;entityType=restaurant",
          "name": "Churro Carts",
          "urlFriendlyId": "churros",
          "url": "/dining/churros/",
          "land": "Churros near Goofy's Sky School",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/churros_cart-00-sq.jpg?1673559361683",
            "alt": "A stack of churros"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.80628161,
        "lng": -117.9226079,
        "name": "Churros near Goofy's Sky School",
        "id": "18518186;entityType=point-of-interest",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "16356966;entityType=restaurant",
      "urlFriendlyId": "taqueria-tortilla-jos",
      "url": "/dining/downtown-disney-district/taqueria-tortilla-jos/",
      "name": "Taqueria at Tortilla Jo's",
      "parkIds": [
        "336978;entityType=Entertainment-Venue"
      ],
      "media": {
        "finderStandardThumb": {
          "title": "Taqueria Torttila Jos",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/taqueria/taqueria-00.jpg?1583971866258",
          "alt": "Sign for Tortilla Jo's Taqueria at Downtown Disney District",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/taqueria/taqueria-00.jpg?1583971866258"
        },
        "mapBubbleThumbLarge": {
          "title": "Taqueria Torttila Jos",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/taqueria/taqueria-00-sq.jpg?1583971866258",
          "alt": "Sign for Tortilla Jo's Taqueria at Downtown Disney District",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/taqueria/taqueria-00-sq.jpg?1583971866258"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "mexican-cuisine"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "tableService": [
          "breakfast"
        ],
        "validDays": [
          "every-day-no-alcohol-tax-tip"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "00:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/16357189",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/17421196"
      ],
      "locationName": "Downtown Disney District",
      "facilityId": "16356966",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service, Table Service",
      "type": {
        "facets": "Breakfast, Quick Service"
      },
      "marker": {
        "card": {
          "id": "16356966;entityType=restaurant",
          "name": "Taqueria at Tortilla Jo's",
          "urlFriendlyId": "taqueria-tortilla-jos",
          "url": "/dining/downtown-disney-district/taqueria-tortilla-jos/",
          "land": "Downtown Disney District",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/taqueria/taqueria-00-sq.jpg?1583971866258",
            "alt": "Sign for Tortilla Jo's Taqueria at Downtown Disney District"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.809265089,
        "lng": -117.9237513786,
        "name": "Taqueria at Tortilla Jo's",
        "id": "16356966;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "16363584;entityType=restaurant",
      "urlFriendlyId": "jolly-holiday-bakery-cafe",
      "url": "/dining/disneyland/jolly-holiday-bakery-cafe/",
      "name": "Jolly Holiday Bakery Cafe",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336938;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "Jolly Holiday Bakery Cafe",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/jolly-holiday-bakery-cafe/jolly-holiday-bakery-cafe-01.jpg?1673561358871",
          "alt": "Mickey shaped raspberry macaron on a plate",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/jolly-holiday-bakery-cafe/jolly-holiday-bakery-cafe-01.jpg?1673561358871"
        },
        "mapBubbleThumbLarge": {
          "title": "Jolly Holiday Bakery Cafe",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/jolly-holiday-bakery-cafe/jolly-holiday-bakery-cafe-01-sq.jpg?1673561358871",
          "alt": "Mickey shaped raspberry macaron on a plate",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/jolly-holiday-bakery-cafe/jolly-holiday-bakery-cafe-01-sq.jpg?1673561358871"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "bakery-cuisine-cuisine"
        ],
        "diningExperience": [
          "pixar-themed-food"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "00:15:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "16363584",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "16363584;entityType=restaurant",
          "name": "Jolly Holiday Bakery Cafe",
          "urlFriendlyId": "jolly-holiday-bakery-cafe",
          "url": "/dining/disneyland/jolly-holiday-bakery-cafe/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/jolly-holiday-bakery-cafe/jolly-holiday-bakery-cafe-01-sq.jpg?1673561358871",
            "alt": "Mickey shaped raspberry macaron on a plate"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8117051187,
        "lng": -117.9193308949,
        "name": "Jolly Holiday Bakery Cafe",
        "id": "16363584;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "16514114;entityType=restaurant",
      "urlFriendlyId": "cozy-cone-motel",
      "url": "/dining/disney-california-adventure/cozy-cone-motel/",
      "name": "Cozy Cone Motel",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "16505425;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Cozy Cone Motel",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/cozy-cone-motel/cozy-cone-motel-00-sq.jpg?1673558779545",
          "alt": "A row of oversize construction cones make up Cozy Cone Motel snack stands in Cars Land",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/cozy-cone-motel/cozy-cone-motel-00-sq.jpg?1673558779545"
        },
        "finderStandardThumb": {
          "title": "Cozy Cone Motel",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/cozy-cone-motel/cozy-cone-motel-00.jpg?1673558779545",
          "alt": "A row of oversize construction cones make up Cozy Cone Motel snack stands in Cars Land",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/cozy-cone-motel/cozy-cone-motel-00.jpg?1673558779545"
        },
        "mapBubbleThumbLarge": {
          "title": "Cozy Cone Motel",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/cozy-cone-motel/cozy-cone-motel-00-sq.jpg?1673558779545",
          "alt": "A row of oversize construction cones make up Cozy Cone Motel snack stands in Cars Land",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/cozy-cone-motel/cozy-cone-motel-00-sq.jpg?1673558779545"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "pixar-themed-food"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "disneyFavorites": [
          "pixar-rec"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "type": [
          "park-admission-required"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "09:00:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "16514114",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "16514114;entityType=restaurant",
          "name": "Cozy Cone Motel",
          "urlFriendlyId": "cozy-cone-motel",
          "url": "/dining/disney-california-adventure/cozy-cone-motel/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/cozy-cone-motel/cozy-cone-motel-00-sq.jpg?1673558779545",
            "alt": "A row of oversize construction cones make up Cozy Cone Motel snack stands in Cars Land"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8059658542,
        "lng": -117.9186623791,
        "name": "Cozy Cone Motel",
        "id": "16514114;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354255;entityType=restaurant",
      "urlFriendlyId": "gibson-girl-ice-cream-parlor",
      "url": "/dining/disneyland/gibson-girl-ice-cream-parlor/",
      "name": "Gibson Girl Ice Cream Parlor",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336938;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "Gibson Girl Ice Cream Parlor hosted by Dreyer's",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/gibson-girl-ice-cream-parlor/gibson-girl-ice-cream-parlor-00.jpg?1673561029836",
          "alt": "Ice cream sundaes sign at the Gibson Girl Ice Cream Parlor on Main Street, U.S.A. in Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/gibson-girl-ice-cream-parlor/gibson-girl-ice-cream-parlor-00.jpg?1673561029836"
        },
        "mapBubbleThumbLarge": {
          "title": "Gibson Girl Ice Cream Parlor hosted by Dreyer's",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/gibson-girl-ice-cream-parlor/gibson-girl-ice-cream-parlor-00-sq.jpg?1673561029836",
          "alt": "Neon sign for ice cream and sundaes at Gibson Girl Ice Cream Parlor hosted by Dreyer's",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/gibson-girl-ice-cream-parlor/gibson-girl-ice-cream-parlor-00-sq.jpg?1673561029836"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "pixar-themed-food"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "12:00:00",
            "endTime": "00:30:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "354255",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "354255;entityType=restaurant",
          "name": "Gibson Girl Ice Cream Parlor",
          "urlFriendlyId": "gibson-girl-ice-cream-parlor",
          "url": "/dining/disneyland/gibson-girl-ice-cream-parlor/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/gibson-girl-ice-cream-parlor/gibson-girl-ice-cream-parlor-00-sq.jpg?1673561029836",
            "alt": "Neon sign for ice cream and sundaes at Gibson Girl Ice Cream Parlor hosted by Dreyer's"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8111392429,
        "lng": -117.9190407415,
        "name": "Gibson Girl Ice Cream Parlor",
        "id": "354255;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "369650;entityType=restaurant",
      "urlFriendlyId": "private-dining",
      "url": "/dining/grand-californian-hotel/private-dining/",
      "name": "In-Room Dining at Disney’s Grand Californian Hotel & Spa",
      "parkIds": [
        "334222;entityType=resort"
      ],
      "media": {
        "mapBubbleThumbSmall": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/resorts/disneys-grand-californian-hotel-and-spa/guests/1261923380_0126ZY_0724JD-1x1.jpg?2021-12-21T20:13:51+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/resorts/disneys-grand-californian-hotel-and-spa/guests/1261923380_0126ZY_0724JD-1x1.jpg?2021-12-21T20:13:51+00:00"
        },
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/resorts/disneys-grand-californian-hotel-and-spa/guests/1261923380_0126ZY_0724JD-16x9.jpg?2021-12-21T20:13:51+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/resorts/disneys-grand-californian-hotel-and-spa/guests/1261923380_0126ZY_0724JD-16x9.jpg?2021-12-21T20:13:51+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/resorts/disneys-grand-californian-hotel-and-spa/guests/1261923380_0126ZY_0724JD-16x9.jpg?2021-12-21T20:13:51+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/resorts/disneys-grand-californian-hotel-and-spa/guests/1261923380_0126ZY_0724JD-16x9.jpg?2021-12-21T20:13:51+00:00"
        }
      },
      "facets": {
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "06:00:00",
            "endTime": "11:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          },
          {
            "type": "Operating",
            "startTime": "17:00:00",
            "endTime": "00:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "facilityId": "369650",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "marker": {
        "card": {
          "id": "369650;entityType=restaurant",
          "name": "In-Room Dining at Disney’s Grand Californian Hotel & Spa",
          "urlFriendlyId": "private-dining",
          "url": "/dining/grand-californian-hotel/private-dining/",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/resorts/disneys-grand-californian-hotel-and-spa/guests/1261923380_0126ZY_0724JD-16x9.jpg?2021-12-21T20:13:51+00:00",
            "alt": ""
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8076048604,
        "lng": -117.9225495458,
        "name": "In-Room Dining at Disney’s Grand Californian Hotel & Spa",
        "id": "369650;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354207;entityType=restaurant",
      "urlFriendlyId": "corn-dog-castle",
      "url": "/dining/disney-california-adventure/corn-dog-castle/",
      "name": "Corn Dog Castle",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "336973;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Corn Dog Castle",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/corn-dog-castle/corn-dog-castle-00-sq.jpg?1673560362895",
          "alt": "Sign for Corndog Castle, Where Corndogs Rule! at Disney California Adventure Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/corn-dog-castle/corn-dog-castle-00-sq.jpg?1673560362895"
        },
        "finderStandardThumb": {
          "title": "Corn Dog Castle",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/corn-dog-castle/corn-dog-castle-00.jpg?1673560362894",
          "alt": "Sign for Corndog Castle, Where Corndogs Rule! at Disney California Adventure Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/corn-dog-castle/corn-dog-castle-00.jpg?1673560362894"
        },
        "mapBubbleThumbLarge": {
          "title": "Corn Dog Castle",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/corn-dog-castle/corn-dog-castle-00-sq.jpg?1673560362894",
          "alt": "Sign for Corndog Castle, Where Corndogs Rule! at Disney California Adventure Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/corn-dog-castle/corn-dog-castle-00-sq.jpg?1673560362894"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "pixar-themed-food"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "tableService": [
          "breakfast"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:30:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "354207",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service, Table Service",
      "type": {
        "facets": "Breakfast, Mobile Orders"
      },
      "marker": {
        "card": {
          "id": "354207;entityType=restaurant",
          "name": "Corn Dog Castle",
          "urlFriendlyId": "corn-dog-castle",
          "url": "/dining/disney-california-adventure/corn-dog-castle/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/corn-dog-castle/corn-dog-castle-00-sq.jpg?1673560362894",
            "alt": "Sign for Corndog Castle, Where Corndogs Rule! at Disney California Adventure Park"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8063363272,
        "lng": -117.9224435985,
        "name": "Corn Dog Castle",
        "id": "354207;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "16588263;entityType=restaurant",
      "urlFriendlyId": "carthay-circle-lounge",
      "url": "/dining/disney-california-adventure/carthay-circle-lounge/",
      "name": "Carthay Circle Lounge - Alfresco Dining",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "16505397;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Lit up exterior image of Fiddler, Fifer and Practical Cafe.",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/disneyland/destinations/disney-california-adventure/buena-vista-street/buena-vista-carthay-circle-1x1.jpg?1673560095725",
          "alt": "Lit up exterior image of Fiddler, Fifer and Practical Cafe.",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/buena-vista-street/buena-vista-carthay-circle-1x1.jpg?1673560095725"
        },
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disney-california-adventure/buena-vista-street/buena-vista-carthay-circle-16x9.jpg?1673560095725",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/buena-vista-street/buena-vista-carthay-circle-16x9.jpg?1673560095725"
        },
        "mapBubbleThumbLarge": {
          "title": "Lit up exterior image of Fiddler, Fifer and Practical Cafe.",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disney-california-adventure/buena-vista-street/buena-vista-carthay-circle-1x1.jpg?1673560095725",
          "alt": "Lit up exterior image of Fiddler, Fifer and Practical Cafe.",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/buena-vista-street/buena-vista-carthay-circle-1x1.jpg?1673560095725"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "behaviorType": [
          "walkupWaitList"
        ],
        "checkAvailability": [
          "checkavailmodule"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "otherDining": [
          "bars-and-lounges"
        ],
        "priceRange": [
          "$",
          "$$"
        ],
        "tableService": [
          "table-service",
          "reservations-accepted"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "20:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/19601288",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/19602286"
      ],
      "locationName": "Disney California Adventure Park",
      "facilityId": "16588263",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Bars & Lounges, Reservations Accepted"
      },
      "marker": {
        "card": {
          "id": "16588263;entityType=restaurant",
          "name": "Carthay Circle Lounge - Alfresco Dining",
          "urlFriendlyId": "carthay-circle-lounge",
          "url": "/dining/disney-california-adventure/carthay-circle-lounge/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disney-california-adventure/buena-vista-street/buena-vista-carthay-circle-1x1.jpg?1673560095725",
            "alt": "Lit up exterior image of Fiddler, Fifer and Practical Cafe."
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.807494,
        "lng": -117.919021,
        "name": "Carthay Circle Lounge - Alfresco Dining",
        "id": "16588263;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "19028067;entityType=restaurant",
      "urlFriendlyId": "jack-jack-cookie-num-nums",
      "url": "/dining/disney-california-adventure/jack-jack-cookie-num-nums/",
      "name": "Jack-Jack Cookie Num Nums",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "19005291;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Large chocolate chip cookies on a plate",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/disneyland/dining/disney-california-adventure/jack-jack-cookie-num-nums/jack-jack-cookie-num-num-1x1.jpg?1673561263964",
          "alt": "Large chocolate chip cookies on a plate",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disney-california-adventure/jack-jack-cookie-num-nums/jack-jack-cookie-num-num-1x1.jpg?1673561263964"
        },
        "finderStandardThumb": {
          "title": "Large chocolate chip cookies on a plate",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/disney-california-adventure/jack-jack-cookie-num-nums/jack-jack-cookie-num-num-16x9.jpg?1673561263963",
          "alt": "Large chocolate chip cookies on a plate",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disney-california-adventure/jack-jack-cookie-num-nums/jack-jack-cookie-num-num-16x9.jpg?1673561263963"
        },
        "mapBubbleThumbLarge": {
          "title": "Large chocolate chip cookies on a plate",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/disney-california-adventure/jack-jack-cookie-num-nums/jack-jack-cookie-num-num-1x1.jpg?1673561263963",
          "alt": "Large chocolate chip cookies on a plate",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disney-california-adventure/jack-jack-cookie-num-nums/jack-jack-cookie-num-num-1x1.jpg?1673561263963"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "carts-kiosks"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "19028067",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "19028067;entityType=restaurant",
          "name": "Jack-Jack Cookie Num Nums",
          "urlFriendlyId": "jack-jack-cookie-num-nums",
          "url": "/dining/disney-california-adventure/jack-jack-cookie-num-nums/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/disney-california-adventure/jack-jack-cookie-num-nums/jack-jack-cookie-num-num-1x1.jpg?1673561263963",
            "alt": "Large chocolate chip cookies on a plate"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.804492,
        "lng": -117.92088,
        "name": "Jack-Jack Cookie Num Nums",
        "id": "19028067;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354390;entityType=restaurant",
      "urlFriendlyId": "pacific-wharf-cafe",
      "url": "/dining/disney-california-adventure/pacific-wharf-cafe/",
      "name": "Pacific Wharf Café",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "336977;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "pacific-wharf-cafe",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/pacific-wharf-cafe/pacific-wharf-cafe-00-sq.jpg?1673561495957",
          "alt": "Outdoor dining area at Pacific Wharf Cafe on Paradise Bay",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/pacific-wharf-cafe/pacific-wharf-cafe-00-sq.jpg?1673561495957"
        },
        "finderStandardThumb": {
          "title": "pacific-wharf-cafe",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/pacific-wharf-cafe/pacific-wharf-cafe-00.jpg?1673561495956",
          "alt": "Outdoor dining area at Pacific Wharf Cafe on Paradise Bay",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/pacific-wharf-cafe/pacific-wharf-cafe-00.jpg?1673561495956"
        },
        "mapBubbleThumbLarge": {
          "title": "pacific-wharf-cafe",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/pacific-wharf-cafe/pacific-wharf-cafe-00-sq.jpg?1673561495956",
          "alt": "Outdoor dining area at Pacific Wharf Cafe on Paradise Bay",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/pacific-wharf-cafe/pacific-wharf-cafe-00-sq.jpg?1673561495956"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine",
          "californian-cuisine"
        ],
        "diningExperience": [
          "pixar-themed-food"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "guestRating": [
          "four-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "specialEvent": [
          "disney-festival-of-holidays"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "10:30:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "1852516",
        "reviewCount": 348
      },
      "guestRating": 4.5,
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "354390",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "354390;entityType=restaurant",
          "name": "Pacific Wharf Café",
          "urlFriendlyId": "pacific-wharf-cafe",
          "url": "/dining/disney-california-adventure/pacific-wharf-cafe/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/pacific-wharf-cafe/pacific-wharf-cafe-00-sq.jpg?1673561495956",
            "alt": "Outdoor dining area at Pacific Wharf Cafe on Paradise Bay"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8058566014,
        "lng": -117.9200660233,
        "name": "Pacific Wharf Café",
        "id": "354390;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "19629820;entityType=restaurant",
      "urlFriendlyId": "lamplight-lounge-boardwalk-dining",
      "url": "/dining/disney-california-adventure/lamplight-lounge-boardwalk-dining/",
      "name": "Lamplight Lounge - Boardwalk Dining",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "19005291;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/lamplight-lounge/DLR_DCA_LampLightLounge_Sliders_041019_DSC01078_DN-1x1.jpg?2021-06-17T18:44:19+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/lamplight-lounge/DLR_DCA_LampLightLounge_Sliders_041019_DSC01078_DN-1x1.jpg?2021-06-17T18:44:19+00:00"
        },
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/lamplight-lounge/DLR_DCA_LampLightLounge_Sliders_041019_DSC01078_DN-16x9.jpg?2021-06-17T18:44:19+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/lamplight-lounge/DLR_DCA_LampLightLounge_Sliders_041019_DSC01078_DN-16x9.jpg?2021-06-17T18:44:19+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/lamplight-lounge/DLR_DCA_LampLightLounge_Sliders_041019_DSC01078_DN-1x1.jpg?2021-06-17T18:44:19+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/lamplight-lounge/DLR_DCA_LampLightLounge_Sliders_041019_DSC01078_DN-1x1.jpg?2021-06-17T18:44:19+00:00"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "behaviorType": [
          "walkupWaitList"
        ],
        "cuisine": [
          "american-cuisine",
          "californian-cuisine",
          "healthy-selections-cuisine",
          "vegetarian-cuisine"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "otherDining": [
          "bars-and-lounges"
        ],
        "priceRange": [
          "$$"
        ],
        "specialEvent": [
          "food-and-wine"
        ],
        "tableService": [
          "special-unique-dining",
          "table-service"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:30:00",
            "endTime": "17:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "locationName": "Disney California Adventure Park",
      "facilityId": "19629820",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Bars & Lounges, Unique/Themed Dining"
      },
      "marker": {
        "card": {
          "id": "19629820;entityType=restaurant",
          "name": "Lamplight Lounge - Boardwalk Dining",
          "urlFriendlyId": "lamplight-lounge-boardwalk-dining",
          "url": "/dining/disney-california-adventure/lamplight-lounge-boardwalk-dining/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/lamplight-lounge/DLR_DCA_LampLightLounge_Sliders_041019_DSC01078_DN-1x1.jpg?2021-06-17T18:44:19+00:00",
            "alt": ""
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.80517,
        "lng": -117.920927,
        "name": "Lamplight Lounge - Boardwalk Dining",
        "id": "19629820;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354444;entityType=restaurant",
      "urlFriendlyId": "refreshment-corner",
      "url": "/dining/disneyland/refreshment-corner/",
      "name": "Refreshment Corner",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336938;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "Refreshment Corner",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/refreshment-corner/refreshment-corner-00.jpg?1680282054488",
          "alt": "Sign for Corner Cafe and Coca-Cola Refreshment Corner on Main Street, U.S.A. at Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/refreshment-corner/refreshment-corner-00.jpg?1680282054488"
        },
        "mapBubbleThumbLarge": {
          "title": "Refreshment Corner",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/refreshment-corner/refreshment-corner-00.jpg?1680282054488",
          "alt": "Sign for Corner Cafe and Coca-Cola Refreshment Corner on Main Street, U.S.A. at Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/refreshment-corner/refreshment-corner-00.jpg?1680282054488"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "pixar-themed-food"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "00:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "354444",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "354444;entityType=restaurant",
          "name": "Refreshment Corner",
          "urlFriendlyId": "refreshment-corner",
          "url": "/dining/disneyland/refreshment-corner/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/refreshment-corner/refreshment-corner-00.jpg?1680282054488",
            "alt": "Sign for Corner Cafe and Coca-Cola Refreshment Corner on Main Street, U.S.A. at Disneyland Park"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8114464994,
        "lng": -117.9190483181,
        "name": "Refreshment Corner",
        "id": "354444;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "368880;entityType=restaurant",
      "urlFriendlyId": "sonoma-terrace",
      "url": "/dining/disney-california-adventure/sonoma-terrace/",
      "name": "Sonoma Terrace",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "336977;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "A stack of six freshly baked hot Bavarian pretzels are lightly sprinkled with salt",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/paradise-garden-grill/paradise-garden-grill-beer-pretzel-1x1.jpg?1673561950085",
          "alt": "A stack of six freshly baked hot Bavarian pretzels are lightly sprinkled with salt",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/paradise-garden-grill/paradise-garden-grill-beer-pretzel-1x1.jpg?1673561950085"
        },
        "finderStandardThumb": {
          "title": "A stack of six freshly baked hot Bavarian pretzels are lightly sprinkled with salt",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/paradise-garden-grill/paradise-garden-grill-beer-pretzel-16x9.jpg?1673561950085",
          "alt": "A stack of six freshly baked hot Bavarian pretzels are lightly sprinkled with salt",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/paradise-garden-grill/paradise-garden-grill-beer-pretzel-16x9.jpg?1673561950085"
        },
        "mapBubbleThumbLarge": {
          "title": "A stack of six freshly baked hot Bavarian pretzels are lightly sprinkled with salt",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/paradise-garden-grill/paradise-garden-grill-beer-pretzel-1x1.jpg?1673561950085",
          "alt": "A stack of six freshly baked hot Bavarian pretzels are lightly sprinkled with salt",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/paradise-garden-grill/paradise-garden-grill-beer-pretzel-1x1.jpg?1673561950085"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "otherDining": [
          "bars-and-lounges"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "specialEvent": [
          "disney-festival-of-holidays"
        ],
        "validDays": [
          "every-day",
          "every-day-excludes-alcohol-gratuity-tax"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "21:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/368929"
      ],
      "locationName": "Disney California Adventure Park",
      "facilityId": "368880",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Bars & Lounges, Mobile Orders"
      },
      "marker": {
        "card": {
          "id": "368880;entityType=restaurant",
          "name": "Sonoma Terrace",
          "urlFriendlyId": "sonoma-terrace",
          "url": "/dining/disney-california-adventure/sonoma-terrace/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/paradise-garden-grill/paradise-garden-grill-beer-pretzel-1x1.jpg?1673561950085",
            "alt": "A stack of six freshly baked hot Bavarian pretzels are lightly sprinkled with salt"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8063931592,
        "lng": -117.9203394055,
        "name": "Sonoma Terrace",
        "id": "368880;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "19598969;entityType=restaurant",
      "urlFriendlyId": "blue-ribbon-corn-dogs",
      "url": "/dining/downtown-disney-district/blue-ribbon-corn-dogs/",
      "name": "Blue Ribbon Corn Dog",
      "parkIds": [
        "336978;entityType=Entertainment-Venue"
      ],
      "media": {
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/downtown-disney/Blue-Ribbon-Corn-Dog-Hero-Image-16x9.jpg?2022-05-12T13:29:26+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/downtown-disney/Blue-Ribbon-Corn-Dog-Hero-Image-16x9.jpg?2022-05-12T13:29:26+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/downtown-disney/Blue-Ribbon-Corn-Dog-Hero-Image-1x1.jpg?2022-05-12T13:29:26+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/downtown-disney/Blue-Ribbon-Corn-Dog-Hero-Image-1x1.jpg?2022-05-12T13:29:26+00:00"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "quickService": [
          "quick-service"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "10:00:00",
            "endTime": "00:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Downtown Disney District",
      "facilityId": "19598969",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "19598969;entityType=restaurant",
          "name": "Blue Ribbon Corn Dog",
          "urlFriendlyId": "blue-ribbon-corn-dogs",
          "url": "/dining/downtown-disney-district/blue-ribbon-corn-dogs/",
          "land": "Downtown Disney District",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/downtown-disney/Blue-Ribbon-Corn-Dog-Hero-Image-1x1.jpg?2022-05-12T13:29:26+00:00",
            "alt": ""
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.809141,
        "lng": -117.92419,
        "name": "Blue Ribbon Corn Dog",
        "id": "19598969;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354549;entityType=restaurant",
      "urlFriendlyId": "craftsman-grill",
      "url": "/dining/grand-californian-hotel/craftsman-grill/",
      "name": "GCH Craftsman Grill",
      "parkIds": [
        "334222;entityType=resort"
      ],
      "media": {
        "mapBubbleThumbSmall": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/gch-craftsman-grill/DLR_GCH_CraftsmanGrill_BakedChickenNachos_04192022_DSC07811DN-2_reduced-1x1.jpg?2022-05-25T17:03:55+00:00",
          "alt": "Baked chicken nachos with melted cheese, black beans, scallions, slivered jalapeno pepper, cilantro, queso fresco, guacamole and crema.",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/gch-craftsman-grill/DLR_GCH_CraftsmanGrill_BakedChickenNachos_04192022_DSC07811DN-2_reduced-1x1.jpg?2022-05-25T17:03:55+00:00"
        },
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/gch-craftsman-grill/DLR_GCH_CraftsmanGrill_BakedChickenNachos_04192022_DSC07811DN-2_reduced-16x9.jpg?2022-05-25T17:03:55+00:00",
          "alt": "Baked chicken nachos with melted cheese, black beans, scallions, slivered jalapeno pepper, cilantro, queso fresco, guacamole and crema.",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/gch-craftsman-grill/DLR_GCH_CraftsmanGrill_BakedChickenNachos_04192022_DSC07811DN-2_reduced-16x9.jpg?2022-05-25T17:03:55+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/gch-craftsman-grill/DLR_GCH_CraftsmanGrill_BakedChickenNachos_04192022_DSC07811DN-2_reduced-16x9.jpg?2022-05-25T17:03:55+00:00",
          "alt": "Baked chicken nachos with melted cheese, black beans, scallions, slivered jalapeno pepper, cilantro, queso fresco, guacamole and crema.",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/gch-craftsman-grill/DLR_GCH_CraftsmanGrill_BakedChickenNachos_04192022_DSC07811DN-2_reduced-16x9.jpg?2022-05-25T17:03:55+00:00"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$",
          "$$"
        ],
        "quickService": [
          "quick-service"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "06:45:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "facilityId": "354549",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "354549;entityType=restaurant",
          "name": "GCH Craftsman Grill",
          "urlFriendlyId": "craftsman-grill",
          "url": "/dining/grand-californian-hotel/craftsman-grill/",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/gch-craftsman-grill/DLR_GCH_CraftsmanGrill_BakedChickenNachos_04192022_DSC07811DN-2_reduced-16x9.jpg?2022-05-25T17:03:55+00:00",
            "alt": "Baked chicken nachos with melted cheese, black beans, scallions, slivered jalapeno pepper, cilantro, queso fresco, guacamole and crema."
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8075465076,
        "lng": -117.9215009742,
        "name": "GCH Craftsman Grill",
        "id": "354549;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "368928;entityType=restaurant",
      "urlFriendlyId": "mendocino-terrace",
      "url": "/dining/disney-california-adventure/mendocino-terrace/",
      "name": "Mendocino Terrace",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "336977;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Mendocino Terrace",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/mendocino-terrace/mendocino-terrace-wine-00-sq.jpg?1673559233770",
          "alt": "White wine in a glass at Mendocino Terrace at Golden Wine Winery",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/mendocino-terrace/mendocino-terrace-wine-00-sq.jpg?1673559233770"
        },
        "finderStandardThumb": {
          "title": "Mendocino Terrace",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/mendocino-terrace/mendocino-terrace-wine-00.jpg?1673559233769",
          "alt": "White wine in a glass at Mendocino Terrace at Golden Wine Winery",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/mendocino-terrace/mendocino-terrace-wine-00.jpg?1673559233769"
        },
        "mapBubbleThumbLarge": {
          "title": "Mendocino Terrace",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/mendocino-terrace/mendocino-terrace-wine-00-sq.jpg?1673559233769",
          "alt": "White wine in a glass at Mendocino Terrace at Golden Wine Winery",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/mendocino-terrace/mendocino-terrace-wine-00-sq.jpg?1673559233769"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "otherDining": [
          "bars-and-lounges"
        ],
        "priceRange": [
          "$"
        ],
        "tableService": [
          "table-service"
        ],
        "validDays": [
          "every-day",
          "every-day-excludes-alcohol-gratuity-tax"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "20:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/368808"
      ],
      "locationName": "Disney California Adventure Park",
      "facilityId": "368928",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Bars & Lounges, Mobile Orders"
      },
      "marker": {
        "card": {
          "id": "368928;entityType=restaurant",
          "name": "Mendocino Terrace",
          "urlFriendlyId": "mendocino-terrace",
          "url": "/dining/disney-california-adventure/mendocino-terrace/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/mendocino-terrace/mendocino-terrace-wine-00-sq.jpg?1673559233769",
            "alt": "White wine in a glass at Mendocino Terrace at Golden Wine Winery"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.806546,
        "lng": -117.919842,
        "name": "Mendocino Terrace",
        "id": "368928;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "19637038;entityType=restaurant",
      "urlFriendlyId": "diggity-dogs",
      "url": "/dining/downtown-disney-district/diggity-dogs/",
      "name": "Diggity Dogs",
      "parkIds": [
        "336978;entityType=Entertainment-Venue"
      ],
      "media": {
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/downtown-disney/Diggity-Dog-16x9.jpg?2022-05-12T13:29:26+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/downtown-disney/Diggity-Dog-16x9.jpg?2022-05-12T13:29:26+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/downtown-disney/Diggity-Dog-1x1.jpg?2022-05-12T13:29:26+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/downtown-disney/Diggity-Dog-1x1.jpg?2022-05-12T13:29:26+00:00"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "quickService": [
          "quick-service"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "09:00:00",
            "endTime": "00:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Downtown Disney District",
      "facilityId": "19637038",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "19637038;entityType=restaurant",
          "name": "Diggity Dogs",
          "urlFriendlyId": "diggity-dogs",
          "url": "/dining/downtown-disney-district/diggity-dogs/",
          "land": "Downtown Disney District",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/downtown-disney/Diggity-Dog-1x1.jpg?2022-05-12T13:29:26+00:00",
            "alt": ""
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.808841,
        "lng": -117.920645,
        "name": "Diggity Dogs",
        "id": "19637038;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354516;entityType=restaurant",
      "urlFriendlyId": "tiki-juice-bar",
      "url": "/dining/disneyland/tiki-juice-bar/",
      "name": "Tiki Juice Bar",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336941;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "A pineapple soft serve dessert in a clear bowl on banana leaves",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/disneyland/dining/disneyland/tiki-juice-bar/tiki-juice-bar-1x1.jpg?1673562003674",
          "alt": "A pineapple soft serve dessert in a clear bowl on banana leaves",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disneyland/tiki-juice-bar/tiki-juice-bar-1x1.jpg?1673562003674"
        },
        "finderStandardThumb": {
          "title": "A pineapple soft serve dessert in a clear bowl on banana leaves",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/disneyland/tiki-juice-bar/tiki-juice-bar-16x9.jpg?1673562003674",
          "alt": "A pineapple soft serve dessert in a clear bowl on banana leaves",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disneyland/tiki-juice-bar/tiki-juice-bar-16x9.jpg?1673562003674"
        },
        "mapBubbleThumbLarge": {
          "title": "A pineapple soft serve dessert in a clear bowl on banana leaves",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/disneyland/tiki-juice-bar/tiki-juice-bar-1x1.jpg?1673562003674",
          "alt": "A pineapple soft serve dessert in a clear bowl on banana leaves",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disneyland/tiki-juice-bar/tiki-juice-bar-1x1.jpg?1673562003674"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "type": [
          "park-admission-required"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "09:00:00",
            "endTime": "23:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "354516",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "354516;entityType=restaurant",
          "name": "Tiki Juice Bar",
          "urlFriendlyId": "tiki-juice-bar",
          "url": "/dining/disneyland/tiki-juice-bar/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/disneyland/tiki-juice-bar/tiki-juice-bar-1x1.jpg?1673562003674",
            "alt": "A pineapple soft serve dessert in a clear bowl on banana leaves"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8118490285,
        "lng": -117.9195771195,
        "name": "Tiki Juice Bar",
        "id": "354516;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354492;entityType=restaurant",
      "urlFriendlyId": "coffee-house",
      "url": "/dining/disneyland-hotel/coffee-house/",
      "name": "The Coffee House",
      "parkIds": [
        "334223;entityType=resort"
      ],
      "media": {
        "mapBubbleThumbSmall": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/the-coffee-house/IMG_1835xx-1x1.jpg?2023-02-03T17:52:24+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/the-coffee-house/IMG_1835xx-1x1.jpg?2023-02-03T17:52:24+00:00"
        },
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/the-coffee-house/IMG_1835xx-16x9.jpg?2023-02-03T17:52:24+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/the-coffee-house/IMG_1835xx-16x9.jpg?2023-02-03T17:52:24+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/the-coffee-house/IMG_1835xx-1x1.jpg?2023-02-03T17:52:24+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/the-coffee-house/IMG_1835xx-1x1.jpg?2023-02-03T17:52:24+00:00"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "06:00:00",
            "endTime": "16:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "facilityId": "354492",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "354492;entityType=restaurant",
          "name": "The Coffee House",
          "urlFriendlyId": "coffee-house",
          "url": "/dining/disneyland-hotel/coffee-house/",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/the-coffee-house/IMG_1835xx-1x1.jpg?2023-02-03T17:52:24+00:00",
            "alt": ""
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8088219706,
        "lng": -117.9272663008,
        "name": "The Coffee House",
        "id": "354492;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "19104269;entityType=restaurant",
      "urlFriendlyId": "ballast-point-brewing-company",
      "url": "/dining/downtown-disney-district/ballast-point-brewing-company/",
      "name": "Ballast Point® Brewing Co.",
      "parkIds": [
        "336978;entityType=Entertainment-Venue"
      ],
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Night view of Ballast Point, Wetzel's Pretzels and Black Tap in the Downtown Disney District",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/disneyland/experience-updates/downtown-disney/downtown-disney-evening-1x1.jpg?1656354274453",
          "alt": "Night view of Ballast Point, Wetzel's Pretzels and Black Tap in the Downtown Disney District",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/experience-updates/downtown-disney/downtown-disney-evening-1x1.jpg?1656354274453"
        },
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/experience-updates/downtown-disney/downtown-disney-evening-16x9.jpg?1656354274452",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/experience-updates/downtown-disney/downtown-disney-evening-16x9.jpg?1656354274452"
        },
        "mapBubbleThumbLarge": {
          "title": "Night view of Ballast Point, Wetzel's Pretzels and Black Tap in the Downtown Disney District",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/experience-updates/downtown-disney/downtown-disney-evening-1x1.jpg?1656354274452",
          "alt": "Night view of Ballast Point, Wetzel's Pretzels and Black Tap in the Downtown Disney District",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/experience-updates/downtown-disney/downtown-disney-evening-1x1.jpg?1656354274452"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "discounts": [
          "disney-visa-cardholder"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "otherDining": [
          "bars-and-lounges"
        ],
        "priceRange": [
          "$$"
        ],
        "tableService": [
          "casual-dining",
          "dinner"
        ],
        "validDays": [
          "every-day-no-alcohol-tax-tip"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "23:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/19200886",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/19200887"
      ],
      "locationName": "Downtown Disney District",
      "facilityId": "19104269",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Bars & Lounges, Casual Dining"
      },
      "marker": {
        "card": {
          "id": "19104269;entityType=restaurant",
          "name": "Ballast Point® Brewing Co.",
          "urlFriendlyId": "ballast-point-brewing-company",
          "url": "/dining/downtown-disney-district/ballast-point-brewing-company/",
          "land": "Downtown Disney District",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/experience-updates/downtown-disney/downtown-disney-evening-1x1.jpg?1656354274452",
            "alt": "Night view of Ballast Point, Wetzel's Pretzels and Black Tap in the Downtown Disney District"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.809094,
        "lng": -117.922738,
        "name": "Ballast Point® Brewing Co.",
        "id": "19104269;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "16515009;entityType=restaurant",
      "urlFriendlyId": "carthay-circle-restaurant",
      "url": "/dining/disney-california-adventure/carthay-circle-restaurant/",
      "name": "Carthay Circle Restaurant",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "16505397;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "Carthay Circle Restaurant",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/carthay-circle-restaurant/carthay-circle-restaurant-00.jpg?1686584170172",
          "alt": "The entrance and campanile of the Carthay Circle Restaurant in Disney California Adventure Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/carthay-circle-restaurant/carthay-circle-restaurant-00.jpg?1686584170172"
        },
        "mapBubbleThumbLarge": {
          "title": "Carthay Circle Restaurant",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/carthay-circle-restaurant/carthay-circle-restaurant-00-sq.jpg?1686584170172",
          "alt": "The entrance and campanile of the Carthay Circle Restaurant in Disney California Adventure Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/carthay-circle-restaurant/carthay-circle-restaurant-00-sq.jpg?1686584170172"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "behaviorType": [
          "walkupWaitList"
        ],
        "checkAvailability": [
          "checkavailmodule"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "diningInterests": [
          "fine-signature-dining-rec",
          "table-service-rec"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "guestRating": [
          "four-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$$",
          "$$$"
        ],
        "tableService": [
          "special-unique-dining",
          "signature-dining",
          "table-service",
          "reservations-accepted"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day",
          "every-day-excludes-alcohol-gratuity-tax"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "16:00:00",
            "endTime": "20:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "3292551",
        "reviewCount": 1040
      },
      "guestRating": 4,
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/16608194",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/16608212"
      ],
      "locationName": "Disney California Adventure Park",
      "facilityId": "16515009",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Reservations Accepted, Fine/Signature Dining"
      },
      "marker": {
        "card": {
          "id": "16515009;entityType=restaurant",
          "name": "Carthay Circle Restaurant",
          "urlFriendlyId": "carthay-circle-restaurant",
          "url": "/dining/disney-california-adventure/carthay-circle-restaurant/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/carthay-circle-restaurant/carthay-circle-restaurant-00-sq.jpg?1686584170172",
            "alt": "The entrance and campanile of the Carthay Circle Restaurant in Disney California Adventure Park"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.807494,
        "lng": -117.919021,
        "name": "Carthay Circle Restaurant",
        "id": "16515009;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "17759035;entityType=restaurant",
      "urlFriendlyId": "starbucks-coffee",
      "url": "/dining/downtown-disney-district/starbucks-coffee/",
      "name": "Starbucks®",
      "parkIds": [
        "336978;entityType=Entertainment-Venue"
      ],
      "media": {
        "finderStandardThumb": {
          "title": "Starbucks",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/starbucks-coffee/starbucks-coffee-00.jpg?1583970556693",
          "alt": "Cup of cappuccino with coffee beans scattered in saucer and on table",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/starbucks-coffee/starbucks-coffee-00.jpg?1583970556693"
        },
        "mapBubbleThumbLarge": {
          "title": "Starbucks",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/starbucks-coffee/starbucks-coffee-00-sq.jpg?1583970556694",
          "alt": "Cup of cappuccino with coffee beans scattered in saucer and on table",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/starbucks-coffee/starbucks-coffee-00-sq.jpg?1583970556694"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine",
          "bakery-cuisine-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "07:00:00",
            "endTime": "00:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Downtown Disney District",
      "facilityId": "17759035",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "17759035;entityType=restaurant",
          "name": "Starbucks®",
          "urlFriendlyId": "starbucks-coffee",
          "url": "/dining/downtown-disney-district/starbucks-coffee/",
          "land": "Downtown Disney District",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/starbucks-coffee/starbucks-coffee-00-sq.jpg?1583970556694",
            "alt": "Cup of cappuccino with coffee beans scattered in saucer and on table"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8086367418,
        "lng": -117.9218240082,
        "name": "Starbucks®",
        "id": "17759035;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "19267431;entityType=restaurant",
      "urlFriendlyId": "milk-stand",
      "url": "/dining/disneyland/milk-stand/",
      "name": "Milk Stand",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "19025523;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disneyland/star-wars-galaxys-edge/photography/milk-stand-16x9.jpg?1673561463545",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disneyland/star-wars-galaxys-edge/photography/milk-stand-16x9.jpg?1673561463545"
        },
        "mapBubbleThumbLarge": {
          "title": "A crowd of galactic visitors to Black Spire Outpost gather to indulge in beverages at the Milk Stand",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disneyland/star-wars-galaxys-edge/photography/milk-stand-1x1.jpg?1673561463546",
          "alt": "A crowd of galactic visitors to Black Spire Outpost gather to indulge in beverages at the Milk Stand",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disneyland/star-wars-galaxys-edge/photography/milk-stand-1x1.jpg?1673561463546"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "carts-kiosks"
        ],
        "diningInterests": [
          "character-dining-rec",
          "quick-service-rec"
        ],
        "disneyFavorites": [
          "star-wars-rec"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "priceRange": [
          "$"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "00:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "19267431",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "type": {
        "facets": "Mobile Orders"
      },
      "marker": {
        "card": {
          "id": "19267431;entityType=restaurant",
          "name": "Milk Stand",
          "urlFriendlyId": "milk-stand",
          "url": "/dining/disneyland/milk-stand/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disneyland/star-wars-galaxys-edge/photography/milk-stand-1x1.jpg?1673561463546",
            "alt": "A crowd of galactic visitors to Black Spire Outpost gather to indulge in beverages at the Milk Stand"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.814428,
        "lng": -117.92069,
        "name": "Milk Stand",
        "id": "19267431;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354273;entityType=restaurant",
      "urlFriendlyId": "harbour-galley",
      "url": "/dining/disneyland/harbour-galley/",
      "name": "Harbour Galley",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336942;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Harbour Galley",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/harbour-galley/harbour-galley-00-sq.jpg?1673561046891",
          "alt": "Sign: Harbour Galley Come Ashore for Dockside Dining at Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/harbour-galley/harbour-galley-00-sq.jpg?1673561046891"
        },
        "finderStandardThumb": {
          "title": "Harbour Galley",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/harbour-galley/harbour-galley-00.jpg?1673561046890",
          "alt": "Sign: Harbour Galley Come Ashore for Dockside Dining at Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/harbour-galley/harbour-galley-00.jpg?1673561046890"
        },
        "mapBubbleThumbLarge": {
          "title": "Harbour Galley",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/harbour-galley/harbour-galley-00-sq.jpg?1673561046890",
          "alt": "Sign: Harbour Galley Come Ashore for Dockside Dining at Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/harbour-galley/harbour-galley-00-sq.jpg?1673561046890"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "guestRating": [
          "four-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "10:00:00",
            "endTime": "21:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "3635172",
        "reviewCount": 93
      },
      "guestRating": 4,
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "354273",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "354273;entityType=restaurant",
          "name": "Harbour Galley",
          "urlFriendlyId": "harbour-galley",
          "url": "/dining/disneyland/harbour-galley/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/harbour-galley/harbour-galley-00-sq.jpg?1673561046890",
            "alt": "Sign: Harbour Galley Come Ashore for Dockside Dining at Disneyland Park"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8120188925,
        "lng": -117.921936614,
        "name": "Harbour Galley",
        "id": "354273;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "19268344;entityType=restaurant",
      "urlFriendlyId": "ogas-cantina",
      "url": "/dining/disneyland/ogas-cantina/",
      "name": "Oga's Cantina at the Disneyland Resort",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "19025523;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "Adults enjoy exotic beverages inside a Star Wars cantina with hoses, tubes and unusual machines",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disneyland/star-wars-galaxys-edge/photography/ogas-cantina-16x9.jpg?1673559259255",
          "alt": "Adults enjoy exotic beverages inside a Star Wars cantina with hoses, tubes and unusual machines",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disneyland/star-wars-galaxys-edge/photography/ogas-cantina-16x9.jpg?1673559259255"
        },
        "mapBubbleThumbLarge": {
          "title": "Unusual cups and vessels hold galactic cocktails and garnishes",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disneyland/star-wars-galaxys-edge/photography/ogas-cantina-1x1.jpg?1673559259255",
          "alt": "Unusual cups and vessels hold galactic cocktails and garnishes",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disneyland/star-wars-galaxys-edge/photography/ogas-cantina-1x1.jpg?1673559259255"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "behaviorType": [
          "walkupWaitList"
        ],
        "checkAvailability": [
          "checkavailmodule"
        ],
        "diningInterests": [
          "character-dining-rec",
          "table-service-rec"
        ],
        "disneyFavorites": [
          "star-wars-rec"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "hearingandVisualDisability": [
          "assistive-listening",
          "audio-description"
        ],
        "otherDining": [
          "bars-and-lounges"
        ],
        "priceRange": [
          "$",
          "$$"
        ],
        "tableService": [
          "special-unique-dining",
          "reservations-accepted",
          "breakfast",
          "dinner"
        ],
        "validDays": [
          "every-day-novelty-items"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "23:30:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/19338164",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/19338896",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/19341127"
      ],
      "locationName": "Disneyland Park",
      "facilityId": "19268344",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Bars & Lounges, Breakfast"
      },
      "marker": {
        "card": {
          "id": "19268344;entityType=restaurant",
          "name": "Oga's Cantina at the Disneyland Resort",
          "urlFriendlyId": "ogas-cantina",
          "url": "/dining/disneyland/ogas-cantina/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disneyland/star-wars-galaxys-edge/photography/ogas-cantina-1x1.jpg?1673559259255",
            "alt": "Unusual cups and vessels hold galactic cocktails and garnishes"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.814717,
        "lng": -117.920943,
        "name": "Oga's Cantina at the Disneyland Resort",
        "id": "19268344;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "16027216;entityType=restaurant",
      "urlFriendlyId": "tangaroa-terrace",
      "url": "/dining/disneyland-hotel/tangaroa-terrace/",
      "name": "Tangaroa Terrace Tropical Bar & Grill",
      "parkIds": [
        "334223;entityType=resort"
      ],
      "media": {
        "finderStandardThumb": {
          "title": "A burrito filled with rice, ground beef, fried egg and gravy on a plate with a cup of sauce, pineapple wedges and an orchid flower",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/disneyland-hotel/tangaroa-terrace/dlr-tangaroa-terrace-loco-moco-burrito-16x9.jpg?1652897683120",
          "alt": "A burrito filled with rice, ground beef, fried egg and gravy on a plate with a cup of sauce, pineapple wedges and an orchid flower",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disneyland-hotel/tangaroa-terrace/dlr-tangaroa-terrace-loco-moco-burrito-16x9.jpg?1652897683120"
        },
        "mapBubbleThumbLarge": {
          "title": "A burrito filled with rice, ground beef, fried egg and gravy on a plate with a cup of sauce, pineapple wedges and an orchid flower",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/disneyland-hotel/tangaroa-terrace/dlr-tangaroa-terrace-loco-moco-burrito-1x1.jpg?1652897683120",
          "alt": "A burrito filled with rice, ground beef, fried egg and gravy on a plate with a cup of sauce, pineapple wedges and an orchid flower",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disneyland-hotel/tangaroa-terrace/dlr-tangaroa-terrace-loco-moco-burrito-1x1.jpg?1652897683120"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "07:00:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "facilityId": "16027216",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "16027216;entityType=restaurant",
          "name": "Tangaroa Terrace Tropical Bar & Grill",
          "urlFriendlyId": "tangaroa-terrace",
          "url": "/dining/disneyland-hotel/tangaroa-terrace/",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/disneyland-hotel/tangaroa-terrace/dlr-tangaroa-terrace-loco-moco-burrito-1x1.jpg?1652897683120",
            "alt": "A burrito filled with rice, ground beef, fried egg and gravy on a plate with a cup of sauce, pineapple wedges and an orchid flower"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8083905362,
        "lng": -117.9266404545,
        "name": "Tangaroa Terrace Tropical Bar & Grill",
        "id": "16027216;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "369657;entityType=restaurant",
      "urlFriendlyId": "in-room-dining",
      "url": "/dining/disneyland-hotel/in-room-dining/",
      "name": "In-Room Dining at Disneyland Hotel",
      "parkIds": [
        "334223;entityType=resort"
      ],
      "media": {
        "mapBubbleThumbSmall": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/resorts/disneys-grand-californian-hotel-and-spa/dining/dlr-in-room-dining-00-1x1.jpg?2023-03-16T19:54:18+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/resorts/disneys-grand-californian-hotel-and-spa/dining/dlr-in-room-dining-00-1x1.jpg?2023-03-16T19:54:18+00:00"
        },
        "finderStandardThumb": {
          "title": "Disneyland Hotel",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/places-to-stay/disneyland-hotel/dining/dlr-in-room-dining-00.jpg?1679952844292",
          "alt": "A succulent slice of salmon and 2 asparagus spears sit atop a bed of rice next to another dinner dish",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/places-to-stay/disneyland-hotel/dining/dlr-in-room-dining-00.jpg?1679952844292"
        },
        "mapBubbleThumbLarge": {
          "title": "Disneyland Hotel",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/places-to-stay/disneyland-hotel/dining/dlr-in-room-dining-00.jpg?1679952844292",
          "alt": "A succulent slice of salmon and 2 asparagus spears sit atop a bed of rice next to another dinner dish",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/places-to-stay/disneyland-hotel/dining/dlr-in-room-dining-00.jpg?1679952844292"
        }
      },
      "facets": {
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "06:00:00",
            "endTime": "11:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          },
          {
            "type": "Operating",
            "startTime": "17:00:00",
            "endTime": "00:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "facilityId": "369657",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "marker": {
        "card": {
          "id": "369657;entityType=restaurant",
          "name": "In-Room Dining at Disneyland Hotel",
          "urlFriendlyId": "in-room-dining",
          "url": "/dining/disneyland-hotel/in-room-dining/",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/places-to-stay/disneyland-hotel/dining/dlr-in-room-dining-00.jpg?1679952844292",
            "alt": "A succulent slice of salmon and 2 asparagus spears sit atop a bed of rice next to another dinner dish"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.809049,
        "lng": -117.926853,
        "name": "In-Room Dining at Disneyland Hotel",
        "id": "369657;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "424962;entityType=restaurant",
      "urlFriendlyId": "fairfax-fruit-market",
      "url": "/dining/disney-california-adventure/fairfax-fruit-market/",
      "name": "Fairfax Market",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "336981;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "Fairfax Market",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/fairfax-market/fairfax-market-00.jpg?1673560497038",
          "alt": "Fairfax Market sign at Disney California Adventure Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/fairfax-market/fairfax-market-00.jpg?1673560497038"
        },
        "mapBubbleThumbLarge": {
          "title": "Fairfax Market",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/fairfax-market/fairfax-market-00-sq.jpg?1673560497038",
          "alt": "Fairfax Market sign at Disney California Adventure Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/fairfax-market/fairfax-market-00-sq.jpg?1673560497038"
        }
      },
      "facets": {
        "cuisine": [
          "healthy-selections-cuisine",
          "vegetarian-cuisine"
        ],
        "diningExperience": [
          "carts-kiosks"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "type": [
          "park-admission-required"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "17:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "424962",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "marker": {
        "card": {
          "id": "424962;entityType=restaurant",
          "name": "Fairfax Market",
          "urlFriendlyId": "fairfax-fruit-market",
          "url": "/dining/disney-california-adventure/fairfax-fruit-market/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/fairfax-market/fairfax-market-00-sq.jpg?1673560497038",
            "alt": "Fairfax Market sign at Disney California Adventure Park"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8077209975,
        "lng": -117.9174190847,
        "name": "Fairfax Market",
        "id": "424962;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "16513928;entityType=restaurant",
      "urlFriendlyId": "clarabelles-hand-scooped-ice-cream",
      "url": "/dining/disney-california-adventure/clarabelles-hand-scooped-ice-cream/",
      "name": "Clarabelle's Hand-Scooped Ice Cream",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "16505397;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "FPO",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/clarabelles-ice-cream/clarabelles-ice-cream-00-sq.jpg?1673560331003",
          "alt": "Sign for Clarabelle's Hand-Scooped Ice Cream shop at Disney California Adventure Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/clarabelles-ice-cream/clarabelles-ice-cream-00-sq.jpg?1673560331003"
        },
        "finderStandardThumb": {
          "title": "FPO",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/clarabelles-ice-cream/clarabelles-ice-cream-00.jpg?1673560331003",
          "alt": "Sign for Clarabelle's Hand-Scooped Ice Cream shop at Disney California Adventure Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/clarabelles-ice-cream/clarabelles-ice-cream-00.jpg?1673560331003"
        },
        "mapBubbleThumbLarge": {
          "title": "FPO",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/clarabelles-ice-cream/clarabelles-ice-cream-00-sq.jpg?1673560331003",
          "alt": "Sign for Clarabelle's Hand-Scooped Ice Cream shop at Disney California Adventure Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/clarabelles-ice-cream/clarabelles-ice-cream-00-sq.jpg?1673560331003"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "16513928",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "16513928;entityType=restaurant",
          "name": "Clarabelle's Hand-Scooped Ice Cream",
          "urlFriendlyId": "clarabelles-hand-scooped-ice-cream",
          "url": "/dining/disney-california-adventure/clarabelles-hand-scooped-ice-cream/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/clarabelles-ice-cream/clarabelles-ice-cream-00-sq.jpg?1673560331003",
            "alt": "Sign for Clarabelle's Hand-Scooped Ice Cream shop at Disney California Adventure Park"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.807958,
        "lng": -117.9191776264,
        "name": "Clarabelle's Hand-Scooped Ice Cream",
        "id": "16513928;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354438;entityType=restaurant",
      "urlFriendlyId": "rancho-del-zocalo-restaurante-dlr",
      "url": "/dining/disneyland/rancho-del-zocalo-restaurante/",
      "name": "Rancho del Zocalo Restaurante",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336944;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/rancho-del-zocalo-restaurante/dlr-rancho-del-zocalo-16x9.jpg?1673566793605",
          "alt": "Entrance sign: Rancho del Zocalo Restaurante, a Disneyland Park Mexican restaurant",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/rancho-del-zocalo-restaurante/dlr-rancho-del-zocalo-16x9.jpg?1673566793605"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/rancho-del-zocalo-restaurante/dlr-rancho-del-zocalo-1x1.jpg?1673566793605",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/rancho-del-zocalo-restaurante/dlr-rancho-del-zocalo-1x1.jpg?1673566793605"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine",
          "mexican-cuisine"
        ],
        "diningExperience": [
          "pixar-themed-food"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "guestRating": [
          "four-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "21:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "1774800",
        "reviewCount": 504
      },
      "guestRating": 4,
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "354438",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "354438;entityType=restaurant",
          "name": "Rancho del Zocalo Restaurante",
          "urlFriendlyId": "rancho-del-zocalo-restaurante-dlr",
          "url": "/dining/disneyland/rancho-del-zocalo-restaurante/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/rancho-del-zocalo-restaurante/dlr-rancho-del-zocalo-1x1.jpg?1673566793605",
            "alt": ""
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.812463049,
        "lng": -117.9197774827,
        "name": "Rancho del Zocalo Restaurante",
        "id": "354438;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354228;entityType=restaurant",
      "urlFriendlyId": "troubadour-tavern",
      "url": "/dining/disneyland/troubadour-tavern/",
      "name": "Troubadour Tavern",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336943;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "Sign for Troubadour Tavern, a Fantasyland Restaurant at Disneyland Park",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/troubadour-tavern/troubadour-tavern-00.jpg?1681342590835",
          "alt": "Sign for Troubadour Tavern, a Fantasyland Restaurant at Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/troubadour-tavern/troubadour-tavern-00.jpg?1681342590835"
        },
        "mapBubbleThumbLarge": {
          "title": "Sign for Troubadour Tavern, a Fantasyland Restaurant at Disneyland Park",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/troubadour-tavern/troubadour-tavern-00.jpg?1681342590835",
          "alt": "Sign for Troubadour Tavern, a Fantasyland Restaurant at Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/troubadour-tavern/troubadour-tavern-00.jpg?1681342590835"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:30:00",
            "endTime": "18:30:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "354228",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "354228;entityType=restaurant",
          "name": "Troubadour Tavern",
          "urlFriendlyId": "troubadour-tavern",
          "url": "/dining/disneyland/troubadour-tavern/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/troubadour-tavern/troubadour-tavern-00.jpg?1681342590835",
            "alt": "Sign for Troubadour Tavern, a Fantasyland Restaurant at Disneyland Park"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8145219838,
        "lng": -117.9187180102,
        "name": "Troubadour Tavern",
        "id": "354228;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "19139055;entityType=restaurant",
      "urlFriendlyId": "salt-and-straw",
      "url": "/dining/downtown-disney-district/salt-and-straw/",
      "name": "Salt & Straw",
      "parkIds": [
        "336978;entityType=Entertainment-Venue"
      ],
      "media": {
        "mapBubbleThumbSmall": {
          "title": "3 Salt and Straw cups filled with scoops of luscious ice cream",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/disneyland/dining/downtown-disney-district/salt-and-straw/salt-straw-ice-cream-downtown-disney-1x1.jpg?1611691880561",
          "alt": "3 Salt and Straw cups filled with scoops of luscious ice cream",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/downtown-disney-district/salt-and-straw/salt-straw-ice-cream-downtown-disney-1x1.jpg?1611691880561"
        },
        "finderStandardThumb": {
          "title": "3 Salt and Straw cups filled with scoops of luscious ice cream",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/downtown-disney-district/salt-and-straw/salt-straw-ice-cream-downtown-disney-16x9.jpg?1611691880561",
          "alt": "3 Salt and Straw cups filled with scoops of luscious ice cream",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/downtown-disney-district/salt-and-straw/salt-straw-ice-cream-downtown-disney-16x9.jpg?1611691880561"
        },
        "mapBubbleThumbLarge": {
          "title": "3 Salt and Straw cups filled with scoops of luscious ice cream",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/downtown-disney-district/salt-and-straw/salt-straw-ice-cream-downtown-disney-1x1.jpg?1611691880561",
          "alt": "3 Salt and Straw cups filled with scoops of luscious ice cream",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/downtown-disney-district/salt-and-straw/salt-straw-ice-cream-downtown-disney-1x1.jpg?1611691880561"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "priceRange": [
          "$"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "10:00:00",
            "endTime": "00:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Downtown Disney District",
      "facilityId": "19139055",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "marker": {
        "card": {
          "id": "19139055;entityType=restaurant",
          "name": "Salt & Straw",
          "urlFriendlyId": "salt-and-straw",
          "url": "/dining/downtown-disney-district/salt-and-straw/",
          "land": "Downtown Disney District",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/downtown-disney-district/salt-and-straw/salt-straw-ice-cream-downtown-disney-1x1.jpg?1611691880561",
            "alt": "3 Salt and Straw cups filled with scoops of luscious ice cream"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8090006404,
        "lng": -117.9224902544,
        "name": "Salt & Straw",
        "id": "19139055;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "18690683;entityType=restaurant",
      "urlFriendlyId": "characters",
      "url": "/dining/characters/",
      "name": "Character Dining",
      "parkIds": [
        "80008297;entityType=destination"
      ],
      "media": {
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/grand-californian-hotel/disney-princess-breakfast-adventures/girl-princess-costume-characters-16x9.jpg?1647467521073",
          "alt": "A little girl beams as her brother and sister share a laugh with Princess Ariel in the background",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/grand-californian-hotel/disney-princess-breakfast-adventures/girl-princess-costume-characters-16x9.jpg?1647467521073"
        },
        "mapBubbleThumbLarge": {
          "title": "A little girl beams as her brother and sister share a laugh with Princess Ariel in the background",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/grand-californian-hotel/disney-princess-breakfast-adventures/girl-princess-costume-characters-1x1.jpg?1647467521073",
          "alt": "A little girl beams as her brother and sister share a laugh with Princess Ariel in the background",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/grand-californian-hotel/disney-princess-breakfast-adventures/girl-princess-costume-characters-1x1.jpg?1647467521073"
        }
      },
      "facets": {
        "age": [
          "all-ages"
        ],
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "quickService": [
          "quick-service"
        ],
        "tableService": [
          "character-dining",
          "casual-dining",
          "table-service",
          "buffet-family-style",
          "breakfast",
          "dinner"
        ],
        "validDays": [
          "every-day-exclude-disney-princess-breakfast"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "facilityId": "18690683",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service, Table Service",
      "type": {
        "facets": "Breakfast, Buffet/Family Style"
      },
      "marker": {
        "card": {
          "id": "18690683;entityType=restaurant",
          "name": "Character Dining",
          "urlFriendlyId": "characters",
          "url": "/dining/characters/",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/grand-californian-hotel/disney-princess-breakfast-adventures/girl-princess-costume-characters-1x1.jpg?1647467521073",
            "alt": "A little girl beams as her brother and sister share a laugh with Princess Ariel in the background"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.809555,
        "lng": -117.918919,
        "name": "Character Dining",
        "id": "18690683;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "16032493;entityType=restaurant",
      "urlFriendlyId": "boardwalk-pizza-pasta",
      "url": "/dining/disney-california-adventure/boardwalk-pizza-pasta/",
      "name": "Boardwalk Pizza & Pasta",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "336973;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Boardwalk Pizza",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/boardwalk-pizza-pasta/boardwalk-pizza-pasta-00a-sq.jpg?1673560036658",
          "alt": "A fresh out of the oven, sliced pepperoni pizza on a wooden pizza board sits on a table outdoors",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/boardwalk-pizza-pasta/boardwalk-pizza-pasta-00a-sq.jpg?1673560036658"
        },
        "finderStandardThumb": {
          "title": "Boardwalk Pizza",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/boardwalk-pizza-pasta/boardwalk-pizza-pasta-00a.jpg?1673560036657",
          "alt": "A fresh out of the oven, sliced pepperoni pizza on a wooden pizza board sits on a table outdoors",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/boardwalk-pizza-pasta/boardwalk-pizza-pasta-00a.jpg?1673560036657"
        },
        "mapBubbleThumbLarge": {
          "title": "Boardwalk Pizza",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/boardwalk-pizza-pasta/boardwalk-pizza-pasta-00a-sq.jpg?1673560036657",
          "alt": "A fresh out of the oven, sliced pepperoni pizza on a wooden pizza board sits on a table outdoors",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/boardwalk-pizza-pasta/boardwalk-pizza-pasta-00a-sq.jpg?1673560036657"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "italian-cuisine"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "guestRating": [
          "four-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "tableService": [
          "lunch",
          "dinner"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "10:00:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "5453472",
        "reviewCount": 203
      },
      "guestRating": 4,
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "16032493",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service, Table Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "16032493;entityType=restaurant",
          "name": "Boardwalk Pizza & Pasta",
          "urlFriendlyId": "boardwalk-pizza-pasta",
          "url": "/dining/disney-california-adventure/boardwalk-pizza-pasta/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/boardwalk-pizza-pasta/boardwalk-pizza-pasta-00a-sq.jpg?1673560036657",
            "alt": "A fresh out of the oven, sliced pepperoni pizza on a wooden pizza board sits on a table outdoors"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8057925204,
        "lng": -117.9232147336,
        "name": "Boardwalk Pizza & Pasta",
        "id": "16032493;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354099;entityType=restaurant",
      "urlFriendlyId": "blue-bayou-restaurant",
      "url": "/dining/disneyland/blue-bayou-restaurant/",
      "name": "Blue Bayou Restaurant",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336946;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Blue Bayou Restaurant",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/blue-bayou-restaurant/blue-bayou-restaurant-00-sq.jpg?1686608744570",
          "alt": "Dining tables are under perpetual 'twilight' at the Blue Bayou restaurant",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/blue-bayou-restaurant/blue-bayou-restaurant-00-sq.jpg?1686608744570"
        },
        "finderStandardThumb": {
          "title": "Blue Bayou Restaurant",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/blue-bayou-restaurant/blue-bayou-restaurant-00.jpg?1686608744570",
          "alt": "Dining tables are under perpetual 'twilight' at the Blue Bayou restaurant",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/blue-bayou-restaurant/blue-bayou-restaurant-00.jpg?1686608744570"
        },
        "mapBubbleThumbLarge": {
          "title": "Blue Bayou Restaurant",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/blue-bayou-restaurant/blue-bayou-restaurant-00-sq.jpg?1686608744570",
          "alt": "Dining tables are under perpetual 'twilight' at the Blue Bayou restaurant",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/blue-bayou-restaurant/blue-bayou-restaurant-00-sq.jpg?1686608744570"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "behaviorType": [
          "walkupWaitList"
        ],
        "checkAvailability": [
          "checkavailmodule"
        ],
        "cuisine": [
          "cajun-creole-cuisine"
        ],
        "diningInterests": [
          "table-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "disneyFavorites": [
          "disney-villains-rec",
          "pirates-rec"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "guestRating": [
          "four-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$$$"
        ],
        "reservationOfferings": [
          "add-ons-available"
        ],
        "tableService": [
          "special-unique-dining",
          "table-service",
          "reservations-accepted",
          "lunch",
          "dinner"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "341603",
        "reviewCount": 3530
      },
      "guestRating": 4,
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/356876",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/368526"
      ],
      "locationName": "Disneyland Park",
      "facilityId": "354099",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Reservations Accepted, Unique/Themed Dining"
      },
      "marker": {
        "card": {
          "id": "354099;entityType=restaurant",
          "name": "Blue Bayou Restaurant",
          "urlFriendlyId": "blue-bayou-restaurant",
          "url": "/dining/disneyland/blue-bayou-restaurant/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/blue-bayou-restaurant/blue-bayou-restaurant-00-sq.jpg?1686608744570",
            "alt": "Dining tables are under perpetual 'twilight' at the Blue Bayou restaurant"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.811049,
        "lng": -117.921126,
        "name": "Blue Bayou Restaurant",
        "id": "354099;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354441;entityType=restaurant",
      "urlFriendlyId": "alien-pizza-planet",
      "url": "/dining/disneyland/alien-pizza-planet/",
      "name": "Alien Pizza Planet",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336947;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "Pizza topped with pepperoni",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disneyland/tomorrowland/disneyland-pizza-port-pepperoni-16x9.jpg?1673559845391",
          "alt": "Pizza topped with pepperoni",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disneyland/tomorrowland/disneyland-pizza-port-pepperoni-16x9.jpg?1673559845391"
        },
        "mapBubbleThumbLarge": {
          "title": "Pizza topped with pepperoni",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disneyland/tomorrowland/disneyland-pizza-port-pepperoni-1x1.jpg?1673559845392",
          "alt": "Pizza topped with pepperoni",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disneyland/tomorrowland/disneyland-pizza-port-pepperoni-1x1.jpg?1673559845392"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "pixar-themed-food"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "disneyFavorites": [
          "pixar-rec"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "tableService": [
          "dinner"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "10:00:00",
            "endTime": "22:30:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "354441",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service, Table Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "354441;entityType=restaurant",
          "name": "Alien Pizza Planet",
          "urlFriendlyId": "alien-pizza-planet",
          "url": "/dining/disneyland/alien-pizza-planet/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disneyland/tomorrowland/disneyland-pizza-port-pepperoni-1x1.jpg?1673559845392",
            "alt": "Pizza topped with pepperoni"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8117081571,
        "lng": -117.9168865347,
        "name": "Alien Pizza Planet",
        "id": "354441;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "16505450;entityType=restaurant",
      "urlFriendlyId": "fillmores-taste-in",
      "url": "/dining/disney-california-adventure/fillmores-taste-in/",
      "name": "Fillmore's Taste-In",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "16505425;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "fpo",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/fillmores-taste-in/fillmores-taste-in-00.jpg?1673560551219",
          "alt": "3 happy boys select fruit from Fillmore's Taste-In snack stand at Disney California Adventure Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/fillmores-taste-in/fillmores-taste-in-00.jpg?1673560551219"
        },
        "mapBubbleThumbLarge": {
          "title": "fpo",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/fillmores-taste-in/fillmores-taste-in-00-sq.jpg?1673560551220",
          "alt": "3 happy boys select fruit from Fillmore's Taste-In snack stand at Disney California Adventure Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/fillmores-taste-in/fillmores-taste-in-00-sq.jpg?1673560551220"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine",
          "healthy-selections-cuisine",
          "vegetarian-cuisine"
        ],
        "diningExperience": [
          "carts-kiosks"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "type": [
          "park-admission-required"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Early Entry",
            "startTime": "07:30:00",
            "endTime": "08:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          },
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "18:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "16505450",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "marker": {
        "card": {
          "id": "16505450;entityType=restaurant",
          "name": "Fillmore's Taste-In",
          "urlFriendlyId": "fillmores-taste-in",
          "url": "/dining/disney-california-adventure/fillmores-taste-in/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/fillmores-taste-in/fillmores-taste-in-00-sq.jpg?1673560551220",
            "alt": "3 happy boys select fruit from Fillmore's Taste-In snack stand at Disney California Adventure Park"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8061842526,
        "lng": -117.9194517521,
        "name": "Fillmore's Taste-In",
        "id": "16505450;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "368519;entityType=restaurant",
      "urlFriendlyId": "bengal-barbecue",
      "url": "/dining/disneyland/bengal-barbecue/",
      "name": "Bengal Barbecue",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336941;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Bengal Barbecue",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/bengal-barbecue/bengal-barbecue-00-sq.jpg?1673560017874",
          "alt": "Sign with wood carving of a tiger’s head, The Bengal Barbecue restaurant in Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/bengal-barbecue/bengal-barbecue-00-sq.jpg?1673560017874"
        },
        "finderStandardThumb": {
          "title": "Bengal Barbecue",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/bengal-barbecue/bengal-barbecue-00.jpg?1673560017873",
          "alt": "Sign with wood carving of a tiger’s head, The Bengal Barbecue restaurant in Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/bengal-barbecue/bengal-barbecue-00.jpg?1673560017873"
        },
        "mapBubbleThumbLarge": {
          "title": "Bengal Barbecue",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/bengal-barbecue/bengal-barbecue-00-sq.jpg?1673560017874",
          "alt": "Sign with wood carving of a tiger’s head, The Bengal Barbecue restaurant in Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/bengal-barbecue/bengal-barbecue-00-sq.jpg?1673560017874"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "guestRating": [
          "four-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "00:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "496060",
        "reviewCount": 451
      },
      "guestRating": 4,
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "368519",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "368519;entityType=restaurant",
          "name": "Bengal Barbecue",
          "urlFriendlyId": "bengal-barbecue",
          "url": "/dining/disneyland/bengal-barbecue/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/bengal-barbecue/bengal-barbecue-00-sq.jpg?1673560017874",
            "alt": "Sign with wood carving of a tiger’s head, The Bengal Barbecue restaurant in Disneyland Park"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.811555,
        "lng": -117.920299,
        "name": "Bengal Barbecue",
        "id": "368519;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "18674905;entityType=restaurant",
      "urlFriendlyId": "red-rose-taverne",
      "url": "/dining/disneyland/red-rose-taverne/",
      "name": "Red Rose Taverne",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336943;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/red-rose-taverne/DLR_DLP_RedRoseTaverne_ChickenCordonBleuSandwich_01052023_DSC05312DN-1x1.jpg?2023-01-23T14:32:26+00:00",
          "alt": "A Chicken Cordon Bleu Sandwich with a side of tater tots from Red Rose Taverne at Disneyland Resort",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/red-rose-taverne/DLR_DLP_RedRoseTaverne_ChickenCordonBleuSandwich_01052023_DSC05312DN-1x1.jpg?2023-01-23T14:32:26+00:00"
        },
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/red-rose-taverne/DLR_DLP_RedRoseTaverne_ChickenCordonBleuSandwich_01052023_DSC05312DN-16x9.jpg?2023-01-23T14:32:26+00:00",
          "alt": "A Chicken Cordon Bleu Sandwich with a side of tater tots from Red Rose Taverne at Disneyland Resort",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/red-rose-taverne/DLR_DLP_RedRoseTaverne_ChickenCordonBleuSandwich_01052023_DSC05312DN-16x9.jpg?2023-01-23T14:32:26+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/red-rose-taverne/DLR_DLP_RedRoseTaverne_ChickenCordonBleuSandwich_01052023_DSC05312DN-1x1.jpg?2023-01-23T14:32:26+00:00",
          "alt": "A Chicken Cordon Bleu Sandwich with a side of tater tots from Red Rose Taverne at Disneyland Resort",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/red-rose-taverne/DLR_DLP_RedRoseTaverne_ChickenCordonBleuSandwich_01052023_DSC05312DN-1x1.jpg?2023-01-23T14:32:26+00:00"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "09:00:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "18674905",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "18674905;entityType=restaurant",
          "name": "Red Rose Taverne",
          "urlFriendlyId": "red-rose-taverne",
          "url": "/dining/disneyland/red-rose-taverne/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/red-rose-taverne/DLR_DLP_RedRoseTaverne_ChickenCordonBleuSandwich_01052023_DSC05312DN-1x1.jpg?2023-01-23T14:32:26+00:00",
            "alt": "A Chicken Cordon Bleu Sandwich with a side of tater tots from Red Rose Taverne at Disneyland Resort"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8134853951,
        "lng": -117.9194486939,
        "name": "Red Rose Taverne",
        "id": "18674905;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "19268342;entityType=restaurant",
      "urlFriendlyId": "kat-sakas-kettle",
      "url": "/dining/disneyland/kat-sakas-kettle/",
      "name": "Kat Saka's Kettle",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "19025523;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "Popcorn covered in sugar glaze and spices",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/disneyland/kat-sakas-kettle/kettle-16x9.jpg?1673561365986",
          "alt": "Popcorn covered in sugar glaze and spices",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disneyland/kat-sakas-kettle/kettle-16x9.jpg?1673561365986"
        },
        "mapBubbleThumbLarge": {
          "title": "Popcorn covered in sugar glaze and spices",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/disneyland/kat-sakas-kettle/kettle-16x9.jpg?1673561365986",
          "alt": "Popcorn covered in sugar glaze and spices",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disneyland/kat-sakas-kettle/kettle-16x9.jpg?1673561365986"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "carts-kiosks"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "19:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "19268342",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "19268342;entityType=restaurant",
          "name": "Kat Saka's Kettle",
          "urlFriendlyId": "kat-sakas-kettle",
          "url": "/dining/disneyland/kat-sakas-kettle/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/disneyland/kat-sakas-kettle/kettle-16x9.jpg?1673561365986",
            "alt": "Popcorn covered in sugar glaze and spices"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.814495,
        "lng": -117.921639,
        "name": "Kat Saka's Kettle",
        "id": "19268342;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "369431;entityType=restaurant",
      "urlFriendlyId": "edelweiss-snacks",
      "url": "/dining/disneyland/edelweiss-snacks/",
      "name": "Edelweiss Snacks",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336943;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Edelweiss Snacks",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/edelweiss-snacks/edelweiss-snacks-00-sq.jpg?1681342557214",
          "alt": "The Edelweiss Snacks sign features a golden turkey and turkey leg.",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/edelweiss-snacks/edelweiss-snacks-00-sq.jpg?1681342557214"
        },
        "finderStandardThumb": {
          "title": "Edelweiss Snacks",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/edelweiss-snacks/edelweiss-snacks-00.jpg?1681342557214",
          "alt": "Edelweiss Snacks quick-service restaurant sign at Disneyland Park.",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/edelweiss-snacks/edelweiss-snacks-00.jpg?1681342557214"
        },
        "mapBubbleThumbLarge": {
          "title": "Edelweiss Snacks",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/edelweiss-snacks/edelweiss-snacks-00-sq.jpg?1681342557214",
          "alt": "The Edelweiss Snacks sign features a golden turkey and turkey leg.",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/edelweiss-snacks/edelweiss-snacks-00-sq.jpg?1681342557214"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "carts-kiosks"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "disneyFavorites": [
          "star-wars-rec"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "type": [
          "park-admission-required"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "21:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "369431",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "type": {
        "facets": "Mobile Orders"
      },
      "marker": {
        "card": {
          "id": "369431;entityType=restaurant",
          "name": "Edelweiss Snacks",
          "urlFriendlyId": "edelweiss-snacks",
          "url": "/dining/disneyland/edelweiss-snacks/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/edelweiss-snacks/edelweiss-snacks-00-sq.jpg?1681342557214",
            "alt": "The Edelweiss Snacks sign features a golden turkey and turkey leg."
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8137108075,
        "lng": -117.9177229106,
        "name": "Edelweiss Snacks",
        "id": "369431;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354456;entityType=restaurant",
      "urlFriendlyId": "royal-street-veranda",
      "url": "/dining/disneyland/royal-street-veranda/",
      "name": "Royal Street Veranda",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336946;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Royal Street Veranda",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/royal-street-veranda/royal-street-veranda-breadbowl-1x1.jpg?1673561820385",
          "alt": "Bread bowls at Royal Street Veranda",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/royal-street-veranda/royal-street-veranda-breadbowl-1x1.jpg?1673561820385"
        },
        "finderStandardThumb": {
          "title": "Royal Street Veranda",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/royal-street-veranda/royal-street-veranda-breadbowl-16x9.jpg?1673561820385",
          "alt": "Bread bowls at Royal Street Veranda",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/royal-street-veranda/royal-street-veranda-breadbowl-16x9.jpg?1673561820385"
        },
        "mapBubbleThumbLarge": {
          "title": "Royal Street Veranda",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/royal-street-veranda/royal-street-veranda-breadbowl-1x1.jpg?1673561820385",
          "alt": "Bread bowls at Royal Street Veranda",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/royal-street-veranda/royal-street-veranda-breadbowl-1x1.jpg?1673561820385"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "23:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "354456",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "354456;entityType=restaurant",
          "name": "Royal Street Veranda",
          "urlFriendlyId": "royal-street-veranda",
          "url": "/dining/disneyland/royal-street-veranda/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/royal-street-veranda/royal-street-veranda-breadbowl-1x1.jpg?1673561820385",
            "alt": "Bread bowls at Royal Street Veranda"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8112279116,
        "lng": -117.9209163877,
        "name": "Royal Street Veranda",
        "id": "354456;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "411876218;entityType=restaurant",
      "urlFriendlyId": "earl-of-sandwich-tavern",
      "url": "/dining/downtown-disney-district/earl-of-sandwich-tavern/",
      "name": "Earl of Sandwich® Tavern",
      "parkIds": [
        "336978;entityType=Entertainment-Venue"
      ],
      "media": {
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/earl-tavern/Earl_Pizza-5-16x9.jpg?2023-03-29T18:16:35+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/earl-tavern/Earl_Pizza-5-16x9.jpg?2023-03-29T18:16:35+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/earl-tavern/Earl_Pizza-5-1x1.jpg?2023-03-29T18:16:35+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/earl-tavern/Earl_Pizza-5-1x1.jpg?2023-03-29T18:16:35+00:00"
        }
      },
      "facets": {
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "tableService": [
          "casual-dining",
          "lunch",
          "dinner"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Downtown Disney District",
      "facilityId": "411876218",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Casual Dining"
      },
      "marker": {
        "card": {
          "id": "411876218;entityType=restaurant",
          "name": "Earl of Sandwich® Tavern",
          "urlFriendlyId": "earl-of-sandwich-tavern",
          "url": "/dining/downtown-disney-district/earl-of-sandwich-tavern/",
          "land": "Downtown Disney District",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/earl-tavern/Earl_Pizza-5-1x1.jpg?2023-03-29T18:16:35+00:00",
            "alt": ""
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8088126427,
        "lng": -117.9203835129,
        "name": "Earl of Sandwich® Tavern",
        "id": "411876218;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354171;entityType=restaurant",
      "urlFriendlyId": "senor-buzz-churros",
      "url": "/dining/disney-california-adventure/senor-buzz-churros/",
      "name": "Señor Buzz Churros",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "19005291;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "A sign featuring Buzz Lightyear identifies Senor Buzz Churros, an eatery",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/senor-buzz-churros-v2-1x1.jpg?1673561842940",
          "alt": "A sign featuring Buzz Lightyear identifies Senor Buzz Churros, an eatery",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/senor-buzz-churros-v2-1x1.jpg?1673561842940"
        },
        "finderStandardThumb": {
          "title": "A sign featuring Buzz Lightyear identifies Senor Buzz Churros, an eatery",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/senor-buzz-churros-v2-16x9.jpg?1673561842939",
          "alt": "A sign featuring Buzz Lightyear identifies Senor Buzz Churros, an eatery",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/senor-buzz-churros-v2-16x9.jpg?1673561842939"
        },
        "mapBubbleThumbLarge": {
          "title": "A sign featuring Buzz Lightyear identifies Senor Buzz Churros, an eatery",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/senor-buzz-churros-v2-1x1.jpg?1673561842939",
          "alt": "A sign featuring Buzz Lightyear identifies Senor Buzz Churros, an eatery",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/senor-buzz-churros-v2-1x1.jpg?1673561842939"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "carts-kiosks"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "09:00:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "354171",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "354171;entityType=restaurant",
          "name": "Señor Buzz Churros",
          "urlFriendlyId": "senor-buzz-churros",
          "url": "/dining/disney-california-adventure/senor-buzz-churros/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/senor-buzz-churros-v2-1x1.jpg?1673561842939",
            "alt": "A sign featuring Buzz Lightyear identifies Senor Buzz Churros, an eatery"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.804736,
        "lng": -117.921597,
        "name": "Señor Buzz Churros",
        "id": "354171;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "18384059;entityType=restaurant",
      "urlFriendlyId": "food-and-wine-festival-marketplaces",
      "url": "/dining/disney-california-adventure/food-and-wine-festival-marketplaces/",
      "name": "Festival Marketplaces at the Disney California Adventure Food & Wine Festival",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "media": {
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/lifestyle/0421ZO_1205GC_xak-16x9.jpg?2023-02-28T22:26:38+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/lifestyle/0421ZO_1205GC_xak-16x9.jpg?2023-02-28T22:26:38+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/lifestyle/0421ZO_1205GC_xak-1x1.jpg?2023-02-28T22:26:38+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/lifestyle/0421ZO_1205GC_xak-1x1.jpg?2023-02-28T22:26:38+00:00"
        }
      },
      "facets": {
        "cuisine": [
          "californian-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "specialEvent": [
          "food-and-wine"
        ],
        "type": [
          "park-admission-required"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "locationName": "Disney California Adventure Park",
      "facilityId": "18384059",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "marker": {
        "card": {
          "id": "18384059;entityType=restaurant",
          "name": "Festival Marketplaces at the Disney California Adventure Food & Wine Festival",
          "urlFriendlyId": "food-and-wine-festival-marketplaces",
          "url": "/dining/disney-california-adventure/food-and-wine-festival-marketplaces/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/lifestyle/0421ZO_1205GC_xak-1x1.jpg?2023-02-28T22:26:38+00:00",
            "alt": ""
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.808642,
        "lng": -117.918956,
        "name": "Disney California Adventure Food & Wine Festival",
        "id": "18382359;entityType=point-of-interest",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "19624439;entityType=restaurant",
      "urlFriendlyId": "shawarma-palace",
      "url": "/dining/disney-california-adventure/shawarma-palace/",
      "name": "Shawarma Palace",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "19459756;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/disneyland/destinations/disney-california-adventure/avengers-campus/DLR_DCA_AvengersCampus_Schwarma_Wrapper_yellow_1x1.jpg?1686163299939",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/avengers-campus/DLR_DCA_AvengersCampus_Schwarma_Wrapper_yellow_1x1.jpg?1686163299939"
        },
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disney-california-adventure/avengers-campus/DLR_DCA_AvengersCampus_Schwarma_Wrapper_yellow_16x9.jpg?1686163299940",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/avengers-campus/DLR_DCA_AvengersCampus_Schwarma_Wrapper_yellow_16x9.jpg?1686163299940"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disney-california-adventure/avengers-campus/DLR_DCA_AvengersCampus_Schwarma_Wrapper_yellow_1x1.jpg?1686163299940",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/avengers-campus/DLR_DCA_AvengersCampus_Schwarma_Wrapper_yellow_1x1.jpg?1686163299940"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "diningExperience": [
          "carts-kiosks"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {
        "advancedFinderTheme": "ac"
      },
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "19624439",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "19624439;entityType=restaurant",
          "name": "Shawarma Palace",
          "urlFriendlyId": "shawarma-palace",
          "url": "/dining/disney-california-adventure/shawarma-palace/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disney-california-adventure/avengers-campus/DLR_DCA_AvengersCampus_Schwarma_Wrapper_yellow_1x1.jpg?1686163299940",
            "alt": ""
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.80653,
        "lng": -117.918023,
        "name": "Shawarma Palace",
        "id": "19624439;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354321;entityType=restaurant",
      "urlFriendlyId": "jamba",
      "url": "/dining/downtown-disney-district/jamba/",
      "name": "Jamba®",
      "parkIds": [
        "336978;entityType=Entertainment-Venue"
      ],
      "media": {
        "mapBubbleThumbSmall": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/disneyland/dining/downtown-disney-district/jamba/jamba-juice-fruits-smoothie-1x1.jpg?1611691853184",
          "alt": "Strawberries, a bowl of sliced fruit with granola and berries, a smoothie in a cup and a slice of toast topped with blueberries, sliced bananas and honey",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/downtown-disney-district/jamba/jamba-juice-fruits-smoothie-1x1.jpg?1611691853184"
        },
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/downtown-disney-district/jamba/jamba-juice-fruits-smoothie-16x9.jpg?1611691853184",
          "alt": "Strawberries, a bowl of sliced fruit with granola and berries, a smoothie in a cup and a slice of toast topped with blueberries, sliced bananas and honey",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/downtown-disney-district/jamba/jamba-juice-fruits-smoothie-16x9.jpg?1611691853184"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/downtown-disney-district/jamba/jamba-juice-fruits-smoothie-1x1.jpg?1611691853184",
          "alt": "Strawberries, a bowl of sliced fruit with granola and berries, a smoothie in a cup and a slice of toast topped with blueberries, sliced bananas and honey",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/downtown-disney-district/jamba/jamba-juice-fruits-smoothie-1x1.jpg?1611691853184"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "validDays": [
          "jamba-juice-special-discount-messaging"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "07:00:00",
            "endTime": "00:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Downtown Disney District",
      "facilityId": "354321",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "354321;entityType=restaurant",
          "name": "Jamba®",
          "urlFriendlyId": "jamba",
          "url": "/dining/downtown-disney-district/jamba/",
          "land": "Downtown Disney District",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/downtown-disney-district/jamba/jamba-juice-fruits-smoothie-1x1.jpg?1611691853184",
            "alt": "Strawberries, a bowl of sliced fruit with granola and berries, a smoothie in a cup and a slice of toast topped with blueberries, sliced bananas and honey"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8086291875,
        "lng": -117.9222433877,
        "name": "Jamba®",
        "id": "354321;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354372;entityType=restaurant",
      "urlFriendlyId": "napa-rose",
      "url": "/dining/grand-californian-hotel/napa-rose/",
      "name": "Napa Rose",
      "parkIds": [
        "334222;entityType=resort"
      ],
      "media": {
        "mapBubbleThumbSmall": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/napa-rose/14-5-20_DC_200b-1x1.jpg?2023-03-10T22:14:47+00:00",
          "alt": "The spacious dining room at Napa Rose in Disney’s Grand Californian Hotel & Spa ",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/napa-rose/14-5-20_DC_200b-1x1.jpg?2023-03-10T22:14:47+00:00"
        },
        "finderStandardThumb": {
          "title": "The spacious dining room at Napa Rose in Disney’s Grand Californian Hotel & Spa",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/napa-rose/14-5-20_DC_200b-16x9.jpg?2023-03-10T22:14:47+00:00",
          "alt": "The spacious dining room at Napa Rose in Disney’s Grand Californian Hotel & Spa",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/napa-rose/14-5-20_DC_200b-16x9.jpg?2023-03-10T22:14:47+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/napa-rose/14-5-20_DC_200b-1x1.jpg?2023-03-10T22:14:47+00:00",
          "alt": "The spacious dining room at Napa Rose in Disney’s Grand Californian Hotel & Spa ",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/napa-rose/14-5-20_DC_200b-1x1.jpg?2023-03-10T22:14:47+00:00"
        }
      },
      "facets": {
        "checkAvailability": [
          "checkavailmodule"
        ],
        "cuisine": [
          "american-cuisine",
          "californian-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "guestRating": [
          "four-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$$$$"
        ],
        "tableService": [
          "signature-dining",
          "table-service",
          "reservations-accepted"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "17:30:00",
            "endTime": "21:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "341583",
        "reviewCount": 1007
      },
      "guestRating": 4.5,
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/368960"
      ],
      "facilityId": "354372",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Reservations Accepted, Fine/Signature Dining"
      },
      "marker": {
        "card": {
          "id": "354372;entityType=restaurant",
          "name": "Napa Rose",
          "urlFriendlyId": "napa-rose",
          "url": "/dining/grand-californian-hotel/napa-rose/",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/napa-rose/14-5-20_DC_200b-1x1.jpg?2023-03-10T22:14:47+00:00",
            "alt": "The spacious dining room at Napa Rose in Disney’s Grand Californian Hotel & Spa "
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8078731418,
        "lng": -117.9215664344,
        "name": "Napa Rose",
        "id": "354372;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "18516133;entityType=restaurant",
      "urlFriendlyId": "lemonade",
      "url": "/dining/lemonade/",
      "name": "Lemonade Carts",
      "parkIds": [
        "336894;entityType=theme-park",
        "330339;entityType=theme-park"
      ],
      "landId": "m",
      "media": {
        "finderStandardThumb": {
          "title": "Lemonade",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/lemonade_cart-03.jpg?1673559214977",
          "alt": "Three cups of icy cold frozen lemonade are topped with a swirl",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/lemonade_cart-03.jpg?1673559214977"
        },
        "mapBubbleThumbLarge": {
          "title": "Lemonade",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/lemonade_cart-03-sq.jpg?1673559214978",
          "alt": "Three cups of icy cold frozen lemonade are topped with a swirl",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/lemonade_cart-03-sq.jpg?1673559214978"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "carts-kiosks"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "locationName": "Multiple Locations",
      "locationsList": {
        "330339;entityType=theme-park": "Disneyland Park",
        "336894;entityType=theme-park": "Disney California Adventure Park"
      },
      "facilityId": "18516133",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "parkLocations": {
        "336894;entityType=theme-park": {
          "lat": 33.806111,
          "lng": -117.922375,
          "name": "Lemonade near Golden Zephyr",
          "id": "18518198;entityType=point-of-interest",
          "closeButtonLabel": "finder.maps.closePopUpButtonText",
          "pin": "activities"
        },
        "330339;entityType=theme-park": {
          "lat": 33.81240991,
          "lng": -117.9205217,
          "name": "Lemonade at Ship to Shore Marketplace",
          "id": "18615822;entityType=point-of-interest",
          "closeButtonLabel": "finder.maps.closePopUpButtonText",
          "pin": "activities"
        }
      },
      "marker": {
        "card": {
          "id": "18516133;entityType=restaurant",
          "name": "Lemonade Carts",
          "urlFriendlyId": "lemonade",
          "url": "/dining/lemonade/",
          "land": "Churros & Lemonade in Critter Country",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/lemonade_cart-03-sq.jpg?1673559214978",
            "alt": "Three cups of icy cold frozen lemonade are topped with a swirl"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.81239074,
        "lng": -117.922499,
        "name": "Churros & Lemonade in Critter Country",
        "id": "18518188;entityType=point-of-interest",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "16488171;entityType=restaurant",
      "urlFriendlyId": "earl-of-sandwich",
      "url": "/dining/downtown-disney-district/earl-of-sandwich/",
      "name": "Earl of Sandwich®",
      "parkIds": [
        "336978;entityType=Entertainment-Venue"
      ],
      "media": {
        "finderStandardThumb": {
          "title": "A club sandwich with turkey, bacon, Swiss cheese, lettuce and tomato",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/downtown-disney/earl-of-sandwich/earl-of-sandwich-club-16x9.jpg?1675702433368",
          "alt": "A club sandwich with turkey, bacon, Swiss cheese, lettuce and tomato",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/downtown-disney/earl-of-sandwich/earl-of-sandwich-club-16x9.jpg?1675702433368"
        },
        "mapBubbleThumbLarge": {
          "title": "A club sandwich with turkey, bacon, Swiss cheese, lettuce and tomato",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/downtown-disney/earl-of-sandwich/earl-of-sandwich-club-1x1.jpg?1675702433368",
          "alt": "A club sandwich with turkey, bacon, Swiss cheese, lettuce and tomato",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/downtown-disney/earl-of-sandwich/earl-of-sandwich-club-1x1.jpg?1675702433368"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "discounts": [
          "disney-vacation-club-member",
          "disney-visa-cardholder"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "tableService": [
          "breakfast"
        ],
        "validDays": [
          "every-day",
          "every-day-no-alcohol-tax-tip"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Downtown Disney District",
      "facilityId": "16488171",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service, Table Service",
      "type": {
        "facets": "Breakfast, Quick Service"
      },
      "marker": {
        "card": {
          "id": "16488171;entityType=restaurant",
          "name": "Earl of Sandwich®",
          "urlFriendlyId": "earl-of-sandwich",
          "url": "/dining/downtown-disney-district/earl-of-sandwich/",
          "land": "Downtown Disney District",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/downtown-disney/earl-of-sandwich/earl-of-sandwich-club-1x1.jpg?1675702433368",
            "alt": "A club sandwich with turkey, bacon, Swiss cheese, lettuce and tomato"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.808844,
        "lng": -117.920174,
        "name": "Earl of Sandwich®",
        "id": "16488171;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "19197204;entityType=restaurant",
      "urlFriendlyId": "tropical-hideaway",
      "url": "/dining/disneyland/tropical-hideaway/",
      "name": "The Tropical Hideaway",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336941;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "The exterior of The Tropical Hideaway lit at night",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/disneyland/tropical-hideaway/tropical-hideaway-architect-atmosphere-16x9.jpg?1673562084897",
          "alt": "The exterior of The Tropical Hideaway lit at night",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disneyland/tropical-hideaway/tropical-hideaway-architect-atmosphere-16x9.jpg?1673562084897"
        },
        "mapBubbleThumbLarge": {
          "title": "The exterior of The Tropical Hideaway lit at night",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/disneyland/tropical-hideaway/tropical-hideaway-architect-atmosphere-1x1.jpg?1673562084897",
          "alt": "The exterior of The Tropical Hideaway lit at night",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disneyland/tropical-hideaway/tropical-hideaway-architect-atmosphere-1x1.jpg?1673562084897"
        }
      },
      "facets": {
        "cuisine": [
          "vegetarian-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "00:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "19197204",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "19197204;entityType=restaurant",
          "name": "The Tropical Hideaway",
          "urlFriendlyId": "tropical-hideaway",
          "url": "/dining/disneyland/tropical-hideaway/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/disneyland/tropical-hideaway/tropical-hideaway-architect-atmosphere-1x1.jpg?1673562084897",
            "alt": "The exterior of The Tropical Hideaway lit at night"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.811438,
        "lng": -117.919659,
        "name": "The Tropical Hideaway",
        "id": "19197204;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "16027513;entityType=restaurant",
      "urlFriendlyId": "trader-sams",
      "url": "/dining/disneyland-hotel/trader-sams/",
      "name": "Trader Sam's Enchanted Tiki Bar",
      "parkIds": [
        "334223;entityType=resort"
      ],
      "media": {
        "finderStandardThumb": {
          "title": "Trader Sams",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/resort-dining/disneyland-hotel/trader-sams/trader-sams-00.jpg?1675184495946",
          "alt": "Lit tiki torches at night along the path to Trader Sam's Enchanted Tiki Bar at Disneyland Hotel",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/resort-dining/disneyland-hotel/trader-sams/trader-sams-00.jpg?1675184495946"
        },
        "mapBubbleThumbLarge": {
          "title": "Trader Sams",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/resort-dining/disneyland-hotel/trader-sams/trader-sams-00-sq.jpg?1675184495946",
          "alt": "Lit tiki torches at night along the path to Trader Sam's Enchanted Tiki Bar at Disneyland Hotel",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/resort-dining/disneyland-hotel/trader-sams/trader-sams-00-sq.jpg?1675184495946"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "behaviorType": [
          "walkupWaitList"
        ],
        "checkAvailability": [
          "checkavailmodule"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "otherDining": [
          "bars-and-lounges"
        ],
        "priceRange": [
          "$",
          "$$"
        ],
        "tableService": [
          "table-service",
          "reservations-accepted"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:30:00",
            "endTime": "23:55:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/16045718",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/19630675",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/19630674"
      ],
      "facilityId": "16027513",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Bars & Lounges, Reservations Accepted"
      },
      "marker": {
        "card": {
          "id": "16027513;entityType=restaurant",
          "name": "Trader Sam's Enchanted Tiki Bar",
          "urlFriendlyId": "trader-sams",
          "url": "/dining/disneyland-hotel/trader-sams/",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/resort-dining/disneyland-hotel/trader-sams/trader-sams-00-sq.jpg?1675184495946",
            "alt": "Lit tiki torches at night along the path to Trader Sam's Enchanted Tiki Bar at Disneyland Hotel"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8082908451,
        "lng": -117.9265519014,
        "name": "Trader Sam's Enchanted Tiki Bar",
        "id": "16027513;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "16514168;entityType=restaurant",
      "urlFriendlyId": "ghirardelli-soda-fountain-and-chocolate-shop",
      "url": "/dining/disney-california-adventure/ghirardelli-soda-fountain-and-chocolate-shop/",
      "name": "Ghirardelli® Soda Fountain and Chocolate Shop",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "336977;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "fpo",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/ghirardelli-soda-fountain-and-chocolate-shop/ghirardelli-soda-fountain-and-chocolate-shop-00.jpg?1673561008123",
          "alt": "Entrance sign for Ghirardelli Soda Fountain and Chocolate Shop",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/ghirardelli-soda-fountain-and-chocolate-shop/ghirardelli-soda-fountain-and-chocolate-shop-00.jpg?1673561008123"
        },
        "mapBubbleThumbLarge": {
          "title": "fpo",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/ghirardelli-soda-fountain-and-chocolate-shop/ghirardelli-soda-fountain-and-chocolate-shop-00-sq.jpg?1673561008123",
          "alt": "Entrance sign for Ghirardelli Soda Fountain and Chocolate Shop",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/ghirardelli-soda-fountain-and-chocolate-shop/ghirardelli-soda-fountain-and-chocolate-shop-00-sq.jpg?1673561008123"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "discounts": [
          "disney-visa-cardholder"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "16514168",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "16514168;entityType=restaurant",
          "name": "Ghirardelli® Soda Fountain and Chocolate Shop",
          "urlFriendlyId": "ghirardelli-soda-fountain-and-chocolate-shop",
          "url": "/dining/disney-california-adventure/ghirardelli-soda-fountain-and-chocolate-shop/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/ghirardelli-soda-fountain-and-chocolate-shop/ghirardelli-soda-fountain-and-chocolate-shop-00-sq.jpg?1673561008123",
            "alt": "Entrance sign for Ghirardelli Soda Fountain and Chocolate Shop"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.80599,
        "lng": -117.919614,
        "name": "Ghirardelli® Soda Fountain and Chocolate Shop",
        "id": "16514168;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354450;entityType=restaurant",
      "urlFriendlyId": "river-belle-terrace",
      "url": "/dining/disneyland/river-belle-terrace/",
      "name": "River Belle Terrace",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336944;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/riverbelle-terrace/DLR_DLP_Awakening_MobileOrder_RiverBelle_SkilletBrisketMacNCheese_130820_07900DN-16x9.jpg?2021-06-03T22:20:12+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/riverbelle-terrace/DLR_DLP_Awakening_MobileOrder_RiverBelle_SkilletBrisketMacNCheese_130820_07900DN-16x9.jpg?2021-06-03T22:20:12+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/riverbelle-terrace/DLR_DLP_Awakening_MobileOrder_RiverBelle_SkilletBrisketMacNCheese_130820_07900DN-1x1.jpg?2021-06-03T22:20:12+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/riverbelle-terrace/DLR_DLP_Awakening_MobileOrder_RiverBelle_SkilletBrisketMacNCheese_130820_07900DN-1x1.jpg?2021-06-03T22:20:12+00:00"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "behaviorType": [
          "walkupWaitList"
        ],
        "checkAvailability": [
          "checkavailmodule"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "diningInterests": [
          "table-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member",
          "disney-visa-cardholder"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "guestRating": [
          "three-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$$"
        ],
        "reservationOfferings": [
          "add-ons-available"
        ],
        "tableService": [
          "casual-dining",
          "table-service",
          "reservations-accepted"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:30:00",
            "endTime": "20:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "2347486",
        "reviewCount": 455
      },
      "guestRating": 3.5,
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/18072101",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/18247472",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/19071401"
      ],
      "locationName": "Disneyland Park",
      "facilityId": "354450",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Casual Dining, Reservations Accepted"
      },
      "marker": {
        "card": {
          "id": "354450;entityType=restaurant",
          "name": "River Belle Terrace",
          "urlFriendlyId": "river-belle-terrace",
          "url": "/dining/disneyland/river-belle-terrace/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/riverbelle-terrace/DLR_DLP_Awakening_MobileOrder_RiverBelle_SkilletBrisketMacNCheese_130820_07900DN-1x1.jpg?2021-06-03T22:20:12+00:00",
            "alt": ""
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8116150928,
        "lng": -117.9205917872,
        "name": "River Belle Terrace",
        "id": "354450;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354396;entityType=restaurant",
      "urlFriendlyId": "angry-dogs",
      "url": "/dining/disney-california-adventure/angry-dogs/",
      "name": "Angry Dogs",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "19005291;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "The sign for Angry Dogs features a person clenching his teeth with a flaming hotdog overhead",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/angry-dogs-1x1.jpg?1673559975646",
          "alt": "The sign for Angry Dogs features a person clenching his teeth with a flaming hotdog overhead",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/angry-dogs-1x1.jpg?1673559975646"
        },
        "finderStandardThumb": {
          "title": "The sign for Angry Dogs features a person clenching his teeth with a flaming hotdog overhead",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/angry-dogs-16x9.jpg?1673559975645",
          "alt": "The sign for Angry Dogs features a person clenching his teeth with a flaming hotdog overhead",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/angry-dogs-16x9.jpg?1673559975645"
        },
        "mapBubbleThumbLarge": {
          "title": "The sign for Angry Dogs features a person clenching his teeth with a flaming hotdog overhead",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/angry-dogs-1x1.jpg?1673559975646",
          "alt": "The sign for Angry Dogs features a person clenching his teeth with a flaming hotdog overhead",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/angry-dogs-1x1.jpg?1673559975646"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "carts-kiosks"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "10:00:00",
            "endTime": "21:15:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "354396",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "354396;entityType=restaurant",
          "name": "Angry Dogs",
          "urlFriendlyId": "angry-dogs",
          "url": "/dining/disney-california-adventure/angry-dogs/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/angry-dogs-1x1.jpg?1673559975646",
            "alt": "The sign for Angry Dogs features a person clenching his teeth with a flaming hotdog overhead"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8048180856,
        "lng": -117.9219507324,
        "name": "Angry Dogs",
        "id": "354396;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "368932;entityType=restaurant",
      "urlFriendlyId": "lucky-fortune-cookery-dlr",
      "url": "/dining/disney-california-adventure/lucky-fortune-cookery/",
      "name": "Lucky Fortune Cookery",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "336977;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "A plate of teriyaki chicken with sautéed vegetables and steamed rice sits on a slate placement with chopsticks on the side",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/disneyland/dining/disney-california-adventure/lucky-fortune-cookery/lucky-fortune-cookery-teriyaki-1x1.jpg?1673561410907",
          "alt": "A plate of teriyaki chicken with sautéed vegetables and steamed rice sits on a slate placement with chopsticks on the side",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disney-california-adventure/lucky-fortune-cookery/lucky-fortune-cookery-teriyaki-1x1.jpg?1673561410907"
        },
        "finderStandardThumb": {
          "title": "A plate of teriyaki chicken with sautéed vegetables and steamed rice sits on a slate placement with chopsticks on the side",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/disney-california-adventure/lucky-fortune-cookery/lucky-fortune-cookery-teriyaki-16x9.jpg?1673561410906",
          "alt": "A plate of teriyaki chicken with sautéed vegetables and steamed rice sits on a slate placement with chopsticks on the side",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disney-california-adventure/lucky-fortune-cookery/lucky-fortune-cookery-teriyaki-16x9.jpg?1673561410906"
        },
        "mapBubbleThumbLarge": {
          "title": "A plate of teriyaki chicken with sautéed vegetables and steamed rice sits on a slate placement with chopsticks on the side",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/disney-california-adventure/lucky-fortune-cookery/lucky-fortune-cookery-teriyaki-1x1.jpg?1673561410907",
          "alt": "A plate of teriyaki chicken with sautéed vegetables and steamed rice sits on a slate placement with chopsticks on the side",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disney-california-adventure/lucky-fortune-cookery/lucky-fortune-cookery-teriyaki-1x1.jpg?1673561410907"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "asian-cuisine"
        ],
        "diningExperience": [
          "pixar-themed-food"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "guestRating": [
          "three-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "specialEvent": [
          "food-and-wine"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "21:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "3314625",
        "reviewCount": 180
      },
      "guestRating": 3.5,
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "368932",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "368932;entityType=restaurant",
          "name": "Lucky Fortune Cookery",
          "urlFriendlyId": "lucky-fortune-cookery-dlr",
          "url": "/dining/disney-california-adventure/lucky-fortune-cookery/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/disney-california-adventure/lucky-fortune-cookery/lucky-fortune-cookery-teriyaki-1x1.jpg?1673561410907",
            "alt": "A plate of teriyaki chicken with sautéed vegetables and steamed rice sits on a slate placement with chopsticks on the side"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8057921835,
        "lng": -117.9198476908,
        "name": "Lucky Fortune Cookery",
        "id": "368932;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354474;entityType=restaurant",
      "urlFriendlyId": "storytellers-cafe",
      "url": "/dining/grand-californian-hotel/storytellers-cafe/",
      "name": "Storytellers Cafe",
      "parkIds": [
        "334222;entityType=resort"
      ],
      "media": {
        "finderStandardThumb": {
          "title": "A daughter and her father enjoy a laugh at the dinner table with their family",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/grand-californian-hotel/storytellers-cafe/family-storytellers-cafe-16x9.jpg?1684170866186",
          "alt": "A daughter and her father enjoy a laugh at the dinner table with their family",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/grand-californian-hotel/storytellers-cafe/family-storytellers-cafe-16x9.jpg?1684170866186"
        },
        "mapBubbleThumbLarge": {
          "title": "A daughter and her father enjoy a laugh at the dinner table with their family",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/grand-californian-hotel/storytellers-cafe/family-storytellers-cafe-1x1.jpg?1684170866186",
          "alt": "A daughter and her father enjoy a laugh at the dinner table with their family",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/grand-californian-hotel/storytellers-cafe/family-storytellers-cafe-1x1.jpg?1684170866186"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "behaviorType": [
          "walkupWaitList"
        ],
        "checkAvailability": [
          "checkavailmodule"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "discounts": [
          "disney-vacation-club-member",
          "disney-visa-cardholder"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "guestRating": [
          "four-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$$$"
        ],
        "reservationOfferings": [
          "add-ons-available"
        ],
        "tableService": [
          "character-dining",
          "special-unique-dining",
          "table-service",
          "buffet-family-style",
          "reservations-accepted",
          "character-breakfast",
          "breakfast",
          "lunch-no-characters",
          "Dinner-no-characters"
        ],
        "validDays": [
          "every-day",
          "every-day-excludes-alcohol-gratuity-tax"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "07:00:00",
            "endTime": "21:30:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "643579",
        "reviewCount": 1319
      },
      "guestRating": 4,
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/368976",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/18988832",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/18991455"
      ],
      "facilityId": "354474",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Breakfast, Buffet/Family Style"
      },
      "marker": {
        "card": {
          "id": "354474;entityType=restaurant",
          "name": "Storytellers Cafe",
          "urlFriendlyId": "storytellers-cafe",
          "url": "/dining/grand-californian-hotel/storytellers-cafe/",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/grand-californian-hotel/storytellers-cafe/family-storytellers-cafe-1x1.jpg?1684170866186",
            "alt": "A daughter and her father enjoy a laugh at the dinner table with their family"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.807889,
        "lng": -117.921828,
        "name": "Storytellers Cafe",
        "id": "354474;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354462;entityType=restaurant",
      "urlFriendlyId": "schmoozies-smoothies",
      "url": "/dining/disney-california-adventure/schmoozies-smoothies/",
      "name": "Schmoozies!",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "336981;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "Schmoozies",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/schmoozies/schmoozies-00.jpg?1673561835231",
          "alt": "Entrance sign for Schmoozies! the smoothie bar at Disney California Adventure Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/schmoozies/schmoozies-00.jpg?1673561835231"
        },
        "mapBubbleThumbLarge": {
          "title": "Schmoozies",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/schmoozies/schmoozies-00-sq.jpg?1673561835231",
          "alt": "Entrance sign for Schmoozies! the smoothie bar at Disney California Adventure Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/schmoozies/schmoozies-00-sq.jpg?1673561835231"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "pixar-themed-food"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "type": [
          "park-admission-required"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "09:00:00",
            "endTime": "19:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "354462",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "354462;entityType=restaurant",
          "name": "Schmoozies!",
          "urlFriendlyId": "schmoozies-smoothies",
          "url": "/dining/disney-california-adventure/schmoozies-smoothies/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/schmoozies/schmoozies-00-sq.jpg?1673561835231",
            "alt": "Entrance sign for Schmoozies! the smoothie bar at Disney California Adventure Park"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.807759,
        "lng": -117.917651,
        "name": "Schmoozies!",
        "id": "354462;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "18409951;entityType=restaurant",
      "urlFriendlyId": "hollywood-lounge",
      "url": "/dining/disney-california-adventure/hollywood-lounge/",
      "name": "Hollywood Lounge",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "336981;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Specialty beverage with salted rim",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/food-and-wine-festival-marketplaces/2018/festival-marketplaces-FW-the-brewhouse-hollywood-lounge-backlot-michelada-1x1.jpg?1673561247991",
          "alt": "Specialty beverage with salted rim",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/food-and-wine-festival-marketplaces/2018/festival-marketplaces-FW-the-brewhouse-hollywood-lounge-backlot-michelada-1x1.jpg?1673561247991"
        },
        "finderStandardThumb": {
          "title": "Specialty beverage with salted rim",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/food-and-wine-festival-marketplaces/2018/festival-marketplaces-FW-the-brewhouse-hollywood-lounge-backlot-michelada-16x9.jpg?1673561247990",
          "alt": "Specialty beverage with salted rim",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/food-and-wine-festival-marketplaces/2018/festival-marketplaces-FW-the-brewhouse-hollywood-lounge-backlot-michelada-16x9.jpg?1673561247990"
        },
        "mapBubbleThumbLarge": {
          "title": "Specialty beverage with salted rim",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/food-and-wine-festival-marketplaces/2018/festival-marketplaces-FW-the-brewhouse-hollywood-lounge-backlot-michelada-1x1.jpg?1673561247991",
          "alt": "Specialty beverage with salted rim",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/food-and-wine-festival-marketplaces/2018/festival-marketplaces-FW-the-brewhouse-hollywood-lounge-backlot-michelada-1x1.jpg?1673561247991"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "otherDining": [
          "bars-and-lounges"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "type": [
          "park-admission-required"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "18409951",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Bars & Lounges, Mobile Orders"
      },
      "marker": {
        "card": {
          "id": "18409951;entityType=restaurant",
          "name": "Hollywood Lounge",
          "urlFriendlyId": "hollywood-lounge",
          "url": "/dining/disney-california-adventure/hollywood-lounge/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/food-and-wine-festival-marketplaces/2018/festival-marketplaces-FW-the-brewhouse-hollywood-lounge-backlot-michelada-1x1.jpg?1673561247991",
            "alt": "Specialty beverage with salted rim"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.808119,
        "lng": -117.917074,
        "name": "Hollywood Lounge",
        "id": "18409951;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "16513886;entityType=restaurant",
      "urlFriendlyId": "fiddler-fifer-and-practical-cafe",
      "url": "/dining/disney-california-adventure/fiddler-fifer-and-practical-cafe/",
      "name": "Fiddler, Fifer & Practical Cafe",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "16505397;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Fiddler Fifer and Practical Cafe",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/fiddler-fifer-and-practical-cafe/fiddler-fifer-and-practical-cafe-00-sq.jpg?1673560539618",
          "alt": "Entrance sign, lit at night, for Fiddler, Fifer, and Practical Cafe",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/fiddler-fifer-and-practical-cafe/fiddler-fifer-and-practical-cafe-00-sq.jpg?1673560539618"
        },
        "finderStandardThumb": {
          "title": "Fiddler Fifer and Practical Cafe",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/fiddler-fifer-and-practical-cafe/fiddler-fifer-and-practical-cafe-00.jpg?1673560539617",
          "alt": "Entrance sign, lit at night, for Fiddler, Fifer, and Practical Cafe",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/fiddler-fifer-and-practical-cafe/fiddler-fifer-and-practical-cafe-00.jpg?1673560539617"
        },
        "mapBubbleThumbLarge": {
          "title": "Fiddler Fifer and Practical Cafe",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/fiddler-fifer-and-practical-cafe/fiddler-fifer-and-practical-cafe-00-sq.jpg?1673560539618",
          "alt": "Entrance sign, lit at night, for Fiddler, Fifer, and Practical Cafe",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/fiddler-fifer-and-practical-cafe/fiddler-fifer-and-practical-cafe-00-sq.jpg?1673560539618"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine",
          "bakery-cuisine-cuisine"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "tableService": [
          "breakfast"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day-excludes-alcohol-gratuity-tax"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Early Entry",
            "startTime": "07:30:00",
            "endTime": "08:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          },
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "22:30:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "16513886",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service, Table Service",
      "type": {
        "facets": "Breakfast, Quick Service"
      },
      "marker": {
        "card": {
          "id": "16513886;entityType=restaurant",
          "name": "Fiddler, Fifer & Practical Cafe",
          "urlFriendlyId": "fiddler-fifer-and-practical-cafe",
          "url": "/dining/disney-california-adventure/fiddler-fifer-and-practical-cafe/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/fiddler-fifer-and-practical-cafe/fiddler-fifer-and-practical-cafe-00-sq.jpg?1673560539618",
            "alt": "Entrance sign, lit at night, for Fiddler, Fifer, and Practical Cafe"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8078250918,
        "lng": -117.91936303,
        "name": "Fiddler, Fifer & Practical Cafe",
        "id": "16513886;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "19624444;entityType=restaurant",
      "urlFriendlyId": "terran-treats",
      "url": "/dining/disney-california-adventure/terran-treats/",
      "name": "Terran Treats",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "19459756;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/terran-treats/DLR_DCA_TerranTreats_RaspberrySpiralRation_01252022_DSC02292DN-1x1.jpg?2022-03-11T21:09:08+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/terran-treats/DLR_DCA_TerranTreats_RaspberrySpiralRation_01252022_DSC02292DN-1x1.jpg?2022-03-11T21:09:08+00:00"
        },
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/terran-treats/DLR_DCA_TerranTreats_RaspberrySpiralRation_01252022_DSC02292DN-16x9.jpg?2022-03-11T21:09:08+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/terran-treats/DLR_DCA_TerranTreats_RaspberrySpiralRation_01252022_DSC02292DN-16x9.jpg?2022-03-11T21:09:08+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/terran-treats/DLR_DCA_TerranTreats_RaspberrySpiralRation_01252022_DSC02292DN-1x1.jpg?2022-03-11T21:09:08+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/terran-treats/DLR_DCA_TerranTreats_RaspberrySpiralRation_01252022_DSC02292DN-1x1.jpg?2022-03-11T21:09:08+00:00"
        }
      },
      "facets": {
        "diningExperience": [
          "carts-kiosks"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "specialEvent": [
          "food-and-wine"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {
        "advancedFinderTheme": "ac"
      },
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "19624444",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "19624444;entityType=restaurant",
          "name": "Terran Treats",
          "urlFriendlyId": "terran-treats",
          "url": "/dining/disney-california-adventure/terran-treats/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/terran-treats/DLR_DCA_TerranTreats_RaspberrySpiralRation_01252022_DSC02292DN-1x1.jpg?2022-03-11T21:09:08+00:00",
            "alt": ""
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.807108,
        "lng": -117.916978,
        "name": "Terran Treats",
        "id": "19624444;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354303;entityType=restaurant",
      "urlFriendlyId": "hungry-bear-restaurant",
      "url": "/dining/disneyland/hungry-bear-restaurant/",
      "name": "Hungry Bear Restaurant",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336942;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Sign at entrance to Hungry Bear restaurant in Disneyland Park",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/hungry-bear-restaurant/hungry-bear-restaurant-00-sq.jpg?1686004089813",
          "alt": "Sign at entrance to Hungry Bear restaurant in Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/hungry-bear-restaurant/hungry-bear-restaurant-00-sq.jpg?1686004089813"
        },
        "finderStandardThumb": {
          "title": "Sign at entrance to Hungry Bear restaurant in Disneyland Park",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/hungry-bear-restaurant/hungry-bear-restaurant-00.jpg?1686004089813",
          "alt": "Sign at entrance to Hungry Bear restaurant in Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/hungry-bear-restaurant/hungry-bear-restaurant-00.jpg?1686004089813"
        },
        "mapBubbleThumbLarge": {
          "title": "Sign at entrance to Hungry Bear restaurant in Disneyland Park",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/hungry-bear-restaurant/hungry-bear-restaurant-00-sq.jpg?1686004089813",
          "alt": "Sign at entrance to Hungry Bear restaurant in Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/hungry-bear-restaurant/hungry-bear-restaurant-00-sq.jpg?1686004089813"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "pixar-themed-food"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "guestRating": [
          "four-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "10:30:00",
            "endTime": "21:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "3441271",
        "reviewCount": 336
      },
      "guestRating": 4,
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "354303",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "354303;entityType=restaurant",
          "name": "Hungry Bear Restaurant",
          "urlFriendlyId": "hungry-bear-restaurant",
          "url": "/dining/disneyland/hungry-bear-restaurant/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/hungry-bear-restaurant/hungry-bear-restaurant-00-sq.jpg?1686004089813",
            "alt": "Sign at entrance to Hungry Bear restaurant in Disneyland Park"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.812554,
        "lng": -117.922435,
        "name": "Hungry Bear Restaurant",
        "id": "354303;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "17301557;entityType=restaurant",
      "urlFriendlyId": "maurices-treats",
      "url": "/dining/disneyland/maurices-treats/",
      "name": "Maurice's Treats",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336943;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Fantasy Faire",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/parks-and-tickets/entertainment/disneyland/fantasy-faire/fantasy-faire-05-sq.jpg?1681342569720",
          "alt": "A colorful wooden sign at Fantasy Faire reads, ‘Maurice’s Treats’",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/parks-and-tickets/entertainment/disneyland/fantasy-faire/fantasy-faire-05-sq.jpg?1681342569720"
        },
        "finderStandardThumb": {
          "title": "Fantasy Faire",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/entertainment/disneyland/fantasy-faire/fantasy-faire-05.jpg?1681342569720",
          "alt": "A colorful wooden sign at Fantasy Faire reads, ‘Maurice’s Treats’",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/parks-and-tickets/entertainment/disneyland/fantasy-faire/fantasy-faire-05.jpg?1681342569720"
        },
        "mapBubbleThumbLarge": {
          "title": "Fantasy Faire",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/parks-and-tickets/entertainment/disneyland/fantasy-faire/fantasy-faire-05-sq.jpg?1681342569720",
          "alt": "A colorful wooden sign at Fantasy Faire reads, ‘Maurice’s Treats’",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/parks-and-tickets/entertainment/disneyland/fantasy-faire/fantasy-faire-05-sq.jpg?1681342569720"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "carts-kiosks"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "20:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "17301557",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "17301557;entityType=restaurant",
          "name": "Maurice's Treats",
          "urlFriendlyId": "maurices-treats",
          "url": "/dining/disneyland/maurices-treats/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/parks-and-tickets/entertainment/disneyland/fantasy-faire/fantasy-faire-05-sq.jpg?1681342569720",
            "alt": "A colorful wooden sign at Fantasy Faire reads, ‘Maurice’s Treats’"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8124425633,
        "lng": -117.9193067551,
        "name": "Maurice's Treats",
        "id": "17301557;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "19436152;entityType=restaurant",
      "urlFriendlyId": "sip-and-savor",
      "url": "/dining/disney-california-adventure/sip-and-savor/",
      "name": "Sip and Savor Pass",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "media": {
        "mapBubbleThumbSmall": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/events/food-and-wine-festival/DSC07884-2-1x1.jpg?2023-03-01T19:45:10+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/events/food-and-wine-festival/DSC07884-2-1x1.jpg?2023-03-01T19:45:10+00:00"
        },
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/events/food-and-wine-festival/DSC07884-2-16x9.jpg?2023-03-01T19:45:10+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/events/food-and-wine-festival/DSC07884-2-16x9.jpg?2023-03-01T19:45:10+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/events/food-and-wine-festival/DSC07884-2-1x1.jpg?2023-03-01T19:45:10+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/events/food-and-wine-festival/DSC07884-2-1x1.jpg?2023-03-01T19:45:10+00:00"
        }
      },
      "facets": {
        "cuisine": [
          "californian-cuisine",
          "vegetarian-cuisine"
        ],
        "diningExperience": [
          "carts-kiosks"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "priceRangeResorts": [
          "d1-resorts"
        ],
        "quickService": [
          "quick-service"
        ],
        "specialEvent": [
          "food-and-wine"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "locationName": "Disney California Adventure Park",
      "facilityId": "19436152",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "19436152;entityType=restaurant",
          "name": "Sip and Savor Pass",
          "urlFriendlyId": "sip-and-savor",
          "url": "/dining/disney-california-adventure/sip-and-savor/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/events/food-and-wine-festival/DSC07884-2-1x1.jpg?2023-03-01T19:45:10+00:00",
            "alt": ""
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.808642,
        "lng": -117.918956,
        "name": "Sip and Savor Pass",
        "id": "411884554;entityType=point-of-interest",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "15706677;entityType=restaurant",
      "urlFriendlyId": "jazz-kitchen-beignets-expressed",
      "url": "/dining/downtown-disney-district/jazz-kitchen-beignets-expressed/",
      "name": "Beignets Expressed",
      "parkIds": [
        "336978;entityType=Entertainment-Venue"
      ],
      "media": {
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/coastal-grill-and-patio/GlazedBeignet-H-16x9.jpg?2023-04-18T12:11:45+00:00",
          "alt": "Rows of beignets featuring various toppings, with a bite taken out of one of them",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/coastal-grill-and-patio/GlazedBeignet-H-16x9.jpg?2023-04-18T12:11:45+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/coastal-grill-and-patio/GlazedBeignet-H-1x1.jpg?2023-04-18T12:11:45+00:00",
          "alt": "Rows of beignets featuring various toppings, with a bite taken out of one of them",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/coastal-grill-and-patio/GlazedBeignet-H-1x1.jpg?2023-04-18T12:11:45+00:00"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "cajun-creole-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "validDays": [
          "mon-fri-jazz-kitchen-up-to-50-excludes-alcohol-tax-tip"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "09:00:00",
            "endTime": "22:30:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Downtown Disney District",
      "facilityId": "15706677",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "15706677;entityType=restaurant",
          "name": "Beignets Expressed",
          "urlFriendlyId": "jazz-kitchen-beignets-expressed",
          "url": "/dining/downtown-disney-district/jazz-kitchen-beignets-expressed/",
          "land": "Downtown Disney District",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/coastal-grill-and-patio/GlazedBeignet-H-1x1.jpg?2023-04-18T12:11:45+00:00",
            "alt": "Rows of beignets featuring various toppings, with a bite taken out of one of them"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8090449773,
        "lng": -117.9234579129,
        "name": "Beignets Expressed",
        "id": "15706677;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "19268345;entityType=restaurant",
      "urlFriendlyId": "docking-bay-7-food-and-cargo",
      "url": "/dining/disneyland/docking-bay-7-food-and-cargo/",
      "name": "Docking Bay 7 Food and Cargo",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "19025523;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "A woman hands food to her family, seated inside a Star Wars cargo building where large containers of food are lowered from the ceiling",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/disneyland/docking-bay-7-food-and-cargo/docking-bay-guests-food-16x9.jpg?1673560469679",
          "alt": "A woman hands food to her family, seated inside a Star Wars cargo building where large containers of food are lowered from the ceiling",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disneyland/docking-bay-7-food-and-cargo/docking-bay-guests-food-16x9.jpg?1673560469679"
        },
        "mapBubbleThumbLarge": {
          "title": "A woman hands food to her family, seated inside a Star Wars cargo building where large containers of food are lowered from the ceiling",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/disneyland/docking-bay-7-food-and-cargo/docking-bay-guests-food-1x1.jpg?1673560469679",
          "alt": "A woman hands food to her family, seated inside a Star Wars cargo building where large containers of food are lowered from the ceiling",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disneyland/docking-bay-7-food-and-cargo/docking-bay-guests-food-1x1.jpg?1673560469679"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine",
          "vegetarian-cuisine"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "disneyFavorites": [
          "star-wars-rec"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "validDays": [
          "every-day-novelty-items"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "10:30:00",
            "endTime": "20:30:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "19268345",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "19268345;entityType=restaurant",
          "name": "Docking Bay 7 Food and Cargo",
          "urlFriendlyId": "docking-bay-7-food-and-cargo",
          "url": "/dining/disneyland/docking-bay-7-food-and-cargo/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/disneyland/docking-bay-7-food-and-cargo/docking-bay-guests-food-1x1.jpg?1673560469679",
            "alt": "A woman hands food to her family, seated inside a Star Wars cargo building where large containers of food are lowered from the ceiling"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.814742,
        "lng": -117.921432,
        "name": "Docking Bay 7 Food and Cargo",
        "id": "19268345;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354405;entityType=restaurant",
      "urlFriendlyId": "poultry-palace",
      "url": "/dining/disney-california-adventure/poultry-palace/",
      "name": "Poultry Palace",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "19005291;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Poultry Palace, a Quick Service eatery shaped like a chicken wing and juice box",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/poultry-palace-1x1.jpg?1673561691021",
          "alt": "Poultry Palace, a Quick Service eatery shaped like a chicken wing and juice box",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/poultry-palace-1x1.jpg?1673561691021"
        },
        "finderStandardThumb": {
          "title": "Poultry Palace, a Quick Service eatery shaped like a chicken wing and juice box",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/poultry-palace-16x9.jpg?1673561691021",
          "alt": "Poultry Palace, a Quick Service eatery shaped like a chicken wing and juice box",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/poultry-palace-16x9.jpg?1673561691021"
        },
        "mapBubbleThumbLarge": {
          "title": "Poultry Palace, a Quick Service eatery shaped like a chicken wing and juice box",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/poultry-palace-1x1.jpg?1673561691021",
          "alt": "Poultry Palace, a Quick Service eatery shaped like a chicken wing and juice box",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/poultry-palace-1x1.jpg?1673561691021"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "carts-kiosks"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "10:00:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "354405",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "354405;entityType=restaurant",
          "name": "Poultry Palace",
          "urlFriendlyId": "poultry-palace",
          "url": "/dining/disney-california-adventure/poultry-palace/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/poultry-palace-1x1.jpg?1673561691021",
            "alt": "Poultry Palace, a Quick Service eatery shaped like a chicken wing and juice box"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8047427823,
        "lng": -117.9214174892,
        "name": "Poultry Palace",
        "id": "354405;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "19530853;entityType=restaurant",
      "urlFriendlyId": "pym-test-kitchen",
      "url": "/dining/disney-california-adventure/pym-test-kitchen/",
      "name": "Pym Test Kitchen",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "19459756;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/disneyland/dining/disney-california-adventure/pym-test-kitchen/pyms-kitchen-1x1.jpg?1686163229049",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disney-california-adventure/pym-test-kitchen/pyms-kitchen-1x1.jpg?1686163229049"
        },
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/disney-california-adventure/pym-test-kitchen/pyms-kitchen-16x9.jpg?1686163229049",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disney-california-adventure/pym-test-kitchen/pyms-kitchen-16x9.jpg?1686163229049"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/disney-california-adventure/pym-test-kitchen/pyms-kitchen-1x1.jpg?1686163229049",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disney-california-adventure/pym-test-kitchen/pyms-kitchen-1x1.jpg?1686163229049"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine",
          "healthy-selections-cuisine",
          "vegetarian-cuisine"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "parkInterests": [
          "whats-new-rec"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "specialEvent": [
          "food-and-wine"
        ],
        "tableService": [
          "special-unique-dining"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {
        "advancedFinderTheme": "ac"
      },
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "19530853",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service, Table Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "19530853;entityType=restaurant",
          "name": "Pym Test Kitchen",
          "urlFriendlyId": "pym-test-kitchen",
          "url": "/dining/disney-california-adventure/pym-test-kitchen/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/disney-california-adventure/pym-test-kitchen/pyms-kitchen-1x1.jpg?1686163229049",
            "alt": ""
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.806726,
        "lng": -117.917696,
        "name": "Pym Test Kitchen",
        "id": "19530853;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "19306875;entityType=restaurant",
      "urlFriendlyId": "black-tap-crazyshake-counter",
      "url": "/dining/downtown-disney-district/black-tap-crazyshake-counter/",
      "name": "CrazyShake™ Window by Black Tap",
      "parkIds": [
        "336978;entityType=Entertainment-Venue"
      ],
      "media": {
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/downtown-disney-district/black-tap-crazyshake-counter/togo-shakes-three-16x9.jpg?1607562673294",
          "alt": "A strawberry milkshake with an ice cream bar, a vanilla milkshake covered in candy and a cookies and cream milkshake",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/downtown-disney-district/black-tap-crazyshake-counter/togo-shakes-three-16x9.jpg?1607562673294"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/downtown-disney-district/black-tap-crazyshake-counter/togo-shakes-three-1x1.jpg?1607562673294",
          "alt": "A strawberry milkshake with an ice cream bar, a vanilla milkshake covered in candy and a cookies and cream milkshake",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/downtown-disney-district/black-tap-crazyshake-counter/togo-shakes-three-1x1.jpg?1607562673294"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "priceRange": [
          "$",
          "$$"
        ],
        "tableService": [
          "casual-dining"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "00:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Downtown Disney District",
      "facilityId": "19306875",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Casual Dining"
      },
      "marker": {
        "card": {
          "id": "19306875;entityType=restaurant",
          "name": "CrazyShake™ Window by Black Tap",
          "urlFriendlyId": "black-tap-crazyshake-counter",
          "url": "/dining/downtown-disney-district/black-tap-crazyshake-counter/",
          "land": "Downtown Disney District",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/downtown-disney-district/black-tap-crazyshake-counter/togo-shakes-three-1x1.jpg?1607562673294",
            "alt": "A strawberry milkshake with an ice cream bar, a vanilla milkshake covered in candy and a cookies and cream milkshake"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.809231,
        "lng": -117.923048,
        "name": "CrazyShake™ Window by Black Tap",
        "id": "19306875;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "18516131;entityType=restaurant",
      "urlFriendlyId": "turkey-legs",
      "url": "/dining/turkey-legs/",
      "name": "Turkey Leg Carts",
      "parkIds": [
        "336894;entityType=theme-park",
        "330339;entityType=theme-park"
      ],
      "landId": "m",
      "media": {
        "finderStandardThumb": {
          "title": "Turkey Legs",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/turkey-leg-cart-02.jpg?1673559584644",
          "alt": "Two succulent turkey legs sits on a plate",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/turkey-leg-cart-02.jpg?1673559584644"
        },
        "mapBubbleThumbLarge": {
          "title": "halloween-food-beverage",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/turkey-leg-cart-02-sq.jpg?1673559584645",
          "alt": "Two succulent turkey legs sits on a plate",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/turkey-leg-cart-02-sq.jpg?1673559584645"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "carts-kiosks"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "locationName": "Multiple Locations",
      "locationsList": {
        "330339;entityType=theme-park": "Disneyland Park",
        "336894;entityType=theme-park": "Disney California Adventure Park"
      },
      "facilityId": "18516131",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "parkLocations": {
        "336894;entityType=theme-park": {
          "lat": 33.80474278,
          "lng": -117.9214175,
          "name": "Poultry Palace",
          "id": "18615761;entityType=point-of-interest",
          "closeButtonLabel": "finder.maps.closePopUpButtonText",
          "pin": "activities"
        },
        "330339;entityType=theme-park": {
          "lat": 33.81240991,
          "lng": -117.9205217,
          "name": "Turkey Leg Cart at Ship to Shore Marketplace",
          "id": "18615781;entityType=point-of-interest",
          "closeButtonLabel": "finder.maps.closePopUpButtonText",
          "pin": "activities"
        }
      },
      "marker": {
        "card": {
          "id": "18516131;entityType=restaurant",
          "name": "Turkey Leg Carts",
          "urlFriendlyId": "turkey-legs",
          "url": "/dining/turkey-legs/",
          "land": "Hot Foods near Central Plaza",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/turkey-leg-cart-02-sq.jpg?1673559584645",
            "alt": "Two succulent turkey legs sits on a plate"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.81217747,
        "lng": -117.9191342,
        "name": "Hot Foods near Central Plaza",
        "id": "18518211;entityType=point-of-interest",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "18606212;entityType=restaurant",
      "urlFriendlyId": "lunar-new-year-food-marketplaces",
      "url": "/dining/disney-california-adventure/lunar-new-year-food-marketplaces/",
      "name": "Lunar New Year Marketplaces",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "336973;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "A large macron in the shape of Mickey Mouse",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/disneyland/dining/disney-california-adventure/lunar-new-year-food-marketplaces/festival-lny-purple-yam-macaron-1x1.jpg?1676527244794",
          "alt": "A large macron in the shape of Mickey Mouse",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disney-california-adventure/lunar-new-year-food-marketplaces/festival-lny-purple-yam-macaron-1x1.jpg?1676527244794"
        },
        "finderStandardThumb": {
          "title": "A large macron in the shape of Mickey Mouse",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/disney-california-adventure/lunar-new-year-food-marketplaces/festival-lny-purple-yam-macaron-16x9.jpg?1676527244793",
          "alt": "A large macron in the shape of Mickey Mouse",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disney-california-adventure/lunar-new-year-food-marketplaces/festival-lny-purple-yam-macaron-16x9.jpg?1676527244793"
        },
        "mapBubbleThumbLarge": {
          "title": "A large macron in the shape of Mickey Mouse",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/disney-california-adventure/lunar-new-year-food-marketplaces/festival-lny-purple-yam-macaron-1x1.jpg?1676527244794",
          "alt": "A large macron in the shape of Mickey Mouse",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disney-california-adventure/lunar-new-year-food-marketplaces/festival-lny-purple-yam-macaron-1x1.jpg?1676527244794"
        }
      },
      "facets": {
        "cuisine": [
          "asian-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "specialEvent": [
          "lunar-new-year"
        ],
        "type": [
          "park-admission-required"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "18606212",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "18606212;entityType=restaurant",
          "name": "Lunar New Year Marketplaces",
          "urlFriendlyId": "lunar-new-year-food-marketplaces",
          "url": "/dining/disney-california-adventure/lunar-new-year-food-marketplaces/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/disney-california-adventure/lunar-new-year-food-marketplaces/festival-lny-purple-yam-macaron-1x1.jpg?1676527244794",
            "alt": "A large macron in the shape of Mickey Mouse"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.806087,
        "lng": -117.921422,
        "name": "Lunar New Year Marketplaces",
        "id": "18606212;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354135;entityType=restaurant",
      "urlFriendlyId": "adorable-snowman-frosted-treats",
      "url": "/dining/disney-california-adventure/adorable-snowman-frosted-treats/",
      "name": "Adorable Snowman Frosted Treats",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "19005291;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "The exterior of Adorable Snowman Frosted Treats",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/adorable-snowman-1x1.jpg?1673559828323",
          "alt": "The exterior of Adorable Snowman Frosted Treats",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/adorable-snowman-1x1.jpg?1673559828323"
        },
        "finderStandardThumb": {
          "title": "The exterior of Adorable Snowman Frosted Treats",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/adorable-snowman-16x9.jpg?1673559828323",
          "alt": "The exterior of Adorable Snowman Frosted Treats",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/adorable-snowman-16x9.jpg?1673559828323"
        },
        "mapBubbleThumbLarge": {
          "title": "The exterior of Adorable Snowman Frosted Treats",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/adorable-snowman-1x1.jpg?1673559828323",
          "alt": "The exterior of Adorable Snowman Frosted Treats",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/adorable-snowman-1x1.jpg?1673559828323"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "pixar-themed-food"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "check-availability"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "10:30:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "354135",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "354135;entityType=restaurant",
          "name": "Adorable Snowman Frosted Treats",
          "urlFriendlyId": "adorable-snowman-frosted-treats",
          "url": "/dining/disney-california-adventure/adorable-snowman-frosted-treats/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/adorable-snowman-1x1.jpg?1673559828323",
            "alt": "The exterior of Adorable Snowman Frosted Treats"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8051566775,
        "lng": -117.9204788804,
        "name": "Adorable Snowman Frosted Treats",
        "id": "354135;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354555;entityType=restaurant",
      "urlFriendlyId": "wine-country-trattoria",
      "url": "/dining/disney-california-adventure/wine-country-trattoria/",
      "name": "Wine Country Trattoria",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "336977;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "Wine Country Trattoria",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/wine-country-trattoria/wine-country-trattoria-00.jpg?1673559601546",
          "alt": "Italian-inspired architecture of Wine County Trattoria, a Disney California Adventure restaurant",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/wine-country-trattoria/wine-country-trattoria-00.jpg?1673559601546"
        },
        "mapBubbleThumbLarge": {
          "title": "Wine Country Trattoria",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/wine-country-trattoria/wine-country-trattoria-00-sq.jpg?1673559601546",
          "alt": "Italian-inspired architecture of Wine County Trattoria, a Disney California Adventure restaurant",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/wine-country-trattoria/wine-country-trattoria-00-sq.jpg?1673559601546"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "behaviorType": [
          "walkupWaitList"
        ],
        "checkAvailability": [
          "checkavailmodule"
        ],
        "cuisine": [
          "healthy-selections-cuisine",
          "italian-cuisine",
          "vegetarian-cuisine"
        ],
        "diningInterests": [
          "table-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member",
          "disney-visa-cardholder"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "guestRating": [
          "three-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$$"
        ],
        "reservationOfferings": [
          "add-ons-available"
        ],
        "tableService": [
          "special-unique-dining",
          "casual-dining",
          "table-service",
          "reservations-accepted"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "20:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "1516563",
        "reviewCount": 1033
      },
      "guestRating": 3.5,
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/357232",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/368910"
      ],
      "locationName": "Disney California Adventure Park",
      "facilityId": "354555",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Casual Dining, Reservations Accepted"
      },
      "marker": {
        "card": {
          "id": "354555;entityType=restaurant",
          "name": "Wine Country Trattoria",
          "urlFriendlyId": "wine-country-trattoria",
          "url": "/dining/disney-california-adventure/wine-country-trattoria/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/wine-country-trattoria/wine-country-trattoria-00-sq.jpg?1673559601546",
            "alt": "Italian-inspired architecture of Wine County Trattoria, a Disney California Adventure restaurant"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.806478,
        "lng": -117.919877,
        "name": "Wine Country Trattoria",
        "id": "354555;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "19269424;entityType=restaurant",
      "urlFriendlyId": "black-tap-craft-burgers",
      "url": "/dining/downtown-disney-district/black-tap-craft-burgers/",
      "name": "Black Tap Craft Burgers & Shakes",
      "parkIds": [
        "336978;entityType=Entertainment-Venue"
      ],
      "media": {
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/downtown-disney-district/black-tap-texan-burger-16x9.jpg?1611946816723",
          "alt": "Hands holding a burger with bacon, onion rings and barbecue sauce",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/downtown-disney-district/black-tap-texan-burger-16x9.jpg?1611946816723"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/downtown-disney-district/black-tap-texan-burger-1x1.jpg?1611946816723",
          "alt": "Hands holding a burger with bacon, onion rings and barbecue sauce",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/downtown-disney-district/black-tap-texan-burger-1x1.jpg?1611946816723"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "featuredEventLocation": [
          "welcome-screen"
        ],
        "priceRange": [
          "$",
          "$$"
        ],
        "tableService": [
          "casual-dining",
          "lunch",
          "dinner"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "00:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Downtown Disney District",
      "facilityId": "19269424",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Casual Dining"
      },
      "marker": {
        "card": {
          "id": "19269424;entityType=restaurant",
          "name": "Black Tap Craft Burgers & Shakes",
          "urlFriendlyId": "black-tap-craft-burgers",
          "url": "/dining/downtown-disney-district/black-tap-craft-burgers/",
          "land": "Downtown Disney District",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/downtown-disney-district/black-tap-texan-burger-1x1.jpg?1611946816723",
            "alt": "Hands holding a burger with bacon, onion rings and barbecue sauce"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.809185,
        "lng": -117.92279,
        "name": "Black Tap Craft Burgers & Shakes",
        "id": "19269424;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354381;entityType=restaurant",
      "urlFriendlyId": "napolini-pizzeria",
      "url": "/dining/downtown-disney-district/napolini-pizzeria/",
      "name": "Napolini Pizzeria",
      "parkIds": [
        "336978;entityType=Entertainment-Venue"
      ],
      "media": {
        "mapBubbleThumbSmall": {
          "title": "The front entrance to Napolini Pizzeria features patio dining space",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/disneyland/dining/downtown-disney-district/napolini-deli/napolini-pizzeria-downtown-disney-1x1.jpg?1646850754451",
          "alt": "The front entrance to Napolini Pizzeria features patio dining space",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/downtown-disney-district/napolini-deli/napolini-pizzeria-downtown-disney-1x1.jpg?1646850754451"
        },
        "finderStandardThumb": {
          "title": "The front entrance to Napolini Pizzeria features patio dining space",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/downtown-disney-district/napolini-deli/napolini-pizzeria-downtown-disney-16x9.jpg?1646850754451",
          "alt": "The front entrance to Napolini Pizzeria features patio dining space",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/downtown-disney-district/napolini-deli/napolini-pizzeria-downtown-disney-16x9.jpg?1646850754451"
        },
        "mapBubbleThumbLarge": {
          "title": "The front entrance to Napolini Pizzeria features patio dining space",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/downtown-disney-district/napolini-deli/napolini-pizzeria-downtown-disney-1x1.jpg?1646850754451",
          "alt": "The front entrance to Napolini Pizzeria features patio dining space",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/downtown-disney-district/napolini-deli/napolini-pizzeria-downtown-disney-1x1.jpg?1646850754451"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "italian-cuisine"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "guestRating": [
          "four-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "validDays": [
          "every-day-no-alcohol-tax-tip"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "00:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "344185",
        "reviewCount": 327
      },
      "guestRating": 4,
      "quickServiceAvailable": true,
      "locationName": "Downtown Disney District",
      "facilityId": "354381",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "354381;entityType=restaurant",
          "name": "Napolini Pizzeria",
          "urlFriendlyId": "napolini-pizzeria",
          "url": "/dining/downtown-disney-district/napolini-pizzeria/",
          "land": "Downtown Disney District",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/downtown-disney-district/napolini-deli/napolini-pizzeria-downtown-disney-1x1.jpg?1646850754451",
            "alt": "The front entrance to Napolini Pizzeria features patio dining space"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.808897,
        "lng": -117.922211,
        "name": "Napolini Pizzeria",
        "id": "354381;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354477;entityType=restaurant",
      "urlFriendlyId": "studio-catering-co",
      "url": "/dining/disney-california-adventure/studio-catering-co/",
      "name": "Studio Catering Co.",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "336981;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "The Studio Catering Co snack truck with a Coca Cola beverage cart stationed in front",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/studio-catering-co/studio-catering-company-01.jpg?1688133141058",
          "alt": "The Studio Catering Co snack truck with a Coca Cola beverage cart stationed in front",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/studio-catering-co/studio-catering-company-01.jpg?1688133141058"
        },
        "mapBubbleThumbLarge": {
          "title": "The Studio Catering Co snack truck with a Coca Cola beverage cart stationed in front",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/studio-catering-co/studio-catering-company-01-sq.jpg?1688133141058",
          "alt": "The Studio Catering Co snack truck with a Coca Cola beverage cart stationed in front",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/studio-catering-co/studio-catering-company-01-sq.jpg?1688133141058"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "20:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "354477",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "354477;entityType=restaurant",
          "name": "Studio Catering Co.",
          "urlFriendlyId": "studio-catering-co",
          "url": "/dining/disney-california-adventure/studio-catering-co/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/studio-catering-co/studio-catering-company-01-sq.jpg?1688133141058",
            "alt": "The Studio Catering Co snack truck with a Coca Cola beverage cart stationed in front"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.807889,
        "lng": -117.916958,
        "name": "Studio Catering Co.",
        "id": "354477;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "19343532;entityType=restaurant",
      "urlFriendlyId": "craftsman-bar",
      "url": "/dining/grand-californian-hotel/craftsman-bar/",
      "name": "GCH Craftsman Bar",
      "parkIds": [
        "334222;entityType=resort"
      ],
      "media": {
        "mapBubbleThumbSmall": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/disneyland/dining/grand-californian-hotel/craftsman-bar/gch-craftsman-bar-grill-exterior-1x1.jpg?1686348591296",
          "alt": "An outside bar with brick pillars and a flat screen television near a pool",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/grand-californian-hotel/craftsman-bar/gch-craftsman-bar-grill-exterior-1x1.jpg?1686348591296"
        },
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/grand-californian-hotel/craftsman-bar/gch-craftsman-bar-grill-exterior-16x9.jpg?1686348591296",
          "alt": "An outside bar with brick pillars and a flat screen television near a pool",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/grand-californian-hotel/craftsman-bar/gch-craftsman-bar-grill-exterior-16x9.jpg?1686348591296"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/grand-californian-hotel/craftsman-bar/gch-craftsman-bar-grill-exterior-16x9.jpg?1686348591296",
          "alt": "An outside bar with brick pillars and a flat screen television near a pool",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/grand-californian-hotel/craftsman-bar/gch-craftsman-bar-grill-exterior-16x9.jpg?1686348591296"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "behaviorType": [
          "walkupWaitList"
        ],
        "checkAvailability": [
          "checkavailmodule"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "priceRange": [
          "$",
          "$$"
        ],
        "tableService": [
          "table-service",
          "reservations-accepted"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/411944853",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/19623531",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/19623532"
      ],
      "facilityId": "19343532",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Reservations Accepted, Walk-Up Wait List"
      },
      "marker": {
        "card": {
          "id": "19343532;entityType=restaurant",
          "name": "GCH Craftsman Bar",
          "urlFriendlyId": "craftsman-bar",
          "url": "/dining/grand-californian-hotel/craftsman-bar/",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/grand-californian-hotel/craftsman-bar/gch-craftsman-bar-grill-exterior-16x9.jpg?1686348591296",
            "alt": "An outside bar with brick pillars and a flat screen television near a pool"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8075465076,
        "lng": -117.921607,
        "name": "GCH Craftsman Bar",
        "id": "19343532;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354195;entityType=restaurant",
      "urlFriendlyId": "cocina-cucamonga-mexican-grill",
      "url": "/dining/disney-california-adventure/cocina-cucamonga-mexican-grill/",
      "name": "Cocina Cucamonga Mexican Grill",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "336977;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Cocina Cucamonga Mexican Grill",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/cocina-cucamonga-mexican-grill/cocina-cucamonga-mexican-grill-00-sq.jpg?1673560337667",
          "alt": "Sign for Cocina Cucamonga Mexican Grill",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/cocina-cucamonga-mexican-grill/cocina-cucamonga-mexican-grill-00-sq.jpg?1673560337667"
        },
        "finderStandardThumb": {
          "title": "Cucamonga Mexican Grill",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/cocina-cucamonga-mexican-grill/cocina-cucamonga-mexican-grill-00.jpg?1673560337666",
          "alt": "Sign for Cocina Cucamonga Mexican Grill",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/cocina-cucamonga-mexican-grill/cocina-cucamonga-mexican-grill-00.jpg?1673560337666"
        },
        "mapBubbleThumbLarge": {
          "title": "Cocina Cucamonga Mexican Grill",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/cocina-cucamonga-mexican-grill/cocina-cucamonga-mexican-grill-00-sq.jpg?1673560337666",
          "alt": "Sign for Cocina Cucamonga Mexican Grill",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/cocina-cucamonga-mexican-grill/cocina-cucamonga-mexican-grill-00-sq.jpg?1673560337666"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "mexican-cuisine"
        ],
        "diningExperience": [
          "pixar-themed-food"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member",
          "disney-visa-cardholder"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "guestRating": [
          "four-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "specialEvent": [
          "disney-festival-of-holidays"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "10:30:00",
            "endTime": "21:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "1852519",
        "reviewCount": 186
      },
      "guestRating": 4,
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "354195",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "354195;entityType=restaurant",
          "name": "Cocina Cucamonga Mexican Grill",
          "urlFriendlyId": "cocina-cucamonga-mexican-grill",
          "url": "/dining/disney-california-adventure/cocina-cucamonga-mexican-grill/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/cocina-cucamonga-mexican-grill/cocina-cucamonga-mexican-grill-00-sq.jpg?1673560337666",
            "alt": "Sign for Cocina Cucamonga Mexican Grill"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8056032564,
        "lng": -117.9202344871,
        "name": "Cocina Cucamonga Mexican Grill",
        "id": "354195;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "411845026;entityType=restaurant",
      "urlFriendlyId": "cafe-daisy",
      "url": "/dining/disneyland/cafe-daisy/",
      "name": "Café Daisy",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336945;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/cafe-daisy/Cafe-Daisy-1x1.jpg?2023-04-03T16:44:12+00:00",
          "alt": "Café Daisy featuring Daisy Duck on a sign at Centoonial Park in Mickey’s Toontown",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/cafe-daisy/Cafe-Daisy-1x1.jpg?2023-04-03T16:44:12+00:00"
        },
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/cafe-daisy/Cafe-Daisy-16x9.jpg?2023-04-03T16:44:12+00:00",
          "alt": "Café Daisy featuring Daisy Duck on a sign at Centoonial Park in Mickey’s Toontown",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/cafe-daisy/Cafe-Daisy-16x9.jpg?2023-04-03T16:44:12+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/cafe-daisy/Cafe-Daisy-1x1.jpg?2023-04-03T16:44:12+00:00",
          "alt": "Café Daisy featuring Daisy Duck on a sign at Centoonial Park in Mickey’s Toontown",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/cafe-daisy/Cafe-Daisy-1x1.jpg?2023-04-03T16:44:12+00:00"
        }
      },
      "facets": {
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "00:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "411845026",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "type": {
        "facets": "Mobile Orders"
      },
      "marker": {
        "card": {
          "id": "411845026;entityType=restaurant",
          "name": "Café Daisy",
          "urlFriendlyId": "cafe-daisy",
          "url": "/dining/disneyland/cafe-daisy/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/cafe-daisy/Cafe-Daisy-1x1.jpg?2023-04-03T16:44:12+00:00",
            "alt": "Café Daisy featuring Daisy Duck on a sign at Centoonial Park in Mickey’s Toontown"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.81547,
        "lng": -117.918682,
        "name": "Café Daisy",
        "id": "411845026;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "16032481;entityType=restaurant",
      "urlFriendlyId": "paradise-garden-grill",
      "url": "/dining/disney-california-adventure/paradise-garden-grill/",
      "name": "Paradise Garden Grill",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "336973;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Paradise Garden Grill",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/paradise-garden-grill/paradise-garden-grill-00-sq.jpg?1683154093167",
          "alt": "Sign for Paradise Garden Grill, a Disney California Adventure Mediterranean restaurant",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/paradise-garden-grill/paradise-garden-grill-00-sq.jpg?1683154093167"
        },
        "finderStandardThumb": {
          "title": "Paradise Garden Grill",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/paradise-garden-grill/paradise-garden-grill-00.jpg?1683154093167",
          "alt": "Sign for Paradise Garden Grill, a Disney California Adventure Mediterranean restaurant",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/paradise-garden-grill/paradise-garden-grill-00.jpg?1683154093167"
        },
        "mapBubbleThumbLarge": {
          "title": "Paradise Garden Grill",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/paradise-garden-grill/paradise-garden-grill-00-sq.jpg?1683154093167",
          "alt": "Sign for Paradise Garden Grill, a Disney California Adventure Mediterranean restaurant",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/paradise-garden-grill/paradise-garden-grill-00-sq.jpg?1683154093167"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "diningExperience": [
          "pixar-themed-food"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member",
          "disney-visa-cardholder"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "guestRating": [
          "four-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "specialEvent": [
          "food-and-wine"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "10:00:00",
            "endTime": "21:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "2328485",
        "reviewCount": 101
      },
      "guestRating": 4,
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "16032481",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "16032481;entityType=restaurant",
          "name": "Paradise Garden Grill",
          "urlFriendlyId": "paradise-garden-grill",
          "url": "/dining/disney-california-adventure/paradise-garden-grill/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/paradise-garden-grill/paradise-garden-grill-00-sq.jpg?1683154093167",
            "alt": "Sign for Paradise Garden Grill, a Disney California Adventure Mediterranean restaurant"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8061043985,
        "lng": -117.9233857988,
        "name": "Paradise Garden Grill",
        "id": "16032481;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354546;entityType=restaurant",
      "urlFriendlyId": "wetzels-pretzels",
      "url": "/dining/downtown-disney-district/wetzels-pretzels/",
      "name": "Wetzel's Pretzels",
      "parkIds": [
        "336978;entityType=Entertainment-Venue"
      ],
      "media": {
        "finderStandardThumb": {
          "title": "Wetzels Pretzels",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/wetzels-pretzels/wetzels-pretzels-00.jpg?1676601485938",
          "alt": "A salted, twisted pretzel treat at Wetzel's Pretzels in Downtown Disney District",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/wetzels-pretzels/wetzels-pretzels-00.jpg?1676601485938"
        },
        "mapBubbleThumbLarge": {
          "title": "Wetzels Pretzels",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/wetzels-pretzels/wetzels-pretzels-00-sq.jpg?1676601485938",
          "alt": "A salted, twisted pretzel treat at Wetzel's Pretzels in Downtown Disney District",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/wetzels-pretzels/wetzels-pretzels-00-sq.jpg?1676601485938"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "discounts": [
          "disney-visa-cardholder"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "00:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Downtown Disney District",
      "facilityId": "354546",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "354546;entityType=restaurant",
          "name": "Wetzel's Pretzels",
          "urlFriendlyId": "wetzels-pretzels",
          "url": "/dining/downtown-disney-district/wetzels-pretzels/",
          "land": "Downtown Disney District",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/wetzels-pretzels/wetzels-pretzels-00-sq.jpg?1676601485938",
            "alt": "A salted, twisted pretzel treat at Wetzel's Pretzels in Downtown Disney District"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8091202682,
        "lng": -117.9226147374,
        "name": "Wetzel's Pretzels",
        "id": "354546;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "17384492;entityType=restaurant",
      "urlFriendlyId": "wetzels-pretzels-cart",
      "url": "/dining/downtown-disney-district/wetzels-pretzels-cart/",
      "name": "Wetzel's Pretzels Cart",
      "parkIds": [
        "336978;entityType=Entertainment-Venue"
      ],
      "media": {
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/wetzels-pretzels/02_10_20-16x9.jpg?2022-05-16T13:05:45+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/wetzels-pretzels/02_10_20-16x9.jpg?2022-05-16T13:05:45+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/wetzels-pretzels/02_10_20-1x1.jpg?2022-05-16T13:05:45+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/wetzels-pretzels/02_10_20-1x1.jpg?2022-05-16T13:05:45+00:00"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "quickService": [
          "quick-service"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "09:00:00",
            "endTime": "00:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Downtown Disney District",
      "facilityId": "17384492",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "17384492;entityType=restaurant",
          "name": "Wetzel's Pretzels Cart",
          "urlFriendlyId": "wetzels-pretzels-cart",
          "url": "/dining/downtown-disney-district/wetzels-pretzels-cart/",
          "land": "Downtown Disney District",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/wetzels-pretzels/02_10_20-1x1.jpg?2022-05-16T13:05:45+00:00",
            "alt": ""
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.808848,
        "lng": -117.920733,
        "name": "Wetzel's Pretzels Cart",
        "id": "17384492;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "18516125;entityType=restaurant",
      "urlFriendlyId": "popcorn-carts",
      "url": "/dining/popcorn/",
      "name": "Popcorn Carts",
      "parkIds": [
        "336894;entityType=theme-park",
        "330339;entityType=theme-park"
      ],
      "landId": "m",
      "media": {
        "finderStandardThumb": {
          "title": "Popcorn",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/popcorn-cart-00.jpg?1681239854616",
          "alt": "Popcorn",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/popcorn-cart-00.jpg?1681239854616"
        },
        "mapBubbleThumbLarge": {
          "title": "Popcorn",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/popcorn-cart-00-sq.jpg?1681239854616",
          "alt": "Popcorn",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/popcorn-cart-00-sq.jpg?1681239854616"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "carts-kiosks"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "locationName": "Multiple Locations",
      "locationsList": {
        "330339;entityType=theme-park": "Disneyland Park",
        "336894;entityType=theme-park": "Disney California Adventure Park"
      },
      "facilityId": "18516125",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "parkLocations": {
        "336894;entityType=theme-park": {
          "lat": 33.80596585,
          "lng": -117.9186624,
          "name": "Popcorn at Cozy Cone Motel",
          "id": "18615922;entityType=point-of-interest",
          "closeButtonLabel": "finder.maps.closePopUpButtonText",
          "pin": "activities"
        },
        "330339;entityType=theme-park": {
          "lat": 33.814339,
          "lng": -117.918253,
          "name": "Popcorn near Fantasyland Theatre",
          "id": "18518213;entityType=point-of-interest",
          "closeButtonLabel": "finder.maps.closePopUpButtonText",
          "pin": "activities"
        }
      },
      "marker": {
        "card": {
          "id": "18516125;entityType=restaurant",
          "name": "Popcorn Carts",
          "urlFriendlyId": "popcorn-carts",
          "url": "/dining/popcorn/",
          "land": "Popcorn near Haunted Mansion",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/popcorn-cart-00-sq.jpg?1681239854616",
            "alt": "Popcorn"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.81150497,
        "lng": -117.9216665,
        "name": "Popcorn near Haunted Mansion",
        "id": "18518183;entityType=point-of-interest",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354483;entityType=restaurant",
      "urlFriendlyId": "smokejumpers-grill",
      "url": "/dining/disney-california-adventure/smokejumpers-grill/",
      "name": "Smokejumpers Grill",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "336974;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "A double cheeseburger piled high with lettuce, tomato, onion and pickles, served with crinkle cut fries.",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/smokejumpers-grill/DLR_DCA_SmokejumpersGrill_DoubleBurger_04122022_DSC03526DN-16x9.jpg?2022-05-17T23:47:19+00:00",
          "alt": "A double cheeseburger piled high with lettuce, tomato, onion and pickles, served with crinkle cut fries.",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/smokejumpers-grill/DLR_DCA_SmokejumpersGrill_DoubleBurger_04122022_DSC03526DN-16x9.jpg?2022-05-17T23:47:19+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "A double cheeseburger piled high with lettuce, tomato, onion and pickles, served with crinkle cut fries.",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/smokejumpers-grill/DLR_DCA_SmokejumpersGrill_DoubleBurger_04122022_DSC03526DN-1x1.jpg?2022-05-17T23:47:19+00:00",
          "alt": "A double cheeseburger piled high with lettuce, tomato, onion and pickles, served with crinkle cut fries.",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/smokejumpers-grill/DLR_DCA_SmokejumpersGrill_DoubleBurger_04122022_DSC03526DN-1x1.jpg?2022-05-17T23:47:19+00:00"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "guestRating": [
          "four-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "specialEvent": [
          "disney-festival-of-holidays"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "10:00:00",
            "endTime": "21:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "1774808",
        "reviewCount": 394
      },
      "guestRating": 4,
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "354483",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "354483;entityType=restaurant",
          "name": "Smokejumpers Grill",
          "urlFriendlyId": "smokejumpers-grill",
          "url": "/dining/disney-california-adventure/smokejumpers-grill/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/smokejumpers-grill/DLR_DCA_SmokejumpersGrill_DoubleBurger_04122022_DSC03526DN-1x1.jpg?2022-05-17T23:47:19+00:00",
            "alt": "A double cheeseburger piled high with lettuce, tomato, onion and pickles, served with crinkle cut fries."
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8079285397,
        "lng": -117.9196943785,
        "name": "Smokejumpers Grill",
        "id": "354483;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "15527906;entityType=restaurant",
      "urlFriendlyId": "magic-key-terrace",
      "url": "/dining/disney-california-adventure/magic-key-terrace/",
      "name": "Magic Key Terrace - Magic Key Holder Dining",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "336977;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-standard-assets/disneyland/Magic-Beverages-16x9-16x9.jpg?2021-08-20T20:57:42+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-standard-assets/disneyland/Magic-Beverages-16x9-16x9.jpg?2021-08-20T20:57:42+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-standard-assets/disneyland/Magic-Beverages-16x9-1x1.jpg?2021-08-20T20:57:42+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-standard-assets/disneyland/Magic-Beverages-16x9-1x1.jpg?2021-08-20T20:57:42+00:00"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "behaviorType": [
          "walkupWaitList"
        ],
        "checkAvailability": [
          "checkavailmodule"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "otherDining": [
          "bars-and-lounges"
        ],
        "priceRange": [
          "$",
          "$$"
        ],
        "reservationOfferings": [
          "add-ons-available"
        ],
        "tableService": [
          "table-service",
          "reservations-accepted"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "20:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/19626691",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/19626692"
      ],
      "locationName": "Disney California Adventure Park",
      "facilityId": "15527906",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Bars & Lounges, Reservations Accepted"
      },
      "marker": {
        "card": {
          "id": "15527906;entityType=restaurant",
          "name": "Magic Key Terrace - Magic Key Holder Dining",
          "urlFriendlyId": "magic-key-terrace",
          "url": "/dining/disney-california-adventure/magic-key-terrace/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-standard-assets/disneyland/Magic-Beverages-16x9-1x1.jpg?2021-08-20T20:57:42+00:00",
            "alt": ""
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.806621,
        "lng": -117.919866,
        "name": "Magic Key Terrace - Magic Key Holder Dining",
        "id": "15527906;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354261;entityType=restaurant",
      "urlFriendlyId": "goofys-kitchen",
      "url": "/dining/disneyland-hotel/goofys-kitchen/",
      "name": "Goofy's Kitchen",
      "parkIds": [
        "334223;entityType=resort"
      ],
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Goofy's Kitchen",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/resort-dining/disneyland-hotel/goofys-kitchen/goofys-kitchen-06-sq.jpg?1684170870948",
          "alt": "Goofy wearing a chef’s ensemble presents his kitchen",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/resort-dining/disneyland-hotel/goofys-kitchen/goofys-kitchen-06-sq.jpg?1684170870948"
        },
        "finderStandardThumb": {
          "title": "Goofy's Kitchen",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/resort-dining/disneyland-hotel/goofys-kitchen/goofys-kitchen-06.jpg?1684170870948",
          "alt": "Goofy wearing a chef’s ensemble presents his kitchen",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/resort-dining/disneyland-hotel/goofys-kitchen/goofys-kitchen-06.jpg?1684170870948"
        },
        "mapBubbleThumbLarge": {
          "title": "Goofy's Kitchen",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/resort-dining/disneyland-hotel/goofys-kitchen/goofys-kitchen-06-sq.jpg?1684170870948",
          "alt": "Goofy wearing a chef’s ensemble presents his kitchen",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/resort-dining/disneyland-hotel/goofys-kitchen/goofys-kitchen-06-sq.jpg?1684170870948"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "checkAvailability": [
          "checkavailmodule"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "guestRating": [
          "four-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$$$"
        ],
        "reservationOfferings": [
          "add-ons-available"
        ],
        "tableService": [
          "table-service",
          "buffet-family-style",
          "reservations-accepted",
          "breakfast"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "07:00:00",
            "endTime": "21:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "496123",
        "reviewCount": 2198
      },
      "guestRating": 4,
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/369069",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/369071",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/19263151",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/19263152",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/18062831",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/18062832"
      ],
      "facilityId": "354261",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Breakfast, Buffet/Family Style"
      },
      "marker": {
        "card": {
          "id": "354261;entityType=restaurant",
          "name": "Goofy's Kitchen",
          "urlFriendlyId": "goofys-kitchen",
          "url": "/dining/disneyland-hotel/goofys-kitchen/",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/resort-dining/disneyland-hotel/goofys-kitchen/goofys-kitchen-06-sq.jpg?1684170870948",
            "alt": "Goofy wearing a chef’s ensemble presents his kitchen"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.808705,
        "lng": -117.927252,
        "name": "Goofy's Kitchen",
        "id": "354261;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "16032494;entityType=restaurant",
      "urlFriendlyId": "bayside-brews",
      "url": "/dining/disney-california-adventure/bayside-brews/",
      "name": "Bayside Brews",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "336973;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Bayside Brews",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/bayside-brews/bayside-brews-01-sq.jpg?1673560006639",
          "alt": "A flight of three beers",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/bayside-brews/bayside-brews-01-sq.jpg?1673560006639"
        },
        "finderStandardThumb": {
          "title": "Bayside Brews",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/bayside-brews/bayside-brews-01.jpg?1673560006639",
          "alt": "A flight of three beers",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/bayside-brews/bayside-brews-01.jpg?1673560006639"
        },
        "mapBubbleThumbLarge": {
          "title": "Bayside Brews",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/bayside-brews/bayside-brews-01-sq.jpg?1673560006639",
          "alt": "A flight of three beers",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/bayside-brews/bayside-brews-01-sq.jpg?1673560006639"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "type": [
          "park-admission-required"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "10:30:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "16032494",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "16032494;entityType=restaurant",
          "name": "Bayside Brews",
          "urlFriendlyId": "bayside-brews",
          "url": "/dining/disney-california-adventure/bayside-brews/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/bayside-brews/bayside-brews-01-sq.jpg?1673560006639",
            "alt": "A flight of three beers"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8058437811,
        "lng": -117.9228553176,
        "name": "Bayside Brews",
        "id": "16032494;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354414;entityType=restaurant",
      "urlFriendlyId": "plaza-inn",
      "url": "/dining/disneyland/plaza-inn/",
      "name": "Plaza Inn",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336938;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "Plaza inn",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/plaza-inn/plaza-inn-00.jpg?1687208431162",
          "alt": "Plaza Inn entrance sign, Disneyland Park.",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/plaza-inn/plaza-inn-00.jpg?1687208431162"
        },
        "mapBubbleThumbLarge": {
          "title": "Plaza inn",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/plaza-inn/plaza-inn-00.jpg?1687208431162",
          "alt": "Plaza Inn entrance sign, Disneyland Park.",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/plaza-inn/plaza-inn-00.jpg?1687208431162"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "checkAvailability": [
          "checkavailmodule"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "pixar-themed-food"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "guestRating": [
          "four-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$$",
          "$$$"
        ],
        "quickService": [
          "quick-service"
        ],
        "tableService": [
          "character-dining",
          "buffet-family-style",
          "reservations-accepted",
          "character-breakfast",
          "breakfast",
          "lunch-no-characters",
          "Dinner-no-characters"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "1309715",
        "reviewCount": 1078
      },
      "guestRating": 4.5,
      "quickServiceAvailable": true,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/357056",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/19636298",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/411905012"
      ],
      "locationName": "Disneyland Park",
      "facilityId": "354414",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service, Table Service",
      "type": {
        "facets": "Breakfast, Buffet/Family Style"
      },
      "marker": {
        "card": {
          "id": "354414;entityType=restaurant",
          "name": "Plaza Inn",
          "urlFriendlyId": "plaza-inn",
          "url": "/dining/disneyland/plaza-inn/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/plaza-inn/plaza-inn-00.jpg?1687208431162",
            "alt": "Plaza Inn entrance sign, Disneyland Park."
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8117514713,
        "lng": -117.918622265,
        "name": "Plaza Inn",
        "id": "354414;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "18516137;entityType=restaurant",
      "urlFriendlyId": "fruit-carts",
      "url": "/dining/fruit/",
      "name": "Fruit Carts",
      "parkIds": [
        "336894;entityType=theme-park",
        "330339;entityType=theme-park"
      ],
      "landId": "m",
      "media": {
        "finderStandardThumb": {
          "title": "Fruit Carts",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/fruit-cart-00.jpg?1677697228609",
          "alt": "A fruit stand with apples, bananas and oranges",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/fruit-cart-00.jpg?1677697228609"
        },
        "mapBubbleThumbLarge": {
          "title": "Fruit Carts",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/fruit-cart-00-sq.jpg?1677697228609",
          "alt": "A fruit stand with apples, bananas and oranges",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/fruit-cart-00-sq.jpg?1677697228609"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "carts-kiosks"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "locationName": "Multiple Locations",
      "locationsList": {
        "330339;entityType=theme-park": "Disneyland Park",
        "336894;entityType=theme-park": "Disney California Adventure Park"
      },
      "facilityId": "18516137",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "parkLocations": {
        "336894;entityType=theme-park": {
          "lat": 33.807721,
          "lng": -117.9174191,
          "name": "Fairfax Market",
          "id": "18615935;entityType=point-of-interest",
          "closeButtonLabel": "finder.maps.closePopUpButtonText",
          "pin": "activities"
        },
        "330339;entityType=theme-park": {
          "lat": 33.811607,
          "lng": -117.920095,
          "name": "Tropical Imports",
          "id": "18615926;entityType=point-of-interest",
          "closeButtonLabel": "finder.maps.closePopUpButtonText",
          "pin": "activities"
        }
      },
      "marker": {
        "card": {
          "id": "18516137;entityType=restaurant",
          "name": "Fruit Carts",
          "urlFriendlyId": "fruit-carts",
          "url": "/dining/fruit/",
          "land": "Critter Country Fruit Cart",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/fruit-cart-00-sq.jpg?1677697228609",
            "alt": "A fruit stand with apples, bananas and oranges"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.81239274,
        "lng": -117.9220131,
        "name": "Critter Country Fruit Cart",
        "id": "18518182;entityType=point-of-interest",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "411845225;entityType=restaurant",
      "urlFriendlyId": "good-boy-grocers",
      "url": "/dining/disneyland/good-boy-grocers/",
      "name": "Good Boy! Grocers",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336945;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/good-boy-grocers-market/20230318_0858_CT-2-1x1.jpg?2023-04-03T16:42:51+00:00",
          "alt": "Good Boy Grocers featuring Pluto on a sign in Mickey’s Toontown at Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/good-boy-grocers-market/20230318_0858_CT-2-1x1.jpg?2023-04-03T16:42:51+00:00"
        },
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/good-boy-grocers-market/20230318_0858_CT-2-16x9.jpg?2023-04-03T16:42:51+00:00",
          "alt": "Good Boy Grocers featuring Pluto on a sign in Mickey’s Toontown at Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/good-boy-grocers-market/20230318_0858_CT-2-16x9.jpg?2023-04-03T16:42:51+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/good-boy-grocers-market/20230318_0858_CT-2-1x1.jpg?2023-04-03T16:42:51+00:00",
          "alt": "Good Boy Grocers featuring Pluto on a sign in Mickey’s Toontown at Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/good-boy-grocers-market/20230318_0858_CT-2-1x1.jpg?2023-04-03T16:42:51+00:00"
        }
      },
      "facets": {
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "19:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "411845225",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "marker": {
        "card": {
          "id": "411845225;entityType=restaurant",
          "name": "Good Boy! Grocers",
          "urlFriendlyId": "good-boy-grocers",
          "url": "/dining/disneyland/good-boy-grocers/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/good-boy-grocers-market/20230318_0858_CT-2-1x1.jpg?2023-04-03T16:42:51+00:00",
            "alt": "Good Boy Grocers featuring Pluto on a sign in Mickey’s Toontown at Disneyland Park"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.81533,
        "lng": -117.918686,
        "name": "Good Boy! Grocers",
        "id": "411845225;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354498;entityType=restaurant",
      "urlFriendlyId": "golden-horseshoe-restaurant",
      "url": "/dining/disneyland/golden-horseshoe-restaurant/",
      "name": "The Golden Horseshoe",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336944;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "The Golden Horseshoe",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/golden-horseshoe/golden-horseshoe-00-sq.jpg?1673561038064",
          "alt": "The Golden Horseshoe sign for the theater and dining location in Frontierland",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/golden-horseshoe/golden-horseshoe-00-sq.jpg?1673561038064"
        },
        "finderStandardThumb": {
          "title": "The Golden Horseshoe",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/golden-horseshoe/golden-horseshoe-00.jpg?1673561038064",
          "alt": "The Golden Horseshoe sign for the theater and dining location in Frontierland",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/golden-horseshoe/golden-horseshoe-00.jpg?1673561038064"
        },
        "mapBubbleThumbLarge": {
          "title": "The Golden Horseshoe",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/golden-horseshoe/golden-horseshoe-00-sq.jpg?1673561038064",
          "alt": "The Golden Horseshoe sign for the theater and dining location in Frontierland",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/golden-horseshoe/golden-horseshoe-00-sq.jpg?1673561038064"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "guestRating": [
          "four-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "10:30:00",
            "endTime": "21:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "861154",
        "reviewCount": 409
      },
      "guestRating": 4,
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "354498",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "354498;entityType=restaurant",
          "name": "The Golden Horseshoe",
          "urlFriendlyId": "golden-horseshoe-restaurant",
          "url": "/dining/disneyland/golden-horseshoe-restaurant/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/golden-horseshoe/golden-horseshoe-00-sq.jpg?1673561038064",
            "alt": "The Golden Horseshoe sign for the theater and dining location in Frontierland"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8120514864,
        "lng": -117.9203117258,
        "name": "The Golden Horseshoe",
        "id": "354498;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "411896782;entityType=restaurant",
      "urlFriendlyId": "the-pizza-counter",
      "url": "/dining/downtown-disney-district/the-pizza-counter/",
      "name": "Pizza Counter",
      "parkIds": [
        "336978;entityType=Entertainment-Venue"
      ],
      "media": {
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/pizza-counter/Earl_Pizza-3-16x9.jpg?2023-03-29T18:02:50+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/pizza-counter/Earl_Pizza-3-16x9.jpg?2023-03-29T18:02:50+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/pizza-counter/Earl_Pizza-3-1x1.jpg?2023-03-29T18:02:50+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/pizza-counter/Earl_Pizza-3-1x1.jpg?2023-03-29T18:02:50+00:00"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "quickService": [
          "quick-service"
        ],
        "tableService": [
          "casual-dining",
          "lunch",
          "dinner"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "16:00:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Downtown Disney District",
      "facilityId": "411896782",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service, Table Service",
      "type": {
        "facets": "Casual Dining, Quick Service"
      },
      "marker": {
        "card": {
          "id": "411896782;entityType=restaurant",
          "name": "Pizza Counter",
          "urlFriendlyId": "the-pizza-counter",
          "url": "/dining/downtown-disney-district/the-pizza-counter/",
          "land": "Downtown Disney District",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/pizza-counter/Earl_Pizza-3-1x1.jpg?2023-03-29T18:02:50+00:00",
            "alt": ""
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.808842,
        "lng": -117.920255,
        "name": "Pizza Counter",
        "id": "411896782;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "18246297;entityType=restaurant",
      "urlFriendlyId": "galactic-grill",
      "url": "/dining/disneyland/galactic-grill/",
      "name": "Galactic Grill",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336947;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "A Cheeseburger and fries from Galactic Grill",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/galactic-grill/DLR-GG-Detail-CheeseburgerNoTomato.jpg?2021-07-01T03:07:32+00:00",
          "alt": "A Cheeseburger and fries from Galactic Grill",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/galactic-grill/DLR-GG-Detail-CheeseburgerNoTomato.jpg?2021-07-01T03:07:32+00:00"
        },
        "finderStandardThumb": {
          "title": "A Cheeseburger and fries from Galactic Grill",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/galactic-grill/DLR-GG-Detail-CheeseburgerNoTomato.jpg?2021-07-01T03:07:32+00:00",
          "alt": "A Cheeseburger and fries from Galactic Grill",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/galactic-grill/DLR-GG-Detail-CheeseburgerNoTomato.jpg?2021-07-01T03:07:32+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "A Cheeseburger and fries from Galactic Grill",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/galactic-grill/DLR-GG-Detail-CheeseburgerNoTomato.jpg?2021-07-01T03:07:32+00:00",
          "alt": "A Cheeseburger and fries from Galactic Grill",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/galactic-grill/DLR-GG-Detail-CheeseburgerNoTomato.jpg?2021-07-01T03:07:32+00:00"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine",
          "healthy-selections-cuisine",
          "vegetarian-cuisine"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "00:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "18246297",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "18246297;entityType=restaurant",
          "name": "Galactic Grill",
          "urlFriendlyId": "galactic-grill",
          "url": "/dining/disneyland/galactic-grill/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/galactic-grill/DLR-GG-Detail-CheeseburgerNoTomato.jpg?2021-07-01T03:07:32+00:00",
            "alt": "A Cheeseburger and fries from Galactic Grill"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.812449,
        "lng": -117.917296,
        "name": "Galactic Grill",
        "id": "18246297;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354276;entityType=restaurant",
      "urlFriendlyId": "hearthstone-lounge",
      "url": "/dining/grand-californian-hotel/hearthstone-lounge/",
      "name": "Hearthstone Lounge",
      "parkIds": [
        "334222;entityType=resort"
      ],
      "media": {
        "mapBubbleThumbSmall": {
          "title": "The lodge style interior of Hearthstone Lounge with dining tables , sofa seating and a bar. ",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/disneyland/dining/grand-californian-hotel/hearthstone-lounge/heartstone-1x1.jpg?1675116684814",
          "alt": "The lodge style interior of Hearthstone Lounge with dining tables , sofa seating and a bar. ",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/grand-californian-hotel/hearthstone-lounge/heartstone-1x1.jpg?1675116684814"
        },
        "finderStandardThumb": {
          "title": "The lodge style interior of Hearthstone Lounge with dining tables , sofa seating and a bar. ",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/grand-californian-hotel/hearthstone-lounge/heartstone-16x9.jpg?1675116684813",
          "alt": "The lodge style interior of Hearthstone Lounge with dining tables , sofa seating and a bar. ",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/grand-californian-hotel/hearthstone-lounge/heartstone-16x9.jpg?1675116684813"
        },
        "mapBubbleThumbLarge": {
          "title": "The lodge style interior of Hearthstone Lounge with dining tables , sofa seating and a bar. ",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/grand-californian-hotel/hearthstone-lounge/heartstone-1x1.jpg?1675116684813",
          "alt": "The lodge style interior of Hearthstone Lounge with dining tables , sofa seating and a bar. ",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/grand-californian-hotel/hearthstone-lounge/heartstone-1x1.jpg?1675116684813"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "otherDining": [
          "bars-and-lounges"
        ],
        "priceRange": [
          "$",
          "$$"
        ],
        "tableService": [
          "table-service"
        ],
        "validDays": [
          "every-day",
          "every-day-excludes-alcohol-gratuity-tax"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "12:00:00",
            "endTime": "01:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/368955"
      ],
      "facilityId": "354276",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Bars & Lounges"
      },
      "marker": {
        "card": {
          "id": "354276;entityType=restaurant",
          "name": "Hearthstone Lounge",
          "urlFriendlyId": "hearthstone-lounge",
          "url": "/dining/grand-californian-hotel/hearthstone-lounge/",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/grand-californian-hotel/hearthstone-lounge/heartstone-1x1.jpg?1675116684813",
            "alt": "The lodge style interior of Hearthstone Lounge with dining tables , sofa seating and a bar. "
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.807707,
        "lng": -117.9222708791,
        "name": "Hearthstone Lounge",
        "id": "354276;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354465;entityType=restaurant",
      "urlFriendlyId": "stage-door-cafe",
      "url": "/dining/disneyland/stage-door-cafe/",
      "name": "Stage Door Café",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336944;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Stage Door Cafe",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/stage-door-cafe/stage-door-cafe-00-sq.jpg?1673561971882",
          "alt": "Western-themed entrance sign for Stage Door Cafe at Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/stage-door-cafe/stage-door-cafe-00-sq.jpg?1673561971882"
        },
        "finderStandardThumb": {
          "title": "Stage Door Cafe",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/stage-door-cafe/stage-door-cafe-00.jpg?1673561971882",
          "alt": "Western-themed entrance sign for Stage Door Cafe at Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/stage-door-cafe/stage-door-cafe-00.jpg?1673561971882"
        },
        "mapBubbleThumbLarge": {
          "title": "Stage Door Cafe",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/stage-door-cafe/stage-door-cafe-00-sq.jpg?1673561971882",
          "alt": "Western-themed entrance sign for Stage Door Cafe at Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/stage-door-cafe/stage-door-cafe-00-sq.jpg?1673561971882"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "pixar-themed-food"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "guestRating": [
          "four-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "10:00:00",
            "endTime": "23:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "1852518",
        "reviewCount": 113
      },
      "guestRating": 4,
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "354465",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "354465;entityType=restaurant",
          "name": "Stage Door Café",
          "urlFriendlyId": "stage-door-cafe",
          "url": "/dining/disneyland/stage-door-cafe/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/stage-door-cafe/stage-door-cafe-00-sq.jpg?1673561971882",
            "alt": "Western-themed entrance sign for Stage Door Cafe at Disneyland Park"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.811889,
        "lng": -117.9203,
        "name": "Stage Door Café",
        "id": "354465;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "19624438;entityType=restaurant",
      "urlFriendlyId": "pym-tasting-lab",
      "url": "/dining/disney-california-adventure/pym-tasting-lab/",
      "name": "Pym Tasting Lab",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "19459756;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/disneyland/destinations/disney-california-adventure/avengers-campus/pym-kitchen-1x1_1.jpg?1686163277709",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/avengers-campus/pym-kitchen-1x1_1.jpg?1686163277709"
        },
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disney-california-adventure/avengers-campus/pym-kitchen-16x9_1.jpg?1686163277709",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/avengers-campus/pym-kitchen-16x9_1.jpg?1686163277709"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disney-california-adventure/avengers-campus/pym-kitchen-1x1_1.jpg?1686163277709",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disney-california-adventure/avengers-campus/pym-kitchen-1x1_1.jpg?1686163277709"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "otherDining": [
          "bars-and-lounges"
        ],
        "parkInterests": [
          "whats-new-rec"
        ],
        "priceRange": [
          "$"
        ],
        "specialEvent": [
          "food-and-wine"
        ],
        "tableService": [
          "special-unique-dining"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {
        "advancedFinderTheme": "ac"
      },
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "19624438",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Bars & Lounges, Mobile Orders"
      },
      "marker": {
        "card": {
          "id": "19624438;entityType=restaurant",
          "name": "Pym Tasting Lab",
          "urlFriendlyId": "pym-tasting-lab",
          "url": "/dining/disney-california-adventure/pym-tasting-lab/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disney-california-adventure/avengers-campus/pym-kitchen-1x1_1.jpg?1686163277709",
            "alt": ""
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.806723,
        "lng": -117.917516,
        "name": "Pym Tasting Lab",
        "id": "19624438;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "18515597;entityType=restaurant",
      "urlFriendlyId": "festive-foods-marketplaces",
      "url": "/dining/disney-california-adventure/festive-foods-marketplaces/",
      "name": "Festive Foods Marketplace",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "media": {
        "finderStandardThumb": {
          "title": "A Mickey ears holiday tree cookie and a Minnie bow snowman face holiday cookie sit on a plate atop a plaid napkin",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/disney-california-adventure/festive-foods-marketplaces/holiday-duets-mickey-and-minnie-cookies-16x9.jpg?1676579893079",
          "alt": "A Mickey ears holiday tree cookie and a Minnie bow snowman face holiday cookie sit on a plate atop a plaid napkin",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disney-california-adventure/festive-foods-marketplaces/holiday-duets-mickey-and-minnie-cookies-16x9.jpg?1676579893079"
        },
        "mapBubbleThumbLarge": {
          "title": "A Mickey ears holiday tree cookie and a Minnie bow snowman face holiday cookie sit on a plate atop a plaid napkin",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/disney-california-adventure/festive-foods-marketplaces/holiday-duets-mickey-and-minnie-cookies-1x1.jpg?1676579893079",
          "alt": "A Mickey ears holiday tree cookie and a Minnie bow snowman face holiday cookie sit on a plate atop a plaid napkin",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disney-california-adventure/festive-foods-marketplaces/holiday-duets-mickey-and-minnie-cookies-1x1.jpg?1676579893079"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine",
          "californian-cuisine",
          "mexican-cuisine"
        ],
        "diningExperience": [
          "carts-kiosks"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "quickService": [
          "quick-service"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "18515597",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "18515597;entityType=restaurant",
          "name": "Festive Foods Marketplace",
          "urlFriendlyId": "festive-foods-marketplaces",
          "url": "/dining/disney-california-adventure/festive-foods-marketplaces/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/disney-california-adventure/festive-foods-marketplaces/holiday-duets-mickey-and-minnie-cookies-1x1.jpg?1676579893079",
            "alt": "A Mickey ears holiday tree cookie and a Minnie bow snowman face holiday cookie sit on a plate atop a plaid napkin"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.80878,
        "lng": -117.9189011997,
        "name": "Festive Foods Marketplace",
        "id": "18515597;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "18516135;entityType=restaurant",
      "urlFriendlyId": "pretzels",
      "url": "/dining/pretzels/",
      "name": "Pretzel Carts",
      "parkIds": [
        "336894;entityType=theme-park",
        "330339;entityType=theme-park"
      ],
      "landId": "m",
      "media": {
        "finderStandardThumb": {
          "title": "Pretzel Carts",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/pretzel-cart-02.jpg?1673559484036",
          "alt": "A Mickey shaped pretzel",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/pretzel-cart-02.jpg?1673559484036"
        },
        "mapBubbleThumbLarge": {
          "title": "Pretzel Carts",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/pretzel-cart-02-sq.jpg?1673559484036",
          "alt": "A Mickey shaped pretzel",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/pretzel-cart-02-sq.jpg?1673559484036"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "carts-kiosks",
          "pixar-themed-food"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "locationName": "Multiple Locations",
      "locationsList": {
        "330339;entityType=theme-park": "Disneyland Park",
        "336894;entityType=theme-park": "Disney California Adventure Park"
      },
      "facilityId": "18516135",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "parkLocations": {
        "336894;entityType=theme-park": {
          "lat": 33.80584378,
          "lng": -117.9228553,
          "name": "Bayside Brews",
          "id": "18615805;entityType=point-of-interest",
          "closeButtonLabel": "finder.maps.closePopUpButtonText",
          "pin": "activities"
        },
        "330339;entityType=theme-park": {
          "lat": 33.8114464994,
          "lng": -117.9190483181,
          "name": "Refreshment Corner",
          "id": "19630097;entityType=point-of-interest",
          "closeButtonLabel": "finder.maps.closePopUpButtonText",
          "pin": "activities"
        }
      },
      "marker": {
        "card": {
          "id": "18516135;entityType=restaurant",
          "name": "Pretzel Carts",
          "urlFriendlyId": "pretzels",
          "url": "/dining/pretzels/",
          "land": "Pretzels near Star Tours - The Adventures Continue",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/pretzel-cart-02-sq.jpg?1673559484036",
            "alt": "A Mickey shaped pretzel"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.812082,
        "lng": -117.917477,
        "name": "Pretzels near Star Tours - The Adventures Continue",
        "id": "18518204;entityType=point-of-interest",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "16486843;entityType=restaurant",
      "urlFriendlyId": "flos-v8-cafe",
      "url": "/dining/disney-california-adventure/flos-v8-cafe/",
      "name": "Flo's V8 Cafe",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "16505425;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "fpo",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/flos-v8-cafe/flos-v8-cafe-00.jpg?1673558951446",
          "alt": "Gas station-themed entrance to Flo's V8 Cafe lit with neon signs at night",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/flos-v8-cafe/flos-v8-cafe-00.jpg?1673558951446"
        },
        "mapBubbleThumbLarge": {
          "title": "fpo",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/flos-v8-cafe/flos-v8-cafe-00-sq.jpg?1673558951446",
          "alt": "Gas station-themed entrance to Flo's V8 Cafe lit with neon signs at night",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/flos-v8-cafe/flos-v8-cafe-00-sq.jpg?1673558951446"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "pixar-themed-food"
        ],
        "diningInterests": [
          "quick-service-rec"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "disneyFavorites": [
          "pixar-rec"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "type": [
          "park-admission-required"
        ],
        "validDays": [
          "every-day",
          "every-day-excludes-alcohol-gratuity-tax"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "09:30:00",
            "endTime": "22:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "16486843",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "16486843;entityType=restaurant",
          "name": "Flo's V8 Cafe",
          "urlFriendlyId": "flos-v8-cafe",
          "url": "/dining/disney-california-adventure/flos-v8-cafe/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/flos-v8-cafe/flos-v8-cafe-00-sq.jpg?1673558951446",
            "alt": "Gas station-themed entrance to Flo's V8 Cafe lit with neon signs at night"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8055498861,
        "lng": -117.9189880233,
        "name": "Flo's V8 Cafe",
        "id": "16486843;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "19268333;entityType=restaurant",
      "urlFriendlyId": "ronto-roasters",
      "url": "/dining/disneyland/ronto-roasters/",
      "name": "Ronto Roasters",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "19025523;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disneyland/star-wars-galaxys-edge/photography/rontos-roasters-16x9.jpg?1673561803039",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disneyland/star-wars-galaxys-edge/photography/rontos-roasters-16x9.jpg?1673561803039"
        },
        "mapBubbleThumbLarge": {
          "title": "Visitors enjoy restaurant where meats are roasted under the fire of a Star Wars podracer engine",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disneyland/star-wars-galaxys-edge/photography/rontos-roasters-1x1.jpg?1673561803040",
          "alt": "Visitors enjoy restaurant where meats are roasted under the fire of a Star Wars podracer engine",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/destinations/disneyland/star-wars-galaxys-edge/photography/rontos-roasters-1x1.jpg?1673561803040"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "carts-kiosks"
        ],
        "diningInterests": [
          "character-dining-rec",
          "quick-service-rec"
        ],
        "disneyFavorites": [
          "star-wars-rec"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "validDays": [
          "every-day-novelty-items"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "00:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "19268333",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Mobile Orders, Quick Service"
      },
      "marker": {
        "card": {
          "id": "19268333;entityType=restaurant",
          "name": "Ronto Roasters",
          "urlFriendlyId": "ronto-roasters",
          "url": "/dining/disneyland/ronto-roasters/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/destinations/disneyland/star-wars-galaxys-edge/photography/rontos-roasters-1x1.jpg?1673561803040",
            "alt": "Visitors enjoy restaurant where meats are roasted under the fire of a Star Wars podracer engine"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.814424,
        "lng": -117.921484,
        "name": "Ronto Roasters",
        "id": "19268333;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354123;entityType=restaurant",
      "urlFriendlyId": "cappuccino-cart",
      "url": "/dining/disney-california-adventure/cappuccino-cart/",
      "name": "Cappuccino Cart",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "336977;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/resorts/disneys-grand-californian-hotel-and-spa/DLR_DCA_CappoCart_GroupCoffee_09152021_DSC00472DN-2-1x1.jpg?2021-09-24T18:33:23+00:00",
          "alt": "A selection of iced and warm beverages from the Cappuccino Cart at Disney California Adventure Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/resorts/disneys-grand-californian-hotel-and-spa/DLR_DCA_CappoCart_GroupCoffee_09152021_DSC00472DN-2-1x1.jpg?2021-09-24T18:33:23+00:00"
        },
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/resorts/disneys-grand-californian-hotel-and-spa/DLR_DCA_CappoCart_GroupCoffee_09152021_DSC00472DN-2-16x9.jpg?2021-09-24T18:33:23+00:00",
          "alt": "A selection of iced and warm beverages from the Cappuccino Cart at Disney California Adventure Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/resorts/disneys-grand-californian-hotel-and-spa/DLR_DCA_CappoCart_GroupCoffee_09152021_DSC00472DN-2-16x9.jpg?2021-09-24T18:33:23+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/resorts/disneys-grand-californian-hotel-and-spa/DLR_DCA_CappoCart_GroupCoffee_09152021_DSC00472DN-2-1x1.jpg?2021-09-24T18:33:23+00:00",
          "alt": "A selection of iced and warm beverages from the Cappuccino Cart at Disney California Adventure Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/resorts/disneys-grand-californian-hotel-and-spa/DLR_DCA_CappoCart_GroupCoffee_09152021_DSC00472DN-2-1x1.jpg?2021-09-24T18:33:23+00:00"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine"
        ],
        "diningExperience": [
          "carts-kiosks"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "features": [
          "mobile-orders"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "specialEvent": [
          "disney-festival-of-holidays"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ],
        "wdw-finder-listing": [
          "FinderPCDining"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Early Entry",
            "startTime": "07:30:00",
            "endTime": "08:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          },
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "21:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disney California Adventure Park",
      "facilityId": "354123",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "type": {
        "facets": "Mobile Orders"
      },
      "marker": {
        "card": {
          "id": "354123;entityType=restaurant",
          "name": "Cappuccino Cart",
          "urlFriendlyId": "cappuccino-cart",
          "url": "/dining/disney-california-adventure/cappuccino-cart/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/resorts/disneys-grand-californian-hotel-and-spa/DLR_DCA_CappoCart_GroupCoffee_09152021_DSC00472DN-2-1x1.jpg?2021-09-24T18:33:23+00:00",
            "alt": "A selection of iced and warm beverages from the Cappuccino Cart at Disney California Adventure Park"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.806019,
        "lng": -117.920722,
        "name": "Cappuccino Cart",
        "id": "354123;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "18735825;entityType=restaurant",
      "urlFriendlyId": "splitsville-restaurant",
      "url": "/dining/downtown-disney-district/splitsville-restaurant/",
      "name": "Splitsville Luxury Lanes™ – Dining",
      "parkIds": [
        "336978;entityType=Entertainment-Venue"
      ],
      "media": {
        "mapBubbleThumbSmall": {
          "title": "The contemporary exterior of Splitsville with its two stories and the neon Splitsville sign over the entrance",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/disneyland/entertainment/downtown-disney-district/splitsville-luxury-lanes/SV_exteriordawn-1x1.jpg?1656021858933",
          "alt": "The contemporary exterior of Splitsville with its two stories and the neon Splitsville sign over the entrance",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/entertainment/downtown-disney-district/splitsville-luxury-lanes/SV_exteriordawn-1x1.jpg?1656021858933"
        },
        "finderStandardThumb": {
          "title": "The contemporary exterior of Splitsville with its two stories and the neon Splitsville sign over the entrance",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/entertainment/downtown-disney-district/splitsville-luxury-lanes/SV_exteriordawn-16x9.jpg?1656021858932",
          "alt": "The contemporary exterior of Splitsville with its two stories and the neon Splitsville sign over the entrance",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/entertainment/downtown-disney-district/splitsville-luxury-lanes/SV_exteriordawn-16x9.jpg?1656021858932"
        },
        "mapBubbleThumbLarge": {
          "title": "The contemporary exterior of Splitsville with its two stories and the neon Splitsville sign over the entrance",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/entertainment/downtown-disney-district/splitsville-luxury-lanes/SV_exteriordawn-1x1.jpg?1656021858933",
          "alt": "The contemporary exterior of Splitsville with its two stories and the neon Splitsville sign over the entrance",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/entertainment/downtown-disney-district/splitsville-luxury-lanes/SV_exteriordawn-1x1.jpg?1656021858933"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "checkAvailability": [
          "checkavailmodule"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "priceRange": [
          "$$"
        ],
        "tableService": [
          "special-unique-dining",
          "table-service",
          "reservations-accepted",
          "breakfast"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "23:55:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/18971565",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/18971566"
      ],
      "locationName": "Downtown Disney District",
      "facilityId": "18735825",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Breakfast, Reservations Accepted"
      },
      "marker": {
        "card": {
          "id": "18735825;entityType=restaurant",
          "name": "Splitsville Luxury Lanes™ – Dining",
          "urlFriendlyId": "splitsville-restaurant",
          "url": "/dining/downtown-disney-district/splitsville-restaurant/",
          "land": "Downtown Disney District",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/entertainment/downtown-disney-district/splitsville-luxury-lanes/SV_exteriordawn-1x1.jpg?1656021858933",
            "alt": "The contemporary exterior of Splitsville with its two stories and the neon Splitsville sign over the entrance"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.809328,
        "lng": -117.923232,
        "name": "Splitsville Luxury Lanes™ – Dining",
        "id": "18735825;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "17394022;entityType=restaurant",
      "urlFriendlyId": "market-house",
      "url": "/dining/disneyland/market-house/",
      "name": "Market House",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336938;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "Market House",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/market-house/market-house-01.jpg?1673561437023",
          "alt": "A foamy cup of cappuccino from Starbucks plated beside a scattered array of espresso beans",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/market-house/market-house-01.jpg?1673561437023"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "cuisine": [
          "american-cuisine",
          "healthy-selections-cuisine",
          "vegetarian-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$"
        ],
        "quickService": [
          "quick-service"
        ],
        "validDays": [
          "every-day"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Early Entry",
            "startTime": "07:30:00",
            "endTime": "08:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          },
          {
            "type": "Operating",
            "startTime": "08:00:00",
            "endTime": "00:30:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "true",
      "generalPurposeStrings": {},
      "quickServiceAvailable": true,
      "locationName": "Disneyland Park",
      "facilityId": "17394022",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Quick Service",
      "type": {
        "facets": "Quick Service"
      },
      "marker": {
        "card": {
          "id": "17394022;entityType=restaurant",
          "name": "Market House",
          "urlFriendlyId": "market-house",
          "url": "/dining/disneyland/market-house/",
          "land": "Disneyland Park",
          "media": {},
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.81089,
        "lng": -117.918875,
        "name": "Market House",
        "id": "17394022;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354528;entityType=restaurant",
      "urlFriendlyId": "tortilla-jos",
      "url": "/dining/downtown-disney-district/tortilla-jos/",
      "name": "Tortilla Jo's",
      "parkIds": [
        "336978;entityType=Entertainment-Venue"
      ],
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Entrance and sign for Tortilla Jo's Mexican Cantina at Downtown Disney District",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/tortilla-jos/dlr-tortilla-joes-exterior-1x1.jpg?1611936402440",
          "alt": "Entrance and sign for Tortilla Jo's Mexican Cantina at Downtown Disney District",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/tortilla-jos/dlr-tortilla-joes-exterior-1x1.jpg?1611936402440"
        },
        "finderStandardThumb": {
          "title": "Entrance and sign for Tortilla Jo's Mexican Cantina at Downtown Disney District",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/tortilla-jos/dlr-tortilla-joes-exterior-16x9.jpg?1611936402438",
          "alt": "Entrance and sign for Tortilla Jo's Mexican Cantina at Downtown Disney District",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/tortilla-jos/dlr-tortilla-joes-exterior-16x9.jpg?1611936402438"
        },
        "mapBubbleThumbLarge": {
          "title": "Entrance and sign for Tortilla Jo's Mexican Cantina at Downtown Disney District",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/tortilla-jos/dlr-tortilla-joes-exterior-1x1.jpg?1611936402439",
          "alt": "Entrance and sign for Tortilla Jo's Mexican Cantina at Downtown Disney District",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/tortilla-jos/dlr-tortilla-joes-exterior-1x1.jpg?1611936402439"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "checkAvailability": [
          "checkavailmodule"
        ],
        "cuisine": [
          "mexican-cuisine"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "guestRating": [
          "four-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "otherDining": [
          "bars-and-lounges"
        ],
        "priceRange": [
          "$$"
        ],
        "tableService": [
          "casual-dining",
          "table-service",
          "reservations-accepted",
          "breakfast"
        ],
        "validDays": [
          "every-day-no-alcohol-tax-tip"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "23:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "495348",
        "reviewCount": 1735
      },
      "guestRating": 4,
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/357204",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/369740",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/18394742"
      ],
      "locationName": "Downtown Disney District",
      "facilityId": "354528",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Bars & Lounges, Breakfast"
      },
      "marker": {
        "card": {
          "id": "354528;entityType=restaurant",
          "name": "Tortilla Jo's",
          "urlFriendlyId": "tortilla-jos",
          "url": "/dining/downtown-disney-district/tortilla-jos/",
          "land": "Downtown Disney District",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/tortilla-jos/dlr-tortilla-joes-exterior-1x1.jpg?1611936402439",
            "alt": "Entrance and sign for Tortilla Jo's Mexican Cantina at Downtown Disney District"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8093317508,
        "lng": -117.9235661693,
        "name": "Tortilla Jo's",
        "id": "354528;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "354378;entityType=restaurant",
      "urlFriendlyId": "naples-ristorante-e-bar",
      "url": "/dining/downtown-disney-district/naples-ristorante-e-bar/",
      "name": "Naples Ristorante e Bar",
      "parkIds": [
        "336978;entityType=Entertainment-Venue"
      ],
      "media": {
        "finderStandardThumb": {
          "title": "The modern style entrance to Naples Ristorante e Bar with outdoor seating",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/downtown-disney/naples-ristorante-e-pizzeria/naples-exterior-sign-16x9.jpg?1635184779998",
          "alt": "The modern style entrance to Naples Ristorante e Bar with outdoor seating",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/downtown-disney/naples-ristorante-e-pizzeria/naples-exterior-sign-16x9.jpg?1635184779998"
        },
        "mapBubbleThumbLarge": {
          "title": "The modern style entrance to Naples Ristorante e Bar with outdoor seating",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/downtown-disney/naples-ristorante-e-pizzeria/naples-exterior-sign-1x1.jpg?1635184779998",
          "alt": "The modern style entrance to Naples Ristorante e Bar with outdoor seating",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/downtown-disney/naples-ristorante-e-pizzeria/naples-exterior-sign-1x1.jpg?1635184779998"
        }
      },
      "facets": {
        "annualPass": [
          "dream-key-pass",
          "believe-key-pass",
          "enchant-key-pass",
          "imagine-key-pass",
          "inspire-key-pass"
        ],
        "checkAvailability": [
          "checkavailmodule"
        ],
        "cuisine": [
          "italian-cuisine"
        ],
        "discounts": [
          "disney-vacation-club-member"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "guestRating": [
          "four-stars"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$$"
        ],
        "tableService": [
          "table-service",
          "reservations-accepted"
        ],
        "validDays": [
          "every-day-no-alcohol-tax-tip"
        ],
        "wdproInternal": [
          "is-dlr-restaurant"
        ]
      },
      "descriptions": {},
      "schedule": {
        "timeZone": "America/Los_Angeles",
        "schedules": [
          {
            "type": "Operating",
            "startTime": "11:00:00",
            "endTime": "23:00:00",
            "date": "2023-06-30",
            "timeZone": "PDT",
            "isClosed": false
          }
        ]
      },
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "reviews": {
        "externalId": "1019443",
        "reviewCount": 1389
      },
      "guestRating": 4,
      "quickServiceAvailable": true,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/411942863",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/357066",
        "https://productsvc.wdprapps.disney.com/product-service/table-service-products/369701"
      ],
      "locationName": "Downtown Disney District",
      "facilityId": "354378",
      "entityType": "restaurant",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Reservations Accepted"
      },
      "marker": {
        "card": {
          "id": "354378;entityType=restaurant",
          "name": "Naples Ristorante e Bar",
          "urlFriendlyId": "naples-ristorante-e-bar",
          "url": "/dining/downtown-disney-district/naples-ristorante-e-bar/",
          "land": "Downtown Disney District",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/downtown-disney/naples-ristorante-e-pizzeria/naples-exterior-sign-1x1.jpg?1635184779998",
            "alt": "The modern style entrance to Naples Ristorante e Bar with outdoor seating"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.808879,
        "lng": -117.922094,
        "name": "Naples Ristorante e Bar",
        "id": "354378;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "18701288;entityType=Dining-Event",
      "urlFriendlyId": "tomorrowland-skyline-terrace",
      "url": "/dining/disneyland/tomorrowland-skyline-terrace/",
      "name": "Tomorrowland Skyline Terrace",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Tomorrowland Skyline Lounge Experience",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/tomorrowland-skyline-lounge/tomorrowland-skyline-lounge-experience-wide-view-1x1.jpg?1682352940601",
          "alt": "Spotlights crisscross the night sky from atop the Observatron in Tomorrowland with the Matterhorn behind",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/tomorrowland-skyline-lounge/tomorrowland-skyline-lounge-experience-wide-view-1x1.jpg?1682352940601"
        },
        "finderStandardThumb": {
          "title": "Tomorrowland Skyline Lounge Experience",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/tomorrowland-skyline-lounge/tomorrowland-skyline-lounge-experience-wide-view-16x9.jpg?1682352940601",
          "alt": "Spotlights crisscross the night sky from atop the Observatron in Tomorrowland with the Matterhorn behind",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/tomorrowland-skyline-lounge/tomorrowland-skyline-lounge-experience-wide-view-16x9.jpg?1682352940601"
        },
        "mapBubbleThumbLarge": {
          "title": "Tomorrowland Skyline Lounge Experience",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/tomorrowland-skyline-lounge/tomorrowland-skyline-lounge-experience-wide-view-1x1.jpg?1682352940601",
          "alt": "Spotlights crisscross the night sky from atop the Observatron in Tomorrowland with the Matterhorn behind",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/tomorrowland-skyline-lounge/tomorrowland-skyline-lounge-experience-wide-view-1x1.jpg?1682352940601"
        }
      },
      "facets": {
        "checkAvailability": [
          "checkavailmodule"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "priceRange": [
          "$$$$"
        ],
        "tableService": [
          "dine-events",
          "dine-events",
          "reservations-accepted"
        ],
        "type": [
          "admission-required"
        ]
      },
      "descriptions": {},
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/18701279",
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/18835613",
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/19043394",
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/411905051"
      ],
      "restaurants": [
        {
          "coordinates": {
            "Guest Entrance": {
              "gps": {
                "latitude": "33.811854",
                "longitude": "-117.916857"
              }
            }
          },
          "id": "18516055;entityType=restaurant",
          "name": "Tomorrowland Skyline Terrace"
        }
      ],
      "maximumPartySize": "14",
      "locationName": "Disneyland Park",
      "facilityId": "18701288",
      "restaurantsIds": [
        "18516055"
      ],
      "entityType": "Dining-Event",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Dining Events, Dining Events"
      },
      "marker": {
        "card": {
          "id": "18701288;entityType=Dining-Event",
          "name": "Tomorrowland Skyline Terrace",
          "urlFriendlyId": "tomorrowland-skyline-terrace",
          "url": "/dining/disneyland/tomorrowland-skyline-terrace/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/tomorrowland-skyline-lounge/tomorrowland-skyline-lounge-experience-wide-view-1x1.jpg?1682352940601",
            "alt": "Spotlights crisscross the night sky from atop the Observatron in Tomorrowland with the Matterhorn behind"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.811854,
        "lng": -117.916857,
        "name": "Tomorrowland Skyline Terrace",
        "id": "18516055;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "19140685;entityType=Dining-Event",
      "urlFriendlyId": "disney-princess-breakfast-adventures",
      "url": "/dining/grand-californian-hotel/disney-princess-breakfast-adventures/",
      "name": "Disney Princess Breakfast Adventures",
      "parkIds": [
        "334222;entityType=resort"
      ],
      "media": {
        "mapBubbleThumbSmall": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/entertainment/meet-greet/disney/4026378_71_0424ZR_04649CM_aRGB_r1-1x1.jpg?2021-08-10T18:42:14+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/entertainment/meet-greet/disney/4026378_71_0424ZR_04649CM_aRGB_r1-1x1.jpg?2021-08-10T18:42:14+00:00"
        },
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/entertainment/meet-greet/disney/4026378_71_0424ZR_04649CM_aRGB_r1-16x9.jpg?2021-08-10T18:42:14+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/entertainment/meet-greet/disney/4026378_71_0424ZR_04649CM_aRGB_r1-16x9.jpg?2021-08-10T18:42:14+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/entertainment/meet-greet/disney/4026378_71_0424ZR_04649CM_aRGB_r1-1x1.jpg?2021-08-10T18:42:14+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/entertainment/meet-greet/disney/4026378_71_0424ZR_04649CM_aRGB_r1-1x1.jpg?2021-08-10T18:42:14+00:00"
        }
      },
      "facets": {
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mealPeriod": [
          "breakfast"
        ],
        "mobilityDisability": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$$$$"
        ],
        "tableService": [
          "character-dining",
          "dine-events",
          "dine-events",
          "reservations-accepted"
        ]
      },
      "descriptions": {},
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/19140412"
      ],
      "restaurants": [
        {
          "coordinates": {
            "Guest Entrance": {
              "gps": {
                "latitude": "33.8078731418",
                "longitude": "-117.9215664344"
              }
            }
          },
          "id": "354372;entityType=restaurant",
          "name": "Napa Rose"
        }
      ],
      "maximumPartySize": "6",
      "facilityId": "19140685",
      "restaurantsIds": [
        "354372"
      ],
      "entityType": "Dining-Event",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Breakfast, Character Dining"
      },
      "marker": {
        "card": {
          "id": "19140685;entityType=Dining-Event",
          "name": "Disney Princess Breakfast Adventures",
          "urlFriendlyId": "disney-princess-breakfast-adventures",
          "url": "/dining/grand-californian-hotel/disney-princess-breakfast-adventures/",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/entertainment/meet-greet/disney/4026378_71_0424ZR_04649CM_aRGB_r1-1x1.jpg?2021-08-10T18:42:14+00:00",
            "alt": ""
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8078731418,
        "lng": -117.9215664344,
        "name": "Napa Rose",
        "id": "354372;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "18090211;entityType=Dining-Event",
      "urlFriendlyId": "world-of-color-dessert-party",
      "url": "/dining/disney-california-adventure/world-of-color-dessert-party/",
      "name": "World of Color Dessert Party",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "336973;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "The World of Color show with colorful water sprays and the Pixar Pal A Round Swinging attraction lit up at night.",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/entertainment/world-of-color/world-of-color-dessert-party-16x9-16x9.jpg?2022-05-19T13:10:06+00:00",
          "alt": "The World of Color show with colorful water sprays and the Pixar Pal A Round Swinging attraction lit up at night.",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/entertainment/world-of-color/world-of-color-dessert-party-16x9-16x9.jpg?2022-05-19T13:10:06+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/world-of-color-dessert-party/world-of-color-dessert-party-1x1.jpg?1686167870330",
          "alt": "The fountains, lasers and projections at the World of Color nighttime spectacular light up the night sky",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/world-of-color-dessert-party/world-of-color-dessert-party-1x1.jpg?1686167870330"
        }
      },
      "facets": {
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "eec-age": [
          "eec-adults",
          "eec-all-ages",
          "eec-kids",
          "eec-teens"
        ],
        "eec-category": [
          "spectacular-sweet-spots"
        ],
        "priceRange": [
          "$$$$",
          "$$$$"
        ],
        "tableService": [
          "dine-events",
          "dine-events",
          "reservations-accepted"
        ],
        "type": [
          "admission-required"
        ]
      },
      "descriptions": {},
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/18086499"
      ],
      "restaurants": [
        {
          "coordinates": {
            "Guest Entrance": {
              "gps": {
                "latitude": "33.806031",
                "longitude": "-117.921193"
              }
            }
          },
          "id": "18087702;entityType=restaurant",
          "name": "Paradise Gardens Park Events"
        }
      ],
      "maximumPartySize": "14",
      "locationName": "Disney California Adventure Park",
      "facilityId": "18090211",
      "restaurantsIds": [
        "18087702"
      ],
      "entityType": "Dining-Event",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Dining Events, Dining Events"
      },
      "marker": {
        "card": {
          "id": "18090211;entityType=Dining-Event",
          "name": "World of Color Dessert Party",
          "urlFriendlyId": "world-of-color-dessert-party",
          "url": "/dining/disney-california-adventure/world-of-color-dessert-party/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/world-of-color-dessert-party/world-of-color-dessert-party-1x1.jpg?1686167870330",
            "alt": "The fountains, lasers and projections at the World of Color nighttime spectacular light up the night sky"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.806031,
        "lng": -117.921193,
        "name": "Paradise Gardens Park Events",
        "id": "18087702;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "411841697;entityType=Dining-Event",
      "urlFriendlyId": "cafe-orleans-dining-package",
      "url": "/dining/disneyland/cafe-orleans-dining-package/",
      "name": "Cafe Orleans Dining Package",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336946;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Café Orleans",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/cafe-orleans/cafe-orleans-03-sq.jpg?1686908030724",
          "alt": "Outdoor Café Orleans tables line a small corner of New Orleans Square in Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/cafe-orleans/cafe-orleans-03-sq.jpg?1686908030724"
        },
        "finderStandardThumb": {
          "title": "Café Orleans",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/cafe-orleans/cafe-orleans-03.jpg?1686908030725",
          "alt": "Outdoor Café Orleans tables line a small corner of New Orleans Square in Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/cafe-orleans/cafe-orleans-03.jpg?1686908030725"
        },
        "mapBubbleThumbLarge": {
          "title": "Café Orleans",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/cafe-orleans/cafe-orleans-03-sq.jpg?1686908030725",
          "alt": "Outdoor Café Orleans tables line a small corner of New Orleans Square in Disneyland Park",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/cafe-orleans/cafe-orleans-03-sq.jpg?1686908030725"
        }
      },
      "facets": {
        "checkAvailability": [
          "checkavailmodule"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisability": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$$",
          "$$$",
          "$$$"
        ],
        "tableService": [
          "casual-dining",
          "dine-events",
          "dine-events",
          "reservations-accepted"
        ]
      },
      "descriptions": {},
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/411841766",
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/411848187",
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/411890701",
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/411919253"
      ],
      "restaurants": [
        {
          "coordinates": {
            "Guest Entrance": {
              "gps": {
                "latitude": "33.811205",
                "longitude": "-117.921262"
              }
            }
          },
          "id": "354117;entityType=restaurant",
          "name": "Cafe Orleans"
        }
      ],
      "maximumPartySize": "8",
      "locationName": "Disneyland Park",
      "facilityId": "411841697",
      "restaurantsIds": [
        "354117"
      ],
      "entityType": "Dining-Event",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Casual Dining, Dining Events"
      },
      "marker": {
        "card": {
          "id": "411841697;entityType=Dining-Event",
          "name": "Cafe Orleans Dining Package",
          "urlFriendlyId": "cafe-orleans-dining-package",
          "url": "/dining/disneyland/cafe-orleans-dining-package/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/cafe-orleans/cafe-orleans-03-sq.jpg?1686908030725",
            "alt": "Outdoor Café Orleans tables line a small corner of New Orleans Square in Disneyland Park"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.811205,
        "lng": -117.921262,
        "name": "Cafe Orleans",
        "id": "354117;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "18994149;entityType=Dining-Event",
      "urlFriendlyId": "plaza-inn-dining-package",
      "url": "/dining/disneyland/plaza-inn-dining-package/",
      "name": "Plaza Inn Dining Packages",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336938;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "Plaza Inn entrance sign, Disneyland Park.",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/plaza-inn-dining-package/plaza-inn-sign-1x1.jpg?1684428056766",
          "alt": "Plaza Inn entrance sign, Disneyland Park.",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/plaza-inn-dining-package/plaza-inn-sign-1x1.jpg?1684428056766"
        },
        "finderStandardThumb": {
          "title": "Plaza Inn entrance sign, Disneyland Park.",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/plaza-inn-dining-package/plaza-inn-sign-16x9.jpg?1684428056767",
          "alt": "Plaza Inn entrance sign, Disneyland Park.",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/plaza-inn-dining-package/plaza-inn-sign-16x9.jpg?1684428056767"
        },
        "mapBubbleThumbLarge": {
          "title": "Plaza Inn entrance sign, Disneyland Park.",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/plaza-inn-dining-package/plaza-inn-sign-1x1.jpg?1684428056767",
          "alt": "Plaza Inn entrance sign, Disneyland Park.",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/plaza-inn-dining-package/plaza-inn-sign-1x1.jpg?1684428056767"
        }
      },
      "facets": {
        "checkAvailability": [
          "checkavailmodule"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mealPeriod": [
          "dinner",
          "lunch"
        ],
        "mobilityDisability": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$$$",
          "$$$",
          "$$$$"
        ],
        "tableService": [
          "casual-dining",
          "dine-events",
          "dine-events",
          "reservations-accepted"
        ]
      },
      "descriptions": {},
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/18992151",
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/19336692",
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/19416719",
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/19506081",
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/19637883",
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/411842656"
      ],
      "restaurants": [
        {
          "coordinates": {
            "Guest Entrance": {
              "gps": {
                "latitude": "33.8117514713",
                "longitude": "-117.918622265"
              }
            }
          },
          "id": "354414;entityType=restaurant",
          "name": "Plaza Inn"
        }
      ],
      "maximumPartySize": "14",
      "locationName": "Disneyland Park",
      "facilityId": "18994149",
      "restaurantsIds": [
        "354414"
      ],
      "entityType": "Dining-Event",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Casual Dining, Dining Events"
      },
      "marker": {
        "card": {
          "id": "18994149;entityType=Dining-Event",
          "name": "Plaza Inn Dining Packages",
          "urlFriendlyId": "plaza-inn-dining-package",
          "url": "/dining/disneyland/plaza-inn-dining-package/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/plaza-inn-dining-package/plaza-inn-sign-1x1.jpg?1684428056767",
            "alt": "Plaza Inn entrance sign, Disneyland Park."
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8117514713,
        "lng": -117.918622265,
        "name": "Plaza Inn",
        "id": "354414;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "411870172;entityType=Dining-Event",
      "urlFriendlyId": "blue-bayou-dining-event",
      "url": "/dining/disneyland/blue-bayou-dining-event/",
      "name": "Blue Bayou Dining Package",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336946;entityType=land",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/blue-bayou/DLR_DLP_ThrowbackNite_BlueBayou_Empanadas_12062022_DSC04149DN-1-1x1.jpg?2023-02-28T13:38:56+00:00",
          "alt": "A plate of Empanadas",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/blue-bayou/DLR_DLP_ThrowbackNite_BlueBayou_Empanadas_12062022_DSC04149DN-1-1x1.jpg?2023-02-28T13:38:56+00:00"
        },
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/blue-bayou/DLR_DLP_ThrowbackNite_BlueBayou_Empanadas_12062022_DSC04149DN-1-16x9.jpg?2023-02-28T13:38:56+00:00",
          "alt": "A plate of Empanadas",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/blue-bayou/DLR_DLP_ThrowbackNite_BlueBayou_Empanadas_12062022_DSC04149DN-1-16x9.jpg?2023-02-28T13:38:56+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/blue-bayou/DLR_DLP_ThrowbackNite_BlueBayou_Empanadas_12062022_DSC04149DN-1-1x1.jpg?2023-02-28T13:38:56+00:00",
          "alt": "A plate of Empanadas",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/blue-bayou/DLR_DLP_ThrowbackNite_BlueBayou_Empanadas_12062022_DSC04149DN-1-1x1.jpg?2023-02-28T13:38:56+00:00"
        }
      },
      "facets": {
        "checkAvailability": [
          "checkavailmodule"
        ],
        "cuisine": [
          "american-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisability": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$$",
          "$$$"
        ],
        "tableService": [
          "casual-dining",
          "dine-events",
          "dine-events",
          "reservations-accepted"
        ]
      },
      "descriptions": {},
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/411870200"
      ],
      "restaurants": [
        {
          "coordinates": {
            "Guest Entrance": {
              "gps": {
                "latitude": "33.811049",
                "longitude": "-117.921126"
              }
            }
          },
          "id": "354099;entityType=restaurant",
          "name": "Blue Bayou Restaurant"
        }
      ],
      "maximumPartySize": "14",
      "locationName": "Disneyland Park",
      "facilityId": "411870172",
      "restaurantsIds": [
        "354099"
      ],
      "entityType": "Dining-Event",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Casual Dining, Dining Events"
      },
      "marker": {
        "card": {
          "id": "411870172;entityType=Dining-Event",
          "name": "Blue Bayou Dining Package",
          "urlFriendlyId": "blue-bayou-dining-event",
          "url": "/dining/disneyland/blue-bayou-dining-event/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/blue-bayou/DLR_DLP_ThrowbackNite_BlueBayou_Empanadas_12062022_DSC04149DN-1-1x1.jpg?2023-02-28T13:38:56+00:00",
            "alt": "A plate of Empanadas"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.811049,
        "lng": -117.921126,
        "name": "Blue Bayou Restaurant",
        "id": "354099;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "18970388;entityType=Dining-Event",
      "urlFriendlyId": "oogie-boogie-bash-dessert-party",
      "url": "/dining/disney-california-adventure/oogie-boogie-bash-dessert-party/",
      "name": "Oogie Boogie Bash Dessert Party at Sonoma Terrace",
      "parkIds": [
        "336894;entityType=theme-park"
      ],
      "landId": "336977;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/events/halloween/0916ZR_Parade1_GC_371_XGCM-16x9.jpg?2022-09-02T18:09:10+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/events/halloween/0916ZR_Parade1_GC_371_XGCM-16x9.jpg?2022-09-02T18:09:10+00:00"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/events/halloween/0916ZR_Parade1_GC_371_XGCM-16x9.jpg?2022-09-02T18:09:10+00:00",
          "alt": "",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/events/halloween/0916ZR_Parade1_GC_371_XGCM-16x9.jpg?2022-09-02T18:09:10+00:00"
        }
      },
      "facets": {
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "tableService": [
          "dine-events"
        ],
        "type": [
          "admission-required"
        ]
      },
      "descriptions": {},
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/18961968"
      ],
      "restaurants": [
        {
          "coordinates": {
            "Guest Entrance": {
              "gps": {
                "latitude": "33.8063931592",
                "longitude": "-117.9203394055"
              }
            }
          },
          "id": "368880;entityType=restaurant",
          "name": "Sonoma Terrace"
        }
      ],
      "maximumPartySize": "14",
      "locationName": "Disney California Adventure Park",
      "facilityId": "18970388",
      "restaurantsIds": [
        "368880"
      ],
      "entityType": "Dining-Event",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Dining Events"
      },
      "marker": {
        "card": {
          "id": "18970388;entityType=Dining-Event",
          "name": "Oogie Boogie Bash Dessert Party at Sonoma Terrace",
          "urlFriendlyId": "oogie-boogie-bash-dessert-party",
          "url": "/dining/disney-california-adventure/oogie-boogie-bash-dessert-party/",
          "land": "Disney California Adventure Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/events/halloween/0916ZR_Parade1_GC_371_XGCM-16x9.jpg?2022-09-02T18:09:10+00:00",
            "alt": ""
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.8063931592,
        "lng": -117.9203394055,
        "name": "Sonoma Terrace",
        "id": "368880;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "18731128;entityType=Dining-Event",
      "urlFriendlyId": "fantasmic-on-the-go-show",
      "url": "/dining/disneyland/fantasmic-on-the-go-show/",
      "name": "Fantasmic! On-the-Go Package at Hungry Bear Restaurant",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "336942;entityType=land",
      "media": {
        "finderStandardThumb": {
          "title": "King Louie and 2 monkeys dance on a floating barge.",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/disneyland/fantasmic-on-the-go-show/fantasmic-on-the-go-hungry-bear-dining-16x9.jpg?1686004115426",
          "alt": "King Louie and 2 monkeys dance on a floating barge.",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disneyland/fantasmic-on-the-go-show/fantasmic-on-the-go-hungry-bear-dining-16x9.jpg?1686004115426"
        },
        "mapBubbleThumbLarge": {
          "title": "King Louie and 2 monkeys dance on a floating barge.",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/disneyland/fantasmic-on-the-go-show/fantasmic-on-the-go-hungry-bear-dining-1x1.jpg?1686004115427",
          "alt": "King Louie and 2 monkeys dance on a floating barge.",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/disneyland/dining/disneyland/fantasmic-on-the-go-show/fantasmic-on-the-go-hungry-bear-dining-1x1.jpg?1686004115427"
        }
      },
      "facets": {
        "checkAvailability": [
          "checkavailmodule"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "mobilityDisability": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$$$"
        ],
        "tableService": [
          "dine-events",
          "dine-events",
          "dining-packages",
          "reservations-accepted"
        ]
      },
      "descriptions": {},
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/18721797",
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/18721798"
      ],
      "restaurants": [
        {
          "coordinates": {
            "Guest Entrance": {
              "gps": {
                "latitude": "33.812554",
                "longitude": "-117.922435"
              }
            }
          },
          "id": "354303;entityType=restaurant",
          "name": "Hungry Bear Restaurant"
        }
      ],
      "maximumPartySize": "14",
      "locationName": "Disneyland Park",
      "facilityId": "18731128",
      "restaurantsIds": [
        "354303"
      ],
      "entityType": "Dining-Event",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Dining Events, Dining Events"
      },
      "marker": {
        "card": {
          "id": "18731128;entityType=Dining-Event",
          "name": "Fantasmic! On-the-Go Package at Hungry Bear Restaurant",
          "urlFriendlyId": "fantasmic-on-the-go-show",
          "url": "/dining/disneyland/fantasmic-on-the-go-show/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/disneyland/dining/disneyland/fantasmic-on-the-go-show/fantasmic-on-the-go-hungry-bear-dining-1x1.jpg?1686004115427",
            "alt": "King Louie and 2 monkeys dance on a floating barge."
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.812554,
        "lng": -117.922435,
        "name": "Hungry Bear Restaurant",
        "id": "354303;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "17920676;entityType=Dining-Event",
      "urlFriendlyId": "fantasmic-dinner-packages",
      "url": "/dining/disneyland/fantasmic-dinner-packages/",
      "name": "Fantasmic! Dining Package",
      "parkIds": [
        "330339;entityType=theme-park"
      ],
      "landId": "m",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "na",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/parks-and-tickets/entertainment/disneyland/fantasmic/fantasmic-02-sq.jpg?1682436071588",
          "alt": "The beauty, Belle, and the Beast dance on a romantic, rose-decorated Fantasmic! float",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/parks-and-tickets/entertainment/disneyland/fantasmic/fantasmic-02-sq.jpg?1682436071588"
        },
        "finderStandardThumb": {
          "title": "na",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/entertainment/disneyland/fantasmic/fantasmic-02.jpg?1682436071587",
          "alt": "The beauty, Belle, and the Beast dance on a romantic, rose-decorated Fantasmic! float",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/parks-and-tickets/entertainment/disneyland/fantasmic/fantasmic-02.jpg?1682436071587"
        },
        "mapBubbleThumbLarge": {
          "title": "na",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/parks-and-tickets/entertainment/disneyland/fantasmic/fantasmic-02-sq.jpg?1682436071588",
          "alt": "The beauty, Belle, and the Beast dance on a romantic, rose-decorated Fantasmic! float",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/parks-and-tickets/entertainment/disneyland/fantasmic/fantasmic-02-sq.jpg?1682436071588"
        }
      },
      "facets": {
        "checkAvailability": [
          "checkavailmodule"
        ],
        "cuisine": [
          "american-cuisine",
          "californian-cuisine",
          "vegetarian-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "mobilityDisability": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$$$",
          "$$$",
          "$$$$",
          "$$$$"
        ],
        "tableService": [
          "casual-dining",
          "dine-events",
          "dine-events",
          "dining-packages",
          "reservations-accepted",
          "special-unique-dining"
        ]
      },
      "descriptions": {},
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/17907410",
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/17918629",
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/18743223",
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/18743224",
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/18743798",
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/19016945",
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/19021280",
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/19085988"
      ],
      "restaurants": [
        {
          "coordinates": {
            "Guest Entrance": {
              "gps": {
                "latitude": "33.8116150928",
                "longitude": "-117.9205917872"
              }
            }
          },
          "id": "354450;entityType=restaurant",
          "name": "River Belle Terrace"
        },
        {
          "coordinates": {
            "Guest Entrance": {
              "gps": {
                "latitude": "33.811049",
                "longitude": "-117.921126"
              }
            }
          },
          "id": "354099;entityType=restaurant",
          "name": "Blue Bayou Restaurant"
        }
      ],
      "maximumPartySize": "14",
      "locationName": "Disneyland Park",
      "facilityId": "17920676",
      "restaurantsIds": [
        "354450",
        "354099"
      ],
      "entityType": "Dining-Event",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Casual Dining, Dining Events"
      },
      "marker": {
        "card": {
          "id": "17920676;entityType=Dining-Event",
          "name": "Fantasmic! Dining Package",
          "urlFriendlyId": "fantasmic-dinner-packages",
          "url": "/dining/disneyland/fantasmic-dinner-packages/",
          "land": "Disneyland Park",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/parks-and-tickets/entertainment/disneyland/fantasmic/fantasmic-02-sq.jpg?1682436071588",
            "alt": "The beauty, Belle, and the Beast dance on a romantic, rose-decorated Fantasmic! float"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.811049,
        "lng": -117.921126,
        "name": "Blue Bayou Restaurant",
        "id": "354099;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    },
    {
      "id": "17736036;entityType=Dining-Event",
      "urlFriendlyId": "world-of-color-dining",
      "url": "/dining/disney-california-adventure/world-of-color-dining/",
      "name": "World of Color Dining Package",
      "parkIds": [
        "336894;entityType=theme-park",
        "334222;entityType=resort"
      ],
      "landId": "m",
      "media": {
        "mapBubbleThumbSmall": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/45/45/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/world-of-color-dining-packages/world-of-color-dining-1x1.jpg?1673559621054",
          "alt": "Guests stand in a preferred viewing area and watch the World of Color show",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/world-of-color-dining-packages/world-of-color-dining-1x1.jpg?1673559621054"
        },
        "finderStandardThumb": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/world-of-color-dining-packages/world-of-color-dining-16x9.jpg?1673559621053",
          "alt": "Guests stand in a preferred viewing area and watch the World of Color show",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/world-of-color-dining-packages/world-of-color-dining-16x9.jpg?1673559621053"
        },
        "mapBubbleThumbLarge": {
          "title": "",
          "url": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/world-of-color-dining-packages/world-of-color-dining-1x1.jpg?1673559621053",
          "alt": "Guests stand in a preferred viewing area and watch the World of Color show",
          "transcodeTemplate": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/{width}/{height}/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/world-of-color-dining-packages/world-of-color-dining-1x1.jpg?1673559621053"
        }
      },
      "facets": {
        "cuisine": [
          "american-cuisine",
          "healthy-selections-cuisine",
          "vegetarian-cuisine"
        ],
        "dlr-finder-listing": [
          "FinderPCDining"
        ],
        "dlr-mobile-listing": [
          "FinderMobileDining"
        ],
        "mobilityDisabilities": [
          "guest-may-remain-in-wheelchair"
        ],
        "mobilityDisability": [
          "guest-may-remain-in-wheelchair"
        ],
        "priceRange": [
          "$$$",
          "$$$",
          "$$$$",
          "$$$$"
        ],
        "tableService": [
          "casual-dining",
          "dine-events",
          "dine-events",
          "reservations-accepted"
        ],
        "validDays": [
          "every-day"
        ]
      },
      "descriptions": {},
      "disneyOwned": "false",
      "generalPurposeStrings": {},
      "quickServiceAvailable": false,
      "productUrls": [
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/15516883",
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/15743832",
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/17420448",
        "https://productsvc.wdprapps.disney.com/product-service/dining-event-products/19431663"
      ],
      "restaurants": [
        {
          "coordinates": {
            "Guest Entrance": {
              "gps": {
                "latitude": "33.806478",
                "longitude": "-117.919877"
              }
            }
          },
          "id": "354555;entityType=restaurant",
          "name": "Wine Country Trattoria"
        },
        {
          "coordinates": {
            "Guest Entrance": {
              "gps": {
                "latitude": "33.807494",
                "longitude": "-117.919021"
              }
            }
          },
          "id": "16515009;entityType=restaurant",
          "name": "Carthay Circle Restaurant"
        },
        {
          "coordinates": {
            "Guest Entrance": {
              "gps": {
                "latitude": "33.807889",
                "longitude": "-117.921828"
              }
            }
          },
          "id": "354474;entityType=restaurant",
          "name": "Storytellers Cafe"
        }
      ],
      "maximumPartySize": "14",
      "locationName": "Multiple Locations",
      "locationsList": {
        "336894;entityType=theme-park": "Disney California Adventure Park"
      },
      "facilityId": "17736036",
      "restaurantsIds": [
        "354555",
        "16515009",
        "354474"
      ],
      "entityType": "Dining-Event",
      "entityTypeName": "dining",
      "openHours": [],
      "parkTicketsCta": {},
      "facetsLabel": "",
      "facetGroupType": "Table Service",
      "type": {
        "facets": "Casual Dining, Dining Events"
      },
      "parkLocations": {
        "336894;entityType=theme-park": {
          "lat": 33.806478,
          "lng": -117.919877,
          "name": "Wine Country Trattoria",
          "id": "354555;entityType=restaurant",
          "closeButtonLabel": "finder.maps.closePopUpButtonText",
          "pin": "activities"
        },
        "334222;entityType=resort": {
          "lat": 33.807889,
          "lng": -117.921828,
          "name": "Storytellers Cafe",
          "id": "354474;entityType=restaurant",
          "closeButtonLabel": "finder.maps.closePopUpButtonText",
          "pin": "activities"
        }
      },
      "marker": {
        "card": {
          "id": "17736036;entityType=Dining-Event",
          "name": "World of Color Dining Package",
          "urlFriendlyId": "world-of-color-dining",
          "url": "/dining/disney-california-adventure/world-of-color-dining/",
          "land": "Carthay Circle Restaurant",
          "media": {
            "desktop": "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/world-of-color-dining-packages/world-of-color-dining-1x1.jpg?1673559621053",
            "alt": "Guests stand in a preferred viewing area and watch the World of Color show"
          },
          "iconObj": {
            "icon": "dining"
          }
        },
        "lat": 33.807494,
        "lng": -117.919021,
        "name": "Carthay Circle Restaurant",
        "id": "16515009;entityType=restaurant",
        "closeButtonLabel": "finder.maps.closePopUpButtonText",
        "pin": "dine"
      }
    }
  ]
}`;

TEST_PARSE_DINING_JSON(json);