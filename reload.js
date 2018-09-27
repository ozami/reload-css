Array.from(document.querySelectorAll("link[rel=stylesheet][href]")).forEach(function(link) {
  const href = new URL(link.href)
  href.searchParams.set("force_reload", Date.now())
  link.href = href
})
