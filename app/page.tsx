import { Partners } from "@/components/Partners";
import { Card } from "@/components/ui/card";
import { Hero } from "@/components/Hero"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const colors = [
  { name: '--border', value: 'hsl(var(--border))' },
  { name: '--input', value: 'hsl(var(--input))' },
  { name: '--ring', value: 'hsl(var(--ring))' },
  { name: '--background', value: 'hsl(var(--background))' },
  { name: '--foreground', value: 'hsl(var(--foreground))' },
  { name: '--primary', value: 'hsl(var(--primary))' },
  { name: '--primary-foreground', value: 'hsl(var(--primary-foreground))' },
  { name: '--secondary', value: 'hsl(var(--secondary))' },
  { name: '--secondary-foreground', value: 'hsl(var(--secondary-foreground))' },
  { name: '--destructive', value: 'hsl(var(--destructive))' },
  { name: '--destructive-foreground', value: 'hsl(var(--destructive-foreground))' },
  { name: '--muted', value: 'hsl(var(--muted))' },
  { name: '--muted-foreground', value: 'hsl(var(--muted-foreground))' },
  { name: '--accent', value: 'hsl(var(--accent))' },
  { name: '--accent-foreground', value: 'hsl(var(--accent-foreground))' },
  { name: '--popover', value: 'hsl(var(--popover))' },
  { name: '--popover-foreground', value: 'hsl(var(--popover-foreground))' },
  { name: '--card', value: 'hsl(var(--card))' },
  { name: '--card-foreground', value: 'hsl(var(--card-foreground))' },
];


function SZ() {
  return (
    <div className="entry-content">
      <h1 className="text-center">
        <strong>
          <u>SCHOOLS &apos; EDUCATION</u>
        </strong>
      </h1>
      <p>Sacramento County History Day&nbsp; &apos;&nbsp; <a href="http://www.cityofsacramento.org/ccl/history/exhibits/HistoryDay/">http://www.cityofsacramento.org/ccl/history/exhibits/HistoryDay/</a>
      </p>
      <p className="text-center">******************************</p>
      <h1 className="text-center">
        <strong>
          <u>SCIENCE</u>
        </strong>
      </h1>
      <p className="text-center">******************************</p>
      <h1 className="text-center">
        <strong>
          <u>SPEAKERS</u>
        </strong>
      </h1>
      <p className="text-center">******************************</p>
      <h1 className="text-center">
        <strong>
          <u>SPORTS</u>
        </strong>
      </h1>
      <p className="text-center">******************************</p>
      <h1 className="text-center">
        <strong>
          <u>STATEWIDE</u>
        </strong>
      </h1>
      <p className="text-center">******************************</p>
      <h1 className="text-center">
        <strong>
          <u>TOURS</u>
        </strong>
      </h1>
      <h3 className="text-center">ARCHITECTURAL</h3>
      <p>&nbsp;</p>
      <h3 className="text-center">WALKING</h3>
      <h3>Sacramento Heritage</h3>
      <h3>&nbsp;<a href="http://www.sacramentoheritage.org/walking.html">http://www.sacramentoheritage.org/walking.html</a>
      </h3>
      <h3 className="text-center">DRIVING</h3>
      <p>&nbsp;</p>
      <h3 className="text-center">“COMMERCIAL”</h3>
      <p>&nbsp;</p>
      <h3 className="text-center">UNUSUAL</h3>
      <p>Sacramento Underground Tour &apos;<a href="http://sachistorymuseum.org/tours/underground-tours/">http://sachistorymuseum.org/tours/underground-tours/</a>
      </p>
      <p>Sacramento Historic City Cemetery &apos; <a href="http://www.oldcitycemetery.com/">www.oldcitycemetery.com</a>
      </p>
      <p className="text-center">******************************</p>
      <h1 className="text-center">
        <strong>
          <u>TRANSPORTATION</u>
        </strong>
      </h1>
      <p>&nbsp;</p>
      <h3 className="text-center">HORSE</h3>
      <h3 className="text-center">
      </h3>
      <h3 className="text-center">TRAIN</h3>
      <h3 className="text-center">
      </h3>
      <h3 className="text-center">AUTOMOBILE</h3>
      <h3 className="text-center">
      </h3>
      <h3 className="text-center">SHIPS/BOATS</h3>
      <p>Shipwrecks</p>
      <p>
        <a href="http://www.snugharbor.net/steamboat_slough_shipwrecks.htm">http://www.snugharbor.net/steamboat_slough_shipwrecks.htm</a>
      </p>
      <p className="text-center">******************************</p>
      <h1 className="text-center">VIDEOS</h1>
      <p>
        <a href="http://www.youtube.com/user/SacramentoHistory">Sacramento History on YouTube</a>
      </p>
      <p>
        <a href="http://www.youtube.com/user/SacramentoHistory#p/u">Jim Henley&apos;s :YouTube&nbsp;bits of Sacramento History</a>
      </p>
      <p className="text-center">******************************</p>
      <h1 className="text-center">
        <strong>WATER</strong>
      </h1>
      <p className="text-center">RIVERS</p>
      <p className="text-center">WATER USE</p>
      <p className="text-center">RECLAMATION</p>
      <p className="text-center">RESERVOIRS</p>
      <p>
        <strong>&nbsp;</strong>
      </p>
      <p className="text-center">
        <strong>******************************&nbsp;</strong>
      </p>
      <h1 className="text-center">
        <strong>WEATHER (HISTORY)</strong>
      </h1>
      <p>
        <strong>&nbsp;</strong>
      </p>
      {/* <div id="jp-post-flair" className="sharedaddy sd-like-enabled sd-sharing-enabled">
        <div className="sharedaddy sd-sharing-enabled">
          <div className="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing">
            <h3 className="sd-title">Share this:</h3>
            <div className="sd-content">
              <ul data-sharing-events-added="true">
                <li className="share-twitter">
                  <a rel="nofollow noopener noreferrer" data-shared="sharing-twitter-21" className="share-twitter sd-button share-icon" href="https://sacramentohistory.info/2016/03/04/s-z/?share=twitter&amp;nb=1" target="_blank" title="Click to share on Twitter">
                    <span>Twitter</span>
                  </a>
                </li>
                <li className="share-facebook">
                  <a rel="nofollow noopener noreferrer" data-shared="sharing-facebook-21" className="share-facebook sd-button share-icon" href="https://sacramentohistory.info/2016/03/04/s-z/?share=facebook&amp;nb=1" target="_blank" title="Click to share on Facebook">
                    <span>Facebook</span>
                  </a>
                </li>
                <li className="share-end">
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-loaded" id="like-post-wrapper-107895353-21-66d4a5faec319" data-src="//widgets.wp.com/likes/index.html?ver=20240901#blog_id=107895353&amp;post_id=21&amp;origin=sacramentohistorydotinfo.wordpress.com&amp;obj_id=107895353-21-66d4a5faec319&amp;domain=sacramentohistory.info" data-name="like-post-frame-107895353-21-66d4a5faec319" data-title="Like or Reblog">
          <div className="likes-widget-placeholder post-likes-widget-placeholder h-14 display: none;">
            <span className="button">
              <span>Like</span>
            </span> <span className="loading">Loading...</span>
          </div>
          <iframe className="post-likes-widget jetpack-likes-widget" name="like-post-frame-107895353-21-66d4a5faec319" src="//widgets.wp.com/likes/index.html?ver=20240901#blog_id=107895353&amp;post_id=21&amp;origin=sacramentohistorydotinfo.wordpress.com&amp;obj_id=107895353-21-66d4a5faec319&amp;domain=sacramentohistory.info" height="55px" width="100%" frameborder="0" scrolling="no" title="Like or Reblog">
          </iframe>
          <span className="sd-text-color">
          </span>
          <a className="sd-link-color">
          </a>
        </div>
        <div id="jp-relatedposts" className="jp-relatedposts block;">
          <h3 className="jp-relatedposts-headline">
            <em>Related</em>
          </h3>
          <div className="jp-relatedposts-items jp-relatedposts-items-minimal jp-relatedposts-grid ">
            <p className="jp-relatedposts-post jp-relatedposts-post0" data-post-id="18" data-post-format="false">
              <span className="jp-relatedposts-post-title">
                <a className="jp-relatedposts-post-a" href="/2016/03/04/n-r/?relatedposts_hit=1&amp;relatedposts_origin=21&amp;relatedposts_position=0&amp;relatedposts_hit=1&amp;relatedposts_origin=21&amp;relatedposts_position=0&amp;relatedposts_hit=1&amp;relatedposts_origin=21&amp;relatedposts_position=0&amp;relatedposts_hit=1&amp;relatedposts_origin=21&amp;relatedposts_position=0&amp;relatedposts_hit=1&amp;relatedposts_origin=21&amp;relatedposts_position=0&amp;relatedposts_hit=1&amp;relatedposts_origin=21&amp;relatedposts_position=0" title="N-R" data-origin="21" data-position="0">N-R</a>
              </span>
              <div className="jp-relatedposts-post-date block">March 4, 2016</div>
              <span className="jp-relatedposts-post-context">
              </span>
            </p>
            <p className="jp-relatedposts-post jp-relatedposts-post1" data-post-id="10" data-post-format="false">
              <span className="jp-relatedposts-post-title">
                <a className="jp-relatedposts-post-a" href="/2016/03/04/a-d/?relatedposts_hit=1&amp;relatedposts_origin=21&amp;relatedposts_position=1&amp;relatedposts_hit=1&amp;relatedposts_origin=21&amp;relatedposts_position=1&amp;relatedposts_hit=1&amp;relatedposts_origin=21&amp;relatedposts_position=1&amp;relatedposts_hit=1&amp;relatedposts_origin=21&amp;relatedposts_position=1&amp;relatedposts_hit=1&amp;relatedposts_origin=21&amp;relatedposts_position=1&amp;relatedposts_hit=1&amp;relatedposts_origin=21&amp;relatedposts_position=1" title="A-D" data-origin="21" data-position="1">A-D</a>
              </span>
              <div className="jp-relatedposts-post-date block">March 4, 2016</div>
              <span className="jp-relatedposts-post-context">
              </span>
            </p>
            <p className="jp-relatedposts-post jp-relatedposts-post2" data-post-id="15" data-post-format="false">
              <span className="jp-relatedposts-post-title">
                <a className="jp-relatedposts-post-a" href="/2016/03/04/i-m/?relatedposts_hit=1&amp;relatedposts_origin=21&amp;relatedposts_position=2&amp;relatedposts_hit=1&amp;relatedposts_origin=21&amp;relatedposts_position=2&amp;relatedposts_hit=1&amp;relatedposts_origin=21&amp;relatedposts_position=2&amp;relatedposts_hit=1&amp;relatedposts_origin=21&amp;relatedposts_position=2&amp;relatedposts_hit=1&amp;relatedposts_origin=21&amp;relatedposts_position=2&amp;relatedposts_hit=1&amp;relatedposts_origin=21&amp;relatedposts_position=2" title="I-M" data-origin="21" data-position="2">I-M</a>
              </span>
              <div className="jp-relatedposts-post-date block">March 4, 2016</div>
              <span className="jp-relatedposts-post-context">
              </span>
            </p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* <Card className='p-5'>
        <h2>Color Palette</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {colors.map(color => (
            <div key={color.name} style={{ margin: '10px', textAlign: 'center' }}>
              <div style={{
                backgroundColor: color.value,
                width: '100px',
                height: '100px',
                borderRadius: '8px',
                border: '1px solid #000'
              }}>
              </div>
              <p className="black">{color.name}</p>
            </div>
          ))}
        </div>
      </Card> */}
      <Hero />
      <section className="w-[80vw] m-auto py-4 my-4 bg-card">
        <div>
          <h2 className="w-full block text-2xl font-bold text-center">Resources &ndash; Alphabetical</h2>
        </div>
        <Tabs defaultValue="alphalisting" className="p-4">
          <TabsList className="flex justify-around items-center w-full m-auto text-lg text-primary-foreground bg-blue-900">
            <TabsTrigger className="text-xl m-10 px-10 data-[state=active]:bg-card"
              value="sectionAD">A-D
            </TabsTrigger>
            <TabsTrigger className="text-xl m-10 px-10 data-[state=active]:bg-card"
              value="sectionEH">E-H
            </TabsTrigger>
            <TabsTrigger className="text-xl m-10 px-10 data-[state=active]:bg-card"
              value="sectionIM">I-M
            </TabsTrigger>
            <TabsTrigger className="text-xl m-10 px-10 data-[state=active]:bg-card"
              value="sectionNR">N-R
            </TabsTrigger>
            <TabsTrigger className="text-xl m-10 px-10 data-[state=active]:bg-card"
              value="sectionSZ">S-Z
            </TabsTrigger>
          </TabsList>
          <TabsContent className="min-h-44" value="sectionAD">Section A-E content will go here</TabsContent>
          <TabsContent className="min-h-44" value="sectionEH">Section E-H content will go here</TabsContent>
          <TabsContent className="min-h-44" value="sectionIM">Section I-M content will go here</TabsContent>
          <TabsContent className="min-h-44" value="sectionNR">Section N-R content will go here</TabsContent>
          <TabsContent className="min-h-44" value="sectionSZ">
            <SZ />
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}

