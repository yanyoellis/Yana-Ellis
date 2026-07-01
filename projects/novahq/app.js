const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const sidebar = $('#sidebar');
const backdrop = $('#backdrop');
const modal = $('#modalBackdrop');
const toast = $('#toast');
const content = $('#content');
const dashboardMarkup = content.innerHTML;

const customers = [
  ['Arcade Labs','hello@arcadelabs.co','Enterprise','$12,400','United States','Active','2 min ago','A','coral'],
  ['Vesper Inc.','team@vesper.io','Professional','$8,250','United Kingdom','Active','1 hour ago','V','ink'],
  ['Metric Studio','hi@metric.studio','Professional','$6,800','Germany','Pending','3 hours ago','M','aqua'],
  ['Solace Systems','ops@solace.dev','Starter','$2,450','Canada','Active','Yesterday','S','gold'],
  ['Northstar AI','finance@northstar.ai','Enterprise','$18,900','Singapore','Active','Yesterday','N','purple'],
  ['Canvas & Co.','hello@canvas.co','Starter','$1,980','Australia','Inactive','Mar 21','C','blue']
];

const pageHead = (eyebrow, title, subtitle, actions = '') => `
  <div class="page-heading section-heading">
    <div><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p>${subtitle}</p></div>
    <div class="heading-actions">${actions}</div>
  </div>`;

const button = (label, kind = 'primary', attrs = '') => `<button class="${kind}-btn" ${attrs}>${label}</button>`;

const stat = (label, value, delta, tone = 'green') => `
  <article class="stat-card"><div><span>${label}</span><i class="dot ${tone}"></i></div><strong>${value}</strong><p><b class="${tone}">${delta}</b> from last period</p></article>`;

const miniLine = (color = '#6664e8') => `<svg class="mini-line" viewBox="0 0 360 90" preserveAspectRatio="none"><path d="M0 72 C32 68 43 48 70 56 S112 73 140 40 S182 22 212 38 S252 55 280 27 S327 20 360 7" style="stroke:${color}"/></svg>`;

function analyticsPage() { return `
  ${pageHead('Performance intelligence','Analytics','Understand what happened, why it happened, and what comes next.',`${button('Export CSV','secondary','data-toast="CSV export prepared"')} ${button('Share report','primary','data-toast="Share link copied"')}`)}
  <div class="filter-row"><div class="range-tabs" data-filter-group="analytics-range"><button data-value="7 days">7 days</button><button class="active" data-value="30 days">30 days</button><button data-value="Quarter">Quarter</button><button data-value="Year">Year</button></div><button class="filter-button" data-action="open-filters">⚙ All filters <b>2</b></button><button class="filter-chip" data-action="remove-filter">All channels ×</button><button class="filter-chip" data-action="remove-filter">Global ×</button></div>
  <div class="stats-grid">${stat('Total sessions','284,320','↗ 12.8%')}${stat('Conversion rate','7.84%','↗ 1.2%')}${stat('Avg. session','4m 38s','↗ 8.3%','blue')}${stat('Bounce rate','31.2%','↘ 4.1%')}</div>
  <div class="two-col wide-left">
    <article class="panel analytics-chart"><div class="panel-header"><div><h2>Sessions & conversion</h2><p>Performance across all acquisition channels</p></div><div class="chart-legend"><span><i class="violet"></i>Sessions</span><span><i class="cyan"></i>Conversion</span></div></div><div class="large-chart">${miniLine()}<svg class="second-line" viewBox="0 0 360 90" preserveAspectRatio="none"><path d="M0 65 C38 45 61 62 94 46 S142 27 176 52 S221 67 252 41 S316 54 360 23"/></svg><div class="chart-grid"></div></div><div class="axis-row"><span>Mar 1</span><span>Mar 6</span><span>Mar 12</span><span>Mar 18</span><span>Mar 24</span><span>Mar 30</span></div></article>
    <article class="panel"><div class="panel-header"><div><h2>Device usage</h2><p>Sessions by device</p></div><button class="more-btn">•••</button></div><div class="device-donut"><div><strong>284k</strong><small>sessions</small></div></div><div class="split-legend"><span><i class="violet"></i>Desktop <b>58%</b></span><span><i class="cyan"></i>Mobile <b>34%</b></span><span><i class="orange"></i>Tablet <b>8%</b></span></div></article>
  </div>
  <div class="two-col equal"><article class="panel"><div class="panel-header"><div><h2>Top countries</h2><p>Revenue contribution by market</p></div><a>View report →</a></div><div class="rank-list"><div><b>🇺🇸</b><span>United States<small>92,480 sessions</small></span><strong>$98.2k</strong></div><div><b>🇬🇧</b><span>United Kingdom<small>48,120 sessions</small></span><strong>$51.4k</strong></div><div><b>🇩🇪</b><span>Germany<small>36,840 sessions</small></span><strong>$38.7k</strong></div><div><b>🇨🇦</b><span>Canada<small>28,390 sessions</small></span><strong>$24.9k</strong></div></div></article><article class="panel"><div class="panel-header"><div><h2>Top pages</h2><p>Most visited product pages</p></div><button class="more-btn">•••</button></div><div class="rank-list compact"><div><span>/dashboard<small>Product</small></span><strong>62.4k <em>↗ 18%</em></strong></div><div><span>/pricing<small>Marketing</small></span><strong>48.7k <em>↗ 9%</em></strong></div><div><span>/integrations<small>Product</small></span><strong>31.2k <em>↗ 5%</em></strong></div><div><span>/resources<small>Content</small></span><strong>24.8k <em>↘ 2%</em></strong></div></div></article></div>`; }

function customerRows() { return customers.map((c,i) => `<tr class="clickable-row" data-go="${i===0?'customer-details':'customers'}"><td><input type="checkbox" aria-label="Select ${c[0]}"><span class="company-logo ${c[8]}">${c[7]}</span><span><strong>${c[0]}</strong><small>${c[1]}</small></span></td><td><span class="plan ${c[2]==='Enterprise'?'enterprise':c[2]==='Professional'?'pro':'starter'}">${c[2]}</span></td><td>${c[3]}</td><td>${c[4]}</td><td><span class="status ${c[5].toLowerCase()}">${c[5]}</span></td><td>${c[6]}</td><td>•••</td></tr>`).join(''); }

function customersPage() { return `
  ${pageHead('Customer success','Customers','Manage every relationship from first contact to renewal.',`${button('↥ Import','secondary','data-toast="Import window opened"')} ${button('+ Add customer','primary','data-toast="New customer form ready"')}`)}
  <div class="stats-grid">${stat('Total customers','18,420','↗ 8.1%')}${stat('New this month','1,380','↗ 14.6%')}${stat('Average value','$6,840','↗ 5.2%','blue')}${stat('At risk','148','↘ 12.4%','amber')}</div>
  <article class="panel data-panel"><div class="table-toolbar"><div class="inline-search">⌕ <input placeholder="Search customers..." /></div><button class="filter-button">☷ Status</button><button class="filter-button">◇ Plan</button><button class="filter-button">🌐 Country</button><span></span><button class="secondary-btn" data-toast="Customer list exported">⇩ Export</button></div><div class="table-wrap rich-table"><table><thead><tr><th>Customer</th><th>Plan</th><th>Revenue</th><th>Country</th><th>Status</th><th>Last active</th><th></th></tr></thead><tbody>${customerRows()}</tbody></table></div><div class="pagination"><span>Showing 1–6 of 18,420 customers</span><div><button>‹</button><button class="active">1</button><button>2</button><button>3</button><button>…</button><button>48</button><button>›</button></div></div></article>`; }

function customerDetailsPage() { return `
  <button class="back-link" data-go="customers">← Back to customers</button>
  <div class="profile-hero panel"><div class="hero-avatar coral">A</div><div><p class="eyebrow">Enterprise customer</p><h1>Arcade Labs <span class="status active">Active</span></h1><p>hello@arcadelabs.co · San Francisco, United States · Customer since Aug 2023</p></div><div class="heading-actions">${button('Send email','secondary','data-toast="Email composer opened"')} ${button('Edit customer','primary','data-toast="Customer editor opened"')}</div></div>
  <div class="stats-grid">${stat('Lifetime value','$48,920','↗ 22.4%')}${stat('Monthly spend','$12,400','↗ 4.8%')}${stat('Product usage','84%','↗ 7.2%','blue')}${stat('Health score','92 / 100','Excellent','green')}</div>
  <div class="tabs-line"><button class="active">Overview</button><button>Invoices</button><button>Activity</button><button>Support history</button></div>
  <div class="two-col wide-left"><article class="panel"><div class="panel-header"><div><h2>Account overview</h2><p>Company and subscription details</p></div><button class="more-btn">•••</button></div><div class="detail-grid"><label>Company<strong>Arcade Labs Inc.</strong></label><label>Primary contact<strong>Jamie Chen</strong></label><label>Subscription<strong>Enterprise · Annual</strong></label><label>Renewal date<strong>August 18, 2026</strong></label><label>Seats used<strong>84 of 100</strong></label><label>Account owner<strong>Maya Rodriguez</strong></label></div><div class="usage-block"><div><span>Workspace adoption</span><strong>84%</strong></div><i><b style="width:84%"></b></i><p>12% above the Enterprise cohort average.</p></div></article><article class="panel"><div class="panel-header"><div><h2>Contacts</h2><p>Key people at Arcade Labs</p></div><button>+ Add</button></div><div class="people-list"><div><span class="small-avatar purple">JC</span><span><strong>Jamie Chen</strong><small>VP of Operations · Primary</small></span></div><div><span class="small-avatar blue">MR</span><span><strong>Marcus Reed</strong><small>Finance Director</small></span></div><div><span class="small-avatar gold">SL</span><span><strong>Sophia Lane</strong><small>Product Lead</small></span></div></div></article></div>
  <div class="two-col equal"><article class="panel"><div class="panel-header"><div><h2>Recent activity</h2><p>Account timeline</p></div><a>View all →</a></div><div class="timeline"><div><i></i><span><strong>Invoice #INV-2841 paid</strong><small>Today, 09:42 · $12,400</small></span></div><div><i></i><span><strong>Jamie invited 4 teammates</strong><small>Yesterday, 16:18</small></span></div><div><i></i><span><strong>Enterprise plan renewed</strong><small>March 18, 2026</small></span></div></div></article><article class="panel"><div class="panel-header"><div><h2>Latest invoices</h2><p>Billing activity</p></div><a>View invoices →</a></div><div class="invoice-list"><div><span><strong>#INV-2841</strong><small>Mar 26, 2026</small></span><b>$12,400</b><em>Paid</em></div><div><span><strong>#INV-2698</strong><small>Feb 26, 2026</small></span><b>$12,400</b><em>Paid</em></div><div><span><strong>#INV-2510</strong><small>Jan 26, 2026</small></span><b>$12,400</b><em>Paid</em></div></div></article></div>`; }

function revenuePage() { return `
  ${pageHead('Financial health','Revenue','See where revenue comes from and how reliably it grows.',`${button('Compare periods','secondary','data-toast="Comparison enabled"')} ${button('Export report','primary','data-toast="Revenue report exported"')}`)}
  <div class="stats-grid">${stat('Monthly revenue','$248,540','↗ 14.2%')}${stat('Annual revenue','$2.84M','↗ 19.8%')}${stat('Avg. order value','$4,680','↗ 5.4%','blue')}${stat('Refund rate','0.84%','↘ 0.3%')}</div>
  <div class="two-col wide-left"><article class="panel"><div class="panel-header"><div><h2>Revenue growth</h2><p>Actual and forecasted monthly revenue</p></div><div class="range-tabs small"><button class="active">Monthly</button><button>Quarterly</button></div></div><div class="bar-chart">${[42,55,48,67,61,78,72,83,91,86,96,100].map((h,i)=>`<div><i style="height:${h}%"></i><span>${['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'][i]}</span></div>`).join('')}</div></article><article class="panel"><div class="panel-header"><div><h2>Revenue mix</h2><p>By subscription plan</p></div><button class="more-btn">•••</button></div><div class="revenue-ring"><div><strong>$248k</strong><small>this month</small></div></div><div class="split-legend vertical"><span><i class="violet"></i>Enterprise <b>$118.4k · 48%</b></span><span><i class="cyan"></i>Professional <b>$82.1k · 33%</b></span><span><i class="orange"></i>Starter <b>$48.0k · 19%</b></span></div></article></div>
  <article class="panel"><div class="panel-header"><div><h2>Revenue by region</h2><p>Performance across your leading markets</p></div><a>Detailed report →</a></div><div class="region-grid"><div><span>North America</span><strong>$124.8k</strong><i><b style="width:88%"></b></i><small>↗ 18.4%</small></div><div><span>Europe</span><strong>$71.2k</strong><i><b style="width:62%"></b></i><small>↗ 12.8%</small></div><div><span>Asia Pacific</span><strong>$38.9k</strong><i><b style="width:42%"></b></i><small>↗ 21.6%</small></div><div><span>Other</span><strong>$13.6k</strong><i><b style="width:24%"></b></i><small>↗ 4.2%</small></div></div></article>`; }

function subscriptionsPage() { const plans=[['Starter','$29','For small teams testing the waters','1,248','38%'],['Professional','$89','For growing teams that need depth','684','42%'],['Business','$189','For scaled, multi-team workflows','294','16%'],['Enterprise','Custom','For complex organizations','82','4%']]; return `
  ${pageHead('Recurring business','Subscriptions','Manage plans, renewals, and recurring customer relationships.',`${button('+ Create plan','primary','data-toast="Plan builder opened"')}`)}
  <div class="subscription-summary panel"><div><span>Active subscriptions</span><strong>2,308</strong><small>↗ 11.8% this month</small></div><div><span>Subscription MRR</span><strong>$91,320</strong><small>↗ 8.4% this month</small></div><div><span>Next 30-day renewals</span><strong>428</strong><small>$38,840 expected</small></div><div><span>Trial conversion</span><strong>24.8%</strong><small>↗ 2.1% this month</small></div></div>
  <div class="plan-grid">${plans.map((p,i)=>`<article class="plan-card ${i===1?'featured':''}"><div><span class="plan-glyph">${['✦','◇','⬡','◎'][i]}</span>${i===1?'<em>Most popular</em>':''}</div><h2>${p[0]}</h2><strong>${p[1]}${p[1][0]==='$'?'<small>/month</small>':''}</strong><p>${p[2]}</p><hr><label>Active subscriptions <b>${p[3]}</b></label><label>Revenue share <b>${p[4]}</b></label><div class="usage-block"><i><b style="width:${p[4]}"></b></i></div><button class="secondary-btn" data-toast="${p[0]} plan opened">Manage plan</button></article>`).join('')}</div>
  <article class="panel data-panel"><div class="panel-header"><div><h2>Upcoming renewals</h2><p>Subscriptions renewing in the next 30 days</p></div><a>View all →</a></div><div class="renewal-list"><div><span class="company-logo coral">A</span><span><strong>Arcade Labs</strong><small>Enterprise · Annual</small></span><b>$12,400</b><time>Mar 29</time><em>Auto-renew</em></div><div><span class="company-logo ink">V</span><span><strong>Vesper Inc.</strong><small>Professional · Monthly</small></span><b>$8,250</b><time>Apr 2</time><em>Auto-renew</em></div><div><span class="company-logo aqua">M</span><span><strong>Metric Studio</strong><small>Business · Monthly</small></span><b>$6,800</b><time>Apr 6</time><em class="warning">Payment review</em></div></div></article>`; }

function projectsPage() { const projects=[['Website redesign','Arcade Labs','Maya Rodriguez',78,'High','Apr 12','#6865e8'],['Mobile analytics','Nova Studio','Alex Morgan',54,'Medium','Apr 28','#56b9ca'],['Billing migration','Vesper Inc.','Daniel Kim',92,'High','Mar 31','#f19b56'],['Growth experiments','Northstar AI','Sofia Bell',36,'Low','May 18','#5fb88f'],['Enterprise onboarding','Metric Studio','Jamie Chen',64,'Medium','Apr 8','#9d6bd8'],['Q2 research','Nova Studio','Liam Wright',18,'Low','Jun 4','#e66e7c']]; return `
  ${pageHead('Team delivery','Projects','Keep owners, priorities, and deadlines moving in the same direction.',`${button('Board view','secondary','data-toast="Board view enabled"')} ${button('+ Create project','primary','data-toast="Project creator opened"')}`)}
  <div class="project-filters"><div class="range-tabs"><button class="active">All projects <b>24</b></button><button>In progress <b>12</b></button><button>Completed <b>8</b></button><button>At risk <b>4</b></button></div><button class="filter-button">☷ Filter</button></div>
  <div class="project-grid">${projects.map(p=>`<article class="project-card"><div><span class="project-mark" style="background:${p[6]}18;color:${p[6]}">◇</span><button>•••</button></div><small>${p[1]}</small><h2>${p[0]}</h2><div class="project-meta"><span><i class="small-avatar">${p[2].split(' ').map(x=>x[0]).join('')}</i>${p[2]}</span><span>◷ ${p[5]}</span></div><div class="progress-label"><span>Progress</span><strong>${p[3]}%</strong></div><div class="project-progress"><i style="width:${p[3]}%;background:${p[6]}"></i></div><footer><span class="priority ${p[4].toLowerCase()}">${p[4]} priority</span><span>● ● +3</span></footer></article>`).join('')}</div>`; }

function teamPage() { const people=[['Maya Rodriguez','Product Lead','Product','MR','purple','Online'],['Daniel Kim','Senior Analyst','Data','DK','blue','Online'],['Sofia Bell','Growth Manager','Marketing','SB','gold','In a meeting'],['Liam Wright','Customer Success','Success','LW','aqua','Offline'],['Jamie Chen','Finance Manager','Finance','JC','coral','Online'],['Noah Williams','Product Designer','Design','NW','ink','Away'],['Emma Stone','Backend Engineer','Engineering','ES','blue','Online'],['Oliver Grant','Sales Director','Sales','OG','purple','Offline']]; return `
  ${pageHead('People & access','Team','Bring the right people together and keep workspace access clear.',`${button('Manage roles','secondary','data-toast="Role manager opened"')} ${button('+ Invite member','primary','data-action="invite"')}`)}
  <div class="stats-grid">${stat('Team members','48','↗ 6 new')}${stat('Online now','31','65% of team','blue')}${stat('Departments','8','2 growing','blue')}${stat('Open invites','4','2 expire soon','amber')}</div>
  <div class="team-toolbar"><div class="inline-search">⌕ <input placeholder="Search team members..." /></div><div class="range-tabs"><button class="active">All</button><button>Product</button><button>Design</button><button>Engineering</button></div></div>
  <div class="team-grid">${people.map(p=>`<article class="member-card"><button>•••</button><span class="member-avatar ${p[4]}">${p[3]}</span><h2>${p[0]}</h2><p>${p[1]}</p><span class="department">${p[2]}</span><footer><span class="presence ${p[5].toLowerCase().replaceAll(' ','-')}">${p[5]}</span><button data-toast="Profile opened">View profile</button></footer></article>`).join('')}</div>`; }

function calendarPage() { const days=Array.from({length:35},(_,i)=>i<2?['30','muted']:i<32?[String(i-1),i===12?'today':'']:['1','muted']); const events={5:['Product sync','violet'],8:['Invoice review','orange'],12:['Launch day','green'],16:['Research readout','blue'],20:['Board update','violet'],25:['Q2 planning','orange'],29:['Team offsite','green']}; return `
  ${pageHead('Schedule','Calendar','See meetings, deadlines, launches, and focus time in one place.',`${button('Today','secondary','data-toast="Jumped to today"')} ${button('+ Create event','primary','data-toast="Event composer opened"')}`)}
  <div class="calendar-layout"><article class="panel calendar-panel"><div class="calendar-head"><div><button>‹</button><h2>March 2026</h2><button>›</button></div><div class="range-tabs small"><button class="active">Month</button><button>Week</button><button>Day</button></div></div><div class="weekdays"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div><div class="calendar-grid">${days.map((d,i)=>`<div class="${d[1]}"><span>${d[0]}</span>${events[i]?`<p class="${events[i][1]}">${events[i][0]}</p>`:''}${i===12?'<small>3 events</small>':''}</div>`).join('')}</div></article><aside class="panel agenda"><div class="panel-header"><div><h2>Wednesday, Mar 12</h2><p>3 events · 4h 30m</p></div><button>+</button></div><div class="agenda-list"><div><time>09:00</time><article class="violet"><strong>Weekly product sync</strong><span>09:00 – 10:00 · Google Meet</span><small>MR DK SB +5</small></article></div><div><time>11:30</time><article class="blue"><strong>Arcade Labs review</strong><span>11:30 – 12:15 · Meeting room 2</span><small>AM JC</small></article></div><div><time>14:00</time><article class="green"><strong>Launch readiness</strong><span>14:00 – 16:45 · Focus room</span><small>Product team</small></article></div></div><div class="focus-card"><span>✦</span><div><strong>2h focus window</strong><small>Available after 17:00</small></div><button data-toast="Focus block added">Block</button></div></aside></div>`; }

function reportsPage() { const cats=[['Sales','Pipeline, deals & forecasting','↗','#6966e5'],['Marketing','Channels, campaigns & attribution','◎','#55b9c9'],['Finance','Revenue, MRR & cash flow','$','#f1a053'],['Customer success','Health, churn & retention','♡','#4fb486'],['Product','Usage, adoption & engagement','◇','#956bd8']]; return `
  ${pageHead('Decision-ready data','Reports','Turn the right data into a clear story for every stakeholder.',`${button('+ Generate report','primary','data-toast="Report builder opened"')}`)}
  <div class="report-builder"><div><span class="eyebrow">Guided report builder</span><h2>What do you need to understand?</h2><p>Choose a category and Nova will help you configure the right metrics.</p></div><div class="builder-steps"><span class="active"><b>1</b>Category</span><i></i><span><b>2</b>Date range</span><i></i><span><b>3</b>Filters</span><i></i><span><b>4</b>Preview</span></div></div>
  <div class="report-categories">${cats.map(c=>`<article><span style="background:${c[3]}18;color:${c[3]}">${c[2]}</span><div><h2>${c[0]}</h2><p>${c[1]}</p></div><button data-toast="${c[0]} report selected">→</button></article>`).join('')}</div>
  <article class="panel data-panel"><div class="panel-header"><div><h2>Recent reports</h2><p>Generated and scheduled reports</p></div><div class="inline-search">⌕ <input placeholder="Search reports..." /></div></div><div class="report-list"><div><span class="report-file">PDF</span><span><strong>Q1 Business Performance</strong><small>Finance · Mar 25 by Alex Morgan</small></span><em>Ready</em><time>2.4 MB</time><button>•••</button></div><div><span class="report-file blue">CSV</span><span><strong>Customer Health Overview</strong><small>Customer success · Mar 22 by Maya Rodriguez</small></span><em>Ready</em><time>1.8 MB</time><button>•••</button></div><div><span class="report-file gold">PDF</span><span><strong>Weekly Growth Digest</strong><small>Marketing · Every Monday at 09:00</small></span><em class="scheduled">Scheduled</em><time>Automated</time><button>•••</button></div></div></article>`; }

function notificationsPage() { const notes=[['Payment received','Arcade Labs paid invoice #INV-2841 for $12,400.','2 min ago','$','green','Payments'],['New enterprise customer','Northstar AI upgraded to the Enterprise plan.','42 min ago','✦','violet','Customers'],['Project needs attention','Billing migration is due in 5 days with 3 open tasks.','1 hour ago','◇','orange','Projects'],['Report generated','Your Q1 Business Performance report is ready.','3 hours ago','▤','blue','Reports'],['Workspace security','Two-factor authentication was enabled for Jamie Chen.','Yesterday','✓','green','System'],['Subscription renewed','Vesper Inc. renewed Professional for another month.','Yesterday','↻','violet','Payments']]; return `
  ${pageHead('Inbox','Notifications','Stay informed without losing focus.',`${button('Mark all as read','secondary','data-action="mark-read"')} ${button('Notification settings','primary','data-go="settings"')}`)}
  <div class="notification-layout"><aside class="panel notification-filters"><h2>Categories</h2><button class="active" data-category="all">All notifications <b>6</b></button><button data-category="System">System <b>1</b></button><button data-category="Payments">Payments <b>2</b></button><button data-category="Customers">Customers <b>1</b></button><button data-category="Projects">Projects <b>1</b></button><button data-category="Reports">Reports <b>1</b></button><hr><label><span>Only unread</span><input id="onlyUnread" type="checkbox" checked><i></i></label></aside><article class="panel notification-list"><div class="panel-header"><div><h2>Recent</h2><p class="notification-summary">4 unread updates</p></div><div class="inline-search">⌕ <input placeholder="Search history..." /></div></div>${notes.map((n,i)=>`<div class="notification-item ${i<4?'unread':''}" data-category="${n[5]}"><span class="notification-glyph ${n[4]}">${n[3]}</span><div><strong>${n[0]}</strong><p>${n[1]}</p><small>${n[5]} · ${n[2]}</small></div><button aria-label="Notification actions">•••</button></div>`).join('')}</article></div>`; }

function integrationsPage() { const apps=[['Slack','Team alerts and daily summaries','S','purple','Connected'],['Stripe','Payments, invoices, and revenue','S','blue','Connected'],['Google Analytics','Traffic and acquisition data','G','gold','Connected'],['GitHub','Development activity and releases','G','ink','Connect'],['Notion','Documents, projects, and notes','N','ink','Connect'],['Zapier','Automate workflows across 5,000+ apps','Z','orange','Connect'],['Discord','Community notifications and events','D','purple','Connect'],['HubSpot','CRM contacts, deals, and activity','H','orange','Connect']]; return `
  ${pageHead('Connected workspace','Integrations','Bring your business data together without changing how your team works.',`${button('Browse marketplace','primary','data-toast="Marketplace opened"')}`)}
  <div class="integration-hero"><div><span>✦</span><div><strong>Your data, working together</strong><p>3 integrations connected · All systems operational</p></div></div><button class="secondary-btn" data-toast="All integrations synced">Sync all now</button></div>
  <div class="team-toolbar"><div class="inline-search">⌕ <input placeholder="Search integrations..." /></div><div class="range-tabs"><button class="active">All</button><button>Analytics</button><button>Communication</button><button>Finance</button></div></div>
  <div class="integration-grid">${apps.map(a=>`<article class="integration-card"><span class="app-logo ${a[3]}">${a[2]}</span><div><h2>${a[0]}</h2><p>${a[1]}</p></div><span class="${a[4]==='Connected'?'connected':'available'}">${a[4]==='Connected'?'● Connected':'Available'}</span><button class="${a[4]==='Connected'?'secondary':'primary'}-btn" data-toast="${a[0]} ${a[4]==='Connected'?'settings opened':'connection started'}">${a[4]==='Connected'?'Configure':'Connect'}</button></article>`).join('')}</div>`; }

function settingsPage() { return `
  ${pageHead('Workspace control','Settings','Configure Nova Studio, billing, security, and connected workflows.',`${button('Reset','secondary','data-toast="Changes reset"')} ${button('Save changes','primary','data-toast="Workspace settings saved"')}`)}
  <div class="settings-layout"><aside class="panel settings-nav"><button class="active">General</button><button>Workspace</button><button>Billing</button><button>Users</button><button>Notifications</button><button>Appearance</button><button>Security</button><button>Integrations</button><button>API</button></aside><div class="settings-main"><article class="panel form-card"><div><h2>Workspace details</h2><p>Basic information shown to members of Nova Studio.</p></div><div class="workspace-logo-row"><span class="workspace-avatar large">N</span><div>${button('Change logo','secondary','data-toast="Logo picker opened"')}<small>PNG, JPG or SVG. Max 2 MB.</small></div></div><div class="form-grid"><label>Workspace name<input value="Nova Studio"></label><label>Workspace URL<div class="input-prefix"><span>novahq.com/</span><input value="nova-studio"></div></label><label>Company size<select><option>51–100 employees</option></select></label><label>Industry<select><option>Technology & software</option></select></label><label class="full">Workspace description<textarea>Product analytics and customer intelligence for the Nova Studio team.</textarea></label></div></article><article class="panel form-card"><div><h2>Regional preferences</h2><p>Used for dates, reporting, and scheduled automations.</p></div><div class="form-grid"><label>Timezone<select><option>(GMT+02:00) Kyiv</option></select></label><label>Language<select><option>English (United States)</option></select></label><label>Date format<select><option>Mar 26, 2026</option></select></label><label>Currency<select><option>USD — US Dollar</option></select></label></div></article><article class="panel form-card danger-zone"><div><h2>Danger zone</h2><p>These actions can affect everyone in the workspace.</p></div><button class="danger-btn" data-toast="Deletion requires owner confirmation">Delete workspace</button></article></div></div>`; }

function profilePage() { return `
  ${pageHead('Personal account','Profile','Manage how you appear and how NovaHQ keeps your account secure.',`${button('Save profile','primary','data-toast="Profile changes saved"')}`)}
  <div class="profile-cover"><div class="cover-art"></div><div class="profile-main-avatar">AL</div><div><h1>Alex Morgan</h1><p>Workspace Owner · Nova Studio</p></div><button class="secondary-btn" data-toast="Cover picker opened">Change cover</button></div>
  <div class="profile-layout"><div><article class="panel form-card"><div><h2>Personal information</h2><p>Update your photo and personal details.</p></div><div class="form-grid"><label>First name<input value="Alex"></label><label>Last name<input value="Morgan"></label><label class="full">Email address<input value="alex@novahq.io"></label><label>Phone<input value="+380 67 555 0198"></label><label>Role<input value="Founder & Product Lead"></label><label>Timezone<select><option>Europe/Kyiv (GMT+2)</option></select></label><label>Language<select><option>English</option></select></label></div></article><article class="panel form-card"><div><h2>Security</h2><p>Keep your NovaHQ account protected.</p></div><div class="security-row"><span><strong>Password</strong><small>Last changed 42 days ago</small></span><button class="secondary-btn" data-toast="Password editor opened">Change password</button></div><div class="security-row"><span><strong>Two-factor authentication</strong><small>Enabled with authenticator app</small></span><em>Enabled</em></div></article></div><aside class="panel profile-side"><h2>Profile completeness</h2><div class="completion-ring"><strong>92%</strong></div><p>Your profile is almost complete.</p><ul><li class="done">✓ Personal details</li><li class="done">✓ Profile photo</li><li class="done">✓ Two-factor security</li><li>○ Add a short bio</li></ul><hr><button class="secondary-btn" data-go="login">Preview login page</button></aside></div>`; }

function supportPage() { return `
  <section class="support-hero"><span class="eyebrow">NovaHQ help center</span><h1>How can we help?</h1><p>Find a quick answer or continue a conversation with our team.</p><div>⌕ <input placeholder="Search guides, answers, and resources..."><kbd>Enter</kbd></div></section>
  <div class="support-categories"><article><span>⌁</span><h2>Getting started</h2><p>Set up your workspace and invite your team.</p><a>8 articles →</a></article><article><span>▥</span><h2>Analytics & reports</h2><p>Understand metrics and build clear reports.</p><a>14 articles →</a></article><article><span>⚙</span><h2>Account & billing</h2><p>Manage plans, invoices, and security.</p><a>11 articles →</a></article><article><span>◇</span><h2>Integrations</h2><p>Connect NovaHQ with your workflow.</p><a>22 articles →</a></article></div>
  <div class="two-col equal"><article class="panel faq"><div class="panel-header"><div><h2>Popular questions</h2><p>The answers most teams need first</p></div></div><details open><summary>How do I customize the dashboard?<span>−</span></summary><p>Open the dashboard menu and choose Customize widgets. You can resize, reorder, or hide modules for your workspace.</p></details><details><summary>Can I export data automatically?<span>+</span></summary></details><details><summary>How are team permissions managed?<span>+</span></summary></details><details><summary>Where can I find API credentials?<span>+</span></summary></details></article><article class="contact-support"><span>✦</span><h2>Still need a hand?</h2><p>Our support team usually replies in under two hours on business days.</p><button class="primary-btn" data-toast="Support conversation started">Start a conversation</button><small>Monday–Friday · 08:00–18:00 UTC</small></article></div>`; }

function loginPage() { return `<div class="login-page"><section class="login-brand-panel"><a class="brand"><span class="brand-mark"><i></i></span><span>Nova<span>HQ</span></span></a><div><span class="eyebrow">Business clarity, every day</span><h1>Make better decisions without the dashboard noise.</h1><p>Monitor revenue, customers, projects, and performance from one calm workspace.</p><blockquote>“NovaHQ gave our team one shared version of the truth.”<footer><span class="small-avatar coral">JC</span><div><strong>Jamie Chen</strong><small>COO at Arcade Labs</small></div></footer></blockquote></div><small>© 2026 NovaHQ · Privacy · Terms</small></section><section class="login-form-panel"><button class="back-link" data-go="dashboard">← Back to dashboard</button><form onsubmit="return false"><span class="mobile-login-logo">✦ NovaHQ</span><h1>Welcome back</h1><p>Sign in to access your workspace.</p><label>Email address<input type="email" value="alex@novahq.io"></label><label>Password<div class="password-input"><input type="password" value="password123"><button type="button">Show</button></div></label><div class="form-between"><label><input type="checkbox" checked> Remember me</label><a>Forgot password?</a></div><button class="primary-btn login-submit" data-go="dashboard">Sign in</button><div class="or"><span>or continue with</span></div><button class="google-btn" data-toast="Google sign-in opened"><b>G</b> Continue with Google</button><p class="create-account">New to NovaHQ? <a>Create an account</a></p></form></section></div>`; }

function uxCaseStudyPage() { return `
  <article class="case-study">
    <header class="case-hero"><div class="case-copy"><span class="case-kicker">UX CASE STUDY · 2026</span><h1>Clarity for complex business decisions.</h1><p>How NovaHQ turns fragmented company data into a focused, scalable workspace that helps teams understand what matters next.</p><div class="case-meta"><div><small>Role</small><strong>Product Design</strong></div><div><small>Platform</small><strong>Responsive web</strong></div><div><small>Duration</small><strong>Concept project</strong></div></div></div><div class="case-visual"><div class="mock-sidebar"><i></i><i></i><i></i><i></i></div><div class="mock-main"><span></span><div><i></i><i></i><i></i></div><svg viewBox="0 0 280 100"><path d="M0 82C35 75 55 40 86 54s48 32 78 5 52-32 76-15 28-1 40-30"/></svg></div><b>+18.2%</b></div></header>
    <section class="case-intro"><div><span class="case-number">01</span><p class="eyebrow">Overview</p><h2>One operating system for a growing business.</h2></div><div><p>NovaHQ is a B2B analytics platform for founders, product teams, operations, sales, and customer success. It brings performance, revenue, customers, subscriptions, projects, and reporting into one predictable system.</p><p>The challenge was not adding more data. It was deciding what deserves attention, when, and why.</p></div></section>
    <section class="case-dark"><div class="case-section-title"><span class="case-number">02</span><p class="eyebrow">The problem</p><h2>More data was creating less confidence.</h2><p>As SaaS products grow, their dashboards accumulate charts, controls, filters, and duplicated paths. The interface becomes a record of every feature ever shipped—not a tool for making decisions.</p></div><div class="problem-grid"><article><strong>01</strong><h3>Competing priorities</h3><p>Too many equally loud cards made it difficult to know where to begin.</p></article><article><strong>02</strong><h3>Fragmented workflows</h3><p>Common actions were scattered across tables, settings, and hidden menus.</p></article><article><strong>03</strong><h3>Inconsistent patterns</h3><p>Filters and tables behaved differently from module to module.</p></article><article><strong>04</strong><h3>High cognitive load</h3><p>Users had to interpret raw data before they could identify the next action.</p></article></div></section>
    <section class="case-principles"><div class="case-section-title"><span class="case-number">03</span><p class="eyebrow">Design principles</p><h2>Four rules shaped every screen.</h2></div><div class="principle-list"><article><span>01</span><div><h3>Information before controls</h3><p>Numbers and insights establish context before filters ask users to make decisions.</p></div></article><article><span>02</span><div><h3>One primary goal per screen</h3><p>Dashboard monitors, Revenue explains finances, and Reports turns findings into a narrative.</p></div></article><article><span>03</span><div><h3>Progressive disclosure</h3><p>Advanced controls stay close but quiet until they become relevant.</p></div></article><article><span>04</span><div><h3>Consistency creates speed</h3><p>Shared tables, filters, status language, and action placement reduce relearning.</p></div></article></div></section>
    <section class="case-flow"><div class="case-section-title"><span class="case-number">04</span><p class="eyebrow">Core user flows</p><h2>Important outcomes stay short.</h2></div><div class="flow-card"><div><span>Dashboard</span><i>→</i><span>Revenue</span><i>→</i><span>Filter date</span><i>→</i><span>Analyze</span><i>→</i><span class="accent">Export report</span></div><small>Business analysis flow · 5 steps</small></div><div class="flow-card"><div><span>Customers</span><i>→</i><span>Customer details</span><i>→</i><span>Edit customer</span><i>→</i><span class="accent">Save changes</span></div><small>Customer management flow · 4 steps</small></div><div class="flow-card"><div><span>Projects</span><i>→</i><span>Create project</span><i>→</i><span>Assign team</span><i>→</i><span class="accent">Project created</span></div><small>Project creation flow · 4 steps</small></div></section>
    <section class="case-solution"><div class="case-section-title"><span class="case-number">05</span><p class="eyebrow">The solution</p><h2>A calm hierarchy with depth on demand.</h2></div><div class="solution-showcase"><div class="solution-copy"><span>01 · Dashboard</span><h3>Lead with business health, not chart volume.</h3><p>The overview limits the first layer to revenue, MRR, customers, churn, goal progress, and a single contextual insight. Supporting analytics remain one interaction away.</p><ul><li>Critical KPIs fit in the initial viewport</li><li>One proactive insight connects data to action</li><li>Consistent time comparisons reduce interpretation</li></ul></div><div class="solution-ui dashboard-mini"><div><i></i><i></i><i></i><i></i></div><section><svg viewBox="0 0 300 100"><path d="M0 88C42 80 55 55 90 64s52-30 88-5 52-19 80-8 28-30 42-35"/></svg></section></div></div><div class="solution-showcase reverse"><div class="solution-copy"><span>02 · Customer management</span><h3>Keep the relationship visible, not just the record.</h3><p>Customer details combine health, value, subscription, contacts, activity, invoices, and support history so teams can understand context without switching modules.</p><ul><li>Health and revenue establish priority</li><li>Activity timeline preserves account context</li><li>Primary actions remain predictably placed</li></ul></div><div class="solution-ui customer-mini"><header><i></i><span></span></header><div><i></i><i></i><i></i></div><section></section></div></div></section>
    <section class="case-system"><div><span class="case-number">06</span><p class="eyebrow">Design system</p><h2>Built to expand without becoming louder.</h2><p>A shared component language keeps new workflows familiar. Spacing, hierarchy, states, and interactions scale across every NovaHQ module.</p></div><div class="system-board"><div class="color-row"><i></i><i></i><i></i><i></i><i></i></div><div class="type-row"><strong>Aa</strong><span>Manrope<br><small>Headings · 700</small></span><strong>Ag</strong><span>DM Sans<br><small>Interface · 400–700</small></span></div><div class="component-row"><button>Primary action</button><span>Active</span><label><input checked type="checkbox"> Select</label><i><b style="width:72%"></b></i></div></div></section>
    <section class="case-outcome"><span>✦</span><p class="eyebrow">Final outcome</p><h2>Complexity is still there.<br>It simply arrives when it is useful.</h2><p>NovaHQ demonstrates how product strategy, information architecture, visual hierarchy, and a scalable design system can turn enterprise depth into an approachable daily tool.</p><div><article><strong>2 clicks</strong><span>to any major module</span></article><article><strong>15+ screens</strong><span>in one connected system</span></article><article><strong>1 language</strong><span>for data and interaction</span></article></div><button class="primary-btn" data-go="dashboard">Explore the product →</button></section>
  </article>`; }

const pages = {
  analytics: analyticsPage, customers: customersPage, 'customer-details': customerDetailsPage,
  revenue: revenuePage, subscriptions: subscriptionsPage, projects: projectsPage,
  team: teamPage, calendar: calendarPage, reports: reportsPage,
  notifications: notificationsPage, integrations: integrationsPage, settings: settingsPage,
  profile: profilePage, support: supportPage, login: loginPage, 'ux-case-study': uxCaseStudyPage
};

function closeMenu() { sidebar.classList.remove('open'); backdrop.classList.remove('open'); }

function showToast(title = 'Done', message = 'Your changes were applied successfully.') {
  $('strong', toast).textContent = title;
  $('small', toast).textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

function openModal() { modal.classList.add('show'); setTimeout(() => $('#inviteEmail').focus(), 120); }
function closeModal() { modal.classList.remove('show'); }

function wireDashboard() {
  $('.dismiss')?.addEventListener('click', e => e.currentTarget.closest('.insight-banner').remove());
  $$('.segmented button').forEach(btn => btn.addEventListener('click', () => {
    $$('.segmented button').forEach(item => item.classList.remove('active'));
    btn.classList.add('active');
    $('.chart-summary strong').textContent = btn.dataset.range === '3' ? '$84.9k' : btn.dataset.range === '6' ? '$139.2k' : '$248.5k';
  }));
  $('#exportBtn')?.addEventListener('click', () => showToast('Export complete', 'NovaHQ-overview.csv is ready.'));
  $('#inviteBtn')?.addEventListener('click', openModal);
}

function renderPage(page, updateHistory = true) {
  const validPage = page === 'dashboard' || pages[page] ? page : 'dashboard';
  const activePage = validPage === 'customer-details' ? 'customers' : validPage;
  $$('.nav a, .sidebar-bottom a').forEach(link => link.classList.toggle('active', link.dataset.page === activePage));
  closeMenu();
  content.className = `content page-${validPage}`;
  if (validPage === 'dashboard') { content.innerHTML = dashboardMarkup; wireDashboard(); }
  else content.innerHTML = pages[validPage]();
  if (validPage === 'notifications') applyNotificationFilters();
  if (updateHistory) history.pushState({page:validPage},'',`#${validPage}`);
  window.scrollTo({top:0,behavior:'smooth'});
  document.title = `${validPage === 'ux-case-study' ? 'UX Case Study' : validPage.replaceAll('-',' ').replace(/\b\w/g,c=>c.toUpperCase())} — NovaHQ`;
}

function activateButton(button, selector = 'button') {
  const group = button.parentElement;
  $$(selector, group).forEach(item => item.classList.remove('active'));
  button.classList.add('active');
}

function applyNotificationFilters() {
  const list = $('.notification-list');
  if (!list) return;
  const category = $('.notification-filters>button.active')?.dataset.category || 'all';
  const unreadOnly = $('#onlyUnread')?.checked ?? false;
  const query = $('.notification-list input')?.value.trim().toLowerCase() || '';
  let visible = 0;
  $$('.notification-item', list).forEach(item => {
    const categoryMatch = category === 'all' || item.dataset.category === category;
    const unreadMatch = !unreadOnly || item.classList.contains('unread');
    const searchMatch = !query || item.textContent.toLowerCase().includes(query);
    item.hidden = !(categoryMatch && unreadMatch && searchMatch);
    if (!item.hidden) visible += 1;
  });
  const summary = $('.notification-summary');
  if (summary) summary.textContent = `${visible} ${unreadOnly ? 'unread ' : ''}update${visible === 1 ? '' : 's'}`;
}

function openFilterPopover(anchor, mode = 'filters') {
  $('.filter-popover')?.remove();
  const popover = document.createElement('div');
  popover.className = 'filter-popover';
  const rect = anchor.getBoundingClientRect();
  popover.style.top = `${Math.min(rect.bottom + 8, window.innerHeight - 250)}px`;
  popover.style.left = `${Math.min(rect.left, window.innerWidth - 240)}px`;
  if (mode === 'date') {
    popover.innerHTML = `<strong>Date range</strong><button data-range-label="Last 7 days">Last 7 days</button><button data-range-label="Last 30 days">Last 30 days</button><button data-range-label="This quarter">This quarter</button><button data-range-label="This year">This year</button>`;
    $$('[data-range-label]', popover).forEach(option => option.addEventListener('click', () => {
      $('#periodBtn span').textContent = option.dataset.rangeLabel;
      popover.remove();
      showToast('Date range updated', option.dataset.rangeLabel);
    }));
  } else {
    const pageName = content.className.replace('content page-', '').replaceAll('-', ' ');
    popover.innerHTML = `<strong>Filter ${pageName}</strong><label><input type="checkbox" checked> Date range</label><label><input type="checkbox" checked> Status</label><label><input type="checkbox"> Country</label><label><input type="checkbox"> Owner</label><button class="primary-btn apply-filters">Apply filters</button>`;
    $('.apply-filters', popover).addEventListener('click', () => {
      const count = $$('input:checked', popover).length;
      const badge = $('[data-action="open-filters"] b');
      if (badge) badge.textContent = count;
      popover.remove();
      showToast('Filters applied', `${count} filters are active.`);
    });
  }
  document.body.appendChild(popover);
}

function filterVisibleContent(input) {
  const query = input.value.trim().toLowerCase();
  if (input.closest('.notification-list')) { applyNotificationFilters(); return; }
  let items = [];
  if (input.placeholder.includes('customers')) items = $$('.rich-table tbody tr');
  else if (input.placeholder.includes('team')) items = $$('.member-card');
  else if (input.placeholder.includes('integrations')) items = $$('.integration-card');
  else if (input.placeholder.includes('reports')) items = $$('.report-list>div');
  items.forEach(item => item.hidden = !!query && !item.textContent.toLowerCase().includes(query));
}

$('#menuBtn').addEventListener('click', () => { sidebar.classList.toggle('open'); backdrop.classList.toggle('open'); });
backdrop.addEventListener('click', closeMenu);
$('#modalClose').addEventListener('click', closeModal);
$('#cancelInvite').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
$('#sendInvite').addEventListener('click', () => {
  const email = $('#inviteEmail').value.trim();
  if (!email || !email.includes('@')) { $('#inviteEmail').focus(); $('#inviteEmail').style.borderColor = '#e16363'; return; }
  closeModal(); showToast('Invitation sent', `${email} was invited to Nova Studio.`); $('#inviteEmail').value = '';
});

document.addEventListener('click', e => {
  const pageLink = e.target.closest('[data-page]');
  const goLink = e.target.closest('[data-go]');
  const toastButton = e.target.closest('[data-toast]');
  const action = e.target.closest('[data-action]');
  const rangeButton = e.target.closest('.range-tabs button');
  const categoryButton = e.target.closest('.notification-filters>button');
  const tabButton = e.target.closest('.tabs-line button, .settings-nav button');
  const paginationButton = e.target.closest('.pagination button');
  const rowCheckbox = e.target.closest('.clickable-row input[type="checkbox"]');
  if (pageLink) { e.preventDefault(); renderPage(pageLink.dataset.page); }
  else if (rowCheckbox) {
    e.stopPropagation();
    rowCheckbox.closest('tr').classList.toggle('selected', rowCheckbox.checked);
  }
  else if (goLink) { e.preventDefault(); renderPage(goLink.dataset.go); }
  else if (toastButton) showToast(toastButton.dataset.toast, 'NovaHQ is ready for the next step.');
  else if (categoryButton) {
    activateButton(categoryButton);
    applyNotificationFilters();
  }
  else if (rangeButton) {
    activateButton(rangeButton);
    const chart = $('.analytics-chart');
    if (chart && rangeButton.closest('[data-filter-group="analytics-range"]')) {
      chart.dataset.range = rangeButton.dataset.value;
      chart.classList.remove('range-pulse');
      requestAnimationFrame(() => chart.classList.add('range-pulse'));
    }
  }
  else if (tabButton) activateButton(tabButton);
  else if (paginationButton) {
    if (!['‹','›','…'].includes(paginationButton.textContent.trim())) activateButton(paginationButton);
    showToast('Page updated', `Showing customer page ${paginationButton.textContent.trim()}.`);
  }
  else if (action?.dataset.action === 'invite') openModal();
  else if (action?.dataset.action === 'open-filters') openFilterPopover(action, 'filters');
  else if (e.target.closest('.filter-button')) openFilterPopover(e.target.closest('.filter-button'), 'filters');
  else if (action?.dataset.action === 'remove-filter') {
    action.remove();
    const badge = $('[data-action="open-filters"] b');
    if (badge) badge.textContent = Math.max(0, Number(badge.textContent) - 1);
  }
  else if (action?.dataset.action === 'date-range') openFilterPopover(action, 'date');
  else if (action?.dataset.action === 'mark-read') {
    $$('.notification-item.unread').forEach(item => item.classList.remove('unread'));
    if ($('#onlyUnread')) $('#onlyUnread').checked = false;
    applyNotificationFilters();
    showToast('All caught up', 'Every notification is now marked as read.');
  }
  else if (e.target.closest('.password-input button')) {
    const password = $('.password-input input');
    password.type = password.type === 'password' ? 'text' : 'password';
    e.target.textContent = password.type === 'password' ? 'Show' : 'Hide';
  }
  else if (e.target.closest('.calendar-head>div>button')) {
    const title = $('.calendar-head h2');
    title.textContent = e.target.textContent.trim() === '‹' ? 'February 2026' : 'April 2026';
  }
  else {
    const plainButton = e.target.closest('button');
    const plainLink = e.target.closest('a:not([href])');
    const handledDirectly = plainButton?.matches('#menuBtn,#createBtn,#notificationBtn,#upgradeBtn,#modalClose,#cancelInvite,#sendInvite,#toast button,#inviteBtn,#exportBtn,.segmented button,.filter-popover button');
    if (plainButton && !handledDirectly) {
      plainButton.classList.add('button-feedback');
      setTimeout(() => plainButton.classList.remove('button-feedback'), 220);
      showToast(plainButton.getAttribute('aria-label') || plainButton.textContent.trim() || 'Action selected', 'The control responded successfully.');
    } else if (plainLink) showToast(plainLink.textContent.trim(), 'This view is ready to open.');
  }
});

document.addEventListener('change', e => {
  if (e.target.matches('#onlyUnread')) applyNotificationFilters();
});

document.addEventListener('input', e => {
  if (e.target.matches('.inline-search input')) filterVisibleContent(e.target);
});

$('#createBtn').addEventListener('click', () => renderPage('reports'));
$('#upgradeBtn').addEventListener('click', () => showToast('Nova Pro', 'Upgrade options are ready to review.'));
$('#notificationBtn').addEventListener('click', () => renderPage('notifications'));
$('#toast button').addEventListener('click', () => toast.classList.remove('show'));
$('#globalSearch').addEventListener('keydown', e => { if (e.key === 'Enter' && e.currentTarget.value.trim()) showToast('Search complete', `Matches for “${e.currentTarget.value.trim()}” are grouped by category.`); });
document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); $('#globalSearch').focus(); }
  if (e.key === 'Escape') { closeModal(); closeMenu(); }
});
window.addEventListener('popstate', () => renderPage(location.hash.slice(1) || 'dashboard', false));

renderPage(location.hash.slice(1) || 'dashboard', false);
