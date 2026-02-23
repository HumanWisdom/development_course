/**
 * Setup for daily-practice tests: bcswipe is imported by the component and requires jQuery.
 */
const mockJQuery = function () { return {}; };
(mockJQuery as any).fn = {};
(mockJQuery as any).extend = function () { return mockJQuery; };
(window as any).jQuery = (window as any).$ = mockJQuery;
