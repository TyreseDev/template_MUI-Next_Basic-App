import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import { SvgIcon } from '@mui/material';

export const items = [
  {
    title: 'Home',
    path: '/',
    icon: (
      // <SvgIcon fontSize="small">
      //   <ChartBarIcon />
      // </SvgIcon>
      <img src="assets/home-3.svg"></img>
    )
  },
  {
    title: 'Submit Violations',
    path: '/customers',
    icon: (
      // <SvgIcon fontSize="small">
      //   <UsersIcon />
      // </SvgIcon>
      <img src="assets/scroll.svg"></img>

    )
  },
  {
    title: 'Whitelist',
    path: '/companies',
    icon: (
      // <SvgIcon fontSize="small">
      //   <ShoppingBagIcon />
      // </SvgIcon>
      <img src="assets/add-files.svg"></img>

    )
  },
  {
    title: 'Billing',
    path: '/account',
    icon: (
      // <SvgIcon fontSize="small">
      //   <UserIcon />
      // </SvgIcon>
      <img src="assets/questionnaire-tablet.svg"></img>
    )
  },
  {
    title: 'Affiliate Program',
    path: '/settings',
    icon: (
      // <SvgIcon fontSize="small">
      //   <CogIcon />
      // </SvgIcon>
      <img src="assets/graph-up.svg"></img>

    )
  },
  {
    title: 'Settings',
    path: '/auth/login',
    icon: (
      // <SvgIcon fontSize="small">
      //   <LockClosedIcon />
      // </SvgIcon>
      <img src="assets/setting-2.svg"></img>
    )
  },
  {
    title: 'FAQ',
    path: '/auth/register',
    icon: (
      // <SvgIcon fontSize="small">
      //   <UserPlusIcon />
      // </SvgIcon>
      <img src="assets/message-question.svg"></img>
    )
  },
  {
    title: 'Support',
    path: '/404',
    icon: (
      // <SvgIcon fontSize="small">
      //   <XCircleIcon />
      // </SvgIcon>
      <img src="assets/message-question.svg"></img>
    )
  }
];
