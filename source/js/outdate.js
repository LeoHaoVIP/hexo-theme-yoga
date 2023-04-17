(function () {
    //不同的日期显示不同的样式，200 天为黄色提示，400天为红色提示，可以自己定义。
    let warningDay = 200;
    let errorDay = 400;
    // 确保能够获取到文章时间以及在文章详情页
    let times = document.getElementsByTagName('time');
    if (times.length === 0) {
        return;
    }
    let posts = document.getElementsByClassName('article-entry');
    if (posts.length === 0) {
        return;
    }

    // 获取系统当前的时间
    let pubTime = new Date(times[0].dateTime);
    let now = Date.now()  /* 当前时间戳 */
    let interval = parseInt(now - pubTime)
    let days = parseInt(interval / 86400000)
    /* 发布时间超过指定时间（毫秒） */
    if (interval > warningDay * 3600 * 24 * 1000 && interval < errorDay * 3600 * 24 * 1000) {
        posts[0].innerHTML = '<blockquote>' +
            '<p style="color: orange;font-size: medium;line-height: 40px">友情提醒：这是一篇发布于 ' + days + ' 天前的文章，部分信息可能已不再适用，请注意甄别。</p>' +
            '</blockquote>' + posts[0].innerHTML;
    } else if (interval >= errorDay * 3600 * 24 * 1000) {
        posts[0].innerHTML = '<blockquote>' +
            '<p style="color: red;font-size: medium;line-height: 40px">友情提醒：这是一篇发布于 ' + days + ' 天前的文章，部分信息可能已不再适用，请注意甄别。</p>' +
            '</blockquote>' + posts[0].innerHTML;
    }
})();

