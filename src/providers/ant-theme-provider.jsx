import { ConfigProvider } from "antd";

const AntThemeProvider = ({children}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#000000",
          colorInfo: "#000000"
        }
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AntThemeProvider;