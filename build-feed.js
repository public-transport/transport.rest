'use strict'

const MarkdownRender = require('markdown-it')
const RssFeed = require('rss')

const pkg = require('./package.json')
const feedItems = require('./feed')

const md = (md) => {
	const renderer = new MarkdownRender()
	return renderer.render(md)
}

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