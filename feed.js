'use strict'

module.exports = [{
	id: '4',
	title: '2.vbb.transport.rest unavailable for the time being, way forward',
	url: '#',
	date: '2018-08-01T20:20:00+0200',
	body: `\
As you might have noticed, [\`2.vbb.transport.rest\`](https://github.com/derhuerst/vbb-rest/blob/2/docs/index.md) has been down again for many days. This is because VBB has blocked the IP address of the API server, as well as those of [our load-balancing nodes we had set up in response](https://github.com/derhuerst/vbb-rest/issues/29#issuecomment-405111356). More background info can be found at [\`derhuerst/vbb-rest#29\`](https://github.com/derhuerst/vbb-rest/issues/29).

**I won't run the \`2.vbb.transport.rest\` endpoint for the time being. If you want to use consume VBB data using JavaScript, use [\`vbb-hafas\`](https://github.com/derhuerst/vbb-hafas) (the lib behind the API) directly, otherwise host your own \`vbb-rest\` instance for now.**

@juliuste and I have met recently with VBB. We were able to communicate:

- our desire to keep this API running,
- that the \`2.vbb.transport.rest\` is *no* responsible for the amount of traffic they've received with a \`hafas-client\` \`User-Agent\`,
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
	url: 'https://github.com/derhuerst/vbb-hafas/blob/7c4d32b011d5c8cdf61ec33dc0bed56e96212af6/README.md#transfer-information-for-journeys',
	date: '2018-04-27T16:30:00+0200',
	body: `\
The [\`2.vbb.transport.rest\` API](https://github.com/derhuerst/vbb-rest/blob/2/docs/index.md) will now expose transfer information for each leg of a journey, whenever the underlying [crowd-sourced database of transfer positions](https://github.com/juliuste/vbb-change-positions) contains it.

In your app, you could now show where to enter a train in order to have the best transfer path at the arrival station. [\`vbb-journey-ui\` a preliminary UI](https://github.com/derhuerst/vbb-journey-ui/issues/3#issuecomment-384976999) for this.

Check [the \`vbb-hafas\` docs with details about the markup](https://github.com/derhuerst/vbb-hafas/blob/7c4d32b011d5c8cdf61ec33dc0bed56e96212af6/README.md#transfer-information-for-journeys).`
}, {
	id: '1',
	title: 'new Flixbus API',
	url: 'https://github.com/juliuste/meinfernbus-rest/blob/master/readme.md',
	date: '2018-03-25T22:00:00+0100',
	body: `\
[@juliuste](https://github.com/juliuste) has set up a new API: \`1.flixbus.transport.rest\` provides data for the European long-distance bus provider [Flixbus](https://www.flixbus.com).

The API should be compatible with \`1.db.transport.rest\` in many aspects. Check the docs at [juliuste/meinfernbus-rest](https://github.com/juliuste/meinfernbus-rest/blob/master/readme.md).`
}]