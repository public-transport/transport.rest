'use strict'

const RssFeed = require('rss')
const md = require('marky-markdown')

const pkg = require('./package.json')
const feedItems = require('./feed')

const feed = new RssFeed({
	title: pkg.name + ' news',
	description: pkg.description,
	feed_url: pkg.homepage + 'news.xml',
	site_url: pkg.homepage,
	ttl: 60
})

for (let item of feedItems) {
	feed.item({
		title: item.title,
		description: md(item.body, {enableHeadingLinkIcons: false}),
		url: item.url,
		guid: item.id,
		date: item.date
	})
}

process.stdout.write(feed.xml())