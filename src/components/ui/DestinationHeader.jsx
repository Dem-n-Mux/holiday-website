import { Tabs } from "antd";
import InternationalPanel from "../global/InternationalPanel";
import DomesticPanel from "../global/DomesticPanel";


const DestinationHeader = ({ IntData, DomData }) => {

  const items = [
    {
      key: "1",
      label: "International",
      children: <InternationalPanel data={IntData} />,
    },
    {
      key: "2",
      label: "Domestic",
      children: <DomesticPanel data={DomData} />,
    },
  ];

  return (
    <div className="bg-white max-w-full py-8">
      <div className="container">
        <Tabs items={items} defaultActiveKey="1" tabPosition="left" />
      </div>
    </div>
  );
};

export default DestinationHeader;
