document.addEventListener("DOMContentLoaded", function() {
    const feed = new Instafeed({
      accessToken: 'SEU_ACCESS_TOKEN',
      target: 'instafeed',
      get: 'user',
      userId: 'SEU_USER_ID',
      limit: 12,
      resolution: 'standard_resolution',
      template: '<a href="{{link}}"><img src="{{image}}" /></a>'
    });
    feed.run();
  });