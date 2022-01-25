import React from 'react';

export default function Category() {
  const categoryList = [
    {
      title: 'Getting Started',
      description:
        ' New admin or new to Coplae? Find everything you need here to become a Coplae pro',
    },
    {
      title: 'Navigating Coplae',
      description: 'How to find your way around our platform',
    },
    {
      title: 'People',
      description: 'Managing your employees with Coplae',
    },
    {
      title: 'Permissions and Visibility',
      description: 'Deciding what your team can see and do in Coplae',
    },
    {
      title: 'Company',
      description: 'Setting up your company profile in Coplae',
    },
    {
      title: 'Integrations',
      description: 'Integrate Coplae with your other systems',
    },
    {
      title: 'Reviews',
      description:
        'Seamlessly run a review cycle in multiple directions across an entire organization',
    },
    {
      title: 'Goals',
      description: 'Drive performance across your company with goals and OKRs',
    },
    {
      title: 'Performance',
      description:
        '1:1s, Updates, Feedback and Praise that make continuous performance a reality',
    },
    {
      title: 'Engagement',
      description: 'Learn all about running an Engagement Survey with Coplae!',
    },
    {
      title: 'Grow',
      description: 'Learn more about Employee Growth and Career Development',
    },
    {
      title: 'Webinars',
      description:
        'Find Overview and Tool Specific Webinars that Explain Administering and Using Coplae Tools',
    },
  ];

  const categoryList2 = [
    {
      title: 'Mobile',
      description: 'How to use the Coplae Mobile App',
    },
    {
      title: 'Biling',
      description: 'Learn more about your Coplae Invoice',
    },
  ];

  const recentActivityList = [
    {
      title: 'Notifications',
      description: 'A List of Slack Notifications for Feedback',
      time: 'Article created 4 days ago',
    },
    {
      title: 'Feedback for Admins',
      description:
        'How to Customize Feedback Visibility Options for Your Organization',
      time: 'Article created 15 days ago',
    },
    {
      title: 'Overview',
      description: 'Is Coplae affected by the log4j vulnerability?',
      time: 'Article created 20 days ago',
    },
    {
      title: 'Onboarding Surveys',
      description: 'How to Submit an Onboarding Survey',
      time: 'Article created 25 days ago',
    },
    {
      title: 'Onboarding Surveys',
      description: 'Onboarding Survey Result Analytics',
      time: 'Article created 25 days ago',
    },
  ];

  return (
    <div className="my-10 mx-40 font-roboto">
      <p className="text-xl font-semibold pb-5">
        Browse Help Center by category
      </p>
      <div className="grid grid-cols-3 w-full gap-4">
        {categoryList.map((item, id) => (
          <div
            key={id}
            className="h-48 bg-themeBlue2 font-semibold text-center p-10  flex flex-col items-center justify-center cursor-pointer hover:border hover:border-themeBlue "
          >
            <p className="text-lg pb-2">{item.title}</p>
            <p className="flex-wrap text-sm  text-themeGray w-60">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 w-full gap-4 my-4">
        {categoryList2.map((item, id) => (
          <div
            key={id}
            className="h-48 bg-themeBlue2 font-semibold text-center p-10  flex flex-col items-center justify-center cursor-pointer hover:border hover:border-themeBlue "
          >
            <p className="text-lg pb-2">{item.title}</p>
            <p className="flex-wrap text-sm  text-themeGray w-60">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="py-4">
        <p className="text-lg font-semibold">Recent activity</p>
        {recentActivityList.map((item, id) => (
          <div className="flex justify-between items-center py-4" key={id}>
            <div className="space-y-1">
              <p className="font-semibold cursor-pointer hover:text-themeBlue w-max">
                {item.title}
              </p>
              <p className="text-sm text-themeGray cursor-pointer hover:text-themeBlue">
                {item.description}
              </p>
            </div>
            <p className="text-sm text-themeGray">{item.time}</p>
          </div>
        ))}
        <p className="text-sm text-themeBlue cursor-pointer pt-2">See more</p>
      </div>
    </div>
  );
}
