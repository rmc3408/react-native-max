import colors from '../styles/colors';
import { Ionicons } from '@expo/vector-icons';

export const tabAllScreen = {
  headerStyle: { backgroundColor: colors.primary500 },
  headerTintColor: colors.white,
  tabBarActiveTintColor: colors.accent500,
  tabBarInactiveTintColor: colors.gray700,
  tabBarStyle: { backgroundColor: colors.primary500 },
};

export const AllExpensesScreen = {
  title: 'All Expenses',
  tabBarLabel: 'ALL',
  tabBarIcon: ({ color, size }) => <Ionicons name="calendar" size={size+6} color={color} />,
};

export const RecentExpensesScreen = {
  title: 'Recent Expenses',
  tabBarLabel: 'RECENT',
  tabBarIcon: ({ color, size }) => <Ionicons name="hourglass" size={size+6} color={color} />,
};
