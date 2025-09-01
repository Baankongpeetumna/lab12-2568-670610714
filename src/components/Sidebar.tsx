import { NavLink as RouterNavLink } from "react-router-dom";
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";
interface SidebarProps {
  userName: string;
  type?: "admin" | "student";
}

export default function Sidebar({ userName, type }: SidebarProps) {
  return (
    // โค้ดเดิมทั้งหมด
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      {/* เมนู */}
      <Box>
        <NavLink
          color="cyan"
          label="Home"
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="cyan"
          label="About"
          component={RouterNavLink}
          to="/about"
        />
      </Box>

      {/* แสดงผู้ใช้งาน */}
      <Group gap="1">
        <Indicator
          inline
          size={12}
          offset={7}
          position="bottom-end"
          color="green"
          withBorder
        >
          <Avatar
            size="lg"
            radius="xl"
            src="baibua2.jpg"
            alt="it's me"
            style={{ marginLeft: 15 }}
          />
        </Indicator>

        <Box p={20}>
          <Text fw={700} fs="italic">User : {userName} : {type}</Text>
        </Box>
      </Group>
    </Stack>
  );
}
