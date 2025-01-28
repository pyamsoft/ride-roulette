/*
 * Copyright 2025 pyamsoft
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

import { Attraction, AttractionType } from "../model/Attraction";
import { ThemePark } from "../model/ThemePark";

const createDLRNewDining = function (data: {
  id: string;
  name: string;
  url: string;
  imageUrl: string;
  type: AttractionType;
}): Attraction {
  const { url, ...rest } = data;
  return {
    ...rest,
    url: `/dining/disneyland/${url}`,
    objectType: "Attraction",
    park: ThemePark.DISNEYLAND,
  };
};

const createDTDNewDining = function (data: {
  id: string;
  name: string;
  url: string;
  imageUrl: string;
  type: AttractionType;
}): Attraction {
  const { url, ...rest } = data;
  return {
    ...rest,
    url: `/dining/downtown-disney-district/${url}`,
    objectType: "Attraction",
    park: ThemePark.DOWNTOWN_DISNEY,
  };
};

const createDCANewDining = function (data: {
  id: string;
  name: string;
  url: string;
  imageUrl: string;
  type: AttractionType;
}): Attraction {
  const { url, ...rest } = data;
  return {
    ...rest,
    url: `/dining/disney-california-adventure/${url}`,
    objectType: "Attraction",
    park: ThemePark.CALIFORNIA_ADVENTURE,
  };
};

const addDisneylandDining = async function (
  attractions: ReadonlyArray<Attraction>,
): Promise<ReadonlyArray<Attraction>> {
  attractions = [
    ...attractions,
    createDLRNewDining({
      id: "426608;entityType=restaurant",
      name: "Tropical Imports",
      url: "tropical-imports",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/tropical-imports/tropical-imports-16x9.jpg?1673562091998",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "354369;entityType=restaurant",
      name: "Mint Julep Bar",
      url: "mint-julep-bar",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/mint-julep-bar/mint-julep-bar-00.jpg?1673561471837",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "354129;entityType=restaurant",
      name: "Carnation Cafe",
      url: "carnation-cafe",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/carnation-cafe/sourdough-patty-melt-16x9.jpg?1673558579002",
      type: AttractionType.SIT_EAT,
    }),
    createDLRNewDining({
      id: "354117;entityType=restaurant",
      name: "Cafe Orleans",
      url: "cafe-orleans",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/cafe-orleans/DLR_DLP_CafeOrleans_RoastedHalfChicken_08172021_DSC09754DN-16x9.jpg?2022-01-28T18:42:07+00:00",
      type: AttractionType.SIT_EAT,
    }),
    createDLRNewDining({
      id: "16363584;entityType=restaurant",
      name: "Jolly Holiday Bakery Cafe",
      url: "jolly-holiday-bakery-cafe",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/jolly-holiday-bakery-cafe/jolly-holiday-bakery-cafe-01.jpg?1673561358871",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "354255;entityType=restaurant",
      name: "Gibson Girl Ice Cream Parlor",
      url: "gibson-girl-ice-cream-parlor",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/gibson-girl-ice-cream-parlor/gibson-girl-ice-cream-parlor-00.jpg?1673561029836",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "354444;entityType=restaurant",
      name: "Refreshment Corner",
      url: "refreshment-corner",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/refreshment-corner/refreshment-corner-00.jpg?1680282054488",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "354516;entityType=restaurant",
      name: "Tiki Juice Bar",
      url: "tiki-juice-bar",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/disneyland/tiki-juice-bar/tiki-juice-bar-16x9.jpg?1673562003674",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "19267431;entityType=restaurant",
      name: "Milk Stand",
      url: "milk-stand",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disneyland/star-wars-galaxys-edge/photography/milk-stand-16x9.jpg?1673561463545",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "354273;entityType=restaurant",
      name: "Harbour Galley",
      url: "harbour-galley",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/harbour-galley/harbour-galley-00.jpg?1673561046890",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "19268344;entityType=restaurant",
      name: "Oga's Cantina at the Disneyland Resort",
      url: "ogas-cantina",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disneyland/star-wars-galaxys-edge/photography/ogas-cantina-16x9.jpg?1673559259255",
      type: AttractionType.SIT_EAT,
    }),
    createDLRNewDining({
      id: "354438;entityType=restaurant",
      name: "Rancho del Zocalo Restaurante",
      url: "rancho-del-zocalo-restaurante-dlr",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/rancho-del-zocalo-restaurante/dlr-rancho-del-zocalo-16x9.jpg?1673566793605",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "354228;entityType=restaurant",
      name: "Troubadour Tavern",
      url: "troubadour-tavern",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/troubadour-tavern/troubadour-tavern-00.jpg?1681342590835",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "354099;entityType=restaurant",
      name: "Blue Bayou Restaurant",
      url: "blue-bayou-restaurant",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/blue-bayou-restaurant/blue-bayou-restaurant-00.jpg?1686608744570",
      type: AttractionType.SIT_EAT,
    }),
    createDLRNewDining({
      id: "354441;entityType=restaurant",
      name: "Alien Pizza Planet",
      url: "alien-pizza-planet",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disneyland/tomorrowland/disneyland-pizza-port-pepperoni-16x9.jpg?1673559845391",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "368519;entityType=restaurant",
      name: "Bengal Barbecue",
      url: "bengal-barbecue",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/bengal-barbecue/bengal-barbecue-00.jpg?1673560017873",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "18674905;entityType=restaurant",
      name: "Red Rose Taverne",
      url: "red-rose-taverne",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/red-rose-taverne/DLR_DLP_RedRoseTaverne_ChickenCordonBleuSandwich_01052023_DSC05312DN-16x9.jpg?2023-01-23T14:32:26+00:00",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "19268342;entityType=restaurant",
      name: "Kat Saka's Kettle",
      url: "kat-sakas-kettle",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/disneyland/kat-sakas-kettle/kettle-16x9.jpg?1673561365986",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "369431;entityType=restaurant",
      name: "Edelweiss Snacks",
      url: "edelweiss-snacks",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/edelweiss-snacks/edelweiss-snacks-00.jpg?1681342557214",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "354456;entityType=restaurant",
      name: "Royal Street Veranda",
      url: "royal-street-veranda",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/royal-street-veranda/royal-street-veranda-breadbowl-16x9.jpg?1673561820385",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "19197204;entityType=restaurant",
      name: "The Tropical Hideaway",
      url: "tropical-hideaway",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/disneyland/tropical-hideaway/tropical-hideaway-architect-atmosphere-16x9.jpg?1673562084897",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "354450;entityType=restaurant",
      name: "River Belle Terrace",
      url: "river-belle-terrace",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/riverbelle-terrace/DLR_DLP_Awakening_MobileOrder_RiverBelle_SkilletBrisketMacNCheese_130820_07900DN-16x9.jpg?2021-06-03T22:20:12+00:00",
      type: AttractionType.SIT_EAT,
    }),
    createDLRNewDining({
      id: "354303;entityType=restaurant",
      name: "Hungry Bear Restaurant",
      url: "hungry-bear-restaurant",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/hungry-bear-restaurant/hungry-bear-restaurant-00.jpg?1686004089813",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "17301557;entityType=restaurant",
      name: "Maurice's Treats",
      url: "maurices-treats",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/entertainment/disneyland/fantasy-faire/fantasy-faire-05.jpg?1681342569720",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "19268345;entityType=restaurant",
      name: "Docking Bay 7 Food and Cargo",
      url: "docking-bay-7-food-and-cargo",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/disneyland/docking-bay-7-food-and-cargo/docking-bay-guests-food-16x9.jpg?1673560469679",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "411845026;entityType=restaurant",
      name: "Café Daisy",
      url: "cafe-daisy",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/cafe-daisy/Cafe-Daisy-16x9.jpg?2023-04-03T16:44:12+00:00",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "354414;entityType=restaurant",
      name: "Plaza Inn",
      url: "plaza-inn",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/plaza-inn/plaza-inn-00.jpg?1687208431162",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "411845225;entityType=restaurant",
      name: "Good Boy! Grocers",
      url: "good-boy-grocers",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/good-boy-grocers-market/20230318_0858_CT-2-16x9.jpg?2023-04-03T16:42:51+00:00",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "354498;entityType=restaurant",
      name: "The Golden Horseshoe",
      url: "golden-horseshoe-restaurant",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/golden-horseshoe/golden-horseshoe-00.jpg?1673561038064",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "18246297;entityType=restaurant",
      name: "Galactic Grill",
      url: "galactic-grill",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/galactic-grill/DLR-GG-Detail-CheeseburgerNoTomato.jpg?2021-07-01T03:07:32+00:00",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "354465;entityType=restaurant",
      name: "Stage Door Café",
      url: "stage-door-cafe",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/stage-door-cafe/stage-door-cafe-00.jpg?1673561971882",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "19268333;entityType=restaurant",
      name: "Ronto Roasters",
      url: "ronto-roasters",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disneyland/star-wars-galaxys-edge/photography/rontos-roasters-16x9.jpg?1673561803039",
      type: AttractionType.QUICK_EAT,
    }),
    createDLRNewDining({
      id: "17394022;entityType=restaurant",
      name: "Market House",
      url: "market-house",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disneyland/market-house/market-house-01.jpg?1673561437023",
      type: AttractionType.QUICK_EAT,
    }),
  ];
  return attractions;
};

const addDCADining = async function (
  attractions: ReadonlyArray<Attraction>,
): Promise<ReadonlyArray<Attraction>> {
  attractions = [
    ...attractions,
    createDCANewDining({
      id: "354084;entityType=restaurant",
      name: "Award Wieners",
      url: "award-wieners",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/award-weiners/award-weiners-00.jpg?1673559987700",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "354447;entityType=restaurant",
      name: "Rita's Baja Blenders",
      url: "ritas-baja-blenders",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/ritas-baja-blenders/ritas-baja-blenders-00.jpg?1673561777242",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "19013078;entityType=restaurant",
      name: "Lamplight Lounge",
      url: "lamplight-lounge",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/lamplight-lounge-chair-16x9.jpg?1673561393085",
      type: AttractionType.SIT_EAT,
    }),
    createDCANewDining({
      id: "16514114;entityType=restaurant",
      name: "Cozy Cone Motel",
      url: "cozy-cone-motel",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/cozy-cone-motel/cozy-cone-motel-00.jpg?1673558779545",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "354207;entityType=restaurant",
      name: "Corn Dog Castle",
      url: "corn-dog-castle",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/corn-dog-castle/corn-dog-castle-00.jpg?1673560362894",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "16588263;entityType=restaurant",
      name: "Carthay Circle Lounge - Alfresco Dining",
      url: "carthay-circle-lounge",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disney-california-adventure/buena-vista-street/buena-vista-carthay-circle-16x9.jpg?1673560095725",
      type: AttractionType.SIT_EAT,
    }),
    createDCANewDining({
      id: "19028067;entityType=restaurant",
      name: "Jack-Jack Cookie Num Nums",
      url: "jack-jack-cookie-num-nums",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/disney-california-adventure/jack-jack-cookie-num-nums/jack-jack-cookie-num-num-16x9.jpg?1673561263963",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "354390;entityType=restaurant",
      name: "Pacific Wharf Café",
      url: "pacific-wharf-cafe",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/pacific-wharf-cafe/pacific-wharf-cafe-00.jpg?1673561495956",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "19629820;entityType=restaurant",
      name: "Lamplight Lounge - Boardwalk Dining",
      url: "lamplight-lounge-boardwalk-dining",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/lamplight-lounge/DLR_DCA_LampLightLounge_Sliders_041019_DSC01078_DN-16x9.jpg?2021-06-17T18:44:19+00:00",
      type: AttractionType.SIT_EAT,
    }),
    createDCANewDining({
      id: "368880;entityType=restaurant",
      name: "Sonoma Terrace",
      url: "sonoma-terrace",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/paradise-garden-grill/paradise-garden-grill-beer-pretzel-16x9.jpg?1673561950085",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "368928;entityType=restaurant",
      name: "Mendocino Terrace",
      url: "mendocino-terrace",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/mendocino-terrace/mendocino-terrace-wine-00.jpg?1673559233769",
      type: AttractionType.SIT_EAT,
    }),
    createDCANewDining({
      id: "16515009;entityType=restaurant",
      name: "Carthay Circle Restaurant",
      url: "carthay-circle-restaurant",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/carthay-circle-restaurant/carthay-circle-restaurant-00.jpg?1686584170172",
      type: AttractionType.SIT_EAT,
    }),
    createDCANewDining({
      id: "424962;entityType=restaurant",
      name: "Fairfax Market",
      url: "fairfax-fruit-market",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/fairfax-market/fairfax-market-00.jpg?1673560497038",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "16513928;entityType=restaurant",
      name: "Clarabelle's Hand-Scooped Ice Cream",
      url: "clarabelles-hand-scooped-ice-cream",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/clarabelles-ice-cream/clarabelles-ice-cream-00.jpg?1673560331003",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "16032493;entityType=restaurant",
      name: "Boardwalk Pizza & Pasta",
      url: "boardwalk-pizza-pasta",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/boardwalk-pizza-pasta/boardwalk-pizza-pasta-00a.jpg?1673560036657",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "16505450;entityType=restaurant",
      name: "Fillmore's Taste-In",
      url: "fillmores-taste-in",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/fillmores-taste-in/fillmores-taste-in-00.jpg?1673560551219",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "354171;entityType=restaurant",
      name: "Señor Buzz Churros",
      url: "senor-buzz-churros",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/senor-buzz-churros-v2-16x9.jpg?1673561842939",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "19624439;entityType=restaurant",
      name: "Shawarma Palace",
      url: "shawarma-palace",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disney-california-adventure/avengers-campus/DLR_DCA_AvengersCampus_Schwarma_Wrapper_yellow_16x9.jpg?1686163299940",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "16514168;entityType=restaurant",
      name: "Ghirardelli® Soda Fountain and Chocolate Shop",
      url: "ghirardelli-soda-fountain-and-chocolate-shop",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/ghirardelli-soda-fountain-and-chocolate-shop/ghirardelli-soda-fountain-and-chocolate-shop-00.jpg?1673561008123",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "354396;entityType=restaurant",
      name: "Angry Dogs",
      url: "angry-dogs",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/angry-dogs-16x9.jpg?1673559975645",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "368932;entityType=restaurant",
      name: "Lucky Fortune Cookery",
      url: "lucky-fortune-cookery-dlr",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/disney-california-adventure/lucky-fortune-cookery/lucky-fortune-cookery-teriyaki-16x9.jpg?1673561410906",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "354462;entityType=restaurant",
      name: "Schmoozies!",
      url: "schmoozies-smoothies",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/schmoozies/schmoozies-00.jpg?1673561835231",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "18409951;entityType=restaurant",
      name: "Hollywood Lounge",
      url: "hollywood-lounge",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/food-and-wine-festival-marketplaces/2018/festival-marketplaces-FW-the-brewhouse-hollywood-lounge-backlot-michelada-16x9.jpg?1673561247990",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "16513886;entityType=restaurant",
      name: "Fiddler, Fifer & Practical Cafe",
      url: "fiddler-fifer-and-practical-cafe",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/fiddler-fifer-and-practical-cafe/fiddler-fifer-and-practical-cafe-00.jpg?1673560539617",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "19624444;entityType=restaurant",
      name: "Terran Treats",
      url: "terran-treats",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/terran-treats/DLR_DCA_TerranTreats_RaspberrySpiralRation_01252022_DSC02292DN-16x9.jpg?2022-03-11T21:09:08+00:00",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "354405;entityType=restaurant",
      name: "Poultry Palace",
      url: "poultry-palace",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/poultry-palace-16x9.jpg?1673561691021",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "19530853;entityType=restaurant",
      name: "Pym Test Kitchen",
      url: "pym-test-kitchen",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/disney-california-adventure/pym-test-kitchen/pyms-kitchen-16x9.jpg?1686163229049",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "354135;entityType=restaurant",
      name: "Adorable Snowman Frosted Treats",
      url: "adorable-snowman-frosted-treats",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/adorable-snowman-16x9.jpg?1673559828323",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "354555;entityType=restaurant",
      name: "Wine Country Trattoria",
      url: "wine-country-trattoria",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/wine-country-trattoria/wine-country-trattoria-00.jpg?1673559601546",
      type: AttractionType.SIT_EAT,
    }),
    createDCANewDining({
      id: "354477;entityType=restaurant",
      name: "Studio Catering Co.",
      url: "studio-catering-co",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/studio-catering-co/studio-catering-company-01.jpg?1688133141058",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "354195;entityType=restaurant",
      name: "Cocina Cucamonga Mexican Grill",
      url: "cocina-cucamonga-mexican-grill",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/cocina-cucamonga-mexican-grill/cocina-cucamonga-mexican-grill-00.jpg?1673560337666",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "16032481;entityType=restaurant",
      name: "Paradise Garden Grill",
      url: "paradise-garden-grill",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/paradise-garden-grill/paradise-garden-grill-00.jpg?1683154093167",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "354483;entityType=restaurant",
      name: "Smokejumpers Grill",
      url: "smokejumpers-grill",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/smokejumpers-grill/DLR_DCA_SmokejumpersGrill_DoubleBurger_04122022_DSC03526DN-16x9.jpg?2022-05-17T23:47:19+00:00",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "15527906;entityType=restaurant",
      name: "Magic Key Terrace - Magic Key Holder Dining",
      url: "magic-key-terrace",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-standard-assets/disneyland/Magic-Beverages-16x9-16x9.jpg?2021-08-20T20:57:42+00:00",
      type: AttractionType.SIT_EAT,
    }),
    createDCANewDining({
      id: "16032494;entityType=restaurant",
      name: "Bayside Brews",
      url: "bayside-brews",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/bayside-brews/bayside-brews-01.jpg?1673560006639",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "19624438;entityType=restaurant",
      name: "Pym Tasting Lab",
      url: "pym-tasting-lab",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disney-california-adventure/avengers-campus/pym-kitchen-16x9_1.jpg?1686163277709",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "16486843;entityType=restaurant",
      name: "Flo's V8 Cafe",
      url: "flos-v8-cafe",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/disney-california-adventure/flos-v8-cafe/flos-v8-cafe-00.jpg?1673558951446",
      type: AttractionType.QUICK_EAT,
    }),
    createDCANewDining({
      id: "354123;entityType=restaurant",
      name: "Cappuccino Cart",
      url: "cappuccino-cart",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/resorts/disneys-grand-californian-hotel-and-spa/DLR_DCA_CappoCart_GroupCoffee_09152021_DSC00472DN-2-16x9.jpg?2021-09-24T18:33:23+00:00",
      type: AttractionType.QUICK_EAT,
    }),
  ];
  return attractions;
};

const addDTDDining = async function (
  attractions: ReadonlyArray<Attraction>,
): Promise<ReadonlyArray<Attraction>> {
  attractions = [
    ...attractions,

    createDTDNewDining({
      id: "18584293;entityType=restaurant",
      name: "Kayla's Cake",
      url: "kaylas-cake",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/downtown-disney/Kayla-s-HERO-image-16x9.jpg?2022-05-12T13:29:25+00:00",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "354435;entityType=restaurant",
      name: "Jazz Kitchen Coastal Grill & Patio",
      url: "jazz-kitchen-coastal-grill-patio",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/coastal-grill-and-patio/CrawfishWraps-H-16x9.jpg?2023-04-19T07:22:20+00:00",
      type: AttractionType.SIT_EAT,
    }),
    createDTDNewDining({
      id: "18516129;entityType=restaurant",
      name: "Churro Carts",
      url: "churros",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/churros_cart-00.jpg?1673559361682",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "16356966;entityType=restaurant",
      name: "Taqueria at Tortilla Jo's",
      url: "taqueria-tortilla-jos",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/taqueria/taqueria-00.jpg?1583971866258",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "19598969;entityType=restaurant",
      name: "Blue Ribbon Corn Dog",
      url: "blue-ribbon-corn-dogs",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/downtown-disney/Blue-Ribbon-Corn-Dog-Hero-Image-16x9.jpg?2022-05-12T13:29:26+00:00",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "354549;entityType=restaurant",
      name: "GCH Craftsman Grill",
      url: "craftsman-grill",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/gch-craftsman-grill/DLR_GCH_CraftsmanGrill_BakedChickenNachos_04192022_DSC07811DN-2_reduced-16x9.jpg?2022-05-25T17:03:55+00:00",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "19637038;entityType=restaurant",
      name: "Diggity Dogs",
      url: "diggity-dogs",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/downtown-disney/Diggity-Dog-16x9.jpg?2022-05-12T13:29:26+00:00",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "354492;entityType=restaurant",
      name: "The Coffee House",
      url: "coffee-house",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/the-coffee-house/IMG_1835xx-16x9.jpg?2023-02-03T17:52:24+00:00",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "19104269;entityType=restaurant",
      name: "Ballast Point® Brewing Co.",
      url: "ballast-point-brewing-company",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/experience-updates/downtown-disney/downtown-disney-evening-16x9.jpg?1656354274452",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "17759035;entityType=restaurant",
      name: "Starbucks®",
      url: "starbucks-coffee",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/starbucks-coffee/starbucks-coffee-00.jpg?1583970556693",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "16027216;entityType=restaurant",
      name: "Tangaroa Terrace Tropical Bar & Grill",
      url: "tangaroa-terrace",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/disneyland-hotel/tangaroa-terrace/dlr-tangaroa-terrace-loco-moco-burrito-16x9.jpg?1652897683120",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "19139055;entityType=restaurant",
      name: "Salt & Straw",
      url: "salt-and-straw",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/downtown-disney-district/salt-and-straw/salt-straw-ice-cream-downtown-disney-16x9.jpg?1611691880561",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "411876218;entityType=restaurant",
      name: "Earl of Sandwich® Tavern",
      url: "earl-of-sandwich-tavern",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/earl-tavern/Earl_Pizza-5-16x9.jpg?2023-03-29T18:16:35+00:00",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "354321;entityType=restaurant",
      name: "Jamba®",
      url: "jamba",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/downtown-disney-district/jamba/jamba-juice-fruits-smoothie-16x9.jpg?1611691853184",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "354372;entityType=restaurant",
      name: "Napa Rose",
      url: "napa-rose",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/napa-rose/14-5-20_DC_200b-16x9.jpg?2023-03-10T22:14:47+00:00",
      type: AttractionType.SIT_EAT,
    }),
    createDTDNewDining({
      id: "18516133;entityType=restaurant",
      name: "Lemonade Carts",
      url: "lemonade",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/lemonade_cart-03.jpg?1673559214977",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "16027513;entityType=restaurant",
      name: "Trader Sam's Enchanted Tiki Bar",
      url: "trader-sams",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/resort-dining/disneyland-hotel/trader-sams/trader-sams-00.jpg?1675184495946",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "354474;entityType=restaurant",
      name: "Storytellers Cafe",
      url: "storytellers-cafe",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/grand-californian-hotel/storytellers-cafe/family-storytellers-cafe-16x9.jpg?1684170866186",
      type: AttractionType.SIT_EAT,
    }),
    createDTDNewDining({
      id: "15706677;entityType=restaurant",
      name: "Beignets Expressed",
      url: "jazz-kitchen-beignets-expressed",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/coastal-grill-and-patio/GlazedBeignet-H-16x9.jpg?2023-04-18T12:11:45+00:00",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "19306875;entityType=restaurant",
      name: "CrazyShake™ Window by Black Tap",
      url: "black-tap-crazyshake-counter",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/downtown-disney-district/black-tap-crazyshake-counter/togo-shakes-three-16x9.jpg?1607562673294",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "18516131;entityType=restaurant",
      name: "Turkey Leg Carts",
      url: "turkey-legs",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/turkey-leg-cart-02.jpg?1673559584644",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "19269424;entityType=restaurant",
      name: "Black Tap Craft Burgers & Shakes",
      url: "black-tap-craft-burgers",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/downtown-disney-district/black-tap-texan-burger-16x9.jpg?1611946816723",
      type: AttractionType.SIT_EAT,
    }),
    createDTDNewDining({
      id: "354381;entityType=restaurant",
      name: "Napolini Pizzeria",
      url: "napolini-pizzeria",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/downtown-disney-district/napolini-deli/napolini-pizzeria-downtown-disney-16x9.jpg?1646850754451",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "19343532;entityType=restaurant",
      name: "GCH Craftsman Bar",
      url: "craftsman-bar",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/grand-californian-hotel/craftsman-bar/gch-craftsman-bar-grill-exterior-16x9.jpg?1686348591296",
      type: AttractionType.SIT_EAT,
    }),
    createDTDNewDining({
      id: "354546;entityType=restaurant",
      name: "Wetzel's Pretzels",
      url: "wetzels-pretzels",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/wetzels-pretzels/wetzels-pretzels-00.jpg?1676601485938",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "17384492;entityType=restaurant",
      name: "Wetzel's Pretzels Cart",
      url: "wetzels-pretzels-cart",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/wetzels-pretzels/02_10_20-16x9.jpg?2022-05-16T13:05:45+00:00",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "18516125;entityType=restaurant",
      name: "Popcorn Carts",
      url: "popcorn-carts",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/popcorn-cart-00.jpg?1681239854616",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "354261;entityType=restaurant",
      name: "Goofy's Kitchen",
      url: "goofys-kitchen",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/resort-dining/disneyland-hotel/goofys-kitchen/goofys-kitchen-06.jpg?1684170870948",
      type: AttractionType.SIT_EAT,
    }),
    createDTDNewDining({
      id: "18516137;entityType=restaurant",
      name: "Fruit Carts",
      url: "fruit-carts",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/fruit-cart-00.jpg?1677697228609",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "411896782;entityType=restaurant",
      name: "Pizza Counter",
      url: "the-pizza-counter",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/dining/pizza-counter/Earl_Pizza-3-16x9.jpg?2023-03-29T18:02:50+00:00",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "354276;entityType=restaurant",
      name: "Hearthstone Lounge",
      url: "hearthstone-lounge",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/grand-californian-hotel/hearthstone-lounge/heartstone-16x9.jpg?1675116684813",
      type: AttractionType.SIT_EAT,
    }),
    createDTDNewDining({
      id: "18516135;entityType=restaurant",
      name: "Pretzel Carts",
      url: "pretzels",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/food-carts-multiple-locations/pretzel-cart-02.jpg?1673559484036",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "18735825;entityType=restaurant",
      name: "Splitsville Luxury Lanes™ – Dining",
      url: "splitsville-restaurant",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/entertainment/downtown-disney-district/splitsville-luxury-lanes/SV_exteriordawn-16x9.jpg?1656021858932",
      type: AttractionType.SIT_EAT,
    }),
    createDTDNewDining({
      id: "354528;entityType=restaurant",
      name: "Tortilla Jo's",
      url: "tortilla-jos",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/things-to-do/dining/downtown-disney/tortilla-jos/dlr-tortilla-joes-exterior-16x9.jpg?1611936402438",
      type: AttractionType.QUICK_EAT,
    }),
    createDTDNewDining({
      id: "354378;entityType=restaurant",
      name: "Naples Ristorante e Bar",
      url: "naples-ristorante-e-bar",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/downtown-disney/naples-ristorante-e-pizzeria/naples-exterior-sign-16x9.jpg?1635184779998",
      type: AttractionType.SIT_EAT,
    }),
  ];
  return attractions;
};

export const getHardcodedDining = async function (): Promise<
  ReadonlyArray<Attraction>
> {
  let at: ReadonlyArray<Attraction> = [];

  at = await addDisneylandDining(at);
  at = await addDCADining(at);
  at = await addDTDDining(at);

  return at;
};
