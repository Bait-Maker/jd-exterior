import { getUser } from "@/lib/supabase/sever";
import Content from "./Content";

const Footer = async () => {
  const user = await getUser();

  return <Content user={user} />;
};

export default Footer;
