const Call = function (feed) {
    if (feed.includes('zeenews')) {
        if (feed.includes('topstories')) {
            return 'https://zeenews.india.com/rss/india-national-news.xml';
        }
        else if (feed.includes('business')) {
            return 'https://zeenews.india.com/rss/business.xml';
        }
        else if (feed.includes('sports')) {
            return 'https://zeenews.india.com/rss/sports-news.xml';
        }
        else if (feed.includes('world')) {
            return 'https://zeenews.india.com/rss/world-news.xml';
        }
        else if (feed.includes('health')) {
            return 'https://zeenews.india.com/rss/health-news.xml';
        }
        else if (feed.includes('technology')) {
            return 'https://zeenews.india.com/rss/technology-news.xml';
        }
    }
    if (feed.includes('ndtv')) {
        if (feed.includes('topstories')) {
            return 'https://feeds.feedburner.com/ndtvnews-top-stories';
        }
        else if (feed.includes('business')) {
            return 'https://feeds.feedburner.com/ndtvprofit-latest';
        }
        else if (feed.includes('sports')) {
            return 'https://feeds.feedburner.com/ndtvsports-latest';
        }
        else if (feed.includes('world')) {
            return 'https://feeds.feedburner.com/ndtvnews-world-news';
        }
        else if (feed.includes('health')) {
            return 'https://feeds.feedburner.com/ndtvcooks-latest';
        }
        else if (feed.includes('technology')) {
            return 'https://feeds.feedburner.com/gadgets360-latest';
        }
    }
    if (feed.includes('timesofindia')) {
        if (feed.includes('topstories')) {
            return 'https://timesofindia.indiatimes.com/rssfeedstopstories.cms';
        }
        else if (feed.includes('business')) {
            return 'https://timesofindia.indiatimes.com/rssfeeds/1898055.cms';
        }
        else if (feed.includes('sports')) {
            return 'https://timesofindia.indiatimes.com/rssfeeds/4719148.cms';
        }
        else if (feed.includes('world')) {
            return 'https://timesofindia.indiatimes.com/rssfeeds/296589292.cms';
        }
        else if (feed.includes('health')) {
            return 'https://timesofindia.indiatimes.com/rssfeeds/3908999.cms';
        }
        else if (feed.includes('technology')) {
            return 'https://timesofindia.indiatimes.com/rssfeeds/66949542.cms';
        }
    }
    if (feed.includes('financialexpress')) {
        if (feed.includes('topstories')) {
            return 'https://www.financialexpress.com/feed/';
        }
        else if (feed.includes('business')) {
            return 'https://www.financialexpress.com/picture-gallery-section/business-gallery/feed/';
        }
        else if (feed.includes('sports')) {
            return 'https://www.financialexpress.com/sports/feed/';
        }
        else if (feed.includes('world')) {
            return 'https://www.financialexpress.com/print/international/feed/';
        }
        else if (feed.includes('health')) {
            return 'https://www.financialexpress.com/lifestyle/health/feed/';
        }
        else if (feed.includes('technology')) {
            return 'https://www.financialexpress.com/industry/tech/feed/';
        }
    }
    if (feed.includes('economictimes')) {
        if (feed.includes('topstories')) {
            return 'https://economictimes.indiatimes.com/rssfeedstopstories.cms';
        }
        else if (feed.includes('business')) {
            return 'https://economictimes.indiatimes.com/industry/rssfeeds/13352306.cms';
        }
        else if (feed.includes('sports')) {
            return 'https://economictimes.indiatimes.com/news/sports/rssfeeds/26407562.cms';
        }
        else if (feed.includes('world')) {
            return 'https://economictimes.indiatimes.com/news/international/rssfeeds/858478126.cms';
        }
        else if (feed.includes('health')) {
            return 'https://economictimes.indiatimes.com/prime/pharma-and-healthcare/rssfeeds/60187434.cms';
        }
        else if (feed.includes('technology')) {
            return 'https://economictimes.indiatimes.com/tech/rssfeeds/13357270.cms';
        }
    }
    if (feed.includes('indiatoday')) {
        if (feed.includes('topstories')) {
            return 'https://www.indiatoday.in/rss/1206584';
        }
        else if (feed.includes('business')) {
            return 'https://www.indiatoday.in/rss/home';
        }
        else if (feed.includes('sports')) {
            return 'https://www.indiatoday.in/rss/1206550';
        }
        else if (feed.includes('world')) {
            return 'https://www.indiatoday.in/rss/1206577';
        }
        else if (feed.includes('health')) {
            return 'https://www.indiatoday.in/rss/home';
        }
        else if (feed.includes('technology')) {
            return 'https://www.indiatoday.in/rss/home';
        }
    }
    if (feed.includes('businessstandard')) {
        if (feed.includes('topstories')) {
            return 'https://www.business-standard.com/rss/home_page_top_stories.rss';
        }
        else if (feed.includes('business')) {
            return 'https://www.business-standard.com/rss/beyond-business-104.rss';
        }
        else if (feed.includes('sports')) {
            return 'https://www.business-standard.com/rss/sports-192.rss';
        }
        else if (feed.includes('world')) {
            return 'https://www.business-standard.com/rss/international-116.rss';
        }
        else if (feed.includes('health')) {
            return 'business-standard.com/rss/health-185.rss';
        }
        else if (feed.includes('technology')) {
            return 'https://www.business-standard.com/rss/technology-108.rss';
        }
    }
    if (feed.includes('news18')) {
        if (feed.includes('topstories')) {
            return 'https://www.news18.com/rss/buzz.xml';
        }
        else if (feed.includes('business')) {
            return 'https://www.news18.com/rss/business.xml';
        }
        else if (feed.includes('sports')) {
            return 'https://www.news18.com/rss/sports.xml';
        }
        else if (feed.includes('world')) {
            return 'https://www.news18.com/rss/world.xml';
        }
        else if (feed.includes('health')) {
            return 'https://www.news18.com/rss/lifestyle.xml';
        }
        else if (feed.includes('technology')) {
            return 'https://www.news18.com/rss/tech.xml';
        }
    }
    if (feed.includes('hindustantimes')) {
        if (feed.includes('topstories')) {
            return 'https://www.hindustantimes.com/feeds/rss/latest-news/rssfeed.xml';
        }
        else if (feed.includes('business')) {
            return 'https://www.hindustantimes.com/feeds/rss/business/rssfeed.xml';
        }
        else if (feed.includes('sports')) {
            return 'https://www.hindustantimes.com/feeds/rss/sports/rssfeed.xml';
        }
        else if (feed.includes('world')) {
            return 'https://www.hindustantimes.com/feeds/rss/ht-insight/international-affairs/rssfeed.xml';
        }
        else if (feed.includes('health')) {
            return 'https://www.hindustantimes.com/feeds/rss/health/rssfeed.xml';
        }
        else if (feed.includes('technology')) {
            return 'https://www.hindustantimes.com/';
        }
    }
}

export default Call;