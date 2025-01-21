'use strict'

module.exports = [{
	id: '37',
	title: 'v6.db.transport.rest is currently unavailable',
	url: 'https://github.com/derhuerst/db-rest/issues/60',
	date: '2025-01-21T12:30:02+01:00',
	body: `\
**The underlying [DB HAFAS API is currently not available](https://github.com/public-transport/hafas-client/issues/331)**, and it seems like it has been shut off permanently. We're considering changing \`db-rest\` to use [\`db-vendo-client\`](https://github.com/public-transport/db-vendo-client), **please follow [Issue #60](https://github.com/derhuerst/db-rest/issues/60) for updates**.

You can also use [\`db-vendo-client\`](https://github.com/public-transport/db-vendo-client) yourself as a replacement, it covers most of the use cases served by \`db-rest\`, but [the underlying APIs seem to have a **much lower rate limit**](https://github.com/public-transport/db-vendo-client/issues/10).

(This also applies to \`v5.db.transport.rest\`.)
`
}, {
	id: '36',
	title: 'v5.db.transport.rest is now deprecated',
	url: '#',
	date: '2023-05-09T11:30:02+02:00',
	body: `\
[\`v5.db.transport.rest\`](https://v5.db.transport.rest/) is now deprecated; I will shut it off in 1-2 months.

Please use the successor, [\`v6.db.transport.rest\`](https://v6.db.transport.rest/). It returns data in the format of [\`hafas-client@6\`](https://github.com/public-transport/hafas-client/blob/6/docs/readme.md), so you will have to make minor adjustments. Check out [the API documentation](https://github.com/derhuerst/db-rest/blob/6/docs/readme.md).
`
}, {
	id: '35',
	title: 'v5.vbb.transport.rest is now deprecated',
	url: '#',
	date: '2023-05-09T11:30:01+02:00',
	body: `\
[\`v5.vbb.transport.rest\`](https://v5.vbb.transport.rest/) is now deprecated; I will shut it off in 1-2 months.

Please use the successor, [\`v6.vbb.transport.rest\`](https://v6.vbb.transport.rest/). It returns data in the format of [\`hafas-client@6\`](https://github.com/public-transport/hafas-client/blob/6/docs/readme.md), so you will have to make minor adjustments. Check out [the API documentation](https://github.com/derhuerst/vbb-rest/blob/6/docs/readme.md).
`
}, {
	id: '34',
	title: 'v5.bvg.transport.rest is now deprecated',
	url: '#',
	date: '2023-05-09T11:30:00+02:00',
	body: `\
[\`v5.bvg.transport.rest\`](https://v5.bvg.transport.rest/) is now deprecated; I will shut it off in 1-2 months.

Please use the successor, [\`v6.bvg.transport.rest\`](https://v6.bvg.transport.rest/). It returns data in the format of [\`hafas-client@6\`](https://github.com/public-transport/hafas-client/blob/6/docs/readme.md), so you will have to make minor adjustments. Check out [the API documentation](https://github.com/derhuerst/bvg-rest/blob/6/docs/readme.md).
`
}, {
	id: '33',
	title: 'new VBB API: v6.bvg.transport.rest',
	url: 'https://github.com/derhuerst/bvg-rest/blob/6/docs/readme.md',
	date: '2022-12-29T14:30:00+01:00',
	body: `\
**I have set up a new API: \`v6.bvg.transport.rest\`.**

Just works just like its predecessor [\`v5.bvg.transport.rest\`](https://v5.bvg.transport.rest/), but it returns data in the [\`hafas-client@6\`](https://github.com/public-transport/hafas-client/blob/6/docs/readme.md) format (there are only minor changes compared to [\`hafas-client@5\`](https://github.com/public-transport/hafas-client/blob/5/docs/readme.md) though).

Eventually I will shut off \`v5.bvg.transport.rest\`, so please try to migrate within the next 6 months.
`
}, {
	id: '32',
	title: 'new VBB API: v6.db.transport.rest',
	url: 'https://github.com/derhuerst/db-rest/blob/6/docs/readme.md',
	date: '2022-12-29T12:30:00+01:00',
	body: `\
**I have set up a new API: \`v6.db.transport.rest\`.**

Just works just like its predecessor [\`v5.db.transport.rest\`](https://v5.db.transport.rest/), but it returns data in the [\`hafas-client@6\`](https://github.com/public-transport/hafas-client/blob/6/docs/readme.md) format (there are only minor changes compared to [\`hafas-client@5\`](https://github.com/public-transport/hafas-client/blob/5/docs/readme.md) though).

Eventually I will shut off \`v5.db.transport.rest\`, so please try to migrate within the next 6 months.
`
}, {
	id: '31',
	title: 'new VBB API: v6.vbb.transport.rest',
	url: 'https://github.com/derhuerst/vbb-rest/blob/6/docs/readme.md',
	date: '2022-12-28T12:30:00+01:00',
	body: `\
**I have set up a new API: \`v6.vbb.transport.rest\`.**

Just works just like its predecessor [\`v5.vbb.transport.rest\`](https://v5.vbb.transport.rest/), but it returns data in the [\`hafas-client@6\`](https://github.com/public-transport/hafas-client/blob/6/docs/readme.md) format (there are only minor changes compared to [\`hafas-client@5\`](https://github.com/public-transport/hafas-client/blob/5/docs/readme.md) though).

Eventually I will shut off \`v5.vbb.transport.rest\`, so please try to migrate within the next 6 months.
`
}, {
	id: '30',
	title: 'v5.{bvg,db,vbb}.transport.rest will be offline for maintenance',
	url: '#',
	date: '2022-10-21T00:40:00+02:00',
	body: `\
The following API endpoints will be down briefly for maintenance at some point in the next 24 hours:

- \`v5.bvg.transport.rest\`
- \`v5.db.transport.rest\`
- \`v5.vbb.transport.rest\`
`
}, {
	id: '29',
	title: 'v5.hvv.transport.rest & v0.hamburg-gtfs-rt.transport.rest are now shut off',
	url: '#',
	date: '2022-09-14T22:15:00+02:00',
	body: `\
As you may have noticed, [\`v5.hvv.transport.rest\`](https://v5.hvv.transport.rest/) hasn't been available recently. This is because HVV deprecated their HAFAS-based API when they rebuilt their mobile app. Because it has mostly been down in the past months, I have shut it off permanently.

Consider using [their official API(s)](https://www.hvv.de/de/fahrplaene/abruf-fahrplaninfos/datenabruf) instead.

The same applies to [\`v0.hamburg-gtfs-rt.transport.rest\`](https://v0.hamburg-gtfs-rt.transport.rest/) which was based on the same underlying HAFAS API.`
}, {
	id: '28',
	title: 'v5.{bvg,db,hvv,vbb}.transport.rest will be offline for maintenance',
	url: '#',
	date: '2022-09-07T23:10:00+02:00',
	body: `\
The following API endpoints will be down for maintenance from \`2022-09-21T08:00Z\` for about an hour:

- \`v5.bvg.transport.rest\`
- \`v5.db.transport.rest\`
- \`v5.hvv.transport.rest\`
- \`v5.vbb.transport.rest\`
`
}, {
	id: '27',
	title: 'new API for Poland: poland.transport.rest',
	url: 'https://poland.transport.rest',
	date: '2022-03-27T16:40:00+02:00',
	body: `\
**[@konhi](https://github.com/konhi) has set up a new API: \`poland.transport.rest\`!**

Currently, it provides data for the Zielona Góra region, but the idea is to extend it to other areas in Poland as well.
`
}, {
	id: '26',
	title: '1.hvv.transport.rest is now shut off',
	url: '#',
	date: '2020-10-26T13:40:00+01:00',
	body: `\
As announced, I have shut off \`1.hvv.transport.rest\`.

Please use the successor, [\`v5.hvv.transport.rest\`](https://v5.hvv.transport.rest/). It returns data in the format of [\`hafas-client@5\`](https://github.com/public-transport/hafas-client/blob/5/docs/readme.md), so you will have to make minor adjustments. Check out [the API documentation](https://v5.hvv.transport.rest/api.html).`
}, {
	id: '25',
	title: '2.bvg.transport.rest is now shut off',
	url: '#',
	date: '2020-10-26T13:40:00+01:00',
	body: `\
As announced, I have shut off \`2.bvg.transport.rest\`.

Please use the successor, [\`v5.bvg.transport.rest\`](https://v5.bvg.transport.rest/). It returns data in the format of [\`hafas-client@5\`](https://github.com/public-transport/hafas-client/blob/5/docs/readme.md), so you will have to make minor adjustments. Check out [the API documentation](https://v5.bvg.transport.rest/api.html).`
}, {
	id: '24',
	title: '3.vbb.transport.rest is now shut off',
	url: '#',
	date: '2020-10-26T13:40:00+01:00',
	body: `\
As announced, I have shut off \`3.vbb.transport.rest\`.

Please use the successor, [\`v5.vbb.transport.rest\`](https://v5.vbb.transport.rest/). It returns data in the format of [\`hafas-client@5\`](https://github.com/public-transport/hafas-client/blob/5/docs/readme.md), so you will have to make minor adjustments. Check out [the API documentation](https://v5.vbb.transport.rest/api.html).`
}, {
	id: '23',
	title: '2.db.transport.rest is now shut off',
	url: '#',
	date: '2020-10-26T13:40:00+01:00',
	body: `\
As announced, I have shut off \`2.db.transport.rest\`.

Please use the successor, [\`v5.db.transport.rest\`](https://v5.db.transport.rest/). It returns data in the format of [\`hafas-client@5\`](https://github.com/public-transport/hafas-client/blob/5/docs/readme.md), so you will have to make minor adjustments. Check out [the API documentation](https://v5.db.transport.rest/api.html).`
}, {
	id: '22',
	title: '1.hvv.transport.rest is now deprecated',
	url: '#',
	date: '2020-09-10T14:20:00+02:00',
	body: `\
[\`1.hvv.transport.rest\`](https://1.hvv.transport.rest/) is now deprecated; It will be shut off roughly in a month.

Please use the successor, [\`v5.hvv.transport.rest\`](https://v5.hvv.transport.rest/). It returns data in the format of [\`hafas-client@5\`](https://github.com/public-transport/hafas-client/blob/5/docs/readme.md), so you will have to make minor adjustments. Check out [the API documentation](https://github.com/derhuerst/hvv-rest/blob/5/docs/readme.md).`
}, {
	id: '21',
	title: '2.bvg.transport.rest is now deprecated',
	url: '#',
	date: '2020-09-10T14:20:00+02:00',
	body: `\
[\`2.bvg.transport.rest\`](https://2.bvg.transport.rest/) is now deprecated; It will be shut off roughly in a month.

Please use the successor, [\`v5.bvg.transport.rest\`](https://v5.bvg.transport.rest/). It returns data in the format of [\`hafas-client@5\`](https://github.com/public-transport/hafas-client/blob/5/docs/readme.md), so you will have to make minor adjustments. Check out [the API documentation](https://github.com/derhuerst/bvg-rest/blob/5/docs/readme.md).`
}, {
	id: '20',
	title: '3.vbb.transport.rest is now deprecated',
	url: '#',
	date: '2020-09-10T14:20:00+02:00',
	body: `\
[\`3.vbb.transport.rest\`](https://3.vbb.transport.rest/) is now deprecated; It will be shut off roughly in a month.

Please use the successor, [\`v5.vbb.transport.rest\`](https://v5.vbb.transport.rest/). It returns data in the format of [\`hafas-client@5\`](https://github.com/public-transport/hafas-client/blob/5/docs/readme.md), so you will have to make minor adjustments. Check out [the API documentation](https://github.com/derhuerst/vbb-rest/blob/5/docs/readme.md).`
}, {
	id: '19',
	title: '2.db.transport.rest is now deprecated',
	url: '#',
	date: '2020-09-10T14:20:00+02:00',
	body: `\
[\`2.db.transport.rest\`](https://2.db.transport.rest/) is now deprecated; It will be shut off roughly in a month.

Please use the successor, [\`v5.db.transport.rest\`](https://v5.db.transport.rest/). It returns data in the format of [\`hafas-client@5\`](https://github.com/public-transport/hafas-client/blob/5/docs/readme.md), so you will have to make minor adjustments. Check out [the API documentation](https://github.com/derhuerst/db-rest/blob/5/docs/readme.md).`
}, {
	id: '18',
	title: 'new HVV API: v5.hvv.transport.rest',
	url: 'https://github.com/derhuerst/hvv-rest/blob/5/docs/readme.md',
	date: '2020-05-17T18:30:00+02:00',
	body: `\
**I have set up a new API: \`v5.hvv.transport.rest\`.**

Just like its predecessor \`1.hvv.transport.rest\`, it provides data for [Hamburg public transport (HVV)](https://en.wikipedia.org/wiki/Hamburger_Verkehrsverbund). The API returns data in the format of [\`hafas-client@5\`](https://github.com/public-transport/hafas-client/blob/5/docs/readme.md). Check out [the API documentation](https://github.com/derhuerst/hvv-rest/blob/5/docs/readme.md).

New features of this API:
- [new features of \`hafas-client@4\` & \`hafas-client@5\`](https://github.com/public-transport/hafas-client/blob/5/docs/changelog.md) (mostly more detailed responses)
- [new \`/radar\` route](https://github.com/derhuerst/hvv-rest/blob/5/docs/api.md#get-radar)
- [new \`/stops/reachable-from\` route](https://github.com/derhuerst/hvv-rest/blob/5/docs/api.md#get-stopsreachable-from)
- \`/arrivals\`/\`/departures\` & \`/journeys\`: pagination support via [\`Link\` headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link)
- better caching support: strong [\`ETag\`s](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) & [\`Last-Modified\`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified) headers
`
}, {
	id: '17',
	title: 'new BVG API: v5.bvg.transport.rest',
	url: 'https://github.com/derhuerst/bvg-rest/blob/5/docs/readme.md',
	date: '2020-05-17T18:30:00+02:00',
	body: `\
**I have set up a new API: \`v5.bvg.transport.rest\`.**

Just like its predecessor \`2.bvg.transport.rest\`, it provides data for [Berlin public transport (BVG)](https://en.wikipedia.org/wiki/Berliner_Verkehrsbetriebe). The API returns data in the format of [\`hafas-client@5\`](https://github.com/public-transport/hafas-client/blob/5/docs/readme.md). Check out [the API documentation](https://github.com/derhuerst/bvg-rest/blob/5/docs/readme.md).

New features of this API:
- [new features of \`hafas-client@4\` & \`hafas-client@5\`](https://github.com/public-transport/hafas-client/blob/5/docs/changelog.md) (mostly more detailed responses)
- [new \`/radar\` route](https://github.com/derhuerst/bvg-rest/blob/5/docs/api.md#get-radar)
- [new \`/stops/reachable-from\` route](https://github.com/derhuerst/bvg-rest/blob/5/docs/api.md#get-stopsreachable-from)
- \`/arrivals\`/\`/departures\` & \`/journeys\`: pagination support via [\`Link\` headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link)
- better caching support: strong [\`ETag\`s](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) & [\`Last-Modified\`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified) headers

*Note:* Because [BVG's HAFAS system](https://github.com/public-transport/hafas-client/blob/e02a20b1de59bda3cd380445b6105e4c46036636/p/bvg/readme.md) beneath this API is frequently down, consider using [\`v5.vbb.transport.rest\`](https://v5.vbb.transport.rest/); Both have almost exactly the same data.
`
}, {
	id: '16',
	title: 'new VBB API: v5.vbb.transport.rest',
	url: 'https://github.com/derhuerst/vbb-rest/blob/5/docs/readme.md',
	date: '2020-05-17T18:30:00+02:00',
	body: `\
**I have set up a new API: \`v5.vbb.transport.rest\`.**

Just like its predecessor \`3.vbb.transport.rest\`, it provides data for [Berlin & Brandenburg public transport (VBB)](https://en.wikipedia.org/wiki/Verkehrsverbund_Berlin-Brandenburg). The API returns data in the format of [\`hafas-client@5\`](https://github.com/public-transport/hafas-client/blob/5/docs/readme.md). Check out [the API documentation](https://github.com/derhuerst/vbb-rest/blob/5/docs/readme.md).

New features of this API:
- [new features of \`hafas-client@4\` & \`hafas-client@5\`](https://github.com/public-transport/hafas-client/blob/5/docs/changelog.md) (mostly more detailed responses)
- [new \`/radar\` route](https://github.com/derhuerst/vbb-rest/blob/5/docs/api.md#get-radar)
- [new \`/stops/reachable-from\` route](https://github.com/derhuerst/vbb-rest/blob/5/docs/api.md#get-stopsreachable-from)
- \`/arrivals\`/\`/departures\` & \`/journeys\`: pagination support via [\`Link\` headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link)
- better caching support: strong [\`ETag\`s](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) & [\`Last-Modified\`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified) headers
- more consistent & intuitive routes for stops/stations & lines search/info
`
}, {
	id: '15',
	title: 'new DB API: v5.db.transport.rest',
	url: 'https://github.com/derhuerst/db-rest/blob/5/docs/readme.md',
	date: '2020-05-17T18:30:00+02:00',
	body: `\
**I have set up a new API: \`v5.db.transport.rest\`.**

Just like its predecessor \`2.db.transport.rest\`, it provides data for [*Deutsche Bahn*](https://en.wikipedia.org/wiki/Deutsche_Bahn). The API returns data in the format of [\`hafas-client@5\`](https://github.com/public-transport/hafas-client/blob/5/docs/readme.md). Check out [the API documentation](https://github.com/derhuerst/db-rest/blob/5/docs/readme.md).

New features of this API:
- [new features of \`hafas-client@4\` & \`hafas-client@5\`](https://github.com/public-transport/hafas-client/blob/5/docs/changelog.md) (mostly more detailed responses)
- [new \`/radar\` route](https://github.com/derhuerst/db-rest/blob/5/docs/api.md#get-radar)
- [new \`/stops/reachable-from\` route](https://github.com/derhuerst/db-rest/blob/5/docs/api.md#get-stopsreachable-from)
- \`/arrivals\`/\`/departures\` & \`/journeys\`: pagination support via [\`Link\` headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link)
- better caching support: strong [\`ETag\`s](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) & [\`Last-Modified\`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified) headers
- more consistent & intuitive routes for stops/stations search/info
`
}, {
	id: '14',
	title: 'rate limits added for *.{vbb,bvg,db,hvv}.transport.rest',
	url: '#',
	date: '2020-04-30T14:40:00+02:00',
	body: `\
I have added a 60 requests/min (120 requests/min burst) [rate limit](https://apisyouwonthate.com/blog/what-is-api-rate-limiting-all-about) to the following endpoints:

- \`1.hvv.transport.rest\`
- \`2.db.transport.rest\`
- \`2.bvg.transport.rest\`
- \`3.vbb.transport.rest\`

The rate limit works by IP address. The endpoint will respond with [\`429 Too Many Requests\`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) as long as you are above the threshold.
`
}, {
	id: '13',
	title: '1.db.transport.rest now shut off',
	url: '#',
	date: '2020-03-24T18:20:00+01:00',
	body: `\
I've just shut off \`1.db.transport.rest\` as previously announced. Please use the successor, [\`2.db.transport.rest\`](https://github.com/derhuerst/db-rest/blob/2/docs/index.md).`
}, {
	id: '12',
	title: '1.bvg.transport.rest now shut off',
	url: '#',
	date: '2020-03-24T18:20:00+01:00',
	body: `\
I've just shut off \`1.bvg.transport.rest\` as previously announced. Please use the successor, [\`2.bvg.transport.rest\`](https://github.com/derhuerst/bvg-rest/blob/2/docs/index.md).`
}, {
	id: '11',
	title: '2.vbb.transport.rest now shut off',
	url: '#',
	date: '2020-03-24T18:20:00+01:00',
	body: `\
I've just shut off \`2.vbb.transport.rest\` as previously announced. Please use the successor, [\`3.vbb.transport.rest\`](https://github.com/derhuerst/vbb-rest/blob/3/docs/index.md).`
}, {
	id: '10',
	title: '1.bvg.transport.rest is now deprecated',
	url: '#',
	date: '2019-10-28T16:59:00+0100',
	body: `\
[\`1.bvg.transport.rest\`](https://1.bvg.transport.rest/) is now deprecated; It will be shut off later this year.

Please use the successor, [\`2.bvg.transport.rest\`](https://2.bvg.transport.rest/). It returns data in the format of [\`hafas-client@4\`](https://github.com/public-transport/hafas-client/blob/4/docs/readme.md), so you will have to make minor adjustments.`
}, {
	id: '9',
	title: '2.vbb.transport.rest is now deprecated',
	url: '#',
	date: '2019-10-28T16:57:00+0100',
	body: `\
[\`2.vbb.transport.rest\`](https://2.vbb.transport.rest/) is now deprecated; It will be shut off later this year.

Please use the successor, [\`3.vbb.transport.rest\`](https://3.vbb.transport.rest/). It returns data in the format of [\`hafas-client@4\`](https://github.com/public-transport/hafas-client/blob/4/docs/readme.md), so you will have to make minor adjustments.`
}, {
	id: '8',
	title: 'new VBB API: 3.vbb.transport.rest',
	url: 'https://github.com/derhuerst/vbb-rest/3/master/readme.md',
	date: '2019-03-22T11:10:00+0100',
	body: `\
I have set up a new API: \`3.vbb.transport.rest\`, just like \`2.vbb.transport.rest\`, provides data for [Berlin & Brandenburg public transport (VBB)](https://en.wikipedia.org/wiki/Verkehrsverbund_Berlin-Brandenburg), but in the output format of [\`hafas-client@4\`](https://github.com/public-transport/hafas-client/blob/4/docs/readme.md). Check the docs at [\`derhuerst/vbb-rest\`](https://github.com/derhuerst/vbb-rest/blob/3/docs/index.md).

As the underlying HAFAS endpoints beneath \`3.vbb.transport.rest\` and [\`2.bvg.transport.rest\`](https://2.bvg.transport.rest) *both* cover almost all of Berlin & Brandenburg, they are pretty much equivalent.`
}, {
	id: '7',
	title: 'new BVG API: 2.bvg.transport.rest',
	url: 'https://github.com/derhuerst/bvg-rest/2/master/readme.md',
	date: '2019-03-22T11:08:00+0100',
	body: `\
I have set up a new API: \`2.bvg.transport.rest\`, just like \`1.bvg.transport.rest\`, provides data for [Berlin public transport (BVG)](https://en.wikipedia.org/wiki/Berliner_Verkehrsbetriebe), but in the output format of [\`hafas-client@4\`](https://github.com/public-transport/hafas-client/blob/4/docs/readme.md). The underlying HAFAS endpoint also has data for non-BVG vehicles, it essentially covers all of Berlin & Brandenburg.

Check the docs at [\`derhuerst/bvg-rest\`](https://github.com/derhuerst/bvg-rest/blob/2/docs/index.md).`
}, {
	id: '6',
	title: 'new DB API: 2.db.transport.rest',
	url: 'https://github.com/derhuerst/db-rest/2/master/readme.md',
	date: '2018-10-25T22:00:00+0200',
	body: `\
I have set up a new API: \`2.db.transport.rest\`, just like \`1.db.transport.rest\`, provides data for [*Deutsche Bahn*](https://en.wikipedia.org/wiki/Deutsche_Bahn), but in the output format of [\`hafas-client@3\`](https://github.com/public-transport/hafas-client/blob/3/docs/readme.md), compatible with the [*Friendly Public Transport Format* \`1.2.0\`](https://github.com/public-transport/friendly-public-transport-format/blob/1.2.0/spec/readme.md). Check the docs at [\`derhuerst/db-rest\`](https://github.com/derhuerst/db-rest/blob/2/docs/index.md).`
}, {
	id: '5',
	title: 'new BVG API: 1.bvg.transport.rest',
	url: 'https://github.com/derhuerst/bvg-rest/blob/1/readme.md',
	date: '2018-08-06T17:00:00+0200',
	body: `\
I have set up a new API: \`1.bvg.transport.rest\` provides data for the [*Berliner Verkehrsbetriebe*](https://en.wikipedia.org/wiki/Berliner_Verkehrsbetriebe), the main public transportation provider of Berlin. Check the docs at [derhuerst/bvg-rest](https://github.com/derhuerst/bvg-rest/blob/1/readme.md).

It returns almost exactly the same data as \`2.vbb.transport.rest\`, but in the output format of [\`hafas-client@3\`](https://github.com/public-transport/hafas-client/blob/3/docs/readme.md), so you will have to make minor adjustments.`
}, {
	id: '4',
	title: '2.vbb.transport.rest unavailable for the time being, way forward',
	url: 'https://github.com/derhuerst/vbb-rest/issues/29#issuecomment-406795226',
	date: '2018-08-01T20:20:00+0200',
	body: `\
As you might have noticed, [\`2.vbb.transport.rest\`](https://github.com/derhuerst/vbb-rest/blob/2/docs/index.md) has been down again for many days. This is because VBB has blocked the IP address of the API server, as well as those of [our load-balancing nodes we had set up in response](https://github.com/derhuerst/vbb-rest/issues/29#issuecomment-405111356). More background info can be found [at \`derhuerst/vbb-rest#29\`](https://github.com/derhuerst/vbb-rest/issues/29#issuecomment-406795226).

**I won't run the \`2.vbb.transport.rest\` endpoint for the time being. If you want to use consume VBB data using JavaScript, use [\`vbb-hafas\`](https://github.com/public-transport/vbb-hafas) (the lib behind the API) directly, otherwise host your own \`vbb-rest\` instance for now.**

@juliuste and I have met recently with VBB. We were able to communicate:

- our desire to keep this API running,
- that the \`2.vbb.transport.rest\` endpoint is *not* responsible for the amount of traffic they've received with a \`hafas-client\` \`User-Agent\`,
- that an open [GTFS RT](https://developers.google.com/transit/gtfs-realtime/reference/) feed would solve many issues for both parties.`
}, {
	id: '3',
	title: 'old vbb.transport.rest now shut off',
	url: '#',
	date: '2018-06-04T19:20:00+0200',
	body: `\
I've just shut off \`vbb.transport.rest\` as previously announced. Please use the successor, [\`2.vbb.transport.rest\`](https://github.com/derhuerst/vbb-rest/blob/2/docs/index.md).`
}, {
	id: '2',
	title: 'VBB API now exposes transfer positions',
	url: 'https://github.com/public-transport/vbb-hafas/blob/7c4d32b011d5c8cdf61ec33dc0bed56e96212af6/README.md#transfer-information-for-journeys',
	date: '2018-04-27T16:30:00+0200',
	body: `\
The [\`2.vbb.transport.rest\` API](https://github.com/derhuerst/vbb-rest/blob/2/docs/index.md) will now expose transfer information for each leg of a journey, whenever the underlying [crowd-sourced database of transfer positions](https://github.com/juliuste/vbb-change-positions) contains it.

In your app, you could now show where to enter a train in order to have the best transfer path at the arrival station. [\`vbb-journey-ui\` a preliminary UI](https://github.com/derhuerst/vbb-journey-ui/issues/3#issuecomment-384976999) for this.

Check [the \`vbb-hafas\` docs with details about the markup](https://github.com/public-transport/vbb-hafas/blob/7c4d32b011d5c8cdf61ec33dc0bed56e96212af6/README.md#transfer-information-for-journeys).`
}, {
	id: '1',
	title: 'new Flixbus API',
	url: 'https://github.com/juliuste/meinfernbus-rest/blob/master/readme.md',
	date: '2018-03-25T22:00:00+0100',
	body: `\
[@juliuste](https://github.com/juliuste) has set up a new API: \`1.flixbus.transport.rest\` provides data for the European long-distance bus provider [Flixbus](https://www.flixbus.com).

The API should be compatible with \`1.db.transport.rest\` in many aspects. Check the docs at [juliuste/meinfernbus-rest](https://github.com/juliuste/meinfernbus-rest/blob/master/readme.md).`
}]
