
  app.directive('renderList', function() {
            return {
                resctrict: 'E',
                scope: {
                    list: '='
                },
                replace: true,
                link: function(scope, element, attrs) {
                    var list, idx, html;
                    if (attrs.list) {
                        list = scope.$parent.$eval(attrs.list).slice(0);
                        if (list && list.length) {
                            html = '<div>';
                            for (idx = 0; idx < list.length; idx++) {
                                html += ('<span>' + list[idx].toString() + '</span>');
                            }
                            html += '</div>';
                        } else {
                            html = '<div/>';
                        }
                        element.html(html);
                        scope.$destroy();
                    }
                }
            };
        });