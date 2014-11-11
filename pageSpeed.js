var psiResults = {
 "kind": "pagespeedonline#result",
 "id": "https://developers.google.com/speed/pagespeed/?csw=1",
 "responseCode": 200,
 "title": "Make the Web Faster — Google Developers",
 "score": 70,
 "pageStats": {
  "numberResources": 70,
  "numberHosts": 17,
  "totalRequestBytes": "10328",
  "numberStaticResources": 40,
  "htmlResponseBytes": "118670",
  "cssResponseBytes": "436345",
  "imageResponseBytes": "59905",
  "javascriptResponseBytes": "1620909",
  "otherResponseBytes": "374728",
  "numberJsResources": 24,
  "numberCssResources": 8
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
   "AvoidLandingPageRedirects": {
    "localizedRuleName": "Avoid landing page redirects",
    "ruleImpact": 10.0,
    "urlBlocks": [
     {
      "header": {
       "format": "Your page has $1 redirects. Redirects introduce additional delays before the page can be loaded.",
       "args": [
        {
         "type": "INT_LITERAL",
         "value": "3"
        }
       ]
      }
     },
     {
      "header": {
       "format": "Avoid landing page redirects for the following chain of redirected URLs.",
       "args": [
        {
         "type": "HYPERLINK",
         "value": "https://developers.google.com/speed/docs/insights/AvoidRedirects"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/speed/page-speed/"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://developers.google.com/speed/pagespeed?csw=1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/speed/pagespeed?csw=1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/speed/pagespeed/?csw=1"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "EnableGzipCompression": {
    "localizedRuleName": "Enable compression",
    "ruleImpact": 2.1554,
    "urlBlocks": [
     {
      "header": {
       "format": "Compressing resources with gzip or deflate can reduce the number of bytes sent over the network."
      }
     },
     {
      "header": {
       "format": "Enable compression for the following resources to reduce their transfer size by $2 ($3 reduction).",
       "args": [
        {
         "type": "HYPERLINK",
         "value": "https://developers.google.com/speed/docs/insights/EnableCompression"
        },
        {
         "type": "BYTES",
         "value": "21KiB"
        },
        {
         "type": "PERCENTAGE",
         "value": "62%"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "Compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "https://survey.g.doubleclick.net/async_survey?site=aclknqcuyds7o"
          },
          {
           "type": "BYTES",
           "value": "21KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "62%"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "LeverageBrowserCaching": {
    "localizedRuleName": "Leverage browser caching",
    "ruleImpact": 7.973462301587303,
    "urlBlocks": [
     {
      "header": {
       "format": "Setting an expiry date or a maximum age in the HTTP headers for static resources instructs the browser to load previously downloaded resources from local disk rather than over the network."
      }
     },
     {
      "header": {
       "format": "Leverage browser caching for the following cacheable resources:",
       "args": [
        {
         "type": "HYPERLINK",
         "value": "https://developers.google.com/speed/docs/insights/LeverageBrowserCaching"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/_static/images/breadcrumbs-right.png"
          },
          {
           "type": "DURATION",
           "value": "10 minutes"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/_static/images/v2/developers-logo.png"
          },
          {
           "type": "DURATION",
           "value": "10 minutes"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/_static/images/v2/search.png"
          },
          {
           "type": "DURATION",
           "value": "10 minutes"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/search/getsuggestions?hl=en&p=%2Fspeed&s=devsite&c=2"
          },
          {
           "type": "DURATION",
           "value": "10 minutes"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/search/getsuggestions?hl=en&p=%2Fspeed&s=devsite&c=3"
          },
          {
           "type": "DURATION",
           "value": "10 minutes"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/search/getsuggestions?hl=en&s=cloud&c=1"
          },
          {
           "type": "DURATION",
           "value": "10 minutes"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/search/getsuggestions?hl=en&s=devsite&c=1"
          },
          {
           "type": "DURATION",
           "value": "10 minutes"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "https://survey.g.doubleclick.net/async_survey?site=aclknqcuyds7o"
          },
          {
           "type": "DURATION",
           "value": "15 minutes"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "https://apis.google.com/js/api.js"
          },
          {
           "type": "DURATION",
           "value": "30 minutes"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "https://apis.google.com/js/platform.js"
          },
          {
           "type": "DURATION",
           "value": "30 minutes"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "https://apis.google.com/js/plusone.js?onload=devsite_plusoneLoaded"
          },
          {
           "type": "DURATION",
           "value": "30 minutes"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/speed/images/banner-carusel-pagespeed.png"
          },
          {
           "type": "DURATION",
           "value": "60 minutes"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/speed/images/features-48.png"
          },
          {
           "type": "DURATION",
           "value": "60 minutes"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/speed/styles/local.css"
          },
          {
           "type": "DURATION",
           "value": "60 minutes"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "https://oauth.googleusercontent.com/gadgets/js/core:rpc:shindig.random:shindig.sha1.js?c=2"
          },
          {
           "type": "DURATION",
           "value": "60 minutes"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "https://www.google-analytics.com/analytics.js"
          },
          {
           "type": "DURATION",
           "value": "2 hours"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "MainResourceServerResponseTime": {
    "localizedRuleName": "Reduce server response time",
    "ruleImpact": 4.109999999999999,
    "urlBlocks": [
     {
      "header": {
       "format": "In our test, your server responded in $1. There are many factors that can slow down your server response time. Please read our recommendations to learn how you can monitor and measure where your server is spending the most time.",
       "args": [
        {
         "type": "DURATION",
         "value": "0.27 seconds"
        },
        {
         "type": "HYPERLINK",
         "value": "https://developers.google.com/speed/docs/insights/Server"
        }
       ]
      }
     }
    ]
   },
   "MinifyCss": {
    "localizedRuleName": "Minify CSS",
    "ruleImpact": 0.0,
    "urlBlocks": [
     {
      "header": {
       "format": "Your CSS is minified. Learn more about minifying CSS.",
       "args": [
        {
         "type": "HYPERLINK",
         "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
        }
       ]
      }
     }
    ]
   },
   "MinifyHTML": {
    "localizedRuleName": "Minify HTML",
    "ruleImpact": 0.15100000000000002,
    "urlBlocks": [
     {
      "header": {
       "format": "Compacting HTML code, including any inline JavaScript and CSS contained in it, can save many bytes of data and speed up download and parse times."
      }
     },
     {
      "header": {
       "format": "Minify HTML for the following resources to reduce their size by $2 ($3 reduction).",
       "args": [
        {
         "type": "HYPERLINK",
         "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
        },
        {
         "type": "BYTES",
         "value": "965B"
        },
        {
         "type": "PERCENTAGE",
         "value": "9%"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3 reduction) after compression.",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/speed/pagespeed/?csw=1"
          },
          {
           "type": "BYTES",
           "value": "965B"
          },
          {
           "type": "PERCENTAGE",
           "value": "9%"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "MinifyJavaScript": {
    "localizedRuleName": "Minify JavaScript",
    "ruleImpact": 0.6142,
    "urlBlocks": [
     {
      "header": {
       "format": "Compacting JavaScript code can save many bytes of data and speed up downloading, parsing, and execution time."
      }
     },
     {
      "header": {
       "format": "Minify JavaScript for the following resources to reduce their size by $2 ($3 reduction).",
       "args": [
        {
         "type": "HYPERLINK",
         "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
        },
        {
         "type": "BYTES",
         "value": "3.2KiB"
        },
        {
         "type": "PERCENTAGE",
         "value": "2%"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3 reduction) after compression.",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/_static/1f7767d7f6/js/script_foot.js"
          },
          {
           "type": "BYTES",
           "value": "1.9KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "3%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3 reduction) after compression.",
         "args": [
          {
           "type": "URL",
           "value": "https://apis.google.com/_/scs/apps-static/_/js/k=oz.cpw.en.nNX5uGbER00.O/m=cpw,wf/am=wABZAQ/rt=j/d=1/t=zcms/rs=AGLTcCMx9QILteuXiBwOBwXkF_ud7HzWDQ"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "PERCENTAGE",
           "value": "1%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3 reduction) after compression.",
         "args": [
          {
           "type": "URL",
           "value": "https://oauth.googleusercontent.com/gadgets/js/core:rpc:shindig.random:shindig.sha1.js?c=2"
          },
          {
           "type": "BYTES",
           "value": "661B"
          },
          {
           "type": "PERCENTAGE",
           "value": "3%"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "MinimizeRenderBlockingResources": {
    "localizedRuleName": "Eliminate render-blocking JavaScript and CSS in above-the-fold content",
    "ruleImpact": 14.0,
    "urlBlocks": [
     {
      "header": {
       "format": "Your page has $1 blocking script resources and $2 blocking CSS resources. This causes a delay in rendering your page.",
       "args": [
        {
         "type": "INT_LITERAL",
         "value": "5"
        },
        {
         "type": "INT_LITERAL",
         "value": "9"
        }
       ]
      }
     },
     {
      "header": {
       "format": "None of the above-the-fold content on your page could be rendered without waiting for the following resources to load. Try to defer or asynchronously load blocking resources, or inline the critical portions of those resources directly in the HTML."
      }
     },
     {
      "header": {
       "format": "Remove render-blocking JavaScript:",
       "args": [
        {
         "type": "HYPERLINK",
         "value": "https://developers.google.com/speed/docs/insights/BlockingJS"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/_static2/1f7767d7f6/jsi18n/?hl=en"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/_static/1f7767d7f6/js/script_foot.js"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "https://www.googleadservices.com/pagead/conversion.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "Optimize CSS Delivery of the following:",
       "args": [
        {
         "type": "HYPERLINK",
         "value": "https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/_static/1f7767d7f6/css/screen-maia.css"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "https://fonts.googleapis.com/css?family=Roboto:400,400italic,700,700italic,500,500italic,300,300italic"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "https://fonts.googleapis.com/css?family=Roboto:400,400italic,700,700italic,500,500italic,300,300italic"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/_static/1f7767d7f6/css/screen-docs.css"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "https://fonts.googleapis.com/css?family=Roboto:400,400italic,700,700italic,500,500italic,300,300italic"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/speed/styles/local.css"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "https://fonts.googleapis.com/css?family=Open+Sans:400,600,700"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/_static/1f7767d7f6/css/screen-foot.css"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "OptimizeImages": {
    "localizedRuleName": "Optimize images",
    "ruleImpact": 0.9873000000000001,
    "urlBlocks": [
     {
      "header": {
       "format": "Properly formatting and compressing images can save many bytes of data."
      }
     },
     {
      "header": {
       "format": "Optimize the following images to reduce their size by $2 ($3 reduction).",
       "args": [
        {
         "type": "HYPERLINK",
         "value": "https://developers.google.com/speed/docs/insights/OptimizeImages"
        },
        {
         "type": "BYTES",
         "value": "9.6KiB"
        },
        {
         "type": "PERCENTAGE",
         "value": "48%"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/_static/1f7767d7f6/images/helpouts-banner.png"
          },
          {
           "type": "BYTES",
           "value": "4.6KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "44%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Compressing and resizing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/speed/images/features-48.png"
          },
          {
           "type": "BYTES",
           "value": "2.7KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "67%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Compressing and resizing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/_static/images/v2/search.png"
          },
          {
           "type": "BYTES",
           "value": "1.2KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "66%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "https://developers.google.com/_static/images/v2/developers-logo.png"
          },
          {
           "type": "BYTES",
           "value": "1.2KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "30%"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "PrioritizeVisibleContent": {
    "localizedRuleName": "Prioritize visible content",
    "ruleImpact": 2.0,
    "urlBlocks": [
     {
      "header": {
       "format": "Your page requires additional network round trips to render the above-the-fold content. For best performance, reduce the amount of HTML needed to render above-the-fold content."
      }
     },
     {
      "header": {
       "format": "The entire HTML response was not sufficient to render the above-the-fold content. This usually indicates that additional resources, loaded after HTML parsing, were required to render above-the-fold content. Prioritize visible content that is needed for rendering above-the-fold by including it directly in the HTML response.",
       "args": [
        {
         "type": "HYPERLINK",
         "value": "https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "Only about $1 of the final above-the-fold content could be rendered with the full HTML response $2.",
         "args": [
          {
           "type": "PERCENTAGE",
           "value": "49%"
          },
          {
           "type": "SNAPSHOT_RECT",
           "value": "snapshot:14"
          }
         ]
        }
       }
      ]
     }
    ]
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 15
 }
};

  var fields = [
  'totalRequestBytes',
  'javascriptResponseBytes',
  'imageResponseBytes',
  'cssResponseBytes',
  'htmlResponseBytes',
  'flashResponseBytes',
  'textResponseBytes',
  'otherResponseBytes'
  ];

  function totalBytes(results)  {
    var stats = results.pageStats;
    var totalByetsVal = 0;
    for(var i =0, len = fields.length; i < len ; ++i)  {
      var field = fields[i];
      if(field in stats)  {
        var val = Number(stats[field]);
        totalByetsVal += val;
      }
    }
    return totalByetsVal;
  };

  function ruleList(psiResults)  {
    var results = [];
    var ruleResults = psiResults.formattedResults.ruleResults;
    for(var i in ruleResults)  {
      var ruleResult = ruleResults[i];
      // console.log(ruleResult);
      results.push(ruleResult.localizedRuleName);
    }
    return results;
  }

function runPageSpeedQuiz()  {
  console.log(ruleList(psiResults));
  console.log(totalBytes(psiResults));
  // runPagespeed();
}

// Specify your actual API key here:
var API_KEY = 'AIzaSyBD2QmY3sHba-PIPJTOi51PVcVSlpCXNzU';

// Specify the URL you want PageSpeed results for here:
var URL_TO_GET_RESULTS_FOR = 'http://code.google.com/speed/page-speed/';

var API_URL = 'https://www.googleapis.com/pagespeedonline/v1/runPagespeed?';

var callbacks = {}

// Invokes the PageSpeed Insights API. The response will contain
// JavaScript that invokes our callback with the PageSpeed results.
function runPagespeed() {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  var query = [
    'url=' + URL_TO_GET_RESULTS_FOR,
    'callback=runPagespeedCallbacks',
    'key=' + API_KEY,
  ].join('&');
  s.src = API_URL + query;
  document.head.insertBefore(s, null);
}

// Our JSONP callback. Checks for errors, then invokes our callback handlers.
function runPagespeedCallbacks(result) {
  if (result.error) {
    var errors = result.error.errors;
    for (var i = 0, len = errors.length; i < len; ++i) {
      if (errors[i].reason == 'badRequest' && API_KEY == 'yourAPIKey') {
        alert('Please specify your Google API key in the API_KEY variable.');
      } else {
        // NOTE: your real production app should use a better
        // mechanism than alert() to communicate the error to the user.
        alert(errors[i].message);
      }
    }
    return;
  }

  // Dispatch to each function on the callbacks object.
  for (var fn in callbacks) {
    var f = callbacks[fn];
    if (typeof f == 'function') {
      callbacks[fn](result);
    }
  }
}

