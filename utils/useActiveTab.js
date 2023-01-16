import { useRouter } from "next/router";

export default function useActiveTab() {
  const { query } = useRouter();
  const activeTab = query.activeTab || "tab1";
  return activeTab;
}