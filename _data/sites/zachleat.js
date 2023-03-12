module.exports = {
	name: "helalk.com", // optional, falls back to object key
	description: "Dilu's personal web Project",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://www.helalk.com/",
		"https://dilu.helalk.com/",
		"https://www.helalk.com/about/",
		"https://www.helalk.com/experience/",
		"https://www.helalk.com/projects/",
		"https://www.helalk.com/timeline/",
		"https://www.helalk.com/blog/",
		// Popular Posts
		"https://www.helalk.com/top-6-things-to-do-after-installing-kali-linux-in-2021-lkbyte/",
		"https://www.helalk.com/mobitel-ussd-code-for-prepaid-sim/",
		"https://www.helalk.com/torrent-download-with-offcloud/",
		"https://www.helalk.com/reset-parrot-os-or-kali-linux-forgot-password/",
	]
};