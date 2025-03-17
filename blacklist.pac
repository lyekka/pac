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
	"SOCKS5 localhost:1080",
];

globalThis.rules = {
	"rutracker.org": 1,
	"rutracker.cc": 1,
	"nnmclub.to": 1,
	"kinozal.tv": 1,
	"pornolab.net": 1,
	"x.com": 1,
	"abs.twimg.com": 1,
	"use.selezen.club": 1,
	"tr.anidub.com": 1,
	"anidub.com": 1,
	"kino.pub": 1,

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
	"themoviedb.org": 0,

	"instagramm.com": 0,
	"graph.instagram.com": 0,
	"i.instagram.com": 0,
	"static.cdninstagram.com": 0,
	"scontent.cdninstagram.com": 0,
	"scontent-arn2-1.cdninstagram.com": 0
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
