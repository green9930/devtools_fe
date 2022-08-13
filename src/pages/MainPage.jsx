import Layout from "components/layout/Layout";
import DevToolsList from "components/DevToolsList";
import DevTool from "components/DevTool";

const MainPage = () => {
  return (
    <Layout>
      <DevToolsList>
        <DevTool />
      </DevToolsList>
    </Layout>
  );
};

export default MainPage;
