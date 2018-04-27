'use strict'

module.exports = [{
	id: '2',
	title: 'VBB API now exposes transfer positions',
	url: 'https://github.com/derhuerst/vbb-hafas/blob/7c4d32b011d5c8cdf61ec33dc0bed56e96212af6/README.md#transfer-information-for-journeys',
	date: '2018-06-27T16:30:00+0200',
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