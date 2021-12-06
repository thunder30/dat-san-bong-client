import React from 'react'
import { Row, Col, Button, Input, Radio } from 'antd'
import DefaultLayout from '../layout/DefaultLayout'
import { AimOutlined, FieldTimeOutlined,BorderOuterOutlined } from '@ant-design/icons'


const contentStyle = {
    maxWidth: 1100,
    margin: '0 auto',
    height: '100%',
}

function Checkout() {
    return (
        <DefaultLayout>
            <Row style={contentStyle}>
                <Col span={10} style={{padding:'5px'}}>
                    <h1 style={{ display: 'block', textAlign: 'center', fontSize: '200%' ,margin: '10px'}}>Thông tin người đặt</h1>
                    <h3 style={{ display: 'block', marginTop: '5%', marginLeft: '5px'}} >Họ và tên</h3>
                    <Input placeholder="Họ và tên" disabled={true}/>
                    <h3 style={{ display: 'block', marginTop: '15px', marginLeft: '5px'}} >Email</h3>
                    <Input placeholder="Email" disabled={true}/>
                    <h2 style={{ display: 'block', marginTop: '5%' }}>Phương thức thanh toán</h2>
                    <Paid />
                </Col>
                <Col span={12} offset={2} style={{backgroundColor: 'rgb(226 228 231)', padding:'10px', paddingLeft:"20px"}}>
                    <h1 style={{ display: 'block', textAlign: 'center', margin: '10px', fontSize: '200%' }}>Thông tin đặt sân</h1>
                    <Row>
                        <Col span={3}>
                            <AimOutlined style={{ fontSize: '400%', paddingTop:'10px'}}/>
                        </Col>
                        <Col span={15}>
                            <h2 style={{ display: 'block', marginTop: '5%'}} >Chi nhánh sân Bà Ba</h2>
                            <p style={{marginTop:'-10px'}}>số 123, phường 7, Quận 5, TP.HCM</p>
                        </Col>
                    </Row>
                    <hr width="90%" style={{margin:"20px"}}></hr>
                    <Row>
                        <Col span={2}>
                            <BorderOuterOutlined style={{ fontSize: '200%', paddingTop:'10px'}} />
                        </Col>
                        <Col span={12}>
                            <h3 style={{ marginTop: '5%'}}>Sân N3 (Sân 5)</h3>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={2}>
                            <FieldTimeOutlined style={{ fontSize: '200%', paddingTop:'10px'}}/>
                        </Col>
                        <Col span={12}>
                            <h3 style={{ display: 'block', marginTop: '5%'}} >Thời gian</h3>
                            <p style={{textbole:''}}>06/12/2021</p>
                            <p style={{marginTop:'-10px'}}>06:00 - 08:30</p>
                        </Col>
                    </Row>
                    <hr width="90%" style={{margin:"20px"}}></hr>
                    <Row>
                        <Col span={15} >
                        <h2 style={{ marginTop: '5%'}}>Tổng Giá:</h2>
                        </Col>
                        <Col span={9} >
                        <h2 style={{ marginTop: '5%'}}>1.100.000 VND</h2>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row justify="center" style={contentStyle}>
                <Col span={12} offset={6}>
                    <Button type="primary" size='large' style={{margin: '50px'}}>Xác nhận đặt sân &#8811;</Button>
                </Col>
            </Row>
        </DefaultLayout>
    )
}

const Paid = () => {
    const [value, setValue] = React.useState(1);
  
    const onChange = e => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
  
    return (
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1} style={{ display: 'block' }}>Thanh toán online</Radio>
        {/* <Radio value={2} style={{ display: 'block' }}>B</Radio> */}
      </Radio.Group>
    );
};

export default Checkout
