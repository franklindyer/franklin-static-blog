% setdefault('title', False)
<html dir="{{ local["dir"] }}" lang="{{ local["locale"] }}">
    <head>
        <title>{{ local["title"] or 'Franklin Pezzuti Dyer' }}</title>
        <script type="text/x-mathjax-config">
        MathJax.Hub.Config({
          tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]},
          processEscapes: true,
          menuSettings: { inTabOrder: false },
          "AssistiveMML": {
             disabled: false,
             styles: {
                ".MJX_Assistive_MathML": {
                    position:"absolute!important",
                    clip: (MathJax.Hub.Browser.isMSIE && (document.documentMode||0) < 8 ?
                        "rect(1px 1px 1px 1px)" : "rect(1px, 1px, 1px, 1px)"),
                    padding: "1px 0 0 0!important",
                    border: "0!important",
                    height: "1px!important",
                    width: "1px!important",
                    overflow: "hidden!important",
                    display:"block!important"
                }
            }
          }
        });
        </script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, type=text/html" charset="UTF-8">
        <link rel="stylesheet" href="/css/style.css">
        <link rel="stylesheet" href="/css/style-local-{{ local["style"] }}.css">
        <script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML' async></script>
    </head>
    <body>
        % include('/data/app/web/tpl/header.tpl')
        <span class="hidden">
            <a href="#pagenav">Skip to navigation</a>
        </span>
        <a id="begin-content"></a>
        {{!base}}
        <script src="/js/post_proc.js"></script>
    </body>
</html>
