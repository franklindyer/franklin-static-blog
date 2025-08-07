<head>
    <title>{{ title or 'Franklin Pezzuti Dyer' }}</title>
    <link rel="stylesheet" type="text/css" href="/css/style.css" />
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
    <script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML' async></script>
    <!-- Cloudflare Web Analytics -->
    <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "{{ env['CLOUDFLARE_TOKEN'] }}"}'></script><!-- End Cloudflare Web Analytics -->
</head>
