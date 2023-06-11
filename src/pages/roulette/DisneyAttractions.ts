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

import { Attraction } from "./model/Attraction";
import { ThemePark } from "./model/ThemePark";

const createDLRNewAttraction = function (data: {
  id: string;
  name: string;
  url: string;
  imageUrl: string;
}): Attraction {
  const { url, ...rest } = data;
  return {
    ...rest,
    url: `/attractions/disneyland/${url}`,
    objectType: "Attraction",
    park: ThemePark.DISNEYLAND,
  };
};

const createDTDNewEntertainment = function (data: {
  id: string;
  name: string;
  url: string;
  imageUrl: string;
}): Attraction {
  const { url, ...rest } = data;
  return {
    ...rest,
    url: `/entertainment/downtown-disney-district/${url}`,
    objectType: "Attraction",
    park: ThemePark.DOWNTOWN_DISNEY,
  };
};

const createDTDNewAttraction = function (data: {
  id: string;
  name: string;
  url: string;
  imageUrl: string;
}): Attraction {
  const { url, ...rest } = data;
  return {
    ...rest,
    url: `/attractions/downtown-disney-district/${url}`,
    objectType: "Attraction",
    park: ThemePark.DOWNTOWN_DISNEY,
  };
};

const createDLRNewEntertainment = function (data: {
  id: string;
  name: string;
  url: string;
  imageUrl: string;
}): Attraction {
  const { url, ...rest } = data;
  return {
    ...rest,
    url: `/entertainment/disneyland/${url}`,
    objectType: "Attraction",
    park: ThemePark.DISNEYLAND,
  };
};

const createCANewEntertainment = function (data: {
  id: string;
  name: string;
  url: string;
  imageUrl: string;
}): Attraction {
  const { url, ...rest } = data;
  return {
    ...rest,
    url: `/entertainment/disney-california-adventure/${url}`,
    objectType: "Attraction",
    park: ThemePark.CALIFORNIA_ADVENTURE,
  };
};

const createCANewAttraction = function (data: {
  id: string;
  name: string;
  url: string;
  imageUrl: string;
}): Attraction {
  const { url, ...rest } = data;
  return {
    ...rest,
    url: `/attractions/disney-california-adventure/${url}`,
    objectType: "Attraction",
    park: ThemePark.CALIFORNIA_ADVENTURE,
  };
};

export const getHardcodedParks = function (props: {
  date: Date;
  includeEntertainment: boolean;
}): Attraction[] {
  // Future: We want to use the date to filter out seasonal attractions like Halloween and Christmas rides.
  const { includeEntertainment } = props;

  let at = [
    createDLRNewAttraction({
      id: "411806196;entityType=Attraction",
      name: "Star Wars: Batuu Bounty Hunters",
      url: "star-wars-batuu-bounty-hunters",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/guest-services/magicband/WS-2205-00706-16x9.jpg?2022-09-16T02:50:21+00:00",
    }),
    createDLRNewAttraction({
      id: "353399;entityType=Attraction",
      name: "Peter Pan's Flight",
      url: "peter-pans-flight",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/peter-pans-flight/peter-pan-flight-00.jpg?1677892407583",
    }),
    createDLRNewAttraction({
      id: "17734741;entityType=Attraction",
      name: "The Disney Gallery",
      url: "disney-gallery",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/disney-gallery/disney-gallery-09.jpg?1676431588245",
    }),
    createDLRNewAttraction({
      id: "353449;entityType=Attraction",
      name: "The Many Adventures of Winnie the Pooh",
      url: "many-adventures-of-winnie-the-pooh",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/many-adventures-of-winnie-the-pooh/many-adventures-of-winnie-the-pooh-00.jpg?1640818282331",
    }),
    createDLRNewAttraction({
      id: "411848232;entityType=Attraction",
      name: "CenTOONial Park",
      url: "centoonial-park",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/attractions/mickey-minnies-runaway-railway/CenTOONialPark-in-Mickeys-Toontown-16x9.jpg?2023-01-09T17:01:32+00:00",
    }),
    createDLRNewAttraction({
      id: "353375;entityType=Attraction",
      name: "Mark Twain Riverboat",
      url: "mark-twain-riverboat",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/mark-twain-riverboat/mark-twain-riverboat-00.jpg?1645539026331",
    }),
    createDLRNewAttraction({
      id: "353305;entityType=Attraction",
      name: "Casey Jr. Circus Train",
      url: "casey-jr-circus-train",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/casey-jr-circus-train/casey-jr-circus-train-00.jpg?1638918128721",
    }),
    createDLRNewAttraction({
      id: "353363;entityType=Attraction",
      name: "Jungle Cruise",
      url: "jungle-cruise-dlr",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/jungle-cruise/jungle-cruise-00.jpg?1638921648678",
    }),
    createDLRNewAttraction({
      id: "353295;entityType=Attraction",
      name: "Big Thunder Mountain Railroad",
      url: "big-thunder-mountain-railroad",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/big-thunder-mountain-railroad/big-thunder-mountain-railroad-00.jpg?1641428886832",
    }),
    createDLRNewAttraction({
      id: "353347;entityType=Attraction",
      name: "Haunted Mansion",
      url: "haunted-mansion",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/attractions/haunted-mansion/hanted-mansion-exterior-16x9.jpg?1676045450973",
    }),
    createDLRNewAttraction({
      id: "353401;entityType=Attraction",
      name: "Pinocchio's Daring Journey",
      url: "pinocchios-daring-journey",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/pinocchios-daring-journey/pinocchios-daring-journey-03.jpg?1677892428527",
    }),
    createDLRNewAttraction({
      id: "411821333;entityType=Attraction",
      name: "Mickey & Minnie's Runaway Railway",
      url: "mickey-minnies-runaway-railway",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/guest-services/new-at-disneyland/Image_DLR_MMRRExterior-16x9.jpg?1677077839580",
    }),
    createDLRNewAttraction({
      id: "353321;entityType=Attraction",
      name: "Donald's Duck Pond",
      url: "donalds-duck-pond",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/attractions/donalds-boat/donalds-duck-pond-16x9.jpg?2023-01-12T20:56:24+00:00",
    }),
    createDLRNewAttraction({
      id: "367492;entityType=Attraction",
      name: `"it's a small world"`,
      url: "its-a-small-world",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/attractions/disneyland/its-a-small-world/small-world-exterior-16x9.jpg?1674230761751",
    }),
    createDLRNewAttraction({
      id: "353425;entityType=Attraction",
      name: "Sailing Ship Columbia",
      url: "sailing-ship-columbia",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/sailing-ship-columbia/sailing-ship-columbia-00.jpg?1638923929773",
    }),
    createDLRNewAttraction({
      id: "353439;entityType=Attraction",
      name: "Star Tours - The Adventures Continue",
      url: "star-tours",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/star-tours/star-tours-06.jpg?1669764431875",
    }),
    createDLRNewAttraction({
      id: "353377;entityType=Attraction",
      name: "Matterhorn Bobsleds",
      url: "matterhorn-bobsleds",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/matterhorn-bobsleds/matterhorn-bobsleds-00.jpg?1678119174149",
    }),
    createDLRNewAttraction({
      id: "367495;entityType=Attraction",
      name: "Alice in Wonderland",
      url: "alice-in-wonderland",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/alice-in-wonderland/alice-in-wonderland-00.jpg?1677891860746",
    }),
    createDLRNewAttraction({
      id: "19087113;entityType=Attraction",
      name: "Star Wars: Datapad on Play Disney Parks Mobile App",
      url: "star-wars-galaxys-edge-play-app",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/attractions/disneyland/star-wars-galaxys-edge-play-app/family-data-pad-play-app-16x9.jpg?1669766811330",
    }),
    createDLRNewAttraction({
      id: "353335;entityType=Attraction",
      name: "Frontierland Shootin' Exposition",
      url: "frontierland-shootin-exposition",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/frontierland-shootin-exposition/frontierland-shootin-exposition-00.jpg?1638920956402",
    }),
    createDLRNewAttraction({
      id: "353343;entityType=Attraction",
      name: "Goofy's How-to-Play Yard",
      url: "goofys-how-to-play-yard",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/attractions/goofys-playhouse/goofys-play-yard-16x9.jpg?2023-01-12T20:57:26+00:00",
    }),
    createDLRNewAttraction({
      id: "353337;entityType=Attraction",
      name: "Chip 'n' Dale's GADGETcoaster",
      url: "chip-n-dales-gadget-coaster",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/gadgets-go-coaster/gadgets-go-coaster-00.jpg?1679107525988",
    }),
    createDLRNewAttraction({
      id: "353369;entityType=Attraction",
      name: "Mad Tea Party",
      url: "mad-tea-party",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/attractions/disneyland/mad-tea-party/tea-cup-ride-father-daughters-16x9.jpg?1669764341555",
    }),
    createDLRNewAttraction({
      id: "353311;entityType=Attraction",
      name: "Davy Crockett's Explorer Canoes",
      url: "davy-crocketts-explorer-canoes",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/davy-crocketts-explorer-canoes/davy-crocketts-explorer-canoes-00.jpg?1641864633873",
    }),
    createDLRNewAttraction({
      id: "19193461;entityType=Attraction",
      name: "Star Wars: Rise of the Resistance",
      url: "star-wars-rise-of-the-resistance",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/attractions/disneyland/star-wars-rise-of-the-resistance/rise-of-the-resisstance-interior-16x9.jpg?1678754724200",
    }),
    createDLRNewAttraction({
      id: "353429;entityType=Attraction",
      name: "Snow White's Enchanted Wish",
      url: "snow-whites-enchanted-wish",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/attractions/disneyland/snow-whites-enchanted-wish/snow-whites-echanted-wish-dopey-16x9.jpg?1677892556421",
    }),
    createDLRNewAttraction({
      id: "353461;entityType=Attraction",
      name: "The Disneyland Story presenting Great Moments with Mr. Lincoln",
      url: "disneyland-story",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/disneyland-story/disneyland-story-00.jpg?1677786192445",
    }),
    createDLRNewAttraction({
      id: "353313;entityType=Attraction",
      name: "Disneyland Monorail",
      url: "disneyland-monorail",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/disneyland-monorail/disneyland-monorail-00.jpg?1679670221162",
    }),
    createDLRNewAttraction({
      id: "353421;entityType=Attraction",
      name: "Roger Rabbit's Car Toon Spin",
      url: "roger-rabbits-car-toon-spin",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/roger-rabbits-car-toon-spin/roger-rabbits-car-toon-spin-00.jpg?1679107019642",
    }),
    createDLRNewAttraction({
      id: "353383;entityType=Attraction",
      name: "Minnie's House",
      url: "minnies-house",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/attractions/disneyland/minnies-house/minnie-16x9.jpg?1679107031389",
    }),
    createDLRNewAttraction({
      id: "353355;entityType=Attraction",
      name: "Indiana Jones™ Adventure",
      url: "indiana-jones-adventure",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/indiana-jones-adventure/indiana-jones-adventure-00.jpg?1679064755067",
    }),
    createDLRNewAttraction({
      id: "353325;entityType=Attraction",
      name: "Walt Disney's Enchanted Tiki Room",
      url: "enchanted-tiki-room",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/enchanted-tiki-room/enchanted-tiki-room-00.jpg?1638920829727",
    }),
    createDLRNewAttraction({
      id: "353327;entityType=Attraction",
      name: "Finding Nemo Submarine Voyage",
      url: "finding-nemo-submarine-voyage",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/finding-nemo-submarine-voyage/finding-nemo-submarine-voyage-00.jpg?1658774429633",
    }),
    createDLRNewAttraction({
      id: "353291;entityType=Attraction",
      name: "Astro Orbitor",
      url: "astro-orbitor",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/astro-orbitor/astro-orbitor-00.jpg?1677891895488",
    }),
    createDLRNewAttraction({
      id: "353301;entityType=Attraction",
      name: "Buzz Lightyear Astro Blasters",
      url: "buzz-lightyear-astro-blasters",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/buzz-lightyear-astro-blaster/buzz-lightyear-astro-blasters-00.jpg?1669764279601",
    }),
    createDLRNewAttraction({
      id: "353405;entityType=Attraction",
      name: "Pirates of the Caribbean",
      url: "pirates-of-the-caribbean-dlr",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/pirates-of-the-caribbean/pirates-of-the-caribbean-00.jpg?1677892439485",
    }),
    createDLRNewAttraction({
      id: "18452199;entityType=Attraction",
      name: "Main Street Pumpkin Festival",
      url: "main-street-pumpkin-festival",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/main-street-pumpkin-festival/main-street-pumpkin-festival-00.jpg?1667288820644",
    }),
    createDLRNewAttraction({
      id: "353389;entityType=Attraction",
      name: "Mr. Toad's Wild Ride",
      url: "mr-toads-wild-ride",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/mr-toads-wild-ride/mr-toads-wild-ride-00.jpg?1677892397502",
    }),
    createDLRNewAttraction({
      id: "353443;entityType=Attraction",
      name: "Storybook Land Canal Boats",
      url: "storybook-land-canal-boats",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/storybook-land-canal-boats/storybook-land-canal-boats-00.jpg?1677892701472",
    }),
    createDLRNewAttraction({
      id: "393385;entityType=Attraction",
      name: "Main Street Vehicles",
      url: "main-street-vehicles",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/main-street-vehicles/main-street-vehicles-00.jpg?1638923058666",
    }),
    createDLRNewAttraction({
      id: "353427;entityType=Attraction",
      name: "Sleeping Beauty Castle Walkthrough",
      url: "sleeping-beauty-castle-walkthrough",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/attractions/disneyland/sleeping-beauty-castle-walkthrough/disneyland-sleeping-beauty-castle-day-16x9.jpg?1677892546393",
    }),
    createDLRNewAttraction({
      id: "353315;entityType=Attraction",
      name: "Disneyland Railroad",
      url: "disneyland-railroad",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/disneyland-railroad/disneyland-railroad-06.jpg?1677891941443",
    }),
    createDLRNewAttraction({
      id: "353365;entityType=Attraction",
      name: "King Arthur Carrousel",
      url: "king-arthur-carrousel",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/king-arthur-carrousel/king-arthur-carrousel-00.jpg?1677892307670",
    }),
    createDLRNewAttraction({
      id: "19193459;entityType=Attraction",
      name: "Millennium Falcon: Smugglers Run",
      url: "millennium-falcon-smugglers-run",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/attractions/disneyland/millennium-falcon-smugglers-run/smugglers-run-interior-16x9.jpg?1669667213362",
    }),
    createDLRNewAttraction({
      id: "353293;entityType=Attraction",
      name: "Autopia",
      url: "autopia",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/autopia/autopia-09.jpg?1677891911691",
    }),
    createDLRNewAttraction({
      id: "353403;entityType=Attraction",
      name: "Pirate's Lair on Tom Sawyer Island",
      url: "pirates-lair-on-tom-sawyer-island",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/pirates-lair-on-tom-sawyer-island/pirates-lair-on-tom-sawyer-island-00.jpg?1638923764879",
    }),
    createDLRNewAttraction({
      id: "353323;entityType=Attraction",
      name: "Dumbo the Flying Elephant",
      url: "dumbo-the-flying-elephant",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/attractions/disneyland/dumbo-the-flying-elephant/dumbo-mom-kids-16x9.jpg?1677891966430",
    }),
    createDLRNewAttraction({
      id: "19094413;entityType=Attraction",
      name: "Fortune Tellers",
      url: "fortune-tellers",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/attractions/disneyland/fortune-tellers/esmeralda-fortune-teller-16x9.jpg?1641866290308",
    }),
    createDLRNewAttraction({
      id: "353371;entityType=Attraction",
      name: "Main Street Cinema",
      url: "main-street-cinema",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/main-street-cinema/main-street-cinema-00.jpg?1638923004687",
    }),
    createDLRNewAttraction({
      id: "18237343;entityType=Attraction",
      name: "Star Wars Launch Bay",
      url: "star-wars-launch-bay",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/star-wars-launch-bay/star-wars-launch-bay-03.jpg?1677892660579",
    }),
    createDLRNewAttraction({
      id: "353435;entityType=Attraction",
      name: "Space Mountain",
      url: "space-mountain",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/space-mountain/space-mountain-00.jpg?1679380048225",
    }),
  ];

  if (includeEntertainment) {
    at = [
      ...at,
      createDLRNewEntertainment({
        id: "401483;entityType=Entertainment",
        name: "Fantasmic!",
        url: "fantasmic",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/entertainment/disneyland/fantasmic/fantasmic-detail-hero-sorcerer-mickey-16x9.jpg?1676052499711",
      }),
      createDLRNewEntertainment({
        id: "17346575;entityType=Entertainment",
        name: "Storytelling at Royal Theatre",
        url: "storytelling-royal-theatre",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/entertainment/disneyland/storytelling-royal-theater/storytelling-royal-theatre-00.jpg?1605290578352",
      }),
      createDLRNewEntertainment({
        id: "17448049;entityType=Entertainment",
        name: "Fireworks at Disneyland Park",
        url: "fireworks",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/entertainment/disneyland/fireworks/castle-fireworks-dlr-exterior-16x9.jpg?1674805806126",
      }),
      createDLRNewEntertainment({
        id: "19444352;entityType=Entertainment",
        name: '"Magic Happens" Parade',
        url: "magic-happens-parade",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/entertainment/disneyland/magic-happens-parade/magic-happens-parade-mickey-moana-16x9.jpg?1677254687896",
      }),
      createDLRNewEntertainment({
        id: "18738682;entityType=Entertainment",
        name: "Meet Disney Princesses at Royal Hall",
        url: "character-meet-princesses-royal-hall",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/entertainment/disneyland/character-meet-princesses-royal-hall/hero-fantasy-faire-meet-disney-princesses-royal-hall-16x9.jpg?1678206386315",
      }),
      createDLRNewEntertainment({
        id: "411671517;entityType=Entertainment",
        name: "Star Wars Character Experiences",
        url: "star-wars-character-experience",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/entertainment/meet-greet/star-wars/0515ZR_1382CR_RTD2-16x9.jpg?2022-04-14T17:58:15+00:00",
      }),
      createDLRNewEntertainment({
        id: "19319963;entityType=Entertainment",
        name: "Tale of the Lion King",
        url: "tale-of-the-lion-king",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/entertainment/tail-of-the-lion-king/20220524_RH-16x9.jpg?2022-06-07T17:32:24+00:00",
      }),
      createDLRNewEntertainment({
        id: "17315126;entityType=Entertainment",
        name: "Fantasy Faire",
        url: "fantasy-faire-dlr",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/entertainment/disneyland/fantasy-faire/fantasy-faire-00.jpg?1639112259327",
      }),
      createDLRNewEntertainment({
        id: "411813005;entityType=Entertainment",
        name: "Wondrous Journeys",
        url: "wondrous-journeys",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/events/d100/hub/WJ_Pyro1-16x9.jpg?2023-02-09T18:57:00+00:00",
      }),
      createDLRNewEntertainment({
        id: "401463;entityType=Entertainment",
        name: "The Dapper Dans",
        url: "dapper-dans",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/entertainment/disneyland/dapper-dans/dapper-dans-00.jpg?1676325413622",
      }),
      createDLRNewEntertainment({
        id: "19193436;entityType=Entertainment",
        name: "Mickey's Mix Magic",
        url: "mickeys-mix-magic",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/entertainment/disneyland/mickeys-mix-magic/mix-magic-crystal-arcade-16x9.jpg?1674003638017",
      }),
      createDLRNewEntertainment({
        id: "411647074;entityType=Entertainment",
        name: `"it's a small world" Encanto Projection`,
        url: "its-a-small-world-encanto-projection",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/entertainment/its-a-small-world-encanto/040122CT2MB-02154b-16x9.jpg?2022-04-01T20:55:32+00:00",
      }),
      createDLRNewEntertainment({
        id: "401524;entityType=Entertainment",
        name: "Meet Tinker Bell in Pixie Hollow",
        url: "pixie-hollow-tinkerbell-fairy-friends",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/entertainment/see-tinker-bell-in-pixie-hollow/tinkerbell-pixie-hallow-16x9.jpg?2022-02-28T22:33:19+00:00",
      }),
    ];
  }

  at = [
    ...at,
    createCANewAttraction({
      id: "16581435;entityType=Attraction",
      name: "Red Car Trolley",
      url: "red-car-trolley",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/red-car-trolley/red-car-trolley-00.jpg?1657922544259",
    }),
    createCANewAttraction({
      id: "353453;entityType=Attraction",
      name: "Toy Story Midway Mania!",
      url: "toy-story-mania",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/toy-story-mania/toy-story-mania-00.jpg?1666216805878",
    }),
    createCANewAttraction({
      id: "353387;entityType=Attraction",
      name: "Monsters, Inc. Mike & Sulley to the Rescue!",
      url: "monsters-inc",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/monsters-inc/monsters-inc-00.jpg?1670397781137",
    }),
    createCANewAttraction({
      id: "16514431;entityType=Attraction",
      name: "Mater's Junkyard Jamboree",
      url: "maters-junkyard-jamboree",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/maters-junkyard-jamboree/maters-junkyard-jamboree-00.jpg?1673244848630",
    }),
    createCANewAttraction({
      id: "353361;entityType=Attraction",
      name: "Jumpin' Jellyfish",
      url: "jumpin-jellyfish",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/jumpin-jellyfish/jumpin-jellyfish-00.jpg?1677904029837",
    }),
    createCANewAttraction({
      id: "15575069;entityType=Attraction",
      name: "The Little Mermaid - Ariel's Undersea Adventure",
      url: "little-mermaid-ariels-undersea-adventure",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/little-mermaid-ariels-undersea-adventure/little-mermaid-ariels-undersea-adventure-00.jpg?1677892356725",
    }),
    createCANewAttraction({
      id: "353413;entityType=Attraction",
      name: "Redwood Creek Challenge Trail",
      url: "redwood-creek-challenge-trail",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/redwood-creek-challenge-trail/redwood-creek-challenge-trail-00.jpg?1677892509595",
    }),
    createCANewAttraction({
      id: "19531124;entityType=Attraction",
      name: "WEB SLINGERS: A Spider-Man Adventure",
      url: "web-slingers-spider-man-adventure",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/attractions/disney-california-adventure/web-slingers-spider-man-adventure/webslingers-night-16x9.jpg?1677892732466",
    }),
    createCANewAttraction({
      id: "353431;entityType=Attraction",
      name: "Soarin' Around the World",
      url: "soarin",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/soarin-over-the-world/soarin-over-the-world-00.jpg?1677825624916",
    }),
    createCANewAttraction({
      id: "353447;entityType=Attraction",
      name: "The Bakery Tour",
      url: "bakery-tour",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/bakery-tour/bakery-tour-00.jpg?1639108540799",
    }),
    createCANewAttraction({
      id: "353303;entityType=Attraction",
      name: "Incredicoaster",
      url: "incredicoaster",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/incredicoaster-guests-16x9.jpg?1677892082028",
    }),
    createCANewAttraction({
      id: "16514416;entityType=Attraction",
      name: "Radiator Springs Racers",
      url: "radiator-springs-racers",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/radiator-springs-racers/radiator-springs-racers-00.jpg?1677892494898",
    }),
    createCANewAttraction({
      id: "353345;entityType=Attraction",
      name: "Grizzly River Run",
      url: "grizzly-river-run",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/grizzly-river-run/grizzly-river-run-00.jpg?1679064758823",
    }),
    createCANewAttraction({
      id: "353289;entityType=Attraction",
      name: "Animation Academy",
      url: "animation-academy",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/animation-academy/animation-academy-00.jpg?1639108497977",
    }),
    createCANewAttraction({
      id: "19299875;entityType=Attraction",
      name: "Mickey's PhilharMagic",
      url: "mickeys-philharmagic",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/attractions/disneyland/mickeys-philharmagic/mickeys-philharmagic-16x9.jpg?1676052209091",
    }),
    createCANewAttraction({
      id: "19285637;entityType=Attraction",
      name: "Inside Out Emotional Whirlwind",
      url: "emotional-whirlwind",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/attractions/disney-california-adventure/emotional-whirlwind/emotional-whirlwind-inside-out-16x9.jpg?1677892094483",
    }),
    createCANewAttraction({
      id: "353433;entityType=Attraction",
      name: "Sorcerer's Workshop",
      url: "sorcerers-workshop",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/sorcerers-workshop/sorcerers-workshop-00.jpg?1677892613527",
    }),
    createCANewAttraction({
      id: "353457;entityType=Attraction",
      name: "Turtle Talk with Crush",
      url: "turtle-talk-with-crush",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/turtle-talk-with-crush/turtle-talk-with-crush-03.jpg?1639109824277",
    }),
    createCANewAttraction({
      id: "15510732;entityType=Attraction",
      name: "Silly Symphony Swings",
      url: "silly-symphony-swings",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/silly-symphony-swings/silly-symphony-swings-00.jpg?1677892529386",
    }),
    createCANewAttraction({
      id: "353367;entityType=Attraction",
      name: "Jessie's Critter Carousel",
      url: "jessies-critter-carousel",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/attractions/disney-california-adventure/jessies-critter-carousel/jessies-critter-carousel-16x9_1.jpg?1677892128417",
    }),
    createCANewAttraction({
      id: "353339;entityType=Attraction",
      name: "Games of Pixar Pier",
      url: "games-pixar-pier",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/wall-e-game-boardwalk-16x9.jpg?1641866496788",
    }),
    createCANewAttraction({
      id: "18343088;entityType=Attraction",
      name: "Luigi's Rollickin' Roadsters",
      url: "luigis-rollickin-roadsters",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/luigis-rollickin-roadsters/luigis-rollickin-roadsters-00.jpg?1673244620174",
    }),
    createCANewAttraction({
      id: "353341;entityType=Attraction",
      name: "Golden Zephyr",
      url: "golden-zephyr",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/golden-zephyr/golden-zephyr-00.jpg?1677891994447",
    }),
    createCANewAttraction({
      id: "19009994;entityType=Attraction",
      name: "Pixar Pal-A-Round – Non-Swinging",
      url: "pixar-pal-a-round-non-swinging",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/pixar-pal-around-night-16x9.jpg?1677892451502",
    }),
    createCANewAttraction({
      id: "353379;entityType=Attraction",
      name: "Pixar Pal-A-Round - Swinging",
      url: "pixar-pal-a-round-swinging",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/pixar-pal-around-night-16x9.jpg?1677892461478",
    }),
    createCANewAttraction({
      id: "15822029;entityType=Attraction",
      name: "Goofy's Sky School",
      url: "goofys-sky-school",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/goofys-sky-school/goofys-sky-school-00.jpg?1669767710381",
    }),
    createCANewAttraction({
      id: "353451;entityType=Attraction",
      name: "Guardians of the Galaxy - Mission: BREAKOUT!",
      url: "guardians-galaxy-mission-breakout",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/guardians-of-the-galaxy-mission-breakout/new/guardians-of-the-galaxy-mission-breakout-16x9.jpg?1669764540852",
    }),
    createCANewAttraction({
      id: "353459;entityType=Attraction",
      name: "Walt Disney Imagineering Blue Sky Cellar",
      url: "walt-disney-imagineering-blue-sky-cellar",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/walt-disney-imagineering-blue-sky-cellar/walt-disney-imagineering-blue-sky-cellar-00.jpg?1677892713401",
    }),
  ];

  if (includeEntertainment) {
    at = [
      ...at,
      createCANewEntertainment({
        id: "16633170;entityType=Entertainment",
        name: "Five & Dime",
        url: "five-and-dime",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/entertainment/disney-california-adventure/five-and-dime/five-and-dime-00.jpg?1639110592899",
      }),
      createCANewEntertainment({
        id: "401471;entityType=Entertainment",
        name: "Meet Disney Pals on Buena Vista Street",
        url: "disney-pals-on-buena-vista-street",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/entertainment/meet-greet/disney/dca-mikey-buena-vista-1-16x9.jpg?2022-04-27T17:48:47+00:00",
      }),
      createCANewEntertainment({
        id: "19052131;entityType=Entertainment",
        name: "Meet Pixar Pals at Pixar Pier",
        url: "character-meet-pixar-pals-pixar-pier",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/entertainment/disney-california-adventure/character-meet-pixar-pals-pixar-pier/bo-peep-pixar-pier-16x9.jpg?1650289856351",
      }),
      createCANewEntertainment({
        id: "16642243;entityType=Entertainment",
        name: "Paradise Garden Bandstand",
        url: "paradise-garden-bandstand",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/entertainment/disney-california-adventure/paradise-garden-bandstand/paradise-garden-bandstand-00-16x9.jpg?1677823785837",
      }),
      createCANewEntertainment({
        id: "18708628;entityType=Entertainment",
        name: "Disney Junior Dance Party!",
        url: "disney-junior-dance-party",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/entertainment/disney-california-adventure/disney-junior-dance-party/vampirina-disney-jr-dance-party-16x9.jpg?1676052426118",
      }),
      createCANewEntertainment({
        id: "18691239;entityType=Entertainment",
        name: "Guardians of the Galaxy: Awesome Dance Off!",
        url: "guardians-galaxy-dance",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/entertainment/disney-california-adventure/guardians-galaxy-dance/guardians-galaxy-dance-off-16x9.jpg?1639110643990",
      }),
      createCANewEntertainment({
        id: "411805933;entityType=Entertainment",
        name: "World of Color – ONE",
        url: "world-of-color-one",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/events/d100/hub/WoC6-16x9.jpg?2023-02-09T18:57:00+00:00",
      }),
      createCANewEntertainment({
        id: "17563885;entityType=Entertainment",
        name: "Anna & Elsa's Royal Welcome",
        url: "character-meet-anna-and-elsa-frozen",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/entertainment/meet-greet/disney/11_2019__DCA.2671.JS_-16x9.jpg?2022-10-14T17:05:46+00:00",
      }),
      createCANewEntertainment({
        id: "19534191;entityType=Entertainment",
        name: "Avengers Headquarters",
        url: "avengers-headquarters",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/destinations/disney-california-adventure/avengers-campus/campus-night-16x9.jpg?1657064787171",
      }),
      createCANewEntertainment({
        id: "401479;entityType=Entertainment",
        name: "World of Color",
        url: "world-of-color",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/entertainment/disney-california-adventure/world-of-color/world-of-color-00.jpg?1668157269796",
      }),
      createCANewEntertainment({
        id: "16578447;entityType=Entertainment",
        name: "Meet the Residents of Radiator Springs in Cars Land",
        url: "character-meet-mater-mcqueen-cozy-cone-motel",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/lifestyle/mater-and-mcqueen-00-16x9.jpg?2022-10-28T23:48:46+00:00",
      }),
    ];
  }

  at = [
    ...at,
    createDTDNewAttraction({
      id: "411858979;entityType=Attraction",
      name: "Disney100 Décor at the Disneyland Resort",
      url: "disney-d100-decor",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/events/d100/hub/SBC1-16x9.jpg?2023-02-09T18:57:00+00:00",
    }),
    createDTDNewAttraction({
      id: "18877575;entityType=Attraction",
      name: "Splitsville Luxury Lanes™ – Bowling",
      url: "splitsville-entertainment",
      imageUrl:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/downtown-disney-district/splitsville-entertainment/splitsville-action-16x9.jpg?1641866598496",
    }),
  ];

  if (includeEntertainment) {
    at = [
      ...at,
      createDTDNewEntertainment({
        id: "19316547;entityType=Entertainment",
        name: "Live Entertainment at Splitsville Kingpin Stage",
        url: "splitsville-kingpin-stage",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/entertainment/downtown-disney-district/splitsville-luxury-lanes/splitsville-luxury-lanes-singer-16x9.jpg?1625093033699",
      }),
      createDTDNewEntertainment({
        id: "18473904;entityType=Entertainment",
        name: "Downtown Disney LIVE! Stage Entertainment",
        url: "downtown-disney-live-stage",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/entertainment/live-performance/DTD_Web-20-16x9.jpg?2022-10-25T16:50:37+00:00",
      }),
      createDTDNewEntertainment({
        id: "14754699;entityType=Entertainment",
        name: "Flambeaux's Jazz Club at Ralph Brennan's Jazz Kitchen®",
        url: "ralph-brennans-jazz-kitchen-flambeauxs-jazz-club",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/dlr/sp/parks-and-tickets/entertainment/downtown-disney-district/rbjk/ralph-brennans-jazz-kitchen-flambeauxs-jazz-club-00.jpg?1639684844521",
      }),
      createDTDNewEntertainment({
        id: "18148012;entityType=Entertainment",
        name: "Character Dining",
        url: "dlr-entertainment-character-dining",
        imageUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/disneyland/dining/grand-californian-hotel/disney-princess-breakfast-adventures/girl-princess-costume-characters-16x9.jpg?1586287958242",
      }),
    ];
  }

  return at;
};
