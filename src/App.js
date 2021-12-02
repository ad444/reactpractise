import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import RSSState from './rssContext/RSSState';
import Index from './Components/Index';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Homedashboard from './Components/Homedashboard';
import newsCards from './json/newsSectionContainer';
import I from './Components/I';
import newsChannelsContent from './json/newsChannelsContent';
import NewsChannelsContent from './Components/NewsChannelsContents';
import RSSDetails from './Components/RSSDetails';
import UserFeeds from './Components/UserFeeds';
import UserFeedDisplay from './Components/UserFeedDisplay';
import Contact from './Components/Contact';
import './CSS/userdashboard.css';
const App = () => {
    return (
        <>
        <RSSState>
          <Router>
              <Switch>
                  <Route exact path='/'>
                    <Index />
                  </Route>
                  <Route exact path='/login'>
                      <LogIn />
                  </Route>
                  <Route exact path='/signup'>
                      <SignUp />
                  </Route>
                  {
                    localStorage.getItem('token')!== null&&
                    <Route exact path='/dashboard'>
                        <Homedashboard />
                    </Route>
                  }
                  {
                      localStorage.getItem('token')!== ''&&
                      newsCards.map((elem, index)=>{
                           return <Route exact path={elem.url}>
                               <I key={index} header={elem.header} url={elem.url}/>
                           </Route>
                      })
                  }
                  {
                      localStorage.getItem('token')!== ''&&
                      newsChannelsContent.map((elem, index)=>{
                         return <Route exact path={`/dashboard/${elem.channelURL}/${elem.channelTopStories}`}>
                               <NewsChannelsContent key={index} channelName={elem.channelName} pageHeader={elem.pageHeaderTopStories}/>
                         </Route>
                      })
                  }
                  {
                      localStorage.getItem('token')!== ''&&
                      newsChannelsContent.map((elem, index)=>{
                         return <Route exact path={`/dashboard/${elem.channelURL}/${elem.channelBusiness}`}>
                               <NewsChannelsContent key={index} channelName={elem.channelName} pageHeader={elem.pageHeaderBusiness}/>
                         </Route>
                      })
                  }
                  {
                      localStorage.getItem('token')!== ''&&
                      newsChannelsContent.map((elem, index)=>{
                         return <Route exact path={`/dashboard/${elem.channelURL}/${elem.channelHealth}`}>
                               <NewsChannelsContent key={index} channelName={elem.channelName} pageHeader={elem.pageHeaderHealth}/>
                         </Route>
                      })
                  }
                  {
                      localStorage.getItem('token')!== ''&&
                      newsChannelsContent.map((elem, index)=>{
                         return <Route exact path={`/dashboard/${elem.channelURL}/${elem.channelWorld}`}>
                               <NewsChannelsContent key={index} channelName={elem.channelName} pageHeader={elem.pageHeaderWorld}/>
                         </Route>
                      })
                  }
                  {
                      localStorage.getItem('token')!== ''&&
                      newsChannelsContent.map((elem, index)=>{
                         return <Route exact path={`/dashboard/${elem.channelURL}/${elem.channelTechnology}`}>
                               <NewsChannelsContent key={index} channelName={elem.channelName} pageHeader={elem.pageHeaderTechnology}/>
                         </Route>
                      })
                  }
                  {
                      localStorage.getItem('token')!== ''&&
                      newsChannelsContent.map((elem, index)=>{
                         return <Route exact path={`/dashboard/${elem.channelURL}/${elem.channelSports}`}>
                               <NewsChannelsContent key={index} channelName={elem.channelName} pageHeader={elem.pageHeaderSports}/>
                         </Route>
                      })
                  }
                  {
                    localStorage.getItem('token')!== ''&&
                    <Route exact path='/dashboard/rssdetails'>
                        <RSSDetails />
                    </Route>
                  }
                  {
                    localStorage.getItem('token')!== ''&&
                    <Route exact path='/dashboard/yourfeeds'>
                            <UserFeeds />
                    </Route>
                  }
                  {
                    localStorage.getItem('token')!== ''&&
                    <Route exact path='/dashboard/yourfeeds/rss'>
                        <UserFeedDisplay />
                    </Route>
                  } 
                    <Route exact path='/contact'>
                        <Contact />
                    </Route>
            </Switch>
          </Router>
          </RSSState>
        </>
    )
}

export default App
