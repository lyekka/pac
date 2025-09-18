/*
 * Proxy Auto-Configuration file made by pac-maker v3.2.0
 * https://github.com/Kaciras/pac-maker
 *
 * Generated at: 2024-07-13T10:46:11.002Z
 *
 * Learn more about PAC file:
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
 */

globalThis.fallback = "DIRECT";

globalThis.proxies = [
	"SOCKS5 localhost:1080",
];

globalThis.rules = {
	"rutracker.org": 0,
	"rutracker.cc": 0,
	"nnmclub.to": 0,
	"kinozal.tv": 0,
	"pornolab.net": 0,
	"use.selezen.club": 0,
	"tr.anidub.com": 0,
	"anidub.com": 0,
	"kino.pub": 0,
	"themoviedb.org": 0,
	"pixiv.net": 0,
	"kali.org": 0,
	"oracle.com": 0,
	"openstreetmap.org": 0,
	"gamerant.com": 0,
	"streamable.com": 0,
	"grok.com": 0, 
	"accounts.x.ai": 0,
	"x.ai": 0,
	"console.x.ai": 0,
	"massgrave.dev": 0,
	"databricks.com": 0,
	"itstillworks.com": 0,
	"ders.by": 0,

	"youtube.com": 0,
	"googlevideo.com": 0,
	"youtu.be": 0,
	"yt.be": 0,
	"ytimg.com": 0,
	"ggpht.com": 0,
	"gvt1.com": 0,
	"youtube-nocookie.com": 0,
	"youtube-ui.l.google.com": 0,
	"youtubeembeddedplayer.googleapis.com": 0,
	"youtube.googleapis.com": 0,
	"youtubei.googleapis.com": 0,
	"yt-video-upload.l.google.com": 0,
	"wide-youtube.l.google.com": 0,

	"instagram.com": 0,
	"graph.instagram.com": 0,
	"i.instagram.com": 0,
	"static.cdninstagram.com": 0,
	"scontent.cdninstagram.com": 0,
	"scontent-arn2-1.cdninstagram.com": 0,

	"x.com": 0,
	"abs.twimg.com": 0,
	"pbs.twimg.com": 0,
	"video.twimg.com": 0,
	"twimg.com": 0,
	"twitter.com": 0,
	"api.x.com": 0,
	"abs-0.twimg.com": 0
};

function FindProxyForURL(url, host) {
	let level = 0;
	let pos = 0;

	while (pos >= 0) {
		const i = rules[host];
		if (i !== undefined) {
			return proxies[i];
		}
		if (pos > 0 && level === 1) {
			const i = rules["*." + host];
			if (i !== undefined) {
				return proxies[i];
			}
		}
		pos = host.indexOf(".");
		level += 1;
		host = host.slice(pos + 1);
	}

	return globalThis.fallback;
}
