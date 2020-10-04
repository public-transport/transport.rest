'use strict'

const unified = require('unified')
const markdown = require('remark-parse')
const remark2rehype = require('remark-rehype')
const html = require('rehype-stringify')
const RssFeed = require('rss')

const pkg = require('./package.json')
const feedItems = require('./feed')

const pipeline = unified()
.use(markdown)
.use(remark2rehype)
.use(html)
const md = (md) => {
	return new Promise((resolve, reject) => {
		pipeline.process(md, (err, file) => {
			if (err) reject(err)
			else resolve(file.contents)
		})
	})
}

;(async () => {
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
			description: await md(item.body, {enableHeadingLinkIcons: false}),
			url: item.url,
			guid: item.id,
			date: item.date
		})
	}

	process.stdout.write(feed.xml())
})()
.catch((err) => {
	console.error(err)
	process.exit(1)
})