export function todayInIndia(now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(now);
}

export function isPublished(data, now = new Date()) {
  return data.draft === false && data.publishedAt <= todayInIndia(now);
}

export function articlePath(id) {
  if (!/^(it|non-it)\/[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) {
    throw new Error(`Invalid article route: ${id}`);
  }
  return `/${id}/`;
}
