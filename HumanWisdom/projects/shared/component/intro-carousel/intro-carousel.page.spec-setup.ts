// Mock jQuery before bcswipe (imported by intro-carousel) loads
const mockJQuery: any = () => ({ bcSwipe: () => {}, carousel: () => {} });
mockJQuery.fn = {};
mockJQuery.fn.bcSwipe = function() {};
(window as any).jQuery = mockJQuery;
(window as any).$ = mockJQuery;
