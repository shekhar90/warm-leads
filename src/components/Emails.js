import { Col, Divider, Drawer, Row } from "antd";
import { useState } from "react";
const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);
const Email = (props) => {
  const { record } = props;
  
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <a onClick={showDrawer} key={`a-view-profile`}>
        View Emails
      </a>

      <Drawer
        width={640}
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
      >
        <p
          className="site-description-item-profile-p"
          style={{
            marginBottom: 24,
          }}
        >
          To: {record.email}
        </p>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Subject: How oneShot Autonomous Prospecting can help you"
              content="Zero touch prospecting, no need to invest in high-cost resources or expensive sales tool stacks."
            />
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Reply"
              content="Thanks for reaching out, I am interested to know more about OneShot could you please schedule an 1-1 to discuss this further."
            />
          </Col>
        </Row>
        
      </Drawer>
    </>
  );
};
export default Email;
