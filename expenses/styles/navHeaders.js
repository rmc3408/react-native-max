import colors from '../styles/colors';
import { Ionicons } from '@expo/vector-icons';

export const tabAllScreen = {
  headerStyle: { backgroundColor: colors.primary500 },
  headerTintColor: colors.white,
  tabBarActiveTintColor: colors.accent500,
  tabBarStyle: { backgroundColor: colors.primary500 },
};

export const AllExpensesScreen = {
  title: 'All Expenses',
  tabBarLabel: 'ALL',
  tabBarIcon: ({ color, size }) => <Ionicons name="calendar" size={size} color={color} />,
};

export const RecentExpensesScreen = {
  title: 'Recent Expenses',
  tabBarLabel: 'RECENT',
  tabBarIcon: ({ color, size }) => <Ionicons name="hourglass" color={color} size={size} />,
};

export const ManageExpenseScreen = {
  presentation: 'modal',
}