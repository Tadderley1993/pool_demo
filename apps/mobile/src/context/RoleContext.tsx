import React, { createContext, useContext, useState } from "react";

type Role = "driver" | "customer";

const RoleContext = createContext<{
  role: Role;
  setRole: (r: Role) => void;
}>({ role: "driver", setRole: () => {} });

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role>("driver");
  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  return useContext(RoleContext);
}
