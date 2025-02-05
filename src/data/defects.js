export const defects = [
    {
      id: 'broken-button',
      title: 'Broken Button',
      description: 'A functional defect where interactive elements fail to perform their intended actions.',
      example: 'Clicking the "Submit" button doesn\'t trigger any action or form submission.',
      impact: 'Users cannot complete essential tasks, leading to frustration and potential loss of data.',
      prevention: 'Implement thorough testing of all interactive elements, use automated testing for critical functionality.',
    },
    {
      id: 'auth-issues',
      title: 'Authentication/Authorization Issues',
      description: 'Security defects related to user access control and permissions.',
      example: 'Users can access restricted pages without logging in by directly entering URLs.',
      impact: 'Compromised security, unauthorized access to sensitive data, and potential data breaches.',
      prevention: 'Implement proper authentication middleware, regular security audits, and role-based access control.',
    },
    {
      id: 'data-handling',
      title: 'Data Handling Errors',
      description: 'Issues related to input validation and data processing.',
      example: 'The form accepts alphabetic characters in a phone number field or processes incorrect data formats.',
      impact: 'Data integrity issues, system errors, and potential security vulnerabilities.',
      prevention: 'Implement strong input validation, proper data sanitization, and comprehensive error handling.',
    },
    {
      id: 'ui-defects',
      title: 'UI Defects',
      description: 'Visual and layout issues that affect the user interface.',
      example: 'Misaligned elements, overlapping text, or broken layouts on different screen sizes.',
      impact: 'Poor user experience, reduced usability, and damaged brand reputation.',
      prevention: 'Follow UI/UX best practices, implement responsive design, and test across different devices.',
    },
    {
      id: 'performance',
      title: 'Performance Issues',
      description: 'Problems affecting system speed, responsiveness, and resource usage.',
      example: 'The page takes more than 5 seconds to load under normal conditions.',
      impact: 'User frustration, increased bounce rates, and lost business opportunities.',
      prevention: 'Optimize code and assets, implement caching, and regularly monitor performance metrics.',
    },
    {
      id: 'security',
      title: 'Security Vulnerabilities',
      description: 'Weaknesses that can be exploited to compromise system security.',
      example: 'Sensitive data like passwords are stored in plain text instead of being encrypted.',
      impact: 'Data breaches, unauthorized access, and compliance violations.',
      prevention: 'Regular security audits, encryption of sensitive data, and following security best practices.',
    },
    {
      id: 'compatibility',
      title: 'Compatibility Issues',
      description: 'Problems with system functionality across different platforms or browsers.',
      example: 'The website works in Chrome but breaks in Firefox or Safari.',
      impact: 'Limited accessibility, reduced user base, and maintenance challenges.',
      prevention: 'Cross-browser testing, following web standards, and progressive enhancement.',
    },
    {
      id: 'usability',
      title: 'Usability Problems',
      description: 'Issues that affect the ease of use and accessibility of the system.',
      example: 'The font is too small to read, or buttons are hard to click on mobile devices.',
      impact: 'Poor user experience, accessibility violations, and reduced user engagement.',
      prevention: 'User testing, following accessibility guidelines, and responsive design implementation.',
    },
    {
      id: 'business-logic',
      title: 'Incorrect Business Logic',
      description: 'Errors in implementing business rules and calculations.',
      example: 'Applying a discount code increases the total instead of reducing it.',
      impact: 'Financial losses, customer dissatisfaction, and business process disruption.',
      prevention: 'Thorough business requirement validation and comprehensive testing of business rules.',
    },
    {
      id: 'session-management',
      title: 'Session Management Issues',
      description: 'Problems with handling user sessions and state.',
      example: 'The user remains logged in after explicitly logging out.',
      impact: 'Security vulnerabilities and unauthorized access to user accounts.',
      prevention: 'Proper session handling, timeout implementation, and secure session storage.',
    },
    {
      id: 'navigation',
      title: 'Navigation Errors',
      description: 'Issues with website navigation and routing.',
      example: 'The "Back" button redirects to the wrong page.',
      impact: 'User confusion, poor navigation experience, and increased bounce rates.',
      prevention: 'Proper route management and thorough testing of navigation paths.',
    },
    {
      id: 'broken-image',
      title: 'Broken Image',
      description: 'Images that fail to load or display correctly.',
      example: 'Missing or corrupted image files resulting in broken image placeholders.',
      impact: 'Poor visual experience and reduced content effectiveness.',
      prevention: 'Regular content validation and proper image fallback handling.',
    },
    {
      id: 'state-management',
      title: 'Incorrect State Management',
      description: 'Issues with managing application state and data updates.',
      example: 'After deleting an item, the system still shows the item.',
      impact: 'Inconsistent user experience and data display issues.',
      prevention: 'Proper state management implementation and thorough testing of state updates.',
    },
    {
      id: 'unexpected-popups',
      title: 'Unexpected Pop-Ups/Alerts',
      description: 'Issues with modal dialogs and alert timing.',
      example: 'No confirmation before deleting an item.',
      impact: 'User frustration and accidental actions.',
      prevention: 'Consistent implementation of confirmation dialogs and user notifications.',
    },
  ];