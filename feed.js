'use strict'

module.exports = [{
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