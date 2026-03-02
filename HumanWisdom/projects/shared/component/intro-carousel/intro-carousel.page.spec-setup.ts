// Mock jQuery before bcswipe (imported by intro-carousel) loads
const mockJQuery: any = () => ({ bcSwipe: () => {}, carousel: () => {} });
mockJQuery.fn = { bcSwipe: function () {} } as any;
(window as any).jQuery = mockJQuery;
(window as any).$ = mockJQuery;
